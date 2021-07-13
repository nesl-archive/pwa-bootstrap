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

const initHeaderToggleListener = (toggleId, navId, headerId, contentId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        headerpd = document.getElementById(headerId),
        contentpd = document.getElementById(contentId)

    // Validate that all variables exist
    if (toggle && nav && headerpd && contentpd) {
        toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to header
            headerpd.classList.toggle('header_show-sidebar')
            contentpd.classList.toggle('content_show-sidebar')
        })
    }
}

document.addEventListener("DOMContentLoaded", event => {
    initHeaderToggleListener('header-toggle', 'nav-bar', 'header', 'content')
    initLinkActive()
});