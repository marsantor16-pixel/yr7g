<p align="center">
  <img src=".github/branding/logo.png" height="150px"></img>
</p>
<h1 align="center" id="readme-top">ethereal.</h1>
<p align="center">a sleek proxy with speed, design, and usability in mind. easy to deploy to any static host.</p>

## table of contents
- about
  - features
  - proxy support
  - customisation
  - roadmap
  - bug reporting
  - security reporting
- faq
- deployment
  - static hosts
  - local deployment
  - development
- credits

## features
- tabs
- ultraviolet
- cloaks
- server selection
- theming
- sidebar location selection
- super customisable
- fast
- support for popular sites
- support for emulators

<sub> [(back to the top)](#readme-top)</sub>

### proxy support
- easyfun.gg (now.gg alternative)
- youtube
- github
- geforce now (partial)
- emulatorjs
- vscode
- discord/guilded
- google services
- lots of other websites

<sub> [(back to the top)](#readme-top)</sub>

## customisation
basically anything can be customised on this website, including the following

- colors
- favicon
- tab title
- search engine
- wisp server
- bare server
- wisp or bare
- proxy service
- proxy transport
- panic link
- panic keybind
- toolbar location
- adblock (on/off)
- blocked websites
- auto about:blank (on/off)
- auto blob cloak (on/off)
- password protection
- devops (on/off)

<sub> [(back to the top)](#readme-top)</sub>

## roadmap
1. add scramjet support
2. get custom domain
3. add support for extension killing (e.g. stopping goguardian)

more will be added soon.

<sub> [(back to the top)](#readme-top)</sub>

## reporting bugs
if you found a bug on the website, report it to us using the issues page. we have bug templates, so we request you use those. if your issue is not equipped with necessary info or is not clear (e.g. 'the website isnt working'), **we will ignore it.**

going the extra mile? open a pr if you have a patch for the bug. truly appreciated + you will be credited.

<sub> [(back to the top)](#readme-top)</sub>

## reporting security issues
same thing as above

<sub> [(back to the top)](#readme-top)</sub>

## faq
coming soon

<sub> [(back to the top)](#readme-top)</sub>

## deployment

### static hosts
you can deploy to any static host basically, including the following

- vercel (not recommended, some sites will break)
- cloudflare pages
- netlify (recommended)
- firebase
- github pages (not recommended, some sites will break)

you could also use the dedicated buttons below for deployments

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=github.com%2Fadurite-network%2Fethereal&project-name=ethereal-proxy&repository-name=ethereal-proxy&demo-title=preview%20the%20website%20here&demo-description=a%20demo%20of%20this%20proxy&demo-url=https%3A%2F%2Fetherealproxy.netlify.app%2F&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fadurite-network%2Fethereal%2Frefs%2Fheads%2Fmaster%2F.github%2Fbranding%2Flogo.png%3Ftoken%3DGHSAT0AAAAAADJMSCMGTUNVM2X2UIB5P3JS2F3FAIQ)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-statuskit)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/adurite-network/ethereal)

if you don't know how to deploy to firebase or github pages, follow the guides below.

#### firebase hosting

first, clone the repo by running
```bash
git clone https://github.com/adurite-network/ethereal
```

then install fb tools
```bash
pnpm i -g firebase-tools
```

now initialize a project with hosting (be sure to change project name in .firebasesrc)

```bash
firebase init hosting
```
follow the steps in the cli setup and finally deploy

```bash
firebase deploy
```

#### github pages
first, either fork or clone this repo
```bash
git clone https://github.com/adurite-network/ethereal
```

if you cloned, initialize a repo on github by uploading it or using the initialize button in vscode source control.

now go to your repo page > settings > pages

there is a dropdown where you can select the deployment folder. select dist.

then hit deploy.

wait and you're done.

<sub> [(back to the top)](#readme-top)</sub>

### local deployment
first, clone the repository by running this command
```bash
git clone https://github.com/adurite-network/ethereal
cd ethereal
```

then install the dependencies using your package manager of choice
```bash
pnpm i
```

now build the files

```bash
pnpm run build
```

and finally run a server
```bash
pnpm start
```

<sub> [(back to the top)](#readme-top)</sub>

### development
now if you're tryna develop for this program, the process is similar

install the dependencies using your package manager
```bash
pnpm i
```

build the files
```bash
pnpm run build
```

and finally start a server
```bash
pnpm dev
```

<sub> [(back to the top)](#readme-top)</sub>

## credits
made with <3 by cl1pped

thanks to corn unblocked for making uv completely static

uv made by titanium network

and thank you to all the contributors.

<sub> [(back to the top)](#readme-top)</sub>