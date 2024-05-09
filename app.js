
let navList=document.getElementById("navList");

function show(){
    let x= navList.style.display;
    if(x != "block"){
        navList.style.display= "block";
    }else{
        navList.style.display= "none";
    }
}