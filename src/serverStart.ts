import express = require('express') ;
import bodyParser = require('body-parser') ;
import { mongoConnection } from './mongoConnection';
import { actionRoutes } from './routes/action';

const app = express();
mongoConnection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

actionRoutes(app);
app.get('/ping', (req, res) => {
    res.json("hello world 135");
});
const port = procdess.env.PORT || 3005;

app.listen(port, () => {
    console.log('Server running at http://127.0.0.1:3005/');
});
