document.getElementById("FixButton").onclick = function(){
    let StringValue = document.getElementById('String_Value').value;
    document.getElementById("demo").innerHTML = FixStart(StringValue);
    } 

function FixStart(a) {
        var FirstChar = a.charAt(0); 
        var strNew = FirstChar + a.slice(1).replace(new RegExp(FirstChar, 'g'), '*'); 
        return strNew;
  }
