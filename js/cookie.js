document.addEventListener('DOMContentLoaded', function() {
    const cookieBox = document.querySelector('.wrapper3');
    const acceptBtn = document.getElementById('acceptBtn');
    const declineBtn = document.getElementById('declineBtn');

    // Show cookie consent box after 2 seconds
    setTimeout(() => {
        cookieBox.classList.add('show');
    }, 2000);

    // Function to hide the cookie consent box
    function hideCookieBox() {
        cookieBox.classList.remove('show');
    }

    // Add event listeners for the buttons
    acceptBtn.addEventListener('click', hideCookieBox);
    declineBtn.addEventListener('click', hideCookieBox);
});
