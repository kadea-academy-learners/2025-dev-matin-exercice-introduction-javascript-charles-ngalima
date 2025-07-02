const maisonFamiliale = 60000000;
const terrains = 40000000;
const liquidites = 20000000;

const patrimoineTotal = maisonFamiliale + terrains + liquidites;
console.log(`Patrimoine total de Monsieur Jean MUKUNA : ${patrimoineTotal.toLocaleString()} CDF\n`);

const partPremiereCategorie = patrimoineTotal * 0.75;
console.log(`Part de la première catégorie (enfants) : ${partPremiereCategorie.toLocaleString()} CDF`);


const partParEnfantLignee = partPremiereCategorie / 3;
console.log(`  - Part individuelle par enfant (Paul, Marie) ou lignée (Alain) : ${partParEnfantLignee.toLocaleString()} CDF`);

const partPaul = partParEnfantLignee;
const partMarie = partParEnfantLignee;

// Part d'Alain (Eric et Claire)
const partAlainLignee = partParEnfantLignee;
const partEric = partAlainLignee / 2;
const partClaire = partAlainLignee / 2;

console.log(`  - Part de Paul : ${partPaul.toLocaleString()} CDF`);
console.log(`  - Part de Marie : ${partMarie.toLocaleString()} CDF`);
console.log(`  - Part d'Éric (fils d'Alain) : ${partEric.toLocaleString()} CDF`);
console.log(`  - Part de Claire (fille d'Alain) : ${partClaire.toLocaleString()} CDF\n`);

const partDeuxiemeCategorie = patrimoineTotal * 0.25;
console.log(`Part de la deuxième catégorie (conjoint, frères/sœurs) : ${partDeuxiemeCategorie.toLocaleString()} CDF`);

const partParHeritierDeuxiemeCategorie = partDeuxiemeCategorie / 3;

const partMadameMukuna = partParHeritierDeuxiemeCategorie;
const partJoseph = partParHeritierDeuxiemeCategorie;
const partSarah = partParHeritierDeuxiemeCategorie;

console.log(`  - Part de Madame MUKUNA : ${partMadameMukuna.toLocaleString()} CDF`);
console.log(`  - Part de Joseph : ${partJoseph.toLocaleString()} CDF`);
console.log(`  - Part de Sarah : ${partSarah.toLocaleString()} CDF`);

console.log("\n--- Récapitulatif de l'héritage par héritier ---");
console.log(`Paul : ${partPaul.toLocaleString()} CDF`);
console.log(`Marie : ${partMarie.toLocaleString()} CDF`);
console.log(`Éric : ${partEric.toLocaleString()} CDF`);
console.log(`Claire : ${partClaire.toLocaleString()} CDF`);
console.log(`Madame MUKUNA : ${partMadameMukuna.toLocaleString()} CDF`);
console.log(`Joseph : ${partJoseph.toLocaleString()} CDF`);
console.log(`Sarah : ${partSarah.toLocaleString()} CDF`);

const verificationTotal = partPaul + partMarie + partEric + partClaire + partMadameMukuna + partJoseph + partSarah;
console.log(`\nVérification du total distribué : ${verificationTotal.toLocaleString()} CDF (devrait être ${patrimoineTotal.toLocaleString()} CDF)`);