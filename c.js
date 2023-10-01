let string2="welcome Harsi calculator";
document.querySelector('input').value=string2;
string="";
setTimeout(myfunction,1000);
function myfunction(){
    console.log("haris");
    let string1="0";
    console.log(string1)
    document.querySelector('input').value=string1;
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value = string;
          
        }
       else if(e.target.innerHTML=='c'){
            string3="0";
            document.querySelector('input').value = string3;
            st=string;
           string="";
           console.log(st);
           console.log(string)
        }

        else if(e.target.innerHTML=='Ans'){
         console.log(st)
            document.querySelector('input').value =st;
        }        
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;}
    })
})
}
