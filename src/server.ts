import express from 'express'
import api from './api/router';
import morgan from 'morgan'

const app = express()

process.env.NODE_ENV !== "prod" && app.use(morgan("dev"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use('/api/v1', api)
app.use('/', (req, res) => res.send('Hello world!!!'));
app.use('*', (req, res) => res.status(404).json({ error: 'not found'}))

export default app