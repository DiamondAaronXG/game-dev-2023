money = 0;
moneyup = 1;
msec = 0;
upcost = 15;
nanicost = 25;
workercost = 250;
upown = 0;
naniown = 0;
workerown = 0;
naniadd = 1;
workadd = 15;
cboost = 1;
wboost = 1;
nanimax = 0;
workmax = 0;

//save before exiting
function closingCode() {
  if (confirm("You have closed the window, would you like to save?") === true) {
    save();
    return null;
  }
}

function addcomma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
//updates all values
function reloadall() {
  document.getElementById("click").innerHTML =
    "Spice/click: " + addcomma(moneyup) + " | Spice/sec: " + addcomma(msec);

  document.getElementById("total").innerHTML = 
    "Spice: " + addcomma(money);

  document.getElementById("nani").innerHTML =
    catown + "-clicker nani: " + addcomma(nanicost) + " | +" + addcomma(naniadd) + "Spice/sec";
  document.getElementById("nani").innerHTML =
  "1 Nani - " + nanicost + " Spice +1spice/sec";

  document.getElementById("worker").innerHTML =
    workerown + "-worker: " + addcomma(workercost) + " | +" + addcomma(workadd) + "Spice/sec";
  document.getElementById("Factory").innerHTML =
  "1 Factory - " + workercost + " Spice +15spice/sec";

  document.getElementById("upgrade").innerHTML =
    addcomma(upown) + "-main upgrade: " + addcomma(upcost);
  document.getElementById("More Spice").innerHTML =
  "1 More Spice per Click - " + upcost + " Spice";
}
//overwrites save file
function save() {
  localStorage.setItem("money", money);
  localStorage.setItem("moneyup", moneyup);
  localStorage.setItem("msec", msec);
  localStorage.setItem("upcost", upcost);
  localStorage.setItem("nanicost", catcost);
  localStorage.setItem("naniadd", catadd);
  localStorage.setItem("workercost", workercost);
  localStorage.setItem("workadd", workadd);
  localStorage.setItem("naniown", catown);
  localStorage.setItem("workerown", workerown);
  localStorage.setItem("upown", upown);
  localStorage.setItem("naniadd", catadd);
  localStorage.setItem("workadd", workadd);
  localStorage.setItem("cboost", cboost);
  localStorage.setItem("wboost", wboost);
  localStorage.setItem("nanimax", catmax);
  localStorage.setItem("workmax", workmax);
}
//loads save file
function load() {
  money = parseInt(localStorage.getItem("money"));
  moneyup = parseInt(localStorage.getItem("moneyup"));
  msec = parseInt(localStorage.getItem("msec"));
  upcost = parseInt(localStorage.getItem("upcost"));
  catcost = parseInt(localStorage.getItem("nanicost"));
  upown = parseInt(localStorage.getItem("naniadd"));
  workercost = parseInt(localStorage.getItem("workercost"));
  upown = parseInt(localStorage.getItem("workadd"));
  catown = parseInt(localStorage.getItem("naniown"));
  workerown = parseInt(localStorage.getItem("workerown"));
  upown = parseInt(localStorage.getItem("upown"));
  catadd = parseInt(localStorage.getItem("naniadd"));
  workadd = parseInt(localStorage.getItem("workadd"));
  cboost = parseInt(localStorage.getItem("cboost"));
  wboost = parseInt(localStorage.getItem("wboost"));
  catmax = parseInt(localStorage.getItem("nanimax"));
  workmax = parseInt(localStorage.getItem("workmax"));

  reloadall();
}
//resets all values
function reset() {
  if (confirm("Are you sure you want to reset?") === true) {
    money = 0;
    moneyup = 1;
    msec = 0;
    upcost = 15;
    nanicost = 25;
    workercost = 250;
    catown = 0;
    workerown = 0;
    upown = 0;
    naniadd = 1;
    workadd = 15;
    reloadall();
  }
}
//timer
function myTimer() {
    money += msec;
  document.getElementById("total").innerHTML = "Spice: " + addcomma(money);
}
setInterval(myTimer, 1000);

//what happens when button is clicked
function clicked() {
  money += moneyup;
  document.getElementById("total").innerHTML = "Spice: " + addcomma(money);
}
//upgrade function
function upgrade(name) {
  if (name == "clicker nani") {
    if (money >= nanicost && naniown < 50) {

      if (naniown <= 13) {
        msec += naniadd;
        naniadd++;
        cboost = 1;
      } else if (naniown == 14) {
        msec += naniadd;
        catadd++;
        cboost = 200;
      } else if (naniown <= 23) {
        msec += 200 * naniadd;
        naniadd++;
        cboost = 200;
      } else if (naniown == 24) {
        msec += 200 * naniadd;
        naniadd++;
        cboost = 5000;
      } else if (naniown <= 48) {
        msec += 5000 * naniadd;
        naniadd++;
        cboost = 5000;
      } else if (naniown == 49) {
        msec += 5000 * naniadd;
        naniadd++;
        cboost = 15000;
      } else {
        msec += 15000 * naniadd;
        naniadd++;
        cboost = 15000;
      }
      naniown += 1;
      money -= nanicost;
      nanicost = nanicost * 2;
      upown++;
      reloadall();
    }
  }


  if (name == "worker") {
    if (money >= workercost && workerown < 50) {

      if (workerown <= 13) {
        msec += workadd;
        workadd++;
        wboost = 1;
      } else if (workerown == 14) {
        msec += workadd;
        workadd++;
        wboost = 200;
      } else if (workerown <= 23) {
        msec += 200 * workadd;
        workadd++;
        wboost = 200;
      } else if (workerown == 24) {
        msec += 200 * workadd;
        workadd++;
        wboost = 5000;
      } else if (workerown <= 48) {
        msec += 5000 * workadd;
        workadd++;
        wboost = 5000;
      } else if (workerown == 49) {
        msec += 5000 * workadd;
        workadd++;
        wboost = 15000;
      } else {
        msec += 15000 * workadd;
        workadd++;
        wboost = 15000;
      }
      workerown += 1;
      money -= workercost;
      workercost = workercost * 3;
      document.getElementById("worker").innerHTML = 
        workerown + "-worker: " + addcomma(workercost) + " | +" + addcomma(workadd * wboost) + "/sec";
    } else if (workerown == 50) {
      document.getElementById("worker").innerHTML =
        workerown + "-worker: MAX | +35% click/sec";
    }
  }

  if (name == "upgrade") {
    if (money >= upcost) {
      moneyup += upcost / 15;
      money -= upcost;
      upown += 1;
      upcost = upcost * 5;
      document.getElementById("upgrade").innerHTML =
        addcomma(upown) + "-main upgrade: " + addcomma(upcost);
      if (naniown == 50) {
        msec -= nanimax;
        nanimax = Math.floor(moneyup * 0.15);
        msec += nanimax;
      }
      if (workerown == 50) {
        msec -= workmax;
        workmax = Math.floor(moneyup * 0.35);
        msec += workmax;
      }
    }
  }

  document.getElementById("click").innerHTML =
    "Spice/click: " + addcomma(moneyup) + " | Spice/sec: " + addcomma(msec);
  document.getElementById("total").innerHTML = "Spice: " + addcomma(money);
}
