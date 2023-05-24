const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');


const app = express();
const PORT = 4000;




// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));


// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));


// cookie parser middleware
app.use(cookieParser());

//username and password
const myusername = 'admin'
const mypassword = 'admin'

// a variable to save a session
var session;




app.get('/',(req,res) => {
  session=req.session;
  if(session.userid){
      res.send("Welcome User <a href=\'/dashboard'>click to logout</a>");
  }else
  res.sendFile('/index.html',{root:__dirname})
});

app.post('/login',(req,res) => {
  if(req.body.username == myusername && req.body.password == mypassword){
      session=req.session;
      session.userid=req.body.username;
      console.log(req.session)
      res.send(`Hey there, welcome <a href=\'/dashboard'>click to logout</a>`);
  }
  else{
      res.send('Invalid username or password');
  }
})


app.get('/dashboard',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));



// const express = require('express');
// const app = express();
// const session = require('express-session');
// const path = require('path');
// const router = express.Router();
 
// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
//   //__dirname : It will resolve to your project folder.
//   res.sendFile(path.join(__dirname + '/login.html'));
//   res.sendFile(path.join(__dirname + '/dashboard.html'));


// });

// app.use("/public", express.static(path.join(__dirname, "public")));

// //add the router
// app.use('/', router);

// const user="admin";
// const pass="admin";





// app.use(session({
// 	secret: 'secret',
// 	resave: false,
// 	saveUninitialized: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'static')));


// app.get('/',(req,res) => {
//   session=req.session;
//   if(session.userid){
//       res.send("Welcome User <a href=\'/logout'>click to logout</a>");
//   }else
//   res.sendFile('views/index.html',{root:__dirname})
// });

// app.post('/login',(req,res) => {
//   if(req.body.username == myusername && req.body.password == mypassword){
//       session=req.session;
//       session.userid=req.body.username;
//       console.log(req.session)
//       res.send(`Hey there, welcome <a href=\'/dashboard'>click to logout</a>`);
//   }
//   else{
//       res.send('Invalid username or password');
//   }
// })
// app.get('/dashboard',(req,res) => {
//   req.session.destroy();
//   res.redirect('/');
// });





app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});


// app.listen(process.env.port || 3000);