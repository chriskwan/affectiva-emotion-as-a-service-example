var url = "https://index.affectiva.com/";

var getUrl = function (url, callback) {
        var request = new XMLHttpRequest();
        request.onload = callback;
        request.open("GET", url);
        request.setRequestHeader("Accept", "application/json");
        //request.responseType = "json";
        request.send();
};

getUrl(url, function () {
    debugger;
    alert("hey");
});