const nombre = document.getElementById("nombre");
const monto = document.getElementById("monto");
const miDiv = document.getElementById("respuesta");

const total = document.getElementById("total");
const cada = document.getElementById("cadaUno");

let cont = 0;

const yaPagaron = [];

function search(str) {
  let i = 0;
  let searchedObj = undefined;

  while (i < yaPagaron.length && searchedObj == undefined) {
    if (yaPagaron[i].name == str) {
      searchedObj = yaPagaron[i];
    } else {
      i++;
    }
  }

  return searchedObj;
}

function checkExistance(str) {
  let rta = false;
  let i = 0;
  if (yaPagaron.length != 0) {
    if (search(str) != undefined) {
      rta = true;
    }
  }

  return rta;
}

function searchIndex(str) {
  let i = 0;
  let searchedObj = undefined;

  while (i < yaPagaron.length && searchedObj == undefined) {
    if (yaPagaron[i].name == str) {
      searchedObj = yaPagaron[i];
    } else {
      i++;
    }
  }

  if (searchedObj != undefined) {
    return i;
  } else {
    return -1;
  }
}

function modifyElemts() {
  let i = 0;
  let todo = 0;
  while (i < yaPagaron.length) {
    debugger;
    todo += parseInt(yaPagaron[i].money);
    i++;
  }
  debugger;
  total.innerText = `Total: $${todo}`;
  debugger;
  let division = todo / yaPagaron.length;
  debugger;
  cada.innerText = `Cada uno debe:  $${division.toFixed(2)}`;
  debugger;
}

function addMoney() {
  if (checkExistance(nombre.value)) {
    if (searchIndex(nombre.value) != -1) {
      let index = searchIndex(nombre.value);
      debugger;
      document.getElementById(index).innerText = `${
        yaPagaron[index].name
      }: $${(yaPagaron[index].money += parseInt(monto.value))}`;
    }
  } else {
    yaPagaron.push({ name: nombre.value, money: parseInt(monto.value) });
    let newElemt = document.createElement("h3");
    newElemt.setAttribute("id", cont);
    cont++;
    newElemt.innerText = `${nombre.value}: $${monto.value}`;
    miDiv.append(newElemt);
  }
  if (yaPagaron.length != 0) {
    debugger;
    modifyElemts();
  }
}
