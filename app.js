var button1=document.getElementById("btn_none1").addEventListener("click", change);
var button2=document.getElementById("btn_none2").addEventListener("click",change);
var b1=document.getElementById("btn_none1");
var b2=document.getElementById("btn_none2");
var par=document.getElementById("para");
var sh=document.getElementById("show").addEventListener("click",change1);
function change(){
    if ((b1.classList.contains("hid")==true)|| (b2.classList.contains("hid")==false)){
    b1.classList.remove("hid");
    b2.classList.add("hid");
    par.classList.add("hid");
}else{
    b1.classList.add("hid");
    b2.classList.remove("hid");
    par.classList.remove("hid");
}
}
function change1(){
  if(par.classList.contains("hid")==true){
    par.classList.remove("hid");
    b1.classList.add("hid");
    b2.classList.remove("hid");
  }else{
    par.classList.add("hid");
    b1.classList.remove("hid");
    b2.classList.add("hid");
  }
}