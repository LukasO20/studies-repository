# Dicionários e Listas
dados = {}
info = []
pessoas = media = 0
while True:
    dados.clear()
    dados['nome'] = str(input('Digite seu nome: '))
    while True:
        dados['sexo'] = str(input('Sexo? [M] masculino [F] Feminino: ')).upper()[0]
        if dados['sexo'] in 'MF':
            break
        print('Por favor. Digite M ou F.')
    dados['idade'] = int(input(f'Digite a idade do(a) {dados["nome"]}: '))
    pessoas += dados['idade']
    info.append(dados.copy())
    while True:
        pergunta = str(input('Deseja adicionar mais uma pessoa? [S] Sim [N] Não: ')).upper()[0]
        if pergunta in 'SN':
            break
        print('Resposta inválida. Digite S ou N')
    if pergunta in 'Nn':
        break
print('\33[0;33m°*'*30)
print(f'Foram cadastradas {len(info)} pessoas')
media = pessoas / len(info)
print(f'A média entre as idades informadas é {media:.2f} anos')
print('Mulheres cadastradas | Nomes: ', end='')
for mulher in info:
    if mulher['sexo'] in 'Ff':
        print(f'{mulher["nome"]}| ', end='')
print()
for polder in info:
    if polder['idade'] >= media:
        print(f'-- Pessoas acima da média --')
        for k, v in polder.items():
            print(f'{k} = {v}')
print('\33[0;33m°*'*30)
print(f'- Cadastro Finalizado -')