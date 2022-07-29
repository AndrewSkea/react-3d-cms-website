# React 3D Globe CMS Portfolio Website

This website displays a 3D globe as well as lists technologies and projects that I have worked on.

You can copy this code and update the data in your CMS (I used contentful - brilliant!) so you can do very little code change!

## Local development

```
git clone https://github.com/AndrewSkea/react-3d-cms-website.git
cd react-3d-cms-website
npm install
npm start
```

Open localhost:3000

## Setup your CMS

- Open and create an account with contentful - https://www.contentful.com/
- Create a content model called Technologies with the following fields
  - Title (short text)
  - Description (long text)
  - TechLogo (Media)
- Create a content model called Projects with the following fields
  - Title (short text)
  - Description (long text)
  - Image (Media)
  - Url (short text)
  - ID (integer)
- Create a content model called Countries with the following fields
  - Name (short text)
  - Coordinates (Location)
  - Date (Datetime)
  - Lived (Boolean)
  - Length (Decimal)
- Then create some content for each of those models, and publish all the changes!

## Deployment

- I highly recomend Cloudflare Pages for deploying this app - this is a great guide on how to do it (make sure to integrate with GitHub so that each time you commit, it automatically builds a website for your branch, and for your master branch.)
  - https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-application/#:~:text=Every%20time%20you%20commit%20new,before%20deploying%20them%20to%20production.

## Credits

- https://github.com/vasturiano/react-globe.gl
- https://github.com/remarkjs/react-markdown
- https://github.com/pmndrs/react-three-fiber
- https://www.contentful.com/
