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
router.head('/q', function(req, res, next) {
    res.send('[HEAD:/jamshed/q]: respond with a resource');
});


/* GET handler for /jamshed/q  */
router.get('/q', function(req, res, next) {
    console.log(`Test: Q= ${req.query.q}`);

    res.send('[GET:/jamshed/q]: respond with a resource');
});

/* POST handler for /jamshed */
router.post('/', function (req, res) {
    var responseData = '[POST:/jamshed]: Got a POST request\n';
    responseData += `Request-Route: ${req.route}\n`;
    responseData += `Request-Path ${req.path}`;
    responseData += `Request-Query-Q: ${req.params[0]}`;


    res.send(responseData)
});

/* PUT handler for /jamshed */
router.put('/', function (req, res) {
    res.send('[PUT:/jamshed] Got a PUT request at /user')
});






module.exports = router;

