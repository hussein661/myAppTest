import app from './app';
import initializeDatabase from './db'
import { authenticateUser, logout, isLoggedIn } from './auth'



const start = async () => { 
  
 const controller = await initializeDatabase();

 
 app.get('/login', authenticateUser)
 app.get('/logout', logout)
 
 app.get('/mypage', isLoggedIn, ( req, res ) => {
   const username = req.user.name
   res.send({success:true, result: 'ok, user '+username+' has access to this page'})
 })


 app.get('/', (req,res)=>res.send("ok"));



app.get('/cakes/allcatcake', async (req, res, next) => {
  const cakes = await controller.getAllCakesByCakes()
  res.json({success:true, result:cakes})
})
app.get('/cakes/allcatoffer', async (req, res, next) => {
  const cakes = await controller.getAllCakesByOffer()
  res.json({success:true, result:cakes})
})
app.get('/cakes/allcatcookies', async (req, res, next) => {
  const cakes = await controller.getAllCakesByCookies()
  res.json({success:true, result:cakes})
})
app.get('/cakes/allcatcupcake', async (req, res, next) => {
  const cakes = await controller.getAllCakesByCupcakes()
  res.json({success:true, result:cakes})
})

app.get('/cakes/allcakes', async (req, res, next) => {
  const cakes = await controller.getAllCakes()
  res.json({success:true, result:cakes})
})

app.get('/posts/allposts', async (req, res, next) => {
  const posts = await controller.getAllPosts()
  res.json({success:true, result:posts})
})


app.get('/cakes/getcake/:id', async (req,res,next)=> {
  const {id} = req.params
  const cake = await controller.getCake(id)
  res.json({success:true, result:cake})
})

app.get('/posts/getpost/:id', async (req,res,next)=> {
  const {id} = req.params
  const post = await controller.getPost(id)
  res.json({success:true, result:post})
})

app.get('/cakes/addcake', async (req,res,next)=> {
  const {name,catname,description,image,price} = req.query
  const result = await controller.addCake({name,catname,description,image,price})
  res.json({success:true, result});

})

app.get('/posts/addpost', async (req,res,next)=> {
  const {title,author,content,image} = req.query
  const result = await controller.addPost({title,author,content,image})
  res.json({success:true, result});

})

app.get('/cakes/deletecake/:id',async (req,res,next)=> {
  const {id} = req.params
  const result = await controller.deleteCake(id)
  res.json({success:true,result})
})

app.get('/posts/deletepost/:id',async (req,res,next)=> {
  const {id} = req.params
  const result = await controller.deletePost(id)
  res.json({success:true,result})
})

app.get('/cakes/updatecake/:id', async (req,res,next) => {

 const {id} = req.params
 const {name,catname,description,price} = req.query

 const result = await controller.updateCake(id, name,catname,description,price)

 res.json({success:true,result}) 
})

app.get('/posts/updatepost/:id', async (req,res,next) => {

  const {id} = req.params
  const {title,author,content} = req.query

  const result = await controller.updatePost(id, title,author,content)
 
  res.json({success:true,result}) 
 })

app.get('/cakes/deleteall',async (req,res,next)=>{
  const result = await controller.deleteAllCakes()
  res.json({success:true,result})
})

app.get('/posts/deleteall',async (req,res,next)=>{
  const result = await controller.deleteAllPosts()
  res.json({success:true,result})
})


app.get('/orders/allorders',async(req,res,next) => {
  const orders = await controller.getAllOrders()
  res.json({result:orders})
})

app.get('/orders/addorder',async(req,res,next) => {
   const {username,number,address,userorder} = req.query
  const result = await controller.addOrder({username,number,address,userorder})
  res.json({success:true,result})
})
app.get('/orders/deleteOrder/:id',async(req,res,next)=>{
  const {id} = req.params
  const result = await controller.deleteOrder(id)
  res.json({success:true,result})

})

app.listen(5000,()=> console.log ("listening on 5000"))
}


start();
