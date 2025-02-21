import Cliente from "@/src/core/Cliente";
import ClienteRepositorio from "@/src/core/ClienteRepositorio";
import firebase from '@/src/api/config'

export default class ColecaoCliente implements ClienteRepositorio {
 
  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
        const dados = snapshot.data(options)
        return new Cliente(dados.nome, dados.idade, snapshot.id)
    }
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    if(cliente?.id) {
      await this.colecao().doc(cliente.id).set(cliente)
      return cliente
    } else {
      const docRef = await this.colecao().add(cliente)
      const doc = await docRef.get()
      const clienteSave = doc.data()

      if(!clienteSave) { throw new Error('Error to save a client! Document not found!') }
      return clienteSave
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    return this.colecao().doc(cliente.id ?? undefined).delete()
  }

  async obterDados(): Promise<Cliente[]> {
    const query = await this.colecao().get()
    return query.docs.map(doc => doc.data()) ?? []
  }

  private colecao() {
    return firebase.firestore()
    .collection('clientes')
    .withConverter(this.#conversor)
  }
}