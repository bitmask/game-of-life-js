String.prototype.times = function(n) {
    var a = [];
    for (var i = 0; i < n; i++) {
        a.push(this);
    }
    return a.join('');
};

(Life = function() {}).prototype = {
    setup: function() {
        // Generate a game board - an almost full screen square
        this.generate_game_board();
        // Need a stop/start button
        //   pen/erase, one click glider, etc
    },

    generate_game_board: function() {
        var width = $(window).width();
        var height = $(window).height();
        var cell_width = 10;
        var padding = 10;
        var side = parseInt((Math.min(width, height) - 2 * padding) / cell_width) * cell_width;
        var cells = side / cell_width;
        var row = '<tr>' + '<td></td>'.times(cells) + '</tr>';
        var table = '<table>' + row.times(cells) + '</table>';
        $('body').append(table);
        $('td').width(cell_width).height(cell_width);
        $('body').append('<input type="submit" value="Start" />');
    },

    run: function() {
    },

    THE: 'END'
};

$(function() {
    var life = new Life();
    life.setup();
});
