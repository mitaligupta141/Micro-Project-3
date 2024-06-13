
let string = "";

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{

    let display=document.querySelector('input')
    let inputvalue=e.target.innerHTML;
   
   
   if(inputvalue === '='){
      
    display.value = display.value.replace('x', '*');
    
    try{

      let ans = eval(display.value);
      if(ans%1 !== 0){
       ans = ans.toFixed(3);
      
      }
      display.value = ans;
    }

    catch(e){

      alert('Operation is invalid')
      display.value = display.value.replace('*', 'x');
    }
    }

   else  if (string.length === 0 && ['=', '+', 'x', '/','.'].includes(inputvalue)) {
    alert('First character cannot be an operator or Symbol');
    }
 
 
    else if(inputvalue === 'RESET'){
      string = ""
      display.value = string;
    }


    else if(inputvalue === 'DEL'){
      string = display.value.slice(0,-1);
      display.value = string;
    }

    else{ 
    string = string + inputvalue;
   display.value = string;

      }

  })

})