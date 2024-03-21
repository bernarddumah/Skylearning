function toggleDarkMode() {
    document.querySelector('body').classList.toggle('dark-theme')
}

document.addEventListener('DOMContentLoaded', function () {
    // Responsive navigation menu
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('ion-icon[name="menu-outline"]');

    menuIcon.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });

    // Simple form validation for Sign Up button
    const signUpButton = document.querySelector('.nav-butt');

    signUpButton.addEventListener('click', function () {
      const countrySelect = document.getElementById('country');
      if (countrySelect.value === 'country') {
        alert('Please select a country');
      } 
      
      else {
        alert('Sign Up Successful!');
      }
    });
  });
    
