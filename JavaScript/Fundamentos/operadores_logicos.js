function compras(t1, t2){
    const comprarSorvete = t1 || t2
    const comprarTV50 = t1 && t2
    const compratTV32 = t1 != t2
    const saudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTV50, compratTV32, saudavel} //chave e valor estão sendo criado implicitamente
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))