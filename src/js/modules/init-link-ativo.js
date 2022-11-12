export default function initLinkAtivo() {
    const links = document.querySelectorAll('[data-nav="link"] li a')
    const linksPlanet = document.querySelectorAll('[data-planet="link"] li a')

    function ativarLink(link) {
        const url = location.href;
        const href = link.href;
        if (url.includes(href)) {
            link.classList.add('ativo');
        }
    }

    function planetLinks() {
        linksPlanet.forEach((item) => {
            item.classList.remove('ativo')
        })
        this.classList.add('ativo')
    }

    linksPlanet.forEach(event => {
        event.addEventListener('click', planetLinks)
    })
    links.forEach(ativarLink)


}