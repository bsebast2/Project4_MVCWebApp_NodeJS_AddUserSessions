const express =require('express');
const controller=require('../controllers/connectionController');
const {isLoggedIn,isAuthor}=require('../middlewares/auth');
const {validateId}=require('../middlewares/validator')
const router=express.Router();



//CRUD

//CREATE
//GET /stories/new:send html form
router.get('/new',isLoggedIn,controller.new);

//POST /stories:create new story
router.post('/',isLoggedIn,controller.create);


//READ//////////////////////////////////////////////

//GET /connections
//GET /connections
router.get('/',controller.index);
//router.get('/',controller.index);
//GET /connections/:id

router.get('/:id',validateId,controller.show);


//GET /stories/:id/edits:send html form for editing an id
router.get('/:id/edit',validateId,isLoggedIn, isAuthor,controller.edit);

//PUT /connections/:id : update the story identified by id
router.put('/:id',validateId,isLoggedIn, isAuthor,controller.update);

//DELETE /connections/:id, delete the story identified by ID
router.delete('/:id',validateId,isLoggedIn, isAuthor,controller.delete);

module.exports=router;
