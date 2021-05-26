function toggleMenuHandler() {
    var header = document.querySelector('.navbar');
    header.classList.toggle('unfolded');
}

window.addEventListener('load', function () {
    var menuToggleButton = document.querySelector('.navbar > .navbar-header > .menu-toggle-button');
    menuToggleButton.addEventListener('click', toggleMenuHandler);
});
