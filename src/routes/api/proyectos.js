const router = require('express').Router();
const proyecto = require('../../models/proyectos.model.js');


router.get('/', async (req, res) => {
    try {
        const Proyecto = await proyecto.find();
        res.json(Proyecto);
    } catch (error) {
        res.json(error)
    }
});

router.get('/:proyectoId', async (req, res) => {
    try {
        const Proyecto = await proyecto.findById(req.params.proyectoId);
        res.json(Proyecto)
    } catch (error) {
        res.json(error)
    }
});

router.get('/categoria/:categoria', async (req, res) => {

    try {
        const [Proyecto] = await proyecto.find({ categoria: req.params.categoria });
        res.json(Proyecto)
    } catch (error) {
        res.json(error)
    }
});



router.post('/', async (req, res) => {
    try {
        const nuevoProyecto = await
            proyecto.create(req.body)
        res.json(nuevoProyecto)
    } catch (error) {
        res.json(error)
    }
});

router.put('/:proyectoId', async (req, res) => {

    {
        try {
            const proyectoEditado = await proyecto.findByIdAndUpdate(req.params.proyectoId, req.body)
            res.json(proyectoEditado)
        } catch (error) {
            res.json(error)
        }
    }
});

router.delete('/:proyectoId', async (req, res) => {

    {
        try {
            const proyectoBorrado = await proyecto.findByIdAndDelete(req.params.proyectoId);
            res.json(proyectoBorrado);
        } catch (error) {
            res.json(error)
        }
    }

});




module.exports = router;