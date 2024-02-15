const initApp=()=>{
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu= document.getElementById('mobile-menu');

    const toggglemenu=()=>{
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
       
    }
    hamburgerBtn.addEventListener('click',toggglemenu);
    mobileMenu.addEventListener('click',toggglemenu);
}

document.addEventListener('DOMContentLoaded',initApp);