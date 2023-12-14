# Lista de Preços com uma Tupla
print('\33[1;34m='*15)
print('\33[1;33mLower Prices!')
print('\33[1;34m='*15)
armazenamento = ('Pão', 0.35, 'Smart TV', 1350, 'Xbox Series X', 3800,
                 'Xbox Series S', 1890, 'Filé', 33,'Cat Premium', 45,
                 'Microsoft Windows 11 Key', 60,'Assinatura HBO Max', 8,
                 'Zenfone 8', 1880,'Cheetos', 1)
print('\33[0;32m='*60)
for produto in range(0,len(armazenamento)):
    if produto % 2 == 0:
        print(f'{armazenamento[produto]:-<30}', end='')
    else:
        print(f'R${armazenamento[produto]:.2f}')
print('\33[0;32m='*60)