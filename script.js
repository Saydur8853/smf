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
// Handle the form submissions for save actions (mocked functionality)
document.querySelectorAll('.form-buttons button').forEach(button => {
    button.addEventListener('click', function () {
        alert(`Action: ${this.textContent}`);
        // Reset the form and optionally close the modal
        this.closest('form').reset();
    });
});

// Handle apply form submission
document.getElementById('qarjApplyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Qaarj Hasana application submitted successfully!');
    this.reset();
});
// Variables to manage modal sections
const registrationSection = document.getElementById('qarjRegistrationSection');
const applySection = document.getElementById('qarjApplySection');

// Registration Form Save Button
document.querySelector('.save-btn').addEventListener('click', function () {
    // Assume registration is successful and show apply section
    registrationSection.style.display = 'none';
    applySection.style.display = 'block';
    alert('Registration successful. You can now apply for Qaarj Hasana.');
});

// Calculate Income-Expense Difference
document.getElementById('monthlyIncome').addEventListener('input', calculateDifference);
document.getElementById('monthlyExpense').addEventListener('input', calculateDifference);

function calculateDifference() {
    const income = parseFloat(document.getElementById('monthlyIncome').value) || 0;
    const expense = parseFloat(document.getElementById('monthlyExpense').value) || 0;
    document.getElementById('incomeExpenseDiff').value = income - expense;
}

// Apply Form Submission
document.getElementById('qarjApplyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Check if the user is registered and has savings
    const qarjId = document.getElementById('qarjId').value;
    const savingsAmount = parseFloat(document.getElementById('savingsAmount').value) || 0;

    if (!qarjId || savingsAmount <= 0) {
        alert('You must be registered and have savings to apply for Qaarj Hasana.');
        return;
    }

    alert('Qaarj Hasana application submitted successfully!');
    this.reset();
});

