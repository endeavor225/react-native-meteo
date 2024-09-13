export function nowToHHMM() {
    const d = new Date();
    return `${d.getHours()}:${d
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
}

/* 
    Ce code utilise la méthode padStart() sur une chaîne pour s’assurer qu’elle a une longueur d’au moins 2 caractères.
    Si la chaîne est plus courte que 2 caractères, la méthode ajoutera des zéros ("0") au début de la chaîne.
*/

export const DAYS = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

export function dateToDDMM(date) {
  return `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;
}