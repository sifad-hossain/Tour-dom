


 // Option: 01 GetElementsByTagName  
const liColletion = document.getElementsByTagName('li');
// console.log(liColletion);
for (const li of liColletion) {
    // console.log(li);
    // console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName('h1')

for (const h1 of allHeadings) {
    // console.log(h1);
    // console.log(h1.innerText);
}

// Option: 02 getElementsById
const fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText = 'Fruits changed by JS'

// Option 03: getElementsByClassName
const places = document.getElementsByClassName('important-places')
for (const place of places) {
    // console.log(places.innerText);
}
    
// Option 04: QuerySelectorAll


// Option 05: QuerySelectorAll
const someLi = document.querySelectorAll('.fruits-container li')

for (const li of someLi) {
    // console.log(li.innerText);
}




