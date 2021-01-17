require("dotenv").config()
const nodemailer  = require("nodemailer");

//step 1
const transport = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.email,
        pass : process.env.password
    }
})
//step 2
//send out email
const mailOption = {
    from : "aakash19@navgurukul.org",
    to : "aakash19@navgurukul.org",
    subject : "hello aakash",
    text : "this is a body of mail"
}

//step 3
transport.sendMail(mailOption, function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log("your email has sent..."+ data.response);
    }
})