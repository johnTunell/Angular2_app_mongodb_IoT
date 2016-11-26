/**
 * Created by Andreas on 2016-05-16.
 */
/**
 * Switches between the two lists of strings when pressing an item with an id corresponding to a list in the dictionary.
 * Inspired by this answer on http://stackoverflow.com/a/13427846 and remade to work on our web page
 */
$(function () {
    "use strict";
    var dictionary, set_lang;
    /**
     * Two lists of strings, for English and Swedish, each with an id that defines a span in the html code and the text string that will fill the span
     */
    dictionary = {
        "English": {
            "logout": "Log Out",
            "device": "Device",
            "help": "Help",
            "logintext": "Login",
            "noacc": "Don't have an account?",
            "clickhere": "Click here",
            "signup": "to sign up",
            "finish": "Finish"
        },
        "Svenska": {
            "logout": "Logga ut",
            "device": "Enhet",
            "help": "Hjälp",
            "logintext": "Logga in",
            "noacc": "Har du inget konto?",
            "clickhere": "Klicka här",
            "signup": "för att gå med",
            "finish": "Slutför"
        }
    };

    /**
     * Takes a name of a dictionary as an argument.
     * Uses the internal function data-translate to switch between languages.
     * Checks if the argument is found in the dictionary and then switches each string in the list to the correct language.
     * Returns the keys of the entries in the dictionary corresponding to the argument language.
     */
    function set_lang(dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    }


    /**
     * Takes the current chosen language as input and switch the text of placeholders in forms according to it.
     */
    function input_translation (currentLang){
        if(currentLang == 'English'){
            $("#usernameinput").prop('placeholder', 'Username');
            $("#emailinput").prop('placeholder', 'Email');
            $("#passwordinput").prop('placeholder', 'Password');
            $("#reppasswordinput").prop('placeholder', 'Repeat Password');
            $("#loginbutton").prop('value', 'Login');

        } else if (currentLang == 'Svenska'){
            $("#usernameinput").prop('placeholder', 'Användarnamn');
            $("#emailinput").prop('placeholder', 'Epost');
            $("#passwordinput").prop('placeholder', 'Lösenord');
            $("#reppasswordinput").prop('placeholder', 'Repetera lösenord');
            $("#loginbutton").prop('value', 'Logga in');
        }
    }

    
    /**
     * Triggered when pressing an item with the class "lang" and checks the id of the item.
     * If the matching string from the html is found in the dictionary, the function set_lang will be called with the string as the argument.
     * It changes the style of the strings so that the active language is clearly shown.
     */
    $(".lang").on("click", function (event) {
        console.log("click");
        console.log(event);
        var currentLang = event.target.innerHTML;
        console.log(currentLang);
        set_lang(dictionary[currentLang]);
        input_translation(currentLang);
        $(this).siblings().addClass("availablelang").removeClass("activelang");
        $(this).removeClass("availablelang").addClass("activelang");
    } )

    /**
     * Sets the initial language to English.
     */
    set_lang(dictionary.English);
});