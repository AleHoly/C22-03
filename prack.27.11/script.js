// script.js

// Task 1: Selectors
// 1.1 Change text of all <p> elements to "Змінений текст"
$('p').text('Змінений текст');

// 1.2 Add class 'highlight' to the element with id 'task1'
$('#task1').addClass('highlight');

// 1.3 Add class 'list-item' to all <li> elements
$('li').addClass('list-item');

// Task 2: Style Changes
// 2.1 Change text color of all elements with class 'highlight'
$('.highlight').css('color', 'red'); // You can change 'red' to any color you prefer

// 2.2 Change background color of all elements with class 'list-item' to light gray
$('.list-item').css('background-color', 'lightgray'); // You can change 'lightgray' to any color you prefer

// Task 3: Animation
// 3.1 Add animation effect to elements with class 'highlight'
$('.highlight').fadeOut(2000); // You can use fadeIn, slideDown, or other animation effects

// Task 4: Change Content
// 4.1 Change text of the last <p> element in the block with id 'task1'
$('#task1 p:last').text('Новий останній текст');

// Task 5: Event Handling (Additional Task)
// 5.1 Create a button on the page
$('body').append('<button id="removeListItems">Remove List Items</button>');

// 5.2 Add event handler to the button to remove all elements with class 'list-item'
$('#removeListItems').click(function() {
    $('.list-item').remove();
})