<h1>----------Frontend----------</h1>

<h2>Web Pages </h2> 
<ol>
<li> Home Page- Contains <code>login</code> and <code>signup</code> options. </li>
<li> Login Page- Contains <code>username</code> and <code>password</code> fields. </li>
<li> Signup Page- Contains <code>email id</code>, <code>username</code>, <code>password</code> and <code>type of user</code> fields and <code>business name</code> . </li>
<li> Profile Settings-  Contains <code>change email</code>, <code>change password</code>,  <code>name</code>, <code>email</code>, <code>business name</code>.
<li> Logs page- Contains all logs of every activity along with some statistics
<li> Dashboard Pages:</li>
<ul>
Business Owner- 
<ul>
<li>Products Sold in Shop</li>
<li>Revenue Expected from each day</li>
<li>Products Made in Factory</li>
<li>Add new product</li>
<li>Logs page</li>
</ul>
 Factory Manager- 
<ul>
<li>Available Products</li>
<li>Products made</li>
<li>Ability to make new products</li>
</ul>
Shop Manager- 
<ul>
<li>Available Products</li>
<li>Products sold</li>
<li>Ability to sell products</li>
<li>Revenue generated per product</li>
</ul>
</ul>

</ol>
<h1>----------Backend----------</h1>

<h2>API endpoints</h2>
Details in server/README.md
<ol>
<li> /home</li>
<li> /login</li>
<li> /signup</li>
<li> /owner/dashboard</li>
<li> /factory/dashboard</li>
<li> /shop/dashboard</li>
<li> /userprofile</li>
<li> /profile</li>
<li> /api/logs</li>
<li> /owner/logs</li>
<li> /logout</li>
<li> /api/user</li>
<li> /api/products</li>
<li> /api/addproduct</li>
<li> /api/productmade</li>
<li> /api/productsold</li>
</ol>

<h2>Features</h2>
<ol>
<li> User signup and login</li>
<li> Querying database and sending data to the frontend</li>
<li> Session managment</li>
<li> User data input validation</li>
<li> Deriving meaningful metrics from database</li>
</ol>

<h1>----------Database Collections----------</h1>

<h3>Product</h3>
<ol>
<li> Business name</li>
<li> Product name</li>
<li> Cost per unit</li>
</ol>

<h3>Products made in factory</h3>
<ol>
<li> Date</li>
<li> Amount</li>
<li> Product name</li>
</ol>
<h3>Products sold in shop</h3>
<ol>
<li> Date</li>
<li> Amount</li>
<li> Product name</li>
</ol>

<h2>Users</h2>
<ol>
<li> Username (lowercase and 0-9 digits)</li>
<li> Password hash</li>
<li> User Type (0 for business owner, 1 for shop manager, 2 for Factory manager)</li>
<li> Email</li>
<li> Business name</li>
</ol>

<h1>----------Overview----------</h1>

<h2>Frontend-Backend Flowchart</h2>

![Frontend-Backend Flowchart](https://github.com/VanillaBase1lb/business_management/blob/main/documentation/Frontend-Backend%20Flowchart.png)

<h2>Website Navigation Chart</h2>

![Website Navigation Chart](https://github.com/VanillaBase1lb/business_management/blob/main/documentation/Website%20Navigation.png)

<h2>Link</h2>
https://lucid.app/lucidchart/eb511a3e-e0dc-420b-a157-9f23ebf21a63/edit?viewport_loc=265%2C-72%2C2076%2C975%2C0_0&invitationId=inv_0b8f85e1-2cae-4b42-8011-8f5a9a1db758
