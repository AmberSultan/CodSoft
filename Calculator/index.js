let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons) .forEach((button) =>{
 button.addEventListener('click' , (ev) =>{   //here ev is the event
    if( ev.target.innerHTML == '=' ){
        string = eval(string);
        document.querySelector('input').value = string;
    }
   else if(ev.target.innerHTML == 'AC')
   {
    string = " ";
    document.querySelector('input').value = string;
    

   }
    else
    {
    console.log(ev.target)
    string = string + ev.target.innerHTML;
    document.querySelector('input').value = string;  //here we change the value of input tag into string
}})
})

