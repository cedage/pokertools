var equilator_data = {};

function get_equilator_data(){
    equilator_data = {};
    equilator_data['my_hand'] = $('#my_hand_input').val();
    equilator_data['my_range'] = $('#my_range_input').val();
    equilator_data['villain_range'] = $('#villain_range_input').val();
    equilator_data['board'] = $('#board_input').val();
}

function convert_card_name(name){
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

function convert_card_names(card_names_string){
    var result = '';
    var card_names_array = convert_string_to_card_names(card_names_string);
    for(var i = 0; i < card_names_array.length; i+= 1){
        result += convert_card_name(card_names_array[i]);
    }
    return result;
}

function convert_string_to_card_names(s){
    var result = [];
    for(var i = 0;i < s.length; i += 2){
        result.push(s[i] + s[i + 1])
    }
    return result
}

function convert_hand_name(name){
    var cards = convert_string_to_card_names(name);
    return convert_card_name(cards[0]) + convert_card_name(cards[1]);
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

    var plot_data = [];

    for(var i = 0; i < my_equities.length; i += 1){
        plot_data.push([i, my_equities[i]]);
    }


    var equity_line = { label: mean.toFixed(1) + ' &plusmn; ' + std.toFixed(1),
                      data: plot_data, color: 'blue'};

    var mean_line = {data: [[0, mean], [my_equities.length - 1, mean]], color: 'lightblue', shadowSize: 0, lines: {fill: true}}

    $.plot($('#placeholder'), [mean_line, equity_line], {yaxis: {min: -1, max: 101}});
}

function build_my_range_table(){
    var my_range = equilator_data['result']['my_range'];
    var tbody_inner_html = '';
    var hand;
    for(hand in my_range){
        if(my_range.hasOwnProperty(hand)){
            tbody_inner_html += '<tr>' + 
                '<td>' + convert_hand_name(hand) + '</td>' +
                '<td>' + my_range[hand]['mean'].toFixed(1) + '</td>' +
                '<td>' + my_range[hand]['std'].toFixed(1) + '</td>' +
                '</tr>';
        }
    }

    $('#my_range_table tbody').html(tbody_inner_html);
    $('#my_range_table').trigger('update');
    $('#my_range_table').trigger('sorton',[[[1,1]]]);
}

function build_villain_range_table(){
    var villain_range = equilator_data['result']['villain_range'];
    var my_equities = equilator_data['result']['my_hand']['villain_range'];
    var tbody_inner_html = '';
    var hand;
    for(hand in villain_range){
        tbody_inner_html += '<tr><td>' + convert_hand_name(hand) + '</td>' +
            '<td>' + villain_range[hand]['mean'].toFixed(1) + '</td>' +
            '<td>' + villain_range[hand]['std'].toFixed(1) + '</td>';

        if(my_equities.hasOwnProperty(hand)){
            var real_equity = 100 - my_equities[hand];
            tbody_inner_html += '<td>' + real_equity.toFixed(1) + '</td>' +
                '<td>' + (villain_range[hand]['mean'] - real_equity).toFixed(1) + '</td></tr>';
        }
        else{
            tbody_inner_html += '<td></td><td></td></tr>';
        }
    }

    $('#villain_range_table tbody').html(tbody_inner_html);
    $('#villain_range_table').trigger('update');
    $('#villain_range_table').trigger('sorton', [[[1,1]]]);
}

$(document).ready(function() {
    $('#my_range_table').tablesorter();
    $('#villain_range_table').tablesorter();

    $('#process_data_btn').click(function(){
        get_equilator_data();
        $.post('/process_equilator_data', equilator_data,
            function(result){
                equilator_data['result'] = result;
                plot_my_equity_distribution();
                build_my_range_table();
                build_villain_range_table();
            }
        );
    });

    $('#my_hand_input').keyup(function(event){
	var my_hand_string = $('#my_hand_input').val();

        my_hand_string = my_hand_string.replace(/a/g, 'A');
        my_hand_string = my_hand_string.replace(/k/g, 'K');
        my_hand_string = my_hand_string.replace(/q/g, 'Q');
        my_hand_string = my_hand_string.replace(/j/g, 'J');
        my_hand_string = my_hand_string.replace(/t/g, 'T');
        my_hand_string = my_hand_string.replace(/S/g, 's');
        my_hand_string = my_hand_string.replace(/C/g, 'c');
        my_hand_string = my_hand_string.replace(/D/g, 'd');
        my_hand_string = my_hand_string.replace(/H/g, 'h');
        my_hand_string = my_hand_string.replace(/O/g, 'o');

	$('#my_hand_input').val(my_hand_string);

	if(my_hand_string.match(/^([23456789TJQKA][scdh]){2,2}$/)){
            $('#my_hand_input').css('backgroundColor', 'white');
	}
	else $('#my_hand_input').css('backgroundColor', 'rgb(224,120,120)');

        $('#my_hand_label').html(convert_card_names($('#my_hand_input').val()));
    });

    $('#board_input').keyup(function(event){
        $('#board_label').html(convert_card_names($('#board_input').val()));
    });
});
