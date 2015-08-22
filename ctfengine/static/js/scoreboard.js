var scoreSnd = new Audio("static/sounds/score.wav");

function flash(msg) {
    $('#flash').text(msg);
    $('#flash').fadeIn('slow');
    $('#flash').click(function(){
        $('#flash').fadeOut('slow');
    });

    window.setTimeout(function(){
        $('#flash').fadeOut('slow');
        $('#flash').unbind();
    }, 5000);
}

function loadScores(scoreurl, breakdownurl, highlights) {
    $.ajax({
        'url': scoreurl,
        'dataType': 'json',
        'beakdownurl': breakdownurl,
        'highlights': highlights,
    }).done(function(data){
        var scores = [];

        // hack to sort scores
        for(k in data['scores'])
        {
            scores.push(data['scores'][k]);
        }
        scores.sort(function(a, b){
            return a[2] < b[2] ? 1 : -1;
        });

        $('#scoreboard tr').remove();
        for(i in scores)
        {
            tr = document.createElement('tr');
            $(tr).attr('id', 'scoreboard_handle_' + scores[i][0]);

            handle = document.createElement('a');
            $(handle).attr('href', breakdownurl + scores[i][0]);
            $(handle).text(scores[i][1]);

            td = document.createElement('td');
            $(td).append(handle);
            $(tr).append(td);

            td = document.createElement('td');
            $(td).text(scores[i][2]);
            $(tr).append(td);

            $('#scoreboard').append(tr);
        }

        $('#scoreboard_total').text("Total points: " + data['total_points']);

        for(h in highlights) {
            $('#scoreboard_handle_' + highlights[h]).addClass('recent');
        }
    });
}

function loadMachines(scoreurl) {
    $.ajax({
        'url': scoreurl,
        'dataType': 'json',
    }).done(function(data){
        var machines = data['machines'];

        $('#machine_list tr').remove();
        for(i in machines)
        {
            tr = document.createElement('tr');

            td = document.createElement('td');
            $(td).text(machines[i]['hostname']);
            $(tr).append(td);

            td = document.createElement('td');

            if(machines[i]['dirty'] == true) {
                $(tr).addClass('dirty');
                $(td).text("Needs reset");
            }
            else {
                $(td).text("Clean");
            }
            $(tr).append(td);

            $('#machine_list').append(tr);
        }
    });
}

function liveScoreboard(liveurl, scoreurl, breakdownurl) {
    var source = new EventSource(liveurl);
    source.onmessage = function(ev) {
        msg = ev.data.split(': ');
        if(msg[0] == 'score') {
            scoreSnd.play();
            scoreSnd.currentTime = 0;

            loadScores(scoreurl, breakdownurl, [msg[1]]);
        }
        else if(msg[0] == 'flash') {
            flash(msg[1]);
        }
    };
}

function liveDashboard(liveurl, scoreurl, breakdownurl) {
    var source = new EventSource(liveurl);
    source.onmessage = function(ev) {
        msg = ev.data.split(': ');
        if(msg[0] == 'score') {
            scoreSnd.play();
            scoreSnd.currentTime = 0;

            loadScores(scoreurl, breakdownurl, [msg[1]]);
        }
        else if(msg[0] == 'flash') {
            flash(msg[1]);
        }

        if(msg[2] == 'flag') {
            loadMachines(scoreurl);
        }
    };
}
