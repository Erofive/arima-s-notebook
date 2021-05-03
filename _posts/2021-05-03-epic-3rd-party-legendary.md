---
title: Epic第三方客户端Legendary使用
description: Epic第三方命令行客户端，体积比用Electron开发的Epic客户端小多了。
---

0.20.6版本Legendary分流下载：[下载](http://ys-j.ys168.com/617841523/216784003/SJT8stp645G29754VNWFa6/legendary.exe)

​    

## Usage

```
usage: legendary [-h] [-v] [-y] [-V]
                 {auth,install,download,update,repair,uninstall,launch,list-games,list-installed,list-files,list-saves,download-saves,sync-saves,verify-game,import-game,egl-sync,status,cleanup}
                 ...

Legendary v0.X.X - "Codename"

optional arguments:
  -h, --help            show this help message and exit
  -v, --debug           Set loglevel to debug
  -y, --yes             Default to yes for all prompts
  -V, --version         Print version and exit

Commands:
  {auth,install,download,update,repair,uninstall,launch,list-games,list-installed,list-files,list-saves,download-saves,sync-saves,verify-game,import-game,egl-sync,status,cleanup}
    auth                Authenticate with EPIC
    install (download,update,repair)
                        Download a game
    uninstall           Uninstall (delete) a game
    launch              Launch a game
    list-games          List available (installable) games
    list-installed      List installed games
    list-files          List files in manifest
    list-saves          List available cloud saves
    download-saves      Download all cloud saves
    sync-saves          Sync cloud saves
    verify-game         Verify a game's local files
    import-game         Import an already installed game
    egl-sync            Setup or run Epic Games Launcher sync
    status              Show legendary status information
    cleanup             Remove old temporary, metadata, and manifest files

Individual command help:

Command: auth
usage: legendary auth [-h] [--import] [--code <exchange code>]
                      [--sid <session id>] [--delete]

optional arguments:
  -h, --help            show this help message and exit
  --import              Import Epic Games Launcher authentication data (logs
                        out of EGL)
  --code <exchange code>
                        Use specified exchange code instead of interactive
                        authentication
  --sid <session id>    Use specified session id instead of interactive
                        authentication
  --delete              Remove existing authentication (log out)


Command: install
usage: legendary install <App Name> [options]

Aliases: download, update

positional arguments:
  <App Name>            Name of the app

optional arguments:
  -h, --help            show this help message and exit
  --base-path <path>    Path for game installations (defaults to ~/legendary)
  --game-folder <path>  Folder for game installation (defaults to folder
                        specified in metadata)
  --max-shared-memory <size>
                        Maximum amount of shared memory to use (in MiB),
                        default: 1 GiB
  --max-workers <num>   Maximum amount of download workers, default: min(2 *
                        CPUs, 16)
  --manifest <uri>      Manifest URL or path to use instead of the CDN one
                        (e.g. for downgrading)
  --old-manifest <uri>  Manifest URL or path to use as the old one (e.g. for
                        testing patching)
  --delta-manifest <uri>
                        Manifest URL or path to use as the delta one (e.g. for
                        testing)
  --base-url <url>      Base URL to download from (e.g. to test or switch to a
                        different CDNs)
  --force               Download all files / ignore existing (overwrite)
  --disable-patching    Do not attempt to patch existing installation
                        (download entire changed files)
  --download-only, --no-install
                        Do not intall app and do not run prerequisite
                        installers after download
  --update-only         Only update, do not do anything if specified app is
                        not installed
  --dlm-debug           Set download manager and worker processes' loglevel to
                        debug
  --platform <Platform>
                        Platform override for download (also sets --no-
                        install)
  --prefix <prefix>     Only fetch files whose path starts with <prefix> (case
                        insensitive)
  --exclude <prefix>    Exclude files starting with <prefix> (case
                        insensitive)
  --install-tag <tag>   Only download files with the specified install tag
  --enable-reordering   Enable reordering optimization to reduce RAM
                        requirements during download (may have adverse results
                        for some titles)
  --dl-timeout <sec>    Connection timeout for downloader (default: 10
                        seconds)
  --save-path <path>    Set save game path to be used for sync-saves
  --repair              Repair installed game by checking and redownloading
                        corrupted/missing files
  --repair-and-update   Update game to the latest version when repairing
  --ignore-free-space   Do not abort if not enough free space is available
  --disable-delta-manifests
                        Do not use delta manifests when updating (may increase
                        download size)
  --reset-sdl           Reset selective downloading choices (requires repair
                        to download new components)


Command: uninstall
usage: legendary uninstall [-h] [--keep-files] <App Name>

positional arguments:
  <App Name>    Name of the app

optional arguments:
  -h, --help    show this help message and exit
  --keep-files  Keep files but remove game from Legendary database


Command: launch
usage: legendary launch <App Name> [options]

Note: additional arguments are passed to the game

positional arguments:
  <App Name>            Name of the app

optional arguments:
  -h, --help            show this help message and exit
  --offline             Skip login and launch game without online
                        authentication
  --skip-version-check  Skip version check when launching game in online mode
  --override-username <username>
                        Override username used when launching the game (only
                        works with some titles)
  --dry-run             Print the command line that would have been used to
                        launch the game and exit
  --language <two letter language code>
                        Override language for game launch (defaults to system
                        locale)
  --wrapper <wrapper command>
                        Wrapper command to launch game with
  --set-defaults        Save parameters used to launch to config (does not
                        include env vars)
  --reset-defaults      Reset config settings for app and exit
  --wine <wine binary>  Set WINE binary to use to launch the app
  --wine-prefix <wine pfx path>
                        Set WINE prefix to use
  --no-wine             Do not run game with WINE (e.g. if a wrapper is used)


Command: list-games
usage: legendary list-games [-h] [--platform <Platform>] [--include-ue] [--csv]
                            [--tsv] [--json]

optional arguments:
  -h, --help            show this help message and exit
  --platform <Platform>
                        Override platform that games are shown for (e.g.
                        Win32/Mac)
  --include-ue          Also include Unreal Engine content
                        (Engine/Marketplace) in list
  --csv                 List games in CSV format
  --tsv                 List games in TSV format
  --json                List games in JSON format


Command: list-installed
usage: legendary list-installed [-h] [--check-updates] [--csv] [--tsv] [--json]
                                [--show-dirs]

optional arguments:
  -h, --help       show this help message and exit
  --check-updates  Check for updates for installed games
  --csv            List games in CSV format
  --tsv            List games in TSV format
  --json           List games in JSON format
  --show-dirs      Print installation directory in output


Command: list-files
usage: legendary list-files [-h] [--force-download] [--platform <Platform>]
                            [--manifest <uri>] [--csv] [--tsv] [--json]
                            [--hashlist] [--install-tag <tag>]
                            [<App Name>]

positional arguments:
  <App Name>            Name of the app (optional)

optional arguments:
  -h, --help            show this help message and exit
  --force-download      Always download instead of using on-disk manifest
  --platform <Platform>
                        Platform override for download (disables install)
  --manifest <uri>      Manifest URL or path to use instead of the CDN one
  --csv                 Output in CSV format
  --tsv                 Output in TSV format
  --json                Output in JSON format
  --hashlist            Output file hash list in hashcheck/sha1sum -c
                        compatible format
  --install-tag <tag>   Show only files with specified install tag


Command: list-saves
usage: legendary list-saves [-h] [<App Name>]

positional arguments:
  <App Name>  Name of the app (optional)

optional arguments:
  -h, --help  show this help message and exit


Command: download-saves
usage: legendary download-saves [-h] [<App Name>]

positional arguments:
  <App Name>  Name of the app (optional)

optional arguments:
  -h, --help  show this help message and exit


Command: sync-saves
usage: legendary sync-saves [-h] [--skip-upload] [--skip-download]
                            [--force-upload] [--force-download]
                            [--save-path <path>] [--disable-filters]
                            [<App Name>]

positional arguments:
  <App Name>          Name of the app (optional)

optional arguments:
  -h, --help          show this help message and exit
  --skip-upload       Only download new saves from cloud, don't upload
  --skip-download     Only upload new saves from cloud, don't download
  --force-upload      Force upload even if local saves are older
  --force-download    Force download even if local saves are newer
  --save-path <path>  Override savegame path (requires single app name to be
                      specified)
  --disable-filters   Disable save game file filtering


Command: verify-game
usage: legendary verify-game [-h] <App Name>

positional arguments:
  <App Name>  Name of the app

optional arguments:
  -h, --help  show this help message and exit


Command: import-game
usage: legendary import-game [-h] [--disable-check]
                             <App Name> <Installation directory>

positional arguments:
  <App Name>            Name of the app
  <Installation directory>
                        Path where the game is installed

optional arguments:
  -h, --help            show this help message and exit
  --disable-check       Disables completeness check of the to-be-imported game
                        installation (useful if the imported game is a much
                        older version or missing files)


Command: egl-sync
usage: legendary egl-sync [-h] [--egl-manifest-path EGL_MANIFEST_PATH]
                          [--egl-wine-prefix EGL_WINE_PREFIX] [--enable-sync]
                          [--disable-sync] [--one-shot] [--import-only]
                          [--export-only] [--unlink]

optional arguments:
  -h, --help            show this help message and exit
  --egl-manifest-path EGL_MANIFEST_PATH
                        Path to the Epic Games Launcher's Manifests folder,
                        should point to
                        /ProgramData/Epic/EpicGamesLauncher/Data/Manifests
  --egl-wine-prefix EGL_WINE_PREFIX
                        Path to the WINE prefix the Epic Games Launcher is
                        installed in
  --enable-sync         Enable automatic EGL <-> Legendary sync
  --disable-sync        Disable automatic sync and exit
  --one-shot            Sync once, do not ask to setup automatic sync
  --import-only         Only import games from EGL (no export)
  --export-only         Only export games to EGL (no import)
  --unlink              Disable sync and remove EGL metadata from installed
                        games


Command: status
usage: legendary status [-h] [--offline] [--json]

optional arguments:
  -h, --help  show this help message and exit
  --offline   Only print offline status information, do not login
  --json      Show status in JSON format


Command: cleanup
usage: legendary cleanup [-h] [--keep-manifests]

optional arguments:
  -h, --help        show this help message and exit
  --keep-manifests  Do not delete old manifests
```

## Config file

Legendary supports some options as well as game specific configuration in `~/.config/legendary/config.ini`:

```
[Legendary]
log_level = debug
; maximum shared memory (in MiB) to use for installation
max_memory = 1024
; maximum number of worker processes when downloading (fewer workers will be slower, but also use fewer system resources)
max_workers = 8
; default install directory
install_dir = /mnt/tank/games
; locale override, must be in RFC 1766 format (e.g. "en-US")
locale = en-US
; whether or not syncing with egl is enabled
egl_sync = false
; path to the "Manifests" folder in the EGL ProgramData directory
egl_programdata = /home/user/Games/epic-games-store/drive_c/... 

; default settings to use (currently limited to WINE executable)
[default]
; (linux) specify wine executable to use
wine_executable = wine
; wine prefix (alternative to using environment variable)
wine_prefix = /home/user/.wine

; default environment variables to set (overridden by game specific ones)
[default.env]
WINEPREFIX = /home/user/legendary/.wine

; Settings to only use for "AppName"
[AppName]
; launch game without online authentication by default
offline = true
; Skip checking for updates when launching this game
skip_update_check = true
; start parameters to use (in addition to the required ones)
start_params = -windowed
wine_executable = /path/to/proton/wine64
; override language with two-letter language code
language = fr

[AppName.env]
; environment variables to set for this game (mostly useful on linux)
WINEPREFIX = /mnt/tank/games/Game/.wine
DXVK_CONFIG_FILE = /mnt/tank/games/Game/dxvk.conf

[AppName2]
; Use a wrapper to run this script
; Note that the path might have to be quoted if it contains spaces
wrapper = "/path/to/Proton 5.0/proton" run
; Do not run this executable with WINE (e.g. when the wrapper handles that)
no_wine = true
```

