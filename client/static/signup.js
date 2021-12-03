const URL = 'http://localhost:8080/signup' 
const data = {
   "typeEmailX": document.getElementById("typeEmailX"),
   "typePasswordX": document.getElementById("typePasswordX"),
   "inputState": document.getElementById("inputState")  
};
// Send a post request
fetch(URL, {
   method: "POST",
   body: JSON.stringify(data),
   headers: {
      "Content-type": "application/json; charset=UTF-8"
   }
})
