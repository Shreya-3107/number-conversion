document.getElementById("input-form").addEventListener('submit', function(event){

    event.preventDefault();

    var inputType = document.getElementById('input-type').value;
    var outputType = document.getElementById('convert-type').value;
    var inputNum = document.getElementById('inputNumber').value;
    var opDisplay = document.getElementById('output');

    switch(inputType){

        case 'bin':
            //code
            switch(outputType){

                case 'bin':
                    var opNum = inputNum;
                    opDisplay.innerHTML = opNum;
                    break;
                
                // case ''
            }
            break;
        
        case 'oct':
            //code
            break;
        
        case 'dec':
            //code
            break;
        
        case 'hex':
            //code
            break;
    }
});