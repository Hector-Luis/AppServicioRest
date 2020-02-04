const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const especialistas = require('../especialistas.json');

router.get('/', (req, res) => {
    res.json(especialistas);
});

router.post('/', (req, res) => {
    const id = especialistass.length + 1;
    const { nombre, especialidad, edad } = req.body;
    const newEspecialista = { ...req.body, id };
    if (id && nombre && especialidad && edad) {
        especialistas.push(newEspecialista);
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, especialidad, edad } = req.body;
    if (id && nombre && especialidad && edad) {
        _.each(especialistas, (especialista, i) => {
            if (especialista.id === id) {
                especialista.nombre = nombre;
                especialista.especialidad = especialidad;
                especialista.edad = edad;
            }
        });
        res.json(especialistas);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(especialistas, (especialista, i) => {
            if (especialista.id == id) {
                especialistas.splice(i, 1);
            }
        });
        res.json(especialistas);
    }
});

module.exports = router;