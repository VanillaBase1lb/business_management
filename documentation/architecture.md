<h1>----------Frontend----------</h1>

<h2>Pages(more to be added)</h2> 
<ol>
 <li> Home Page- Contains Login and Signup Options. </li>
 <li> Login Page- Contains Email id and Password fields. </li>
 <li> Signup Page- Contains Email id, Passwors and Type of User fields. </li>
 <li> Dashboard Page- Goods Purchased From Factory, Goods Received in Shop, Revenue Expected, Revenue Received. </li>
 <li> Notifications. </li>
 <li> Profile Settings. </li>
 <li> Links to all shops and factories within Business. </li>
</ol>

<h1>----------Backend----------</h1>

<h2>APIs(more to be added)</h2>
<ol>
<li> /404page</li>
<li> /login</li>
<li> /signup</li>
<li> /home</li>
</ol>

<h2>Features</h2>
<ol>
<li> User signup and login</li>
<li> Static page serving</li>
<li> querying database and sending data to the frontend</li>
</ol>

<h1>----------Database----------</h1>

<h2>Raw material</h2>
<ol>
<li> business name</li>
<li> raw material name</li>
<li> cost per unit</li>
</ol>

<h2>Log</h2>
</h4>Business Name</h4>
<ol>
<li> date [the log, includes everything from raw materials ordered to products sold]</li>
<li> type: factory/shop</li>
<li> factory/shop name</li>
<li> money received from shop</li>
<li> money given to factory</li>
<li> raw materials ordered</li>
<li> raw materials used</li>
<li> products produced</li>
<li> products received</li>
<li> products sold</li>
</ol>

<h2>Product</h2>
<ol>
<li> business name</li>
<li> product name</li>
<li> cost per unit</li>
</ol>

<h2>Shop</h2>
<h4>Shop Name</h4>
<h4>Business Name</h4>
<h3>Products received</h3>
<ol>
<li> date</li>
<li> amount</li>
<li> product name</li>
<li> Factory name</li>
</ol>
<h3>Products sold</h3>
<ol>
<li> date</li>
<li> amount</li>
<li> product name</li>
</ol>
<h3>Products in stock (automatically generated)</h3>
<ol>
<li> date</li>
<li> amount</li>
<li> product name</li>
</ol>
  
<h2>Factory</h2>
<h4>Business Name</h4>
<h4>Factory Name</h4>
<h3>Raw materials ordered</h3>
<ol>
<li> date</li>
<li> raw material name</li>
<li> amount</li>
<li> cost per unit</li>
</ol>
<h3>Raw materials used</h3>
<ol>
<li> date</li>
<li> raw material name</li>
<li> amount</li>
</ol>
<h3>Raw materials in stock (automatically calculated)</h3>
<ol>
<li> date</li>
<li> raw material name</li>
<li> amount</li>
</ol>
<h3>Product shipped</h3>
<ol>
<li> shop name</li>
<li> date</li>
<li> product name</li>
<li> amount</li>
</ol>

<h2>Business</h2>
<h4>Business Name - unique</h4>
<h4>business_owner</h4>
<h4>Shops - multiple</h4>
<h4>Factory - multiple</h4>
<h3>Money given to Factory</h3>
<ol>
<li> date</li>
<li> amount</li>
</ol>
<h3>Money received from shop</h3>
<ol>
<li> date</li>
<li> amount</li>
</ol>

<h2>User</h2>
<ol>
<li> username(lowercase and uppercase same, 0-9 and underscore)</li>
<li> hashed_password</li>
<li> user_type(0 for business owner, 1 for shop manager, 2 for Factory manager)</li>
<li> name</li>
<li> business owned - if owner</li>
<li> Factory managed - if Factory manager</li>
<li> shop managed - if shop manager</li>
<li> business name - if shop/factory manager</li>
</ol>

<h1>----------Overview----------</h1>

<h2>Frontend-Backend Flowchart</h2>

![Frontend-Backend Flowchart](https://github.com/KickStar35/business_management_and_report/blob/main/documentation/Frontend-Backend%20Flowchart.png)

<h2>Website Naavigation Chart</h2>

![Website Navigation Chart](https://github.com/KickStar35/business_management_and_report/blob/main/documentation/Website%20Navigation.png)

<h3>Link</h3>
https://lucid.app/lucidchart/eb511a3e-e0dc-420b-a157-9f23ebf21a63/edit?viewport_loc=265%2C-72%2C2076%2C975%2C0_0&invitationId=inv_0b8f85e1-2cae-4b42-8011-8f5a9a1db758


