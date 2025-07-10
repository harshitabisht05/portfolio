'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
// ========== Dynamic Data Loading ========== //

document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      injectPersonalInfo(data.personalInfo);
      injectAbout(data.about);
      injectEducation(data.education);
      injectExperience(data.experience);
      injectSkills(data.skills);
      injectProjects(data.projects);
    })
    .catch((err) => console.error("Error loading data:", err));
});

// ========== Personal Info ==========
function injectPersonalInfo(info) {
  document.querySelector(".name").textContent = info.name;
  document.querySelector(".title").textContent = info.title;
  document.querySelector(".avatar-box img").src = info.avatar;
  document.querySelector(".contact-link").textContent = info.email;
  document.querySelector(".contact-link").href = `https://mail.google.com/mail/?view=cm&to=${info.email}`;
  document.querySelector(".contact-link").target = "_blank";
  document.querySelector(".contact-link-inline").textContent = info.email;
  document.querySelector(".contact-link-inline").href = `https://mail.google.com/mail/?view=cm&to=${info.email}`;
  document.querySelector(".contact-link-inline").target = "_blank";
  document.querySelector(".linkedin-link").textContent = "LinkedIn Profile";
  document.querySelector(".linkedin-link").href = info.linkedin;
  document.querySelector(".phone-link").textContent = info.phone;
  document.querySelector(".phone-link").href = `tel:${info.phone}`;
  document.querySelector("time").textContent = new Date(info.birthday).toDateString();
  document.querySelector("address").textContent = info.location;

  const socialList = document.querySelector(".social-list");
  socialList.innerHTML = `
    <li class="social-item">
      <a href="${info.linkedin}" class="social-link" target="_blank">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>
    </li>
    <li class="social-item">
      <a href="${info.github}" class="social-link" target="_blank">
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </li>
  `;
}

// ========== About Section ==========
function injectAbout(about) {
  const aboutSection = document.querySelector(".about-text");
  aboutSection.innerHTML = `<a href="${about.resume}" target="_blank" class="btn-link">View Resume (PDF)</a>`;
  about.paragraphs.forEach(p => {
    aboutSection.innerHTML += `<p>${p}</p>`;
  });
}

// ========== Education ==========
function injectEducation(education) {
  const eduList = document.querySelectorAll(".timeline")[0].querySelector(".timeline-list");
  eduList.innerHTML = "";
  education.forEach(item => {
    eduList.innerHTML += `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${item.title}</h4>
        <span>${item.duration}</span>
        <p class="timeline-text">${item.description}</p>
      </li>`;
  });
}

// ========== Experience ==========
function injectExperience(experience) {
  const expList = document.querySelectorAll(".timeline")[1].querySelector(".timeline-list");
  expList.innerHTML = "";
  experience.forEach(item => {
    expList.innerHTML += `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${item.title}</h4>
        <span>${item.duration}</span>
        <p class="timeline-text">${item.description}</p>
      </li>`;
  });
}

// ========== Skills ==========
function injectSkills(skills) {
  const skillsList = document.querySelector(".skills-list");
  skillsList.innerHTML = "";
  skills.forEach(skill => {
    skillsList.innerHTML += `
      <li class="skills-item">
        <div class="title-wrapper">
          <h5 class="h5">${skill.name}</h5>
          <data value="${skill.level}">${skill.level}%</data>
        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: ${skill.level}%;"></div>
        </div>
      </li>`;
  });
}

// ========== Projects ==========
function injectProjects(projects) {
  const projectList = document.querySelector(".projectname-list");
  projectList.innerHTML = "";
  projects.forEach(project => {
    projectList.innerHTML += `
      <li class="projectname-item active" data-filter-item data-category="${project.category}">
        <a href="${project.link}" target="_blank" style="text-decoration: none; color: inherit;">
          <figure class="projectname-img">
            <div class="projectname-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${project.image}" alt="${project.title}" loading="lazy">
          </figure>
          <h3 class="projectname-title">${project.title}</h3>
        </a>
      </li>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  const popupClose = document.getElementById("popup-close");

  function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = "flex";
  }

  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formspree.io/f/xpwdpeln", {
          method: "POST",
          headers: {
            "Accept": "application/json"
          },
          body: formData
        });

        if (response.ok) {
          showPopup("Mail sent successfully!");
          form.reset();
        } else {
          showPopup("Oops! Something went wrong. Try again later.");
        }
      } catch (error) {
        showPopup("An error occurred while sending the message.");
      }
    });
  }
});
