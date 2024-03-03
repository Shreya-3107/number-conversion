document.getElementById("input-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var inputType = document.getElementById("input-type").value;
    var outputType = document.getElementById("convert-type").value;
    var inputNum = document.getElementById("inputNumber").value;
    var opTypeDisplay = document.getElementById("showType");
    var opValueDisplay = document.getElementById("showValue");
    var opNum;
    var rem;
    var inputCopy = parseInt(inputNum);
    var digit;
    var pow;
    var num;

    switch (inputType) {
      case "bin":

        switch (outputType) {
          case "bin":
            //binary to binary - no logic just display
            opNum = inputCopy;
            opTypeDisplay.innerHTML = "binary";
            opValueDisplay.innerHTML = opNum;
            break;

          case "oct":
            //binary to octal
            pow = 1;
            opNum = 0;

            //main logic
            while (inputCopy) {
              digit = inputCopy % 1000;
              switch (digit) {
                case 0:
                  num = 0;
                  break;
                case 1:
                  num = 1;
                  break;
                case 10:
                  num = 2;
                  break;
                case 11:
                  num = 3;
                  break;
                case 100:
                  num = 4;
                  break;
                case 101:
                  num = 5;
                  break;
                case 110:
                  num = 6;
                  break;
                case 111:
                  num = 7;
                  break;
              }
              opNum = opNum + num * pow;
              inputCopy = Math.floor(inputCopy / 1000);
              pow = pow * 10;
            }

            // Display the octal equivalent
            opTypeDisplay.innerHTML = "octal";
            opValueDisplay.innerHTML = opNum;
            break;

          case "dec":
            //binary to decimal
            opNum = 0;
            pow = 1;

            //main logic
            while (inputCopy > 0) {
              digit = inputCopy % 10;
              opNum = opNum + digit * pow;
              pow = pow * 2;
              inputCopy = Math.floor(inputCopy / 10);
            }

            //Display the decimal equivalent
            opTypeDisplay.innerHTML = "decimal";
            opValueDisplay.innerHTML = opNum;
            break;
        }
        break;

      case "oct":
        //code

        switch(outputType){

          case "bin":
            //octal to binary
            pow = 1;
            opNum = 0;

            //main logic
            while (inputCopy) {
              digit = inputCopy % 10;
              switch (digit) {
                case 0:
                  num = 0;
                  break;
                case 1:
                  num = 1;
                  break;
                case 2:
                  num = 10;
                  break;
                case 3:
                  num = 11;
                  break;
                case 4:
                  num = 100;
                  break;
                case 5:
                  num = 101;
                  break;
                case 6:
                  num = 110;
                  break;
                case 7:
                  num = 111;
                  break;
              }
              opNum = opNum + (num * pow);
              inputCopy = Math.floor(inputCopy / 10);
              pow = pow * 1000;
            }

            // Display the octal equivalent
            opTypeDisplay.innerHTML = "octal";
            opValueDisplay.innerHTML = opNum;
            break;

          case "oct":
            //octal to octal - no logic just display
            opNum = inputCopy;
            opTypeDisplay.innerHTML = "octal";
            opValueDisplay.innerHTML = opNum;
            break;

          case "dec":
            //octal to decimal
            opNum = 0;
            pow = 1;

            //main logic
            while (inputCopy > 0) {
              digit = inputCopy % 10;
              opNum = opNum + digit * pow;
              pow = pow * 8;
              inputCopy = Math.floor(inputCopy / 10);
            }

            //Display the decimal equivalent
            opTypeDisplay.innerHTML = "decimal";
            opValueDisplay.innerHTML = opNum;
            break;
        }
        break;

      case "dec":

        switch (outputType) {

          case "dec":
            //decimal to decimal - no logic just display
            opNum = inputCopy;
            opTypeDisplay.innerHTML = "decimal";
            opValueDisplay.innerHTML = opNum;
            break;

          case "bin":
            //decimal to binary
            pow=1;
            opNum=0;

            //main logic
            while(inputCopy)
            {
              rem = inputCopy%2;
              opNum = (rem*pow)+opNum;
              pow = pow*10;
              inputCopy = Math.floor(inputCopy/2);
            }

            //output display
            opTypeDisplay.innerHTML = "binary";
            opValueDisplay.innerHTML = opNum;
            break;

          case "oct":
            //decimal to octal
            pow=1;
            opNum=0;

            //main logic
            while(inputCopy)
            {
              rem = inputCopy%8;
              opNum = (rem*pow)+opNum;
              pow = pow*10;
              inputCopy = Math.floor(inputCopy/8);
            }

            //output display
            opTypeDisplay.innerHTML = "octal";
            opValueDisplay.innerHTML = opNum;
            break;
        }
        
        break;
    }
  });
