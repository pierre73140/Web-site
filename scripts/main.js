$(function() {
	/*Envoie l'index (indiqué dans l'id) 
	du premier et derniere articles courant en objet litteral*/
	function getIndex() {
		//envoie l'index du premiere article
		var	first = function() {
			var id = $('#container article:first').attr('id');
			return parseInt(id.split('-')[1]);
		},
		
		//Envoie l'index du dernier article
		last = function() {
			var id = $('#container article:last').attr('id');
			return parseInt(id.split('-')[1]);
		};

		return {first: first(), last: last()};
	}

	/*Envoie le commentaire correspondant a 
	l'index dans un string*/
	function getMsg(index) {
		var content = '';
		
		$.ajax({
	        type: 'GET',
	        url: 'scripts/comment.php?index=' + index, 
	        async: false,
	    	success: function(data) { content = data; }
	    });  

		return content;
	}
	
	/*Insert un nouveau message*/
	function insertMsg(objet) {
		var options = {
			next: {
				index: function() {
					var id = $('#container article:first').attr('id'),
						index = 0;
					
					if(id) {
						index = getIndex().last;
						index ++;
					}

					$('#livreOr').trigger('next', index);
					return index;
				},
				
				insert: function(content) {
					$(content).appendTo('#container');
				}
			},
			
			back: {
				index: function() {
					var index = getIndex().first;
					index --;

					$('#livreOr').trigger('back', index);
					return index;
				},
				
				insert: function(content) {
					$(content).prependTo('#container');
				}
			}
		};

		$('#livreOr').trigger('newMsg', options[objet.methode].index(), objet.methode);
		var content = getMsg(options[objet.methode].index());
		options[objet.methode].insert(content);
	}
	
	//Script Global
	
	var msgLen = 4;
	
	insertMsg({methode: 'next'});
	insertMsg({methode: 'next'});
	
	//Evenement livre-or
	$('#livreOr').on('newMsg', function(e, index, methode) {
		if(methode = 'back') { 
			var indexFirst = index;
			var indexLast = index + 1;
		} else { 
			var indexLast = index; 
			var indexFirst = index - 1;
		}

		if(indexFirst < msgLen) {
			$('#flecheLivre > .haut').show();
		} 
	
		if(indexLast > 0) {
			$('#flecheLivre > .bas').show();
		} 
	});

	$('#livreOr').on('next', function(e, index) {
		if(index < msgLen) {} else
			$('#flecheLivre > .bas').hide();
	});

	$('#livreOr').on('back', function(e, index) {	
		if(index > 0) {} else
			$('#flecheLivre > .haut').hide();
	}).trigger('back', 0);

	
	//Evenement click
	$('#flecheLivre > .bas').click(function() {
		insertMsg({methode: 'next'});
		$('#container article:first').remove();
	});

	$('#flecheLivre > .haut').click(function() {
		insertMsg({methode: 'back'});
		$('#container article:last').remove();
	});
});

/*
	$('.fleche2').click(function(e) {
		article = event.target.parentNode.parentNode;
		var msg = $('.' + article.className + ' .msg');

		if(msg.css('display') == 'none') {
			msg.show(100);
			event.target.src = "images/fleche3.png";
		} else {
			msg.hide(100);
			event.target.src = "images/fleche2.png";
		}
	});
*/