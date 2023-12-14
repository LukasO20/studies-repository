# Listas parte dois
#cardapio = [] # ou = list ()
#cardapio.append('Batata frita')
#cardapio.append('Coca')
#cliente = []
#cliente.append(cardapio[:])
#cardapio[0] = 'Lucas'
#cardapio[1] = 'comeu a'
#cliente.append((cardapio[:]))
#print(cliente)
#dados = ['Lucas', 20], ['Maria',19], ['Lana', 25], ['Josè', 25]
#for p in dados:
#    print(f'{p[0]} tem {p[1]} anos de idade')
cardápio = []
pedido = []
for c in range(0, 3):
    pedido.append(str(input('Pedido? ')))
    pedido.append(float(input('valor: ')))
    cardápio.append(pedido[:])
    pedido.clear()
for f in cardápio:
    if f[1] >= 8:
        print(f'Esse {f[0]} ultrapassou R$8,00')
    else:
        print(f'Esse {f[0]} está em promoção')
print(f'Você solicitou {cardápio}')

