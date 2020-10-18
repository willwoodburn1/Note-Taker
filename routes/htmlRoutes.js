const path = require("path");

function htmlRoutes() {

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

}

module.exports = {
    htmlRoutes
};

// Just for the html routes