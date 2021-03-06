$('.doctors__slider').owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    dots: false,
    navText: [
        '<img src="img/prev.svg" alt="prev"/>',
        '<img src="img/next.svg" alt="next"/>'
    ],
    responsive:{
        0: {
            items: 1,
            nav: false
        },
        768: {
            nav: false,
            items: 2
        },
        992: {
            items: 2
        },
        1200:{
            items: 3
        }
    }
});

$('.news__slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    navText: [
        '<img src="img/prev.svg" alt="prev"/>',
        '<img src="img/next.svg" alt="next"/>'
    ],
    responsive:{
        0: {
            items: 1,
            nav: false
        },
        768: {
            nav: false,
            items: 2
        },
        992: {
            items: 2
        },
        1200:{
            items: 3
        }
    }
});


const formInputs = document.querySelectorAll('.input input');
formInputs.forEach(input => {
    input.addEventListener('click', (e) => {
        const inputWrapper = e.target.parentNode;
        inputWrapper.classList.add('active');
        
        document.addEventListener('click', (element) => {
            if (element.target !== inputWrapper 
                && element.target !== inputWrapper.querySelector('img')
                && element.target !== inputWrapper.querySelector('input')) {
                    inputWrapper.classList.remove('active');
                } 
        })
    })
})


window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY + 200;
    
    document.querySelectorAll('.about-page__section').forEach((el, i) => {
        if (el.offsetTop  <= scrollDistance) {
            document.querySelectorAll('.sidebar a').forEach(el => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active')
                }
            })
            document.querySelectorAll('.sidebar li')[i].querySelector('a').classList.add('active');
        }
    })
})


$('.service-news__slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
        '<img src="img/prev.svg" alt="prev"/>',
        '<img src="img/next.svg" alt="next"/>'
    ],
    responsive:{
        0: {
            items: 1,
            nav: false
        },
        768: {
            nav: false,
            items: 2
        },
        992: {
            items: 2
        },
        1200:{
            items: 2
        }
    }
});