function createHomePage (){
    const content = loadHomePage()

    function loadHomePage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')

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
            aboutText.innerText = 'The place has been operating since 1924 and ' +
            'was established by immigrants from Thessaloniki. 30 years ' + 
            'ago by David and Juliette Refaeli started running the place and have kept on doing so ever since. Apart from dozens of types ' + 
            'of spices like black mustard seeds and organic flax there are also herbs and even ' + 
            'amber that is made from whales and is beneficial according to the belief in male potency.'

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
            openingHoursText.innerText = 'Sunday: 7:30am–7:30pm' + '\n'
            + 'Monday: 7:30am–7:30pm' + '\n'
            + 'Tuesday: 7:30am–7:30pm' + '\n'
            + 'Wednesday: 7:30am–7:30pm' + '\n'
            + 'Thursday: 7:30am–7:30pm' + '\n'
            + 'Friday: 7:30am–3pm' + '\n'
            + 'Saturday: Closed' + '\n'

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
            locationText.innerText = '49 Levinsky Street, Levinsky Market Tel Aviv '+ '\n' + '03-6824614'
    
    
            locationDiv.appendChild(locationH3)
            locationDiv.appendChild(locationText)
            content.appendChild(locationDiv)
    
        }

   return content
} 

export default createHomePage;