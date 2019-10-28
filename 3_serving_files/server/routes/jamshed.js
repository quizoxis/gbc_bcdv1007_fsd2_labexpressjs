/*
    Routes for: /jamshed
*/
var express = require('express');
var router = express.Router();

/* GET /jamshed. */
router.get('/', function(req, res, next) {
    res.send('[GET:/jamshed]: respond with a resource');
});

/* HEAD handler for /jamshed/q  */
router.get('/q', function(req, res, next) {
    res.send('[GET:/jamshed/q]: respond with a resource');
});


/* GET handler for /jamshed/q  */
router.get('/q', function(req, res, next) {
    res.send('[GET:/jamshed/q]: respond with a resource');
});

/* POST handler for /jamshed */
router.post('/', function (req, res) {
    res.send('[POST:/jamshed]: Got a POST request')
});

/* PUT handler for /jamshed */
router.put('/', function (req, res) {
    res.send('[PUT:/jamshed] Got a PUT request at /user')
});






module.exports = router;

