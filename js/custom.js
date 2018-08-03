$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'port', 'contact'],
        menu: '#myMenu',
    });
    //methods
    $.fn.fullpage.setAllowScrolling(false);
});