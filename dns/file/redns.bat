@echo off & setlocal enabledelayedexpansion
@color 0a 
title ���������
echo *******************************************************************
echo *      �ó���Ϊ������³���,�����ȫ�����������������ִ��      *
echo *      �ĳ���ֻ����Windows 7��Windows 8��Windows10                *
echo *******************************************************************
echo ���ڸ��� [��������] ���Ժ� ����
for /f "delims=" %%a in ('netsh interface show interface^|more +3') do (
set "str=%%a"
for /f "tokens=*" %%b in ("!str:~46!") do (
netsh interface ip set dns "%%b" dhcp)
)
ipconfig /flushdns
echo ���� [��������] ���
pause
