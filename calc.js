function Clear(){
    document.calc.textview.value = ''
}
 function Delete(){
     var num = document.calc.textview.value;
     document.calc.textview.value = num.substring(0, num.length-1);
 }
 function Raiz(){
     var num = document.calc.textview.value;
     document.calc.textview.value = Math.sqrt(num);
 }
 function Div(){
    document.calc.textview.value += '/'
 }
 function Sum(){
    document.calc.textview.value += '+'
 }
 function Sub(){
    document.calc.textview.value += '-'
 }
 function Multi(){
    document.calc.textview.value += '*'
 }
 function Result(){
    var num = document.calc.textview.value;
    document.calc.textview.value = eval(num);

 }
