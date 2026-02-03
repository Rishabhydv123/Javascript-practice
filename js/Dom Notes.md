<!-- // 1. DOCUMENT OBJECT PROPERTIES -->
document.title        // page title
document.URL          // page URL
document.domain       // domain name
document.body         // body element
document.head         // head element


<!-- // 2. ELEMENT SELECT KARNE KE METHODS -->
document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("p")
document.querySelector(".class")
document.querySelectorAll(".class")


<!-- // 3. CONTENT PROPERTIES -->
element.innerHTML     // HTML ke sath content
element.innerText     // sirf visible text
element.textContent   // hidden text bhi


<!-- // 4. STYLE & CSS -->
element.style.color = "red";
element.style.fontSize = "20px";


<!-- // 5. ATTRIBUTE METHODS -->
element.getAttribute("src")
element.setAttribute("alt", "image")
element.removeAttribute("width")


<!-- // 6. DOM TREE NAVIGATION -->
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling


<!-- // 7. CLASSLIST METHODS -->
element.classList.add("active")
element.classList.remove("active")
element.classList.toggle("dark")
element.classList.contains("dark")


<!-- // 8. EVENTS -->
element.addEventListener("click", function () {
  alert("Clicked");
});


<!-- // DARK MODE TOGGLE -->

<button id="btn">🌙 Dark Mode</button>

// .dark {
//   background-color: #121212;
//   color: white;
// }


let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


<!-- Q1. What is DOM? -->
DOM is an object-based representation of an HTML document.

<!-- Q2. Difference between innerHTML and innerText? -->
innerHTML allows HTML content, while innerText shows only text.

<!-- Q3. What is querySelector? -->
It is a method that selects the first element matching a CSS selector.

<!-- Q4. What is the use of classList? -->
It is used to add, remove, and toggle CSS classes.

<!-- Q5. What is event bubbling? -->
Event bubbling is when an event propagates from a child element to its parent elements.

<!-- Q6. What is DOM manipulation? -->
DOM manipulation means changing HTML elements using JavaScript.

<!-- Q7. What is the advantage of addEventListener? -->
It allows attaching multiple events to a single element.

<!-- Q8. When do we use textContent? -->
We use it when hidden text content is also required.

<!-- Q9. Why should inline events be avoided? -->
Because they make code less clean and harder to maintain.

<!-- Q10. Why is DOM considered slow? -->
Because it involves browser rendering operations.