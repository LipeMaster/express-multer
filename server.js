const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

//configurar de pasta estática
app.use(express.static('public'));

app.post('/file/upload', upload.single('file'), (req, res) => {
    res.send('<h2>Upload realizado com sucesso</h2>');
});





app.listen(port, () => {
    console.log(`Server is runnin on port ${port}.`);
})