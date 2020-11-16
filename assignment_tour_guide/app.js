//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const app				= express();
const port				= 3000;

const home				= require('./controllers/home');
const login				= require('./controllers/login');
const logout			= require('./controllers/logout');
const registration		= require('./controllers/registration');
const user				= require('./controllers/user');
const scout				= require('./controllers/scout');


//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/', express.static('assets'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));

app.use('/', home);
app.use('/login', login);
app.use('/logout', logout);
app.use('/registration', registration);
app.use('/user', user);
app.use('/scout', scout);

// //router
// app.get('/', (req, res)=>{
// 	res.send('Welcome');
// });

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});