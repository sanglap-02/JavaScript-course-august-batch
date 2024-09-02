/*
********* DOM manipulation ***********
DOM (Document Object Model) manipulation in JavaScript allows you to interact with and modify the structure, style, and content of a web page. Here's an overview to get you started:

1. Understanding the DOM
DOM Structure: The DOM represents the structure of an HTML document as a tree of objects. Each element, attribute, and text in the HTML is represented as a node in this tree.
Accessing the DOM: JavaScript can interact with the DOM to change the content, structure, or style of a webpage.
2. Selecting Elements
To manipulate the DOM, you first need to select the elements you want to work with.

getElementById(): Selects an element by its ID.


const element = document.getElementById('myId');
getElementsByClassName(): Selects all elements with a specific class name.

const elements = document.getElementsByClassName('myClass');
getElementsByTagName(): Selects all elements with a specific tag name.

const elements = document.getElementsByTagName('div');
querySelector(): Selects the first element that matches a CSS selector.

const element = document.querySelector('.myClass');
querySelectorAll(): Selects all elements that match a CSS selector.

const elements = document.querySelectorAll('div.myClass');
3. Manipulating Content
Once you've selected an element, you can manipulate its content:

innerHTML: Change or get the HTML inside an element.

element.innerHTML = '<p>New content</p>';
textContent: Change or get the text content of an element.

element.textContent = 'New text content';
4. Manipulating Attributes
You can get or set attributes like src, href, class, etc.

getAttribute(): Get the value of an attribute.

const src = element.getAttribute('src');
setAttribute(): Set the value of an attribute.

element.setAttribute('src', 'newImage.png');
5. Manipulating Styles
You can change the CSS styles of an element:

style property: Directly change inline styles.

element.style.color = 'red';
classList: Add, remove, or toggle classes.

element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('toggleClass');
6. Creating and Inserting Elements
You can create new elements and insert them into the DOM:

createElement(): Create a new element.

const newElement = document.createElement('div');
newElement.textContent = 'I am new!';
appendChild(): Add the new element as the last child of a parent.

document.body.appendChild(newElement);
insertBefore(): Insert an element before another element.

const parent = document.getElementById('parentElement');
const referenceElement = document.getElementById('referenceElement');
parent.insertBefore(newElement, referenceElement);
7. Removing Elements
You can also remove elements from the DOM:

removeChild(): Remove a specific child element.

const parent = document.getElementById('parentElement');
const child = document.getElementById('childElement');
parent.removeChild(child);
remove(): Directly remove an element.

const element = document.getElementById('elementToRemove');
element.remove();
8. Event Handling
DOM manipulation is often tied to events:

addEventListener(): Attach an event listener to an element.

element.addEventListener('click', function() {
  alert('Element clicked!');
});

9. Best Practices
Minimize Direct DOM Manipulation: Frequent direct manipulation can be inefficient, especially in large applications. Libraries like React or frameworks like Angular handle DOM updates more efficiently.
Use Event Delegation: When working with many elements, it's often better to listen for events on a parent element rather than each individual child.
Learning DOM manipulation is fundamental for building interactive web pages. As you practice, you'll become more comfortable using these techniques to create dynamic content.




*/

// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Create Element
    const createBtn = document.getElementById('createBtn');
    const createResult = document.getElementById('createResult');
    
    createBtn.addEventListener('click', () => {
        // const newElement = document.createElement('p');
        // newElement.textContent = 'New Element Added!';
        // createResult.appendChild(newElement);
        const newElm=document.createElement('h1')
        newElm.textContent='new element added'

        
        createResult.appendChild(newElm)


    });

    // 2. Update Element
    const updateBtn = document.getElementById('updateBtn');
    const updateText = document.getElementById('updateText');
    
    updateBtn.addEventListener('click', () => {
        // updateText.innerHTML='<h1>changed text </h1>';
        updateText.textContent = '<h1>changed text </h1>';
    });

    // 3. Delete Element
    const deleteBtn = document.getElementById('deleteBtn');
    const deleteText = document.getElementById('deleteText');
    
    deleteBtn.addEventListener('click', () => {
        deleteText.remove();
    });

    // 4. Event Handling (Hover)
    const hoverBtn = document.getElementById('hoverBtn');
    const hoverText = document.getElementById('hoverText');
    
    hoverBtn.addEventListener('mouseover', () => {
        hoverText.textContent = 'You are hovering over the button!';
    });

    hoverBtn.addEventListener('mouseout', () => {
        hoverText.textContent = 'Hover on the button above.';
    });

    // 5. DOM Traversal (Select Sibling)
    const traverseBtn = document.getElementById('traverseBtn');
    const siblingOne = document.getElementById('siblingOne');
    const siblingTwo = document.getElementById('siblingTwo');
    
    traverseBtn.addEventListener('click', () => {
        siblingTwo.style.color = 'blue'; // Access sibling element and change style
    });

    // 6. CSS Manipulation
    const styleBtn = document.getElementById('styleBtn');
    
    styleBtn.addEventListener('click', () => {
        styleBtn.style.backgroundColor = 'green';
        styleBtn.style.color = 'white';

        styleBtn.style.fontSize='50px'
    });
});

document.getElementById('header-text')
