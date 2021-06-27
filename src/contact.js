function createContactPage (){
    const content = loadContactPage()

    function loadContactPage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')


        return content

        }
          

   return content

} 

export default createContactPage;