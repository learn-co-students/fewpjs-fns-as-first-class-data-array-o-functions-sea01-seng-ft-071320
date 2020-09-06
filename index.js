function wakeDog(dogName = "Byron", dogBreed = "poodle") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(dogName = "Boo Radley", dogBreed = "Pibble") {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(name, breed) {
  return `Walk to the park with ${name} the ${breed}`;
}

function throwFrisbee(name, breed) {
  return `Throw the frisbee for ${name} the ${breed}`;
}

function walkHome(name, breed) {
  return `Walk home with ${name} the ${breed}`;
}

function unleashDog(name, breed) {
  return `Unleash ${name} the ${breed}`;
}
const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];
console.log(routine);

function exerciseDog(name, breed) {
  const Doginarray = [];
  routine.forEach((exercise) => Doginarray.push(exercise(name, breed)));
  return Doginarray;
}
