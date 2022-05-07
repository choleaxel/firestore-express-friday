import { connectDb } from "./connectdb.js";



export const getAllPets = (req, res) => {
    const db = connectDb();
    db.collection("pets").get()
    .then(snapshot => {
        const petArray = snapshot.doc.map(doc => {
            let pet = doc.data();
            pet.id = doc.id;
            return pet;
        });
        res.send(petArray);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}