var $root = $('html, body');
$('#menu a').click(function() {
  var href = $.attr(this, 'href');
  if (href != undefined && href != '#') {
    $root.animate({
      scrollTop: $(href).offset().top
    }, 650, function () {
      window.location.hash = href;
    });
  }
  return false;
});
