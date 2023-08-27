import { v5 as uuidv5 } from "uuid"

const seed_ids = [
  "august_device_1",
  "august_device_2",
  "august_device_3",
  "john_connected_account_id",
  "seed_workspace_1",
]

const NAMESPACE_UUID = "f6b23a6b-3065-41ed-8cd6-15cd47531577"

export const replaceSeedIds = (text: string) => {
  for (const seed_id of seed_ids) {
    text = text.replace(
      new RegExp(seed_id, "g"),
      uuidv5(seed_id, NAMESPACE_UUID)
    )
  }
  return text
}
