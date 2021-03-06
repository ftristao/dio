import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';
import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

var path=require('path');


const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use(express.static('public'));

app.post('/users', UserController.store);
app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`)
});
