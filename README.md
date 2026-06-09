# 🧠⚡ Tensura Anime Bot

> “Analysis Complete. Great Sage is now online.”

A powerful WhatsApp bot inspired by Rimuru Tempest and the Great Sage system from *That Time I Got Reincarnated as a Slime (Tensura)*.

It is built with Node.js and Baileys and designed as a full **anime AI + group management + RPG + economy system**.

---

# 🌟 Features

## 🧠 Great Sage AI System
- AI chat mode
- Context memory
- Smart analysis responses
- Strategy suggestions

```text
!sage <question>
!chat <message>
!analyze <topic>
!strategy <topic>
!explain <topic>
```

---

## 🎌 Anime System
- Anime search
- Manga lookup
- Character info
- Recommendations
- Quotes & facts

```text
!anime <name>
!manga <name>
!character <name>
!waifu
!husbando
!animequote
!animefact
!recommend
!airing
```

---

## 👥 Group Management System
- Tag all members
- Admin controls
- Group info tools
- Moderation commands

```text
!tagall
!hidetag
!kick
!promote
!demote
!rules
!groupinfo
```

---

## 🛡️ Security System
- Anti-link protection
- Anti-spam system
- Anti-flood protection
- Group lock system

```text
!antilink on/off
!antispam on/off
!antiflood on/off
!lockgroup
!unlockgroup
```

---

## 💰 Economy System (Tempest Coins)
- Daily rewards
- Wallet system
- Shop system
- Trading system
- Leaderboards

```text
!daily
!balance
!wallet
!shop
!buy
!sell
!leaderboard
```

---

## 📈 RPG Leveling System
- XP system
- Level system
- Rank system
- Tensura evolution forms

```text
!rank
!level
!xp
```

### ⚡ Evolution Path
```text
Slime → High Slime → Demon Slime → Demon Lord → True Dragon
```

---

## 😴 AFK System
- Set AFK status
- Auto-reply when mentioned
- AFK reason tracking

```text
!afk <reason>
```

---

## 🎮 Games System
- Anime quiz
- Trivia
- Guess anime
- Mini-games

```text
!quiz
!animequiz
!guessanime
!tictactoe
!riddle
```

---

## 🎨 Sticker & Media System
- Sticker creation
- Text-to-sticker
- Emoji tools

```text
!sticker
!take
!ttp <text>
!attp <text>
!emojimix
```

---

## 🔎 Search System
- Google search
- Wikipedia
- Image search
- News updates

```text
!google <query>
!wiki <query>
!image <query>
!news <topic>
```

---

## 🛠️ Utility Commands
- Weather info
- Calculator
- QR generator
- Time tools

```text
!ping
!menu
!weather <city>
!time <country>
!calc <equation>
!qr <text>
```

---

## 👑 Owner Commands
- Broadcast system
- Bot restart
- Stats
- System control

```text
!broadcast <message>
!restart
!shutdown
!stats
!backup
!join <group-link>
!leave
```

---

# 🏰 Tempest Nation System

Users evolve based on activity and XP:

```text
Citizen
Adventurer
Knight
Commander
General
Demon Lord
True Dragon
```

---

# 📁 Project Structure

```text
tensura-anime-bot/
├── ai/
│   ├── greatSageCore.js
├── commands/
├── core/
├── database/
├── system/
├── session/
├── media/
├── index.js
├── config.js
├── package.json
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 📦 Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/tensura-anime-bot.git
cd tensura-anime-bot
```

## 📥 Install Dependencies
```bash
npm install
```

## 🚀 Run Bot
```bash
node index.js
```

---

# 📱 Termux Setup

```bash
pkg update && pkg upgrade -y
pkg install nodejs git nano -y

git clone https://github.com/YOUR_USERNAME/tensura-anime-bot.git
cd tensura-anime-bot

npm install
node index.js
```

---

# 🐧 Linux Setup

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nodejs npm git -y

git clone https://github.com/YOUR_USERNAME/tensura-anime-bot.git
cd tensura-anime-bot

npm install
node index.js
```

---

# ⚡ PM2 Setup (Keep Bot Online)

```bash
npm install -g pm2

pm2 start index.js --name tensura-bot
pm2 save
pm2 startup
```

---

# 🌐 Deployment Options

Recommended hosting platforms:

- VPS (Best & stable 24/7)
- Railway
- Render
- Koyeb
- Termux (testing only)

---

# 🧠 Great Sage Core System

Features:

- AI Chat Memory
- Anime Database Integration
- Economy Engine
- RPG Evolution System
- Group Moderation
- AFK Tracking
- Plugin Architecture

---

# 👑 Developer

**𝗠𝗥 𓋹 𝐏𝐫𝐢𝐦𝐞 ᴋʜᴀʟᴇᴅ𓃵**

---

# ⚖️ License

MIT License

---

# ⚡ Final Motto

> “Wisdom of Great Sage. Leadership of Rimuru. Power of Tempest.”
