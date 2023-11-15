export { collectRoomNumbers, collectRoomsAndCapacities, collectLabeledRoomCaps, countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge }; //implement these
export const classrooms = [
    {
        roomNumber: 101,
        capacity: 30,
        students: [
            { name: "Alice", age: 18 },
            { name: "Bob", age: 19 },
            { name: "Charlie", age: 17 },
        ],
    },
    {
        roomNumber: 102,
        capacity: 25,
        students: [
            { name: "David", age: 20 },
            { name: "Eve", age: 18 },
        ],
    },
    {
        roomNumber: 103,
        capacity: 35,
        students: [
            { name: "Frank", age: 19 },
            { name: "Grace", age: 20 },
            { name: "Helen", age: 17 },
        ],
    },
];
/*
1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this
string format:  [“101::30”, :102::25”, “103::35”].
3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object
format [{roomNumber: 101, capacity: 30} , …  ]
4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a
roomNumber as parameters and returns the number of students in the specified classroom.
5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
 minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum
age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns
the average age of students across all classrooms.
 */
//1
function collectRoomNumbers(rooms) {
    const allRooms = rooms.map(room => room.roomNumber);
    return allRooms;
}
//2
function collectRoomsAndCapacities(rooms) {
    const roomCapacity = rooms.map(room => room.roomNumber + "::" + room.capacity);
    return roomCapacity;
}
function collectLabeledRoomCaps(rooms) {
    const roomCapacity = rooms.map(room => {
        const result = { roomNumber: room.roomNumber, capacity: room.capacity };
        return result;
    });
    return roomCapacity;
}
//4
function countStudentsInClassroom(rooms, roomNumber) {
    const countStudents = rooms.reduce((acc, current) => {
        if (current.roomNumber === roomNumber) {
            acc += current.students.length;
        }
        return acc;
    }, 0);
    return countStudents;
}
//5
function findClassroomsWithCapacity(rooms, minCapacity) {
    const roomsMinCapacity = rooms.filter(room => room.capacity >= minCapacity);
    return roomsMinCapacity;
}
//6
function findStudentsOlderThan(rooms, minAge) {
    const olderstudent = rooms.reduce((acc, current) => {
        for (const student of current.students) {
            if (student.age > minAge) {
                acc = acc.concat(student);
            }
        }
        return acc;
    }, []);
    return olderstudent;
}
//7
function averageStudentAge(rooms) {
    const aveAge = rooms.reduce((acc, current) => {
        let age = 0;
        for (const student of current.students) {
            age += student.age;
        }
        acc += (age / current.students.length);
        return acc;
    }, 0);
    return +((aveAge / rooms.length).toFixed(1));
}
