# Dicionário aprimorado (cadastro de jogador de futebol)
import time
placar = {}
painel = []
placartime = []
while True:
    placar.clear()
    placar['jogador'] = str(input('Digite o nome do jogador: '))
    partida = int(input(f'Quantas partidas foram jogadas pelo jogador(a) {placar["jogador"]}? '))
    painel.clear()
    for qnt in range(0, partida):
        painel.append(int(input(f'Números de gols da {qnt+1}° partida pelo jogador(a) {placar["jogador"]}: ')))
    placar['gols'] = painel[:]
    placar['Total de gols'] = sum(painel)
    placartime.append(placar.copy())
    while True:
        quiz = str(input('Deseja adicionar mais jogadores? [S]Sim [N]Não: ')).strip().upper()[0]
        if quiz in 'SN':
            break
        print('Resposta inválida. Por favor, digite S ou N!')
    if quiz in 'N':
        break
print('\33[0;32m=_'*28)
print('N', end='')
for i in placar.keys():
    print(f'     {i:<14}', end='')
print()
for k, v in enumerate(placartime):
    print(f'N:{k:>5} ', end='')
    for jg in v.values():
        print(f' {str(jg):<14} ', end='')
    print()
print('=_'*28)
while True:
    print('999 para sair.')
    pesquisa = int(input('Digite o jogador(a) na qual deseja visualizar os dados: [N]'))
    if pesquisa == 999:
        break
    if pesquisa >= len(placartime):
        print('Erro o código N informado não existe! Tente novamente.')
    else:
        print(f'Levantamento do jogador(a) {placartime[pesquisa]["jogador"]}:')
        for i, j in enumerate(placartime[pesquisa]['gols']):
            print(f'No {i+1}° jogo foram realizados {j} gols.')
        print('=_' * 28)
print(f'Finalizando seu acesso...')
time.sleep(2)