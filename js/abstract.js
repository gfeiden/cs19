/* Handles formatting issues related to abstract submission */


function abstractPreview() {
    // format abstract input with MathJax and display in preview frame
    input = document.getElementById("abstract");
    output = document.getElementById("abstractPreview");
    
    // create preview section
    output.style.color = "black";
    output.innerHTML = input.value;
    
    // typeset mathematics with MathJax
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"abstractPreview"]);
    
}

function abstractReset() {
    // reset abstract input 
    input = document.getElementById("abstract");
    output = document.getElementById("abstractPreview");
    
    // create preview section
    input.value = "";
    output.innerHTML = "";
    
    // typeset mathematics with MathJax
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"abstractPreview"]);
    
}