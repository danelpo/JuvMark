export function createButton() {
    //document.body.innerHTML = "hello world";
    let button = document.createElement("BUTTON");
    document.body.appendChild(button);
}

export function createHomePage() {
   let currentClassesButton = document.createElement("BUTTON");
   document.body.appendChild(currentClassesButton);
   currentClassesButton.innerHTML = "Current Classes";
   
   let createClassesButton = document.createElement("BUTTON");
   document.body.appendChild(createClassesButton);
   createClassesButton.innerHTML = "Create Class";
   
   let pastClassesButton = document.createElement("BUTTON");
   document.body.appendChild(pastClassesButton);
   pastClassesButton.innerHTML = "Past Classes";
   
   let buttonStyle = "width: 300px; height: 100px; position: absolute; font: italic bold 25px ariel,serif; background-color: rgba(200, 200, 200, 0.3); border-radius: 10%; border: null";
   
   currentClassesButton.style = buttonStyle;
   createClassesButton.style = buttonStyle;
   pastClassesButton.style = buttonStyle;

   currentClassesButton.style.left = ((window.innerWidth / 2) - 150).toString() + "px";
   createClassesButton.style.left = ((window.innerWidth / 2) - 150).toString() + "px";
   pastClassesButton.style.left = ((window.innerWidth / 2) - 150).toString() + "px";
   
   currentClassesButton.style.top = ((window.innerHeight / 4) - 50).toString() + "px";
   createClassesButton.style.top = ((window.innerHeight / 2) - 50).toString() + "px";
   pastClassesButton.style.top = ((window.innerHeight * 3 / 4) - 50).toString() + "px";
}