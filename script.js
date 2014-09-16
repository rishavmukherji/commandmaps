
var queue;

function init_queue(){
	//+ Jonas Raoni Soares Silva
	//@ http://jsfromhell.com/array/shuffle [v1.0]
	function shuffle(o){ //v1.0
    	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	}
	queue = ['paste', 'underline', 'find', 'hyperlink', 'table', 'italic',
		'bullets', 'shapes', 'smartart'];
	queue = shuffle(queue);
	$('#toClick').text(queue[0]);

}




function button_pressed (name, target){
	if (name == queue[0]){
		queue = queue.slice(1, queue.length);
		$('#toClick').text(queue[0]);
		var timestamp = Date.now();
		console.log (name + " " + "clicked at " + timestamp);
		$.ajax({
	      type: "POST",
	      contentType: "application/json",
	      url: "/info",
	      data: { 'button': name, 'time': parseInt(timestamp) },
	      dataType: "json"
		});
	}
}

init_queue();