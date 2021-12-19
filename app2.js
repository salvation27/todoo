const input = document.querySelector(".input");
const btn_add_todoo = document.querySelector(".btn_add_todoo");
const result = document.querySelector("#result");
const todoo_wrapper = document.querySelector(".todoo_wrapper");

let tasks;

!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem("tasks")));

function Task(description) {
  this.description = description;
  this.complited = false;
}

const task = {
  description: "Cходить погулять",
  complited: false,
};

const updateLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

btn_add_todoo.addEventListener("click", () => {
  tasks.push(new Task(input.value));
  input.value = "";
  console.log(tasks);
  updateLocal();
});

const render = () => {
  todoo_wrapper.innerHTML = "";
  if (tasks.length > 0) {
    tasks.forEach((item, i) => {
      todoo_wrapper.innerHTML += createTemplate(item,i)
    });
  }
};


function createTemplate (item,i){
    return `
    <>
    `
}