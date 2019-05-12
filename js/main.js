$(function () {

    'use strict';


    var $areapicker3 = $('#area-picker3');

    $('#reset').click(function () {
        $areapicker3.areapicker('reset');
    });

    $('#destroy').click(function () {
		console.log($areapicker3.areapicker('output'))
		console.log($areapicker3.val())
        //$citypicker3.areapicker('destroy');
    });
});
