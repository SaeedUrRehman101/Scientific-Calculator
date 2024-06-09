let operand=(Number)=>{
    document.querySelector("#display-result").value+=Number;
}
let opertaors=(spcharac)=>{
    document.querySelector("#display-result").value+=spcharac;
}
let calculate=()=>{
   let input=document.querySelector("#display-result").value;
   let result=eval(input);
   document.querySelector("#display-result").value=result;
   // let display =document.querySelector("#display-result");
   // display.value= eval(display.value);
}
let brakets=(op)=>{
   let display =document.querySelector("#display-result");
   display.value+=op;
}
let clearall=()=>{
    document.querySelector("#display-result").value="";
}
let del=()=>{
   let display =document.querySelector("#display-result");
   display.value=display.value.slice(0,-1);
}
let cos=()=>{
   let display =document.querySelector("#display-result");
    display.value=Math.cos(display.value);
}
let sin=()=>{
   let display =document.querySelector("#display-result");
   display.value=Math.sin(display.value);
}
let tan=()=>{
   let display =document.querySelector("#display-result");
   display.value=Math.tan(display.value);
}
let sqrt=()=>{
   let display =document.querySelector("#display-result");
    display.value=Math.sqrt(display.value);
}
let PI=()=>{
   let display =document.querySelector("#display-result");
   display.value=display.value*(Math.PI);
}
let sq=()=>{
   let display =document.querySelector("#display-result");
   display.value=display.value*display.value;
}
let log=()=>{
   let display =document.querySelector("#display-result");
   display.value=Math.log(display.value);
}
let percent=()=>{
   let display =document.querySelector("#display-result");
   display.value=display.value/100;
}
let cube=()=>{
   let display =document.querySelector("#display-result");
   display.value=display.value*display.value*display.value;
}
let pow=()=>{
   let display =document.querySelector("#display-result");
   display.value=Math.pow(display.value);
}
let logath=()=>{
   let display =document.querySelector("#display-result");
   display.value=Math.log(display.value);
}
let expr=()=>{
   let display =document.querySelector("#display-result");
   display.value=Math.exp(display.value);
}

// function pow(base, exp): 
// 	{result} = 1 
// 	do {exp} times: 
// 		{result} *= {base} 
// 	return {result} 