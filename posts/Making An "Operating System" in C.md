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
<br/>
C wasn't my problem, though. I had asked ChatGPT to make me a simple C template for a UEFI app, and also a simple makefile that would build it. I ran `make`, and was not really surprised by the results.
<br/>
There were a bunch of library errors, and I gave them to ChatGPT since I knew basically NOTHING about UEFI libraries. Little did I know, this would get much, MUCH worse.
<br/>
<br/>
*Cue Hall of the Mountain King...*
<br/>
<br/>

*8:00 PM*
<br/>
"Oh, it gave me some errors, I'll just give them to ChatGPT!"
<br/>
<br/>
*9:00 PM*
<br/>
"OKAY, THIS IS GETTING REALLY ANNOYING, CHATGPT IS JUST MAKING MORE PROBLEMS, SO I'M JUST GOING TO START OVER!"
<br/>
(I spun up a new instance of CGPT and had it redo it from scratch, and it gave me a different compilation method using gnu-efi instead.)
<br/>
<br/>
*10:00 PM*
<br/>
(ChatGPT still is giving me problematic code)
<br/>
"I'M SO TIRED OF THIS RIGHT NOW!!!"
<br/>
<br/>

Basically what happened was that it first gave me a makefile to compile it with, then it used edk2, which was A LOT of configuration that didn't end up working, and THEN it switched to gnu-efi, where I actually got a TINY bit of hope!
<br/>
After this whole three-hour saga of getting absolutely NOWHERE, I decided to go to bed.

<br/>
<br/>

### The Next Day

I kept contemplating whether I should continue or not, but I finally decided that I should, and that I would be REALLY proud of myself when I got it to work.
<br/>
I spun up yet ANOTHER instance of CGPT, this time on Windows. It told me the build process, and I got to the installation of Visual Studio when I realized that I should just keep using Linux, as it would be MUCH less trouble.
<br/>
<br/>

I kept googling how to do this, and I finally stumbled across a [blog post](https://www.baeldung.com/cs/uefi-bare-metal-program-development)! It was a post on how to make a simple text AND gui UEFI app, which was EXACTLY what I wanted! There was a link to the [GitHub](https://github.com/Baeldung/posts-resources/tree/main/cs-articles/bare-metal-program-with-uEFI-no-os-required) with examples, and I was EXTREMELY relieved.
<br/>
<br/>
I wrote one of the examples to a flash drive, spun it up in QEMU, and lo and behold, it worked!
<br/>
<br/>
From there, I just added a prompt and a couple more functions such as a very simple text editor and donut.c (kind of).
<br/>
<br/>
![IMG_0084](https://github.com/user-attachments/assets/6b94109d-6d8d-47f4-8b37-32d9debedf80)
<br/>
<br/>
I had to use Ventoy to boot the EFI on my Mac, which wasn't a problem.
<br/>
<br/>
<br/>
As of writing this, McTechOS is just a simple little console UEFI app, but I may build an actual full and small operating system out of it!
</br>
The code will be avalible on my GitHub sometime soon :3
