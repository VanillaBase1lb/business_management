<h1>----------Frontend----------</h1>

<h2>Pages(more to be added)</h2> 
<ol>
<li> Home Page- Contains Login and Signup Options. </li>
<li> Login Page- Contains <code>username</code> and Password fields. </li>
<li> Signup Page- Contains Email id, username, Password and Type of User fields and business name . </li>
<li> Dashboard Page: 

Business Owner:

products Received in Shops, Revenue Expected from each Shop, Requested Products to factory, pending user requests(assign as manager and input factory/shop name), add new product, detalis page

Factory Manager:

Products made, Product Requests from each shop

Shop Manager:

Products sold, Make Product requests to Factory, Revenue generated, enter products sold


</li>
<li> Profile Settings. </li>
change email, change password, user type, name, email, business name

<li> Details page </li>
all shops and factory names, all shops and factory managers, remove manager

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
<li> querying database and sending data to the frontend</li>
<li> session managment</li>
</ol>

<h1>----------Database----------</h1>

<h2>Logs(view not table)</h2>
<ol>
<li>Business Name</li>
<li> date </li>
<li> type: factory/shop</li>
<li> factory/shop name</li>
<li>revenue generated</li>
<li> products produced</li>
<li> products sold</li>
</ol>

<h2>Product</h2>
<ol>
<li> business name</li>
<li> product name</li>
<li> cost per unit</li>
</ol>

<h3>Products made in factory</h3>
<ol>
<li> date</li>
<li> amount</li>
<li> product name</li>
<li>shop name</li>
</ol>
<h3>Products sold</h3>
<ol>
<li> date</li>
<li> amount</li>
<li> product name</li>
<li>shop name</li>
</ol>
<h3>Products in stock (automatically generated)</h3>
<ol>
<li>date</li>
<li> amount</li>
<li> product name</li>
</ol>

<h3>Product shipped</h3>
<ol>
<li> shop name</li>
<li> date</li>
<li> product name</li>
<li> amount</li>
<li>business name</li>
</ol>

<h2>Business</h2>
<!-- Pulkit, make this the same as other tables -->
<h4>Business Name - unique</h4>
<h4>Shops - multiple</h4>
<h4>Factory</h4>
</ol>
</ol>

<h2>User</h2>
<ol>
<li> username(lowercase and uppercase same, 0-9 and underscore)</li>
<li>password_hashed</li>
<li> user_type(0 for business owner, 1 for shop manager, 2 for Factory manager)</li>
<li> name</li>
<li> business owned - if owner</li>
<li> Factory managed - if Factory manager</li>
<li> shop managed - if shop manager</li>
<li> business name</li>
</ol>

<h1>----------Overview----------</h1>

<h2>Frontend-Backend Flowchart</h2>
<!-- fix this -->
![Frontend-Backend Flowchart](https://github.com/KickStar35/business_management_and_report/blob/man/documentation/Frontend-Backend%20Flowchart.png)

<h2>Website Naavigation Chart</h2>

![Website Navigation Chart](https://github.com/KickStar35/business_management_and_report/blob/main/documentation/Website%20Navigation.png)

<h3>Link</h3>
https://lucid.app/lucidchart/eb511a3e-e0dc-420b-a157-9f23ebf21a63/edit?viewport_loc=265%2C-72%2C2076%2C975%2C0_0&invitationId=inv_0b8f85e1-2cae-4b42-8011-8f5a9a1db758


i
