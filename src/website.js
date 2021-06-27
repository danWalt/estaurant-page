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

        nav.appendChild(tabList)
        header.appendChild(nav)
        document.body.appendChild(header)
        document.body.appendChild(createHomePage())
    }
    
    function createHeader(){
        const header = document.createElement('header')
        const atlasCoffee = document.createElement('h1')
        atlasCoffee.innerText = 'Atlas'
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
        
        return tabList
    }

    function setHeaderLiItems(home, menu, contact) {
        home.innerText = 'Home'
        menu.innerText = 'Menu'
        contact.innerText = 'Contact'

        home.setAttribute('id', 'home')
        home.classList.add('hidden')
        menu.setAttribute('id', 'menu')
        contact.setAttribute('id', 'contact')

        addListeners(home,menu,contact) 

    }   
    

    function addListeners(home,menu,contact) {
        home.addEventListener('click', () => {
            content.parentNode.removeChild(content)
            document.body.appendChild(createHomePage())
            setHidden([home,menu,contact], home)

        })
        menu.addEventListener('click', () => {
            content.parentNode.removeChild(content)
            document.body.appendChild(createMenuPage())
            setHidden([home,menu,contact], menu)

        })
        contact.addEventListener('click', () => {
            content.parentNode.removeChild(content)
            document.body.appendChild(createContactPage())
            setHidden([home,menu,contact], contact)
        })
    }
    

    function setHidden(tabList, tab) {
        
        tabList.forEach(element => {
            if (element == tab) {
                tab.classList.add('hidden')
            }
            else {
                element.classList.remove('hidden');
            }
        });
    }

//     function createFooter() {
//         const footer = document.createElement('footer')
//         footerList = document.createElement('ul')
// }
//     function build(){
        
//     }




}

export default buildWebsite