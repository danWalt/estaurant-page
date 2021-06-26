import createHomePage from './home.js'
import createContactPage from './contact.js'
import createMenuPage from './menu.js'

require('./css/style.css');

function buildWebsite(){
    const header = createHeader()
    createNavBar(header)

    function createNavBar (header) {
        const nav = createNav()
        const tabList = createTabList()

        createCovers(nav)

        nav.appendChild(tabList)
        header.appendChild(nav)
        document.body.appendChild(header)
        document.body.appendChild(createHomePage())
    }
    
    function createHeader(){
        const header = document.createElement('header')
        const atlasCoffee = document.createElement('h1')
        atlasCoffee.innerText = 'Atlas Coffee'
        atlasCoffee.setAttribute('id', 'title')
        header.appendChild(atlasCoffee)

        return header
    }

    function createNav(){
        const nav = document.createElement('nav')
        return nav
    }

    function createTabList(){
        const tabList = document.createElement('ul')
        const home = document.createElement('li')
        const menu = document.createElement('li')
        const contact = document.createElement('li')

        setHeaderLiItems(home, menu, contact)

        tabList.classList.add('tab-list')
        tabList.appendChild(home)
        tabList.appendChild(menu)
        tabList.appendChild(contact)

        addListeners(home,menu,contact) 
        
        return tabList
    }

    function setHeaderLiItems(home, menu, contact) {
        home.innerText = 'Home'
        menu.innerText = 'menu'
        contact.innerText = 'contact'

        home.setAttribute('id', 'home')
        menu.setAttribute('id', 'menu')
        contact.setAttribute('id', 'contact')
    }
    
    function createCovers(nav){
        const coverHome = document.createElement('div')
        const coverMenu = document.createElement('div')
        const coverContact = document.createElement('div')
        
        coverHome.setAttribute('id', 'coverHome')
        coverHome.classList.add('cover')
        coverMenu.setAttribute('id', 'coverMenu')
        coverMenu.classList.add('cover')
        coverContact.setAttribute('id', 'coverContact')
        coverContact.classList.add('cover')


        nav.appendChild(coverHome)
        nav.appendChild(coverMenu)
        nav.appendChild(coverContact)
    }


    function addListeners(home,menu,contact) {
        home.addEventListener('click', () => {
            content.parentNode.removeChild(content)
            document.body.appendChild(createHomePage())
            //addHiddenClass(document.getElementById('coverHome'))
        })
        menu.addEventListener('click', () => {
            content.parentNode.removeChild(content)
            document.body.appendChild(createMenuPage())
            //addHiddenClass(document.getElementById('coverMenu'))
        })
        contact.addEventListener('click', () => {
            content.parentNode.removeChild(content)
            document.body.appendChild(createContactPage())
            //addHiddenClass(document.getElementById('coverContact'))
        })
    }
    
    //TODO: add hidden class to clicked li item and remove from other li
    function addHiddenClass (element){
        document.getElementById(element).classList.add('hidden')

    }

//     function createFooter() {
//         const footer = document.createElement('footer')
//         footerList = document.createElement('ul')
// }
//     function build(){
        
//     }




}

export default buildWebsite