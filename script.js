let tasks = [];
let timerInterval;

//Vai até a tela indicada, apaga as telas atuais e abre a tela passada no parâmetro(classe);
function goTo(screenId) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}

//Pega o nome do usuario e coloca na home;
function requestName(){
    const name = document.getElementById("user").value;

    if(name == null){
        document.getElementById("welcome").innerText =
    `Boa noite!`;
    }else{
        document.getElementById("welcome").innerText =
    `Boa noite! ${name}`;
    }


}


//Pega o título da task, coloca o titulo no vetor de tasks e chama a "renderTask"
function addTask() {
  const title = document.getElementById("taskTitle").value;
  if (!title) return;

  tasks.push({ title });
  renderTasks();
  goTo("home");
}

//Coloca a task na Home, pega a classe "tasklist",e adiciona dentro do vetor "tasks" criando uma outra div para cada tarefa, com a class "name";
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <p>${task.title}</p>
      <button onclick="goTo('focus')">Modo Foco</button>
      <button onclick="removeTask(${index})">Concluído</button>
      
    `;
    list.appendChild(div);
  });
}

//Remove a task por index
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
let isRunning = false;

// TIMER POMODORO
function startTimer() {
    let time = 25 * 60;
    let start = document.getElementById("principal");
  
    if(isRunning == false){
        isRunning = true;
        start.innerText = "Parar"
        timerInterval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").innerText =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        time--;

        if (time < 0) {
        clearInterval(timerInterval);
        alert("Tempo finalizado!");
        }
    }, 1000);
}else{
    isRunning = false;
    clearInterval(timerInterval);
    start.innerText="Iniciar"
}
}