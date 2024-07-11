// (function($){
//     // use $ here safely
//
//     // document ready
//     $(function() {
//         $('[data-cmseditlink!=""][data-cmseditlink]').each(function() {
//             $(this).addClass('can-cms-edit');
//             var cmseditlink = $(this).data('cmseditlink');
//             cmseditlink = '<a href="' + cmseditlink + '" class="cms-edit-link" target="ceedit" style="display:none;"></a>';
//             $(this).prepend(cmseditlink);
//         });
//     });
// })(jQuery);


document.addEventListener('DOMContentLoaded', function() {
    // Selektiere alle Elemente mit dem Attribut data-cmseditlink, das nicht leer ist
    var elements = document.querySelectorAll('[data-cmseditlink]:not([data-cmseditlink=""])');

    elements.forEach(function(element) {
        // Füge die Klasse 'can-cms-edit' hinzu
        element.classList.add('can-cms-edit');

        // Hole den Wert des data-cmseditlink Attributs
        var cmseditlink = element.getAttribute('data-cmseditlink');

        // Erstelle den Link HTML-String
        var linkHtml = '<a href="' + cmseditlink + '" class="cms-edit-link" target="ceedit" style="display:none;"></a>';

        // Füge den Link als erstes Kind des Elements hinzu
        element.insertAdjacentHTML('afterbegin', linkHtml);
    });
});
