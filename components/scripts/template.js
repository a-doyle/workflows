$(function() {
    var Mustache = require('mustache');

    $.getJSON('js/data.json', function(data) {
        var template = $('#speakersstpl').html();
        var html = Mustache.to_html(template, data);
        $('#speakers').html(html);
    });
});