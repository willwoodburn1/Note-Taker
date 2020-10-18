const path = require("path");

function apiRoutes() {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"))
    });

    app.post("/api/notes", function (req, res) {

        var newNote = req.body;
        newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

        db.json.push(newNote)
    });
    // UNSURE CHECK OUT LATER


    app.delete("/api/notes/:id", function (req, res) {

    });
};

module.exports = {
    apiRoutes
}

