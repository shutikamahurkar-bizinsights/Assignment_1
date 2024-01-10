var db=require('../models');
var Designation=db.designation;

var addDesignation = async (req,res) => {
    const data = req.body;
    const currDate = new Date();
    req.body.CreatedDate = currDate;
    const designation = await Designation.create(data);
    res.status(201).json(designation);
}

var updateDesignation = async (req,res) =>{
    const data = req.body;
    console.log(data);
   
    const designation = await Designation.update(data,{
        where:{
            DesignationId : req.params.designationId
        }

    });
    res.status(201).json(designation);
}

var deleteDesignation = async(req,res)=>{
    const data = await Designation.destroy({
        where : {
            DesignationId:req.params.designationId
        }
    });
    res.status(201).json(data);
}

var getDesignations = async (req,res)=>{
    const data = await Designation.findAll({});
    res.status(200).json({data})
 }

 var getDesignation = async (req,res)=>{
    const data = await Designation.findOne({
        where : {
            DesignationId:req.params.designationId
        }
    });
    res.status(200).json({data})
 }


module.exports={
    addDesignation,
    updateDesignation,
    deleteDesignation,
    getDesignations,
    getDesignation,


}