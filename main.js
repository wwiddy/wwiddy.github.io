// Array of projects with a `date` property added
const projects = [
    {
      title: "Tetris",
      description: "An FPGA-based Verilog game.",
      imgSrc: "/assets/img/project-music-player.png",
      tools: "Django, HTML, CSS, Bootstrap, SQLite, AWS S3, Heroku, Verilog",
      accomplishments: [
        "Register/login to the web app with OAuth-based Google Sign-In.",
        "Search and filter songs based on language and singer.",
        "Create multiple playlists and manage songs.",
        "Scroll through recently played/viewed songs."
      ],
      liveLink: "#",
      sourceLink: "#",
      date: "2023-09-01" // Add date in YYYY-MM-DD format
    },
    {
      title: "Fruit Ninja",
      description: "A Fruit Ninja clone built using Nios II Assembly and C languages.",
      imgSrc: "/assets/img/project-fruit-ninja.png",
      tools: "Nios II Assembly, C",
      accomplishments: [
        "Implemented slicing mechanics.",
        "Smooth animations and collision detection.",
        "Scoring system with increasing difficulty."
      ],
      liveLink: "#", // Replace with actual link if available
      sourceLink: "#",
      date: "2022-11-05" // Add date in YYYY-MM-DD format
    },
    // Add more projects here, each with a `date` property
  ];
  
  // Sort the projects array by most recent date (descending)
  projects.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  let currentIndex = 0;
  const projectsToShow = 1; // How many projects to show at first
  const loadMoreIncrement = 1; // How many to load each time "Load More" is clicked
  
  // Function to generate project HTML
  function generateProjectHTML(project) {
    return `
      <div class="col s12 m6 l4">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img src="${project.imgSrc}" alt="${project.title}" style="height: 100%; width: 100%" class="activator" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
            <p>${project.description}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
            <ul>
              ${project.accomplishments.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <div class="card-action">
              <a href="${project.liveLink}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="fa fa-external-link"></i></a>
              <a href="${project.sourceLink}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="fa fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Function to render the latest projects
  function loadProjects() {
    const recentProjectsDiv = document.getElementById('recent-projects');
    for (let i = 0; i < projectsToShow && currentIndex < projects.length; i++) {
      const projectHTML = generateProjectHTML(projects[currentIndex]);
      recentProjectsDiv.innerHTML += projectHTML;
      currentIndex++;
    }
  
    // Hide "Load More" button if there are no more projects to load
    if (currentIndex >= projects.length) {
      document.getElementById('load-more').style.display = 'none';
    }
  }
  
  // Load more projects when the button is clicked
  document.getElementById('load-more').addEventListener('click', () => {
    const projectsToLoad = Math.min(loadMoreIncrement, projects.length - currentIndex);
    for (let i = 0; i < projectsToLoad; i++) {
      const projectHTML = generateProjectHTML(projects[currentIndex]);
      document.getElementById('recent-projects').innerHTML += projectHTML;
      currentIndex++;
    }
  
    // Hide "Load More" button if no more projects
    if (currentIndex >= projects.length) {
      document.getElementById('load-more').style.display = 'none';
    }
  });
  
  // Initial load of projects when page loads
  document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
  });
  