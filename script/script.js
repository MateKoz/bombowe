//dodawanie cienia do nava, gdy zjedziemy na doł na stronie, o daną wartość w scrollY
document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector(`.navbar`)
    const addShadow = () => {
        if (window.scrollY >= 86) {
            navBar.classList.add('shadow-bg')
        } else {
            navBar.classList.remove('shadow-bg')
        }
    }
    // chowanie hamburgermenu po wybraniu ktoregoś odnosnika
    const navBarCollapse = document.querySelector(`.navbar-collapse`);
    const navList = document.querySelectorAll(`.nav-link`)

    navList.forEach(item => item.addEventListener(('click'), () => navBarCollapse.classList.remove('show')))

    window.addEventListener('scroll', addShadow)
})


