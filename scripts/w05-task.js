/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElements = document.querySelector('#temples')
let templeList = []
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article')
        let h3 = document.createElement('h3')
        h3.textContent = temple.templeName
        let img = document.createElement('img')
        img.src = temple.imageUrl
        img.atl = temple.location
        article.append(h3,img)
        templeElements.append(article)
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    const data = await response.json()
    templeList.push(data)
}
console.log(templeList)

/* reset Function */
const reset = () => {
    templeElements.innerHTML =''
}

/* sortBy Function */
function sortBy (temples) {
    console.log(temples[0])
    reset()
    let filter = document.querySelector('#sortBy').value
    console.log(filter)
    switch (filter) {
        case 'utah':
            return displayTemples(temples[0].filter(temple => temple.templeName.includes('Utah')))
        break;
        case 'notutah':
            return displayTemples(temples[0].filter(temple => !temple.templeName.includes('Utah')))
        break;
        case 'older':
            console.log(temples[0][1].dedicated , "-", new Date(1950,0,1).toUTCString())
            return displayTemples(temples[0].filter(temple => new Date(temple.dedicated) <= new Date(1950,0,1)))
        break;
        case 'A-Z':
            return displayTemples(temples[0].sort((a, b) => a.templeName.localeCompare(b.templeName)))
        break;
        case 'Z-A':
            return displayTemples(temples[0].sort((a, b) => b.templeName.localeCompare(a.templeName)))
        break;
        case 'all':
         return displayTemples(temples[0])
        break;
        default:
            break;
    }
}


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {sortBy(templeList)} )