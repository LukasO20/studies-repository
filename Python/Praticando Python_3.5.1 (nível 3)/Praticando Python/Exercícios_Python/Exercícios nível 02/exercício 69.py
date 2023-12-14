# Análise de dados do grupo
qi =  qim = qh = 0
while True:
    idade = int(input('Digite sua Idade: '))
    sexo = ' '
    while sexo not in 'MF':
        sexo = str(input('Digite seu Sexo Masculino [ M ] Feminino [ F ]: ')).strip().upper() [0]
    if idade >= 18:
        qi +=1
    if sexo == 'M':
        qh += 1
    if idade <= 20 and sexo == 'F':
        qim += 1
    resposta = ' '
    while resposta not in 'SN':
        resposta = str(input('Deseja continuar? Sim [S] Não [N]: ')).strip().upper() [0]
    if resposta == 'N':
        break
print(f'\33[1;32m Foram cadastrados {qi} pessoas maiores de 18 anos.')
print(f'\33[1;34m {qh} Homens foram cadastrados.')
print(f'\33[1;35m {qim} Mulheres com menos de 20 anos.')