# Grupo de Maioridade
from datetime import date
print('Estatistica de Idade')
hoje = date.today().year
maioridade = 0
menoridade = 0
for eight in range(1,8):
    nasci = int(input('{}° Pessoa. Digite seu ano de nascimento: '.format(eight)))
    idade = hoje - nasci
    if idade >= 18:
        maioridade += 1
    else:  
        menoridade += 1
print('Existem {} pessoas maiores de idade'.format(maioridade))
print('E também {} pessoas menores de idade :)'.format (menoridade))