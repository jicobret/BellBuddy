import React from 'react';
import StudentItem from './StudentItem';
import type {Student} from '../App';

interface Props {
    students: Student[];
    togglePresence: (id: number) => void;
}

const StudentList: React.FC<Props> = ({ students, togglePresence }) => {
    return (
        <div>
            <h2>Uczniowie:</h2>
            <ul>
                {students.map(student => (
                    <StudentItem
                        key={student.id}
                        student={student}
                        togglePresence={togglePresence}
                    />
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
