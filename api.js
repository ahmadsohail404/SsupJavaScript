fetch('https://api.chucknorris.io/jokes/random')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    var joke = data.value;
    console.log("Joke is: ", joke);
  })
  .catch();