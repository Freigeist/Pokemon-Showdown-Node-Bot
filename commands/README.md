Bot Commands
====================

Bot commands are in files of this path. If you want to add more commands just add more files with the specifications mentioned in main README. Commands included in this repository are explained below.

Basic Commands
------------

Basic features and some information about the bot.

 - `about` - Basic bot info, with the link to this repo.
 - `git` - Link to this repo
 - `version` - Bot version
 - `help` - Get a link to this guide
 - `time` - Current time for Bot
 - `uptime` - Time since the last bot restart
 - `seen [user]` - Latest data from an user
 - `say [text]` - Force to say something

Dynamic Commands
------------

Dynamic commads are commands saved in a JSON, used for commands that are continuously changing, like forum links or usage stats. Commands for using, creating, modifying and deleting dynamic commands are the following:

 - `dyn [cmd]` - To call a dynamic command
 - `wall [cmd]` - To call a dynamic command (with announce / wall)
 - `temp [text]` - Set temp var, to create a command
 - `setcmd [cmd]` - Create or modify a command, with `temp` data previosly set
 - `setalias [alias], [cmd]` - Set an alias of an existent dynamic command
 - `delcmd [cmd]` - Delete a command
 - `dyncmdlist` - Get the list of dynamic commands

**NOTE:** You can use a dynamic just with `.command` (command character + command name) if there is not another static command with the same name. So you can use this to create only-text commands with ease.

Chat Plugins
------------

Misc commands for multiple features:

 - `pick [option1], [option2], ...` - Choose between multiple options
 - `randomanswer` - Get a random answer
 - `usage` - Get a link to Smogon official usage stats

Commands for getting pokemon info:

 - `poke` or `randompokemon` - Get a random pokemon
 - `gen [poke]` - Get pokemon, item, etc generation
 - `viablemoves [poke]` - Get viable moves from a Pokemon
 - `heavyslam [poke], [poke]` - Get heavyslam base power
 - `priority [poke]` - Get priority moves
 - `boosting [poke]` - Get boosting moves
 - `recovery [poke]` - Get recovery moves
 - `hazards [poke]` - Get hazards moves

Commands for managing a database of jokes or quotes. Then, users can get a random one using **quote** or **joke** command:

 - `quote` or `joke` - Get a random quote / joke
 - `addquotes [http://hastebin.com/raw/example]` - Add quotes from a Hastebin document
 - `temp [text]` - Set temp var, to create or modify a quote / joke
 - `setquote [id]` - Create or modify a quote / joke using the **temp** var
 - `delquote [id]` - Remove a quote by Id
 - `viewquote [id]` - View a quote by Id
 - `viewquotes` - Upload quote list to Hastebin

Administrative Commands
------------

Commands for controlling the bot and command permissions for chat rooms.

 - `custom` - Send anything to current room
 - `join [room1], [room2]...` - Join chat rooms
 - `leave` - Leave chat rooms
 - `joinrooms [official/public/all]` - Join all rooms
 - `lang [lang]` - Set the language of the room
 - `settings [cmd], [rank]` - Configure command permissions
 - `battlesettings [permission], [rank]` - Change permissions for battle rooms

Developing Commands
------------

Commands for developing (only for excepted users)

 - `eval` or `js` - Execute arbitrary JavaScript
 - `send` - Send anything to the server
 - `ignore [user]` - Bot will ignore an user
 - `unignore [user]` - Stop ignoring an user
 - `reload [commands/config/features/laguages]` - Hotpatch source files
 - `updategit` - Fast forward from git repo
 - `kill` - End the process

Moderation
------------

**Mod Settings:** Use `mod (room - optional), [moderation], [on/off]` to enable or disable moderations.

**Autoban**
 - `ab [user], [user]...` - Add users to blacklist
 - `unab [user], [user]...` - Remove users from blacklist
 - `rab [regex]` - Regex ban
 - `unrab [regex]` - Remove a regex ban
 - `vab` - View blacklist

