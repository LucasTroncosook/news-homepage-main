const menuOpen = document.getElementById('menu-open');
const fondOpacity = document.getElementById('fondo-opacity');
const menuResponsive = document.getElementById('menu-responsive');
const toggleMenu = () =>{
    const img = menuOpen.children[0];
    if(img.getAttribute('src')!== './assets/images/icon-menu-close.svg'){
        img.setAttribute('src', './assets/images/icon-menu-close.svg');
        fondOpacity.style.opacity = .5;
        menuResponsive.style.transform = 'translateX(0%)';
    }else{
        img.setAttribute('src', './assets/images/icon-menu.svg');
        fondOpacity.style.opacity = 0;
        menuResponsive.style.transform = 'translateX(100%)';
    }
    

}

menuOpen.addEventListener('click', toggleMenu);