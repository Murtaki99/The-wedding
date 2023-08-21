//  Script countdown
simplyCountdown('.countdown', {
    year: 2025, // required
    month: 7, // required
    day:7, // required
    hours: 8, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Minggu', plural: 'Minggu' },
        hours: { singular: 'Jam', plural: 'Jam' },
        minutes: { singular: 'Menit', plural: 'Menit' },
        seconds: { singular: 'Detik', plural: 'Detik' }
    },
});
//Script Navbar Sticky
const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas');

offcanvas.addEventListener('show.bs.offcanvas', function(){
    stickyTop.style.overflow ='visible';
});
offcanvas.addEventListener('hidden.bs.offcanvas', function () {
    stickyTop.style.overflow = 'hidden';
}); 

// Disble Scroll
const rootElement = document.querySelector(":root");
function disbleScroll(){
    scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function(){
        window.scrollTo(scrollTop, scrollLeft);
    }

    rootElement.style.scrollBehavior = 'auto';
}

function enableScroll(){
    window.onscroll = function(){}
    rootElement.style.scrollBehavior = 'smooth';
    localStorage.setItem('opened', 'true')
}

if(!localStorage.getItem('opened')){
    disbleScroll();
}

// On Redirect Form
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      Swal.fire(
        'Thank You !',
        'konfirmasi kehadiran selesai',
        'success'
        );
    })
  });
});