/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Ownable } from "../Ownable";

export class Ownable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _firstOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Ownable> {
    return super.deploy(_firstOwner, overrides || {}) as Promise<Ownable>;
  }
  getDeployTransaction(
    _firstOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_firstOwner, overrides || {});
  }
  attach(address: string): Ownable {
    return super.attach(address) as Ownable;
  }
  connect(signer: Signer): Ownable__factory {
    return super.connect(signer) as Ownable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Ownable {
    return new Contract(address, _abi, signerOrProvider) as Ownable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_firstOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102f33803806102f383398101604081905261002f9161007d565b600080546001600160a01b0319166001600160a01b03831690811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100ab565b60006020828403121561008e578081fd5b81516001600160a01b03811681146100a4578182fd5b9392505050565b610239806100ba6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063f2fde38b14610059575b600080fd5b61004361006e565b604051610050919061015f565b60405180910390f35b61006c610067366004610131565b61007d565b005b6000546001600160a01b031690565b6000546001600160a01b031633146100b05760405162461bcd60e51b81526004016100a7906101bd565b60405180910390fd5b6001600160a01b0381166100d65760405162461bcd60e51b81526004016100a790610173565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383811691821780845560405192939116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b600060208284031215610142578081fd5b81356001600160a01b0381168114610158578182fd5b9392505050565b6001600160a01b0391909116815260200190565b6020808252602a908201527f4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c60408201526949445f4144445245535360b01b606082015260800190565b60208082526026908201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f546040820152652fa7aba722a960d11b60608201526080019056fea2646970667358221220e057fb0a096458c683c9532dc2a57ba6cb14cb0b4baff554f56f1a9bfded0d6964736f6c63430007040033";
