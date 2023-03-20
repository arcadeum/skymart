/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../common'
import type { ERC1155PackedBalanceMock, ERC1155PackedBalanceMockInterface } from '../../mocks/ERC1155PackedBalanceMock'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_operator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: '_approved',
        type: 'bool'
      }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_operator',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: '_amounts',
        type: 'uint256[]'
      }
    ],
    name: 'TransferBatch',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_operator',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      }
    ],
    name: 'TransferSingle',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: '_uri',
        type: 'string'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'URI',
    type: 'event'
  },
  {
    stateMutability: 'nonpayable',
    type: 'fallback'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_owners',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      }
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'baseURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: '_values',
        type: 'uint256[]'
      }
    ],
    name: 'batchBurnMock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: '_values',
        type: 'uint256[]'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'batchMintMock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256'
      }
    ],
    name: 'burnMock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'getIDBinIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: 'bin',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_binValues',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256'
      }
    ],
    name: 'getValueInBin',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_operator',
        type: 'address'
      }
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: 'isOperator',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'mintMock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: '_amounts',
        type: 'uint256[]'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_operator',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: '_approved',
        type: 'bool'
      }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: '_interfaceID',
        type: 'bytes4'
      }
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256'
      }
    ],
    name: 'uri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020016a546573744552433131353560a81b815250604051806020016040528060008152508181816003908162000059919062000118565b50600262000068828262000118565b5050505050620001e4565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200009e57607f821691505b602082108103620000bf57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011357600081815260208120601f850160051c81016020861015620000ee5750805b601f850160051c820191505b818110156200010f57828155600101620000fa565b5050505b505050565b81516001600160401b0381111562000134576200013462000073565b6200014c8162000145845462000089565b84620000c5565b602080601f8311600181146200018457600084156200016b5750858301515b600019600386901b1c1916600185901b1785556200010f565b600085815260208120601f198616915b82811015620001b55788860151825594840194600190910190840162000194565b5085821015620001d45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61249d80620001f46000396000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063a22cb46511610097578063db90e83c11610066578063db90e83c1461027f578063e985e9c5146102a7578063eaec5f81146102e3578063f242432a146102f6576100ff565b8063a22cb46514610233578063a3f091f514610246578063bd7a6c4114610259578063d7a0ad901461026c576100ff565b80632eb2c2d6116100d35780632eb2c2d6146101e3578063437ecbe9146101f85780634e1273f41461020b5780636c0360eb1461022b576100ff565b8062fdd58e1461017257806301ffc9a71461019857806306fdde03146101bb5780630e89341c146101d0575b60405162461bcd60e51b815260206004820152603460248201527f455243313135354d6574614d696e744275726e5061636b656442616c616e636560448201527f4d6f636b3a20494e56414c49445f4d4554484f4400000000000000000000000060648201526084015b60405180910390fd5b610185610180366004611a0c565b610309565b6040519081526020015b60405180910390f35b6101ab6101a6366004611a4f565b610353565b604051901515815260200161018f565b6101c361035e565b60405161018f9190611abc565b6101c36101de366004611acf565b6103ec565b6101f66101f1366004611c2e565b610420565b005b6101f6610206366004611cd8565b610569565b61021e610219366004611d0b565b610579565b60405161018f9190611e06565b6101c361080b565b6101f6610241366004611e19565b610818565b6101f6610254366004611e55565b610884565b6101f6610267366004611eb6565b610896565b6101f661027a366004611f2a565b6108a1565b61029261028d366004611acf565b6108ad565b6040805192835260208301919091520161018f565b6101ab6102b5366004611fb7565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101856102f1366004611fea565b6108e7565b6101f661030436600461200c565b610915565b6000806000610317846108ad565b6001600160a01b038716600090815260208181526040808320858452909152902054919350915061034890826108e7565b925050505b92915050565b600061034d82610a57565b6003805461036b90612071565b80601f016020809104026020016040519081016040528092919081815260200182805461039790612071565b80156103e45780601f106103b9576101008083540402835291602001916103e4565b820191906000526020600020905b8154815290600101906020018083116103c757829003601f168201915b505050505081565b606060026103f983610a9b565b60405160200161040a9291906120c7565b6040516020818303038152906040529050919050565b336001600160a01b038616148061045a57506001600160a01b038516600090815260016020908152604080832033845290915290205460ff165b6104cc5760405162461bcd60e51b815260206004820152603c60248201527f455243313135355061636b656442616c616e636523736166654261746368547260448201527f616e7366657246726f6d3a20494e56414c49445f4f50455241544f52000000006064820152608401610169565b6001600160a01b0384166105485760405162461bcd60e51b815260206004820152603d60248201527f455243313135355061636b656442616c616e636523736166654261746368547260448201527f616e7366657246726f6d3a20494e56414c49445f524543495049454e540000006064820152608401610169565b61055485858585610bfb565b610562858585855a86610fb5565b5050505050565b610574838383611118565b505050565b815181516060919081146105f55760405162461bcd60e51b815260206004820152603960248201527f455243313135355061636b656442616c616e63652362616c616e63654f66426160448201527f7463683a20494e56414c49445f41525241595f4c454e475448000000000000006064820152608401610169565b60008061061b8560008151811061060e5761060e61219d565b60200260200101516108ad565b915091506000806000886000815181106106375761063761219d565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000848152602001908152602001600020549050600083905060008567ffffffffffffffff81111561069357610693611ae8565b6040519080825280602002602001820160405280156106bc578160200160208202803683370190505b5090506106c983856108e7565b816000815181106106dc576106dc61219d565b602090810291909101015260015b868110156107fe5761070789828151811061060e5761060e61219d565b9096509450828614158061076b57508981815181106107285761072861219d565b60200260200101516001600160a01b03168a60018361074791906121c9565b815181106107575761075761219d565b60200260200101516001600160a01b031614155b156107c5576000808b83815181106107855761078561219d565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008781526020019081526020016000205493508592505b6107cf84866108e7565b8282815181106107e1576107e161219d565b6020908102919091010152806107f6816121dc565b9150506106ea565b5098975050505050505050565b6002805461036b90612071565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61089084848484611173565b50505050565b6105748383836111d8565b6108908484848461130b565b6000806108bd602061010061220b565b6108c7908461220b565b91506108d6602061010061220b565b6108e0908461221f565b9050915091565b6000806108fa60016401000000006121c9565b90506000610909846020612233565b9490941c169392505050565b336001600160a01b038616148061094f57506001600160a01b038516600090815260016020908152604080832033845290915290205460ff165b6109c15760405162461bcd60e51b815260206004820152603760248201527f455243313135355061636b656442616c616e636523736166655472616e73666560448201527f7246726f6d3a20494e56414c49445f4f50455241544f520000000000000000006064820152608401610169565b6001600160a01b038416610a3d5760405162461bcd60e51b815260206004820152603860248201527f455243313135355061636b656442616c616e636523736166655472616e73666560448201527f7246726f6d3a20494e56414c49445f524543495049454e5400000000000000006064820152608401610169565b610a4985858585611504565b610562858585855a86611566565b60007ff176cbe4000000000000000000000000000000000000000000000000000000006001600160e01b0319831601610a9257506001919050565b61034d826116bf565b606081600003610ade57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610b085780610af2816121dc565b9150610b019050600a8361220b565b9150610ae2565b60008167ffffffffffffffff811115610b2357610b23611ae8565b6040519080825280601f01601f191660200182016040528015610b4d576020820181803683370190505b509050815b8515610bf257610b636001826121c9565b90506000610b72600a8861220b565b610b7d90600a612233565b610b8790886121c9565b610b92906030612252565b905060008160f81b905080848481518110610baf57610baf61219d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610be9600a8961220b565b97505050610b52565b50949350505050565b815181518114610c995760405162461bcd60e51b815260206004820152604260248201527f455243313135355061636b656442616c616e6365235f7361666542617463685460448201527f72616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e4760648201527f5448000000000000000000000000000000000000000000000000000000000000608482015260a401610169565b836001600160a01b0316856001600160a01b031614158015610cbb5750600081115b15610e8757600080610cd98560008151811061060e5761060e61219d565b6001600160a01b038916600090815260208181526040808320858452909152812054875193955091935091610d2a9190849088908590610d1b57610d1b61219d565b6020026020010151600161172c565b6001600160a01b03881660009081526020818152604080832087845290915281205487519293509091610d799190859089908590610d6a57610d6a61219d565b6020026020010151600061172c565b90508360015b86811015610e4257610d9c89828151811061060e5761060e61219d565b9096509450818614610dfe576001600160a01b038b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b610e1584868a8481518110610d1b57610d1b61219d565b9350610e2e83868a8481518110610d6a57610d6a61219d565b925080610e3a816121dc565b915050610d7f565b50506001600160a01b03808a16600090815260208181526040808320888452825280832095909555918a16815280825283812095815294905292209190915550610f57565b60005b81811015610f5557828181518110610ea457610ea461219d565b6020026020010151610ecf87868481518110610ec257610ec261219d565b6020026020010151610309565b1015610f435760405162461bcd60e51b815260206004820152603660248201527f455243313135355061636b656442616c616e6365235f7361666542617463685460448201527f72616e7366657246726f6d3a20554e444552464c4f57000000000000000000006064820152608401610169565b80610f4d816121dc565b915050610e8a565b505b836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610fa692919061226b565b60405180910390a45050505050565b610fc7856001600160a01b0316611949565b15611110576000856001600160a01b031663bc197c8184338a8989886040518763ffffffff1660e01b8152600401611003959493929190612290565b60206040518083038160008887f1158015611022573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061104791906122ee565b90506001600160e01b031981167fbc197c81000000000000000000000000000000000000000000000000000000001461110e5760405162461bcd60e51b815260206004820152604c60248201527f455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433160448201527f313535426174636852656365697665643a20494e56414c49445f4f4e5f52454360648201527f454956455f4d4553534147450000000000000000000000000000000000000000608482015260a401610169565b505b505050505050565b6111258383836001611983565b60408051838152602081018390526000916001600160a01b0386169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6111808484846000611983565b60408051848152602081018490526001600160a01b0386169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461089060008585855a86611566565b8151815181146112505760405162461bcd60e51b815260206004820152603d60248201527f455243313135354d696e744275726e5061636b656442616c616e63652362617460448201527f63684275726e3a20494e56414c49445f4152524159535f4c454e4754480000006064820152608401610169565b60005b818110156112ac5761129a858583815181106112715761127161219d565b602002602001015185848151811061128b5761128b61219d565b60200260200101516001611983565b806112a4816121dc565b915050611253565b5060006001600160a01b0316846001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516112fd92919061226b565b60405180910390a450505050565b81518351146113825760405162461bcd60e51b815260206004820152603e60248201527f455243313135354d696e744275726e5061636b656442616c616e6365235f626160448201527f7463684d696e743a20494e56414c49445f4152524159535f4c454e47544800006064820152608401610169565b82511561149d576000806113a28560008151811061060e5761060e61219d565b6001600160a01b0388166000908152602081815260408083208584529091528120548751939550919350916113e49190849088908590610d6a57610d6a61219d565b86519091508360015b828110156114715761140a89828151811061060e5761060e61219d565b9096509450818614611446576001600160a01b038a16600090815260208181526040808320948352939052828120949094558584529220549184905b61145d84868a8481518110610d6a57610d6a61219d565b935080611469816121dc565b9150506113ed565b5050506001600160a01b0387166000908152602081815260408083209583529490529290922091909155505b836001600160a01b031660006001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516114ed92919061226b565b60405180910390a461089060008585855a86610fb5565b6115118483836001611983565b61151e8383836000611983565b60408051838152602081018390526001600160a01b03808616929087169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291016112fd565b611578856001600160a01b0316611949565b15611110576000856001600160a01b031663f23a6e6184338a8989886040518763ffffffff1660e01b81526004016115b495949392919061230b565b60206040518083038160008887f11580156115d3573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906115f891906122ee565b90506001600160e01b031981167ff23a6e61000000000000000000000000000000000000000000000000000000001461110e5760405162461bcd60e51b815260206004820152604760248201527f455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433160448201527f31353552656365697665643a20494e56414c49445f4f4e5f524543454956455f60648201527f4d45535341474500000000000000000000000000000000000000000000000000608482015260a401610169565b60007f264985da000000000000000000000000000000000000000000000000000000006001600160e01b03198316016116fa57506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b031983161461034d565b60008061173a856020612233565b9050600061174e60016401000000006121c9565b905060008460018111156117645761176461234e565b036118095761177585831b88612364565b92506117836020600261245b565b6117918689851c8416612364565b106118045760405162461bcd60e51b815260206004820152603260248201527f455243313135355061636b656442616c616e6365235f7669657755706461746560448201527f42696e56616c75653a204f564552464c4f5700000000000000000000000000006064820152608401610169565b61193f565b600184600181111561181d5761181d61234e565b036118ab5761182e85831b886121c9565b925084818389901c1610156118045760405162461bcd60e51b815260206004820152603360248201527f455243313135355061636b656442616c616e6365235f7669657755706461746560448201527f42696e56616c75653a20554e444552464c4f57000000000000000000000000006064820152608401610169565b60405162461bcd60e51b815260206004820152604560248201527f455243313135355061636b656442616c616e6365235f7669657755706461746560448201527f42696e56616c75653a20494e56414c49445f42494e5f57524954455f4f50455260648201527f4154494f4e000000000000000000000000000000000000000000000000000000608482015260a401610169565b5050949350505050565b6000813f801580159061197c57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b60008061198f856108ad565b6001600160a01b03881660009081526020818152604080832085845290915290205491935091506119c29082868661172c565b6001600160a01b03909616600090815260208181526040808320948352939052919091209490945550505050565b80356001600160a01b0381168114611a0757600080fd5b919050565b60008060408385031215611a1f57600080fd5b611a28836119f0565b946020939093013593505050565b6001600160e01b031981168114611a4c57600080fd5b50565b600060208284031215611a6157600080fd5b813561197c81611a36565b60005b83811015611a87578181015183820152602001611a6f565b50506000910152565b60008151808452611aa8816020860160208601611a6c565b601f01601f19169290920160200192915050565b60208152600061197c6020830184611a90565b600060208284031215611ae157600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611b2757611b27611ae8565b604052919050565b600067ffffffffffffffff821115611b4957611b49611ae8565b5060051b60200190565b600082601f830112611b6457600080fd5b81356020611b79611b7483611b2f565b611afe565b82815260059290921b84018101918181019086841115611b9857600080fd5b8286015b84811015611bb35780358352918301918301611b9c565b509695505050505050565b600082601f830112611bcf57600080fd5b813567ffffffffffffffff811115611be957611be9611ae8565b611bfc601f8201601f1916602001611afe565b818152846020838601011115611c1157600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215611c4657600080fd5b611c4f866119f0565b9450611c5d602087016119f0565b9350604086013567ffffffffffffffff80821115611c7a57600080fd5b611c8689838a01611b53565b94506060880135915080821115611c9c57600080fd5b611ca889838a01611b53565b93506080880135915080821115611cbe57600080fd5b50611ccb88828901611bbe565b9150509295509295909350565b600080600060608486031215611ced57600080fd5b611cf6846119f0565b95602085013595506040909401359392505050565b60008060408385031215611d1e57600080fd5b823567ffffffffffffffff80821115611d3657600080fd5b818501915085601f830112611d4a57600080fd5b81356020611d5a611b7483611b2f565b82815260059290921b84018101918181019089841115611d7957600080fd5b948201945b83861015611d9e57611d8f866119f0565b82529482019490820190611d7e565b96505086013592505080821115611db457600080fd5b50611dc185828601611b53565b9150509250929050565b600081518084526020808501945080840160005b83811015611dfb57815187529582019590820190600101611ddf565b509495945050505050565b60208152600061197c6020830184611dcb565b60008060408385031215611e2c57600080fd5b611e35836119f0565b915060208301358015158114611e4a57600080fd5b809150509250929050565b60008060008060808587031215611e6b57600080fd5b611e74856119f0565b93506020850135925060408501359150606085013567ffffffffffffffff811115611e9e57600080fd5b611eaa87828801611bbe565b91505092959194509250565b600080600060608486031215611ecb57600080fd5b611ed4846119f0565b9250602084013567ffffffffffffffff80821115611ef157600080fd5b611efd87838801611b53565b93506040860135915080821115611f1357600080fd5b50611f2086828701611b53565b9150509250925092565b60008060008060808587031215611f4057600080fd5b611f49856119f0565b9350602085013567ffffffffffffffff80821115611f6657600080fd5b611f7288838901611b53565b94506040870135915080821115611f8857600080fd5b611f9488838901611b53565b93506060870135915080821115611faa57600080fd5b50611eaa87828801611bbe565b60008060408385031215611fca57600080fd5b611fd3836119f0565b9150611fe1602084016119f0565b90509250929050565b60008060408385031215611ffd57600080fd5b50508035926020909101359150565b600080600080600060a0868803121561202457600080fd5b61202d866119f0565b945061203b602087016119f0565b93506040860135925060608601359150608086013567ffffffffffffffff81111561206557600080fd5b611ccb88828901611bbe565b600181811c9082168061208557607f821691505b6020821081036120a557634e487b7160e01b600052602260045260246000fd5b50919050565b600081516120bd818560208601611a6c565b9290920192915050565b600080845481600182811c9150808316806120e357607f831692505b6020808410820361210257634e487b7160e01b86526022600452602486fd5b818015612116576001811461212b57612158565b60ff1986168952841515850289019650612158565b60008b81526020902060005b868110156121505781548b820152908501908301612137565b505084890196505b50505050505061219461216b82866120ab565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000815260050190565b95945050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561034d5761034d6121b3565b6000600182016121ee576121ee6121b3565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261221a5761221a6121f5565b500490565b60008261222e5761222e6121f5565b500690565b600081600019048311821515161561224d5761224d6121b3565b500290565b60ff818116838216019081111561034d5761034d6121b3565b60408152600061227e6040830185611dcb565b82810360208401526121948185611dcb565b60006001600160a01b03808816835280871660208401525060a060408301526122bc60a0830186611dcb565b82810360608401526122ce8186611dcb565b905082810360808401526122e28185611a90565b98975050505050505050565b60006020828403121561230057600080fd5b815161197c81611a36565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261234360a0830184611a90565b979650505050505050565b634e487b7160e01b600052602160045260246000fd5b8082018082111561034d5761034d6121b3565b600181815b808511156123b2578160001904821115612398576123986121b3565b808516156123a557918102915b93841c939080029061237c565b509250929050565b6000826123c95750600161034d565b816123d65750600061034d565b81600181146123ec57600281146123f657612412565b600191505061034d565b60ff841115612407576124076121b3565b50506001821b61034d565b5060208310610133831016604e8410600b8410161715612435575081810a61034d565b61243f8383612377565b8060001904821115612453576124536121b3565b029392505050565b600061197c83836123ba56fea2646970667358221220ba7023de4cde7c9dcc4f74cf41c5d4ea5519c8a114f8b52beca5ec714aa7b4d164736f6c63430008100033'

type ERC1155PackedBalanceMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: ERC1155PackedBalanceMockConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class ERC1155PackedBalanceMock__factory extends ContractFactory {
  constructor(...args: ERC1155PackedBalanceMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ERC1155PackedBalanceMock> {
    return super.deploy(overrides || {}) as Promise<ERC1155PackedBalanceMock>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): ERC1155PackedBalanceMock {
    return super.attach(address) as ERC1155PackedBalanceMock
  }
  override connect(signer: Signer): ERC1155PackedBalanceMock__factory {
    return super.connect(signer) as ERC1155PackedBalanceMock__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ERC1155PackedBalanceMockInterface {
    return new utils.Interface(_abi) as ERC1155PackedBalanceMockInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC1155PackedBalanceMock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155PackedBalanceMock
  }
}
