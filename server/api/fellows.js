const router = require('express').Router();
const { Fellow } = require('../db');
console.log('....................', Fellow);

//get fellows
router.get('/', async (req, res, next) => {
  try {
    const fellows = await Fellow.findAll();
    console.log(fellows);
    res.send(fellows);
  } catch (err) {
    next(err);
  }
});
//get fellow by id
router.get('/:id', async (req, res, next) => {
  try {
    const fellow = await Fellow.findByPk(req.params.id);
    console.log(fellow);
    res.send(fellow);
  } catch (err) {
    next(err);
  }
});

//create fellow
router.post('/', async (req, res, next) => {
  try {
    const newFellow = await Fellow.create(req.body);
    res.send(newFellow);
  } catch (err) {
    next(err);
  }
});

//update fellow
router.put('/:id', async (req, res, next) => {
  try {
    const updateFellow = await Fellow.findByPk(req.params.id);
    await updateFellow.update(req.body);
    res.send(updateFellow);
  } catch (err) {
    next(err);
  }
});

//delete fellow
router.delete('/:id', async (req, res, next) => {
  try {
    await Fellow.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
