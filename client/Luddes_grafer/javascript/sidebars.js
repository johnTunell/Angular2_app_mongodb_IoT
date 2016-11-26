/**
 * Created by Andreas on 2016-04-26.
 */

/*
* Toggles the menufield's visibility.
* Animates the button in a rotation of 90º that makes the button face down or to the side depending on the
* menufield's visibility.
* */
function manageMenubar() {
    $("#menufield").toggle(400);

    if($("#listicon").hasClass("rotated")) {
        $("#listicon").removeClass("rotated");
        $("#listicon").addClass("unrotated");
    } else
    {
        $("#listicon").removeClass("unrotated");
        $("#listicon").addClass("rotated");
    }
}

/**
 * Toggles the settingfield's visibility
 */
function manageSettingsbar(){
    $("#settingsfield").toggle(400);
}