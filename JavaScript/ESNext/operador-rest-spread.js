// Operador ... rest(juntar)/spread(espalhar)
// Usar rest com parâmetro de função

// Usar spread com objeto
const funcionario = {nome: 'Mariana', salario: 4589.85}
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar spread com array
const grupo = ['Mariana', 'Juana', 'Lucas', 'Ruan', 'Pedro']
const cloneGrupo = ['Cleber', ...grupo, 'Jefferson']
console.log(cloneGrupo)