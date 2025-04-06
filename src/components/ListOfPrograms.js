import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListOfPrograms.css';
import Auth from './Auth';
import { MyPrograms } from './MyPrograms';
import { getAllPrograms, addProgram, editProgram, deleteClass } from './FetchProgram';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './Contact';
import Sidebar from './Sidebar';

const ListOfPrograms = () => {
    const [programs, setPrograms] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [myProgram, setMyProgram] = useState([]);
    const [title, setTitle] = useState("");
    const [editing, setEditing] = useState(false);
    const [classId, setClassId] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        fetchPrograms();
        getAllPrograms(setMyProgram);
    }, []);

    const fetchPrograms = async () => {
        try {
            const response = await fetch('/api/programs');
            const data = await response.json();
            setPrograms(data);
        } catch (error) {
            console.error('Error fetching programs:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAuthSuccess = () => {
        setIsAuthenticated(true);
    };

    const handleAuthLogout = () => {
        setIsAuthenticated(false);
    };

    const updatingInInput = (_id, title) => {
        setEditing(true);
        setTitle(title);
        setClassId(_id);
    };

    const handleMenuStateChange = (state) => {
        setIsMenuOpen(state.isOpen);
    };

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="programs-container">
            <Sidebar isOpen={isMenuOpen} onStateChange={handleMenuStateChange} />
            <div className="programs-content">
                <div className="programs-grid">
                    {programs.map((program) => (
                        <div key={program._id} className="program-card">
                            <img src={program.image} alt={program.title} />
                            <h3>{program.title}</h3>
                            <p>{program.description}</p>
                            <Link to={`/program/${program._id}`} className="program-link">
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {!isAuthenticated ? (
                <Auth onAuthSuccess={handleAuthSuccess} />
            ) : (
                <div className="auth-status">
                    <span>Authenticated</span>
                    <button className="logout-btn" onClick={handleAuthLogout}>
                        Logout
                    </button>
                </div>
            )}
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
                        ? () => editProgram(classId, title, setTitle, setMyProgram, setEditing)
                        : () => addProgram(title, setTitle, setMyProgram)}
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
                                            deleteClass={() => deleteClass(program._id, setMyProgram)}
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
                <Contact />
            </div>
        </div>
    );
};

export default ListOfPrograms;



