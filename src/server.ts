import express, { Request, Response } from 'express'
import cors from 'cors';
import userRoutes from './handlers/usersRoutes';
import bodyParser from 'body-parser'
import orderRoutes from './handlers/orderRoutes';
import productsRoutes from './handlers/productRoutes';

const app: express.Application = express()
const address: string = "0.0.0.0:3012"



app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3010, function () {
    console.log(`starting app on: ${address}`)
})

const corsOptions = {
    origin: '',
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

userRoutes(app);
productsRoutes(app);
orderRoutes(app);

export default app;