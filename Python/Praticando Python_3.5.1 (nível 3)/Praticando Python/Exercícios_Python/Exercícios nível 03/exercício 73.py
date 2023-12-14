# Times de futebol! TUPLAS
print('\33[1;34mBrasileirão! Seu time está ganhando?')
classificados = ('Palmeiras', 'Corinthians', 'Atlético-MG', 'Fluminense', 'Athletico-PR',
                 'Internacional', 'São Paulo', 'Santos', 'Flamengo', 'Botafogo', 'Bragantino',
                 'Goiás', 'Cuibá', 'Coritiba', 'América-MG', 'Avaí', 'Ceará SC', 'Atlético-GO',
                 'Juventude', 'Fortaleza')
print('\33[1;33m_____________Brasileirão série A____________')
print(f'''\33[1;34mOs Cinco primeiros times:
{classificados[0:5]}''')
print('='*100)
print(f'''\33[1;31mOs últimos 4 colocados:
{classificados[16:20]}''')
print('='*100)
print(f'''\33[1;34mOrdem Alfabética:
{sorted(classificados)}''')
print(f'\33[1;32m{classificados[0]} \33[1;34mestá em 1° lugar!')
print('='*100)
