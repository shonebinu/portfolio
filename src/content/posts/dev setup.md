---
title: "My Dev Setup"
pubDate: 2024-07-15 #Y-M-D
description: "It's always interesting to see someone else's Dev setup while surfing the internet. That's why I've decided to share my typical Dev setup here!"
author: "Shone Binu"
image: { url: "/dev_setup.webp", alt: "Photo of my desk" }
---

## OS
I've been using GNU/Linux-based systems for the past five years. I dislike Windows for various reasons, including its annoying forced updates, auto-restarts, and other nonsense that I can't turn off.

I used to use Windows when I first started, but I had mobile internet at the time, and Windows updates were consuming all my data. This was one of the main reasons I switched, but it wasn't the only one.

Even before that, I had exposure to Ubuntu-based systems through my school labs and participated in some events where they taught programming with Ubuntu (good old school days). I had Ubuntu dual boot on my old, crappy PC at home as well. However, it was an old version, and I didn't use it much.

If I remember correctly, I always had an affinity for open-source software, though it took some time to transition from Windows to a Linux-based OS on my newly bought laptop. I was quite afraid of losing my only machine, which I bought with my hard-earned money.

But when I bought my own desktop PC, the first thing I did was install Ubuntu. Since then, I've gone through a lot of distros. I don't even remember all of them. I've always been a distro hopper. It went through Ubuntu, Fedora, Arch, Debian, Mint, Kubuntu, Pop!_OS, Void, Solus, Peppermint, etc. But right now, on both my laptop and my PC, I use Debian Linux. It's the perfect one for me. It never breaks, and nowadays, I prefer slow-updating systems where the packages don't break. For development, when I need the latest packages, I use the language package repository or Nix packages since Debian supports Nix.

## Text Editor
Don't fret. I don't use NeoVim. I just can't seem to find my way around its plugin configuration files. It always throws me off, and I don't want to spend my entire life tweaking it.

But I like Vim motions. I don't know when I learned it, but since I've been using Linux-based distributions, I always had some experience with Vim motions, and I am attracted to it.

I tried installing Vim/NeoVim plugins in my VS Code setup and IntelliJ setup, but none of them worked perfectly for me. Those plugins felt like third-rate citizens. So I hunted for text editors and finally found one: Helix! It's a modal-based, Rust-based, terminal-based text editor inspired by NeoVim. Even though its motions are slightly different from Vim, I prefer this. It's easy to customize, and it's so easy to configure LSP and formatters in this text editor. With the power of Nix packages, I just install the LSP/formatter and link it in my editor configuration. So, I don't even have to find the package name for LSP/formatter on each system. I just have to install Nix on the respective system, and it works perfectly.

Though this isn't perfect either. If there isn't an LSP/formatter wrapper for the needed language, then it becomes hard. But at the same time, it's easy to extend this as well, since we can incorporate command line tools and scripts into this text editor. I've extended my Helix system with some terminal scripts on my own.

I haven't mastered the motions of Helix fully yet, but I'm trying and I hope this text editor will become one of my precious companions.

I've heard that there's a new text editor on the block called Zed, which incorporates Vim motions natively. Maybe if I get tired of Helix, I'll jump over to that. Since it seems to be getting more community attention, I think its development will be faster.

## Terminal
Throughout the years, I've used Alacritty, GNOME Terminal, Kitty, Foot, and others. But what I use now is something called WezTerm, a Rust-based, highly extensible terminal.

I use this since it works well in Wayland and has many good inbuilt features, including tabs. But it is somewhat slow compared to minimal terminals like Foot and Alacritty.

I use this terminal to take advantage of its tabbing system since I don't want to use something like Tmux with my Helix setup. Most of the time, I have two tabs in my terminal: one with the server running and the other with Helix where I write my code.

## Desktop Environment/Window Manager
Well, I've used almost all of the available ones in Linux. As of now, I use Sway WM on my desktop and KDE on my laptop.

I primarily use Sway because my PC has two monitors, and it's so easy to maneuver around two monitors with a window manager rather than a traditional desktop environment. I had some addiction to r/unixporn when I started, but I don't now and I just want to get my work done. Since I've been accustomed to Sway for some years, I can easily move across multiple virtual desktops and it's quite easy for me to get my work done.

On my laptop, I use KDE because whenever I use a window manager on my laptop, the battery seems to drain fast. I think it's maybe because of the lack of other utilities and optimizations in a minimal window manager, and it also feels somewhat awkward to hold Ctrl, Alt, and Super keys on a laptop. Most of the time, I find it hard to reach them since there isn't any bump for those keys.

Even though that is the case, my favorite DE is Cinnamon. It's perfect. It has ample customizations but at the same time, it never crashes for me. But I couldn't use it on my laptop since my laptop has a 2K display and I need Wayland for fractional display scaling. On top of that, KDE is the only DE from my experience that supports fractional scaling without the blur. Please, Linux community, instead of focusing on wasteful debates, solve real-world problems like this.

## Language That I Code In
I code in the language that my college syllabus goes through, but outside of it, I primarily focus on JavaScript now because I've been doing The Odin Project as a side coursework on my own. (Check it out, it's a great resource to learn development).

## Package Managers
I use Debian, so apt usually, though I also use AppImages, Flatpak, and rarely Snaps.
For terminal apps related to my dev workflow, I use Nix packages since it's the best.
For JavaScript/Node development, I use npm.

## Conclusion
Yeeeh! That's about it! Hope you liked it!

If you want to check out my dev configurations, here's the link: https://github.com/shonebinu/.dev-config.

Though it also contains some additional configurations for my daily journal and stuff like that. Do keep that in mind.
