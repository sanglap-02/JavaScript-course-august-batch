/*
Event handling in JavaScript allows you to make your web pages interactive by responding to user actions like clicks, keypresses, and form submissions. Understanding how to properly manage and handle events is crucial for creating dynamic and responsive web applications.

1. What is an Event?
An event in JavaScript refers to an interaction that occurs within the browser, which can be triggered by the user (like clicking a button) or the browser itself (like a page loading). Events are used to respond to these interactions and execute specific code.

2. Types of Events
Events in JavaScript can be broadly categorized into several types:

Mouse Events: Triggered by mouse actions.

click: Fired when an element is clicked.
dblclick: Fired when an element is double-clicked.
mouseover: Fired when the mouse pointer enters an element.
mouseout: Fired when the mouse pointer leaves an element.
mousedown: Fired when the mouse button is pressed down.
mouseup: Fired when the mouse button is released.
Keyboard Events: Triggered by keyboard actions.

keydown: Fired when a key is pressed down.
keyup: Fired when a key is released.
keypress: Fired when a key that produces a character is pressed.
Form Events: Triggered by interactions with form elements.

submit: Fired when a form is submitted.
change: Fired when an input element's value changes.
input: Fired when the value of an input, textarea, or select element is changed.
focus: Fired when an element gains focus.
blur: Fired when an element loses focus.
Window Events: Triggered by actions on the browser window.

load: Fired when the entire page has loaded.
resize: Fired when the window is resized.
scroll: Fired when the document is scrolled.
Document Events: Triggered by actions on the document itself.

DOMContentLoaded: Fired when the initial HTML document has been completely loaded and parsed.
3. Adding Event Listeners
To handle events, you use event listeners, which are functions that respond when an event occurs. There are several ways to add event listeners in JavaScript:

Method 1: Inline Event Handlers (Not Recommended)
This method involves adding event handlers directly in your HTML code. This approach is generally discouraged because it mixes HTML with JavaScript, making code harder to maintain.


<button onclick="alert('Button clicked!')">Click me</button>

Method 2: Using the onclick Property
You can define event handlers using the properties of DOM elements, such as onclick, onmouseover, etc.

const button = document.getElementById('myButton');
button.onclick = function() {
    alert('Button clicked!');
};

Method 3: Using addEventListener() (Recommended)
The most powerful and flexible way to handle events is by using addEventListener(). This method allows you to attach multiple event listeners to a single element and supports a wide range of events.


const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});
4. Removing Event Listeners
You can remove an event listener using removeEventListener(). This requires that the event handler function is defined separately (not anonymously).


function handleClick() {
    alert('Button clicked!');
}

button.addEventListener('click', handleClick);

button.removeEventListener('click', handleClick);
5. Event Object
When an event occurs, the browser creates an event object that contains useful information about the event, such as the type of event, the target element, and more. This object is automatically passed to the event handler function.


button.addEventListener('click', function(event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
});
Common properties and methods of the event object:

type: The type of the event (e.g., "click").
target: The element that triggered the event.
preventDefault(): Prevents the default action associated with the event (e.g., preventing a form submission).
stopPropagation(): Stops the event from bubbling up to parent elements.
6. Event Propagation
When an event occurs, it doesn’t just trigger on the target element but also triggers on its ancestors. Event propagation happens in two phases:

Capturing Phase:**
The event moves from the document root down to the target element. This phase is less commonly used in practice.

Bubbling Phase:**
After reaching the target element, the event bubbles up to the document root. This is the phase where most event listeners are triggered by default.

Example:


document.getElementById('child').addEventListener('click', function() {
    alert('Child clicked!');
});

document.getElementById('parent').addEventListener('click', function() {
    alert('Parent clicked!');
});
Clicking on the child element will trigger both alerts because the event bubbles up to the parent.

Event Delegation
Event delegation involves using event propagation to handle events at a higher level in the DOM rather than attaching listeners to individual elements. This is useful for handling events on dynamically generated content.


document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.matches('li.item')) {
        alert('List item clicked: ' + event.target.textContent);
    }
});
7. Stopping Event Propagation
You can stop the event from propagating to parent elements by using stopPropagation().

document.getElementById('child').addEventListener('click', function(event) {
    event.stopPropagation();  // Stops the event from reaching the parent
    alert('Child clicked!');
});
8. Once Option
The addEventListener() method has an option to make an event listener only trigger once. After the event is triggered, the listener is automatically removed.


button.addEventListener('click', function() {
    alert('This will only show once!');
}, { once: true });
9. Example: Event Handling in a To-Do List

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Handling Example</title>
</head>
<body>
    <ul id="todoList">
        <li class="item">Learn JavaScript</li>
        <li class="item">Practice DOM manipulation</li>
    </ul>
    <button id="addItemButton">Add New Item</button>

    <script>
        const todoList = document.getElementById('todoList');
        const addItemButton = document.getElementById('addItemButton');

        // Event delegation to handle clicks on list items
        todoList.addEventListener('click', function(event) {
            if (event.target && event.target.matches('li.item')) {
                event.target.style.textDecoration = 'line-through';
            }
        });

        // Adding a new item to the list
        addItemButton.addEventListener('click', function() {
            const newItem = document.createElement('li');
            newItem.textContent = 'New Task';
            newItem.className = 'item';
            todoList.appendChild(newItem);
        });
    </script>
</body>
</html>
In this example:

Event Delegation is used to handle clicks on list items.
New items can be added dynamically to the list, and the event listener still works on them due to delegation.
10. Best Practices
Use addEventListener(): It allows multiple event handlers, better separation of concerns, and more options.
Keep Event Handlers Small: Event handlers should do one thing and do it well. If complex, delegate to other functions.
Optimize Event Handling: Avoid attaching too many listeners to similar elements. Use event delegation where appropriate.
Mastering event handling is key to creating responsive and interactive web pages. With practice, you’ll be able to handle a wide range of user interactions effectively.


*/


