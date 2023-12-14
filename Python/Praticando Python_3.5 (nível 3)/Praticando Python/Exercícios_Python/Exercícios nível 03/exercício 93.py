# Cadastro de Jogador de Futebol
print('Confira agora os melhores jogadores.')
placar = {}
partidas = []
placar['jogador'] = str(input('Digite o nome do jogador(a): '))
jogos = int(input(f'Número de partidas realizadas pelo jogador(a) {placar["jogador"]}: '))
for pontos in range(0, jogos):
    partidas.append(int(input(f'Números de gols realizados na {pontos+1}° partida: ')))
placar['gols'] = partidas[:]
placar['Total de gols'] = sum(partidas)
print('=_'*36)
print('Simplificado')
print(f'Placar: {placar}')
for k, v in placar.items():
    print(f'{k} = {v}')
print('=_'*36)
print('Informações detalhadas')
print(f'O jogador: {placar["jogador"]} realizou um total de {len(placar["gols"])} partidas.')
print('---- Partidas ----')
for i, v in enumerate(placar['gols']):
    print(f'Na {i+1}° partida foram realizdos {v} gols.')
print(f'Total de gols realizados: {placar["Total de gols"]}')