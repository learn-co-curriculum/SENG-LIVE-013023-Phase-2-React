---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "P2L7 - React Client Side Routing slides"
---

<h1> Client Side Routing 📲 </h1>

---

<h2><strong> ✅ Objectives </strong></h2>

- Create a multi-page SPA
- Utilize the most common react-router components to build a SPA: BrowserRouter, Route, Switch, Link, and NavLink
- Use custom hooks like useHistory and useParams to access the state of the router
- Use the history object to navigate pages
- Create dynamic routes and use params

---

### 💡 What is client side routing and React router?

<div style="font-size: 0.8em">

"React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native."
[React Router Docs](https://reactrouter.com/docs/en/v6/getting-started/tutorial) {.fragment}

<div class="fragment">⬇️ 

"Client side routing is a type of routing where as the user navigates around the application or website no full page reloads take place, even when the page’s URL changes. Instead, JavaScript is used to update the URL and fetch and display new content" - Will Taylor
</div>
</div>

---

### 🗒️ Planning Routes 

<div style="font-size: 0.8em">
Before we do anything, we need to make a plan about what we want.

What URLs do we want our application to have to simulate the feeling of different "pages"?

| Component       | Url                |
| --------------- | ------------------ |
| Home            | / (root route)     |
| About           | /about             |
| ProjectForm     | /projects/new      |
| ProjectEditForm | /projects/:id/edit |
| ProjectDetail   | /projects/:id      |
| ProjectList     | /projects          |

</div>

---

### The Primary React Router Components 

- BrowserRouter

- Switch

- Route

- Link

- NavLink

---

### 1️⃣ BrowserRouter 

<div style="font-size: 0.8em">

<div style="display: flex">

  <div style="width: 30%; text-align: left;">

  <small>

💡 `BrowserRouter` is a wrapper for App to allow conditional rendering based on the URL

❓ Where does it belong? {.fragment}

Since the `App` component is imported and mounted inside the `index.js` file, this is a great place to wrap the component within `BrowserRouter` {.fragment}

</small>

  </div>
  <div class="fragment" style="width: 80%">

```js
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
```

  </div>
</div>


</div>

---

### Switch Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 35%; font-size: 0.65em; text-align: left;">

💡 `Switch` is a wrapper for Routes. Looks through all its child Route components and returns the first one that matches the current URL (like a switch statement in JavaScript) {.fragment}

❓ Where does it belong? {.fragment}

Consider where most of the applications components are rendered, this is where they will be nested inside the `Switch` component. {.fragment}

Typically this is in the `App` component. Sometimes an extra component will be created designated for just routing. {.fragment}

  </div>
  <div style="width: 65%; font-size: 0.95em" class="fragment">

```js
// src/App.js
return (
  <div className={isDarkMode ? "App" : "App light"}>
    <Header 
      isDarkMode={isDarkMode} 
      onToggleDarkMode={onToggleDarkMode} 
    />
    <Switch>
      <Home />
      <About />
      <ProjectsContainer />
    </Switch>
  </div>
);
```

  </div>
</div>



---

#### Creating routes using the Route Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 35%; font-size: 0.65em; text-align: left;">

💡 `Route` wraps content that should be visible when the designated route is active. {.fragment}

❓ Where does it belong? {.fragment}

Every component nested inside of the `Switch` component will be individually wrapped inside of a `Route` component. {.fragment}

💥 Route will be provided a `path` prop. {.fragment}

if the current URL matches the path, the Route will render its children. Otherwise, the Route renders null. {.fragment}

  </div>
  <div style="width: 65%; font-size: 0.75em" class="fragment">

```js
// src/App.js
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/projects">
    <ProjectsContainer />
  </Route>
</Switch>
```

```js
// src/components/ProjectsContainer.js
<Switch>
  <Route path="/projects/new">
    <ProjectForm onAddProject={onAddProject} />
  </Route>
  <Route path="/projects/:id/edit">
    <ProjectEditForm onUpdateProject={onUpdateProject} />
  </Route>
  <Route path="/projects/:id">
    <ProjectDetail />
  </Route>
  <Route path="/projects">
    <ProjectList projects={projects} onDeleteProject={onDeleteProject} />
  </Route>
</Switch>
```

  </div>
</div>


---

### Link Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 40%; text-align: left; font-size: 0.8em">

💡 `Link` creates an anchor tag in your application that will navigate using React Router instead of the browser default {.fragment}

We want to use `Link` for navigation in our application. It will ensure that a page reload does not occur, unlike the use of an anchor tag `<a></a>` {.fragment}

💥 Link will be provided a `to` prop which indicates where the link should navigate to (generates the href) {.fragment}

  </div>
  <div style="width: 60%" class="fragment">

```js
return (
  <header>
    <nav>
      <Link to="/" style={{ borderBottom: "none" }}>
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
      </Link>
      <div className="navigation">
        <Link className="button" to="/projects">
          All Projects
        </Link>
        <Link className="button" to="/projects/new">
          Add Project
        </Link>
        ...
      </div>
    </nav>
  </header>
);
```

  </div>
</div>

---

### NavLink Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 40%; text-align: left; font-size: 0.8em">

💡 `NavLink` is the same as Link with the additional feature that an "active" class will be added when the url matches the value of the 'to' prop {.fragment}

💥 If you're building sidebar navigation with subsections, you may want the active class to apply to multiple links (the main and subsection) {.fragment}

💥 Otherwise, if you want the active class to only apply if the current URL is an exact match to the `NavLink`, then add the `exact` prop to the `NavLink` {.fragment}

  </div>
  <div style="width: 60%" class="fragment">

```js
return (
  <header>
    <nav>
      ...
      <div className="navigation">
        <NavLink 
          className="button" 
          exact to="/projects"
        >
          All Projects
        </NavLink>
        <NavLink 
          className="button" 
          exact to="/projects/new"
        >
          Add Project
        </NavLink>
        ...
      </div>
    </nav>
  </header>
);
```

  </div>
</div>

