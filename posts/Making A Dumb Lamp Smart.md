*Disclaimer: I am not the best at writing blogs where I describe what I do/did step by step, so there are a TON of inappropriate shifts in verb tense in here lol*
___
<br>

[The video that this writeup follows](https://youtube.com/watch?v=5JHK97y1LY8)

[](previewstart)
Lately, I've really been getting into making a cool smart home with Homeassistant. I've been taking inspiration from The Stock Pot's videos, and actually recently made a cool wall-mounted dashboard!
<br>I've been itching to add cool things to my smart home, so when I saw a cheap moon lamp that I had lying around, I thought, "hey, it would be really cool if I could make that smart!" So I did... lol
[](previewend)

<br>

### Dissasembling The Lamp

The first thing I did to the lamp was (obviously) take the lamp apart. It was very simple, just a little round insert with LEDs and a battery compartment.

![Lamp Insert](/img/blog/lamp1.png)

My original plan had been to hard-wire an ESP32 to the IR reciever input on the LED board and then send codes, but the IR circuit didn't want to work for some reason.
<br>The lamp did have a button that cycles through all the modes and colors though, so I decided to use that.

<br>

### Wiring Everything Up

I decided to put a transistor between the two pads of the button so that I could feed a signal from a pin on the ESP32 to press it.

![Transistor Button](/img/blog/lamp2.png)

I would make the ESP32 "press" the button a specific amount of times to get to a specific color/mode. But for this to work, I needed to painstakingly record every mode on the lamp, along with the number of button presses they are from the "off" mode (what the lamp starts on).
<br>

Once I had finished soldering the transistor on, I soldered the ESP32 to the transistor and light power terminals. I was using an ESP32-WROVER on an Elegoo cam-v1.5 board from their smart car kit, so I was really only able to use TX0, which wasn't a huge problem.

![ESP32 Wiring](/img/blog/lamp3.png)

I did a bit of a sloppy job adding the ESP32 to the structure, as I just used hot glue to keep it in since it realistically wouldn't be visible during normal use.

<br>

### Connecting It To Homeassistant

I had ChatGPT write me some very simple ESPHome YAML because I was very new to it. I realized that it's actually pretty easy and does support c++, which was what I was wondering about, so I'll be writing my own YAML from now on!
<br>
I tried to set a delay of only a couple ms between button clicks (30-50ms), but that didn't work. Turns out a cheap light board isn't powerful enough to process high-speed input... who woulda' thought? I went with about 130ms between button clicks. While this IS somewhat slow and not as seamless, it still meets my initial goal of being able to control it remotely from Homeassistant and include it in my automations.

<br>

### Conclusion

All in all, I'm pretty happy with how the lamp turned out and how I can now automate it with Homeassistant. I'm still a little disappointed that I couldn't make it more seamless by using the IR circuit to directly change it, but I'm still pretty proud of the job I did! 
<br>
Well, that's all I have for you today! I hope to catch you in my next article or video! :3