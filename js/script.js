const hamburger_btn = document.getElementById('hamburger');
const mobile_menu = document.getElementById('mobile_menu');


hamburger_btn.addEventListener('click', () =>{
    hamburger_btn.classList.toggle('open_hamburger');
    mobile_menu.classList.toggle('hidden')
})


