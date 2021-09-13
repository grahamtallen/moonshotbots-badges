import { BigInt } from "@graphprotocol/graph-ts";
import {
  Contract,
  Approval,
  ApprovalForAll,
  Transfer,
} from "../generated/Contract/Contract";
import { addBadgeAwardDataItem, awardBadge } from "./models";

export function handleApproval(event: Approval): void {
  let badgeAward = awardBadge(event.transaction.from.toHex(), event);
  addBadgeAwardDataItem(badgeAward, "action", "Some Action");
}

export function handleApprovalOld(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleTransfer(event: Transfer): void {}
