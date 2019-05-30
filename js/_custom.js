$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

renderMathInElement(document.body);

$(document).ready(function () {
    $("#refs").prepend("<h1>References</h1>")

    $("h5").replaceWith(function() { return $("<h6>", {"id": this.id, "html": $(this).html()}); });
    $("h4").replaceWith(function() { return $("<h5>", {"id": this.id, "html": $(this).html()}); });
    $("h3").replaceWith(function() { return $("<h4>", {"id": this.id, "html": $(this).html()}); });
    $("h2").replaceWith(function() { return $("<h3>", {"id": this.id, "html": $(this).html()}); });
    $("h1").replaceWith(function() { return $("<h2>", {"id": this.id, "html": $(this).html()}); });
    $("#title").replaceWith(function() { return $("<h1>", {"id": this.id, "html": $(this).html()}); });

    $("h2").before("<hr>");

    $("table").addClass("table");
    $("thead").addClass("thead-light");

    $("figure").addClass("text-center");
    $("figure img").addClass("img-fluid");
    $("figure").attr("style", "padding-top: 20px");
    $("figcaption").attr("style", "padding-top: 20px");

    $("p").addClass("text-justify");
});
