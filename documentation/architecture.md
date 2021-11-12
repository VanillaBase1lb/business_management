<h1>----------Frontend----------</h1>

<h2>Web Pages </h2> 
<ol>
<li> Home Page- Contains <code>login</code> and <code>signup</code> options. </li>
<li> Login Page- Contains <code>username</code> and <code>password</code> fields. </li>
<li> Signup Page- Contains <code>email id</code>, <code>username</code>, <code>password</code> and <code>type of user</code> fields and <code>business name</code> . </li>
<li> Profile Settings-  Contains <code>change email</code>, <code>change password</code>, <code>user type</code>, <code>name</code>, <code>email</code>, <code>business name</code>.
<li> Details page- Contains <code>all shops and factory names</code>, <code>all shops and factory managers</code>,<code> remove manager</code>.
<li> Dashboard Pages:</li>
<ul>
	Business Owner- 
	<ul>
<li>Products Received in Shops</li>
<li>Revenue Expected from each Shop</li>
<li>Requested Products to factory</li>
<li>Pending user requests(assign as manager and input factory/shop name)</li>
<li>Add new product</li>
<li>Details page</li>
</ul>
 Factory Manager- 
<ul>
<li>Products made</li>
<li>Product Requests from each shop</li>
</ul>
Shop Manager- 
<ul>
<li>Products sold</li>
<li>Make Product requests to Factory</li>
<li>Revenue generated</li>
<li>Enter products sold</li>
</ul>
</ul>

</ol>
<h1>----------Backend----------</h1>

<h2>API endpoints(more to be added)</h2>
<ol>
<li> /404page</li>
<li> /login</li>
<li> /signup</li>
<li> /home</li>
<li> /owner/dashboard</li>
<li> /factory/dashboard</li>
<li> /shop/dashboard</li>
<li> /profile</li>
<li> /owner/details</li>
</ol>

<h2>Features</h2>
<ol>
<li> User signup and login</li>
<li> Static page serving</li>
<li> Querying database and sending data to the frontend</li>
<li> Session managment</li>

</ol>

<h1>----------Database----------</h1>

<h2>Logs (view not table)</h2>
<ol>
<li>Business Name</li>
<li> Date </li>
<li> Type: Factory/Shop</li>
<li> Factory/Shop name</li>
<li>Revenue generated</li>
<li> Products produced</li>
<li> Products sold</li>
</ol>

<h2>Product</h2>
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
<li> Shop name</li>
</ol>
<h3>Products sold</h3>
<ol>
<li> Date</li>
<li> Amount</li>
<li> Product name</li>
<li> Shop name</li>
</ol>
<h3>Products in stock (automatically generated)</h3>
<ol>
<li> Date</li>
<li> Amount</li>
<li> Product name</li>

</ol>

<h3>Product shipped</h3>
<ol>
<li> Shop name</li>
<li> Date</li>
<li> Product name</li>
<li> Amount</li>
<li> Business name</li>
</ol>

<h2>Business</h2>
<ol>
<li>Business Name - unique</li>
<li>Shops - multiple</li>
<li>Factory</li>
</ol>


<h2>User</h2>
<ol>
<li> Username (lowercase and uppercase same, 0-9 and underscore)</li>
<li> Password_hashed</li>
<li> user_type (0 for business owner, 1 for shop manager, 2 for Factory manager)</li>
<li> Name</li>
<li> Business owned - if owner</li>
<li> Factory managed - if Factory manager</li>
<li> Shop managed - if shop manager</li>
<li> Business name</li>
</ol>

<h1>----------Overview----------</h1>

<h2>Frontend-Backend Flowchart</h2>

![Frontend-Backend Flowchart](https://github.com/VanillaBase1lb/business_management/blob/main/documentation/Frontend-Backend%20Flowchart.png)

<h2>Website Navigation Chart</h2>

![Website Navigation Chart](https://github.com/VanillaBase1lb/business_management/blob/main/documentation/Website%20Navigation.png)

<h2>Link</h2>
https://lucid.app/lucidchart/eb511a3e-e0dc-420b-a157-9f23ebf21a63/edit?viewport_loc=265%2C-72%2C2076%2C975%2C0_0&invitationId=inv_0b8f85e1-2cae-4b42-8011-8f5a9a1db758
