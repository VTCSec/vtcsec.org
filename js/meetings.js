document.addEventListener('DOMContentLoaded', function() {
  /* Filter old meetings out of lists. */
  function process(meetings, removePast) {
    var today = (new Date()).toISOString().split('T')[0];
    for (var i = 0; i < meetings.length; i++) {
      var rawDate = new Date(meetings[i].getAttribute('date'));
      var justDay = rawDate.toISOString().split('T')[0];
      if (justDay < today && removePast) {
        console.log('Removing old meeting on ' + justDay + ' from list.');
        meetings[i].remove();
      }
      if (justDay == today) {
        /* XXX TODO: Mark this visually somehow as being today. */
        /* XXX TODO: Maybe we also want a site-wide countdown timer thing? */
      }
    }
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
