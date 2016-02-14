var reallapp = angular.module("reall", [])
    .value("lang", "es");


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
        }
    };

    return {
        getString: function (key, lang) {
            return textconstants[key][lang];
        }
    }
});

