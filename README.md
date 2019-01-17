# Blissfull-bites Project
Project Brief
 

### Main website pages

- Home page : path = "/" ---> when you press veiw more offers, it ill navigate you to the "/menu"    offers at the bottom.
- Store : path = "/menu" ---> each item type is catogorized, when you select "add to cart" items     it will show up the checkout button on the cart and the total on the "top right corner", and       each item with its name,quantity and price.
  when you press checkout, It will navigate you the the submit form of items you have selected in a table.
  cancel will redirect you back, submit will send your order into the database.then it will show you back to store button.
- Blog : path = "/blog" --> each blog post will navigate you it's page path = "/posts/:id:", and there is a pagination only in this page.
- Contact : will navigate you to the footer.


### CMS

- main page path : "/control", you have to login with "username:admin" & "password:admin"
- you have three main pages and the logout button.
- blog controller will let you create,read,update and delete.
- menu controller will let yoy create,read,update and delete cake items.(each will wrap under its    catogory on the website depending   on what category did you choose).
- userOrders, will let you see the orders people ordered on your website, you only can delete it.

### additional information.
- Its responsive
- Have a feedback.
- Database is not ignored in git.
- you cant access the controller writing url, unless you login.



