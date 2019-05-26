/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/component/accordion.js":
/*!***************************************!*\
  !*** ./src/js/component/accordion.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordion() {
    let accordion = document.getElementById('accordion'),
        accordionTitle = document.querySelectorAll('.accordion-heading'),
        accordionContent = accordion.querySelectorAll('.accordion-block');
        
         
    function changeClassTargetItems(wrap, target, tooltype) {
        for (let i = 0; i < wrap.length; i++) {
       
            wrap[i].querySelector('span').classList.remove('active');

            if (target.parentElement == wrap[i]){
                target.classList.add('active');   
                for (let j = 0; j < tooltype.length; j++) {
                    if (j == i) {
                        tooltype[j].classList.add('active');
                    }
                }
            }
        } 
    }

    function hideAccordionContent(blok) {
        blok.forEach(item => {
            item.classList.remove('active');
        });  
    }

    accordion.addEventListener('click', function(event) {
        let target = event.target;
        
        hideAccordionContent(accordionContent);
        if (target && target.tagName == 'SPAN') {
            changeClassTargetItems(accordionTitle, target, accordionContent);
        } else {
            changeClassTargetItems(accordionTitle, target, accordionContent);
            hideAccordionContent(accordionContent);
        }
    });
}

module.exports = accordion;

/***/ }),

/***/ "./src/js/component/calc.js":
/*!**********************************!*\
  !*** ./src/js/component/calc.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    
    let sizeSelect = document.getElementById('size'),
        materialSelect = document.getElementById('material'),
        optionsSelect = document.getElementById('options'),
        promocodeInput = document.querySelector('.promocode'),
        totalValue = document.querySelector('.calc-price');

    function updateTotal() {
        let total = 0,
            size = 0 | sizeSelect.options[sizeSelect.selectedIndex].value,
            material = 0 | materialSelect.options[materialSelect.selectedIndex].value,
            options = 0 | optionsSelect.options[optionsSelect.selectedIndex].value;
            promocode = promocodeInput.value;

        if (size > 0 && material > 0) {
            total = size + material + options;
            if (promocode == 'IWANTPOPART') {
                total *= 0.7; 
            }
        }
        
        if (total <= 0) {
            totalValue.querySelector('.val').style.display = 'none';
            totalValue.querySelector('.warning').style.display = '';
        } else {
            totalValue.querySelector('.warning').style.display = 'none';
            totalValue.querySelector('.val').style.display = '';
            totalValue.querySelector('.val').textContent = total;
        }
    }

    sizeSelect.addEventListener( 'input', updateTotal );
    materialSelect.addEventListener( 'input', updateTotal );
    optionsSelect.addEventListener( 'input', updateTotal );
    promocodeInput.addEventListener( 'input', updateTotal );
}

module.exports = calc;

/***/ }),

/***/ "./src/js/component/filter.js":
/*!************************************!*\
  !*** ./src/js/component/filter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function filter() {
    let filter = document.querySelectorAll('.portfolio-menu li'),
        filterContent = document.querySelectorAll('.portfolio-block'),
        filtersWrap = document.querySelector('.portfolio-menu'),  
        notContent = document.querySelector('.portfolio-no');


    function showActiveContent(pr) {
        let count = 0;
        for (let i = 0; i < filterContent.length; i++) {
            if ( filterContent[i].classList.contains(pr)) {
                changeShow(filterContent[i], 'show', 'hide');
            } else {
                count++;
                changeShow(filterContent[i], 'hide', 'show');
            }
        }
        existsFilterContent(count, filterContent, notContent);
    };


    function existsFilterContent(num, list, el) {
        if (num == list.length) {
            el.style.display = 'block';
        } else {
            el.style.display = '';
        }
    };


    function changeShow(el, classShow, classHide) {
        el.classList.add(classShow);
        el.classList.remove(classHide);
    };


    filtersWrap.addEventListener('click', function(event) {
        let target = event.target;
        
        if (target && target.tagName == 'LI') {
            let targerClass = target.className;

            showActiveContent(targerClass);
            for (let i = 0; i < filter.length; i++) {
                if (target == filter[i]){
                    filter[i].classList.add('active');
                } else {
                    filter[i].classList.remove('active');
                }
            }
        }
    });
}

module.exports = filter;

/***/ }),

/***/ "./src/js/component/masked.js":
/*!************************************!*\
  !*** ./src/js/component/masked.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function masked() {
    let inputPhones = document.querySelectorAll('input[name=phone]'),
        reg = /\D/g;

        inputPhones.forEach(item => {
            item.addEventListener('input', function(){
                checkCalcValue(item);
            });
        });

        function checkCalcValue(el) {
            el.setAttribute('type', 'text');
            if (reg.test(el.value)) {
                el.value = el.value.replace(reg, '');
            }
        }       
}

module.exports = masked;

/***/ }),

