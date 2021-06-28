function createProductsPage (){
    const content = loadProductsPage()

    function loadProductsPage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')


        return content

        }
          

   return content
} 

export default createProductsPage;