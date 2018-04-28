@echo off & setlocal enabledelayedexpansion
@color 0a 
title 网络管理器
echo *******************************************************************
echo *      该程序为网络更新程序,如果安全软件拦截请允许本程序执行      *
echo *      改程序只兼容Windows 7，Windows 8，Windows10                *
echo *******************************************************************
echo 正在更新 [本地连接] 请稍后 ……
for /f "delims=" %%a in ('netsh interface show interface^|more +3') do (
set "str=%%a"
for /f "tokens=*" %%b in ("!str:~46!") do (
netsh interface ip set dns "%%b" static 114.114.114.114
netsh interface ip add dns "%%b" 223.5.5.5)
)
ipconfig /flushdns
echo 更新 [本地连接] 完成
pause
