boxnumeros = []
maior = menor = 0
print('\33[0;34mDentro da Caixa')
for v in range(0,5):
    boxnumeros.append(int(input(f'Digite um valor para conferir sua {v}° posição: ')))
    if v == 0:
        maior = menor = boxnumeros[v]
    else:
        if boxnumeros[v] > maior:
            maior = boxnumeros[v]
        if boxnumeros[v] < menor:
            menor = boxnumeros[v]
print('\33[1;32m='*50)
print(f'Sua caixa possui os números {boxnumeros}')
print(f'O maior valor inserido foi o número {maior} na posição:', end=' ')
for mn, v in enumerate(boxnumeros):
    if v == maior:
        print(f'{mn}°', end=' ')
print()
print(f'O menor valor inserido foi o número {menor} na posição:', end=' ')
for mn, v in enumerate(boxnumeros):
    if v == menor:
        print(f'{mn}°', end=' ')
print()
print('\33[1;32m='*50)