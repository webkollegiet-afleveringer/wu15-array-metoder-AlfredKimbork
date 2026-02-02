let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// --- Løs opgaverne herunder --- 

// -- opgave 1 --

let newNumbers = []
numbersArray.forEach(num => {
    if(num > 20) newNumbers.push(num)
})
console.log("Opgave 1", newNumbers)

// -- opgave 2 --

catsArray.push("Sniffles")

console.log("Opgave 2", catsArray)

// -- opgave 3 --

console.log("Opgave 3a", dogsArray.includes("Trixie"));
console.log("Opgave 3b", dogsArray.includes("Baxter"));

// -- opgave 4 --

console.log("Opgave 4a", catsArray.includes("Bagheera") ? catsArray[catsArray.indexOf("Bagheera")] : undefined);
console.log("Opgave 4b", catsArray.includes("Salem") ? catsArray[catsArray.indexOf("Salem")] : undefined);

// -- opgave 5 --
