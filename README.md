# Overview
This project static-paged  website, with navbar at least linking to 4 other pages, which will detail my projects, resources, etc. Users will learn more about who I am, my interests, and the work I have done. IN addition, links will be provided for the Nu validator, WAVE, a live link, and lastly my repo.

As an IT student I want to be able to expand my skills in development, coding, and cybersecurity so that I am well versed and prepared for my future career.

## Page Map

This website consists of 4 pages including the profile page, blog page, projects page, and resoucres page:

- **Profile Page** – [Introductory page that welcomes the user and has a javascript example. Nu link, WAVE, Live link, Repo link footer.]  
- **Blog** – [Some insights about me, including interests and other miscellaneous things.]  
- **Projects** – [Skill I have aqquired and work I have done.]  
- **Resources** - [Links to resources I have used.]
 

# Live Link

View live link here: [Live Demo](https://mdukes0.github.io/mdukes0/)

# Code Snippet

This code is from codeacademy, it creates the hover bar for blog, porojects, and resources.

<!-- Codeacademy -->

```html
  <div class="links">
    <a href="../index.html">Profile Page</a>
    <a href="../pages/blog.html">Blog</a>
    <a href="../pages/projects.html">Projects</a>
  </div>
```

This is the CSS code for the class links.

  <!-- CSS for codeacademy -->

```html
.links {
	border: 1px solid rgb(63, 137, 186);
	padding: 40px 0px;
	position: relative;
	text-align: center;
	width: 100%;
}

.links a {
	background: rgb(246, 255, 204);
	border: 1px solid rgb(0, 0, 0);
	border-radius: 3px;
	color: rgb(0, 0, 0);
	display: inline-block;
	margin: 10px;
	padding: 14px;
	text-decoration: none;
}

.links a:hover {
	background: rgb(22, 75, 96);
	border: 1px solid rgb(46, 109, 92);
	color: rgb(255, 255, 255);
}
```

The Following javascript is from developer mozilla, who provided the script for the mouseover feature on the profile page. 

```Javascript

  const test = document.getElementById("test");

  // This handler will be executed only once when the cursor
  // moves over the unordered list
  test.addEventListener(
    "mouseenter",
    (event) => {
      // highlight the mouseenter target
      event.target.style.color = "purple";

      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false,
  );

  // This handler will be executed every time the cursor
  // is moved over a different list item
  test.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "orange";

      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false,
  );

```

# Wireframe

Image: ![Profile Wireframe](./images/profile-wireframe.png)
Link:

# Credit & Disclosure

-Junior: Worked together with Junior
-Codeacademy tutorials
-Developer Mozilla
-ChatGPT-5 for error review


