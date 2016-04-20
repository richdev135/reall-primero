var reallapp = angular.module("reall", [])
    .value("lang", "es");


reallapp.controller("patientFormController", function($scope, $http) {
    $scope.formData = {};
    $scope.patients = [];

    $scope.processPatientForm = function () {
        //        $scope.formData.username = $($("input[name=username]")).val();
        setTimeout(function () {
            $scope.$apply();
            var paramvals = JSON.stringify($scope.formData);
            var url = remoteurl + "createPatient/" + "?callback=JSON_CALLBACK";
            $http.jsonp(url, { params: $scope.formData }).then(function (response) {
                if (response.data.result == "saved") {
                    alert("Patient created");
                }
                else {
                    alert("Oops - error");
                }
            });
        },100);

    };

    $scope.listPatients = function() {
        var url = remoteurl + "getAllPatients/" + "?callback=JSON_CALLBACK";
        $http.jsonp(url).then(function (response) {
            setTimeout(function () {
                $scope.patients = response.data;
                $("#patientform form").hide();
//                angular.forEach(response.data, function (value, key) {
//                });
                $scope.$apply();
            }, 100);
            //else {
            //    alert("Oops - error");
            //}
        });
    };


});


reallapp.directive('userName',function(){
    function doupdate(scope, elem, attr) {
        scope.$apply();
    };

    return {
        restrict: 'E',
        template: '<input type="text" name="username" class="form-control" ng-model="formData.username">',
        scope: {
            username: "=value"
        },
        link: doupdate()
    }
});

///
/// Translation service in Anglular
///
reallapp.directive('xlate', function (localizeService, lang) {
//    alert(lang);
    function lnk(scope, elem, attr) {
        elem.html(localizeService.getString(attr.xlate, lang));
    };

    return {
        restrict: 'A',
//        template: '{{xlated}}', 
        link: lnk
    }
});

reallapp.service('localizeService', function () {
    var textconstants = {
        "Welcome": {
            "en": "Welcome",
            "es": "Bienvenido"
        },
        "invalid": {
            "en": "invalid",
            "es": "inválido"
        },
        'help': {
            'en-us': 'help',
            'es': 'ayudame'
        },
        'hello': {
            'en-us': 'hello',
            'es': 'hola'
        },
        'password': {
            'en-us': 'Password',
            'es': 'Contraseña'
        },
        'email address': {
            'en-us': 'email address',
            'es': 'Correo electronico'
        },
        'name': {
            'en-us': 'Name',
            'es' : 'Nombre'
        },
        'lastname1': {
            'en-us': 'Last name',
            'es': 'Appellido 1'
        },
        'lastname2': {
            'en-us': 'Last name 2',
            'es': 'Appellido 2'
        },
        'address': {
            'en-us': 'Address',
            'es': 'Direcciones'
        },
        'submit': {
            'en-us': 'Submit',
            'es' : 'Enviar'
        }

    };

    return {
        getString: function (key, lang) {
            return textconstants[key][lang];
        }
    }
});
///////////


