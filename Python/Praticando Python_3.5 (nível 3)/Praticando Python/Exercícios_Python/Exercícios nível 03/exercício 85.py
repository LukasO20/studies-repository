# Listas com pares e ímpares
box = [[], []]
for item in range(1, 8):
    numero = int(input(f'Digite um {item}° número: '))
    if numero % 2 == 0:
        box[0].append(numero)
    else:
        box[1].append(numero)
print('\33[1;32m#'*50)
box[0].sort()
box[1].sort()
print(f'Valores digitados: {box}')
print(f'Valores ímpares digitados: {box[1]}')
print(f'Valores pares digitados: {box[0]}')
