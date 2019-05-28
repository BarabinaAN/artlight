window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    let modal = require('./component/modal.js'),
        slider = require('./component/slider.js'),
        accordion = require('./component/accordion.js'),
        filter = require('./component/filter.js'),
        calc = require('./component/calc.js'),
        masked = require('./component/masked.js'),
        sendForm = require('./component/sendForm.js');

    modal(); 
    sendForm();
    slider();
    accordion();
    filter();
    calc();
    masked();
    
});
