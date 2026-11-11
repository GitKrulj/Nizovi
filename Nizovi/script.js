var names = ['John', 'Jane', 'Bob',, 'Mike'];

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);  
}

console.warn("-------------");
// 2. Dodajte svoje ime na kraj niza.
names[names.length]="Gita";
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);  
}