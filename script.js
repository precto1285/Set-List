// Global Variables
var songInput = document.getElementById("songName");
var artistInput = document.getElementById("songArtist");
var setListNum = document.getElementById("setListNum");
var button = document.querySelector(".btn");

// Table Set List Targets
var setListOne = document.getElementById("targetListOne");
var setListTwo = document.getElementById("targetListTwo");
var setListThree = document.getElementById("targetListThree");

// Event Listener to add Songs to Set List/s
button.addEventListener('click', addSong, true);

// Add Song Function
function addSong(e) {
  console.log(songInput.value);
  console.log(artistInput.value);
  console.log(setListNum.value);
  if (songInput.value === '' || artistInput.value === '') {
    // Error Message if input field is empty
    var errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = "Please Add Song and Artist";
    setTimeout(function () { errorMsg.innerHTML = ""; }, 3000);
  }
  clearForm();
  e.preventDefault();
};

// Clear Input Fields
function clearForm() {
  songInput.value = ' ';
  artistInput.value = ' ';
  setListNum.value = 1;
}