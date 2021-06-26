function createHomePage (){
    const content = loadHomePage()

    function loadHomePage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')

        content.innerText = 'home page'

        return content

        }
          

   return content
} 

export default createHomePage;