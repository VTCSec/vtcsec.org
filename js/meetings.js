/* XXX TODO: Maybe we also want a site-wide countdown timer thing? */

/* All local to your timezone. */
Date.prototype.toLocalISODate = function() {
  return this.getFullYear() + '-' + this.getMonth() + '-' + this.getDate();
}
Date.prototype.isToday = function() {
  return this.toLocalISODate() === (new Date()).toLocalISODate();
}
Date.prototype.isTodayOrLater = function() {
  return this.toLocalISODate() >= (new Date()).toLocalISODate();
};

window.Meetings = new (function() {
  this.iterate = function(callback) {
    var lists = document.getElementsByClassName('meeting-list');
    for (var i = 0; i < lists.length; i++)
      for (var j = 0; j < lists[i].children.length; j++)
        callback(lists[i].children[j], lists[i]);
  };

  /* Might be cleaner to just leave the date in the attribute... not sure. */
  this.extractDateAttributes = function() {
    this.iterate(function(meeting) {
      meeting.date = new Date(meeting.getAttribute('date'));
      meeting.removeAttribute('date');
    });
  };

  this.nextMeeting = function() {
    var closestMeeting;
    this.iterate(function(meeting) {
      if (meeting.date.isTodayOrLater() &&
          (closestMeeting === undefined ||
          meeting.date < closestMeeting.date)) {
        closestMeeting = meeting;
      }
    });
    return closestMeeting;
  };

  this.markToday = function() {
    /* XXX Ugly hacks! */
    this.iterate(function(meeting) {
      /* Find meeting entries we need to mark / unmark. */
      if (meeting.date.isToday() && !meeting.classList.contains('today'))
        meeting.classList.add('mark-today'); // meh
      else if (!meeting.date.isToday() && meeting.classList.contains('today'))
        meeting.classList.add('unmark-today');
    });

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
  };

  this.removePast = function() {
    this.iterate(function(meeting, list) {
      if (!meeting.date.isTodayOrLater() &&
          list.classList.contains('future-only')) {
        meeting.remove();
        console.log('Removing old meeting on ' +
          meeting.date.toDateString() + ' from list.');
      }
    });
  };

  this.update = function() {
    this.removePast();
    this.markToday();
    /* XXX Maybe have this schedule itself again when we expect to
     * have changes to make? That'd be better than just arbitrarily
     * every hour. */
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  Meetings.extractDateAttributes();
  Meetings.update();
  setInterval(Meetings.update, 1000 * 60 * 60); // Every hour.
});
