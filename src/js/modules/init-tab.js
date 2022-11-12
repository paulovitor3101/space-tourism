export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li'),
        tabContent = document.querySelectorAll('[data-tab="content"] section'),
        imgs = document.querySelectorAll('[data-tab="img"] li')


    if (tabMenu.length && tabContent.length && imgs.length) {
        tabContent[0].classList.add('ativoTab');
        imgs[0].classList.add('ativoTab');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativoTab');
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativoTab', direcao);

            imgs.forEach((img) => {
                img.classList.remove('ativoTab')
            })

            const direcao2 = imgs[index].dataset.anime
            imgs[index].classList.add('ativoTab', direcao2)
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}