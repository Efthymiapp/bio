const text = "hi, it's mia.";
let index = 0;
const typingSpeed = 150;

function typeText() {
    const h1 = document.querySelector("h1.typing");
    if (index < text.length) {
        h1.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeText);
