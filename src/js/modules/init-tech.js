export default function initTechLinks() {
    const techLinks = document.querySelectorAll('[data-tech="link"] li')
    function techLink() {
        techLinks.forEach((item) => {
            item.classList.remove('ativo')
        })
        this.classList.add('ativo')
    }

    techLinks.forEach(event => {
        event.addEventListener('click', techLink)
    })

}