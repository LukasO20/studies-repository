# Dicionário (Python)
info = {}
boletim = []
while True:
    info['Aluno'] = str(input('Digite o nome do Aluno: '))
    info['pt'] = float(input('Digite a nota de Português: N '))
    info['mt'] = float(input('Digite a nota de Matemática: N '))
    info['media'] = (info['pt'] + info['mt']) / 2
    if info['media'] >= 6:
        info['st'] = 'Aprovado(a)'
    elif info['media'] == 5 or 5.5:
        info['st'] = 'Recuperação'
    else:
        info['st'] = 'Reprovado(a)'
    boletim.append(info.copy())
    pergunta = str(input('Deseja adicionar mais um aluno? [S]Sim [N]Não: '))
    if pergunta in 'Nn':
        break
for info in boletim:
    print(f'\33[0;34mAluno(a): {info["Aluno"]}')
    print(f'Notas: Português {info["pt"]} │ Matemática {info["mt"]} │ Média {info["media"]}')
    print(f'Situação: {info["st"]}')
    print('-'*30)
    print()