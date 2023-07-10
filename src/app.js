import express from "express";
import articlesRoutes from "./routes/articlesRoutes.js"
import indexRoutes from "./routes/indexRoutes.js"



const app = express();

app.use(express.json())


app.use(indexRoutes);
app.use('/api', articlesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;