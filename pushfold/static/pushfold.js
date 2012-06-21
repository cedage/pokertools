var ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

function build_table(name){
    var table = $('#' + name + ' tbody');

    var first_card_index;
    var second_card_index;

    var tbody_html = '';

    for(first_card_index = 0; first_card_index < 13; first_card_index++){

	var row_html = '<tr>';

        for(second_card_index = 0; second_card_index < 13; second_card_index++){
            if(first_card_index < second_card_index){
	        row_html += '<td class="suited">'+ ranks[first_card_index] + ranks[second_card_index] + 's' +'</td>';
	    }
	    else if(first_card_index == second_card_index){
		row_html += '<td class="pair">'+ ranks[first_card_index] + ranks[second_card_index] +'</td>';
	    }
	    else{
		row_html += '<td class="offsuited">'+ ranks[second_card_index] + ranks[first_card_index] + 'o' +'</td>';
	    }
	}

	row_html += '</tr>';

	tbody_html += row_html;
    }

    table.html(tbody_html);
}


var push_intervals = {};
push_intervals['AA'] = [[1, 50]];
push_intervals['KK'] = [[1, 50]];
push_intervals['QQ'] = [[1, 50]];
push_intervals['JJ'] = [[1, 50]];
push_intervals['TT'] = [[1, 50]];
push_intervals['99'] = [[1, 50]];
push_intervals['88'] = [[1, 50]];
push_intervals['77'] = [[1, 50]];
push_intervals['66'] = [[1, 50]];
push_intervals['55'] = [[1, 50]];
push_intervals['44'] = [[1, 50]];
push_intervals['33'] = [[1, 50]];
push_intervals['22'] = [[1, 50]];


push_intervals['AKs'] = [[1, 50]];
push_intervals['AKo'] = [[1, 50]];

push_intervals['AQs'] = [[1, 50]];
push_intervals['AQo'] = [[1, 50]];

push_intervals['AJs'] = [[1, 50]];
push_intervals['AJo'] = [[1, 50]];

push_intervals['ATs'] = [[1, 50]];
push_intervals['ATo'] = [[1, 50]];

push_intervals['A9s'] = [[1, 50]];
push_intervals['A9o'] = [[1, 44.9]];

push_intervals['A8s'] = [[1, 50]];
push_intervals['A8o'] = [[1, 42.6]];

push_intervals['A7s'] = [[1, 50]];
push_intervals['A7o'] = [[1, 40.8]];

push_intervals['A6s'] = [[1, 50]];
push_intervals['A6o'] = [[1, 34.6]];

push_intervals['A5s'] = [[1, 50]];
push_intervals['A5o'] = [[1, 36.9]];

push_intervals['A4s'] = [[1, 50]];
push_intervals['A4o'] = [[1, 34.5]];

push_intervals['A3s'] = [[1, 50]];
push_intervals['A3o'] = [[1, 31.9]];

push_intervals['A2s'] = [[1, 47.5]];
push_intervals['A2o'] = [[1, 29.2]];


push_intervals['KQs'] = [[1, 50]];
push_intervals['KQo'] = [[1, 50]];

push_intervals['KJs'] = [[1, 50]];
push_intervals['KJo'] = [[1, 50]];

push_intervals['KTs'] = [[1, 50]];
push_intervals['KTo'] = [[1, 50]];

push_intervals['K9s'] = [[1, 50]];
push_intervals['K9o'] = [[1, 24.2]];

push_intervals['K8s'] = [[1, 50]];
push_intervals['K8o'] = [[1, 18.6]];

push_intervals['K7s'] = [[1, 49.2]];
push_intervals['K7o'] = [[1, 16.1]];

push_intervals['K6s'] = [[1, 36.2]];
push_intervals['K6o'] = [[1, 15.3]];

push_intervals['K5s'] = [[1, 32.2]];
push_intervals['K5o'] = [[1, 14.4]];

push_intervals['K4s'] = [[1, 26.4]];
push_intervals['K4o'] = [[1, 13.1]];

push_intervals['K3s'] = [[1, 19.9]];
push_intervals['K3o'] = [[1, 12.5]];

push_intervals['K2s'] = [[1, 19.3]];
push_intervals['K2o'] = [[1, 11.6]];


push_intervals['QJs'] = [[1, 50]];
push_intervals['QJo'] = [[1, 50]];

push_intervals['QTs'] = [[1, 50]];
push_intervals['QTo'] = [[1, 44.7]];

push_intervals['Q9s'] = [[1, 50]];
push_intervals['Q9o'] = [[1, 24.3]];

push_intervals['Q8s'] = [[1, 50]];
push_intervals['Q8o'] = [[1, 13]];

push_intervals['Q7s'] = [[1, 30.2]];
push_intervals['Q7o'] = [[1, 10.3]];

