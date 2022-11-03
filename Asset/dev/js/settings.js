(function(window, document, KB, $){
    document.addEventListener('DOMContentLoaded', (event) => {
        if ($(".tr-color-picker > input[type='text']").length > 0){
            $(".tr-color-picker > input[type='text']").spectrum({
                preferredFormat: "rgb",
                showInput: true,
                showAlpha: true
            });

            $(".overwrite-checkbox").change(function(event) {
                $(event.target).val($(event.target).is(':checked')) 
            });
        }
    });
})(window, document, KB, jQuery);
