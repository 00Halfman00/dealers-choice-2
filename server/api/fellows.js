const router = require('express').Router();
const { Fellow } = require('../db');
console.log('....................', Fellow)

router.get('/', async (req, res, next) => {
    try{
        const fellows = await Fellow.findAll()
        console.log('hi')
        console.log(fellows)
        res.send(fellows)

    } catch(err) {
        next(err)
    }
});

module.exports = router;