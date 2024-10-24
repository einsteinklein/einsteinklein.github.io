const mybut = document.querySelector("button")

mybut.onclick = function () {
    //var myct = mybut.innerText;
    console.log(mybut.innerText);
    if (mybut.innerText === "This is a button") {
        mybut.innerText = "This is not a button";
    }
    else {
        mybut.innerText = "This is a button";
    }
}

let myhd = document.getElementById("myhd");
let fixb = document.getElementById("fixedbutton");
function setname() {
    const myname = prompt("enter name");
    if (!myname) {
        setname();
    } else {
        localStorage.setItem("name", myname)
        myhd.textContent = `mozilla is not cool, ${myname}`;
    }
}
fixb.onclick = function () {
    setname();
}
if (!localStorage.getItem("name")) {
    setname();
}
else {
    const stname = localStorage.getItem("name");
    myhd.textContent = `mozilla is not cool, ${stname}`;

}

