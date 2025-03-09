// Select the paragraph and the button elements
const myParagraph = document.getElementById('my-paragraph');
const colorButton = document.getElementById('color-button');

// Add a click event listener to the button
colorButton.addEventListener('click', function () {
    // Change the text color of the paragraph
    myParagraph.style.color ='red';
});
