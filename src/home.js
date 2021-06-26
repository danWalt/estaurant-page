function createHomePage (){
    const content = loadHomePage()

    function loadHomePage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')
        content.innerText = 'Home page'

        createAboutDiv(content)
        createOpeningHoursDiv(content)
        createLocationDiv(content)

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
            aboutText.innerText = 'This is the about section'

            aboutDiv.appendChild(aboutH3)
            aboutDiv.appendChild(aboutText)
            content.appendChild(aboutDiv)

        }
          
        function createOpeningHoursDiv(content) {
            
            const openingHoursDiv = document.createElement('div')
            openingHoursDiv.setAttribute('id', 'opening-hours')
            openingHoursDiv.classList.add('text-box')
    
            const openingHoursH3 = document.createElement('h3')
            openingHoursH3.innerText = 'Opening Hours'

            const openingHoursText = document.createElement('p')
            openingHoursText.classList.add('text')
            openingHoursText.innerText = 'This is the opening hours section'

            openingHoursDiv.appendChild(openingHoursH3)
            openingHoursDiv.appendChild(openingHoursText)
            content.appendChild(openingHoursDiv)
        }

        function createLocationDiv(content) {

            const locationDiv = document.createElement('div')
            locationDiv.setAttribute('id', 'lcation')
            locationDiv.classList.add('text-box')
    
            const locationH3 = document.createElement('h3')
            locationH3.innerText = 'Location'
    
            const locationText = document.createElement('p')
            locationText.classList.add('text')
            locationText.innerText = '123 Forest Drive, Forestville, Maine'
    
    
            locationDiv.appendChild(locationH3)
            locationDiv.appendChild(locationText)
            content.appendChild(locationDiv)
    
        }

   return content
} 

export default createHomePage;