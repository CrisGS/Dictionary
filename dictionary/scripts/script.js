function addWords() {
  let myDiv = document.createElement("div");
  myDiv.id = "myWords";
  let word = document.getElementById("myWord").value;
  myDiv.innerHTML = "<li>"+ word +"</li>";
  document.body.appendChild(myDiv);
}