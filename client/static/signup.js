const URL = 'http://localhost:8080/signup' 
const data = {
   "email": document.getElementById("email"),
   "password": document.getElementById("password"),
   "user_type": document.getElementById("user_type")  
};
// Send a post request
fetch(URL, {
   method: "POST",
   body: JSON.stringify(data),
   headers: {
      "Content-type": "application/json"
   }
})
