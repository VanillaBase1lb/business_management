async function datewiselogs() {
    const URL = '/api/logs' 
    const date1 = new Date().toJSON()
    const date2 = new Date().toJSON()
    // let date1 = $("#datepicker1").datepicker("getDate")
    // let date2 = $("#datepicker2").datepicker("getDate")
    const data = {
        // username: document.getElementById("username").value,
        // password: document.getElementById("password").value
        date1: date1,
        date2: date2
    };
    // console.log(data)
    // console.log("test")
    // Send a post request
    let res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    })
    // console.log(result)
    // var results = await res.json()
    window.results = await res.json()
    // console.log(results)
    // $('#maintable tbody').empty()
    let rows = "";
    $.each(results.records, function(){
        rows += "<tr><td>" + this.product_name +
            "</td><td>" + this.product_amount_made + "</td><td>" +
            this.product_amount_sold + "</td><td>" + this.product_revenue +
            "</td><td>" + this.consistent + "</td></tr>";
    });

    if (rows.length < 1) {
        // console.log("empty")
        // $("valid").show()
        document.getElementById("valid").hidden=false
    }
    $( rows ).appendTo( "#maintable tbody" );
    document.getElementById("mostsold").value = results.bestseller
    document.getElementById("mostprofitable").value = results.highestrevenueseller
    document.getElementById("totalrevenue").value = results.totalrevenue
}

function addProduct() {
   const URL = '/api/addproduct' 
   const data = {
      product_name: document.getElementById("product_name").value,
      product_cost: parseInt(document.getElementById("product_cost").value)
   };
   // console.log(data)
   // console.log("test")
   // Send a post request
    if (!data.product_name || !data.product_cost)
        return
   fetch(URL, {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
           "Content-type": "application/json"
       }
   }).then(
       // res => alert(`Product Name: ${data.product_name}\nProduct Cost: ${data.product_cost}`)
       res => res.json().then( res2 => {
           if (res2.msg == "product added")
            alert(`Product Name: ${data.product_name}\nProduct Cost: ${data.product_cost}\n Check with your Managers`)
           else if (res2.msg)
               alert(res2.msg)
           else
               window.location.href = "/"
       })
   )
}
