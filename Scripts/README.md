# Website Boilerplate and best practices guide

## Requirements
```ps1
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object 
System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'));
```

## Installation
```ps1
git clone "https://github.com/JeanMGirard/windows-setup-tool.git";
cd windows-setup-tool;
git submodule update --init --recursive;
```

## Usage
```ps1
import-module ./windows-setup-tool/winSetup.psm1

$file = "./packages.ini" 
set-allPackages $file   # All sections
```


### Git-flow
```ps1
wget -q -O - --no-check-certificate "https://raw.github.com/petervanderdoes/gitflow-avh/develop/contrib/gitflow-installer.sh" install stable | bash
```
