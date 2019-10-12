// Global Variables
var songInput = document.getElementById("songName");
var artistInput = document.getElementById("songArtist");
var setListNum = document.getElementById("setListNum");
var button = document.querySelector(".btn");

// Table Set List Target Variables
var setListOne = document.getElementById("targetListOne");
var setListTwo = document.getElementById("targetListTwo");
var setListThree = document.getElementById("targetListThree");

// Event Listener to add Songs to Set Lists
button.addEventListener('click', addSong, true);

// Add Song Function
function addSong(e) {
  if (songInput.value === '' || artistInput.value === '') {
    errMessage();
  }
  else {
    addSongtoList();
  }
  clearForm();
  e.preventDefault();
};

// Error Message if input field is empty
function errMessage() {
  var errorMsg = document.getElementById("errorMsg");
  errorMsg.innerHTML = "Please Add Song and Artist";
  setTimeout(function () { errorMsg.innerHTML = ""; }, 2000);
};

// Create Table Row & Data
function addSongtoList() {
  var row = document.createElement('tr');
  var col1 = document.createElement('td');
  var col2 = document.createElement('td');
  var song = document.createTextNode(songInput.value);
  var artist = document.createTextNode(artistInput.value);
  col1.appendChild(song);
  col2.appendChild(artist);
  row.appendChild(col1);
  row.appendChild(col2);

  // Choose Table to Add Data
  var list = setListNum.value;
  switch (list) {
    case "1":
      setListOne.appendChild(row);
      break;
    case "2":
      setListTwo.appendChild(row);
      break;
    case "3":
      setListThree.appendChild(row);
      break;
  };
};

// Clear Input Fields
function clearForm() {
  songInput.value = '';
  artistInput.value = '';
  setListNum.value = '1';
};
