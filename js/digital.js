"use strict";
let tilte = document.querySelector(".tilte-project");

if (document.location.href.includes("project-1")) {
  tilte.textContent = "Project Charter - Báo cáo kinh doanh".toUpperCase();
  const elprj = document.querySelectorAll(".project_1");
  elprj.forEach((item) => {
    item.style.display = "block";
  });
} else if (document.location.href.includes("project-2")) {
  tilte.textContent =
    "Project Charter - giám sát chất lượng mạng di động".toUpperCase();
  const elprj = document.querySelectorAll(".project_2");
  elprj.forEach((item) => {
    item.style.display = "block";
  });
} else if (document.location.href.includes("project-3")) {
  tilte.textContent = "Project Charter - quy hoạch relation".toUpperCase();
  const elprj = document.querySelectorAll(".project_3");
  elprj.forEach((item) => {
    item.style.display = "block";
  });
}
