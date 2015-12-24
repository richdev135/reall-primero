
var textString = function (lang) {
    var currentLanguage = lang;
    this.getText = function (text) {
        result = textconstants[text];
        return result[lang];
    };

    var textconstants = {
        "welcome": {
            "en": "welcome",
            "es": "bienvenido"
        },
        "invalid": {
            "en": "invalid",
            "es": "inválido"
        }
    }; 

};