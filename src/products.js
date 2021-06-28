function createProductsPage (){
    const content = loadProductsPage()

    function loadProductsPage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')

        coffeImage(content)
        spicesImage(content)

        return content

        }
          

    
    function coffeImage(content) {
        const imageDiv = document.createElement('div')
        imageDiv.setAttribute('id', 'coffee-img')
        imageDiv.classList.add('img-div')

        const img = document.createElement('img')
        img.src = 'src\\images\\coffeebeans.jpg'

        imageDiv.appendChild(img)
        content.appendChild(imageDiv)
    }

    function spicesImage(content) {
        const imageDiv = document.createElement('div')
        imageDiv.setAttribute('id', 'spices-img')
        imageDiv.classList.add('img-div')

        const img = document.createElement('img')
        img.src = 'src\\images\\spices.jpg'

        imageDiv.appendChild(img)
        content.appendChild(imageDiv)
    }

   return content
} 

export default createProductsPage;