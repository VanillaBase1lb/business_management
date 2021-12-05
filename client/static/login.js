function sendData() {
   const URL = '/login' 
   const data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
       
   };
   // console.log(data)
   // console.log("test")
   // Send a post request
   fetch(URL, {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
           "Content-type": "application/json"
       }
   }).then(
       // window.location.pathname = "/"
       res => console.log(res)
       // PENDING read response whether input valid or not
   )
}
