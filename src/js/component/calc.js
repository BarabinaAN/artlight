let calc = () => {
    
    let sizeSelect = document.getElementById('size'),
        materialSelect = document.getElementById('material'),
        optionsSelect = document.getElementById('options'),
        promocodeInput = document.querySelector('.promocode'),
        totalValue = document.querySelector('.calc-price');

    let updateTotal = () => {
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