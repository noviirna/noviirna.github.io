document.getElementById("callButton").addEventListener("click", myFunction);
document.getElementById("resetButton").addEventListener("click", resetFunction);
document.getElementById("copyButton").addEventListener("click", copyFunction);

function reverseWord(str){
    var result = ""
    for(var i = str.length-1; i >= 0; i--){
        result += str[i]
    }
    return result;
}

function encryptWord(str){
var result = "";

var groupA = 'B“DFAHKL%,[$>+V0a35MRWTJq2gsiouyk148GSIOUY';
var groupB = "vjxn7mrwte9PQZbcdfXh6lpEzN#];):/&_}C(*-{'?";

var mySpace = " ";
var spaceExchange = "~|`";

for(var i = 0; i < str.length; i++){
    if(groupA.indexOf(str[i]) != -1){
        result += groupB[groupA.indexOf(str[i])];
    }
    else if(groupB.indexOf(str[i]) != -1){
        result += groupA[groupB.indexOf(str[i])];
    }
    else if(mySpace.indexOf(str[i]) != -1){
        result += spaceExchange[Math.floor((Math.random()*3))];
    }
    else if(spaceExchange.indexOf(str[i]) != -1){
        result+= mySpace[0]
    }
    else{
        result+= str[i]
    }
}
var cetak = reverseWord(result)
return cetak;
}

function myFunction(){
    var thetext = document.getElementById("myTextBox").value;
    var result = encryptWord(thetext);
    document.getElementById("copyButton").removeAttribute("disabled")
    document.getElementById('myTextBox').value = result;
    document.getElementById("myTextBox").readOnly=true;
    document.getElementById("myTextBox").placeholder="You just inputted empty words! click the 'Reset The Words' button to reset the page and insert your words on the text area! ";
}

function resetFunction(){
    document.getElementById('myTextBox').value = "";
    document.getElementById("myTextBox").readOnly=false;
    document.getElementById("copyButton").disabled=true;
    document.getElementById("myTextBox").focus(); 
    document.getElementById("myTextBox").placeholder = "Type your words here. . ."
}

function copyFunction(){
    let textarea = docaument.getElementById('myTextBox');
    textarea.select();
    document.execCommand("copy");
}
