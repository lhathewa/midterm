var wrap = document.body.querySelector(".wrap");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for (var i = 0; i < list.length; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = list[i].name; i++
  
}

  wrap.appendChild(ele)