//import {displayCreateClassIframe} from './homePageIframe/createClassIframe.js'

export function createHomePage() {
   let currentClassesButton = document.createElement("BUTTON");
   document.body.appendChild(currentClassesButton);
   currentClassesButton.innerHTML = "Current Classes";
   currentClassesButton.className = "mainButtons";

   let createClassesButton = document.createElement("BUTTON");
   document.body.appendChild(createClassesButton);
   createClassesButton.innerHTML = "Create Class";
   createClassesButton.className = "mainButtons";

   let pastClassesButton = document.createElement("BUTTON");
   document.body.appendChild(pastClassesButton);
   pastClassesButton.innerHTML = "Past Classes";
   pastClassesButton.className = "mainButtons";

   let buttonStyle = "width: 25%; height: 10%; position: absolute; font: italic bold 25px ariel,serif; background-color: rgba(205, 205, 205, 1); " +
      "border-radius: 10%; border: 0.5px solid black; z-index: 1;";

   currentClassesButton.style = buttonStyle;
   createClassesButton.style = buttonStyle;
   pastClassesButton.style = buttonStyle;

   currentClassesButton.style.left = ((window.innerWidth / 2) - (window.innerWidth / 8)).toString() + "px";
   createClassesButton.style.left = ((window.innerWidth / 2) - (window.innerWidth / 8)).toString() + "px";
   pastClassesButton.style.left = ((window.innerWidth / 2) - (window.innerWidth / 8)).toString() + "px";

   currentClassesButton.style.top = ((window.innerHeight / 4) - (window.innerHeight / 20)).toString() + "px";
   createClassesButton.style.top = ((window.innerHeight / 2) - (window.innerHeight / 20)).toString() + "px";
   pastClassesButton.style.top = ((window.innerHeight * 3 / 4) - (window.innerHeight / 20)).toString() + "px";

   currentClassesButton.addEventListener("click", () => buttonClicked(0));
   createClassesButton.addEventListener("click", () => buttonClicked(1));
   pastClassesButton.addEventListener("click", () => buttonClicked(2));

   let myFrame = document.createElement("iframe");
   document.body.appendChild(myFrame);
   myFrame.style = "border: 1px solid white; position: absolute; width: 50%; height: 80%; left: 40%; top:10%; background-color: rgba(245, 245, 245, 0);" +
      "border-radius: 2%; visibility: hidden; z-index: 0;";
   myFrame.className = "mainIframe";
}

function buttonClicked(buttonNumer) {//0 is current, 1 is create, 2 is past
   animateStartMenu(document.body.getElementsByClassName("mainButtons"));
   if (buttonNumer == 0) {
      displayOnIframe(0);
   }
   else if (buttonNumer == 1) {
      displayOnIframe(1);
   }
   else if (buttonNumer == 2) {
      displayOnIframe(2);
   }
}

function animateStartMenu(buttonList) {//add move buttons to top left corner and shrink
   const destinationXpoint = window.innerWidth / 10;
   var id = setInterval(frame, 5);
   function frame() {
      let myFrame = document.body.getElementsByClassName("mainIframe")[0];
      myFrame.style.visibility = "visible";
      for (let buttonIndex = 0; buttonIndex < buttonList.length; buttonIndex++) {
         let button = buttonList[buttonIndex];
         /***MOVES BUTTONS LEFT***/
         if(button.getBoundingClientRect().x < destinationXpoint) {
            clearInterval(id);
         } else {
            button.style.left = (button.getBoundingClientRect().x - 3).toString() + "px";
         }
         /***FADE IN IFRAME***/
         let alpha = getAlpha(myFrame.style.backgroundColor);
         if(alpha < 1) {
            myFrame.style.backgroundColor = "rgba(245,245,245,"+((parseFloat(alpha) + 0.005).toString())+")";
         }
      }
   }
}

function displayOnIframe(buttonNumber) {//0 is current, 1 is create, 2 is past
   if(buttonNumber == 0) {

   } else if(buttonNumber == 1) {
      //console.log(document.body.getElementsByClassName("mainIframe")[0]);
      //document.body.getElementsByClassName("mainIframe")[0].src = '/main';
      //.baseURI('./homePageIframe/createClassMain.html');
   } else if(buttonNumber == 2) {

   }
}

function getAlpha(string) {
   let split1 = null;
   let split2 = null;
   let split3 = null;
   for (let i = 0; i < string.length; i++) {
      if (string.substring(i, i+1) == ',') {
         if (split1 == null) {
            split1 = i;
         } else if(split2 == null) {
            split2 = i;
         } else {//slpit 3
            split3 = i;
            break;
         }
      }
   }
   if(split3 == null){//rgb instead of rgba
      return 1;
   }
   let alpha = null;
   for (let i = split3; i < string.length; i++) {
      if(string.substring(i, i+1) == ')') {
         alpha = string.substring(split3+2, i);
         break;
      }
   }
   return parseFloat(alpha);
}