---
layout: page
title: Meeting Archives
permalink: /meetings/
---

<ul class="post-list meeting-list">
  {% for meeting in site.meetings reversed %}
  {% include meeting-data.html %}
  <li date="{{ date_iso_8601 }}">
    <h2>
      <a href="{{ meeting.url }}">{{ meeting.what }}</a>
    </h2>
    <span class="post-meta">{% include meeting-fmt.html %}</span>
  </li>
  {% endfor %}
</ul>
