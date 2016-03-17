//var remoteurl = "http://demo10-reall.rhcloud.com/"
var remoteurl = "http://127.0.0.1:8080/"

//var textclass = new textString("es");   // need to figure a way to not hard code this

var init = function () {
    //// test code!!
    //var result = textclass.getText("welcome");
};

$("#testbutton").on("click", function (ev) {
    //            alert("it worked");
    var email = $("input#email").val();
    var passwd = $("input#pwd").val();

    $("#login-button-wrapper img").show(300);
    $("#login-button-wrapper button").hide(300);
    $.ajax({
        type: "POST",
        url: remoteurl + "applogin",
        dataType: "jsonp",
        jsonpCallback: "cb",
        data: { name: email, password: passwd }
    }).done(function (data, status) {
        if (data.who === "invalid") {
            var msg = $("#invalidusererror").text();
            alert(msg);
            $("input#email").val("");
            $("input#pwd").val("");
        }
        else {
            lstring = $("#welcometext").text();
            $("#welcome-text").html(lstring + ", " + data.who);
            $("#dbgmessage").html("Logged in");

            $("#login-wrapper").hide(200);
            $("#patientform").show(200);
        }
    }).error(function (err, status) {
        alert("fail");
    }).complete(function(data, status){
        // restore button
        $("#login-button-wrapper img").hide(300);
        $("#login-button-wrapper button").show(300);
    })
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

// id of div that should wrap 
function hidebutton(id) {

}

function fixiFrame() {
    //var sh = screen.height;
    //var wh = window.innerHeight;
    //iFrameContentHeight = document.getElementById('form-frame').contentDocument.body.offsetHeight;
    //document.getElementById('form-frame').style.height = wh + 'px';
};


function initPatientFormPage() {
    $("#patient-register-form").validator().on("submit", function (ev) {
        var n = 0;
    });
};
