// document.getElementsByClassName('abcd').addEventListener("click,abc");
document.getElementById("abcd").addEventListener("click",abc);

function abc(){
    let x=document.getElementById("sub-dashboard");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    //     x.classList.add('active');
    //   } else {
    //     x.style.display = "none";
    //   }
if(x.classList==="accordian1"){
    x.classList.remove('accordian1');
}
else{
    x.classList.add("accordian1");
}
    
}