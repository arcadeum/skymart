"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ERC1155RoyaltyMock__factory = void 0;
var ethers_1 = require("ethers");
var ERC1155RoyaltyMock__factory = /** @class */ (function (_super) {
    __extends(ERC1155RoyaltyMock__factory, _super);
    function ERC1155RoyaltyMock__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    ERC1155RoyaltyMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ERC1155RoyaltyMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ERC1155RoyaltyMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC1155RoyaltyMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC1155RoyaltyMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ERC1155RoyaltyMock__factory;
}(ethers_1.ContractFactory));
exports.ERC1155RoyaltyMock__factory = ERC1155RoyaltyMock__factory;
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "_approved",
                type: "bool"
            },
        ],
        name: "ApprovalForAll",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]"
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]"
            },
        ],
        name: "TransferBatch",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
        ],
        name: "TransferSingle",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "_uri",
                type: "string"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
        ],
        name: "URI",
        type: "event"
    },
    {
        stateMutability: "nonpayable",
        type: "fallback"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_owners",
                type: "address[]"
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]"
            },
        ],
        name: "balanceOfBatch",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "baseURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]"
            },
            {
                internalType: "uint256[]",
                name: "_values",
                type: "uint256[]"
            },
        ],
        name: "batchBurnMock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]"
            },
            {
                internalType: "uint256[]",
                name: "_values",
                type: "uint256[]"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "batchMintMock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            },
        ],
        name: "burnMock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "_operator",
                type: "address"
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "isOperator",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "mintMock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "royaltyFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "royaltyFee666",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_salePrice",
                type: "uint256"
            },
        ],
        name: "royaltyInfo",
        outputs: [
            {
                internalType: "address",
                name: "receiver",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "royaltyAmount",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "royaltyRecipient",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "royaltyRecipient666",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]"
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_fee",
                type: "uint256"
            },
        ],
        name: "set666Fee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_recipient",
                type: "address"
            },
        ],
        name: "set666FeeRecipient",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_operator",
                type: "address"
            },
            {
                internalType: "bool",
                name: "_approved",
                type: "bool"
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_fee",
                type: "uint256"
            },
        ],
        name: "setFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_recipient",
                type: "address"
            },
        ],
        name: "setFeeRecipient",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceID",
                type: "bytes4"
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
        ],
        name: "uri",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var _bytecode = "0x60806040523480156200001157600080fd5b50604080518082018252600b81526a546573744552433131353560a81b602080830191825283519081019093526000835281519192918391839162000059916003916200007a565b5080516200006f9060029060208401906200007a565b505050505062000126565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000b25760008555620000fd565b82601f10620000cd57805160ff1916838001178555620000fd565b82800160010185558215620000fd579182015b82811115620000fd578251825591602001919060010190620000e0565b506200010b9291506200010f565b5090565b5b808211156200010b576000815560010162000110565b61234780620001366000396000f3fe608060405234801561001057600080fd5b506004361061018c5760003560e01c806369fe0e2d116100e3578063b8997a971161008c578063e74b981b11610066578063e74b981b14610341578063e985e9c514610354578063f242432a146103675761018c565b8063b8997a9714610313578063bd7a6c411461031b578063d7a0ad901461032e5761018c565b80638932d586116100bd5780638932d586146102e5578063a22cb465146102ed578063a3f091f5146103005761018c565b806369fe0e2d146102b75780636bdb672c146102ca5780636c0360eb146102dd5761018c565b80632a55205a11610145578063437ecbe91161011f578063437ecbe91461027c5780634c00de821461028f5780634e1273f4146102975761018c565b80632a55205a146102335780632c132306146102545780632eb2c2d6146102695761018c565b806306fdde031161017657806306fdde03146101f65780630e89341c1461020b57806310e512ce1461021e5761018c565b8062fdd58e146101ad57806301ffc9a7146101d6575b60405162461bcd60e51b81526004016101a490612044565b60405180910390fd5b6101c06101bb366004611da5565b61037a565b6040516101cd91906120d8565b60405180910390f35b6101e96101e4366004611f14565b6103a3565b6040516101cd9190611fe6565b6101fe6103f0565b6040516101cd9190611ff1565b6101fe610219366004611f3c565b61047e565b61023161022c366004611f3c565b610577565b005b610246610241366004611f54565b61059d565b6040516101cd929190611f89565b61025c61061f565b6040516101cd9190611f75565b610231610277366004611b5c565b61062e565b61023161028a366004611dce565b6106eb565b61025c6106fb565b6102aa6102a5366004611e53565b61070a565b6040516101cd9190611fa2565b6102316102c5366004611f3c565b610822565b6102316102d8366004611b10565b610848565b6101fe610882565b6101c06108da565b6102316102fb366004611d6b565b6108e0565b61023161030e366004611e00565b61094e565b6101c0610960565b610231610329366004611c65565b610966565b61023161033c366004611cd6565b610971565b61023161034f366004611b10565b61097d565b6101e9610362366004611b2a565b6109b7565b610231610375366004611c02565b6109e5565b6001600160a01b0382166000908152602081815260408083208484529091529020545b92915050565b60006001600160e01b031982167f2a55205a0000000000000000000000000000000000000000000000000000000014156103df575060016103eb565b6103e882610a9b565b90505b919050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104765780601f1061044b57610100808354040283529160200191610476565b820191906000526020600020905b81548152906001019060200180831161045957829003601f168201915b505050505081565b6060600261048b83610aa6565b60405160200180838054600181600116156101000203166002900480156104e95780601f106104c75761010080835404028352918201916104e9565b820191906000526020600020905b8154815290600101906020018083116104d5575b5050825160208401908083835b602083106105155780518252601f1990920191602091820191016104f6565b5181516020939093036101000a60001901801990911692169190911790527f2e6a736f6e00000000000000000000000000000000000000000000000000000092019182525060408051808303601a190181526005909201905295945050505050565b61271081106105985760405162461bcd60e51b81526004016101a4906120a1565b600655565b6000808361029a14156105e45760006105cd6127106105c760065487610bb490919063ffffffff16565b90610c2a565b6007546001600160a01b0316935091506106189050565b60006106016127106105c760045487610bb490919063ffffffff16565b6005546001600160a01b0316935091506106189050565b9250929050565b6007546001600160a01b031681565b336001600160a01b038616148061064a575061064a85336109b7565b6106855760405162461bcd60e51b815260040180806020018281038252602f81526020018061223a602f913960400191505060405180910390fd5b6001600160a01b0384166106ca5760405162461bcd60e51b81526004018080602001828103825260308152602001806121ae6030913960400191505060405180910390fd5b6106d685858585610c94565b6106e4858585855a86610f3f565b5050505050565b6106f6838383611150565b505050565b6005546001600160a01b031681565b6060815183511461074c5760405162461bcd60e51b815260040180806020018281038252602c81526020018061220e602c913960400191505060405180910390fd5b6060835167ffffffffffffffff8111801561076657600080fd5b50604051908082528060200260200182016040528015610790578160200160208202803683370190505b50905060005b845181101561081a576000808683815181106107ae57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008583815181106107e457fe5b602002602001015181526020019081526020016000205482828151811061080757fe5b6020908102919091010152600101610796565b509392505050565b61271081106108435760405162461bcd60e51b81526004016101a4906120a1565b600455565b600780547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104765780601f1061044b57610100808354040283529160200191610476565b60065481565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61095a848484846111e1565b50505050565b60045481565b6106f683838361127c565b61095a84848484611447565b600580547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b0386161480610a015750610a0185336109b7565b610a3c5760405162461bcd60e51b815260040180806020018281038252602a81526020018061214f602a913960400191505060405180910390fd5b6001600160a01b038416610a815760405162461bcd60e51b815260040180806020018281038252602b815260200180612124602b913960400191505060405180910390fd5b610a8d8585858561161c565b6106e4858585855a866116f8565b60006103e882611883565b606081610ae7575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526103eb565b818060005b8215610b0057600101600a83049250610aec565b60608167ffffffffffffffff81118015610b1957600080fd5b506040519080825280601f01601f191660200182016040528015610b44576020820181803683370190505b50905060001982015b8315610baa57600a840660300160f81b82828060019003935081518110610b7057fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350610b4d565b5095945050505050565b600082610bc35750600061039d565b82820282848281610bd057fe5b0414610c23576040805162461bcd60e51b815260206004820152601660248201527f536166654d617468236d756c3a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b9392505050565b6000808211610c80576040805162461bcd60e51b815260206004820152601e60248201527f536166654d617468236469763a204449564953494f4e5f42595f5a45524f0000604482015290519081900360640190fd5b6000828481610c8b57fe5b04949350505050565b8051825114610cd45760405162461bcd60e51b81526004018080602001828103825260358152602001806121796035913960400191505060405180910390fd5b815160005b81811015610e5e57610d4f838281518110610cf057fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610d2a57fe5b60200260200101518152602001908152602001600020546118c890919063ffffffff16565b600080886001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610d8157fe5b6020026020010151815260200190815260200160002081905550610e09838281518110610daa57fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610de457fe5b602002602001015181526020019081526020016000205461192590919063ffffffff16565b600080876001600160a01b03166001600160a01b031681526020019081526020016000206000868481518110610e3b57fe5b602090810291909101810151825281019190915260400160002055600101610cd9565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610ee4578181015183820152602001610ecc565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610f23578181015183820152602001610f0b565b5050505090500194505050505060405180910390a45050505050565b610f51856001600160a01b031661197f565b15611148576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610fe2578181015183820152602001610fca565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015611021578181015183820152602001611009565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561105d578181015183820152602001611045565b50505050905090810190601f16801561108a5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b1580156110af57600080fd5b5087f11580156110c3573d6000803e3d6000fd5b50505050506040513d60208110156110da57600080fd5b505190506001600160e01b031981167fbc197c8100000000000000000000000000000000000000000000000000000000146111465760405162461bcd60e51b815260040180806020018281038252603f815260200180612299603f913960400191505060405180910390fd5b505b505050505050565b6001600160a01b03831660009081526020818152604080832085845290915290205461117c90826118c8565b6001600160a01b03841660008181526020818152604080832087845282528083209490945583518681529081018590528351919333927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629281900390910190a4505050565b6001600160a01b03841660009081526020818152604080832086845290915290205461120d9083611925565b6001600160a01b038516600081815260208181526040808320888452825280832094909455835187815290810186905283519293919233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62928290030190a461095a60008585855a866116f8565b8151815181146112bd5760405162461bcd60e51b81526004018080602001828103825260308152602001806121de6030913960400191505060405180910390fd5b60005b81811015611366576113118382815181106112d757fe5b6020026020010151600080886001600160a01b03166001600160a01b031681526020019081526020016000206000878581518110610d2a57fe5b600080876001600160a01b03166001600160a01b03168152602001908152602001600020600086848151811061134357fe5b6020908102919091018101518252810191909152604001600020556001016112c0565b5060006001600160a01b0316846001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156113ed5781810151838201526020016113d5565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561142c578181015183820152602001611414565b5050505090500194505050505060405180910390a450505050565b81518351146114875760405162461bcd60e51b81526004018080602001828103825260308152602001806122696030913960400191505060405180910390fd5b825160005b81811015611532576114dd8482815181106114a357fe5b6020026020010151600080896001600160a01b03166001600160a01b031681526020019081526020016000206000888581518110610de457fe5b600080886001600160a01b03166001600160a01b03168152602001908152602001600020600087848151811061150f57fe5b60209081029190910181015182528101919091526040016000205560010161148c565b50846001600160a01b031660006001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156115b95781810151838201526020016115a1565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156115f85781810151838201526020016115e0565b5050505090500194505050505060405180910390a46106e460008686865a87610f3f565b6001600160a01b03841660009081526020818152604080832085845290915290205461164890826118c8565b6001600160a01b038086166000908152602081815260408083208784528252808320949094559186168152808252828120858252909152205461168b9082611925565b6001600160a01b03808516600081815260208181526040808320888452825291829020949094558051868152938401859052805191939288169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a450505050565b61170a856001600160a01b031661197f565b15611148576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561179c578181015183820152602001611784565b50505050905090810190601f1680156117c95780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b1580156117ec57600080fd5b5087f1158015611800573d6000803e3d6000fd5b50505050506040513d602081101561181757600080fd5b505190506001600160e01b031981167ff23a6e6100000000000000000000000000000000000000000000000000000000146111465760405162461bcd60e51b815260040180806020018281038252603a8152602001806122d8603a913960400191505060405180910390fd5b60006001600160e01b031982167f0e89341c0000000000000000000000000000000000000000000000000000000014156118bf575060016103eb565b6103e8826119b6565b60008282111561191f576040805162461bcd60e51b815260206004820152601760248201527f536166654d617468237375623a20554e444552464c4f57000000000000000000604482015290519081900360640190fd5b50900390565b600082820183811015610c23576040805162461bcd60e51b815260206004820152601660248201527f536166654d617468236164643a204f564552464c4f5700000000000000000000604482015290519081900360640190fd5b6000813f8015801590610c2357507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141592915050565b60006001600160e01b031982167fd9b67a260000000000000000000000000000000000000000000000000000000014156119f2575060016103eb565b7f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146103e8565b80356001600160a01b03811681146103eb57600080fd5b600082601f830112611a4b578081fd5b8135611a5e611a5982612105565b6120e1565b818152915060208083019084810181840286018201871015611a7f57600080fd5b60005b84811015611a9e57813584529282019290820190600101611a82565b505050505092915050565b600082601f830112611ab9578081fd5b813567ffffffffffffffff811115611acd57fe5b611ae0601f8201601f19166020016120e1565b9150808252836020828501011115611af757600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215611b21578081fd5b610c2382611a24565b60008060408385031215611b3c578081fd5b611b4583611a24565b9150611b5360208401611a24565b90509250929050565b600080600080600060a08688031215611b73578081fd5b611b7c86611a24565b9450611b8a60208701611a24565b9350604086013567ffffffffffffffff80821115611ba6578283fd5b611bb289838a01611a3b565b94506060880135915080821115611bc7578283fd5b611bd389838a01611a3b565b93506080880135915080821115611be8578283fd5b50611bf588828901611aa9565b9150509295509295909350565b600080600080600060a08688031215611c19578081fd5b611c2286611a24565b9450611c3060208701611a24565b93506040860135925060608601359150608086013567ffffffffffffffff811115611c59578182fd5b611bf588828901611aa9565b600080600060608486031215611c79578283fd5b611c8284611a24565b9250602084013567ffffffffffffffff80821115611c9e578384fd5b611caa87838801611a3b565b93506040860135915080821115611cbf578283fd5b50611ccc86828701611a3b565b9150509250925092565b60008060008060808587031215611ceb578384fd5b611cf485611a24565b9350602085013567ffffffffffffffff80821115611d10578485fd5b611d1c88838901611a3b565b94506040870135915080821115611d31578384fd5b611d3d88838901611a3b565b93506060870135915080821115611d52578283fd5b50611d5f87828801611aa9565b91505092959194509250565b60008060408385031215611d7d578182fd5b611d8683611a24565b915060208301358015158114611d9a578182fd5b809150509250929050565b60008060408385031215611db7578182fd5b611dc083611a24565b946020939093013593505050565b600080600060608486031215611de2578283fd5b611deb84611a24565b95602085013595506040909401359392505050565b60008060008060808587031215611e15578384fd5b611e1e85611a24565b93506020850135925060408501359150606085013567ffffffffffffffff811115611e47578182fd5b611d5f87828801611aa9565b60008060408385031215611e65578182fd5b823567ffffffffffffffff80821115611e7c578384fd5b818501915085601f830112611e8f578384fd5b8135611e9d611a5982612105565b80828252602080830192508086018a828387028901011115611ebd578889fd5b8896505b84871015611ee657611ed281611a24565b845260019690960195928101928101611ec1565b509096508701359350505080821115611efd578283fd5b50611f0a85828601611a3b565b9150509250929050565b600060208284031215611f25578081fd5b81356001600160e01b031981168114610c23578182fd5b600060208284031215611f4d578081fd5b5035919050565b60008060408385031215611f66578182fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b81811015611fda57835183529284019291840191600101611fbe565b50909695505050505050565b901515815260200190565b6000602080835283518082850152825b8181101561201d57858101830151858201604001528201612001565b8181111561202e5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526027908201527f455243313135354d6574614d696e744275726e4d6f636b3a20494e56414c494460408201527f5f4d4554484f4400000000000000000000000000000000000000000000000000606082015260800190565b6020808252600f908201527f46454520495320544f4f20484947480000000000000000000000000000000000604082015260600190565b90815260200190565b60405181810167ffffffffffffffff811182821017156120fd57fe5b604052919050565b600067ffffffffffffffff82111561211957fe5b506020908102019056fe4552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e544552433131353523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f5245524331313535235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135354d696e744275726e2362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135352362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e47544845524331313535237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e2362617463684d696e743a20494e56414c49445f4152524159535f4c454e47544845524331313535235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d45535341474545524331313535235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745a264697066735822122009b53bcf54cf218f595b812a114d1981dad5ed1655691288162274a5897450e264736f6c63430007040033";
