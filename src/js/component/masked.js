let masked = () => {
         
    let inputPhones = document.querySelectorAll('input[name=phone]'),
        reg = /\D/g;

        inputPhones.forEach(item => {
            item.addEventListener('input', () => {
                checkCalcValue(item);
            });
        });

        let checkCalcValue = (el) => {
            el.setAttribute('type', 'text');
            if (reg.test(el.value)) {
                el.value = el.value.replace(reg, '');
            }
        }       
}

module.exports = masked;