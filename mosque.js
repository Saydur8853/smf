document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const mosqueName = document.getElementById('mosqueName').value;
        const village = document.getElementById('village').value;
        const district = document.getElementById('district').value;
        const thana = document.getElementById('thana').value;
        const division = document.getElementById('division').value;
        const imamName = document.getElementById('imamName').value;
        const imamMobile = document.getElementById('imamMobile').value;
        const muazzinName = document.getElementById('muazzinName').value;
        const muazzinMobile = document.getElementById('muazzinMobile').value;

        let isValid = true;

        // Basic validation
        if (!email.includes('@')) {
            document.getElementById('emailError').innerText = 'Please enter a valid email';
            isValid = false;
        } else {
            document.getElementById('emailError').innerText = '';
        }

        if (password.length < 6) {
            document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long';
            isValid = false;
        } else {
            document.getElementById('passwordError').innerText = '';
        }

        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
            isValid = false;
        } else {
            document.getElementById('confirmPasswordError').innerText = '';
        }

        if (isValid) {
            alert('Registration successful!');
            // Here you would typically send the form data to the server
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        let isValid = true;

        if (!loginEmail.includes('@')) {
            document.getElementById('loginEmailError').innerText = 'Please enter a valid email';
            isValid = false;
        } else {
            document.getElementById('loginEmailError').innerText = '';
        }

        if (loginPassword.length < 6) {
            document.getElementById('loginPasswordError').innerText = 'Password must be at least 6 characters long';
            isValid = false;
        } else {
            document.getElementById('loginPasswordError').innerText = '';
        }

        if (isValid) {
            alert('Login successful!');
            // Here you would typically send the form data to the server
        }
    });

    document.getElementById('goToLogin').addEventListener('click', function() {
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    });

    document.getElementById('goToRegister').addEventListener('click', function() {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('register-container').style.display = 'block';
    });
});
