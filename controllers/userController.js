var db=require('../models');
var User=db.user;


var registeration = async (req,res) => {
    const data = req.body;
        const user = await User.create(data);
        res.status(201).json({user});
   
}

var updateUser = async (req,res) =>{
    const data = req.body;
    req.body.UpdatedDate=new Date();
    const user = await User.update(data,{
        where:{
            UserId : req.params.UserId
        }

    });
    res.status(201).json(user);
}

var deleteUser = async(req,res)=>{
    const data = await User.destroy({
        where : {
            UserId:req.params.UserId
        }
    });
    res.status(201).json(data);
}

var getUsers = async (req,res)=>{
    const data = await User.findAll({});
    res.status(200).json({data})

 }

 var getUser = async (req,res)=>{
    const data = await User.findOne({
        where : {
            UserId:req.params.UserId
        }
    });
    res.status(200).json({data})

 }

 var login= async(req,res)=>{
    const data = req.body;
    console.log(data);

    const user = await User.findOne({
        where : {
            emailId:data.emailId,
            password:data.password,
        }
    });
    
    res.status(200).json({user})
 }

 var forgetPassword = async (req,res)=>{
    const data = req.body;
    req.body.UpdatedDate=new Date();
    const user = await User.update(data,{
        where:{
            userId :data.userId,       
        }
    });
    res.status(201).json(user);
 }
 


module.exports={
    
    registeration,
    updateUser,
    deleteUser,
    getUsers,
    getUser,
    login,
    forgetPassword
    
}