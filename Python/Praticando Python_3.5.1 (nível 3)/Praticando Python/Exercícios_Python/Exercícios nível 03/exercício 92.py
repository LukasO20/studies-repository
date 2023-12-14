# Cadastro da Carteira de Trabalho
from datetime import datetime
print('Digite as informações a seguir!')
info = {}
fgts = []
info['nome'] = str(input('Digite seu nome: '))
datanasc = int(input('Digite seu ano de nascimento: '))
info['idade'] = datetime.now().year - datanasc
info['ctps'] = float(input('Número da Carteira de Trabalho ((0) não tem). Ex: *****.**: '))
fgts.append(info.copy())
if info['ctps'] != 0:
    info['datework'] = int(input('Digite o último ano de contratação: '))
    info['saldo'] = float(input('Digite seu último salário: R$'))
    fgts.append(info.copy())
    aposentadoria = datanasc + 45 - datetime.now().year
    print()
    print('\33[0;32m==' *32)
    print(f'CTPS: {info["ctps"]} | Ano de contratação {info["datework"]} | Salário (recente): {info["saldo"]}')
    print((f'Apto para a aposentadoria após: {aposentadoria} anos'))
print()
print('=='*32)
print(f'Contribuinte: {info["nome"]} | {info["idade"]} anos | nascimento: {datanasc}')
print('=='*32)
print('Dados simplificados')
for k, v in info.items():
    print(f'Dado: {k} | Valor {v}')