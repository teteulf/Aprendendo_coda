const selet_in = document.querySelector("input");
const selet_select = document.querySelector("select");
function add() {
  let tarefa = document.createElement("option");
  if (selet_in.value.length == 0) {
    alert("Insira uma Tarefa válida");
  } else {
    tarefa.text = selet_in.value;
    tarefa.id = selet_in.value;
    selet_select.appendChild(tarefa);
    selet_in.focus();
    selet_in.value = "";
  }
}
selet_in.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    add();
  }
});
function remove() {
  let selet_option = document.getElementById(selet_select.value);
  selet_select.removeChild(selet_option);
}
