// Global Variables
let apiConfig = {apiName: 'Local JAMSHED API',
    apiUrl: 'http://localhost:3000/jamshed',
    apiKey:'3Cm3bHxG1I3ROE2N94Y8vw7347XEAaQk'};


$(document).ready(function(){

    $("#btnGetRequest").click(function(){
        $.get(apiConfig.apiUrl, function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });

    $("#btnPostRequest").click(function(){
        $.post(apiConfig.apiUrl,
            {
                q: "Donald Duck",
                city: "Duckburg"
            },
            function(data,status){
                alert("Data: " + data + "\nStatus: " + status);
            });
    });

    $("#btnHeadRequest").click(function(){
        $.head(apiConfig.apiUrl, function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });

});
