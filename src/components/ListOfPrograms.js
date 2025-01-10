import { useState, useEffect } from 'react';
import { MyPrograms } from './MyPrograms';
import { getAllPrograms, addProgram, editProgram, deleteClass } from './FetchProgram';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

function ListOfPrograms() {
    const [myProgram, setProgram] = useState([]);
    const [title, setTitle] = useState("");
    const [editing, setEditing] = useState(false);
    const [classId, setClassId] = useState("");


    useEffect(() => {
        getAllPrograms(setProgram);
    }, []);

    const updatingInInput = (_id, title) => {
        setEditing(true);
        setTitle(title);
        setClassId(_id);
    };
   
    return (
        <div className='program-container'>
            <h2>Programme des cours</h2>  
            <input
                type="text"
                placeholder="Ajouter un cours"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                disabled={!title}
                onClick={editing
                    ? () => editProgram(classId, title, setTitle, setProgram, setEditing)
                    : () => addProgram(title, setTitle, setProgram)}
            >
                {editing ? "Modifier" : "Ajouter"}
            </button>
            <div className="container mt-4">
                <Card className="shadow">
                    <Card.Header className="bg-dark text-white">Liste des cours</Card.Header>
                    {myProgram.length > 0 ? (
                    <ListGroup variant="flush">
                        {myProgram.map((program) => (
                            <ListGroup.Item key={program._id} className="d-flex justify-content-between">
                                <div className="flex-grow-1 text-start d-inline-block">
                                    <MyPrograms
                                        text={program.title}
                                        updatingInInput={() => updatingInInput(program._id, program.title)}
                                        deleteClass={() => deleteClass(program._id, setProgram)}
                                    />
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    ) : (
                        <p className="text-center py-3">Aucun programme disponible.</p>
                    )}
                </Card>
            </div> 
        </div>
           )   
};

export default ListOfPrograms;



