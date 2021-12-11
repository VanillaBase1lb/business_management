### API Documentation


<h2>/home</h2>

<li>Method - <code>GET</code></li>
<li>Purpose - Serve Home page of the application</li>

<h2>/login</h2>

<li>Method - <code>POST</code></li>
<li>Purpose - Check user's credentials and allow access to Dashboard</li>
<li>Request Type - <code>JSON</code></li>
<li>Request Body

   ```json
    {
        "username": "exampleusername",
        "password": "verysecurepassword"
    }
   ```

</li>
<li>Response Type- <code>JSON</code></li>
<li>Response Body

   ```json
    {
        "msg": "whatever error message pops up"
    }
   ```

</li>


<h2>/signup</h2>

<li>Method - <code>POST</code></li>
<li>Purpose - Create a new user with the given details</li>
<li>Request Type - <code>JSON</code></li>
<li>Request Body

   ```json
    {
        "username": "exampleusername",
        "password": "verysecurepassword",
        "email": "myemail@email.com",
        "user_type": 0,
        "business_name": "microsoft"
    }
   ```

</li>
<li>Response Type - <code>JSON</code></li>
<li>Response Body

   ```json
    {
        "msg": "whatever error message pops up"
    }
   ```

</li>


<h2>/owner/dashboard</h2>

<li>Method - <code>GET</code></li>
<li>Purpose - Show owner today's activity</li>


<h2>/factory/dashboard</h2>

<li>Method - <code>GET</code></li>
<li>Purpose - Interface for factory to enter new made products</li>


<h2>/shop/dashboard</h2>

<li>Method - <code>GET</code></li>
<li>Purpose - Interface for shop to enter sold products</li>


<h2>/userprofile</h2>

<li>Method - <code>GET</code></li>
<li>Purpose - Interface for users to see and edit their profile settings</li>

<h2>/profile</h2>

<li>Method - <code>POST</code></li>
<li>Purpose - Create a new user with the given details</li>
<li>Response Type - <code>JSON</code></li>
<li>Response Body

   ```json
    {
        "username": "exampleusername",
        "password": "verysecurepassword",
        "email": "myemail@email.com"
    }
   ```

</li>


<h2>/api/logs</h2>

<li>Method - <code>POST</code></li>
<li>Purpose - Get all the records for a particular business within a time period</li>
<li>Request Type - <code>JSON</code></li>
<li>Request Body

   ```json
    {
        "date1": [[javascript date object as JSON string]],
        "date2": [[javascript date object as JSON string]] 
    }
   ```

</li>
<li>Response Type - <code>JSON</code></li>
<li>Response Body

   ```json
    {
        "records": [
            {
                "product_name": "productname",
                "product_amount_made": 12,
                "product_amount_sold": 12,
                "consistent": true,
                "date": [[javascript date object as JSON string]] 
            }
        ],
        "totalrevenue": 1000,
        "bestseller": "productname",
        "highestrevenueseller": "productname"
    }
   ```

</li>


<h2>/owner/logs</h2>

<li>Method - <code>GET</code></li>
<li>Purpose - Shows all logs to business owner</li>


<h2>/logout</h2>

<li>Method - <code>GET</code></li>
<li>Purpose - Destroys current session and hence logs the user out</li>


<h2>/api/user</h2>

<li>Method - <code>GET</code></li>
<li>Purpose - Gets all data related to the currently logged in user</li>
<li>Response Type - <code>JSON</code></li>
<li>Response Body

   ```json
    {
        "username": "exampleusername",
        "email": "myemail@email.com",
        "user_type": 0,
        "business_name": "microsoft"
    }
   ```

</li>


<h2>/api/products</h2>

<li>Method - <code>GET</code></li>
<li>Purpose - Gets all products in the business</li>
<li>Response Type - <code>JSON</code></li>
<li>Response Body

   ```json
    {
        "product_name": "productname",
        "product_cost": 54
    }
   ```

</li>


<h2>/api/addproduct</h2>

<li>Method - <code>POST</code></li>
<li>Purpose - Add the product to database</li>
<li>Request Type - <code>JSON</code></li>
<li>Request Body

   ```json
    {
        "business_name": "microsoft",
        "product_name": "productname",
        "product_cost": 54
    }
   ```

</li>
<li>Response Type - <code>JSON</code></li>
<li>Response Body

   ```json
    {
       "msg": "whatever error message pops up" 
    }
   ```

</li>


<h2>/api/productmade</h2>

<li>Method - <code>POST</code></li>
<li>Purpose - Add the product to made database</li>
<li>Request Type - <code>JSON</code></li>
<li>Request Body

   ```json
    {
        "product_name": "productname",
        "product_amount_made": 54
    }
   ```

</li>
<li>Response Type - <code>JSON</code></li>
<li>Response Body

   ```json
    {
       "msg": "whatever error message pops up" 
    }
   ```

</li>


<h2>/api/productsold</h2>

<li>Method - <code>POST</code></li>
<li>Purpose - Add the product to sold database</li>
<li>Request Type - <code>JSON</code></li>
<li>Request Body

   ```json
    {
        "product_name": "productname",
        "product_amount_sold": 54
    }
   ```

</li>
<li>Response Type - <code>JSON</code></li>
<li>Response Body

   ```json
    {
       "msg": "whatever error message pops up" 
    }
   ```

</li>

