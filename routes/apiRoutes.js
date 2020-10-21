const path = require("path");
const fs = require("fs");
let notes = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');


var express = require('express');
const { notDeepStrictEqual } = require("assert");
var router = express.Router();

const pathtoFile = path.join(__dirname, "../db/db.json")


var dataJSON

router.get("/notes", function (req, res) {
    res.json(notes)

})


router.post("/notes", function (req, res) {

    req.body.id = uuidv4();

    notes.push(req.body);

    fs.writeFile(pathtoFile, JSON.stringify(notes, null, 2), function (err) {
        if (err) {
            throw (err)
        }
        res.json(notes)
    })
})

router.delete("/notes/:id", function(req, res) {
    var filtered = notes.filter(function(note) {
        return note.id !== req.params.id;
    })

    notes = filtered;

    fs.writeFile(pathtoFile, JSON.stringify(notes, null, 2), function (err) {
        if (err) {
            throw (err)
        }
        res.json(notes)
    })
})



module.exports = router;















// function apiRoutes(app) {


//     app.get("/api/notes", function (req, res) {
//         res.sendFile(path.join(__dirname, "../db/db.json"))
//     });

//     app.post("/api/notes", function (req, res) {

//         var newNote = req.body;
//         newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

//         db.push(newNote)

//         res.json(newNote);
//     });
//     // UNSURE CHECK OUT LATER


//     app.delete("/api/notes/:id", function (req, res) {

//     });
// };

// module.exports = {
//     apiRoutes
// }

// Just for API routes
