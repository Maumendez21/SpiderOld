jQuery('.form-lead').each(function () {
    "use strict";
    var t = jQuery(this);
    var t_result = jQuery(this).find('.form-send');
    var t_result_init_val = t_result.val();
    var validate_email = function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    var t_timeout;
    t.submit(function (event) {
        event.preventDefault();
        var t_values = {};
        var t_values_items = t.find('input[name]');
        t_values_items.each(function () {
            t_values[this.name] = jQuery(this).val();
        });
        if (t_values['NAME'] === '' || t_values['EMAIL'] === '' || t_values['TELEFONO'] === '') {
            t_result.val('Por favor, llena los campos');
        
        } 
        else {
            if (!validate_email(t_values['EMAIL']))
                t_result.val('Por favor, proporcionar un Email valido');
            else
                //alert('hola');
                            jQuery.post("php/contacts.php", t.serialize(), function (result) {
                                t_result.val(result);
                            });
                    clearTimeout(t_timeout);
                    t_timeout = setTimeout(function () {
                        t_result.val(t_result_init_val);
                    }, 3000);
        }
    });

});