push_intervals['Q6s'] = [[1, 29.4]];
push_intervals['Q6o'] = [[1, 9.8]];

push_intervals['Q5s'] = [[1, 24.4]];
push_intervals['Q5o'] = [[1, 8.9]];

push_intervals['Q4s'] = [[1, 16.3]];
push_intervals['Q4o'] = [[1, 8.3]];

push_intervals['Q3s'] = [[1, 13.5]];
push_intervals['Q3o'] = [[1, 7.5]];

push_intervals['Q2s'] = [[1, 12.7]];
push_intervals['Q2o'] = [[1, 7]];


push_intervals['JTs'] = [[1, 50]];
push_intervals['JTo'] = [[1, 46]];

push_intervals['J9s'] = [[1, 50]];
push_intervals['J9o'] = [[1, 29.2]];

push_intervals['J8s'] = [[1, 49.8]];
push_intervals['J8o'] = [[1, 14.1]];

push_intervals['J7s'] = [[1, 32.3]];
push_intervals['J7o'] = [[1, 8.5]];

push_intervals['J6s'] = [[1, 18.6]];
push_intervals['J6o'] = [[1, 6.5]];

push_intervals['J5s'] = [[1, 16.2]];
push_intervals['J5o'] = [[1, 6]];

push_intervals['J4s'] = [[1, 13.5]];
push_intervals['J4o'] = [[1, 5.4]];

push_intervals['J3s'] = [[1, 10.6]];
push_intervals['J3o'] = [[1, 5]];

push_intervals['J2s'] = [[1, 8.8]];
push_intervals['J2o'] = [[1, 4.6]];


push_intervals['T9s'] = [[1, 50]];
push_intervals['T9o'] = [[1, 31.9]];

push_intervals['T8s'] = [[1, 50]];
push_intervals['T8o'] = [[1, 18.4]];

push_intervals['T7s'] = [[1, 35.6]];
push_intervals['T7o'] = [[1, 9.9]];

push_intervals['T6s'] = [[1, 24.7]];
push_intervals['T6o'] = [[1, 5.7]];

push_intervals['T5s'] = [[1, 11.9]];
push_intervals['T5o'] = [[1, 4.1]];

push_intervals['T4s'] = [[1, 10.5]];
push_intervals['T4o'] = [[1, 3.8]];

push_intervals['T3s'] = [[1, 7.7]];
push_intervals['T3o'] = [[1, 3.4]];

push_intervals['T2s'] = [[1, 6.5]];
push_intervals['T2o'] = [[1, 3]];


push_intervals['98s'] = [[1, 50]];
push_intervals['98o'] = [[1, 20.5]];

push_intervals['97s'] = [[1, 36.1]];
push_intervals['97o'] = [[1, 10.8]];

push_intervals['96s'] = [[1, 26.8]];
push_intervals['96o'] = [[1, 5.2]];

push_intervals['95s'] = [[1, 14.4]];
push_intervals['95o'] = [[1, 3.5]];

push_intervals['94s'] = [[1, 6.9]];
push_intervals['94o'] = [[1, 2.7]];

push_intervals['93s'] = [[1, 4.9]];
push_intervals['93o'] = [[1, 2.5]];

push_intervals['92s'] = [[1, 3.7]];
push_intervals['92o'] = [[1, 2.2]];


push_intervals['87s'] = [[1, 43.2]];
push_intervals['87o'] = [[1, 15.6]];

push_intervals['86s'] = [[1, 30.9]];
push_intervals['86o'] = [[1, 7.1]];

push_intervals['85s'] = [[1, 18.8]];
push_intervals['85o'] = [[1, 3]];

push_intervals['84s'] = [[1, 10.1]];
push_intervals['84o'] = [[1, 2.3]];

push_intervals['83s'] = [[1, 2.7]];
push_intervals['83o'] = [[1, 1.9]];

push_intervals['82s'] = [[1, 2.5]];
push_intervals['82o'] = [[1, 1.8]];


push_intervals['76s'] = [[1, 35.7]];
push_intervals['76o'] = [[1, 11.2]];

push_intervals['75s'] = [[1, 23.8]];
push_intervals['75o'] = [[1, 2.6]];

push_intervals['74s'] = [[1, 13.9]];
push_intervals['74o'] = [[1, 2.1]];

push_intervals['73s'] = [[1, 2.5]];
push_intervals['73o'] = [[1, 1.8]];

push_intervals['72s'] = [[1, 2.1]];
push_intervals['72o'] = [[1, 1.6]];


push_intervals['65s'] = [[1, 29.3]];
push_intervals['65o'] = [[1, 2.4]];

push_intervals['64s'] = [[1, 16.3]];
push_intervals['64o'] = [[1, 2]];

push_intervals['63s'] = [[1, 2.3], [5.1, 7.1]];
push_intervals['63o'] = [[1, 1.7]];

