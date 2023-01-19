console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1para= document.getElementById("node1");
node1para.textContent="I used the getElementById('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2ele= document.getElementsByClassName("node2");
node2ele[0].textContent="I used the getElementsByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const nodeh3 = document.getElementsByClassName("h3");
        for (let i = 0;i<nodeh3.length; i++){
          nodeh3[i].textContent = "I used the getElementByTagName('h3') method to access all of these";
        }
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/
let pTag= document.createElement("p");
pTag.textContent="This node was created using the createElement() method";

let parent2= document.querySelector("#parent");
parent2.appendChild(pTag);

let articleTag=document.createElement("a");
articleTag.textContent="I am a <a> tag";
parent2.insertBefore(articleTag,pTag);

articleTag.href="#";

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
const childNode = document.getElementById("N1");
const newChild = document.createElement("p");
newChild.textContent="New Child Node";
const parentNode= document.querySelector("#exercise-container3");
parentNode.replaceChild(newChild, childNode);

setTimeout(()=>{
  parentNode.removeChild(newChild);
},3000);


// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

// TODO: Remove the "New Child Node"

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];
const shoppingU1 = document.createElement("u1"); 

list.forEach((item)=>{
  const shoppingLi=document.createElement("li");
  shoppingLi.textContent=item;
  shoppingU1.append(shoppingLi);
});

document.querySelector("#container").append(shoppingU1);



// TODO: Create an unordered list element

// TODO: Iterate over the array values, and create a list item element for each

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/





function show(){
  const modalDiv=document.createElement("div");
  const modalCard=document.createElement("div");

  modalCard.textContent="Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  
  modalDiv.id="modal";
  modalCard.classList.add("modal-card");

  modalDiv.appendChild(modalCard);
  document.querySelector(".exercise5").appendChild(modalDiv);

  const closeButton = document.createElement("button");
  closeButton.textContent="X";
  closeButton.innerHTML="&times";
  closeButton.style.fontSize="1.5rem";
  modalCard.appendChild(closeButton);

  closeButton.addEventListener("click",()=>{
    modalDiv.remove();
  });
  modalDiv.addEventListener("click",(event)=>{
    if(event.target==modalDiv || event.target == closeButton){
    modalDiv.remove(); 
    }
    if (event.target != modalCard){
      modalDiv.remove();
    }
  })

}
const displayModalButton= document.querySelector("#btn");
displayModalButton.addEventListener("click",show);



// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
