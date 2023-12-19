// Uma factory pode criaruma instancia nova
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor ++
        }
    }
}