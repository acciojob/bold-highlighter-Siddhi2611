function highlight() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll("strong");
    
    // Loop through and change color to green
    boldWords.forEach((word) => {
        word.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll("strong");
    
    // Loop through and change color back to black
    boldWords.forEach((word) => {
        word.style.color = "rgb(0, 0, 0)";
    });
}
