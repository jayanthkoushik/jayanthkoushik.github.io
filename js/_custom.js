$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true
    });
});

$(document).ready(function () {
    renderMathInElement(document.body);
});
