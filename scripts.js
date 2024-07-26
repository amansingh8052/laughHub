// document.addEventListener('DOMContentLoaded', function() {
//     const notificationLink = document.getElementById('notifications');
//     const profileLink = document.getElementById('profile');

//     notificationLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         window.location.href = 'notifications.html';
//     });

//     profileLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         window.location.href = 'profile.html';
//     });
// });
function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Error loading component:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header', 'components/header.html');
    loadComponent('sidebar', 'components/sidebar.html');
    loadComponent('card', 'components/card.html');
    loadComponent('footer', 'components/footer.html');
});
function navigateToPlayer() {
    window.location.href = 'playerpage.html';
}
function navigateToArtist() {
    window.location.href = 'artistPage.html';
}
//login and forget swipe
const loginForm = document.querySelector('.loginForm');
const forgetForm = document.querySelector('.forgetForm');
const forgetPassword = document.querySelector('.forgetPassword');
const backFromForget = document.querySelector('.backFromForget');
forgetPassword.addEventListener('click', (e) =>{
    e.preventDefault();
    loginForm.classList.add('Notactive');
    forgetForm.classList.add('active');
    console.log('clicked');
})
backFromForget.addEventListener('click', (e) =>{
    e.preventDefault();
    loginForm.classList.remove('Notactive');
    forgetForm.classList.remove('active');
    console.log('clicked');
})
