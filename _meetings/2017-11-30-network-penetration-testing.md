---
what: "Network Penetration Testing"
where: "TORG 1040"
when: "18:30"
date: 2017-11-29 18:30:00
---

At this meeting, we will be preforming a workshop on network penetration testing at 6:30pm in TORG 1040. A very brief overview of pentesting and then we'll work together on a small hands-on challenge I created. Since we'll mostly be focusing on hands-on stuff, please complete the steps below before arriving on Thursday:

1. First, download this VM image: <a href="https://drive.google.com/file/d/1AjvHlhITNnCtIY4KGSRLq2mUbPl6Zoot/view?usp=sharing" target="_blank">VM image</a>

2. Use VirtualBox's "import appliance" feature to import the VM. we have only tested this image with VirtualBox, so it may not work well with other virtualization platforms.

3. Set the VirtualBox VM's network adapter to "host-only." The VM should get an IP address from DHCP, but if you want to be sure that it'll work, make sure the host-only adapter is set to use the subnet 192.168.56.0/24 (this should be the default for the first host-only adapter, aka vboxnet0). If you don't have a host-only network yet, you should be able to create one with the default settings and it'll work fine with this VM. (If you aren't sure how to create a host-only network, this documentation should help you: <a href="https://www.virtualbox.org/manual/ch06.html#network_hostonly" target="_blank">documentation</a> 

4. Make sure you also have a Kali Linux VM created and that you can place it on the host-only network as well.

That's it! We'll cover everything else at the meeting. If you have trouble with this, we can try to help you troubleshoot issues before the meeting on Thursday. However, since the exercise will probably take most of our time, please try to have as much of this completed as possible beforehand.
