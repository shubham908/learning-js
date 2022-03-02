const greet = (data) => {
  console.log(`Please welcome, ${data.name}.`);
  if (data.gender === "M") {
    console.log(`He is a ${data.profession} by profession.`);
  } else {
    console.log(`She is a ${data.profession} by profession.`);
  }
  if ("language" in data) {
    console.log(`Favourite language is ${data.language}.`);
  } else {
    console.log("No favourite language.");
  }
};

let data = {
  name: "Shubham",
  gender: "M",
  profession: "Shubham Kumar",
  language: "Java",
};

greet(data);
