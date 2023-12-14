# Valores em várias listas
print('De caixa para caixa...')
box = []
boxpar = []
boximpar = []
while True:
    numero = (int(input('Digite um número para adicionar na caixa: ')))
    box.append(numero)
    quiz = str(input('Deseja adicionar mais números? [S] Sim [N] Não: ')).strip().upper()
    if quiz in 'N' or quiz in 'NÃO':
        break
for i, valores in enumerate(box):
    if valores % 2 == 0:
        boxpar.append(valores)
    else:
        boximpar.append(valores)
print('\33[1;34m*'*40)
print(f'Os valores completos: {box}')
print(f'Os valores pares são: {boxpar}')
print(f'Os valores impares: {boximpar}')