function getHistory(){
    return document.getElementById("history-value").innerText
}

function printHistory(number){
    document.getElementById("history-value").innerText = number
}

function getResult(){
    return document.getElementById("result-value").innerText
}

function printResult(number){
    if(number == ""){
        document.getElementById("result-value").innerText = number
    }
    else{
        document.getElementById("result-value").innerText = formattedNumber(number)
    }
}

function formattedNumber(num){
    if(num == "-"){
        return ""
    }
    var n = Number(num)
    var value = n.toLocaleString("en")
    return value
}

function reverseFormat(num){
    return Number(num.replace(/,/g , ''))
}

var operator = document.getElementsByClassName("operator")
for(var i = 0 ; i< operator.length ; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == "clear"){
            printResult("")
            printHistory("")
        }
        else if(this.id == "delete"){
            var output = reverseFormat(getResult()).toString()
            //if output has value
            if(output){
                output = output.substr(0 , output.length-1)
                printResult(output)
            }
        }
        else{
            var output = getResult()
            var history = getHistory()
            if(output=="" && history !=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0 , history.length-1)
                }
            }
            if(output != "" || history != ""){
                output = output==""? output:reverseFormat(output)
                history =history + output
                if(this.id =="equal"){
                    var result = eval(history)
                    printResult(result)
                    printHistory("")
                }
                else{
                    history = history + this.id
                    printHistory(history)
                    printResult("")
                }
            }
        }
    })
}

var number = document.getElementsByClassName("number")
for(var i = 0 ; i< number.length ; i++){
    number[i].addEventListener('click', function(){
        var output = reverseFormat(getResult())
        //if output is number
        if(output != NaN){
            output = output + this.id
            printResult(output)
        }
    })
}