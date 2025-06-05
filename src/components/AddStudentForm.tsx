import React, { useState } from 'react';

interface Props {
    addStudent: (name: string) => void;
}

const AddStudentForm: React.FC<Props> = ({ addStudent }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            addStudent(name.trim());
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Imie: "
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <br/>
            <button type="submit">Dodaj ucznia</button>
        </form>
    );
};

export default AddStudentForm;
