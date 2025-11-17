## The idea

A couple of days ago, I was scrolling on my YouTube homepage and I saw a video by Inkbox where he created a game in Assembly WITHOUT an operating system. [The Video](https://www.youtube.com/watch?v=ZFHnbozz7b4)
<br/>
<br/>
He did this by making a UEFI app that can be booted from almost any PC, which made the gears in my head start turning. I thought that this was REALLY cool, and that I should make an "operating system" (just a cool UEFI app that is like an operating system), so here it is!

<br/>
<br/>

## The pain I went through to get this to work

This took an UNNECESSARY amount of time to get working, mostly because I was very new to compiling C for UEFI. I already know a bit of C from Arduino programming, and I can also adapt the syntax and what I've learned from other coding languages to this.
<br/>
C wasn't my problem, though. I had asked ChatGPT to make me a simple C template for a UEFI app, and also a simple makefile that would build it. I ran
<br/>
