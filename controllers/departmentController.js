var db=require('../models');
var Department=db.department;

var addDept = async (req,res) => {
    const data = req.body;
    const currDate = new Date();
    req.body.CreatedDate = currDate;
    const dept = await Department.create(data);
    res.status(201).json(dept);
}

var updateDept = async (req,res) =>{
    const data = req.body;
    console.log(data);
   
    const dept = await Department.update(data,{
        where:{
            DepartmentId : req.params.deptId
        }

    });
    res.status(201).json(dept);
}

var deleteDept = async(req,res)=>{
    const data = await Department.destroy({
        where : {
            DepartmentId:req.params.deptId
        }
    });
    res.status(201).json(data);
}

var getDepts = async (req,res)=>{
    const data = await Department.findAll({});
    res.status(200).json({data})
 }

 var getDept = async (req,res)=>{
    const data = await Department.findOne({
        where : {
            DepartmentId:req.params.deptId
        }
    });
    res.status(200).json({data})
 }


module.exports={
    addDept,
    updateDept,
    deleteDept,
    getDepts,
    getDept

}