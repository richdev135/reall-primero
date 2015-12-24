var remoteurl = "http://demo10-reall.rhcloud.com/"
//var remoteurl = "http://127.0.0.1:8080/"

var textclass = new textString("es");   // need to figure a way to not hard code this

var init = function () {
    //// test code!!
    //var result = textclass.getText("welcome");
};

$("#testbutton").on("click", function (ev) {
    //            alert("it worked");
    var email = $("input#email").val();
    var passwd = $("input#pwd").val();
    $.ajax({
        type: "POST",
        url: remoteurl + "applogin",
        dataType: "jsonp",
        jsonpCallback: "cb",
        data: { name: email, password: passwd }
    }).done(function (data, status) {
        if (data.who === "invalid") {
            var msg = textclass.getText("invalid");
            alert(msg);
        }
        else {
            lstring = textclass.getText("welcome");
            $("#welcome-text").html(lstring + ", " + data.who);
            $("#dbgmessage").html("Logged in");

            $("#login-wrapper").hide(200);
            $("#patientform").show(200);
        }
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

        $("#dbgmessage").html("Logged out");
    }).error(function (err, status) {
        alert("fail");
    });

}

function hidebutton(id) {

}