import {initializedApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {database, ref, onvalue} from "https://realtime-database-bb8d3-default-rtdb.europe-west1.firebasedatabase.app/"

const appSettings ={
  databaseURL: "https://realtime-database-bb8d3-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializedApp(appSettings)
const database = getDatabase(app) 
const FruitslistInDB = ref(database, "fruits")

const fruitsEl = document.getElementById("fruits")
onvalue(FruitslistInDB, function(snapshot) {
  let fruitsArray = Object.values(snapshot.val())

  for (let 1 = 0; i < fruitsArray. length; i**){
    let currentFruits = fruitsArray[1]
  }

  appendFruitsToFruitslistEl(currentFruits)
})



console.log(app)

const inputFieldEl = document.getElementById("input-field")
 const addButtonEl = document.getElementById("add-button")
 const shoppinglistEl = document.getElementById("shopping-list")

 addButtonEl.addEventListener("click", function() {
   let inputValue = inputFieldEl.value
    console.log(inputFlieldEl.value)

     push(shoppinglistInDB, inputValue)

     clearInputFieldEl()

     appendFruitsToFruitslistEl(inputValue)

 })

function clearFruitsdlistEl(){
  inputFieldEl.value =""
}

function appendfruitsToFruitslistEl(itemValue){
  shoppinglistEl.innerHTML += '<li>${inputValue}</li>' 
}
 
let Users = {
  "00": "bebana@yahoo.com",
  "01": "nabana@yahoo.com",
  "02": "vamal@yahoo.com",
}
let UsersEmails = Object.values(Users)
let UsersIDs = Object.keys(Users)
let UsersEntries = Object.entries(Users)

console.log(UsersEntries)




 