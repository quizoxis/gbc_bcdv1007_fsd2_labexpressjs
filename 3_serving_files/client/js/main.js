// Global Variables
let apiConfig = {apiName: 'Local JAMSHED API',
    apiUrl: 'http://localhost:3000/jamshed',
    apiKey:'3Cm3bHxG1I3ROE2N94Y8vw7347XEAaQk'};


$(document).ready(function(){
    $("button").click(function(){
        $.get(apiConfig.apiUrl, function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});

