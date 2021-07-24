let output=document.getElementById("output-display");
function display(num){
    output.value += num;
}

function Calculate(){
    try{
        output.value =eval(output.value);
    }

    catch(err){
        alert("Invalid Input")
    }

}
function Clear(){
    output.value ="";
}
function Delete(){
    output.value =output.value.slice(0,-1);
}