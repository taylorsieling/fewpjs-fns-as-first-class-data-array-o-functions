function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed) {
    let arrayOfDogs = []
    for (const dog of routine){
        arrayOfDogs.push(dog(dogName, dogBreed))
    }
    return arrayOfDogs
}