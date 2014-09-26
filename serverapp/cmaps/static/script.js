
var familiarisation = 18;
var performance = 18;

var queue;
var last_click;
var cmap_first = (Math.random() < .5);
var command_map = cmap_first;
var stage = 0;
var n = familiarisation;
var items = 6;
var choices = shuffle(dictqueue).slice(0, items);


familiarisation_text = "This section is meant to help you become more familiar with interface."
performance_text = ""

transition();

function reset_choices(){
    choices = shuffle(dictqueue).slice(0, items);
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function init_trial(){
    queue = shuffle(choices.slice(0)).concat(shuffle(choices.slice(0)).concat(shuffle(choices.slice(0))));
    show_target();
    last_click = Date.now();
}


function showMaps() {
    var element = document.getElementById('ribbon-home');
    if (element.style.display == 'none')
        element.style.display = 'block';
    else
        element.style.display = 'none';

    var element = document.getElementById('ribbon-insert');
    if (element.style.display == 'none')
        element.style.display = 'block';
    else
        element.style.display = 'none';

    var element = document.getElementById('ribbon-layout');
    if (element.style.display == 'none')
        element.style.display = 'block';
    else
        element.style.display = 'none';

    var element = document.getElementById('ribbon-review');
    if (element.style.display == 'none')
        element.style.display = 'block';
    else
        element.style.display = 'none';

}

function show(div_id) {
    document.getElementById('commandmaps_instructions').style.display = 'none';
    document.getElementById('ribbon_instructions').style.display = 'none';
    document.getElementById('commandmaps').style.display = 'none';
    document.getElementById('ribbon').style.display = 'none';
    document.getElementById('firstform').style.display = 'none';
    document.getElementById('exitform').style.display = 'none';
    document.getElementById('thankyou').style.display = 'none';
    document.getElementById('nasa-tlx-1').style.display = 'none';
    document.getElementById('nasa-tlx-2').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('target').style.display = 'none';

    document.getElementById(div_id).style.display = 'block';

    if (div_id == 'ribbon' || div_id == 'commandmaps'){
        document.getElementById('target').style.display = 'block';
    }
    if (div_id == 'commandmaps') {
        offset_tabs();
        showMaps();
    }

    else if(div_id == 'ribbon'){
        reset_tabs();
    }

    if (div_id == 'thankyou'){
        	showCode();
    }
}

function offset_tabs(){
    $('.tabs-inner').each(function(index) {
        $(this).css('margin-left', (50 * index).toString() + 'px');
    });
}

function reset_tabs(){
    $('.tabs-inner').css('margin-left', '0px');
}


function show_next(){
    $('#next').css('display', 'block')
    $('#toClick').css("display", "none");
    $('#target-icon').css("display", "none");
    $('#click-instructions').text("Click the next button:")


}

function show_target(){
    $('#toClick').text(queue[0]['text']);
    $('#target-icon').attr('class', 'icon-' + queue[0]['name'] + ' icon-' + queue[0]['name'] +'-large');
    $('#toClick').css("display", "block");
    $('#target-icon').css("display", "block");
    $('#next').css('display', 'none')
    $('#click-instructions').text('Click the following button:');
    last_click = Date.now();


}

function button_pressed (name, target){
    var correct = (name == queue[0]['name']);
    var timestamp = Date.now();
    var data = { 'button': name, 'time': timestamp, 'delta' : timestamp - last_click, 'session' : id,
        'correct' : correct, 'interface' : command_map};
    $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "/click",
          data: JSON.stringify(data),
          dataType: "json"
        });

    if (correct) {
        queue = queue.slice(1, queue.length);
        show_next()
    }

    if (command_map) showMaps();

    if (queue.length == 0){
        stage += 1;
        transition();
    }
    else{
    }
}

