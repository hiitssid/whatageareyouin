const birth = {
  abby: [1991, 12, 18],
  trooper: [1991, 06, 08],
  torpey: [1991, 12, 13],
  khoya: [1991, 11, 13],
};
//----------Abby---------------------------------------

function abby() {
  const today = new Date();
  presentYear = today.getFullYear();
  presentMonth = today.getMonth() + 1;
  presentDay = today.getDay();

  if (presentDay < birth.abby[2]) {
    abbyDays = presentDay - birth.abby[2] + 30;
    presentMonth = presentMonth - 1;
  } else {
    abbyDays = presentDay - birth.abby[2];
  }

  if (presentMonth < birth.abby[1]) {
    abbyMonths = presentMonth - birth.abby[1] + 12;
    presentYear = presentYear - 1;
  } else {
    abbyMonths = presentMonth - birth.abby[1];
  }

  abbyYears = presentYear - birth.abby[0];

  const ageAbby = document.getElementById("ageabby");
  ageAbby.innerText = `${abbyYears} Years`;
  const monthAbby = document.getElementById("month-abby");
  monthAbby.innerText = `${abbyMonths} Months & ${abbyDays} Days`;
}

//----------Trooper--------------------------------------------

function trooper() {
  const today = new Date();
  presentYear = today.getFullYear();
  presentMonth = today.getMonth() + 1;
  presentDay = today.getDay();

  if (presentDay < birth.trooper[2]) {
    trooperDays = presentDay - birth.trooper[2] + 30;
    presentMonth = presentMonth - 1;
  } else {
    trooperDays = presentDay - birth.trooper[2];
  }

  if (presentMonth < birth.trooper[1]) {
    trooperMonths = presentMonth - birth.trooper[1] + 12;
    presentYear = presentYear - 1;
  } else {
    trooperMonths = presentMonth - birth.trooper[1];
  }

  trooperYears = presentYear - birth.trooper[0];

  const ageTrooper = document.getElementById("agetrooper");
  ageTrooper.innerText = `${trooperYears} Years`;
  const monthTrooper = document.getElementById("month-trooper");
  monthTrooper.innerText = `${trooperMonths} Months & ${trooperDays} Days`;
}

//--------------Torpey--------------------------------

function torpey() {
  const today = new Date();
  presentYear = today.getFullYear();
  presentMonth = today.getMonth() + 1;
  presentDay = today.getDay();

  if (presentDay < birth.torpey[2]) {
    torpeyDays = presentDay - birth.torpey[2] + 30;
    presentMonth = presentMonth - 1;
  } else {
    torpeyDays = presentDay - birth.torpey[2];
  }

  if (presentMonth < birth.torpey[1]) {
    torpeyMonths = presentMonth - birth.torpey[1] + 12;
    presentYear = presentYear - 1;
  } else {
    torpeyMonths = presentMonth - birth.torpey[1];
  }

  torpeyYears = presentYear - birth.torpey[0];

  const ageTorpey = document.getElementById("agetorpey");
  ageTorpey.innerText = `${torpeyYears} Years`;
  const monthTorpey = document.getElementById("month-torpey");
  monthTorpey.innerText = `${torpeyMonths} Months & ${torpeyDays} Days`;
}

//--------------Khoya-------------------------------------

function khoya() {
  const today = new Date();
  presentYear = today.getFullYear();
  presentMonth = today.getMonth() + 1;
  presentDay = today.getDay();

  if (presentDay < birth.khoya[2]) {
    khoyaDays = presentDay - birth.khoya[2] + 30;
    presentMonth = presentMonth - 1;
  } else {
    khoyaDays = presentDay - birth.khoya[2];
  }

  if (presentMonth < birth.khoya[1]) {
    khoyaMonths = presentMonth - birth.khoya[1] + 12;
    presentYear = presentYear - 1;
  } else {
    khoyaMonths = presentMonth - birth.khoya[1];
  }

  khoyaYears = presentYear - birth.khoya[0];
  const ageKhoya = document.getElementById("agekhoya");
  ageKhoya.innerText = `${khoyaYears} Years`;
  const monthKhoya = document.getElementById("month-khoya");
  monthKhoya.innerText = `${khoyaMonths} Months & ${khoyaDays} Days`;
}

//---------------------------------------------------
abby();
trooper();
torpey();
khoya();
