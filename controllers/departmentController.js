var db = require('../models');
var Department = db.department;


var addDept = async (req, res) => {
    try {
        const data = req.body;

        const [dept, created] = await Department.findOrCreate({
            where: { departmentName: data.departmentName },
            defaults: data 
        });

        if (created) {
            res.status(201).json(dept);
        } else {
            res.status(200).json({ message: 'Department already exists', department: dept });
        }
    } catch (error) {
        console.error("Error occurred while adding department:", error);
        res.status(500).json({ error: "Internal server error" });
    }

}

var updateDept = async (req, res) => {
    try {
        const data = req.body;
        const deptId = req.params.deptId;

       
        const existingDept = await Department.findOne({
            where: {
                DepartmentId: deptId
            }
        });

       
        if (!existingDept) {
            return res.status(404).json({ error: 'Department not found' });
        }

      
        await Department.update(data, {
            where: {
                DepartmentId: deptId
            }
        });

        res.status(200).json({ message: 'Department updated successfully' });
    } catch (error) {
        console.error("Error occurred while updating department:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};



var deleteDept = async (req, res) => {
    try {
        const deptId = req.params.deptId;

        const existingDept = await Department.findOne({
            where: {
                DepartmentId: deptId
            }
        });

        if (!existingDept) {
            return res.status(404).json({ error: 'Department not found' });
        }

        await Department.destroy({
            where: {
                DepartmentId: deptId
            }
        });

        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (error) {
        console.error("Error occurred while deleting department:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

var getDepts = async (req, res) => {
    try {
        const departments = await Department.findAll({});

        if (departments.length > 0) {
            return res.status(200).json({ message: 'Records exist', count: departments.length });
        } else {
            return res.status(404).json({ message: 'No records found' });
        }
    } catch (error) {
        console.error("Error occurred while checking records:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

var getDept = async (req, res) => {
    try {
        const deptId = req.params.deptId;

        const department = await Department.findOne({
            where: {
                DepartmentId: deptId
            }
        });

        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }

        res.status(200).json({ department });
    } catch (error) {
        console.error("Error occurred while getting department:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = {
    addDept,
    updateDept,
    deleteDept,
    getDepts,
    getDept
   

}