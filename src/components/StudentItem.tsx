import React from 'react';
import type {Student} from '../App';

interface Props {
    student: Student;
    togglePresence: (id: number) => void;
}

const StudentItem: React.FC<Props> = ({ student, togglePresence }) => {
    return (
        <li>
            {student.name} — {student.present ? 'Obecny' : 'Nieobecny'}
            <button onClick={() => togglePresence(student.id)}>
                Zmien stan
            </button>
        </li>
    );
};

export default StudentItem;
