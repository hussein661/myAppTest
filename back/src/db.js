import sqlite from 'sqlite'
import SQL from 'sql-template-strings';


const getDateAsString = () =>
{
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var mn = today.getMinutes();
  
  if(dd < 10) {
      dd = "0" + dd
  } 
  
  if(mm < 10) {
      mm = "0" + mm
  } 
  if(mn < 10) {
    mn = "0" + mn
} 
if(hh < 10) {
  hh = "0" + hh
} 
  
  return today = mm + '/' + dd + '/' + yyyy + ' at ' + hh + ':' + mn;
  }

const initializeDatabase = async () => {
  const db = await sqlite.open('./db.sqlite');

    const getAllCakes = async () => {
      
      const rows = await db.all(SQL `select rowid as id,name,catname,description,image,price from cakes order by id desc`);
      if(!rows){
        return ("there is enough cakes exists")
      }
      return rows;
    }
    const getAllPosts = async () => {
      
      const rows = await db.all(SQL `select rowid as id,title,author,content,image,date from blogposts order by id desc `);
      if(!rows){
        return ("there is no more rows")
      }
      return rows;
    }



    const getAllCakesByOffer = async () => {
      
      const rows = await db.all(SQL `select rowid as id,name,catname,description,image,price from cakes where catname='offer' order by id desc`);
      if(!rows){
        return ("there is enough cakes exists")
      }
      return rows;
    }
    const getAllCakesByCakes = async () => {
      
      const rows = await db.all(SQL `select rowid as id,name,catname,description,image,price from cakes where catname='cake' order by id desc`);
      if(!rows){
        return ("there is enough cakes exists")
      }
      return rows;
    }
    const getAllCakesByCupcakes = async () => {
      
      const rows = await db.all(SQL `select rowid as id,name,catname,description,image,price from cakes where catname='cupcake' order by id desc`);
      if(!rows){
        return ("there is enough cakes exists")
      }
      return rows;
    }
    const getAllCakesByCookies = async () => {
      
      const rows = await db.all(SQL `select rowid as id,name,catname,description,image,price from cakes where catname='cookies' order by id desc`);
      if(!rows){
        return ("there is enough cakes exists")
      }
      return rows;
    }


    const getCake = async (id) => {

      const allCakes = await db.all(SQL `select rowid as id,name,catname,description,image,price from cakes where rowid = ${id}` )
      const cake = allCakes[0]
      if(!cake) {
        return("no cake found")
      }
      return(cake)
    }
    const getPost = async (id) => {

      const allPosts = await db.all(SQL `select rowid as id,title,author,content,image,date from blogposts where rowid = ${id}` )
      const post = allPosts[0]
      if(!post) {
        return("no post found")
      }
      return(post)
    }

    const deleteAllCakes = async () => {
      await db.run(SQL`delete from cakes`);
      return [];
    }
  const deleteAllPosts = async () => {
      await db.run(SQL`delete from blogposts`);
      return [];
    }

    const addCake = async (props) => {

      const {name,catname,description,image,price} = props;
      const addnew = await db.run(SQL`insert into cakes (name,catname,description,image,price) values (${name},${catname},${description},${image},${price})`)
      const id = addnew.stmt.lastID
      return id
     
    }
    const addPost = async (props) => {
      const date = getDateAsString();
      const {title,author,content,image} = props;
      const addnew = await db.run(SQL`insert into blogposts (title,author,content,image,date) values (${title},${author},${content},${image},${date})`)
      const id = addnew.stmt.lastID
      return id
    }
    const addOrder = async (props) => {
      const date = getDateAsString();
      const {username,number,address,userorder} = props;
      const addnew = await db.run(SQL`insert into orderlist (username,number,address,userorder,date) values (${username},${number},${address},${userorder},${date})`)
      const id = addnew.stmt.lastID
      return id
    }

    const deleteCake = async (id) => {
      const deletecake = await db.run(SQL `delete from cakes where rowid = ${id}`)
      if(deletecake.stmt.changes === 0){
        return(`cake "${id}" does not exist`)
      }
      return ("deleted") 
    }
    const deletePost = async (id) => {
      const deletepost = await db.run(SQL `delete from blogposts where rowid = ${id}`)
      if(deletepost.stmt.changes === 0){
        return(`post "${id}" does not exist`)
      }
      return ("deleted") 
    }

    const updateCake = async(id,name,catname,description,price) => {

      const update = await db.run(SQL `update cakes set name = ${name},catname=${catname},description=${description},price=${price} where rowid = ${id}`)
      return update
   }
   const updatePost = async(id,title,author,content) => {

    const update = await db.run(SQL `update blogposts set title=${title},author=${author},content=${content} where rowid = ${id}`)
    return update
 }    

  const getAllOrders = async () => {
      const rows = await db.all(SQL `select rowid as id,username,number,address,userorder,date from orderlist order by rowid desc`)
      if(!rows) {
        return ("no orders")
      }
      return (rows)
  }

  const deleteOrder = async(id) => {
    const deleteRow = await db.run(SQL`delete from orderlist where rowid = ${id}`)
    if(deleteRow.stmt.changes === 0){
      return(`order "${id}" does not exist`)
    }
    return ("deleted") 
  }
    

    const controller = {
      getAllCakes,
      getCake,
      addCake,
      deleteCake,
      updateCake,
      deleteAllPosts,
      deleteAllCakes,
      getAllCakesByCakes,
      getAllCakesByCookies,
      getAllCakesByOffer,
      getAllCakesByCupcakes,
      getPost,
      getAllPosts,
      addPost,
      updatePost,
      deletePost,
      getAllOrders,
      addOrder,
      deleteOrder
    }
  
    return controller
  }
  
  
  export default initializeDatabase;
  