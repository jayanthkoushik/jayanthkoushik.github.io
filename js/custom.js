$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

renderMathInElement(document.body);

$(document).ready(function () {
    $("h5").replaceWith(function() { return $("<h6>", {"id": this.id, "html": $(this).html()}); });
    $("h4").replaceWith(function() { return $("<h5>", {"id": this.id, "html": $(this).html()}); });
    $("h3").replaceWith(function() { return $("<h4>", {"id": this.id, "html": $(this).html()}); });
    $("h2").replaceWith(function() { return $("<h3>", {"id": this.id, "html": $(this).html()}); });
    $("h1").replaceWith(function() { return $("<h2>", {"id": this.id, "html": $(this).html()}); });
    $("#title").replaceWith(function() { return $("<h1>", {"id": this.id, "html": $(this).html()}); });

    $("h2").before("<hr>");

    $("table").addClass("table");
    $("thead").addClass("thead-light");
});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-49245567-2', 'auto');
ga('send', 'pageview');
