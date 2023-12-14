const endereco = "Code_JavaAvenue"

console.log(endereco.charAt(4))
console.log(endereco.charAt(5))
console.log(endereco.charCodeAt(3))
console.log(endereco.indexOf('6'))

console.log(endereco.substring(1))
console.log(endereco.substring(0, 6))

console.log('Endereço: '.concat(endereco.concat(' SP.'))) // <-- Função para concatenar (substitui o operário +)
console.log(endereco.replace('_', '-'))

console.log('Lucas,Pedro,Juliana'.split(','))