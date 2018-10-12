// TS to Lua watch mode: $ tstl -p tsconfig.json --watch
// Rename and move files watch mode: $ node build.js

require("typescript_defoldlib")
import { Unit } from "./modules/unit"

let unitList: Unit[] = []

function resize(self: any, event: any, data: any) {
  if (event == window_.WINDOW_EVENT_RESIZED) print("RESIZE")
}

function init(self: any) {
  print("The amazing world of Defold")
  print("System:", sys.get_sys_info().system_name)
  Unit.testStatic(101)

  for (let i = 0; i < 5; i++) {
    let newUnit = new Unit()
    newUnit.init()
    unitList.push(newUnit)
  }

  msg.post(".", "acquire_input_focus")
  print(collectgarbage("count") * 1024)
  window_.set_listener(resize)
}

function on_input(self: any, action_id: any, action: any): boolean {
  // Close App
  if (action_id == hash("close") && action.released) {
    msg.post("@system:", "exit", { code: 0 })
    return true
  }

  return false
}
