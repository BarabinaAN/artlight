window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    let modal = require('./component/modal.js'),
        slider = require('./component/slider.js'),
        accordion = require('./component/accordion.js'),
        sendForm = require('./component/sendForm.js');

    modal(); 
    sendForm();
    slider();
    accordion();
});
