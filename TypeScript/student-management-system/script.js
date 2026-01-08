var students = [];
function createNewStudent(_id, _name, _isActive, _grades, _email) {
    var newStudent = {
        id: _id,
        name: _name,
        isActive: _isActive,
        grades: _grades,
        // email : _email
    };
    _email ? (newStudent.email = _email) : "empty Email";
    students.push(newStudent);
    console.log(newStudent);
}
createNewStudent(1, "ziad", true, [50, 70, 40, 90, 50]);
function calcAvgGrade(student) {
    var sum = student.grades.reduce(function (acc, cur) { return acc + cur; });
    var avg = sum / student.grades.length;
    return avg;
}
var student = students[0];
console.log(calcAvgGrade(student));
function studentStatus(avgGrade) {
    if (avgGrade >= 90)
        return "Excellent";
    else if (avgGrade >= 70)
        return "Good";
    else if (avgGrade >= 50)
        return "Average";
    else {
        return "Needs improvement";
    }
}
var avgGrade = calcAvgGrade(student);
console.log(studentStatus(avgGrade));
