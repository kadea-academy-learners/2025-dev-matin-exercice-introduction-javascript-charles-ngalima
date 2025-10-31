const maisonFamiliale = 60000000;
const terrains = 40000000;
const liquidites = 20000000;

const patrimoineTotal = maisonFamiliale + terrains + liquidites;

const partPremiereCategorie = patrimoineTotal * 0.75;
const partParEnfantLignee = partPremiereCategorie / 3;

const paul = partParEnfantLignee;
const marie = partParEnfantLignee;

const partAlainLignee = partParEnfantLignee;
const eric = partAlainLignee / 2;
const clair = partAlainLignee / 2;

const partDeuxiemeCategorie = patrimoineTotal * 0.25;
const partParHeritierDeuxiemeCategorie = partDeuxiemeCategorie / 3;

const madameMukuna = partParHeritierDeuxiemeCategorie;
const joseph = partParHeritierDeuxiemeCategorie;
const sarah = partParHeritierDeuxiemeCategorie;

module.exports = {
  patrimoineTotal,
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah
};
