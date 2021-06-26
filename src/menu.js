function createMenuPage (){
    const content = loadMenuPage()

    function loadMenuPage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')

        content.innerText = 'Menu page'

        return content

        }
          

   return content
} 

export default createMenuPage;