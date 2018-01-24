window.onload = setTimeout(function() {
    let dummyString = "a(111)tr. edf((222)ds(((333))fdsd(f dfs()";
    //solve(dummyString); without UI

    // Code for UI =============================
    let ta = document.getElementById("ta");
    ta.value = dummyString;
    let submit = document.getElementById("submit");
    let container = document.getElementById("container");

    submit.addEventListener("click", function() {
        ta = document.getElementById("ta").value;        
        container.innerHTML = solve(ta);
    });
    // =========================================
    
    function solve(input) {
        console.log("Input String: " + input);
        let start = 0;
        let end = 0;
        let holder = "";
        let result = "";

        for (let i = 0; i < input.length; i++) {
            if (input.charAt(i) === "(") {
                start = 1;
                end = 0;
                holder = "";
            } else if (input.charAt(i) === ")" && start === 1) {
                if (result != "" && holder != "") {
                    result += ", "
                }
                result += holder;
                start = 0;
                end = 0;               
                holder = "";
            } else {
                holder += input.charAt(i);
            }            
        }
        console.log(result.split(", "));
        return result.split(", "); // for UI
    }
    
}, 200);