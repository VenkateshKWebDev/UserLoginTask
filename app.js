const express = require('express');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes/mainRoutes');
const session=require("express-session");
const app = express();

app.use(session({
  secret:'webslesson',
  resave:true,
  saveUninitialized:true,
}))

const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Use the main routes
app.use('/', mainRoutes);
app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Find the user in the database
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    
    const user = results[0];
    
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = user;
      res.redirect('/index');
    } else {
      res.send('Invalid username or password');
    }
  });
});

app.get('/register', (req, res) => {
  res.render('register');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
