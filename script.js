
const accoridan = (e) => {
    const accordian = e.children[1].classList;
    const angel = e.children[0].children[1].children[0].classList;
    const accordianAll = document.querySelectorAll(".accordian1")[0];
    const rotateAngleOpen = document.querySelectorAll(".rotate-angle-open")[0];
    if (accordian[0] === "accordian") {
        if (accordianAll!== undefined) {
            accordianAll.classList.remove("accordian1");
            accordianAll.classList.add("accordian");
            rotateAngleOpen.classList.remove("rotate-angle-open")
            rotateAngleOpen.classList.add("rotate-angle-close")
        }
        accordian.remove('accordian');
        accordian.add('accordian1');
        angel.remove("rotate-angle-close");
        angel.add("rotate-angle-open");
    }
    else if (accordian[0] === "accordian1") {
        accordian.remove("accordian1");
        accordian.add('accordian');
        angel.remove("rotate-angle-open");
        angel.add("rotate-angle-close");
    }
    else {
        alert("Something went wrong!")
    }
}