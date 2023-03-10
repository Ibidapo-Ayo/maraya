const hamburger_btn = document.getElementById('hamburger');
const mobile_menu = document.getElementById('mobile_menu');


hamburger_btn.addEventListener('click', () =>{
    hamburger_btn.classList.toggle('open_hamburger');
    mobile_menu.classList.toggle('hidden')
})

// Data  Filter

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.work');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })
}
