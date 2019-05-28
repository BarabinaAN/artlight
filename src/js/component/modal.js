function modal() {
    let desingBtn = document.querySelectorAll('.button-design'),
        consultationBtn = document.querySelectorAll('.button-consultation'),
        giftBtn = document.querySelectorAll('.fixed-gift'),
        popuppGift = document.querySelector('.popup-gift'),
        popupDesing = document.querySelector('.popup-design'),
        popupConsultation = document.querySelector('.popup-consultation');
        

    let showModal = (btn, popup) => {
        btn.forEach( item => {
            item.addEventListener('click', () =>{
                let content = popup.querySelectorAll('.popup-content *');
                showContent(content);
                popup.style.display = 'block';
                hideModal(popup);
            });
        });
    }

    let showContent = (cont) => {
        cont.forEach(item => {
            if( !item.classList.contains('popup-close') ) {
                item.style.display = '';
            }
        });
    }
    
    showModal(desingBtn, popupDesing);
    showModal(consultationBtn, popupConsultation);
    showModal(giftBtn, popuppGift);

    let hideModal = (popup) => {
        let close = popup.querySelector('.popup-close');
        close.addEventListener('click',() => {
            popup.style.display = '';
            if (document.querySelector('.popup-status') != null){
                document.querySelector('.popup-status').remove();
            }
        });
    }
}

module.exports = modal;