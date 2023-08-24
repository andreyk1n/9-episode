let theme = document.getElementById('theme');
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

let applyTheme = () => {
    if (isDarkMode) {
        document.body.setAttribute('light', '');
    } else {
        document.body.removeAttribute('light');
    }
};

let handleChange = (event) => {
    isDarkMode = event.target.checked;
    localStorage.setItem('isDarkMode', isDarkMode);
    applyTheme();

    // Додаємо параметр до URL зі значенням перемикача
    let urlParams = new URLSearchParams(window.location.search);
    urlParams.set('darkMode', isDarkMode);
    let newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
};

theme.addEventListener('change', handleChange);
applyTheme();

function scrollToTop() {
    var currentPosition = window.scrollY;
    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 10);
    }
}

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function () {
    scrollToTop();
});
