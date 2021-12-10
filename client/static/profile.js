function sendData() {
    const URL = '/profile' 
    
    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
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
        res => window.location.pathname = "/"
    )
}

function fillForm() {
    const URL = '/api/user' 
    // console.log(data)
    // console.log("test")
    // Send a post request
    fetch(URL, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }).then(
        res => {
            res.json().then(result => {
                // console.log(result)
                document.getElementById("username").value = result.username
                document.getElementById("business_name").value = result.business_name
                document.getElementById("email").value = result.email
            })
        }
    )
}

