document
  .getElementById("input-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var inputType = document.getElementById("input-type").value;
    var outputType = document.getElementById("convert-type").value;
    var inputNum = document.getElementById("inputNumber").value;
    var opTypeDisplay = document.getElementById("showType");
    var opValueDisplay = document.getElementById("showValue");
    var opNum;
    var inputCopy = parseInt(inputNum);
    var digit;
    var pow;
    var num;

    var nod = inputCopy.toString().length;

    switch (inputType) {
      case "bin":
        //binary to other types

        switch (outputType) {
          case "bin":
            opNum = inputCopy;
            opTypeDisplay.innerHTML = "binary";
            opValueDisplay.innerHTML = opNum;
            break;

          case "oct":
            pow = 1;
            opNum = 0;

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
            opNum = 0;
            pow = 1;

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
        break;

      case "dec":
        //code
        break;
    }
  });
