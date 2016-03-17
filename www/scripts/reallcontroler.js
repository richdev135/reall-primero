var reallapp = angular.module("reall", [])
    .value("lang", "es");


reallapp.controller("patientFormController", function($scope, $http) {
    $scope.formData = {};
    $scope.processPatientForm = function () {
        var paramvals = JSON.stringify($scope.formData);
        var url = remoteurl + "createPatient/" + "?callback=JSON_CALLBACK";
        $http.jsonp(url, {params : $scope.formData}).then(function (response) {
            var w = response;
        });

    };
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
        }
    };

    return {
        getString: function (key, lang) {
            return textconstants[key][lang];
        }
    }
});
///////////


