let salaireMensuel = 500;
let loyer= salaireMensuel *30/100;
let nourriture = salaireMensuel * 20/100;
let transport = salaireMensuel*10/100;
let autresDepenses = 50+ 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;

let reste = salaireMensuel-totalDepenses;

if (reste>=100){
    console.log("Budget bien géré");
    
}
else{
    console.log("Attention, budget serré");
    
}


let loisirs = salaireMensuel *15/100;

totalDepenses = totalDepenses + loisirs;

reste = salaireMensuel-totalDepenses;

let bonus = salaireMensuel *10/100;
let nouveauSalaire= salaireMensuel+ bonus;

loyer= nouveauSalaire *30/100;
nourriture = nouveauSalaire * 20/100;
transport = nouveauSalaire*10/100;

let depenses = loyer + nourriture + transport + autresDepenses;
    reste = nouveauSalaire-depenses;

if (depenses> nouveauSalaire *90/100){
    console.log("Dépenses trop élevées, réduisez vos charges")
    
}