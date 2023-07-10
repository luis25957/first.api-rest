//rutas para las querys de los articulos
import {Router} from 'express';
import {getArticles, createArticles, modifyArticles, deleteArticles, getArticle } from '../controllers/articlesControllers.js';


const router = Router()


router.get('/articles', getArticles);

router.get('/articles/:id', getArticle);

router.post('/articles', createArticles);


router.patch('/articles/:id', modifyArticles);


router.delete('/articles/:id', deleteArticles);

export default router
