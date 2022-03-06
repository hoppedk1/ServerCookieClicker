
let url = "http://localhost:3001"; 


  function LoadHighScore() { // Her har vi selveste kode delen hvor det skal være sådan at man vil kunne få scoren til at blive til mængden af cookies spilleren har.
    fetch(url + "/highscore/" + prompt("Name:"))
    .then(response => response.json()) // Her modtager den det orginale fetch, og bagefter laver det om ved hjælp af JSON.
    //.then(data => alert(JSON.stringify(data))); // denne del her er hvad der skal ændres til at vi rent faktisk får sent vores spilleres data aka score videre til profilen.
    .then(data => alert(JSON.stringify(data))); // Her laver den en "stringified" version af data'en, hvilket vi ikke kan hive direkte ud af, hvilket er et problem
    alert("Her skulle du kunne få din score, hvor du så bagefter vil kunne få det til blive sendt videre til din rigtige cookie amount")
// Psudocode vi skal få lavet.
// ScoreIntoGame(){ // En funktion som ligger enten i her, eller et andet sted som vil sende vores score ind i cookie clicker
  // data(score) = num; // Her ville vi så kalde selveste score delen af vores JSON data ud til at blive til det num, man har i vores cookie clicker spil.
//   } Ting som jeg tænkte kan være nødvendigt er at gøre brug af JSON.parse, men kunne ikke rigtigt få den del til at virke.
    } // Upgrades nåede vi aldrig at komme hen og begynde at arbejde på, da det eneste vi endeligt fokuseret på var at lave selveste tallet af cookies hen. Dog ville det nok også være muligt at gemme mængden af cookies du fik per click osv.

function insertHighscore() { // Her har vi funktionen hvor spilleren kan indsætte deres highscore, hvilket vi skal bruge til at kalde den score tilbage når personen vil load sin score.

  let data = {
    name: prompt("Name:"),
    score: prompt("Score:")
  }

  fetch('./highscore', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Highscore inserted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function getHighscore() {
  fetch(url + "/highscore/" + prompt("Name:"))
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)));
}

function getHighscores() { // Her ser man alle highscores, sammen med deres id og navn, Planen er at bruge navnet og få deres score igennem den.
  fetch(url + "/highscores")
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)));
}

function deleteHighscore() {

  let data = {
    name: prompt("Name:")
  }

  fetch('./highscore', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Highscore deleted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function updateHighscore() {

  let data = {
    name: prompt("Name:"),
    score: prompt("Score:")
  }

  fetch('./highscore', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Highscore updated:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function signUp() {

  let data = {
    username: prompt("Username:"),
    password: prompt("Password:")
  }

  fetch('./user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('User inserted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// login
function logIn() {

  let body = {
    username: prompt("Username:"),
    password: prompt("Password:")
  }

  fetch('./user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if(data.loginWasSuccessful){
      sessionStorage.setItem("username", body.username);
      sessionStorage.setItem("password", body.password);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// delete user
async function deleteUser() {

  let data = {
    username: sessionStorage.getItem("username"),
    password: sessionStorage.getItem("password")
  }

  fetch('./user', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}







function insertCoins() {

  let data = {
    name: prompt("Name:"),
    score: prompt("Coins:")
  }

  fetch('./Coinsscore', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Coinsscore inserted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function getPlayerCoins() {
  fetch(url + "/Coinsscore/" + prompt("Name:"))
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)));
}

function getCoinsAllPLayers() {
  fetch(url + "/Coinsscore")
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)));
}

function deleteCoins() {

  let data = {
    name: prompt("Name:")
  }

  fetch('./Coinsscore', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Coinsscore deleted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function updateCoins() {

  let data = {
    name: prompt("Name:"),
    score: prompt("Coins:")
  }

  fetch('./Coinsscore', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Coinsscore updated:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}