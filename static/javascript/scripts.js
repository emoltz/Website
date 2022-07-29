console.log("https://github.com/emoltz/Website")

const switcher = document.getElementById('theme-switcher')
const allContent = document.getElementById('theme')
const rootSCSS = document.querySelector(':root');
const backButton = document.getElementById('back');


function darkMode() {
    allContent.classList.remove('bg-light');
    allContent.classList.add('bg-dark');
    allContent.classList.add('text-white');
    rootSCSS.style.setProperty('--color-primary', '#81b29a')
    backButton.classList.toggle('btn-outline-secondary');
    backButton.classList.toggle('btn-outline-success');
}

function lightMode() {
    allContent.classList.remove('bg-dark');
    allContent.classList.add('bg-light');
    allContent.classList.remove('text-white');
    rootSCSS.style.setProperty('--color-primary', '#656d4a');
    backButton.classList.toggle('btn-outline-secondary');
    backButton.classList.toggle('btn-outline-success');
}

// TODO how to make this persist between pages?


switcher.addEventListener('change', function (event) {
    if (event.target.checked) {
        // dark mode activate
        darkMode();

    } else {
        // light mode activate
        lightMode();
    }
})
