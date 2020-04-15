
window.start = function start(element) {
    let testButton = document.createElement("button");
    document.body.appendChild(testButton);
    testButton.className = "testButton";
    testButton.style.position = "absolute";
    testButton.style.width = "100px";
    testButton.style.height = "100px";
    testButton.style.top = (window.innerHeight/2 - 50).toString() + "px";
    testButton.style.left = (window.innerWidth/2 -50).toString() + "px";
    testButton.addEventListener("click", () => commitTest(element));
    testButton.innerHTML = "test me!";
}

function commitTest(element) {
    element.$server.setButtonText();
}

window.changeTestButtonName = function changeTestButtonName(newName) {
    //alert(newName);
    document.body.getElementsByClassName("testButton")[0].innerHTML = newName;
}