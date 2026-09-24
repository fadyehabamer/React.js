# React.js 
> Documented Code For BEST Javascript Library🔵

<p align="center">
  <img src='img.png'>
</p>

<hr>

## Table of content

| #  | Topic | Type | Run |
|----|-------|------|-----|
| 01 | [React Intro and JSX](_01-React%20Intro%20and%20JSX) | HTML + CDN | open `index.html` |
| 02 | [React Component](_02-React%20Component) | HTML + CDN | open `index.html` / `simpleUI.html` |
| 03 | [Props](_03-Props) | HTML + CDN | open `index.html` |
| 04 | [State](_04-State) | HTML + CDN | open `index.html` |
| 05 | [Props vs States](_05-Props%20vs%20States) | HTML + CDN | open `index.html` |
| 06 | [create react app](_06-create%20react%20app) | Create React App | `npm start` |
| 07 | [import export export default](_07-import_export_export%20default) | Create React App | `npm start` |
| 08 | [nested Component, Arrow Functions](_08-nested%20Component%20_%20Arrow%20Functions) | Create React App | `npm start` |
| 09 | [Events](_09-Events) | Create React App | `npm start` |
| 10 | [SetState](_10-SetState) | Create React App | `npm start` |
| 11 | [statefull vs stateless component](_11-statefull%20vs%20stateless%20component) | Create React App | `npm start` |
| 12 | [React List Data Using Map](_12-React%20List%20Data%20Using%20Map) | Create React App | `npm start` |
| 13 | [React Forms](_13-React%20Forms) | Create React App | `npm start` |
| 14 | [Output if condition (conditional rendering)](_14-output%20if%20condition) | Create React App | `npm start` |
| 15 | [component Life Cycle](_15-component%20Life%20Cycle) | Create React App | `npm start` |
| 16 | [React Router](_16-React%20Router) | Create React App | `npm start` |
| 17 | [Axios](_17-Axios) | Create React App | `npm start` |
| 18 | [Routes Not Found](_18-Routes%20Not%20Found) | Create React App | `npm start` |
| 19 | [Fragments](_19-Fragments) | Create React App | `npm start` |
| 20 | [dealing with images](_20-dealing%20with%20images) | Create React App | `npm start` |
| 21 | [Todo App](_21-Todo%20App) | Create React App | `npm start` |
| 22 | [Github Calendar Component](_22-Github%20Calendar%20Component) | Create React App | `npm start` |
| 23 | [React Tailwind CSS](_23-React%20Tailwind%20CSS) | Create React App | `npm start` |
| 24 | [Courses App](_24-Courses%20App) | Create React App | `npm start` |
| 25 | [Key Fragment](_25-KeyFragment) | Create React App | `npm start` |
| 26 | [Component Life Cycle part 2](_26-Component%20Life%20Cycle%20Part%20two) | Create React App | `npm start` |
| 27 | [pure Component](_27-pure%20Component) | Create React App | `npm start` |
| 28 | [Weather React App](_28-Weather%20React%20App/React-WeatherApp) | Create React App | `npm start` - needs an OpenWeather key in `.env` (see `.env.example`) |
| 31 | [refs](_31-refs/refs) | Create React App | `npm start` |
| 32 | [call back refs](_32-call%20back%20refs/callbackrefs) | Create React App | `npm start` |
| 33 | [Context API](_33-Context%20API/context-api) | Create React App | `npm start` |
| 34 | [React Router V6](_34-React%20Router%20V6/react-router-dom-6) | Create React App | `npm start` |
| 35 | [useState](_35-UseState/usestate) | Create React App | `npm start` |
| 36 | [Private Routes](_36-Private%20Routes) | Create React App | `npm start` - uses Yarn (`yarn.lock`) |
| 37 | [useEffect](_37-UseEffect/useffect) | Create React App | `npm start` - no lockfile, install with `npm install` |
| 38 | [React Blog](_38-React%20Blog/blog) | Create React App | `npm start` - expects a JSON API on `localhost:4000/posts` |
| 40 | [Anime App](_40-Anime%20App/anime) | Create React App | `npm start` |
| 41 | [useEffect: Wikipedia search](_41-useeffect-wikipedia) | Create React App | `npm start` |
| 42 | [Context API in depth](_42-Context-api-inDepth) | Vite | `npm run dev` - uses Yarn (`yarn.lock`) |
| 43 | [Context API Cart Project](_43-Context%20API%20Cart%20Project/Context%20API%20Cart%20Project) | Vite | `npm run dev` |
| 44 | [Authentication App Context API](_44-Authentication%20App%20Context%20API/auth-contextAPI) | Vite | `npm run dev` |
| 45 | [useRef](_45-useRef/useRef) | Vite | `npm run dev` |
| 46 | [useMemo](_46-useMemo/useMemo) | Vite | `npm run dev` |
| 47 | [React Router Dom](_47-React%20Router%20Dom/vite-project) | Vite | `npm run dev` |
| 48 | [QR Code Generator](_48-QR%20Code%20Generator/qr-code) | Vite | `npm run dev` |

Numbers 29, 30 and 39 are not in the repository.

## Running an exercise

- **HTML + CDN** (01-05): open the `.html` file in a browser. React, ReactDOM and Babel load from unpkg, so you need an internet connection.
- **Create React App** projects: `cd` into the folder that contains `package.json`, then run `npm ci` (or `yarn install` where there is a `yarn.lock`), then `npm start`. `npm run build` makes a production build.
- **Vite** projects: `npm ci`, then `npm run dev`. `npm run build` makes a production build.

Use a current Node.js LTS (18+). The three `react-scripts` 4 projects (36, 37, 41) pass `--openssl-legacy-provider` in their scripts so that they run on Node 17+.
