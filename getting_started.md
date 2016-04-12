---
layout: page
title: Getting Started
permalink: /resources/getting-started.html
edit_link: true
---

If you're on this page I'm going to assume that you are new to the Cyber Security Club.
Welcome, we're glad to have you.
This page is intended to help you start participating in the club.
We host weekly meetings that offer students the opportunity to learn many security topics that are never taught in classes.

## What do I have to know to join the club?
*Nothing.*
We have no formal prerequisites and have members from a number of different backgrounds including computer science, electrical and computer engineering, mathematics, philosophy and physics.

*That being said.*
More important than what knowledge you bring to your first meeting is your willingness to learn.
As is the case in most computer-related disciplines, it's not about how much you know, it's about how quickly you can learn.
The more you do to independently educate yourself, the more proficient you will become. 

## What do I have to do to join the club?
Join our mailing list to find out about our weekly IRL meetings. VTCSec members and officers discuss security topics at all hours using the [IRC][irc] channel. While VTCSec has no member list because we respect your privacy, we consider anyone who hangs out on irc or comes to meetings regularly a member. All students and other interested parties are welcome. 

## What topics are involved in cyber security?
This is a tough question.
Cyber security is an extraordinarily broad field.
Read [Bruce Schneier's][schneier] commentary on the discipline. Read all of it, but pay particular attention to his commentary on the security mindset. If you can't think like an attacker, you are going to have a hard time building systems that are robust against attack.

## Why study offensive security? What is a CTF?
I can't say it any better than Trail of Bits did [here][ctffg].

## Where to start learning?
One of the best ways to learn any new skill is to collaborate with others. 
To this effect, we host an [IRC channel][irc] for club members to discuss what they are working on or trying to learn. Most club members connect to irc using a [shell server][shells] which hosts an [always][screen]-[on][tmux] [terminal-based IRC client][weechat]. We recommend that new members do the same, because setting up such a system is an effective introduction to a unix shell environment, which is essential for security research.

Competency in programming is extremely helpful.
Knowing the [C programming language][C], [Python][Py], and x86 assembly will help you to understand code that often shows up on screen at meetings.

Having working knowledge of basic networking concepts is very important for most attacks, and knowledge of systems such as TCP/IP and HTTP never hurts. Read 'Request for Comments' such as the ones for [TCP][rfc793], [UDP][rfc768], and [IP][rfc791].

These are things that are impossible to teach in a single meeting, but there are many tutorials and explanations of these topics on the Internet that you will want to read to gain background knowledge.

> Theory without practice is futile. Practice without theory is fatal.

The only way to really learn security is to not only read but to do.

Learn the skills needed to complete a few introductory wargames and you will have a much better understanding of what is going on at club meetings.
I highly recommend you complete [Bandit][bandit] and then work on either [Natas][natas] or [Narnia][narnia].
If you are particulary interested in exploitation, [Io][smash] is also quite good.
There are also other wargames linked on the [Resources][rec] page.

## When you have questions
First, [Google][goog] it.
We'd like to foster a culture of self-driven learning.

If you don't know what you are looking for, try our [Resources][rec] page.

You are always welcome to ask us questions on [IRC][irc].

[ctffg]: https://trailofbits.github.io/ctf/
[bandit]: http://overthewire.org/wargames/bandit/
[natas]: http://overthewire.org/wargames/natas/
[narnia]: http://overthewire.org/wargames/narnia/
[smash]: http://io.smashthestack.org/
[rec]: http://vtcsec.org/resources/
[rfc793]: https://tools.ietf.org/html/rfc793
[rfc768]: https://www.ietf.org/rfc/rfc768.txt
[rfc791]: https://tools.ietf.org/html/rfc791
[schneier]: https://www.schneier.com/blog/archives/2012/07/how_to_become_a_1.html
[C]: http://c.learncodethehardway.org/book/
[Py]: http://learnpythonthehardway.org/book/
[irc]: https://webchat.oftc.net/?channels=vtcsec
[goog]: https://www.google.com
[shells]: https://vtluug.org/wiki/Shell_account_tutorial
[weechat]: https://weechat.org/
[screen]: https://www.gnu.org/software/screen/
[tmux]: https://tmux.github.io/