push_intervals['62s'] = [[1, 2]];
push_intervals['62o'] = [[1, 1.5]];


push_intervals['54s'] = [[1, 23.5]];
push_intervals['54o'] = [[1, 2.1]];

push_intervals['53s'] = [[1, 2.4], [4.1, 12.9]];
push_intervals['53o'] = [[1, 1.8]];

push_intervals['52s'] = [[1, 2]];
push_intervals['52o'] = [[1, 1.5]];


push_intervals['43s'] = [[1, 2.2], [4.8, 10]];
push_intervals['43o'] = [[1, 1.6]];

push_intervals['42s'] = [[1, 1.8]];
push_intervals['42o'] = [[1, 1.4]];


push_intervals['32s'] = [[1, 1.7]];
push_intervals['32o'] = [[1, 1.4]];



var call_interval = {};
call_interval['AA'] = 50;
call_interval['KK'] = 50;
call_interval['QQ'] = 50;
call_interval['JJ'] = 50;
call_interval['TT'] = 50;
call_interval['99'] = 50;
call_interval['88'] = 50;
call_interval['77'] = 50;
call_interval['66'] = 50;
call_interval['55'] = 42.6;
call_interval['44'] = 31.9;
call_interval['33'] = 22.4;
call_interval['22'] = 15.1;


call_interval['AKs'] = 50;
call_interval['AKo'] = 50;

call_interval['AQs'] = 50;
call_interval['AQo'] = 50;

call_interval['AJs'] = 50;
call_interval['AJo'] = 50;

call_interval['ATs'] = 50;
call_interval['ATo'] = 50;

call_interval['A9s'] = 47.3;
call_interval['A9o'] = 39.7;

call_interval['A8s'] = 40.7;
call_interval['A8o'] = 34.5;

call_interval['A7s'] = 35.6;
call_interval['A7o'] = 29.2;

call_interval['A6s'] = 30.9;
call_interval['A6o'] = 21.9;

call_interval['A5s'] = 30.1;
call_interval['A5o'] = 20.9;

call_interval['A4s'] = 25.6;
call_interval['A4o'] = 18.6;

call_interval['A3s'] = 24.7;
call_interval['A3o'] = 16.8;

call_interval['A2s'] = 23.2;
call_interval['A2o'] = 16;


call_interval['KQs'] = 50;
call_interval['KQo'] = 46;

call_interval['KJs'] = 44.9;
call_interval['KJo'] = 27.4;

call_interval['KTs'] = 31.9;
call_interval['KTo'] = 24.1;

call_interval['K9s'] = 24.2;
call_interval['K9o'] = 17.5;

call_interval['K8s'] = 17.8;
call_interval['K8o'] = 14.1;

call_interval['K7s'] = 15.3;
call_interval['K7o'] = 12.5;

call_interval['K6s'] = 14.4;
call_interval['K6o'] = 11.1;

call_interval['K5s'] = 13.3;
call_interval['K5o'] = 10.3;

call_interval['K4s'] = 12.2;
call_interval['K4o'] = 9.2;

call_interval['K3s'] = 11.4;
call_interval['K3o'] = 8.8;

call_interval['K2s'] = 10.8;
call_interval['K2o'] = 8.3;


call_interval['QJs'] = 29.1;
call_interval['QJo'] = 19.9;

call_interval['QTs'] = 24.3;
call_interval['QTo'] = 15.6;

call_interval['Q9s'] = 16.2;
call_interval['Q9o'] = 11.8;

call_interval['Q8s'] = 13;
call_interval['Q8o'] = 9.8;

call_interval['Q7s'] = 10.6;
call_interval['Q7o'] = 8;

call_interval['Q6s'] = 10;
call_interval['Q6o'] = 7.4;

call_interval['Q5s'] = 8.9;
call_interval['Q5o'] = 6.8;

call_interval['Q4s'] = 8.5;
call_interval['Q4o'] = 6.3;

call_interval['Q3s'] = 7.8;
call_interval['Q3o'] = 5.9;

call_interval['Q2s'] = 7.2;
call_interval['Q2o'] = 5.6;


call_interval['JTs'] = 18.4;
call_interval['JTo'] = 13.2;

call_interval['J9s'] = 13.5;
call_interval['J9o'] = 9.9;

call_interval['J8s'] = 10.7;
call_interval['J8o'] = 7.7;

call_interval['J7s'] = 8.8;
call_interval['J7o'] = 6.4;

call_interval['J6s'] = 7.1;
call_interval['J6o'] = 5.4;

call_interval['J5s'] = 6.9;
call_interval['J5o'] = 5.1;

call_interval['J4s'] = 6.2;
call_interval['J4o'] = 4.8;

call_interval['J3s'] = 5.8;
call_interval['J3o'] = 4.5;

