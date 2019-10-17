let one = [1,2,3];
let two = 2;

let obj = { one, two };

console.log(obj.one);

one[0] = 3;
console.log(obj.one);



let testNaN = () => {
    if(NaN){
        return "True";
    }else{
        return "Falsy";
    }
}

console.log(testNaN());

function movies(name, releaseYear, genre, ratings) {
    console.log(this);
    this.name = name;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.ratings = ratings;
    this.watch = () => {
      console.log("Watch Online");
    };
  }

  console.log(typeof movies)
  
  let DPS = new movies("Dead Poets Society", 1989, ["Drama", "Teen"], {
    IMDb: "8.1 / 10",
    Metacritic: "79%"
  });
  console.log(DPS);
  console.log(DPS instanceof movies);
  console.log(typeof movies)
  console.log(typeof DPS)