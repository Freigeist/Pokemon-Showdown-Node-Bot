/*
	Miscellaneous commands
*/

Settings.addPermissions(['pick', 'randomanswer', 'help', 'translate']);
var http = require('http');

exports.commands = {
	choose: 'pick',
	pick: function (arg) {
		var choices = arg.split(",");
		choices = choices.filter(function (i) {return (toId(i) !== '');});
		if (choices.length < 2) return this.pmReply(this.trad('err'));
		var choice = choices[Math.floor(Math.random() * choices.length)];
		this.restrictReply("**" + this.trad('pick') + ":** " + Tools.stripCommands(choice), 'pick');
	},

	'8ball': 'randomanswer',
	helix: 'randomanswer',
	randomanswer: function () {
		var answers = this.trad('answers');
		if (!answers || !answers.length) return;
		this.restrictReply(answers[Math.floor(Math.random() * answers.length)], 'randomanswer');
	},

	usagestats: 'usage',
	usage: function (arg, user, room) {
		this.restrictReply(this.trad('stats') + ': http://www.smogon.com/stats/', 'info');
	},

	guide: 'help',
	botguide: 'help',
	help: function (arg, user, room) {
		this.restrictReply(this.trad('guide') + ': https://github.com/Freigeist/Pokemon-Showdown-Node-Bot/blob/master/commands/README.md', 'help');
	},

	youtubelinks: 'youtube',
	youtube: function (arg, user, room, cmd) {
		if (!this.isRanked('#')) return false;
		if (this.roomType !== 'chat') return this.reply(this.trad('notchat'));
		arg = toId(arg);
		if (!Settings.settings['ytlinks']) Settings.settings['ytlinks'] = {};
		switch (arg) {
			case 'on':
			case 'enable':
				if (Settings.settings['ytlinks'][room]) return this.reply(this.trad('ae') + ' ' + room);
				Settings.settings['ytlinks'][room] = 1;
				Settings.save();
				this.reply(this.trad('e'));
				break;
			case 'off':
			case 'disable':
				if (Settings.settings['ytlinks'][room] === 0) return this.reply(this.trad('ad') + ' ' + room);
				Settings.settings['ytlinks'][room] = 0;
				Settings.save();
				this.reply(this.trad('d'));
				break;
			default:
				this.reply(this.trad('u') + ': ' + this.cmdToken + cmd + ' [on/off]');
		}
	},

	tl: "translate",
	translate: function (arg, user, room) {
		var text = "";

		var args = arg.split(",");
		if (args.length !== 3) return this.restrictReply("Usage: .translate <from>, <to>, <text>; <from/to> may be en/us, es, fr, de, it)", 'translate');

		var fromToLangs = {"en": 1, "us": 1, "de": 1, "fr": 1, "es": 1, "it": 1};

		var from = toId(args[0]);
		var to = toId(args[1]);
		var toTrans = ('' + args[2]).trim();

		if (!fromToLangs[from] || !fromToLangs[to])
			return this.restrictReply("Usage: .translate <from>, <to>, <text>; <from/to> may be en/us, es, fr, de, it)", 'translate');

		var self = this;

		var reqOpt = {
			hostname: 'www.pokemontrash.com',
			path: '/api/' + from + '/to/' + to + '/' + toId(toTrans),
			method: 'GET'
		};

		var req = http.request(reqOpt, function (res) {
			var response = '';
			res.on('data', function (chunk) {
				response += chunk;
			});
			res.on('end', function () {
				try {
					var data = JSON.parse(response);
					if (data.exists === true)
						text += "The translation of __" + toTrans + "__ (" + from + ") in " + to + " is **" + data.to + "**.";
					else
						text += "Could not translate __" + toTrans + "__ from " + from + " to " + to + ".";
				} catch (e) {
					text += "There was an error trying to translate...";
				}
				self.restrictReply(text, 'translate');
			});
		});
		req.end();
	}
};
