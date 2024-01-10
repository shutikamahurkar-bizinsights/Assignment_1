var db=require('../models');
var User=db.user;

var addUser = async (req,res) => {
    const data = req.body;
    const currDate = new Date();
    req.body.CreatedDate = currDate;
    const user = await User.create(data);
    res.status(201).json(user);
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

 var signIn= async(req,res)=>{
    const data = req.body;
    console.log(data);

    const user = await User.findOne({
        where : {
            EmailId:data.EmailId,
            Password:data.Password,
        }
    });
    if(user==null){
        res.status(404).json({message:'user unauthorized'})
    }
    else{
        res.status(200).json({message:'user authorized'})
    }
    //console.log(user);
    //res.status(200).json({user})
 }

 var updatePassword = async (req,res)=>{
    const data = req.body;
    req.body.UpdatedDate=new Date();
    const user = await User.update(data,{
        where:{
            UserId :data.UserId,       
        }
    });
    res.status(201).json(user);
 }
 


module.exports={
    addUser,
    updateUser,
    deleteUser,
    getUsers,
    getUser,
    signIn,
    updatePassword
    
}