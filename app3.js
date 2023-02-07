

const toggle = document.getElementById('toggleDark');
const body = document.querySelector("body");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    
    if (this.classList.toggle('bi-moon')) {

        body.style.background = 'white';
        body.style.color = '#343541';
        body.style.transition = '2sec';
        

    } else {

        body.style.background = '#343541';
        body.style.color = 'white';
        body.style.transition = '2s';

    }
})
