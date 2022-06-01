const accoridan=(e)=>{
    if (e.children[1].classList[0] === "accordian") {
        e.children[1].classList.remove('accordian');
        e.children[1].classList.add('accordian1');
    }
    else if (e.children[1].classList[0] === "accordian1") {
        e.children[1].classList.remove("accordian1");
        e.children[1].classList.add('accordian');
    }
    else {
        console.log(e.children[1].classList[0]);
    }
}