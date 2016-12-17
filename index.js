smoothScroll.init();
$( document ).ready(function() {		
	$.ajax({		
    url: 'http://ttcat.net/udnrss/',		
    dataType: 'json',		
    jsonpCallback: 'MyJSONPCallback', // specify the callback name if you're hardcoding it		
    success: function(data){		
      // we make a successful JSONP call!		
      $.each(data, function(i, item) {		
        var x = 'food' + (i + 1);		
        $('.'+x).attr('href', item.link);		
        $('.'+ x + ' > .img').css('background-image', 'url(\'' + item.img + '\')');		
        $('.'+ x + ' > .desc').html(item.title);		
        $('.'+ x).attr('href', item.link);		
      })		
    }		
  });		
}); 