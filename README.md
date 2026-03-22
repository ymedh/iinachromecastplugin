# iina-plugin-chromecast

Cast videos playing in [IINA](https://iina.io) to any Chromecast device on your local network.

Uses native macOS mDNS discovery (dns-sd) and the Google Cast protocol directly — no Chrome browser or Cast SDK required.

## Installation

In IINA: **Plugins → Plugin Manager → Install from GitHub**
```
ymedh/iinachromecastplugin
```

## Features
- 📡 Discovers Chromecast devices via mDNS on your local network
- ▶️ Casts current video automatically when connected
- ⏸ Syncs pause, resume, and seek from IINA to Chromecast
- 🖥 Shows casting overlay in IINA while active
- ⏹ Stop casting from sidebar or Plugins menu

## Requirements
- IINA 1.3.0+
- macOS (dns-sd is built in — no install needed)
- Chromecast on the same Wi-Fi network
- Video must be a reachable URL (local file:// paths won't reach Chromecast)

## License
MIT
