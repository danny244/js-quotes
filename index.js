// selecting the body element and styling it
const body = document.querySelector('body');

body.style.fontFamily = `"Caveat", cursive`
body.style.fontStyle = 'normal';
body.style.fontOpticalSizing = 'auto'





// selecting the id of our main tag where we will create our html;
const app = document.getElementById('app');

app.style.width = '100vw';
app.style.height = '100vh';
app.style.display = 'flex';
app.style.justifyContent = 'center';
app.style.alignItems = 'center'


// creating the parent div that would hold our quotes and the text;
const parentDiv = document.createElement('div')

parentDiv.style.display = 'flex';
parentDiv.style.flexDirection = 'column';
parentDiv.style.gap = '0.2rem';
parentDiv.style.backgroundColor = '#f9f9f9';
parentDiv.style.padding = '0.6rem';
parentDiv.style.borderRadius = '0.2rem';




// creating a span tag to hold our quotes
const spanTag1 = document.createElement('span');
const spanTag2 = document.createElement('span');

// this is where we inserted the quotes into the span tag
spanTag1.textContent = ` " `;
spanTag2.textContent = ` " `;

spanTag1.style.color = 'blue'
spanTag2.style.color = 'blue'

spanTag1.style.fontSize = '1.5rem'
spanTag2.style.fontSize = '1.5rem'

// This are here because the quotes are too far from the text
// comment it out to see out it works better
spanTag1.style.marginBottom = '-0.8rem'
spanTag2.style.marginTop = '-0.2rem'




// creating our pTag to hold the texts
const pTag = document.createElement('p');

pTag.style.fontSize = '0.9rem';

pTag.textContent = 'See you on the other side where we will discuss events in javascript may the force be with you.'



// appending our quotes and texts to the parent div tag
parentDiv.append(spanTag1);
parentDiv.append(pTag);
parentDiv.append(spanTag2);

// appending our parentDiv tag that we created using javascript into the main tag in the html
app.append(parentDiv);





// array 
// [spanTag1, spanTag2].forEach((element) => {
//       element.textContent = ` " `
// })