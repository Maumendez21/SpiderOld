$(document).ready(function() {

    $("#spider-wizard").steps({
        headerTag: "h5",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        cssClass: "wizard",
        labels: {
            next: "Siguiente",
            previous: "Anterior"
        }
    });

    $("input[name='radio']").change(function(){
        console.log('radio');
    });

});
