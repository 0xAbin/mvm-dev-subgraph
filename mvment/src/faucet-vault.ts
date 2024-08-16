import {
  CooldownToggled as CooldownToggledEvent,
  CooldownUpdated as CooldownUpdatedEvent,
  EthClaimed as EthClaimedEvent,
  EthDeposited as EthDepositedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokensClaimed as TokensClaimedEvent,
  TokensDeposited as TokensDepositedEvent
} from "../generated/FaucetVault/FaucetVault"
import {
  CooldownToggled,
  CooldownUpdated,
  EthClaimed,
  EthDeposited,
  OwnershipTransferred,
  TokensClaimed,
  TokensDeposited
} from "../generated/schema"

export function handleCooldownToggled(event: CooldownToggledEvent): void {
  let entity = new CooldownToggled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.enabled = event.params.enabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCooldownUpdated(event: CooldownUpdatedEvent): void {
  let entity = new CooldownUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newCooldown = event.params.newCooldown

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEthClaimed(event: EthClaimedEvent): void {
  let entity = new EthClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEthDeposited(event: EthDepositedEvent): void {
  let entity = new EthDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensClaimed(event: TokensClaimedEvent): void {
  let entity = new TokensClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensDeposited(event: TokensDepositedEvent): void {
  let entity = new TokensDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.depositor = event.params.depositor
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
