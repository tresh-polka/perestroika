document.getElementById('next').addEventListener('click', function() {
const redirectUrl = this.getAttribute('data-url');
        if (redirectUrl) {
            window.location.href = redirectUrl;
        } else {
            console.log('Redirect URL not specified');
        }
});