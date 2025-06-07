
const radios = [
  {
    name: "Radio ADN",
    url: "https://24473.live.streamtheworld.com/ADN.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Radio_ADN_logo_2016.svg/200px-Radio_ADN_logo_2016.svg.png"
  },
  {
    name: "Radio Bio-Bio",
    url: "https://unlimited2-cl.dps.live/biobiolive/bio-bio.aac",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo_Radio_Bio_Bio.svg/200px-Logo_Radio_Bio_Bio.svg.png"
  },
  {
    name: "Radio Cooperativa",
    url: "https://radios.cooperativa.cl/streaming/audio/mp3/cooperativa.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Radio_Cooperativa_logo.svg/200px-Radio_Cooperativa_logo.svg.png"
  }
];

const container = document.getElementById("radio-list");

radios.forEach(radio => {
  const radioDiv = document.createElement("div");
  radioDiv.className = "radio";

  const logo = document.createElement("img");
  logo.src = radio.logo;
  logo.alt = radio.name;

  const name = document.createElement("span");
  name.textContent = radio.name;

  const button = document.createElement("button");
  button.textContent = "▶️";
  let audio = new Audio(radio.url);

  button.onclick = () => {
    if (audio.paused) {
      audio.play();
      button.textContent = "⏸️";
    } else {
      audio.pause();
      button.textContent = "▶️";
    }
  };

  radioDiv.appendChild(logo);
  radioDiv.appendChild(name);
  radioDiv.appendChild(button);
  container.appendChild(radioDiv);
});
