# Overview

This project is a refactored version of my developer profile website. The website retains previous infromation such as my blog and resources used, while also listing the projects and the achievements I aquired throughout CIS 376.

## Features

- Built with Boostrap 5 and cards
- Projects and achievements loaded through JSON
- Search bar and filters using JavaScript
- Bootstrap Cards and GitHub Icon buttons
- Reflection rendered through zero-md
- Footer navigation

## Tech Stack

- HTML5, CSS3, JavaScript (ES6)
- Bootstrap 5
- Bootstrap Icon (GitHub)
- Google Fonts
- Fetch API for loading JSON
- GitHub (For deployment)
- GitHub Issues
- WAVE + Nu Validator
- zero-md
- VS Code and DevTools

## App Architecture

1. project.json
  - project and achievement data
2. app.js
  - loads JSON with fetch()
  - Renders Bootstrap cards
  - Search filtering
  - multi-image in achievements
3. index.html
  - structure
4. styles.css
  - styling for all pages (but reflection.html)
5. reflection.html & reflection.md
  - knowledge reflection

## Wireframe

![Wireframe](.../assets/images/wireframeEcho.jpg)

## Sources

- google font import
- Bootstrap (framework)
- zero-md (Markdown rendering)
- Junior (shared Knowledge.html which helped markdown file not loading)
- ChatGpt 5.1 (Debugging, Idea generation, JavaScript Generation, Explanation for Wiki, diagram, and how to render Markdown file)

## Code Snippets

Bootstrap Card Render

```js
card.innerHTML = `
  ${proj.image ? `<img src="assets/images/${proj.image}" class="card-img-top">` : ""}
  <div class="card-body">
    <h5 class="card-title">${proj.title}</h5>
    <p class="card-text">${proj.description}</p>
    <a href="${proj.codeUrl}" class="btn btn-outline-secondary btn-sm" target="_blank">
      <i class="bi bi-github"></i> Source Code
    </a>
  </div>
`;
```

Search Filtering

```js
input.addEventListener("input", () => {
  const term = input.value.toLowerCase();
  const filtered = allProjects.filter(p =>
    p.title.toLowerCase().includes(term) ||
    p.description.toLowerCase().includes(term)
  );
  renderProjects(filtered);
});
```

## Links
- [Live](https://mdukes0.github.io/mdukes0/)
- [Repo](https://github.com/mdukes0/mdukes0.git)
- [Wave](https://wave.webaim.org/report#/https://mdukes0.github.io/mdukes0/index.html)
- [Nu Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmdukes0.github.io/mdukes0/index.html)
- [Wiki](https://github.com/mdukes0/mdukes0/wiki)





