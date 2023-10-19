const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const root = document.getElementById("root");
  const h1 = document.createElement("h1");
  
  h1.innerText = "FREELANCERS";

  createNestedList = (arr) => {
    const ul = document.createElement("ul");

    for (let i = 0; i < arr.length; i ++){
      const li = document.createElement("li");
      li.textContent = `${arr[i].name}, ${arr[i].age}, ${arr[i].occupation}.`;
      ul.appendChild(li);
    }
    return ul;
  }

  root.appendChild(h1);
  root.appendChild(createNestedList(users));
}

//call the main function
main();
