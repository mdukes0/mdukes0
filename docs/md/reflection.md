# Web Development Knowledge Reflection

This course introduced me to web building fundamentals, including languages such as HTML, CSS, JavaScript, and JSON. Throughout the semester I have completed project Alpha, Bravo, Charlie, Delta, and now Echo. I have also learned of concepts such as front end and back end deployment. Futhermore, I have also been introduced to new tools such as Github and CodePen, which can be used in the workplace. overall, I aquired a menagerie of new skills that can be applied into my IT career even if I don't directly get into web development.

## Infrastructure (Tech Stack)

- **HTML5 + CSS3 + JavaScript (ES6)**  
  The core languages used for structure, styling, and behavior.

- **Bootstrap 5**  
  Used for layout, responsive design, and prebuilt components.

- **Normalize.css**  
  Ensures consistent styling across browsers.

- **JSON Data Files**  
  My project and achievement information is stored in  
  `assets/data/projects.json`.

- **Git & GitHub**  
  Version control, project hosting, GitHub Pages, Issues, and the Wiki.

- **GitHub Pages (docs/ deployment)**  
  Allows my app to run as a live website straight from the repository.

- **Chrome DevTools**  
  Used for debugging layout, JavaScript, and network activity.

- **Nu Validator & WAVE**  
  Used to check accessibility and semantic correctness.

- **AI Tools (ChatGPT 5.1)**  
  Assisted with debugging, refactoring, and documentation.

---

## Architecture 

docs/
index.html
styles/
styles.css
scripts/
script.js <-- JS demo from earlier assignments
app.js <-- Fetches JSON and generates cards
assets/
images/
data/
projects.json <-- All project + achievement data
pages/
blog.html
resources.html
reflection.md

### Data Flow
1. The browser loads `index.html`.  
2. `app.js` runs on DOMContentLoaded.  
3. `app.js` fetches my JSON data file: assets/data/projects.json
4. The JSON is turned into **Bootstrap-style cards** for:
- Projects  
- Achievements  
5. These cards are inserted into:
- `.project-cards`
- `.achievement-cards`

### UI Architecture

- **Navbar** connects all pages (Blog, Resources, Reflection).
- **Main sections** use `.card-grid` CSS for a clean, responsive grid.
- **Goodreads-inspired color palette** 
- **External pages** (Blog, Resources) maintain earlier coursework.

### Dev Process & Management Practices

Throughout the semester I...
- Broke tasks into small steps  
- Refactored repeatedly  
- Used GitHub Issues to track features and bugs  

## A11y, Validation, and Code Quality

- **HTML validated** with Nu validator  
- **Accessibility scanned** with WAVE  
- Fixed issues like:
- Missing alt attributes  
- Heading order corrections  
- Color contrast improvements    
- Semantic tags used where appropriate  
- Cards are readable with sufficient color contrast

## Wireframe

![Wireframe](docs/assets/images/wireframeEcho.jpg)

## Diagram

![Diagram](docs/assets/images/diagram.jpg)

## Definitions

**RESTful API:**  
“RESTful API is an interface that two computer systems use to exchange information securely over the internet.” — AWS (Amazon Web Services)

**Fetch API:**  
“The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.” — MDN

**Infrastructure (IT):**  
“IT infrastructure is everything you need to build and run software applications in an organization. It includes hardware, networking components, your operating system, data storage, and various software that an organization uses to deliver IT services and run internal software solutions.” - AWS

**IS Architecture:**  
“Information architecture, as applied to web design and development, is the practice of organizing the information / content / functionality of a website so that it presents the best user experience it can, with information and services being easily usable and findable.” - MDN

---

## Final Takeaway

If I could give advice to myself at the beginning of the semster it would be to focus on the steps rather than be overwhelmed by the larger picture.

Even small change, like organizing the layout of folders and empty pages will help me visualize how to add all the details. In addition, I've learned how to isolate and divide infromation on individual pages for better clarity, error review, and structure. 


I have learned about the basic principles for front-end decelopment, and the some of the tools used for web development.
