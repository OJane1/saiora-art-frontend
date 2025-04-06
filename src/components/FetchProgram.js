import axios from 'axios';

const getAllPrograms = (setProgram) => {
    axios.get("https://saiora-art-backend-1.onrender.com")
    .then(({data}) => {console.log(data)
        setProgram(data);
    })
}

const addProgram = (title, setTitle, setProgram) => {
    axios.post("https://saiora-art-backend-1.onrender.com/saveClass", {title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllPrograms(setProgram)
    }
)}

const editProgram = (classId, title, setTitle, setProgram, setEditing) => {
    axios.post(`https://saiora-art-backend-1.onrender.com/editClass`, { _id: classId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllPrograms(setProgram)
    })
}

const deleteClass = (_id, setProgram) => {
    axios.delete(`https://saiora-art-backend-1.onrender.com/deleteClass/${ _id }`)
    .then((data) => {
        console.log(data);
        getAllPrograms(setProgram);
    })
    .catch(err => console.error("Error deleting class:", err)); 
}


export {getAllPrograms, addProgram, editProgram, deleteClass };
