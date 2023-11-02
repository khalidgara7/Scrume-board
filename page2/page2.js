let button_accs = document.querySelector(".sprint");
let svg = document.querySelector(".dropdownsvg");
let svg90 = document.querySelector(".dropdownsvg90");
let listt = document.querySelector(".list_de_task");
let CreatTaskBtn = document.querySelector(".CreatATask-Btn");
let CreatSprintBtn = document.querySelector(".CreatASprint-Btn");
let border_of_tascks = document.querySelector(".border_of_tascks");
let all=document.querySelector(".border_of_tascks");
console.log(all);
// let sprint_parent = document.querySelector(".sprint_parent");
// sprint dropdown
svg90.style.display = "none";
svg.style.display = "block";
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
// start creat a task on sprint
let task = `<button class="bg-white w-100 p-1 d-flex BorderDeTask">
  <img src="picturs/taskk.png" class="imag-task me-2" alt="task">
  <p class="task m-0">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Temporibus quidem eligendi sit aliquam veniam ex voluptatum
    saepe rem quos nulla minus blanditiis maxime, molestias modi
    unde similique. Culpa, fugit consectetur.
  </p>

  <select name="afair" class="w-25" id="">
    <option value="afair">afair</option>
    <option value="afair">encour</option>
    <option value="terminer">terminer</option>
  </select>
  <img src="picturs/hwo write task.png" class="hwo_write_task ms-2" alt="">
</button>`;

CreatTaskBtn.onclick = function () {
  listt.insertAdjacentHTML("beforeend", task);
};
let sprint = ` <div class="border_of_tascks col-12 col-lg-10 ">
<div class="w-100 position-relative sprint_parent">
 <button
    class="sprint w-100 text-start d-flex align-items-center"
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
<div class="list_de_task">
  <!-- ------------------------------------------------------- -->
  <!-- <button class="bg-white w-100 p-1 d-flex BorderDeTask">
    <img
      src="picturs/taskk.png"
      class="imag-task me-2"
      alt="task"
    />
    <p class="task m-0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Temporibus quidem eligendi sit aliquam veniam ex voluptatum
      saepe rem quos nulla minus blanditiis maxime, molestias modi
      unde similique. Culpa, fugit consectetur.
    </p>

    <select name="afair" class="w-25" id="">
      <option value="afair">afair</option>
      <option value="afair">encour</option>
      <option value="terminer">terminer</option>
    </select>
    <img
      src="picturs/hwo write task.png"
      class="hwo_write_task ms-2"
      alt=""
    />
  </button> -->
 <!-- ----------------------------------------------------------- -->
</div>
<button class=" w-100 p-1 d-flex CreatATask-Btn">+ creat a task</button>
</div>`;
CreatSprintBtn.onclick = function() {
  CreatSprintBtn.insertAdjacentHTML("beforebegin", sprint);
}


