---
what: Dr. Raymond on Reversing, Part 1
---

This week Dr. Raymond will be giving a workshop on reverse engineering. Details TBA closer to the meeting date.

We hope to see you there!

====
marcusw's python solution to Vortex 0 ("homework" challenge from last week's meeting)
====

    from socket import *
    port struct
    
    s = socket(AF_INET, SOCK_STREAM)
    s.connect(("vortex.labs.overthewire.org", 5842))
    
    num = sum([struct.unpack("<I", s.recv(4))[0] for x in range(4)])
    
    s.send(struct.pack("<I", num%(2**32)))
    print(s.recv(1024).decode())

If you have any questions regarding this solution, or how python works, feel free to contact marcusw or one of the other officers on IRC/slack!
