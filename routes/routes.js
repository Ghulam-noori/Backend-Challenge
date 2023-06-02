const express = require('express');
const route = express.Router();
const userController = require('../controller/controllUser')


//Home Page with posts
route.get('/feed' ,userController.homePage)

//Form for posting
route.get('/new/feed',userController.postMessage)
route.post('/feed' ,userController.createMessage)

//edit page
route.get('/feed/1/:id',userController.editMessage)

//Edit page and post changes
route.get('/feed/edit/1/:id' ,userController.getEditPage)


route.get('/feed/1/:id',userController.getFullMessage)
route.post('/feed/1/:id',userController.updateForm)

//Delete post
route.get('/delete-message/:id', userController.deleteMessage)




module.exports = route;