const addButtonElement = document.querySelector(".ajout");
const input = document.querySelector(".inp");
const title = document.querySelector("#exampleModalLabel");
const description = document.querySelector(".modalDes");
const des = document.querySelector(".des");
const taskinterface = document.getElementsByClassName("des");
const modal = document.getElementById("exampleModal");
const cont = document.getElementsByClassName("container");
const status = document.querySelector("select");
let selectedTaskId = null;
let drag = null;

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

cont[0].innerHTML += `<div class="box1 box">
<div class="title" contenteditable="true">TO DO</div>
</div>
<div class="box2 box">
<div class="title" contenteditable="true">DOING</div>
</div>
<div class="box3 box">
<div class="title" contenteditable="true">DONE</div>
</div>
`;

const boxs = document.querySelectorAll(".box");

// EVENTS
modal.addEventListener("shown.bs.modal", function (e) {
  selectedTaskId = e.relatedTarget.dataset.id;
  description.innerHTML = tasks[selectedTaskId - 1].description;
  title.innerHTML = tasks[selectedTaskId - 1].titre;
  status.value = tasks[selectedTaskId - 1].status;
});

addButtonElement.addEventListener("click", function (e) {
  if (input.value !== "") {
    addTask({
      id: tasks.length + 1,
      description: input.value,
      titre: input.value,
      status: 1,
    });

    boxs[0].innerHTML += `<div draggable="true" class="task tasktext">
    <button
      class="des"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-id="${tasks[tasks.length - 1].id}"
    >
              ${tasks[tasks.length - 1].description}
    </button>
    </div>`;
    input.value = "";
  }
});

// dragstart
document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.classList.add("ondrag");
    drag = e.target;
  }
});

// dragend
document.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.classList.remove("ondrag");
    drag = null;
  }
});

// dragover and drop for each box
boxs.forEach((box) => {
  box.addEventListener("dragover", function (e) {
    e.preventDefault();
    console.log("dragover");
    this.style.backgroundColor = "#ffffff99";
  });

  box.addEventListener("dragleave", function (e) {
    e.preventDefault();
    console.log("dragleave");
    this.style.backgroundColor = "#fff";
  });

  box.addEventListener("drop", function (e) {
    e.preventDefault();
    if (drag) {
      this.appendChild(drag);
      this.style.backgroundColor = "#fff";
    }
  });
});

// FUNCTIONS

function setLocalstorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveTask() {
  tasks[selectedTaskId - 1].description = description.innerHTML;
  taskinterface[selectedTaskId - 1].innerHTML =
    tasks[selectedTaskId - 1].description;
  tasks[selectedTaskId - 1].titre = title.innerHTML;
  tasks[selectedTaskId - 1].status = status.value;
  setLocalstorage(tasks);
}

// function update ui on every tasks changes

function addTask(task) {
  tasks.push(task);
  setLocalstorage(tasks);
}

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  boxs[0].innerHTML += `<div draggable="true" class="task tasktext">
  <button
    class="des"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    data-id="${task.id}"
  >
    ${task.description}
  </button>
  </div>`;
}
