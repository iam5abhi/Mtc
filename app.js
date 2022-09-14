const express = require("express");
const app = express();
const Error=require('./utils/ErrorHandler')
const GloBalErrorHandler =require('./middleware/Error')
const EmployeeRoutes =require('./api-routes/Employee-route/Employee-routes')
const CompanyRoutes =require('./api-routes/Company-routes/Company-routes')
const morgan =require('morgan')

app.use(express.urlencoded({extended:true}))
app.use(express.json())


// adding morgan to log HTTP requests
app.use(morgan('dev'))

// Hand The employee-routes
app.use('/employee/accounts',EmployeeRoutes)
app.use('/company/accounts',CompanyRoutes)

// Page Not Found Error
app.use('*',(req,res,next)=>{
    next(new Error(`can't find ${req.originalUrl} on this server`,404))
})

// Global Error Handler
app.use(GloBalErrorHandler)


module.exports =app
