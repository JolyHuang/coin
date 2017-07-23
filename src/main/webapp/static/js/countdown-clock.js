
/* Background Images
 -------------------------------------------------------------------*/
var  pageTopImage = jQuery('#page-top').data('background-image');

if (pageTopImage) {  jQuery('#page-top').css({ 'background-image':'url(' + pageTopImage + ')' }); };

/* Document Ready function
 -------------------------------------------------------------------*/
jQuery(document).ready(function($) {
    "use strict";


    /* Time Countdown
     -------------------------------------------------------------------*/
    $('#time_countdown').countDown({

        // targetDate: {
        //     'day': 30,
        //     'month': 9,
        //     'year': 2015,
        //     'hour': 0,
        //     'min': 0,
        //     'sec': 0
        // },
        // omitWeeks: true

        targetOffset: {
            'day':      24,
            'month':    0,
            'year':     0,
            'hour':     0,
            'min':      0,
            'sec':      3
        },
        omitWeeks: true

    });

});