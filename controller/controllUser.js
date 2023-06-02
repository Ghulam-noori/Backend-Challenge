const Feed = require('../model/model');


// Get homePage and render the index file
const homePage = (req, res) => {
    Feed.find()
    .sort({create_at: '-1'})
    .then(result =>{res.render('index',{messages : result})})
    .catch(err =>{console.log(err)})   
}

// get new page for rendering the index file for validation
const postMessage =(req, res) =>{
    Feed.find()
    .then(err =>res.render('newForm',{err : err.errors}))
    .catch(err =>{console.log(err)})   
}

// Post the Message in homepage
const createMessage =(req, res)=>{
    const feed = new Feed(req.body)
    feed.save()
    .then(result =>{res.redirect('/feed')})
    .catch(err=>res.render('newForm' ,{err: err.errors}))
}


// open a new page to edit or to delete an Message
const editMessage =(req, res)=>{
    let id = req.params.id;
    Feed.findById(id)
    .then((result) =>{
        res.render('fullMessage' , {messages : result});
    })
    .catch(err =>{console.log(err)});
}

//open an message to edit
const getFullMessage = (req, res)=>{
    Feed.findById(req.params.id)
    .then((result) =>{
        res.render('fullMessage' , {messages : result});
    })
    .catch(err =>{console.log(err)});
}

//Get the update
const getEditPage = (req, res)=>{
    Feed.findByIdAndUpdate({_id: req.params.id},req.body,{new:true})
    .then((result) =>{
        res.render('editForm' , {messages : result});
    })
    .catch(err =>{console.log(err)});
}

// Update the edited message and redirect to feed/1 page
const updateForm = (req, res) => {
	Feed.findByIdAndUpdate({_id: req.params.id},req.body,{new:true})
		.then((result) => {
			res.redirect(`/feed/1/${result._id}`);
		})
		.catch((err) => console.log(err));
};

//Delete a message
const deleteMessage = (req, res) => {
    Feed.findByIdAndDelete(req.params.id)
    .then(()=> {res.redirect('/feed')})
    .catch(err =>{ console.log(err)});    
}


module.exports ={
    homePage,
    createMessage,
    postMessage,
    editMessage,
    updateForm,
    getFullMessage,
    deleteMessage,
    getEditPage
}