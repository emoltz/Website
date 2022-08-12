console.log("https://github.com/emoltz/Website")

const switcher = document.getElementById('theme-switcher')
const allContent = document.getElementById('theme')
const rootSCSS = document.querySelector(':root');
const backButton = document.getElementById('back');
const blogPostTitle = document.querySelectorAll('#blog_post_title');
const card = document.querySelectorAll('.card');
let theme;

function darkMode() {
    allContent.classList.remove('bg-light');
    allContent.classList.add('bg-dark');
    allContent.classList.add('text-white');
    rootSCSS.style.setProperty('--color-primary', '#81b29a');

    rootSCSS.style.setProperty('--color-secondary', '#000000');

    if (backButton) {
        backButton.classList.toggle('btn-outline-secondary');
        backButton.classList.toggle('btn-outline-success');
    }
    if(blogPostTitle){
        blogPostTitle.forEach( e =>{
            e.classList.add('text-white');
        })
    }
    if(card){
        card.forEach(e => {
            e.classList.add('bg-dark');
            e.classList.remove('bg-light');
        })
    }


    //save setting
    localStorage.setItem('theme', 'dark');
    switcher.checked = true;

}

function lightMode() {
    allContent.classList.remove('bg-dark');
    allContent.classList.add('bg-light');
    allContent.classList.remove('text-white');
    rootSCSS.style.setProperty('--color-primary', '#656d4a'); //TODO find a way to link this to the SCSS
    rootSCSS.style.setProperty('--color-secondary', '#F0F7EE');

    if (backButton) {
        backButton.classList.toggle('btn-outline-secondary');
        backButton.classList.toggle('btn-outline-success');
    }
     if(blogPostTitle){
        blogPostTitle.forEach( e =>{
            e.classList.remove('text-white');
        })
    }

     if(card){
        card.forEach(e => {
            e.classList.remove('bg-dark');
            e.classList.add('bg-light');
        })
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
