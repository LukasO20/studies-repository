# Boletim e listas!
import time
boletim = []
while True:
    aluno = str(input('Nome do aluno: '))
    n1 = float(input('Digite sua nota N1: '))
    n2 = float(input('Agora digite sua nota N2: '))
    media = (n1 + n2) / 2
    boletim.append([aluno, [n1 , n2], media])
    quiz = str(input('Deseja adicionar mais um aluno? [S]Sim [N]Não '))
    if quiz in 'Nn':
        break
print(f'\33[0;34m{"CÓD":<6}{"Nome":<5}{"Média":>8} ')
for i, info in enumerate(boletim):
    print(f'{i:<6}{info[0]:<5}{info[2]:>8}')
while True:
    print('\33[1;32m-='*35)
    print('\33[0;32m99 Interrompe o processo!')
    quiz1 = int(input(f'\33[0;34mDeseja visualizar a nota individual de um aluno? Digite o COD: '))
    if quiz1 == 99:
        time.sleep(1)
        print('Obrigado :)')
        break
    if quiz1 <= len(boletim) - 1:
        print(f'O aluno(a) {boletim[quiz1][0]}. Possui as notas: {boletim[quiz1][1]}')
