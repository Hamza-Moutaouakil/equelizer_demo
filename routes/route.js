const express = require('express');
const router = express.Router();

require('../config/database')

const Etudiant = require('../models/Etudiant')
const Filiere = require('../models/Filiere')
const Professeur = require('../models/Professeur')
const Notification = require('../models/Notification')
const Departement = require('../models/Departement')
const Eleve = require('../models/Eleve')
const Module = require('../models/Module')
const Classe = require('../models/Classe')
const Comment = require('../models/Comment')
const Compte = require('../models/Compte')
const Post = require('../models/Post')

//
Eleve.belongsTo(Classe, {as: "Classes", foreignKey: 'id_classe'})
Classe.belongsTo(Filiere, {as: "Filieres", foreignKey: 'id_filiere'})
Filiere.belongsTo(Departement, {as: "Departements", foreignKey: "id_dep"})
Departement.belongsTo(Professeur, {as: "Professeurs", foreignKey: 'chef_dep'})


router.get("/hello", function (req, res) {
    res.json("Hello World");
});

router.get("/addnotif", (req, res) => {
    console.log(req.body);
    res.json("Add notification request");
    });

    router.post("/addnotification", (req, res) => {
        console.log("Data to add to the database are :")
        console.log("# To :" + req.body.notification_to)
        console.log("# From :" + req.body.notification_from)
        console.log("# Content :" + req.body.notification_content)
        console.log("# Type :" + req.body.notification_type)
        res.json(req.body);
    });


    router.post("/getStudents", (req, res) =>
        Etudiant.findAll()
            .then(userResponse => {
                res.status(200).json(userResponse)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    )



    router.post("/getProfesseurs", (req, res) =>
        Professeur.findAll()
            .then(filiereResponse => {
                res.status(200).json(filiereResponse)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    )

    router.post("/getProfesseur/:id", (req, res) =>
        Professeur.findOne({
            where: {id: req.params.id}
        }).then(userResponse => {
            res.status(200).json(userResponse)
        })
            .catch(error => {
                res.status(400).send(error)
            })
    )


    router.post("/getNotifications", (req, res) => {
        Notification.findAll()
            .then(notificationResponse =>
                res.status(200).json(notificationResponse
                ))
            .catch(error => {
                res.status(400).send(error)
            })
    })


    router.post("/getDepartements", (req, res) => {
        Departement.findAll()
            .then(departmentResponse =>
                res.status(200).json(departmentResponse
                ))
            .catch(error => {
                res.status(400).send(error)
            })
    })

    router.post("/getDepartement/:id", (req, res) =>
        Departement.findOne({
            where: {id: req.params.id},
        }).then(userResponse => {
            res.status(200).json(userResponse)
        })
            .catch(error => {
                res.status(400).send(error)
            })
    )


router.post('/getEleves', (req, res) => {
    Eleve.findAll()
        .then((departmentResponse) =>
            res.status(200).json(departmentResponse)
        )
        .catch(error => {
            res.status(400).send(error)
        })
})
//
router.post("/getEleve/:id", (req, res) =>
    Eleve.findOne({
        where: {id: req.params.id},
        include: [{
            model: Classe, as: "Classes",
            include: [{
                model: Filiere, as: "Filieres",
                include: [{
                    model: Departement, as: "Departements",
                    include: [{model: Professeur, as: "Professeurs"}]
                }]
            }]
        }]
    }).then(userResponse => {
        res.status(200).json(userResponse)
    })
        .catch(error => {
            res.status(400).send(error)
        })
)

router.post("/getEleve/:id", (req, res) =>
        Eleve.findOne({
            where: {id: req.params.id}
        }).then(userResponse => {
            res.status(200).json(userResponse)
        })
            .catch(error => {
                res.status(400).send(error)
            })
    )


    router.post("/getFilieres", (req, res) =>
        Filiere.findAll()
            .then(filiereResponse => {
                res.status(200).json(filiereResponse)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    )
    router.post("/getFiliere/:id", (req, res) =>
        Filiere.findOne({
            where: {id: req.params.id},
            include: [{ model: Departement, as: "Departements"}]
        }).then(filiereResponse => {
            res.status(200).json(filiereResponse)
        })
            .catch(error => {
                res.status(400).send(error)
            })
    )

router.post('/getModules', (req, res) => {
    Module.findAll()
        .then((moduleResponse) =>
            res.status(200).json(moduleResponse)
        )
        .catch(error => {
            res.status(400).send(error)
        })
})

router.post('/post/:id/getComments', (req, res) => {
    Module.findAll()
        .then((moduleResponse) =>
            res.status(200).json(moduleResponse)
        )
        .catch(error => {
            res.status(400).send(error)
        })
})

router.post('/getClasses', (req, res) => {
    Classe.findAll()
        .then((classeResponse) =>
            res.status(200).json(classeResponse)
        )
        .catch(error => {
            res.status(400).send(error)
        })
})


router.post('/getComments', (req, res) => {
    Comment.findAll()
        .then((commentResponse) =>
            res.status(200).json(commentResponse)
        )
        .catch(error => {
            res.status(400).send(error)
        })
})

router.post('/getComptes', (req, res) => {
    Compte.findAll()
        .then((compteResponse) =>
            res.status(200).json(compteResponse)
        )
        .catch(error => {
            res.status(400).send(error)
        })
})

router.post('/getPosts', (req, res) => {
    Post.findAll()
        .then((postResponse) =>
            res.status(200).json(postResponse)
        )
        .catch(error => {
            res.status(400).send(error)
        })
})

module.exports = router;