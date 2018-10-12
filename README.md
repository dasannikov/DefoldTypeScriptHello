![Defold TypeScript](https://github.com/dasannikov/DefoldTypeScript/blob/master/img/logo.jpg?raw=true "Defold TypeScript")

# An example of using TypeScript in Defold game engine.
A minimal example of using TypeScript in Defold game engine. For more information check [this repo](https://github.com/dasannikov/DefoldTypeScript)

## How to run
- Install [Defold game engine](https://www.defold.com) and [VS Code](https://code.visualstudio.com)
- Install [Node.js](https://nodejs.org/en/)
- Install TypeScript to Lua transpiller `npm install -g typescript-to-lua` or from [GitHub repository](https://github.com/Perryvw/TypescriptToLua)
- Clone this rerository (!!do not download it! clone it! it has submodule)
- Open workspace `DefoldTypeScriptHello\tssrc\DefoldTypeScriptHello.code-workspace` in VS Code.
- Open working dir in 2 terminals: DefoldTypescriptHello/tssrc/
- Run TypeScriptToLua compiler in one terminal (watch mode): $ tstl -p tsconfig.json --watch
- Run rename and move files script in onother terminal (watch mode): $ node build.js
- 2 watching task will compile and move files. Do not close terminals
- Open example project in Defold Editor 2 and Run.
- Now edit files in VS Code normaly and run(build) game in Defold Editor. Repeat.
