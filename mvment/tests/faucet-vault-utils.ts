import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CooldownToggled,
  CooldownUpdated,
  EthClaimed,
  EthDeposited,
  OwnershipTransferred,
  TokensClaimed,
  TokensDeposited
} from "../generated/FaucetVault/FaucetVault"

export function createCooldownToggledEvent(enabled: boolean): CooldownToggled {
  let cooldownToggledEvent = changetype<CooldownToggled>(newMockEvent())

  cooldownToggledEvent.parameters = new Array()

  cooldownToggledEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return cooldownToggledEvent
}

export function createCooldownUpdatedEvent(
  newCooldown: BigInt
): CooldownUpdated {
  let cooldownUpdatedEvent = changetype<CooldownUpdated>(newMockEvent())

  cooldownUpdatedEvent.parameters = new Array()

  cooldownUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newCooldown",
      ethereum.Value.fromUnsignedBigInt(newCooldown)
    )
  )

  return cooldownUpdatedEvent
}

export function createEthClaimedEvent(
  user: Address,
  amount: BigInt
): EthClaimed {
  let ethClaimedEvent = changetype<EthClaimed>(newMockEvent())

  ethClaimedEvent.parameters = new Array()

  ethClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ethClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return ethClaimedEvent
}

export function createEthDepositedEvent(
  depositor: Address,
  amount: BigInt
): EthDeposited {
  let ethDepositedEvent = changetype<EthDeposited>(newMockEvent())

  ethDepositedEvent.parameters = new Array()

  ethDepositedEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  ethDepositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return ethDepositedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokensClaimedEvent(
  token: Address,
  user: Address,
  amount: BigInt
): TokensClaimed {
  let tokensClaimedEvent = changetype<TokensClaimed>(newMockEvent())

  tokensClaimedEvent.parameters = new Array()

  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  tokensClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensClaimedEvent
}

export function createTokensDepositedEvent(
  token: Address,
  depositor: Address,
  amount: BigInt
): TokensDeposited {
  let tokensDepositedEvent = changetype<TokensDeposited>(newMockEvent())

  tokensDepositedEvent.parameters = new Array()

  tokensDepositedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokensDepositedEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  tokensDepositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensDepositedEvent
}
