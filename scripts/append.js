// 1.Where to add
const placesList= document.getElementById('places-list');
// console.log(placesList);
// 2. What to be added
const li = document.createElement('li');
li.innerText = 'pahartoliBon';

//3. add the child
placesList.appendChild(li)

// Where to add

const mainContainer = document.getElementById('main-container');

//2.Where to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);


const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

section.appendChild(ul);

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);


mainContainer.appendChild(section);


// Set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>lungi</li>
    <li>under-pant</li>
</ul>
`
mainContainer.appendChild(sectionDress);