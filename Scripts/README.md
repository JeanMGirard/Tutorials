# Website Boilerplate and best practices guide

## Requirements

Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object 
System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'));

## Installation

git clone https://github.com/JeanMGirard/windows-setup-tool.git
cd windows-setup-tool

git submodule update --init --recursive

## Usage

import-module ./windows-setup-tool/winSetup.psm1

$file = "./packages.ini" 
set-allPackages $file   # All sections


