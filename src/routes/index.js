const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Double D Solutions',
        website: 'double-d-solutions.com'
    };
    res.json(data);
});  

module.exports = router;