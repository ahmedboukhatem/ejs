
var router = require('express').Router();

// tableau d'objet cours
var cours = [
    {
        title: "livre1",
        description: "livre1 description",
        url: "www.google.com"
    },
    {
        title: "livre2",
        description: "livre2 description",
        url: "www.google.com"
    },
    {
        title: "livre3",
        description: "livre3 description",
        url: "www.google.com"
    }
];


router.get('/cours', (req, res)=>{
    // we render liste_cours with the cours title table
    var courses_title = [];
    cours.forEach(element =>{
        courses_title.push(element.titre);
    });

    // afficher titles
    courses_title.forEach(element =>{
        console.log(element);
    });

    res.render('liste_cours', {courses_title: courses_title});
});

router.get('/cours/:id', (req, res)=>{
    var title = cours[req.params.id].title;
    var description = cours[req.params.id].description;
    var url = cours[req.params.id].url;
    res.render("cours_temp", {
        title: title,
        description: description,
        url: url

    });
});

/*  gestionnaire cours */

router.get('/gestionnaire_cours', (req, res)=>{

    res.render('gestionnaire_cours', {cours: cours});
});

//delete
router.get('/gestionnaire_cours/delete/:id', (req, res)=>{
    var id_cours = req.params.id;
    cours.splice(id_cours, 1);
    console.log('row deleted'); 
    res.redirect('../');
})

//update
//get the course
router.get('/gestionnaire_cours/update/:id', (req, res)=>{
    var title = cours[req.params.id].title;
    var description = cours[req.params.id].description;
    var url = cours[req.params.id].url;
    res.render("update_cours_temp", {
        id_cours: req.params.id,
        title: title,
        description: description,
        url: url

    });
});
//update the course
router.post('/gestionnaire_cours/update', (req, res)=>{
    console.log(req.body);
    id_cours = req.body.id_cours;
    if(req.body != {}){
        var informations = {
            title : req.body.title,
            description : req.body.description,
            url : req.body.url
        };
        

        cours[id_cours] = informations;
    }
    res.redirect('../gestionnaire_cours');
})

//add
router.get('/gestionnaire_cours/ajouter_cours', (req, res)=>{
    res.render('ajouter_cours');
})

router.post('/gestionnaire_cours/ajouter_cours', (req, res)=>{
    var informations = {
        ...req.body
    }
    console.log(informations);
    cours.push(informations);
    console.log("cours ajouté avec succes");
    res.redirect('../gestionnaire_cours');
})

module.exports = router;