/***/ "./src/js/component/modal.js":
/*!***********************************!*\
  !*** ./src/js/component/modal.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    let desingBtn = document.querySelectorAll('.button-design'),
        consultationBtn = document.querySelectorAll('.button-consultation'),
        giftBtn = document.querySelectorAll('.fixed-gift'),
        popuppGift = document.querySelector('.popup-gift'),
        popupDesing = document.querySelector('.popup-design'),
        popupConsultation = document.querySelector('.popup-consultation');
        

    function showModal(btn, popup) {
        btn.forEach( item => {
            item.addEventListener('click', function() {
                let content = popup.querySelectorAll('.popup-content *');
                showContent(content);
                popup.style.display = 'block';
                hideModal(popup);
            });
        });
    }

    function showContent(cont) {
        cont.forEach(item => {
            if( !item.classList.contains('popup-close') ) {
                item.style.display = '';
            }
        });
    }
    
    showModal(desingBtn, popupDesing);
    showModal(consultationBtn, popupConsultation);
    showModal(giftBtn, popuppGift);

    function hideModal(popup) {
        let close = popup.querySelector('.popup-close');
        close.addEventListener('click', function() {
            popup.style.display = '';
            if (document.querySelector('.popup-status') != null){
                document.querySelector('.popup-status').remove();
            }
        });
    }
}

module.exports = modal;

/***/ }),

/***/ "./src/js/component/sendForm.js":
/*!**************************************!*\
  !*** ./src/js/component/sendForm.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sendForm() {
    let popupConsultation = document.querySelector('.popup-consultation'),
        popupDesing = document.querySelector('.popup-design'),
        consultation = document.querySelector('.consultation');

        function postForm(popup) {
            let form = popup.querySelector('form'),
                status = document.createElement('div'),
                popupContent = popup.querySelector('.popup-content'),
                content = popup.querySelectorAll('.popup-content *'),
                textarea = form.querySelector('textarea'),
                input = form.querySelectorAll('input');

            function clearArea() {
                input.forEach(item => {
                    item.value = '';
                });
                if (textarea != null) {
                    textarea.value = '';
                }
            }

            function hideContent(cont) {
                cont.forEach(item => {
                    if( !item.classList.contains('popup-close') ) {
                        item.style.display = 'none';
                    }
                });
            }

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                if (popupContent != null) {
                    popupContent.appendChild(status);
                    status.classList.add('popup-status');
                } else {
                    form.appendChild(status);
                    status.classList.add('popup-status');
                }
                
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
                let formData = new FormData(form);
                request.send(formData);
        
                request.addEventListener('readystatechange', function() {
                    if (request.readyState > 4) {  
                        hideContent(content);                    
                        status.textContent = 'загрузка';

                    } else if (request.readyState === 4 && request.status == 200) {
                        status.innerHTML = '<h3> Сообщение успешно отправлено! </h3>';
                    } else {      
                        hideContent(content);
                        status.innerHTML = '<h3> К сожалению, произошла ошибка :( </h3>';
                    }
                });

                clearArea();                   
            });
        }
        postForm(popupDesing);
        postForm(popupConsultation);
        postForm(consultation);
}

module.exports = sendForm;

/***/ }),

/***/ "./src/js/component/slider.js":
/*!************************************!*\
  !*** ./src/js/component/slider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn'),
        autoplay = true;

    function ShowSlide(n) {
        if (n > slides.length) {
            slideIndex = 1; 
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = '';
    }  
    ShowSlide(slideIndex); 

    function plusSlide(n) {
        ShowSlide(slideIndex += n);
    }

    function currentSlide(n) {
        ShowSlide(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlide(-1);
        currentSlide(slideIndex);
    });

    next.addEventListener('click', function() {
        plusSlide(1);
        currentSlide(slideIndex);
    });

    function autoplaySlides(sec) {
        if (autoplay == true) {
            setTimeout(function playSlide() {
                plusSlide(1);
                currentSlide(slideIndex);
                setTimeout( playSlide, sec*1000 );
            }, sec*1000);
        } 
    }  

    autoplaySlides(5);
}

module.exports = slider;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function(){
    'use strict'
    let modal = __webpack_require__(/*! ./component/modal.js */ "./src/js/component/modal.js"),
        slider = __webpack_require__(/*! ./component/slider.js */ "./src/js/component/slider.js"),
        accordion = __webpack_require__(/*! ./component/accordion.js */ "./src/js/component/accordion.js"),
        filter = __webpack_require__(/*! ./component/filter.js */ "./src/js/component/filter.js"),
        calc = __webpack_require__(/*! ./component/calc.js */ "./src/js/component/calc.js"),
        masked = __webpack_require__(/*! ./component/masked.js */ "./src/js/component/masked.js"),
        sendForm = __webpack_require__(/*! ./component/sendForm.js */ "./src/js/component/sendForm.js");

    modal(); 
    sendForm();
    slider();
    accordion();
    filter();
    calc();
    masked();
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map