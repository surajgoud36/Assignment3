var express = require('express');
var router = express.Router();

router.get('/:firstNumber/and/:secondNumber', function(req, res, next) {
    console.log(req.params.firstNumber + req.params.secondNumber);
    let firstNo = parseInt(req.params.firstNumber),
        secondNo = parseInt(req.params.secondNumber);
    res.json({"Addition" : firstNo + secondNo});
});

module.exports = router;