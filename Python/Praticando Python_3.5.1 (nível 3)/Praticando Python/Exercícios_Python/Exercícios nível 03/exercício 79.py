# Valores únicos em uma Lista
box = list()
while True:
    numeros = int(input('Digite um número: '))
    if numeros not in box:
        box.append(numeros)
        print('Prontinho, acabei de adicionar!')
    else:
        print('Você já adicionou esse número!')
    quiz = str(input('Deseja Conituar [S]Sim [N]Não? ')).strip().upper()
    if quiz == 'N':
        break
print('¢'*50)
box.sort()
print(f'Não vou adicionar números repetidos.')
print(f'Finalizado! Você adicionou os números {box}')
print('¢'*50)
