//@defold /scripts/main.script

require("typescript_defoldlib")
import { Unit } from "./modules/unit";

let unitList: Array<Unit> = []

function init(self: any) {
    print("The amazing world of Defold TypeScript")

    for(let i = 0; i < 100; i++)
        unitList.push(new Unit());

    for(let i = 0; i < unitList.length; i++)
        unitList[i].create();
}

function update(self: any, dt: number) {
    for(let i = 0; i < unitList.length; i++)
        unitList[i].update(dt)
}