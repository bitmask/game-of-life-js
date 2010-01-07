(Life = function() {}).prototype = {
    setup: function() {
        // Generate a game board - an almost full screen square
        this.generate_game_board();
        // Need a stop/start button
        //   pen/erase, one click glider, etc
    },

    generate_game_board: function() {
        console.log('generate_game_board');
    },

    run: function() {
    },

    THE: 'END'
};

$(function() {
    var life = new Life();
    life.setup();
});
