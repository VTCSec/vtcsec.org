document.addEventListener('DOMContentLoaded', function() {
  function process(meetings, removePast) {
    var today = (new Date()).toISOString().split('T')[0];
    for (var i = 0; i < meetings.length; i++) {
      var meeting = meetings[i];
      var rawDate = new Date(meeting.getAttribute('date'));
      var justDay = rawDate.toISOString().split('T')[0];

      /* Filter old meetings out of lists. */
      if (justDay < today && removePast) {
        console.log('Removing old meeting on ' + justDay + ' from list.');
        meeting.remove();
        continue;
      }

      /* Maybe a cleaner way to do this, but the way I had before was uglier
       * with hardcoded assumptions about the DOM structure. */

      /* Find meeting entries we need to mark / unmark. */
      if (justDay === today && !meeting.classList.contains('today'))
        meeting.classList.add('mark-today'); // meh
      else if (justDay !== today && meeting.classList.contains('today'))
        meeting.classList.add('unmark-today');
    }

    /* Remove old today markers. */
    var todays = document.querySelectorAll('.unmark-today .today-text');
    for (var i = 0; i < todays.length; i++)
      todays[i].remove();
    var to_unmark = document.querySelectorAll('.unmark-today');
    for (var i = 0; i < to_unmark.length; i++) {
      to_unmark[i].classList.remove('unmark-today');
      to_unmark[i].classList.remove('today');
    }

    /* Add new today markers. */
    var marked = document.querySelectorAll('.mark-today');
    for (var i = 0; i < marked.length; i++)
      marked[i].classList.add('today');
    var to_insert = document.querySelectorAll('.mark-today a');
    for (var i = 0; i < to_insert.length; i++) {
      var span = document.createElement('span');
      span.classList.add('today-text');
      span.textContent = ' (Today!)';
      to_insert[i].appendChild(span);
    }
    for (var i = 0; i < marked.length; i++)
      marked[i].classList.remove('mark-today');

    /* XXX This whole manipulation via temporary classes is rather hacky. */

    /* XXX TODO: Maybe we also want a site-wide countdown timer thing? */
  }
  function processAll() {
    var lists = document.getElementsByClassName('meeting-list');
    for (var i = 0; i < lists.length; i++) {
      process(lists[i].children, lists[i].classList.contains('future-only'));
    }
  }
  processAll();
  setInterval(processAll, 1000 * 60 * 60); // Every hour.
});
