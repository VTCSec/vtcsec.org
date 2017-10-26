---
layout: default
---


Hacking a Coffee Pot
====================

![Coffee pot](/images/coffeepot/coffeepot.jpg)

We are working on a security analysis for a WiFi enabled
and smart phone controlled Coffee Pot by Mr. Coffee.

We are doing this because we want to get hands on experience
of doing network analysis, reverse engineering, and penetration testing.

Right now we are getting network captures of the device. Specifically,
we will record all traffic during the initial set up of the device and
during it's normal operation.  Traffic will be recorded in pcap's and in
an HTTP proxy.

After all of the network activity has been sufficiently captured, then
the analysis can take many different routes.  We will try the following:

* Grab an update over the wire.
* Reverse engineer the binary to try to find privileged information.
* Identify identifiers and API's and try spoofing them for the coffee pot and cloud service
* Fuzz inputs to coffee pot
* Reverse engineer smart phone app
* Physically take apart the coffee pot to identify all HW parts and scope the possibility of dumping the firmware or reprogramming it.

How to get involved
===================
If you would like to help out in this endeavor, then shoot an email to `conorpp at vt dot edu`.
Participation can be suggesting ideas, looking at some of the network captures, trying to reverse
engineer some of the firmware versions of the coffee pot, or beyond.

Network Capture
===============

A USB WiFi card, similar to an ALFA, will be used to set up a network.  All traffic will be
logged with tcpdump or Wireshark.  HTTP traffic is commonly used so it will be forwarded through
a HTTP proxy to get more detailed logs.


Check out our [github repo](https://github.com/vtcsec/coffeepot) to see up to date work.
A USB WiFi card, similar to an ALFA, will be used to set up a network.
