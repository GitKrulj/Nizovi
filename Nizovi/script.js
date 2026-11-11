var names = ['John', 'Jane', 'Bob',, 'Mike'];

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);  
}

console.warn("-------------");
// 2. Dodajte svoje ime na kraj niza.
names[names.length]="Gita";

// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.

for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
    if(names[index].trim()==="Jane"){
        break;
    }
}