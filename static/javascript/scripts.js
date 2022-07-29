console.log("https://github.com/emoltz/Website")

const switcher = document.getElementById('theme-switcher')
const allContent = document.getElementById('theme')
const rootSCSS = document.querySelector(':root');
const backButton = document.getElementById('back');

let theme;


function darkMode() {
    allContent.classList.remove('bg-light');
    allContent.classList.add('bg-dark');
    allContent.classList.add('text-white');
    rootSCSS.style.setProperty('--color-primary', '#81b29a')
    // TODO this should only happen if we're on the blog detail page
    if (backButton) {
        backButton.classList.toggle('btn-outline-secondary');
        backButton.classList.toggle('btn-outline-success');
    }


    //save setting
    localStorage.setItem('theme', 'dark');
    switcher.checked = true;

}

function lightMode() {
    allContent.classList.remove('bg-dark');
    allContent.classList.add('bg-light');
    allContent.classList.remove('text-white');
    rootSCSS.style.setProperty('--color-primary', '#656d4a');

    if (backButton) {
        backButton.classList.toggle('btn-outline-secondary');
        backButton.classList.toggle('btn-outline-success');
    }


    //save setting
    localStorage.setItem('theme', 'light');

}


// TODO how to make this persist between pages?
if (localStorage.getItem('theme') === 'light') {
    lightMode();
    //how to keep the button flipped?

} else {
    darkMode();

}


switcher.addEventListener('change', function (event) {
    if (event.target.checked) {
        // dark mode activate
        darkMode();


    } else {
        // light mode activate
        lightMode();
    }
})
