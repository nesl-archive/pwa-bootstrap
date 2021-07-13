'use-strict'

const initLinkActive = () => {
    const linkColor = document.querySelectorAll('.nav_link')
    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))
}

const initHeaderToggleListener = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if (toggle && nav && headerpd) {
        toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to header
            headerpd.classList.toggle('header_show-sidebar')
        })
    }
}

document.addEventListener("DOMContentLoaded", event => {
    initHeaderToggleListener('header-toggle', 'nav-bar', 'body-pd', 'header')
    initLinkActive()
});