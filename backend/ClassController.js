const ClassModel = require('./ClassModel');

//GET

module.exports.getClass = async (req, res) => {
    const myClass = await ClassModel.find();
    res.send(myClass);
}

//POST

module.exports.saveClass = async (req, res) => {
    const { title } = req.body;
    ClassModel.create({title})
    .then((data) => { console.log('Class added')
        res.send(data)
    })
}

//EDIT

module.exports.editClass = async (req, res) => {
    const { _id, title } = req.body;
    ClassModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited a Class'))
}

//DELETE

module.exports.deleteClass = async (req, res) => {
    try {
        const { id } = req.params; 
        await ClassModel.findByIdAndDelete(id);
        res.send('DELETED A CLASS');
    } catch (err) {
        res.status(500).send(err);
    }
};

