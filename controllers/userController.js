var db=require('../models');
var User=db.user;



var registeration = async (req,res) => {
        console.log('inside userCtrl.registeration')
        const data = req.body;
        const user = await User.create(data);
        res.status(201).json({user});
   
}

var updateUser = async (req,res) =>{
    try {
       
        const user = await User.findOne({
            where: {
                UserId: req.params.UserId
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const data = req.body;
        data.UpdatedDate = new Date();
        const [rowsUpdated, updatedUser] = await User.update(data, {
            where: { UserId: req.params.UserId },
            returning: true 
        });

       
        if (rowsUpdated === 0) {
            return res.status(404).json({ error: 'User not found or data unchanged' });
        }

       
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


var deleteUser = async(req,res)=>{
    
    try {
       
        const user = await User.findOne({
            where: {
                UserId: req.params.UserId
            }
        });

       
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

      
        const deletedRowCount = await User.destroy({
            where: {
                UserId: req.params.UserId
            }
        });

       
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

var getUsers = async (req,res)=>{
    try {
    const data = await User.findAll({});
    if (data.length > 0) {
            res.status(200).json({ data });
    } else {
       
        res.status(404).json({ error: 'No records found' });
    }
} catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal server error' });
}
};

 var getUser = async (req,res)=>{
    const data = await User.findOne({
        where : {
            UserId:req.params.UserId
        }
    });

    if (!data) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({data});

 }

 var login= async(req,res)=>{
    try {
        const data = req.body;

        
        const user = await User.findOne({
            where: {
                emailId: data.emailId,
                password: data.password, 
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'Invalid email or password' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
 

 var forgetPassword = async (req,res)=>{
    try {
        const data = req.body;
        
        const existingUser = await User.findOne({
            where: {
                UserId: data.UserId
            }
        });

        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        await User.update(
            { password: data.password, UpdatedDate: new Date() }, // Update password and UpdatedDate
            { where: { UserId: data.UserId } } // Filter by userId
        );

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
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