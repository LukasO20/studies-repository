#Estrutura de Repetição While
n = s = 0
while True:
    n = int(input('\033[1;34mDigite um número: '))
    if n == 999:
        break
    s += n
print(f'O total de números somados e {s}')
