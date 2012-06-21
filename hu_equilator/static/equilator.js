var equilator_data = {};

function get_equilator_data(){
    equilator_data = {};
    equilator_data['my_hand'] = $('#my_hand_input').val();
    equilator_data['my_range'] = $('#my_range_input').val();
    equilator_data['villain_range'] = $('#villain_range_input').val();
    equilator_data['board'] = $('#board_input').val();
}

function convert_card_name_to_html(name){
    var rank = name[0];
    var suit = name[1];

    var result = '';

    switch(suit){
        case 's':
            result = '<span class="spades">' + rank + '</span>';
            break;
        case 'c':
            result = '<span class="clubs">' + rank + '</span>';
            break;
        case 'd':
            result = '<span class="diamonds">' + rank + '</span>';
            break;
        case 'h':
            result = '<span class="hearts">' + rank + '</span>';
            break;
    } 
    return result;
}

function convert_card_names_string_to_html(card_names_string){
    var card_names_array = [];

    for(var i = 0; i < card_names_string.length; i += 2){
        card_names_array.push(card_names_string[i] + card_names_string[i+1]);
    }

    var result = '';

    for(var i = 0; i < card_names_array.length; i += 1){
        result += convert_card_name_to_html(card_names_array[i]);
    }
    return result;
}

function plot_my_equity_distribution(){
    var mean = equilator_data['result']['my_hand']['mean'];
    var std = equilator_data['result']['my_hand']['std'];
    var my_equities = [];
    var villain_range = equilator_data['result']['my_hand']['villain_range'];
    var hand;
    for(hand in villain_range){
        if(villain_range.hasOwnProperty(hand)){
            my_equities.push(villain_range[hand]);
        }
    }
    my_equities.sort(function(a, b){ return a - b;});

    var graph_dots = [];
    for(var i = 0; i < my_equities.length; i += 1){
        graph_dots.push([i, my_equities[i]]);
    }

    var equity_line = { label: mean.toFixed(1) + ' &plusmn; ' + std.toFixed(1),
                        data: graph_dots, color: 'blue'};

    var mean_line = {data: [[0, mean], [my_equities.length - 1, mean]],
	             color: 'lightblue',
		     shadowSize: 0,
		     lines: {fill: true}};

    $.plot($('#equity_graph'), [mean_line, equity_line], {yaxis: {min: -1, max: 101}});
}

function build_my_range_table(){
    var my_range = equilator_data['result']['my_range'];
    var tbody_inner_html = '';
    var hand;
    var num_of_hands = 0;
    for(hand in my_range){
        if(my_range.hasOwnProperty(hand)){
            tbody_inner_html += '<tr>' + 
                '<td>' + convert_card_names_string_to_html(hand) + '</td>' +
                '<td>' + my_range[hand]['mean'].toFixed(1) + '</td>' +
                '<td>' + my_range[hand]['std'].toFixed(1) + '</td>' +
                '</tr>';
	    num_of_hands += 1;
        }
    }

    $('#my_range_table caption').text('My Range: ' + num_of_hands + ' hands');
    $('#my_range_table tbody').html(tbody_inner_html);
    $('#my_range_table').trigger('update');
    $('#my_range_table').trigger('sorton',[[[1,1]]]);
}

function build_villain_range_table(){
    var villain_range = equilator_data['result']['villain_range'];
    var my_equities = equilator_data['result']['my_hand']['villain_range'];
    var tbody_inner_html = '';
    var hand;
    var num_of_hands = 0;

    for(hand in villain_range){
	if(my_equities.hasOwnProperty(hand)){
            num_of_hands += 1;

            tbody_inner_html += '<tr>' +
		'<td>' + convert_card_names_string_to_html(hand) + '</td>' +
                '<td>' + villain_range[hand]['mean'].toFixed(1) + '</td>' +
                '<td>' + villain_range[hand]['std'].toFixed(1) + '</td>';

            var real_equity = 100 - my_equities[hand];
	    var difference = villain_range[hand]['mean'] - real_equity;

            tbody_inner_html += '<td>' + real_equity.toFixed(1) + '</td>' +
                                '<td>' + difference.toFixed(1) + '</td></tr>';
	}
    }

    $('#villain_range_table caption').text("Villain's Range " + num_of_hands + ' hands');
    $('#villain_range_table tbody').html(tbody_inner_html);
    $('#villain_range_table').trigger('update');
    $('#villain_range_table').trigger('sorton', [[[1,1]]]);
}

$(document).ready(function() {
    $('#my_range_table').tablesorter({headers: {0: {sorter: false},
                                                1: {sorter: 'digit'},
                                                2: {sorter: 'digit'}}});
    $('#my_range_table').hide();
    $('#villain_range_table').tablesorter({headers: {0: {sorter: false},
	                                             1: {sorter: 'digit'},
                                                     2: {sorter: 'digit'},
                                                     3: {sorter: 'digit'},
                                                     4: {sorter: 'digit'}}});
    $('#villain_range_table').hide();

    $('#evaluate_btn').click(function(){
        get_equilator_data();
        $.post('/process_equilator_data', equilator_data,
            function(result){
                equilator_data['result'] = result;
                plot_my_equity_distribution();
                build_my_range_table();
                build_villain_range_table();
		$('#my_range_table').show();
		$('#villain_range_table').show();
		$('#equity_graph_wrapper p').show();
            }
        );
    });

    $('#get_data_from_pe_btn').click(function(){
        $.post('get_data_from_pe', {}, function(data){
            $('#my_hand_input').val(data['my_hand']);
            $('#my_hand_label').html(convert_card_names_string_to_html(data['my_hand']));
            $('#my_range_input').val(data['my_range']);
            $('#villain_range_input').val(data['villain_range']);
            $('#board_input').val(data['board']);
            $('#board_label').html(convert_card_names_string_to_html(data['board']));
	});
    });
});
