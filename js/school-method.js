

const school = {
        teachers: [
            {
                id: 1,
                name: "Pinchas",
                subjects: ["chemistry", "biology", "physics"],
                students: [],
                capacityLeft: 3,
            },
            {
                id: 2,
                name: "Williams",
                subjects: ["history", "ethics"],
                students: [],
                capacityLeft: 2,
            },
        ],
        students: [
                {
                    id: 10,
                    name: "Jennifer",
                    age: 20,
                },
                {
                    id: 11,
                    name: "Howard",
                    age: 23,
                },
                {
                    id: 12,
                    name: "Old-Timmy",
                    age: 86,
                },
                {
                    id:13,
                    name: "Houston",
                    age: 21,
                },
            ],

        findPerson(type, id) {
          if (type === 'student') {
            return this.students.find(student => student.id === id);
          } else if (type === 'teacher') {
            return this.teachers.find(teacher => teacher.id === id);
          } else {
            console.log('Invalid');
            return null;
          }
        },
      
        assignStudent(studentId, subject) {
          const availableTeacher = this.teachers.find(
            teacher => teacher.subjects.includes(subject) && teacher.students.length < teacher.capacity
          );
      
          if (availableTeacher) {
            const student = this.students.find(student => student.id === studentId);
            availableTeacher.students.push(student);
            student.teacher = availableTeacher;
            console.log(`Student ${student.name} assigned to Teacher ${availableTeacher.name} for ${subject}.`);
          } else {
            console.log('Sorr no available teachers left.');
          }
        },
      
        assignTeachersSubject(teacherId, newSubject) {
          const teacher = this.teachers.find(teacher => teacher.id === teacherId);
          if (teacher) {
            if (!teacher.subjects.includes(newSubject)) {
              teacher.subjects.push(newSubject);
              console.log(`Subject ${newSubject} assigned to Teacher ${teacher.name}.`);
            } else {
              console.log(`Teacher ${teacher.name} already teaches ${newSubject}.`);
            }
          } else {
            console.log(`Teacher with ID ${teacherId} not found.`);
          }
        },
      
        doSomethingNew() {
          console.log('This a new method doing something.');
        }
    };
      
      school.assignStudent('s1', 'Math');
      school.assignStudent('s2', 'Science');
      school.assignStudent('s3', 'Math');
      school.assignStudent('s4', 'History');
      school.assignStudent('s5', 'Science');
      
      school.assignTeachersSubject('t1', 'Math');
      school.assignTeachersSubject('t2', 'Science');
      school.assignTeachersSubject('t1', 'History'); 
      
      school.doSomethingNew();
      