google.load('visualization', '1.0', {'packages':['corechart']});



  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.

   function showResults(){
    $.getJSON('/viewuser/'.concat(id), function(userData){
        drawChart(userData);
     });
   }

  function drawChart(userData) {

      console.log(userData);

	    // Create the data table.
	    var data1 = new google.visualization.DataTable();
	    data1.addColumn('string', 'Topping');
	    data1.addColumn('number', 'Average time');
	    data1.addRows([
	      ['You', (userData['cmap_all'])/1000],
	      ['Harvard Students', 2.776]
	    ]);

	    // Create the data table.
	    var data2 = new google.visualization.DataTable();
	    data2.addColumn('string', 'Topping');
	    data2.addColumn('number', 'Average time');
	    data2.addRows([
	      ['You', (userData['ribbon_all'])/1000],
	      ['Harvard Students', 3.214]
	    ]);
	    // Set chart options
	    var options1 = {'title':'Average time taken to find targets on CommandMaps',
	                       'width':700,
	                       'vAxis': {minValue: 0},
	                       'hAxis': {minValue: 0},
	                       'height':400};

        var options2 = {'title':'Average time taken to find targets on the Ribbon',
                       'width':700,
                       'vAxis': {minValue: 0},
                       'hAxis': {minValue: 0},
                       'height':400};

	    // Instantiate and draw our first chart, passing in some options.
	    var chart1 = new google.visualization.BarChart(document.getElementById('chart_div1'));
	    chart1.draw(data1, options1);

	    var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
	    chart2.draw(data2, options2);
}

function submit_firstform(){
    var data = $('#userform').serializeArray()
    var age = data[0] ? data[0]['value'] : 'None';
    var gender = data[1] ? data[1]['value'] : 'None';
    var mouse = data[2] ? data[2]['value'] : 'None';
    var country = data[3] ? data[3]['value'] : 'None';

    $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "/user",
          data: JSON.stringify({'session' : id, 'age' : age, 'gender' : gender, 'country' : country, 'mouse' : mouse}),
          dataType: "json"
        });
    stage += 1;
    transition();
    return false;
}

function showCode() {
	document.getElementById('mechanicalturk').innerHTML += '359588';
}



function submit_exitform(){
    var data = $('#betterform').serializeArray();
    console.log(data);
    var cmap_grade = data[0] ? data[0]['value'] : 'None';
    var r_grade = data[1] ? data[1]['value'] : 'None';
    $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "/exit",
          data: JSON.stringify({'session' : id, 'commandmaps-grade' : cmap_grade, 'ribbon-grade' : r_grade, 'answer' : 'NA'}),
          dataType: "json"
        });
    stage += 1;
    transition();
    return false;
}

function show_instructions(trials, cmap, performance){
    $('.ntrials').text(trials.toString());
    $('.trial_type').text(performance ? performance_text : familiarisation_text);
    if (cmap) show('commandmaps_instructions');
    else show('ribbon_instructions');
}

function clicked_next(){
    stage += 1;
    transition();
}

function transition(){
    if (stage == 0){
        show('firstform');
    }
    else if(stage == 1){//familiarisation of first experiment
        n = familiarisation;
        show_instructions(n, cmap_first, false)
    }
    else if (stage == 2){
        if (cmap_first) show('commandmaps');
        else show('ribbon');
        init_trial();
    }
    else if (stage == 3){//performance of first experiment
        n = performance;
        show_instructions(n, cmap_first, true);
    }

    else if (stage == 4){
        if (cmap_first) show('commandmaps');
        else show('ribbon');
        init_trial();
    }

    else if (stage == 5){ //familiarisation of second experiment
        n = familiarisation;
        command_map = !command_map;
        reset_choices();
        show_instructions(n, !cmap_first, false);
    }

    else if (stage == 6){
        if (!cmap_first) show('commandmaps');
        else show('ribbon');
        init_trial()
    }

    else if (stage == 7){//performance of second experiment
        n = performance;
        show_instructions(n, !cmap_first, true);
    }

    else if (stage == 8){
        last_click = Date.now()
        if (!cmap_first) show('commandmaps');
        else show('ribbon');
        init_trial();
    }

    else if (stage == 9){
        show('exitform');
    }

    else if (stage == 10){
        showResults();
        show('results');
    }

    else if (stage == 11){
        show('thankyou')
    }

}
