async function datewiselogs() {
    const URL = '/api/logs' 
    const URL2 = '/api/products'
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
    let productsres = await fetch(URL2, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    window.results2 = await productsres.json()
    $('#maintable tbody').empty()
    $('#secondtable tbody').empty()
    $('#product_name').empty()


    let rows = "";
    $.each(results.records, function(){
        rows += "<tr><td>" + this.product_name +
            "</td><td>" + this.product_amount_made + "</td></tr>";
    });

    if (rows.length < 1) {
        // console.log("empty")
        // $("valid").show()
        document.getElementById("valid").hidden=false
    }

    let rows2 = "";
    $.each(results2, function(){
        rows2 += "<tr><td>" + this.product_name +
            "</td><td>" + this.product_cost + "</td></tr>";
    });

    if (rows2.length < 1) {
        // console.log("empty")
        // $("valid").show()
        document.getElementById("valid").hidden=false
    }

    $.each(results2, function(){
        $('#product_name').append(new Option(this.product_name, this.product_name))
    });

    $( rows ).appendTo( "#maintable tbody" );
    $( rows2 ).appendTo( "#secondtable tbody" );
}

function sendData() {
   const URL = '/api/productmade' 
   const data = {
      product_name: document.getElementById("product_name").value,
      product_amount: parseInt(document.getElementById("product_amount_made").value)
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
       res => datewiselogs()
   )
}
