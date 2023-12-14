# Matriz Aprimorada
matriz = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
soma = coluna3 = maior = 0
for l in range(0, 3):
    for c in range(0, 3):
        matriz[l][c] = int(input(f'Digite um valor para a {c}° coluna e {l}° linha: '))
        if matriz[l][c] % 2 == 0:
            soma += matriz[l][c]
        if matriz[l][c] in matriz[1]:
            if matriz[l][c] == 0:
                maior = matriz[l][c]
            else:
                if matriz[l][c] > maior:
                    maior = matriz[l][c]
print('\33[1;34m*'*27)
for l in range(0, 3):
    for c in range(0, 3):
        print(f'[{matriz[l][c]:^7}]', end='')
    print()
print('\33[1;34m*'*27)
print(f'A soma dos valores pares é {soma}')
for l in range(0,3):
    coluna3 += matriz[l][2]
print(f'A soma dos números da terceira coluna: {coluna3}')
print(f'O maior valor da 2° linha é: {maior}')