// function showAlert(){
//     alert("clicked")
// }


// const btn=document.getElementById('clickBtn')

// btn.addEventListener('click',()=>{
//     alert('button is clicked')
// })


document.addEventListener('DOMContentLoaded', () => {
    // alert("the content is loaded")
    // 1. Click Event
    const clickBtn = document.getElementById('clickBtn');
    const clickResult = document.getElementById('clickResult');
    
    clickBtn.addEventListener('click', () => {
        clickResult.textContent = 'Button clicked!';
    });

    // 2. Mouseover and Mouseout Events
    const hoverBtn = document.getElementById('hoverBtn');
    const hoverResult = document.getElementById('hoverResult');
    
    hoverBtn.addEventListener('mouseover', () => {
        hoverBtn.style.backgroundColor='red'
        hoverResult.textContent = 'You are hovering over the button!';
    });

    hoverBtn.addEventListener('mouseout', () => {
        hoverBtn.style.backgroundColor='#007bff'
        hoverResult.textContent = 'Hover over the button to see the effect.';
    });

    // 3. Keydown Event
    const keydownInput = document.getElementById('keydownInput');
    const keydownResult = document.getElementById('keydownResult');
    
    keydownInput.addEventListener('keydown', (event) => {
        keydownResult.textContent = `You pressed ${event.key} key.`;
    });

    // 4. Double Click Event
    const dblclickBtn = document.getElementById('dblclickBtn');
    const dblclickResult = document.getElementById('dblclickResult');
    
    dblclickBtn.addEventListener('dblclick', () => {
        dblclickResult.textContent = 'Button double-clicked!';
    });

    // 5. Focus and Blur Events
    const focusBlurInput = document.getElementById('focusBlurInput');
    const focusBlurResult = document.getElementById('focusBlurResult');
    
    focusBlurInput.addEventListener('focus', () => {
        focusBlurResult.textContent = 'Input field is focused!';
    });

    focusBlurInput.addEventListener('blur', () => {
        focusBlurResult.textContent = 'Input field lost focus!';
    });
});
