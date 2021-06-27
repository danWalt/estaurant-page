function createProductsPage (){
    const content = loadMenuPage()

    function loadMenuPage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')


        return content

        }
          

   return content
} 

export default createProductsPage;