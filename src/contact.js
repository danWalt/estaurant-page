function createContactPage (){
    const content = loadContactPage()

    function loadContactPage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')

        content.innerText = 'Contact page'

        return content

        }
          

   return content

} 

export default createContactPage;