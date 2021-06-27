function createContactPage (){
    const content = loadContactPage()

    function loadContactPage() {
        const content = document.createElement('div')
        content.setAttribute('id', 'content')

        createOpeningHoursDiv(content)
        createLocationDiv(content)
        
        return content
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

export default createContactPage;