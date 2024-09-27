$(document).ready(function () {
    // Sticky navbar on scroll
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Show/hide scroll-up button
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Smooth scroll on menu items click and close the menu
    $('.navbar .menu li a').click(function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Smooth scroll to the section
        let targetSection = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetSection).offset().top
        }, 800); // Adjust 800 for scroll speed

        // Close the menu and deactivate the hamburger icon
        $('.navbar .menu').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });

    // Modal functionality
    const modal = document.getElementById('registrationModal');
    const mosqueBtn = document.getElementById('mosqueBtn');
    const closeModal = document.getElementsByClassName('close')[0];

    mosqueBtn.onclick = function () {
        modal.style.display = 'block';
    }

    closeModal.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Prevent form submission for demo purposes
    const form = document.getElementById('registrationForm');
    form.onsubmit = function (event) {
        event.preventDefault();
        alert('Mosque registered successfully!');
        modal.style.display = 'none';
    }

});
// Open the modal when the apply button is clicked
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

// Close the modal when the close button is clicked
document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
// Show the registration form when 'Register here' is clicked
document.getElementById('showQarjRegister').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('qarjLoginForm').style.display = 'none';
    document.getElementById('qarj-registration-form').style.display = 'block';
});

// Handle registration form submission
document.getElementById('qarjRegisterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registered successfully! Redirecting to login...');
    // After registration, redirect to login form
    document.getElementById('qarj-registration-form').style.display = 'none';
    document.getElementById('qarjLoginForm').style.display = 'block';
});

// Handle login form submission
document.getElementById('qarjLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Logged in successfully! Redirecting to apply form...');
    // After login, show the apply form
    document.getElementById('qarjLoginForm').style.display = 'none';
    document.getElementById('qarj-application-form').style.display = 'block';
});
// Show Forgot Password Form
document.getElementById('forgotPasswordLink').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('qarjLoginForm').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
});

// Handle Forgot Password Form Submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Password reset instructions sent. Please check your email.');
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('qarjLoginForm').style.display = 'block';
});

// Back to Login from Forgot Password Form
document.getElementById('backToLogin').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('qarjLoginForm').style.display = 'block';
});

// Handle apply form submission
document.getElementById('qarjApplyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Application submitted successfully!');
    // You can add additional actions here after applying
});


