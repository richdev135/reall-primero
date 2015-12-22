var remoteurl = "http://demo10-reall.rhcloud.com/"
//var remoteurl = "http://127.0.0.1:8080/"

function init() {
    alert("init!");
}

$("#testbutton").on("click", function (ev) {
    //            alert("it worked");
    var email = $("input#email").val();
    $.ajax({
        type: "POST",
        url: remoteurl + "test",
        dataType: "jsonp",
        jsonpCallback: "cb",
        data: { name: email, last: "buff" }
    }).done(function (data, status) {
        alert("Welcome: " + data.who);
        $("#dbgmessage").html("Logged in");
    }).error(function (err, status) {
        alert("fail");
    });
});

function logout() {
    $.ajax({
        type: "POST",
        url: remoteurl + "logout",
        dataType: "jsonp",
        jsonpCallback: "cb",
    }).done(function (data, status) {
        //        alert("all good");
        $("#dbgmessage").html("Logged out");
    }).error(function (err, status) {
        alert("fail");
    });

}