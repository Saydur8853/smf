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

    // Image slider functionality
    let counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 4000);
});
