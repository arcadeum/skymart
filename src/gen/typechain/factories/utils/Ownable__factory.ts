/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../common'
import type { Ownable, OwnableInterface } from '../../utils/Ownable'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_firstOwner',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    inputs: [],
    name: 'getOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const

const _bytecode =
  '0x608060405234801561001057600080fd5b5060405161033638038061033683398101604081905261002f9161007d565b600080546001600160a01b0319166001600160a01b03831690811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100ad565b60006020828403121561008f57600080fd5b81516001600160a01b03811681146100a657600080fd5b9392505050565b61027a806100bc6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063f2fde38b14610067575b600080fd5b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61007a610075366004610207565b61007c565b005b60005473ffffffffffffffffffffffffffffffffffffffff16331461010e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460448201527f5f4f574e4552000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166101975760405162461bcd60e51b815260206004820152602a60248201527f4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c60448201527f49445f41444452455353000000000000000000000000000000000000000000006064820152608401610105565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b60006020828403121561021957600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461023d57600080fd5b939250505056fea26469706673582212205339143fa463106ef36cb83ac6605080c9d184f73d49d5b208c37f9fac55266e64736f6c63430008100033'

type OwnableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: OwnableConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Ownable__factory extends ContractFactory {
  constructor(...args: OwnableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    _firstOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Ownable> {
    return super.deploy(_firstOwner, overrides || {}) as Promise<Ownable>
  }
  override getDeployTransaction(
    _firstOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_firstOwner, overrides || {})
  }
  override attach(address: string): Ownable {
    return super.attach(address) as Ownable
  }
  override connect(signer: Signer): Ownable__factory {
    return super.connect(signer) as Ownable__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): OwnableInterface {
    return new utils.Interface(_abi) as OwnableInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ownable {
    return new Contract(address, _abi, signerOrProvider) as Ownable
  }
}
