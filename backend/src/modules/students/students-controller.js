const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const { userId, roleId, name } = req.query;
    const students = await getAllStudents({ userId, roleId, name });
    res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body;
    const message = await addNewStudent(payload);
    res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    // const { id } = req.params;
    // const { name } = req.body;
    // const message = await processUpdateSectionById({ id, name });
    // res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    // const { id } = req.params;
    // const section = await getStudentDetail(id);
    // res.json(section);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    // const { id } = req.params;
    // const section = await findStudentToSetStatus(id);
    // res.json(section);

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
