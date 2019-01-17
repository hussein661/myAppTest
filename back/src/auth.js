


const users = [
  { name : 'admin', username:'admin', password:'admin' },
  { name : 'batata', username:'batata', password:'batata' },
]


const tokens = {
  
}

export const authenticateUser = (req, res,next) => {
  if(!req.query.username || !req.query.password){
    return res.status(401).json({
      success:false,
      message:'username and password are both necessary'
    })
  }
  const { username, password } = req.query
  // let's find the user who has both the provided username, and the provided password
  const userIndex = users.findIndex( u => u.password === password && u.username === username)
  if(userIndex < 0 ){
    return res.status(401).json({
      success: false,
      message:'wrong username or password'
    })
  }
  const user = users[userIndex]
  const name = user.name
  const token = Math.random()+"" //
  tokens[token] = userIndex
  res.json({
    success:true,
    result: {
      name,
      token
    }
  })
}

export const logout = (req, res,next) => {
  const token = req.query.token
  if(!token){
    return res.json({ success: true })
  }
  if(typeof tokens[token] === 'undefined'){
    return res.json({ success: true })
  }
  delete tokens[token]
  return res.json({ success:true })
}

export const isLoggedIn = (req, res,next) => {
  const token = req.query.token
  if(!token || (typeof tokens[token] === 'undefined')){
    return res.status(403).json({ success: false, message: 'forbidden' })
  }
  const userIndex = tokens[token]
  const user = users[userIndex]
  req.is_logged_in = true
  req.user = user
  next()
}

