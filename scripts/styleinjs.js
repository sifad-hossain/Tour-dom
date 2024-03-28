const sections = document.querySelectorAll('section')
for (const section of sections) {
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '20px';
    section.style.paddingLeft = '15px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.getElementById('Places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');

// placesContainer.classList.add('yellow-bg');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text')