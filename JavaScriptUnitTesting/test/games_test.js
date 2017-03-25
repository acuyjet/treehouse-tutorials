var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function() {
	describe('checkGameStatus', function() {
		var checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
		it('Should tell me when the game is over'), function() {
			var players = [
				{
					ships: [
						{
							locations:[[0, 0]],
							damage: [[0, 0]]
						}
					]
				}
			];
			var acual = checkGameStatus(players);
			expect(actual).to.be.false;
		};
	});

	describe('takeTurn', function() {
		var takeTurn = require('../game_logic/game_instance').takeTurn;
		var guess;

		beforeEach(function() {
			guess = function() { return [0, 0] };
			player = {ships: [
				{
					locations: [[0, 0]],
					damage: []
				}
			]}
		});

		it('Should return false if the game ends', function() {
			var actual = takeTurn(player, guess);
			expect(actual).to.be.false;
		})
	});

	function saveGame(callback) {
		// Stand-in for a database function
		setTimeout(function() {
			callback()
		}, 1000)
	}

	describe('saveGame', function() {
		it('Should update saved status', function(done) {
			var status = 'Game not saved!';
			saveGame(function() {
				status = 'Game saved!';
				expect(status).to.equal('Game saved!');
				done();
			});
		});
	});
});