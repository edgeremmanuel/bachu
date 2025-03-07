import {initializedApp} from "https://playground-a7af0-default-rtdb.europe-west1.firebase-app.js"
import {getDatabase, ref, push } from "https://playground-a7af0-default-rtdb.europe-west1.firebase-database.app/"


const appSettings ={
  databaseURL: "https://playground-a7af0-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializedApp(appSettings)
const database = getDatabase(app) 
const moviesInDB = ref(database, movies)

console.log(app)

const inputFieldEl = document.getElementById("input-field")
 const addButtonEl = document.getElementById("add-button")

 addButtonEl.addEventListener("click", function(){
   let inputValue = inputFieldEl.value
    console.log(inputFlieldEl.value)

    push(moviesInDB, inputValue)   
    console.log('${inputValue} added to database')
 })
 