**Zero Tolerance**
 - `0tol [user]` - Checks if an user is in the zero tolerance list
 - `0tol add, [user1]:[level1], [user2]:[level2]...` - Add users to zero tolerance list
 - `0tol delete, [user1], [user2]...` - Removeusers from zero tolerance list
 - `vzt` - Upload zero tolerance list to hastebin

**Banwords and InapropiateWords:** Saying this words means automute. InapropiateWords requires that words are separated.
 - `banword [phrase]` - Add a banword
 - `unbanword [phrase]` - Remove a banword
 - `vbw` - View banword list
 - `inapword [phrase]` - Add an inappropriate word
 - `uninapword [phrase]` - Remove an inappropriate word
 - `viw` - View inapropiate words list

**Joinphrases:** Configure what phrase Bot says when certain user joins a room. This can be spammable, much caution!
 - `joinphrase [enable/disable]` - Enable or disable joinphrases for a room
 - `joinphrase set, [user], [phrase]` - Set a joinphrase
 - `joinphrase delete, [user]` - Remove a joinphrase
 - `vjf` - View joinphrases list
 
**Note:** Excepted users can use moderation commands in format `command [roomid]Arguments` to set moderation through PM or other room. Example: `ab [lobby]spammer1, spammer2`

Battle
------------

Commands for battle feature

**Developing**
 - `evalbattle` - Execute arbitrary JavaScript in a battle context
 - `reloadteams` - Hotpatch teams
 - `reloadbattle` - Hotpatch battle modules
 - `move` - Force a custom move

**Challeges**
 - `blockchallenges` - Block Challenges
 - `unblockchallenges` - Stop blocking challenges
 - `chall [user], [format]` - Send a challenge
 - `challme [format]` - Send a challenge to yourself

**Tournaments Joining**
 - `jointours [on/off]` - Enable or disable tour joining
 - `jointour` - Join a tournament
 - `leavetour` - Leave a tournament
 - `checktour` - Check the tournament (If the bot does not challenge or something)

**Ladder**
 - `searchbattle [format]` - Search a battle and returns the link
 - `ladderstart [format]` - Start laddering (checks every 10 seconds)
 - `ladderstop` - Stop laddering

**Teams**
 - `team add, [name], [format], [http://hastebin.com/raw/example]` - Add a team to Bot teams list
 - `team delete, [name]` - Remove a team from Bot teams list
 - `team get, [id]` - Get a team in exportable format
 - `team check, [id], (user)` - Challenge with a specific team
 - `teamslist` - Upload teams list to Hastebin to view it.

Tournaments
------------

Commands for Tournaments feature

 - `tour` - Start a tournament
 - `tour tier=example, timer=30, users=64, dq=1.5, type=elimination, rounds=1` - Start a tournament with custom and optional parameters
  - **tier**: Tournament format / tier
  - **timer**: Max time (in seconds) before starting the tournament
  - **users**: Max number of users (for singups)
  - **dq**: Minutes for autodq
  - **type**: elimination (eli) or roundrobin (rr)
  - **rounds**: Number of rounds in a elimination or roundrobin (1 or 2)
  - **scout**: set `scout=off` for enabling scout protection
 - `tourhelp` - Help for `tour command`
 - `tourstart` - Force start a tornament
 - `tourend` - Force end a tornament

Youtube
------------

Commands for Youtube link recognition feature

 - `youtube [on/off]` - Enable / Disable YouTube link recognition

Auto-Invite
------------

Commands for auto-invite feature

  - `reloadroomauth [room]` - Reload roomauth if the autoinvite feature is not working well
  - `getroomauth [room]` - Upload roomauth to hastebin (dev command)

Games
------------

General commands for managing games:

 - `game [Game Name], arg1=value1, arg2=value2...` - Start a game
 - `endgame` - Force end a game


**Poke-Hangman**. Arguments: maxfails (max number of allowed fails, 0 or no specify this argument for infinite). Commands:

 - `g [word/char]` - To guess words or characters
 - `view` - To view the game status
 - `end` - To force end the game

**Poke-Anagrams**. Arguments: games (max number of rounds), points (number of ponts for winning), time (time to answer in seconds). Commands:

 - `g [word]` - To guess the words
 - `view` - To view the game status
 - `end` - To force end the game
