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
        });
    }
}

module.exports = modal;