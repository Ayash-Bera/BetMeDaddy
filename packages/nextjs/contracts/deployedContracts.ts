/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    Market: {
      address: "0xfd660A1D683F1d810efCFc90d320b9cDF1574497",
      abi: [
        {
          inputs: [],
          name: "ReentrancyGuardReentrantCall",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "market",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "question",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "resolutionTime",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
          ],
          name: "MarketCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "market",
              type: "address",
            },
            {
              indexed: false,
              internalType: "enum IMarket.MarketOutcome",
              name: "outcome",
              type: "uint8",
            },
            {
              indexed: true,
              internalType: "address",
              name: "resolver",
              type: "address",
            },
          ],
          name: "MarketResolved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "trader",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isYes",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
          ],
          name: "Trade",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "isYes",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "buy",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "calculateEffectiveFee",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claim",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "collateralToken",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "creator",
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
          inputs: [],
          name: "getCurrentPrice",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMarketInfo",
          outputs: [
            {
              internalType: "string",
              name: "_question",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_resolutionTime",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_creator",
              type: "address",
            },
            {
              internalType: "enum IMarket.MarketStatus",
              name: "_status",
              type: "uint8",
            },
            {
              internalType: "enum IMarket.MarketOutcome",
              name: "_outcome",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "_currentPrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_liquidityPool",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "getUserPosition",
          outputs: [
            {
              internalType: "uint256",
              name: "yesShares",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "noShares",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "claimed",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "hasClaimed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_question",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_resolutionTime",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_creator",
              type: "address",
            },
            {
              internalType: "address",
              name: "_reputationSystem",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "liquidityPool",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "noBalances",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "outcome",
          outputs: [
            {
              internalType: "enum IMarket.MarketOutcome",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "question",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "reputationSystem",
          outputs: [
            {
              internalType: "contract IReputationSystem",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "resolutionTime",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "enum IMarket.MarketOutcome",
              name: "_outcome",
              type: "uint8",
            },
          ],
          name: "resolve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "isYes",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
          ],
          name: "sell",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "status",
          outputs: [
            {
              internalType: "enum IMarket.MarketStatus",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalNoShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalYesShares",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "yesBalances",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        buy: "contracts/interfaces/IMarket.sol",
        claim: "contracts/interfaces/IMarket.sol",
        initialize: "contracts/interfaces/IMarket.sol",
        resolve: "contracts/interfaces/IMarket.sol",
        sell: "contracts/interfaces/IMarket.sol",
      },
    },
    MarketFactory: {
      address: "0xd703362287D6B578612AC0Ef01f2121eB69671e6",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "_implementation",
              type: "address",
            },
            {
              internalType: "address",
              name: "_reputationSystem",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ERC1167FailedCreateClone",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidImplementation",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidRange",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidReputationSystem",
          type: "error",
        },
        {
          inputs: [],
          name: "MarketInitializationFailed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [],
          name: "RangeOutOfBounds",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrancyGuardReentrantCall",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "oldImpl",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newImpl",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ImplementationUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "marketId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "market",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "question",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "resolutionTime",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "MarketCreated",
          type: "event",
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
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "oldSystem",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newSystem",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ReputationSystemUpdated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "question",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "resolutionTime",
              type: "uint256",
            },
          ],
          name: "createMarket",
          outputs: [
            {
              internalType: "address",
              name: "market",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "start",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "end",
              type: "uint256",
            },
          ],
          name: "getMarkets",
          outputs: [
            {
              internalType: "address[]",
              name: "result",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
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
              name: "market",
              type: "address",
            },
          ],
          name: "isMarket",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "marketById",
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
          inputs: [],
          name: "marketCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "marketIds",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
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
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "reputationSystem",
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
              name: "_implementation",
              type: "address",
            },
          ],
          name: "setImplementation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_reputationSystem",
              type: "address",
            },
          ],
          name: "setReputationSystem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
    },
    ReputationSystem: {
      address: "0xeC20dCBf0380F1C9856Ee345aF41F62Ee45a95a1",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrancyGuardReentrantCall",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "market",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "stake",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isYes",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "entryPrice",
              type: "uint256",
            },
          ],
          name: "MarketRecorded",
          type: "event",
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
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "oldReputation",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newReputation",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "difficultyMultiplier",
              type: "uint256",
            },
          ],
          name: "ReputationUpdated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "finalPrice",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "outcome",
              type: "bool",
            },
          ],
          name: "calculateDifficultyMultiplier",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "calculateFeeDiscount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "calculateVotingWeight",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "getUserReputation",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "getUserStats",
          outputs: [
            {
              internalType: "uint256",
              name: "reputation",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "predictions",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "correct",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
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
              name: "market",
              type: "address",
            },
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "stake",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isYes",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "currentPrice",
              type: "uint256",
            },
          ],
          name: "recordPosition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "factory",
              type: "address",
            },
          ],
          name: "removeFactory",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "market",
              type: "address",
            },
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              internalType: "bool",
              name: "outcome",
              type: "bool",
            },
          ],
          name: "updateReputation",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "factory",
              type: "address",
            },
          ],
          name: "whitelistFactory",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "whitelistedFactories",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        calculateFeeDiscount: "contracts/interfaces/IReputationSystem.sol",
        calculateVotingWeight: "contracts/interfaces/IReputationSystem.sol",
        getUserReputation: "contracts/interfaces/IReputationSystem.sol",
        getUserStats: "contracts/interfaces/IReputationSystem.sol",
        recordPosition: "contracts/interfaces/IReputationSystem.sol",
        updateReputation: "contracts/interfaces/IReputationSystem.sol",
        whitelistFactory: "contracts/interfaces/IReputationSystem.sol",
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
