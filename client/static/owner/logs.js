async function datewiselogs() {
    const URL = '/api/logs' 
    // const date1 = new Date(2021, 0, 1).toJSON()
    let date1 = $("#datepicker1").datepicker("getDate")
    let date2 = $("#datepicker2").datepicker("getDate")
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
    $('#maintable tbody').empty()
    let rows = "";
    $.each(results.records, function(){
        rows += "<tr><td>" + this.product_name + "</td><td>" + this.date.substring(1,11) +
            "</td><td>" + this.product_amount_made + "</td><td>" +
            this.product_amount_sold + "</td><td>" + this.product_revenue +
            "</td><td>" + this.consistent + "</td></tr>";
    });

    document.getElementById("valid").hidden=true
    $( rows ).appendTo( "#maintable tbody" );
    document.getElementById("mostsold").value = results.bestseller
    document.getElementById("mostprofitable").value = results.highestrevenueseller
    document.getElementById("totalrevenue").value = results.totalrevenue
}
