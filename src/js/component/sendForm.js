function sendForm() {
    let popupConsultation = document.querySelector('.popup-consultation'),
        popupDesing = document.querySelector('.popup-design'),
        consultation = document.querySelector('.consultation');

        let postForm = (popup) => {
            let form = popup.querySelector('form'),
                status = document.createElement('div'),
                popupContent = popup.querySelector('.popup-content'),
                content = popup.querySelectorAll('.popup-content *'),
                textarea = form.querySelector('textarea'),
                input = form.querySelectorAll('input');

            let clearArea = () => {
                input.forEach(item => {
                    item.value = '';
                });
                if (textarea != null) {
                    textarea.value = '';
                }
            }

            let hideContent = (cont) => {
                cont.forEach(item => {
                    if( !item.classList.contains('popup-close') ) {
                        item.style.display = 'none';
                    }
                });
            }

            form.addEventListener('submit', event => {
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
        
                request.addEventListener('readystatechange', () => {
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