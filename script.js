var r = document.querySelector('.tempHolder');
var promptWindow = document.querySelector('.prompt-window');
    var storage1;
    var storageObj ={
        "hasStored":false,
        "no_of_divs":3,
        "divValues":1,
    };
    const addDivButton =document.getElementById('add');
    const change = document.getElementById('change');
    
function divide() {
//console.log(storage1);
  var number = document.getElementById("number").value;
  var amount = parseInt(number/ storageObj.no_of_divs );
  var remainingAmount = number-(amount*storageObj.no_of_divs);
  console.log(remainingAmount);
  change.innerText = 'change:'+remainingAmount;
  if (r.style.maxHeight){
      r.style.maxHeight = null;
    } else {
      r.style.maxHeight = r.scrollHeight + "px";
      } 
 // r.style.setProperty('--changeHeight',60+ 'px');
  localStorage.setItem("amount-1", amount);
 // console.log(localStorage.setItem("amount-2", firstAmount));

  // Get the secondAmount and firstAmount from localStorage
  var storedsecondAmount = localStorage.getItem("amount-1");
  var storedfirstAmount = localStorage.getItem("amount-2");

  // Display the secondAmount and firstAmount in the divs
  if (storedsecondAmount !== null) {
    document.getElementById("amount-1").innerHTML = storedsecondAmount;
  }
  if (storedfirstAmount !== null) {
    document.getElementById("amount-2").innerHTML = storedfirstAmount;
  }
}
function check(){
    if(storage1 == null){
        return
        //console.log('hi');
    }
    else{
        storage1 = localStorage.getItem("amount-1");
        document.getElementById("amount-1").innerHTML = storage1;
        console.log('value set');
    }
};
function addDivs(){
    const parentDiv = document.getElementById("parentDiv");
const newChild = document.createElement("div");
newChild.classList.add("items");
console.log(parentDiv);
document.getElementById("add").insertAdjacentElement('beforebegin', newChild);
newChild.classList.add("open");
addDivButton.classList.add("slide");
}


 function outOfFocus(event){
 const currentElement = event.currentTarget;
 currentElement.blur();
 currentElement.setAttribute('readonly', true);
 if(currentElement.value.length > 10){currentElement.style.fontSize = "20px"}else{currentElement.style.fontSize ="32px"}
 }

function edit(){
  const element = event.currentTarget;
  const editSpan = element.parentNode.children[0];
  editSpan.removeAttribute("readonly");
  editSpan.focus();
}

function deleteItem(){
promptWindow.style.display="inline";
promptWindow.focus();
promptWindow.classList.add("promptAnimate");
}

function hidePrompt() {
  promptWindow.style.display="none";
}