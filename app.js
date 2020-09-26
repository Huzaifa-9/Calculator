function getNumber(num){
    var result = document.getElementById("result");
    result.value += num ;
};

function Clear(){
    var result = document.getElementById("result");
    result.value = "" ;
};
function Eval(){
    var result = document.getElementById("result");
    // console.log(eval(result.value))
    result.value =eval(result.value);
};