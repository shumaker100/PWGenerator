//generate random password

function generate() {
  //set password length/complexity

  let complexity = document.getElementById("slider").value;

  const values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  let password = "";

  //create for loop to choose characters

  for (let i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //add pw to text box/display
  document.getElementById("display").value = password;

  //add pw to previous
  document.getElementById("lastNums").innerHTML += password + "<br />";
}

//set default length display @25

document.getElementById("length").innerHTML = "Length 25";

//set length base on slider
document.getElementById("slider").oninput = function () {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML =
      "length" + document.getElementById("slider").value;
  } else {
    document.getElementById("length").innerHTML = "length: 1";
  }
};

//function to copy to clipboard

function copyPassword() {
  document.getElementById("display").select();
  document.execCommand("copy");
  alert("Copied!");
}
