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
        // window.location.pathname = "/"
        res => console.log(res)
        // PENDING read response whether input valid or not
    )
}
