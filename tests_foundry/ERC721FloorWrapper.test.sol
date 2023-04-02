// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.4;

import {ERC721FloorWrapper} from "src/contracts/wrappers/ERC721FloorWrapper.sol";
import {ERC721FloorFactory} from "src/contracts/wrappers/ERC721FloorFactory.sol";
import {ERC721Mock} from "src/contracts/mocks/ERC721Mock.sol";
import {ERC1155Mock} from "src/contracts/mocks/ERC1155Mock.sol";
import {ERC20TokenMock} from "src/contracts/mocks/ERC20TokenMock.sol";
import {INiftyswapExchange} from "src/contracts/interfaces/INiftyswapExchange.sol";
import {INiftyswapExchange20} from "src/contracts/interfaces/INiftyswapExchange20.sol";
import {NiftyswapFactory} from "src/contracts/exchange/NiftyswapFactory.sol";
import {NiftyswapFactory20} from "src/contracts/exchange/NiftyswapFactory20.sol";
import {WrapperErrors} from "src/contracts/utils/WrapperErrors.sol";

import {USER, OPERATOR} from "./utils/Constants.test.sol";
import {NiftyswapTestHelper} from "./utils/NiftyswapTestHelper.test.sol";
import {Niftyswap20TestHelper} from "./utils/Niftyswap20TestHelper.test.sol";
import {TestHelperBase} from "./utils/TestHelperBase.test.sol";

import {console} from "forge-std/Test.sol";
import {stdError} from "forge-std/StdError.sol";

