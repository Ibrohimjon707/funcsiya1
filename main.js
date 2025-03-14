// let rang = prompt("Enter body backgroundColor")
// let textrang = prompt("Enter text color")
// let p = document.querySelector("p")

// let textrangi = document.getElementById("nom ").style.color = color;
// elements.textContent = textcolor
//     document.body.style.backgroundColor = color;



// let color = prompt("Rang kiriting (masalan, 'red', 'green', 'blue', ...):");
//     document.body.style.backgroundColor = color;
//     document.body.style.color = color;
//     let color1 = prompt("Matnning rangini kiriting (masalan, red, blue, green):");
//     let rang = document.getElementById("nom").style.color = color;
//     color1.push(rang)
//     console.log(rang);
    


let color = prompt("Rang kiriting (masalan, 'red', 'green', 'blue', ...):");
document.body.style.backgroundColor = color;
document.body.style.color = color;

let color1 = prompt("Matnning rangini kiriting (masalan, red, blue, green):");
let nomElement = document.getElementById("nom"); 
nomElement.style.color = color1; // Matn rangini o'zgartirish

console.log("Matn rangi: ", nomElement.style.color);









