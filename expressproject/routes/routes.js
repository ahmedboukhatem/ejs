/*  here we will put all the routes */ 
const router = require('express').Router();


router.get('/', (req, res)=>{
    console.log("envoie des infos");
    // res.send('anis menaa');
});

router.get('/cours', (req, res)=>{
    console.log('on accede à la liste des cours');
    res.render("cours");

});

router.get('/cours/:id', (req, res)=>{
    var id_livre = req.params.id;
    if(id_livre == 1){
        res.render("cour1");
    } else if(id_livre == 2){
        res.render("cour2");
    } else if(id_livre == 3){
        res.render("cour3");
    }
   // console.log('on recupere le livre qui porte le id ' + id_livre);
   
})


module.exports = router;
