let svg = document.querySelector(".dropdownsvg");
let svg90 = document.querySelector(".dropdownsvg90");
let listt = document.querySelector(".list_de_task");
svg90.style.display = "none";
svg.style.display = "block";
// this function it's for hideen tasks in the sprint table
function hid_accs() {
  if (listt.style.display === "none") {
    listt.style.display = "block";
    svg90.style.display = "none";
    svg.style.display = "block";
  } else {
    listt.style.display = "none";
    svg90.style.display = "block";
    svg.style.display = "none";
  }
}
// put the value of the modal input in variabls
// get the inputs
var userName = document.querySelector(".inputName");
var userStory = document.querySelector(".textarea-input");
var btnTask = document.querySelector(".CreatATask-Btn");
var userStoryContent;
var UNam;
//............................................CREAT TASKS
// get the parent of tasks
var taskParent = document.querySelector(".list_de_task");
// creat task function

btnTask.onclick = function () {
  if (userStory.value !== "" && userName.value !== "") {
    UNam = userName.value;
    userStoryContent = userStory.value;
    taskParent.innerHTML += ` <button class="bg-white w-100 p-1 d-flex BorderDeTask position-relative" onclick="aff()">
    <img
      src="picturs/taskk.png"
      class="imag-task me-2"
      alt="task"
    />
    <p class="task m-0">
    ${userStoryContent}
    </p>
    <div class="select_img">
      <select name="afair" class="w-100" id="">
        <option value="afair">TO DO</option>
        <option value="afair">DOING</option>
        <option value="terminer">DONE</option>
      </select>
      <img
        src="picturs/hwo write task.png"
        class="who_write_task ms-2"
        alt=""
      />
    </div>
    </button>`;
    userStory.value = "";
    userName.value = "";
  }
};
var btnContent = document.querySelectorAll(".BorderDeTask");
function aff() {
  btnContent.forEach((Element, index) => {
    this.Element.style.backgroundColor = "red";
  });
}
// btnContent.forEach((elem, index) => {
//   btnContent.addEventListener("click", function (e) {
//     console.log(`-${elem}-${index}`);
//   });
// });
//............................................CREAT SPRINTS
// craet a New Sprins
// get the creat sprint btn
var btnSprint = document.getElementById("CreatASprint-Btn");
var sprint = ` <div class="border_of_tasks col-12 col-lg-10">
<div class="w-100 position-relative sprint_parent">
  <button
    class=" w-100 text-start d-flex align-items-center" id="sprint"
    onclick="hid_accs()"
  >
    <span>
      <svg
        class="dropdownsvg me-1"
        width="12"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 11.4L0 2.15676L1.86667 0L8 7.08649L14.1333 0L16 2.15676L8 11.4Z"
          fill="black"
        />
      </svg>
      <svg
        class="dropdownsvg90 me-1"
        width="12"
        height="12"
        viewBox="0 0 12 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8031 8.58562L2.1538 16.0909L0.0976938 14.1139L7.49546 8.35987L0.739682 1.86406L2.99118 0.11283L11.8031 8.58562Z"
          fill="black"
        />
      </svg>
    </span>

    sprint name1 (date)
  </button>
  <button class="position-absolute me-2 demarer-sprint">
    demarer sprint
  </button>
</div>
<div class="list_de_task" id="taskParent">
 
</div>

<button
  type="button"
  class="btn btn-primary btn-primary-1 w-100 p-1 d-flex"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
  data-bs-whatever="@mdo"
>
  + creat a task
</button>

<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          New message
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label"
              >Nam:</label
            >
            <input
              type="text"
              class="form-control w-100 input-name"
              id="recipient-name"
            />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label"
              >User Story:</label
            >
            <textarea
              class="form-control w-100"
              id="message-text"
            ></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary CreatATask-Btn"
          id="CreatATask"
        >
          creat task
        </button>
      </div>
    </div>
  </div>
</div>
</div>`;
btnSprint.onclick = function () {
  btnSprint.insertAdjacentHTML("beforebegin", sprint);

};