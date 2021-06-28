function createHomePage (){
    const content = loadHomePage()

    function loadHomePage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')

        addImage(content)
        createAboutDiv(content)


        return content

        }

        function createAboutDiv(content) {
            
            const aboutDiv = document.createElement('div')
            aboutDiv.setAttribute('id', 'about')
            aboutDiv.classList.add('text-box')
            
            const aboutH3 = document.createElement('h3')
            aboutH3.innerText = 'About Us'

            const aboutText = document.createElement('p')
            aboutText.classList.add('text')
            aboutText.innerText = 'The place has been operating since 1924 and ' +
            'was established by immigrants from Thessaloniki. 30 years ' + 
            'ago by David and Juliette Refaeli started running the place and have kept on doing so ever since. Apart from dozens of types ' + 
            'of spices like black mustard seeds and organic flax there are also herbs and even ' + 
            'amber that is made from whales and is beneficial according to the belief in male potency.'

            aboutDiv.appendChild(aboutH3)
            aboutDiv.appendChild(aboutText)
            content.appendChild(aboutDiv)
        }     

        function addImage(content) {
            const imageDiv = document.createElement('div')
            imageDiv.classList.add('img-div')

            const img = document.createElement('img')
            img.setAttribute('id', 'home-img')
            img.src = 'src\\images\\atlas2.jpg'

            imageDiv.appendChild(img)
            content.appendChild(imageDiv)
        }


   return content
} 

export default createHomePage;