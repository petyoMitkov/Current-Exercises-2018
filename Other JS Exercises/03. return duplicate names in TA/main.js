$(document).ready(function() {         
 
    $('#submit').on('click', solve);

    let dummyText = 'John\nTom\nNeo\nTom\nNeo\nNeo';
    $('#ta').val(dummyText); 

    function solve() {
        let taValue = $('#ta').val(); 
        let taArr = taValue.split("\n");
        let result = [];
        for (let i=0; i<taValue.length; i++) {
            for (let k=0; k<taArr.length; k++ ) {
                if (taArr[i] === taArr[k]&& 
                    i != k && 
                    result.indexOf(taArr[i]) == -1) {
                    result.push(taArr[i]);
                }
            }
        }
        appendResult(result.join(", "));
        result.forEach((e) => console.log(e));
    }
    
    function appendResult(result) {
        let div = $('<div id="resultInfo">');
        let text = $('<p>').text(result);
        $('#resultInfo').fadeOut();
       
        setTimeout(function() {
            $('#resultInfo').remove();
            div.append(text);
            $("form").append(div);
            $('#resultInfo').fadeIn();
        }, 300);
    }
  
});


