lightSwitch = document.getElementById("lightSwitch");
lightBeam = document.getElementById("lightBeam");

lightSwitch.addEventListener("click", switchLight);

function switchLight() {
  document.getElementById;
  if (lightBeam.style.visibility === "visible") {
    lightBeam.style.visibility = "hidden";
  } else {
    lightBeam.style.visibility = "visible";
  }
}
