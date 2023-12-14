# Dicionários
#comida = {'Doces': 'Chocolate', 'Salgados': 'Pão de queijo'}
#comida['Bebidas'] = 'Suco de Maracuja'
#for k, v in comida.items():
#    print(f'{k} _ {v}')

#brasil = []
#estado = {'UF': 'SP', 'estado': 'São Paulo'}
#estado1 = {'UF': 'RJ', 'estado': 'Rio de Janeiro'}
#brasil.append(estado)
#brasil.append(estado1)
#print(brasil)

estado = {}
brasil = []
for s in range(0, 3):
    estado['UF'] = str(input('Digite a sigla UF: '))
    estado['Nome'] = str(input('Digite o nome do estado: '))
    brasil.append(estado.copy())
for e in brasil:
    for v in e.values():
        print(v, end=' ')
    print()