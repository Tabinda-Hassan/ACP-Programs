const app = express();
const port = 3000;

 app.get('/greet/:name', (res, req) => {
    const name = req.params.name;
    res.send(`Welcome! It's good to see you${name}`)
 })

