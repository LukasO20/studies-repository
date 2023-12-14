# Análise de dados (lista)
dados = []
info = []
menor = maior = 0
while True:
    info.append(str(input('Digite seu nome: ')))
    info.append(float(input('Digite seu peso: KG ')))
    if len(dados) == 0:
        menor = maior = info[1]
    else:
        if info[1] > maior:
            maior = info[1]
        if info[1] < menor:
            menor = info[1]
    dados.append(info[:])
    info.clear()
    quiz = str(input('Deseja adicionar mais pessoas? [S]Sim [N]Não '))
    if quiz in 'Nn':
        break
print(f'Foram cadastradas {len(dados)} pessoas')
print(f'A pessoa de maior peso é {maior}Kg. Pessoas ', end='')
for p in dados:
    if p[1] == maior:
        print(f'({p[0]}) ', end='')
print()
print(f'A pessoa de menor peso é {menor}kg. Pessoas ', end='')
for p in dados:
    if p[1] == menor:
        print(f'({p[0]}) ', end='')
print()