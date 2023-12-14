# Lista ordenada sem repetições
print('Dentro da Caixa O.O')
caixa = []
for n in range(0,5):
    numero = int(input('Digite um número para adicionar na caixa: '))
    if n == 0 or numero > caixa[-1]:
        caixa.append(numero)
        print('Esse é o maior valor na caixa.')
    else:
        position = 0
        while position < len(caixa):
            if numero <= caixa[position]:
                caixa.insert(position, numero)
                print(f'Valor adicionada na {position}° posição na caixa')
                break
            position += 1
print('\33[1;32m-='*50)
print(f'Você adicionou os seguintes numeros na sua caixa {caixa}')
print('-='*50)