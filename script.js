import {initializedApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings ={
  databaseURL: "https://realtime-database-bb8d3-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializedApp(appSettings)
const database = getDatabase(app) 
const shoppinglistInDB = ref(database, "shoppinglist")

console.log(app)

const inputFieldEl = document.getElementById("input-field")
 const addButtonEl = document.getElementById("add-button")
 const shoppinglistEl = document.getElementById("shopping-list")

 addButtonEl.addEventListener("click", function() {
   let inputValue = inputFieldEl.value
    console.log(inputFlieldEl.value)

     push(shoppinglistInDB, inputValue)

     clearInputFieldEl()

     appendItemToshoppinglistEl(inputValue)

 })

function clearInputFieldEl(){
  inputFieldEl.value =""
}

function appendItemToshoppinglistEl(itemValue){
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




 