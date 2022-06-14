const express = require("express") ;

const app = express() ;
app.set('view engine', 'ejs');
//app.set('views','./views') ;
const port = 4000 ;

//function middleware
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });

app.get("/" , (req,res) => {
    res.render("home")
})
app.get("/service" , (req,res) => {
    res.render("service")
})
app.get("/contact" , (req,res) => {
    res.render("contact")
})
app.listen(port, ()=> {
    console.log("this server is running");
})