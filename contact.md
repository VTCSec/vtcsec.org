---
layout: page
title: Contact
permalink: /contact/
---

Please use [email][officers@] as your first method of contact at the address below.

## Current Officers
{% for officer in site.data.officers %}
  - {{ officer.position }}: {{ officer.name }}
{% endfor %}

## Email
[officers@vtcsec.org][officers@]

## IRC
[#vtcsec][webchat] on [OFTC][oftc]

## Google Group
[cybersecurity-g@vt.edu][google group]

[webchat]: https://webchat.oftc.net/?channels=vtcsec
[oftc]: http://www.oftc.net/
[officers@]: mailto:officers@vtcsec.org
[google group]: https://groups.google.com/a/vt.edu/forum/#!forum/cybersecurity-g
