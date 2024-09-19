$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
   
});
const modal = document.getElementById('registrationModal');
const mosqueBtn = document.getElementById('mosqueBtn');
const closeModal = document.getElementsByClassName('close')[0];

// Open the modal when "Mosque" is clicked
mosqueBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close the modal when the close (x) is clicked
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Prevent form from submitting to demonstrate modal functionality
const form = document.getElementById('registrationForm');
form.onsubmit = function(event) {
    event.preventDefault();
    alert('Mosque registered successfully!');
    modal.style.display = 'none';
}
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 4000);
