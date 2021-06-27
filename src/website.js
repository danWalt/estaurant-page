import createHomePage from './home.js'
import createContactPage from './contact.js'
import createProductsPage from './products.js'

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
        const products = document.createElement('li')
        const contact = document.createElement('li')

        setHeaderLiItems(home, products, contact)

        tabList.classList.add('tab-list')
        tabList.appendChild(home)
        tabList.appendChild(products)
        tabList.appendChild(contact)
        
        return tabList
    }

    function setHeaderLiItems(home, products, contact) {
        home.innerText = 'Home'
        products.innerText = 'Products'
        contact.innerText = 'Contact'

        home.setAttribute('id', 'home')
        home.classList.add('hidden')
        products.setAttribute('id', 'products')
        contact.setAttribute('id', 'contact')

        addListeners(home,products,contact) 

    }   
    

    function addListeners(home,products,contact) {
        home.addEventListener('click', () => {
            content.parentNode.removeChild(content)
            document.body.appendChild(createHomePage())
            setHidden([home,products,contact], home)
        })

        products.addEventListener('click', () => {
            content.parentNode.removeChild(content)
            document.body.appendChild(createProductsPage())
            setHidden([home,products,contact], products)

        })
        
        contact.addEventListener('click', () => {
            content.parentNode.removeChild(content)
            document.body.appendChild(createContactPage())
            setHidden([home,products,contact], contact)
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