function generate() {
  let input = document.getElementById("input").value.toLowerCase();
  let output = "";

  if (input.includes("church")) {
    output = "Long skirt + blouse + low heels";
  } else if (input.includes("party")) {
    output = "Bodycon dress + heels";
  } else {
    output = "Casual jeans + t-shirt";
  }

  document.getElementById("output").innerText = output;
}