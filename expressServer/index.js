import express from 'express';
const app = express();
const port = 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})