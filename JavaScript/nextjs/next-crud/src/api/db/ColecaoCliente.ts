import { 
    collection, 
    getDocs, 
    addDoc, 
    doc, 
    setDoc, 
    deleteDoc, 
    getDoc, 
    Firestore, 
    QueryDocumentSnapshot, 
    SnapshotOptions 
  } from 'firebase/firestore'
  import { db } from '@/src/api/config'
  
  import ClienteRepositorio from '../../core/ClienteRepositorio'
  import Cliente from '../../core/Cliente'
  
  export default class ColecaoCliente implements ClienteRepositorio {
    #conversor = {
      toFirestore(cliente: Cliente) {
        return {
          nome: cliente.nome,
          idade: cliente.idade,
        }
      },
  
      fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
        const dados = snapshot.data(options)
        return new Cliente(dados.nome, dados.idade, snapshot.id)
      }
    }
  
    async salvar(cliente: Cliente): Promise<Cliente> {
      if (cliente?.id) {
        const ref = doc(db, 'clientes', cliente.id).withConverter(this.#conversor)
        await setDoc(ref, cliente)
        return cliente
      } else {
        const docRef = await addDoc(collection(db, 'clientes').withConverter(this.#conversor), cliente)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          return docSnap.data()
        } else {
          throw new Error('Erro ao salvar o cliente!')
        }
      }
    }
  
    async excluir(cliente: Cliente): Promise<void> {
      if (cliente?.id) {
        await deleteDoc(doc(db, 'clientes', cliente.id))
      }
    }
  
    async obterDados(): Promise<Cliente[]> {
      const querySnapshot = await getDocs(collection(db, 'clientes').withConverter(this.#conversor))
      return querySnapshot.docs.map((doc) => doc.data()) ?? []
    }
  }
  