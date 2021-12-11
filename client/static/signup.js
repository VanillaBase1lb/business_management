function sendData() {
    const URL = '/signup' 
    
    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        // user_type: document.getElementById("user_type").value,
        user_type: document.getElementById("user_type").value,
        business_name: document.getElementById("business_name").value, 
        username: document.getElementById("username").value
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
       res => res.json().then( res2 => {
           if (res2.msg)
               alert(res2.msg)
           else
               window.location.href = "/"
       })
    )
}
