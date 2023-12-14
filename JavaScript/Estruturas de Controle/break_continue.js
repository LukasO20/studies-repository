const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if(x == 5) break //Desvia o fluxo da aplicação em si (no caso o fluxo sairá desse bloco 'IF')
    console.log(`x[${x}] = ${nums[x]}`)
}

for (let y in nums){
    if(y == 5) continue //Assim como 'break' desvia o fluxo da aplicação em si (porém continua para o próximo bloco, caso exista mais de um 'IF' por exemplo...)
    console.log(`y[${y}] = ${nums[y]}`)
}