call_interval['J2s'] = 5.6;
call_interval['J2o'] = 4.2


call_interval['T9s'] = 11.6;
call_interval['T9o'] = 8.5;

call_interval['T8s'] = 9.3;
call_interval['T8o'] = 6.7;

call_interval['T7s'] = 7.4;
call_interval['T7o'] = 5.5;

call_interval['T6s'] = 6.3;
call_interval['T6o'] = 4.7;

call_interval['T5s'] = 5.2;
call_interval['T5o'] = 4;

call_interval['T4s'] = 5.2;
call_interval['T4o'] = 3.8;

call_interval['T3s'] = 4.8;
call_interval['T3o'] = 3.6;

call_interval['T2s'] = 4.5;
call_interval['T2o'] = 3.5;


call_interval['98s'] = 8.3;
call_interval['98o'] = 6.1;

call_interval['97s'] = 7;
call_interval['97o'] = 5;

call_interval['96s'] = 5.8;
call_interval['96o'] = 4.2;

call_interval['95s'] = 5;
call_interval['95o'] = 3.7;

call_interval['94s'] = 4.3;
call_interval['94o'] = 3.3;

call_interval['93s'] = 4.1;
call_interval['93o'] = 3.1;

call_interval['92s'] = 3.9;
call_interval['92o'] = 3;


call_interval['87s'] = 6.5;
call_interval['87o'] = 4.7;

call_interval['86s'] = 5.6;
call_interval['86o'] = 4.1;

call_interval['85s'] = 4.8;
call_interval['85o'] = 3.6;

call_interval['84s'] = 4.1;
call_interval['84o'] = 3.2;

call_interval['83s'] = 3.6;
call_interval['83o'] = 2.9;

call_interval['82s'] = 3.5;
call_interval['82o'] = 2.8;


call_interval['76s'] = 5.4;
call_interval['76o'] = 4;

call_interval['75s'] = 4.8;
call_interval['75o'] = 3.6;

call_interval['74s'] = 4.1;
call_interval['74o'] = 3.2;

call_interval['73s'] = 3.6;
call_interval['73o'] = 2.9;

call_interval['72s'] = 3.3;
call_interval['72o'] = 2.6;


call_interval['65s'] = 4.9;
call_interval['65o'] = 3.7;

call_interval['64s'] = 4.3;
call_interval['64o'] = 3.3;

call_interval['63s'] = 3.8;
call_interval['63o'] = 3;

call_interval['62s'] = 3.3;
call_interval['62o'] = 2.7;


call_interval['54s'] = 4.6;
call_interval['54o'] = 3.5;

call_interval['53s'] = 4;
call_interval['53o'] = 3.1;

call_interval['52s'] = 3.6;
call_interval['52o'] = 2.8;


call_interval['43s'] = 3.8;
call_interval['43o'] = 3;

call_interval['42s'] = 3.4;
call_interval['42o'] = 2.7;


call_interval['32s'] = 3.3;
call_interval['32o'] = 2.6;

function is_good_push(hand, s){
    var intervals = push_intervals[hand];
    for(var i = 0; i < intervals.length; i++)
	if((intervals[i][0] <= s) & (s <= intervals[i][1]))
	    return true;
    return false;
}

function is_good_call(hand, s){
    if( s <= call_interval[hand])
	return true;
    return false;
}


$(document).ready(function(){
    build_table('push');
    build_table('call');

    var solve = function(){
	var blind = $('#blind').val();
	var stack = $('#stack').val();
	var s = stack/blind;
	if(s < 1) s = 1;
	if(s > 50) s = 50;

	var push_hands = 0;
	var call_hands = 0;

	$('#push td').each(function(i, e){
	    var hand = $(this).text();
	    if(is_good_push(hand, s)){
		$(this).addClass('highlighted');
		if(hand[hand.length - 1] === 's') push_hands += 4;
		else if(hand[hand.length - 1] === 'o') push_hands += 12;
		else push_hands += 6;
	    }
	    else $(this).removeClass('highlighted');
	});

	$('#call td').each(function(i, e){
	    var hand = $(this).text();
	    if(is_good_call(hand, s)){
		$(this).addClass('highlighted');
		if(hand[hand.length - 1] === 's') call_hands += 4;
		else if(hand[hand.length - 1] === 'o') call_hands += 12;
		else call_hands += 6;
	    }
	    else $(this).removeClass('highlighted');
	});

	$('#push caption').text('PUSH ' + (push_hands * 100 / 1326).toFixed(1) + '%');
	$('#call caption').text('CALL ' + (call_hands * 100 / 1326).toFixed(1) + '%');
	$('span').text('S = ' + s.toFixed(1));
    };

    solve();

    $('#blind').change(solve);
    $('#stack').change(solve);
});
