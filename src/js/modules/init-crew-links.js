export default function initCrewLinks() {
    const crewNav = document.querySelectorAll('[data-crew="links"] li')
    function crewLinks() {
        crewNav.forEach((item) => {
            item.classList.remove('ativo')
        })
        this.classList.add('ativo')
    }

    crewNav.forEach(event => {
        event.addEventListener('click', crewLinks)
    })

}

