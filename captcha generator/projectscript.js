// captcha generator

//function captchaGenerator(){

   //  var alpha=new Array('A','B','C','D','E','F','G','H','a','b','c','d','e','f','g','h');
//                        0   1   2   3   4
//alpha[0]-> 'A'
//console.log(alpha.length);
 //console.log(alpha[16]);
 // console.log(Math.random());
 
 function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var i;
    for (i=0;i<6;i++){
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
                     }
       var name = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
        document.getElementById("mainCaptcha").innerHTML = name
        document.getElementById("mainCaptcha").value = name
      }
      // is valid 
function ValidCaptcha(){
    var one= removeSpaces(document.getElementById('mainCaptcha').value);
    var two = removeSpaces(document.getElementById('txtInput').value);
    if (one == two){
           return true;
    } 
     else
       {        
         return false;
         }
}
//remove spaces
// split brakes a string

function removeSpaces(string){
    return string.split(' ').join('');
}

// isvalid


//remove spaces
 