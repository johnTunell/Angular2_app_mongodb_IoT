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
        "english": {
            "logout": "Log out",
            "device": "Device"
        },
        "swedish": {
            "logout": "Logga ut",
            "device": "Enhet"

        }
    };

    /**
     * Takes a name of a dictionary as an argument.
     * Uses the internal function data-translate to switch between languages.
     * Checks if the argument is found in the dictionary and then switches each string in the list to the correct language.
     * Returns the keys of the entries in the dictionary corresponding to the argument language.
     */

    set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };


    /**
     * Triggered when pressing an item with the class "lang" and checks the id of the item. If the id is found in the dictionary, the function set_lang will be called with the id as the argument.
     */
    $("#lang").click(function () {
        var language = this.value;
        if (dictionary.hasOwnProperty(language)) {
            set_lang(dictionary[language]);
        }
    });

    /**
     * Sets the initial language to Swedish.
     */
    set_lang(dictionary.english);
});