contract ERC721FloorWrapperTest is TestHelperBase, WrapperErrors {
    // Redeclare events
    event TokensDeposited(uint256[] tokenIds);
    event TokensWithdrawn(uint256[] tokenIds);

    ERC721FloorWrapper private wrapper;
    address private wrapperAddr;
    ERC721Mock private erc721;
    uint256 private wrapperTokenId;

    function setUp() external {
        erc721 = new ERC721Mock();

        wrapper = new ERC721FloorWrapper();
        wrapper.initialize(address(erc721));
        wrapperAddr = address(wrapper);
        wrapperTokenId = wrapper.TOKEN_ID();

        // Give tokens
        erc721.mintMock(USER, 5);
        erc721.mintMock(OPERATOR, 5);

        // Approvals
        vm.prank(USER);
        erc721.setApprovalForAll(wrapperAddr, true);
        vm.prank(OPERATOR);
        erc721.setApprovalForAll(wrapperAddr, true);
    }

    //
    // Initialization
    //
    function test_initialize_invalid() public {
        wrapper = new ERC721FloorWrapper();

        // Invalid caller
        vm.expectRevert(InvalidInitialization.selector);
        vm.prank(USER);
        wrapper.initialize(address(erc721));

        // Correct
        wrapper.initialize(address(erc721));

        // Already init
        vm.expectRevert(InvalidInitialization.selector);
        wrapper.initialize(address(erc721));
    }

    //
    // Deposit
    //
    function test_deposit_happyPath() public {
        uint256 beforeERC1155UserBal = wrapper.balanceOf(USER, wrapperTokenId);
        uint256 beforeERC721WrapperBal = erc721.balanceOf(wrapperAddr);
        uint256 beforeERC721UserBal = erc721.balanceOf(USER);

        uint256[] memory tokenIds = new uint256[](1);
        tokenIds[0] = erc721.ownerOf(0) == USER ? 0 : 1; // Use 0 or 1

        vm.prank(USER);
        vm.expectEmit(true, true, true, true, wrapperAddr);
        emit TokensDeposited(tokenIds);
        startMeasuringGas("Deposit 1");
        wrapper.deposit(tokenIds, USER, "");
        stopMeasuringGas();

        assertEq(beforeERC1155UserBal + 1, wrapper.balanceOf(USER, wrapperTokenId));
        assertEq(beforeERC721WrapperBal + 1, erc721.balanceOf(wrapperAddr));
        assertEq(beforeERC721UserBal - 1, erc721.balanceOf(USER));
    }

    function test_deposit_happyPathWithFactory() public withFactoryCreatedWrapper {
        test_deposit_happyPath();
    }

    function test_deposit_toRecipient() public {
        uint256 beforeERC1155OperatorBal = wrapper.balanceOf(OPERATOR, wrapperTokenId);
        uint256 beforeERC721WrapperBal = erc721.balanceOf(wrapperAddr);
        uint256 beforeERC721UserBal = erc721.balanceOf(USER);

        uint256[] memory tokenIds = new uint256[](1);
        tokenIds[0] = 0;

        vm.prank(USER);
        vm.expectEmit(true, true, true, true, wrapperAddr);
        emit TokensDeposited(tokenIds);
        wrapper.deposit(tokenIds, OPERATOR, "");

        assertEq(beforeERC1155OperatorBal + 1, wrapper.balanceOf(OPERATOR, wrapperTokenId));
        assertEq(beforeERC721WrapperBal + 1, erc721.balanceOf(wrapperAddr));
        assertEq(beforeERC721UserBal - 1, erc721.balanceOf(USER));
    }

    function test_deposit_twice() external {
        test_deposit_happyPath();
        test_deposit_happyPath();
    }

    function test_deposit_five() external {
        uint256 beforeERC1155UserBal = wrapper.balanceOf(USER, wrapperTokenId);
        uint256 beforeERC721WrapperBal = erc721.balanceOf(wrapperAddr);
        uint256 beforeERC721UserBal = erc721.balanceOf(USER);

        uint256[] memory tokenIds = new uint256[](5);
        tokenIds[0] = 0;
        tokenIds[1] = 1;
        tokenIds[2] = 2;
        tokenIds[3] = 3;
        tokenIds[4] = 4;

        vm.prank(USER);
        vm.expectEmit(true, true, true, true, wrapperAddr);
        emit TokensDeposited(tokenIds);
        startMeasuringGas("Deposit 5");
        wrapper.deposit(tokenIds, USER, "");
        stopMeasuringGas();

        assertEq(beforeERC1155UserBal + 5, wrapper.balanceOf(USER, wrapperTokenId));
        assertEq(beforeERC721WrapperBal + 5, erc721.balanceOf(wrapperAddr));
        assertEq(beforeERC721UserBal - 5, erc721.balanceOf(USER));
    }

    function test_deposit_duplicateFails() external {
        uint256[] memory tokenIds = new uint256[](2);
        tokenIds[0] = 0;
        tokenIds[1] = 0;

        vm.prank(USER);
        vm.expectRevert("ERC721: transfer from incorrect owner");
        wrapper.deposit(tokenIds, USER, "");
    }

    function test_deposit_wrongOwner() external {
        uint256[] memory tokenIds = new uint256[](2);
        tokenIds[0] = 0;
        tokenIds[1] = 5;

        vm.prank(USER);
        vm.expectRevert("ERC721: transfer from incorrect owner");
        wrapper.deposit(tokenIds, USER, "");
    }

    function test_deposit_andSell() public withDeposit {
        // Niftyswap
        ERC1155Mock currency = new ERC1155Mock();
        address currencyAddr = address(currency);
        NiftyswapFactory factory = new NiftyswapFactory();
        // Wrapped tokens are never currency
        factory.createExchange(wrapperAddr, currencyAddr, 0);
        address exchangeAddr = factory.tokensToExchange(wrapperAddr, currencyAddr, 0);
        uint256[] memory types = new uint256[](1);
        types[0] = wrapperTokenId;
        withERC1155Liquidity(currency, exchangeAddr, types);
        // Sell data
        uint256[] memory sellAmounts = new uint256[](1);
        sellAmounts[0] = 2;
        uint256[] memory prices = INiftyswapExchange(exchangeAddr).getPrice_tokenToCurrency(types, sellAmounts);

        // Before bals
        uint256 beforeERC1155UserBal = wrapper.balanceOf(USER, wrapperTokenId);
        uint256 beforeERC721WrapperBal = erc721.balanceOf(wrapperAddr);
        uint256 beforeERC721UserBal = erc721.balanceOf(USER);
        uint256 beforeCurrencyUserBal = currency.balanceOf(USER, 0);

        // Deposit and sell
        uint256[] memory tokenIds = new uint256[](2);
        tokenIds[0] = 2;
        tokenIds[1] = 3;
        vm.prank(USER);
        wrapper.deposit(tokenIds, exchangeAddr, NiftyswapTestHelper.encodeSellTokens(USER, prices[0], block.timestamp));

        // After bals
        assertEq(beforeERC1155UserBal, wrapper.balanceOf(USER, wrapperTokenId));
        assertEq(beforeERC721WrapperBal + 2, erc721.balanceOf(wrapperAddr));
        assertEq(beforeERC721UserBal - 2, erc721.balanceOf(USER));
        assertEq(beforeCurrencyUserBal + prices[0], currency.balanceOf(USER, 0));
    }

    function test_deposit_andSell20() public withDeposit {
        // Niftyswap
        ERC20TokenMock currency = new ERC20TokenMock();
        address currencyAddr = address(currency);
        NiftyswapFactory20 factory = new NiftyswapFactory20(address(this));
        // Wrapped tokens are never currency
        factory.createExchange(wrapperAddr, currencyAddr, 0, 0);
        address exchangeAddr = factory.tokensToExchange(wrapperAddr, currencyAddr, 0, 0);
        uint256[] memory types = new uint256[](1);
        types[0] = wrapperTokenId;
        withERC20Liquidity(currency, exchangeAddr, types);
        // Sell data
        uint256[] memory sellAmounts = new uint256[](1);
        sellAmounts[0] = 2;
        uint256[] memory prices = INiftyswapExchange(exchangeAddr).getPrice_tokenToCurrency(types, sellAmounts);

        // Before bals
        uint256 beforeERC1155UserBal = wrapper.balanceOf(USER, wrapperTokenId);
        uint256 beforeERC721WrapperBal = erc721.balanceOf(wrapperAddr);
        uint256 beforeERC721UserBal = erc721.balanceOf(USER);
        uint256 beforeCurrencyUserBal = currency.balanceOf(USER);

        // Deposit and sell
        uint256[] memory tokenIds = new uint256[](2);
        tokenIds[0] = 2;
        tokenIds[1] = 3;
        vm.prank(USER);
        wrapper.deposit(
            tokenIds,
            exchangeAddr,
            Niftyswap20TestHelper.encodeSellTokens(USER, prices[0], new address[](0), new uint256[](0), block.timestamp)
        );

        // After bals
        assertEq(beforeERC1155UserBal, wrapper.balanceOf(USER, wrapperTokenId));
        assertEq(beforeERC721WrapperBal + 2, erc721.balanceOf(wrapperAddr));
        assertEq(beforeERC721UserBal - 2, erc721.balanceOf(USER));
        assertEq(beforeCurrencyUserBal + prices[0], currency.balanceOf(USER));
    }

    //
    // Withdraw
    //
    function test_withdraw_happyPath() public withDeposit {
        uint256 beforeERC1155UserBal = wrapper.balanceOf(USER, wrapperTokenId);
        uint256 beforeERC721WrapperBal = erc721.balanceOf(wrapperAddr);
        uint256 beforeERC721UserBal = erc721.balanceOf(USER);

        uint256[] memory tokenIds = new uint256[](1);
        tokenIds[0] = 0;

        vm.prank(USER);
        vm.expectEmit(true, true, true, true, wrapperAddr);
        emit TokensWithdrawn(tokenIds);
        startMeasuringGas("Withdraw 1");
        wrapper.withdraw(tokenIds, USER, "");
        stopMeasuringGas();

        assertEq(beforeERC1155UserBal - 1, wrapper.balanceOf(USER, wrapperTokenId));
        assertEq(beforeERC721WrapperBal - 1, erc721.balanceOf(wrapperAddr));
        assertEq(beforeERC721UserBal + 1, erc721.balanceOf(USER));
    }

    function test_withdraw_happyPathWithFactory() public withFactoryCreatedWrapper {
        test_withdraw_happyPath();
    }

    function test_withdraw_toRecipient() external withDeposit {
        uint256 beforeERC1155UserBal = wrapper.balanceOf(USER, wrapperTokenId);
        uint256 beforeERC721WrapperBal = erc721.balanceOf(wrapperAddr);
        uint256 beforeERC721OperatorBal = erc721.balanceOf(OPERATOR);

        uint256[] memory tokenIds = new uint256[](1);
        tokenIds[0] = 0;

        vm.prank(USER);
        vm.expectEmit(true, true, true, true, wrapperAddr);
        emit TokensWithdrawn(tokenIds);
        wrapper.withdraw(tokenIds, OPERATOR, "");

        assertEq(beforeERC1155UserBal - 1, wrapper.balanceOf(USER, wrapperTokenId));
        assertEq(beforeERC721WrapperBal - 1, erc721.balanceOf(wrapperAddr));
        assertEq(beforeERC721OperatorBal + 1, erc721.balanceOf(OPERATOR));
    }

    function test_withdraw_undepositedToken() external withDeposit {
        uint256[] memory tokenIds = new uint256[](1);
        tokenIds[0] = 4;

        vm.prank(USER);
        vm.expectRevert("ERC721: transfer from incorrect owner");
        wrapper.withdraw(tokenIds, USER, "");
    }

    function test_withdraw_twice() external {
        test_withdraw_happyPath();

        uint256 beforeERC1155UserBal = wrapper.balanceOf(USER, wrapperTokenId);
        uint256 beforeERC721WrapperBal = erc721.balanceOf(wrapperAddr);
        uint256 beforeERC721OperatorBal = erc721.balanceOf(OPERATOR);

        uint256[] memory tokenIds = new uint256[](1);
        tokenIds[0] = 1;

        vm.prank(USER);
        vm.expectEmit(true, true, true, true, wrapperAddr);
        emit TokensWithdrawn(tokenIds);
        wrapper.withdraw(tokenIds, OPERATOR, "");

        assertEq(beforeERC1155UserBal - 1, wrapper.balanceOf(USER, wrapperTokenId));
        assertEq(beforeERC721WrapperBal - 1, erc721.balanceOf(wrapperAddr));
        assertEq(beforeERC721OperatorBal + 1, erc721.balanceOf(OPERATOR));
    }

    function test_withdraw_two() external withDeposit {
        uint256 beforeERC1155UserBal = wrapper.balanceOf(USER, wrapperTokenId);
        uint256 beforeERC721WrapperBal = erc721.balanceOf(wrapperAddr);
        uint256 beforeERC721UserBal = erc721.balanceOf(USER);

        uint256[] memory tokenIds = new uint256[](2);
        tokenIds[0] = 0;
        tokenIds[1] = 1;

        vm.prank(USER);
        vm.expectEmit(true, true, true, true, wrapperAddr);
        emit TokensWithdrawn(tokenIds);
        startMeasuringGas("Withdraw 2");
        wrapper.withdraw(tokenIds, USER, "");
        stopMeasuringGas();

        assertEq(beforeERC1155UserBal - 2, wrapper.balanceOf(USER, wrapperTokenId));
        assertEq(beforeERC721WrapperBal - 2, erc721.balanceOf(wrapperAddr));
        assertEq(beforeERC721UserBal + 2, erc721.balanceOf(USER));
    }

    function test_withdraw_insufficientBalance() external {
        uint256[] memory tokenIds = new uint256[](1);
        tokenIds[0] = 0;

        vm.prank(USER);
        vm.expectRevert(stdError.arithmeticError);
        wrapper.withdraw(tokenIds, USER, "");
    }

    //
    // Helpers
    //
    modifier withFactoryCreatedWrapper() {
        // Recreate wrapper through factory
        ERC721FloorFactory factory = new ERC721FloorFactory(address(this));
        wrapper = ERC721FloorWrapper(factory.createWrapper(address(erc721)));
        wrapperAddr = address(wrapper);
        wrapperTokenId = wrapper.TOKEN_ID();

        // Approvals
        vm.prank(USER);
        erc721.setApprovalForAll(wrapperAddr, true);
        vm.prank(OPERATOR);
        erc721.setApprovalForAll(wrapperAddr, true);

        _;
    }

    modifier withDeposit() {
        uint256[] memory tokenIds = new uint256[](2);

        tokenIds[0] = 0;
        tokenIds[1] = 1;
        vm.prank(USER);
        wrapper.deposit(tokenIds, USER, "");

        tokenIds[0] = 5;
        tokenIds[1] = 6;
        vm.prank(OPERATOR);
        wrapper.deposit(tokenIds, OPERATOR, "");
        _;
    }

    function withERC1155Liquidity(ERC1155Mock erc1155Mock, address exchangeAddr, uint256[] memory types) private {
        // Mint tokens
        erc1155Mock.mintMock(OPERATOR, 0, 1000000001, "");
        erc1155Mock.mintMock(USER, 0, 1000000001, "");

        // Approvals
        vm.prank(OPERATOR);
        erc1155Mock.setApprovalForAll(exchangeAddr, true);
        vm.prank(USER);
        erc1155Mock.setApprovalForAll(exchangeAddr, true);

        // Liquidity
        uint256[] memory currencyToAdd = new uint256[](1);
        currencyToAdd[0] = 1000000001;
        uint256[] memory tokensToAdd = new uint256[](1);
        tokensToAdd[0] = 2;
        vm.prank(OPERATOR);
        wrapper.safeBatchTransferFrom(
            OPERATOR,
            exchangeAddr,
            types,
            tokensToAdd,
            NiftyswapTestHelper.encodeAddLiquidity(currencyToAdd, block.timestamp)
        );
    }

    function withERC20Liquidity(ERC20TokenMock currency, address exchangeAddr, uint256[] memory types) private {
        uint256 tokenAmt = 1000000001;
        // Mint tokens
        currency.mockMint(OPERATOR, tokenAmt);
        currency.mockMint(USER, tokenAmt);

        // Approvals
        vm.prank(OPERATOR);
        currency.approve(exchangeAddr, tokenAmt);
        vm.prank(USER);
        currency.approve(exchangeAddr, tokenAmt);

        // Liquidity
        uint256[] memory currencyToAdd = new uint256[](1);
        currencyToAdd[0] = tokenAmt;
        uint256[] memory tokensToAdd = new uint256[](1);
        tokensToAdd[0] = 2;
        vm.prank(OPERATOR);
        wrapper.safeBatchTransferFrom(
            OPERATOR,
            exchangeAddr,
            types,
            tokensToAdd,
            Niftyswap20TestHelper.encodeAddLiquidity(currencyToAdd, block.timestamp)
        );
    }

    /**
     * Skip a test.
     */
    modifier skipTest() {
        // solhint-disable-next-line no-console
        console.log("Test skipped");
        if (false) {
            // Required for compiler
            _;
        }
    }
}
