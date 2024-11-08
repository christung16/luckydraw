function draw() {
  luckyNumber = document.getElementById("lucky-number")
  randomnumber = Math.random()
  luckyNumber.innerHTML = Math.floor(randomnumber*100+1)
  console.log("lucky-number: ",randomnumber)
}


/* function draw() {
	luckyNumber = document.getElementById("lucky-number");
  luckyNumber.innerHTML = Math.floor(Math.random() * 100 + 1);

} */
