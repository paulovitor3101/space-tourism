
export default function initMenu() {
    const btnMenu = document.getElementById('menu'),
        btnMemuClose = document.getElementById('close-menu'),
        menuMobile = document.querySelector('.menu-mobile')

    function activeMenu() {
        menuMobile.classList.add('ativo')

        btnMemuClose.addEventListener('click', () => {
            menuMobile.classList.remove('ativo')
        })
    }
    btnMenu.addEventListener('click', activeMenu)

}