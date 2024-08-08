console.log("challenge3.js running");

let input1 = document.querySelector("#step1")
console.log(input1)
let p1 = document.querySelector("#step1Text")
console.log(p1)

input1.addEventListener("keydown", function(event){
  if (input1.value === "Select elements"){
    p1.textContent = "Correct!"
  } else {
    p1.textContent = "Not quite..."
  }
});

// Set up the other two steps to work correctly as well!

let ste = document.getElementById("step2");
let st = document.getElementById("step2Text");


ste.addEventListener("keydown", function(event){
  if (ste.value === "Listen for events"){
    st.textContent = "Correct!"
  } else {
    st.textContent = "Not quite..."
  }
})

let so = document.getElementById("step3");
let step = document.getElementById("step3Text");

so.addEventListener("keydown", function(event){
 if (so.value === "Execute action"){
    step.textContent = "Correct!"
  } else {
    step.textContent = "Not quite..."
  }
})