const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
}); /* blur = focus의 반대*/


const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function (){
    console.log(window.scrollY);
    if (window.scrollY > 500){
        //배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none' //요소 아예없애기
        });
    }
    else{
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block' //요소 다시만들기
        });
    }
}, 300)); 
/* 스크롤 할때마다 동작하는 스크립트(스크롤 애니메이션)
    _.throttle(함수, 시간) 
    gsap.to(요소, 지속시간, 옵션);
    */





