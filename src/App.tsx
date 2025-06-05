import { useState } from 'react'
import './App.css'
import Clock from "./components/Clock.tsx";
import AddStudentForm from "./components/AddStudentForm.tsx";
import StudentList from "./components/StudentList.tsx";

export interface Student {
    id: number;
    name: string;
    present: boolean;
}
function App() {
    const [students, setStudents] = useState<Student[]>([]);
    const [showClock, setShowClock] = useState(true);
    const [showList, setShowList] = useState(true);
    const [showForm, setShowForm] = useState(true);

    const togglePresence = (id: number) => {
        setStudents(prev =>
            prev.map(student =>
                student.id === id ? { ...student, present: !student.present } : student
            )
        );
    };

    const addStudent = (name: string) => {
        const newStudent: Student = {
            id: Date.now(),
            name,
            present: false,
        };
        setStudents(prev => [...prev, newStudent]);
    };

  return (
    <>
        <div>
            <h1>BellBuddy</h1>

            <button onClick={() => setShowClock(prev => !prev)}>Zegar</button>
            <button onClick={() => setShowList(prev => !prev)}>Lista</button>
            <button onClick={() => setShowForm(prev => !prev)}>Form</button>

            {showClock && <Clock />}
            {showForm && <AddStudentForm addStudent={addStudent} />}
            {showList && (
                <StudentList students={students} togglePresence={togglePresence} />
            )}
        </div>
    </>
  )
}

export default App
