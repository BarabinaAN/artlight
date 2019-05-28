function accordion() {
    let accordion = document.getElementById('accordion'),
        accordionTitle = document.querySelectorAll('.accordion-heading'),
        accordionContent = accordion.querySelectorAll('.accordion-block');
        
         
    let changeClassTargetItems = (wrap, target, tooltype) => {
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

   let hideAccordionContent = (blok) => {
        blok.forEach(item => {
            item.classList.remove('active');
        });  
    }

    accordion.addEventListener('click', event => {
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