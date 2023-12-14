# Listas parte 1
#num = [2, 10, 21, 9]
#num [2] = 12
#num.append(50) #Adicionei o 50!
#num.insert(2,15) #O 15 Apareceu depois do elemento '2'
#num.sort(reverse=True) #Inverti Tudo!
#if 6 in num:
#    num.remove(6) #Removi o 10 hehehehe!
#else:
#    print('Não tem o elemento "6" para ser removido!')
#print(f'Essa lista nem {len(num)} elementos!')
#print(num)]

#menu = list()
#menu.append("Pizza")
#menu.append("Bolo")
#menu.append("Pão de Alho")

#for itens, q in enumerate(menu):
#    print(f'Eu encontrei o valor {itens} que é o(a) {q}')
#print('Pedido finalizado!')

a = [1,2,3,4,5,6,7]
b = a[:] #Eu sou uma copia "[:]" #Eu sou uma ligação "b = a"
b[3] = (8)
print(f'Esse é o valor de A {a}')
print(f'Esse é o valor de B {b}')