interface Student {
    id : number ;
    name : string ;
    email? : string;
    isActive : boolean;
    grades : number[];
}

let students: Student[] = [];






function createNewStudent(_id: Student["id"] , _name : string ,  _isActive : boolean , _grades : number[] , _email? : string ):void{
    const newStudent : Student = {
        id : _id,
        name : _name,
        isActive : _isActive,
        grades : _grades,
        // email : _email
    }
    _email?(newStudent.email = _email) : "empty Email";
    students.push(newStudent);
    console.log(newStudent);

}
createNewStudent(1 , "ziad" , true , [50,70,40,90,50]);






function calcAvgGrade(student:Student) : number{
    const sum : number =  student.grades.reduce( (acc , cur) => acc+cur )
    const avg : number = sum / student.grades.length;
    return avg;
}

const student:Student = students[0];
console.log(calcAvgGrade(student));









function studentStatus(avgGrade:number) :string{
    if(avgGrade >= 90 )
        return "Excellent";
    else if (avgGrade >=70)
        return "Good";
    else if(avgGrade >= 50)
        return "Average";
    else{
        return "Needs improvement";
    }
}

let avgGrade = calcAvgGrade(student);
console.log(studentStatus(avgGrade));
