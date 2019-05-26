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