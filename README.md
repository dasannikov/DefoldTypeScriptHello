![Defold TypeScript](https://github.com/dasannikov/DefoldTypeScript/blob/master/img/logo.jpg?raw=true "Defold TypeScript")

# An example of using TypeScript in Defold game engine.
A minimal example of using TypeScript in Defold game engine.

## How to run
- Install [Defold game engine](https://www.defold.com) and [VS Code](https://code.visualstudio.com)
- Install [Node.js](https://nodejs.org/en/)
- Install TypeScript to Lua transpiller `npm install -g typescript-to-lua` or from [GitHub repository](https://github.com/Perryvw/TypescriptToLua)
- Clone this repository (Or download from [releases](https://github.com/dasannikov/DefoldTypeScriptHello/releases))
- Open workspace `DefoldTypeScriptHello\tssrc\DefoldTypeScriptHello.code-workspace` in VS Code.
- Open working dir in 2 terminals: DefoldTypescriptHello/tssrc/
- Run TypeScriptToLua compiler in one terminal (watch mode): `$ tstl -p tsconfig.json --watch`
- Run rename and move files script in other terminal (watch mode): `$ node build.js`
- 2 watching task will compile and move files. Do not close terminals
- Open example project in Defold Editor 2 and Run.
- Now edit files in VS Code normally and run(build) game in Defold Editor. Repeat unit game done.

## How to orginize
- Add new scripts in `tssrc` folder and name it like - `new_name.script.ts`
- Add new modules in `tssrc/modules` folder and name it like - `new_name.ts`
- Do not edit `lua` and `script` files directly.
