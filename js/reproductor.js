(function($) {
  $('.rep-item').on('click', function(e){
  	debugger;
  	e.preventDefault();
  	var nid = $(this).attr('data-nid');
  	var yid = $(this).attr('data-yid');
  	var url = '//www.youtube.com/embed/' + yid + '?rel=0';
  	var nodo = Drupal.settings.basePath + 'node/' + nid;
  	var titulo = $(this).children('.rep-item-datos h3').html();
  	var teaser = $(this).children('.rep-item-datos p').html();
  	//cambiamos la clase del item seleccionado
  	$('.rep-item').removeClass('rep-item-select');
  	$(this).addClass('rep-item-select');

  	//alteramos el contenido del reproductor
  	$('.rep-play > iframe').attr('src', url);
  	$('.rep-play > h1').html('<a href="' + nodo + '">' + titulo + '</a>');
  	$('.rep-play > p').html(teaser);
  });

})(jQuery);