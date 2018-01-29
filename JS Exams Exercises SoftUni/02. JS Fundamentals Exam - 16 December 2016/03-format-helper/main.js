document.onload = setTimeout(function() {
    let textElement = document.getElementById("input");
    let dummyText = 'Text . " Terrible quoting " ! Date : 20  .   12. 16.';
    textElement.innerHTML = dummyText;

    let submit = document.getElementById("submit");
    submit.addEventListener("click", function() {
        solve(textElement.value);
    })

    function solve(input) {
        let text = input;
        text = text.replace(/[.,!?:;]\s*/g, (match) => match.trim() + " ");
        text = text.replace(/\s+[.,!?:;]/g, (match) => match.trim());
        text = text.replace(/\.\s*\.\s*\.\s*\!/g, "...!");
        text = text.replace(/(\.\s+)(\d+)/g, (match, gr1, gr2) => gr1.trim() + gr2);
        text = text.replace(/\"(\s*[^\"]+\s*)\"/g, (match, gr1) => `"${gr1.trim()}"`);
    
        let result = document.getElementById("result");
        result.innerHTML = text;        
    } 
       
}, 500);
