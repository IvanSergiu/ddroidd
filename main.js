window.onscroll = function () {
  stickyNav();
};

var navbar = document.getElementById("navbar");
var sticky = 150;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("non-sticky");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("non-sticky");
  }
}

var experience = [
  {
    employer: "Iservit SRL",
    frameworks: "HTML, SCSS/CSS, Angular, Ionic1",
    years: "2 years (2017)",
    level: "advanced",
    role:"Front-End Developer"
  },
  {
    employer: "SC IVPO EQUALITY SRL",
    frameworks: "HTML, CSS, Liquid, Javascript",
    years: "3 years (2018)",
    level: "advanced",
    role:"Web Developer"
  },
  {
    employer: "OSF Global Services",
    frameworks: "APEX, Visualforce, Lightning components",
    years: "1 year (2018)",
    level: "entry",
    role:"Salesforce Developer"
  },
  {
    employer: "Own project",
    frameworks: "HTML, SCSS, ReactJs, Angular, NodeJs",
    years: "2 months (2021)",
    level: "intermediate",
    role:"Fullstack Developer"
  },
  {
    employer: "Gameloft",
    frameworks: "Testing frameworks",
    years: "<1 years (2014)",
    level: "entry",
    role:"QA Tester"
  },
  {
    employer: "LiftUp Solutions",
    frameworks: "Angular, Material, SCSS, HTML",
    years: "<1 years (2021)",
    level: "intermediate",
    role:"Angular Developer"
  }
];

const exp = document.getElementById("experience");
exp.innerHTML = experience
  .map((xp) => {
    return `<li class="highlight">
      <p class="details employer"><i class="fa fa-user-circle"></i><span>Employer:</span> ${xp.employer}</p>
      <p class="details technologies"><i class="fa fa-microchip" ></i><span>Technologies:</span> ${xp.frameworks}</p>
      <p class="details"><i class="fa fa-clock-o"></i><span>Lifespan:</span> ${xp.years}</p>
      <p class="details ${xp.level}"><i class="fa fa-tasks"></i><span>Level:</span> ${xp.level}</p>
      <p class="details role"><i class="fa fa-keyboard-o"></i><span>Role:</span> ${xp.role}</p>
      </li>`;
  })
  .join("");
 
  