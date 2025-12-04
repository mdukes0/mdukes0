let allProjects = [];

document.addEventListener("DOMContentLoaded", () => {
  console.log("app.js loaded, loading profile data...");
  loadProfileData();
});

async function loadProfileData() {
  try {
    const response = await fetch("assets/data/projects.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Loaded JSON data:", data);

    allProjects = data.projects || [];
    renderProjects(allProjects);
    renderAchievements(data.achievements || []);
    setupProjectSearch();
  } catch (error) {
    console.error("Error loading profile data:", error);
  }
}

function renderProjects(projects) {
  const container = document.querySelector(".project-list");
  if (!container) return;

  container.innerHTML = "";

  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "card h-100";

    card.innerHTML = `
      ${proj.image ? `
        <img src="assets/images/${proj.image}" class="card-img-top" alt="${proj.title} screenshot">
      ` : ""}
      <div class="card-body">
        <h5 class="card-title">${proj.title}</h5>
        <p class="card-text">${proj.description}</p>
        <div class="d-flex flex-wrap gap-2">
          ${proj.appUrl ? `
            <a href="${proj.appUrl}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
              View App
            </a>
          ` : ""}
          ${proj.codeUrl ? `
            <a href="${proj.codeUrl}" class="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener">
              <i class="bi bi-github"></i>
              <span class="ms-1">Source Code</span>
            </a>
          ` : ""}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderAchievements(achievements) {
  const container = document.querySelector(".achievement-list");
  if (!container) return;

  container.innerHTML = "";

  achievements.forEach((ach) => {
    const card = document.createElement("div");
    card.className = "card h-100";

    // Handle multiple images per achievement: "images": [ ... ]
    let imageHTML = "";
    if (ach.images && Array.isArray(ach.images)) {
      imageHTML = ach.images
        .map((img) => `
          <img src="assets/images/${img}" class="card-img-top mb-2" alt="${ach.title} screenshot">
        `)
        .join("");
    } else if (ach.image) {
      // Optional: support a single "image" field too
      imageHTML = `
        <img src="assets/images/${ach.image}" class="card-img-top mb-2" alt="${ach.title} screenshot">
      `;
    }

    card.innerHTML = `
      ${imageHTML}
      <div class="card-body">
        <h5 class="card-title">${ach.title}</h5>
        <p class="card-text">${ach.description}</p>
        ${ach.link ? `
          <a href="${ach.link}" class="btn btn-outline-primary btn-sm" target="_blank" rel="noopener">
            Learn more
          </a>
        ` : ""}
      </div>
    `;

    container.appendChild(card);
  });
}

function setupProjectSearch() {
  const input = document.querySelector(".project-search-input");
  if (!input) return;

  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();

    if (!term) {
      renderProjects(allProjects);
      return;
    }

    const filtered = allProjects.filter((proj) => {
      const text = [
        proj.title || "",
        proj.description || "",
        (proj.tags || []).join(" ")
      ]
        .join(" ")
        .toLowerCase();

      return text.includes(term);
    });

    renderProjects(filtered);
  });
}
