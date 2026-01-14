> [!WARNING]
> THIS IS NOT PRODUCTION READY, IF IT DOESNT WORK ITS A YOU ISSUE!

### SystemRPC

System info in discord rpc.

- Details: CPU Usage
- State: Ram Uage
- Big Image Text: CPU Name
- Big Image: User Provided / Random Pinterest Image
- Small Image Text: Distro Name
- Small Image: User Provided / OS Logo
- Buttons: User Provided
- Timestamp: System Uptime / None

---

#### Config

```json
  "clientId" // String - Client id of the application from discord developer portal. Determines the name of RPC
  "largeImage" //  String - Key For the large image correspoding to asset name uploaded on discord developer portal or image link.
  "smallImage" //  String - Key For the small image correspoding to asset name uploaded on discord developer portal or image link.
  "buttons" // Array<{label: string; url: string;}> - Buttons to be shown on RPC.
  "timestamp" // Boolean - Whether to show uptime as timestamp or not.
  "interval" // Number - In how much Time (ms) to get system info and update RPC.
```
---
#### Prerequisites
- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/)
- [PNPM](https://pnpm.io/installation) (``npm install -g pnpm``)

<details>
<summary>Recommendation</summary>

Use Package Manager to install all these.
- Personally Recommeding Scoop.
</details>

### Getting Started
- Clone the Repository (``git clone <repo url>``)
- Install the dependencies (``pnpm install``)
- Build Project (``pnpm build``)
- Start Project (``pnpm start``)
---
### Customizing

Refer to config above and make the desired change in the ``config.json`` found at root directory of project.

---
### TODO

- [x] Get it to work
- [x] Readme / License / Workflow 
- [x] Auto reconnect
- [x] Working retries
- [ ] Accurate CPU Usage
- [ ] Bundling into executable
- [ ] GUI
- [ ] Make all strings customizable, assigning placeholders to system info.
- [ ] Add to package managers
---


### FAQ

#### Is this bannable by discord?
- Long Story Short, NO.
- Long Story, not particularly since it's an RPC just like any other external application but even lucifer wouldn't know what discord might ban.

#### Is there better way to do this?
- Probably yes, but this is what I made. Let me know if there is a better way.

#### How Do I contribute?
- Fork.
- Make Changes.
- Make sure it works and lint gives no errors.
- Pull request.

(Lint Not necessary but recommended.) 


#### How to give bug report or recommendation?
- Github issues
- Join Discord Server listed below

#### How Do I support without pull request?
- You Can Donate on my [ko-fi](https://ko-fi.com/yofukashino) or UPI at `yofukashinooo@oksbi`

[![Buy Me a Coffee at ko-fi.com](https://storage.ko-fi.com/cdn/kofi3.png?v=3)](https://ko-fi.com/yofukashino)


#### Where can I find the support?

There is support server. You can join it here:

[![Support Server](https://discordapp.com/api/guilds/919649417005506600/widget.png?style=banner3)](https://discord.gg/SgKSKyh9gY)



# Who is the author?

[![Discord Presence](https://lanyard.cnrad.dev/api/1121961711080050780?hideDiscrim=true&idleMessage=Leave%20the%20kid%20alone...)](https://discordapp.com/users/1121961711080050780)
