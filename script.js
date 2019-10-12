// Global Variables
var songInput = document.getElementById("songName");
var artistInput = document.getElementById("songArtist");
var setListNum = document.getElementById("setListNum");
var button = document.querySelector(".btn");

// Table Set List Targets
var setListOne = document.getElementById("targetListOne");
var setListTwo = document.getElementById("targetListTwo");
var setListThree = document.getElementById("targetListThree");

button.addEventListener('click', addSong, true);

function addSong(e) {
  console.log(songInput.value);
  console.log(artistInput.value);
  console.log(setListNum.value);
  clearForm();
  e.preventDefault();
};

function clearForm() {
  songInput.value = ' ';
  artistInput.value = ' ';
  setListNum.value = 1;
}