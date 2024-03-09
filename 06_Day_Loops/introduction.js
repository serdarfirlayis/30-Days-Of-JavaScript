for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}

// We use "for of loop" for arrays. Indexes are not used.
const names = ['Serdar', 'Ahmet', 'Mehmet', 'Ali'];
for (const name of names) {
    console.log(`name: ${name}`);
}

for(let i = 0; i < names.length; i++){
    if (names[i] === 'Ali') {
        console.log(`name is found: ${names[i]}`);
        break;
    }
    console.log(`name: ${names[i]}`);
}