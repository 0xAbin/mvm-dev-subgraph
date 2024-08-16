import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CooldownToggled } from "../generated/schema"
import { CooldownToggled as CooldownToggledEvent } from "../generated/FaucetVault/FaucetVault"
import { handleCooldownToggled } from "../src/faucet-vault"
import { createCooldownToggledEvent } from "./faucet-vault-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let enabled = "boolean Not implemented"
    let newCooldownToggledEvent = createCooldownToggledEvent(enabled)
    handleCooldownToggled(newCooldownToggledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CooldownToggled created and stored", () => {
    assert.entityCount("CooldownToggled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CooldownToggled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "enabled",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
