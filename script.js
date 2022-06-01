
const accoridan = (e) => {
    const accordian = e.children[1].classList;
    const angel = e.children[0].children[1].children[0].classList;
    if (accordian[0] === "accordian") {
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