/*
window.greet = function greet(name, element) {
    console.log("Hi, " + name);
    element.$server.greet("server");
    let myString = myString + "success!";
    element.innerHTML = myString;
}
*/

window.start = function start(element) {
    let testButton = document.createElement("BUTTON");
    document.body.appendChild(testButton);
    testButton.style.position = "absolute";
    testButton.style.width = "100px";
    testButton.style.height = "100px";
    testButton.style.top = (window.innerHeight/2 - 50).toString() + "px";
    testButton.style.left = (window.innerWidth/2 -50).toString() + "px";
    testButton.addEventListener("click", () => commitTest(element));
    testButton.innerHTML = "test me";
    testButton.id = "testButton";
}

function commitTest(element) {
    element.$server.sayHi();
}

window.chageButtonTextTo = function chageButtonTextTo(newString) {
    document.getElementById("testButton").innerHTML = newString;
}