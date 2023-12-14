# Matriz em Python
import time
print('Preenchendo a Matriz!')
matriz = []
numero = []
for v in range(0, 9):
    numero.append(int(input(f'Digite o {v}° valor pra inserir na coluna: ')))
    matriz.append(numero[:])
    numero.clear()
print('\33[1;33mMatriz preenchida com sucesso!')
time.sleep(2)
print(f'''[{matriz[0]}], [{matriz[1]}], [{matriz[2]}]
[{matriz[3]}], [{matriz[4]}], [{matriz[5]}]
[{matriz[6]}], [{matriz[7]}], [{matriz[8]}]''')