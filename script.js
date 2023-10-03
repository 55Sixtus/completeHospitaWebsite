//navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarWideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarWideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

//changing searchicon img on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1000px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    }else{
        document.querySelector('.search-icon img'). src = "images/search-icon-dark.png";

    }
}
changeSearchIcon();

changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});