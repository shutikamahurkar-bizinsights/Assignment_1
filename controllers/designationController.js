var db=require('../models');
var Designation=db.designation;

var addDesignation = async (req,res) => {
    try {
        const data = req.body;

        const existingDesignation = await Designation.findOne({
            where: {
                designationName: data.designationName
            }
        });

        if (existingDesignation) {
            return res.status(409).json({ error: 'Designation already exists' });
        }

        const currDate = new Date();
        data.CreatedDate = currDate;
        const newDesignation = await Designation.create(data);
        
        res.status(201).json(newDesignation);
    } catch (error) {
        console.error("Error occurred while adding designation:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

var updateDesignation = async (req,res) =>{
    try {
        const data = req.body;
        const designationId = req.params.designationId;

        const existingDesignation = await Designation.findOne({
            where: {
                designationId: designationId
            }
        });

        if (!existingDesignation) {
            return res.status(404).json({ error: 'Designation not found' });
        }

        const updatedDesignation = await Designation.update(data, {
            where: {
                designationId: designationId
            }
        });

        res.status(201).json(updatedDesignation);
    } catch (error) {
        console.error("Error occurred while updating designation:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

var deleteDesignation = async(req,res)=>{
    try {
        const designationId = req.params.designationId;

        const existingDesignation = await Designation.findOne({
            where: {
                DesignationId: designationId
            }
        });

        if (!existingDesignation) {
            return res.status(404).json({ error: 'Designation not found' });
        }

        const deletedRows = await Designation.destroy({
            where: {
                DesignationId: designationId
            }
        });

        res.status(201).json({ deletedRows });
    } catch (error) {
        console.error("Error occurred while deleting designation:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

var getDesignations = async (req,res)=>{
    const data = await Designation.findAll({});
    res.status(200).json({data})
 }

 var getDesignation = async (req,res)=>{
    try {
        const designationId = req.params.designationId;

        const designation = await Designation.findOne({
            where: {
                DesignationId: designationId
            }
        });

        if (!designation) {
            return res.status(404).json({ error: 'Designation not found' });
        }

        res.status(200).json({ designation });
    } catch (error) {
        console.error("Error occurred while fetching designation:", error);
        res.status(500).json({ error: "Internal server error" });
    }
 }


module.exports={
    addDesignation,
    updateDesignation,
    deleteDesignation,
    getDesignations,
    getDesignation,


}