@echo off

call tstl -p tsconfig.json

rem SCRIPTS
copy /b/v/y main.lua ..\scripts\main.script
del main.lua

rem MODULES
copy /b/v/y modules\*.lua ..\modules\*.lua
del modules\*.lua

rem echo 
