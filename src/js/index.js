lightSwitch = document.querySelector("#lightSwitch");
lightBeam = document.getElementById("lightBeam");
lightSwitchInner = document.querySelector("#lightSwitchInner");
lightSwitchShadow = document.querySelector("#lightSwitchShadow");
lightBulb = document.querySelector("#lightBulb");

lightSwitch.addEventListener("click", switchLight);

function switchLight() {
  console.log("got pressed");
  if (
    lightBeam.style.visibility === "visible" ||
    lightBeam.style.visibility === ""
  ) {
    lightBeam.style.visibility = "hidden";
    lightSwitchShadow.style.transform = "translateY(-24px)";
    lightBulb.style.opacity = "0.5";
  } else {
    lightBeam.style.visibility = "visible";
    lightSwitchShadow.style.transform = "translateY(0px)";
    lightBulb.style.opacity = "1";
  }
}
