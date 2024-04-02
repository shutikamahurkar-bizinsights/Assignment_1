var db = require('../models');
var Department = db.department;


var addDept = async (req, res) => {
    try {
        const data = req.body;

        const [dept, created] = await Department.findOrCreate({
            where: { departmentName: data.departmentName },
            defaults: data // Data to create if not found
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
    const data = req.body;
    console.log(data);

    const dept = await Department.update(data, {
        where: {
            DepartmentId: req.params.deptId
        }

    });
    res.status(201).json(dept);
}

var deleteDept = async (req, res) => {
    const data = await Department.destroy({
        where: {
            DepartmentId: req.params.deptId
        }
    });
    res.status(201).json(data);
}

var getDepts = async (req, res) => {
    const data = await Department.findAll({});
    res.status(200).json({ data })
}

var getDept = async (req, res) => {
    console.log('Department.findOne');
    const data = await Department.findOne({
        where: {
            DepartmentId: req.params.deptId
        }
    });
    res.status(200).json({ data })
}


module.exports = {
    addDept,
    updateDept,
    deleteDept,
    getDepts,
    getDept,
    updateUser

}