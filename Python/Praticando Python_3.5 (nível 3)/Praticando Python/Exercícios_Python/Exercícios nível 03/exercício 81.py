# Dados de uma lista
print('\33[1;33mListando números...')
lista = []
quantidade5 = 0
while True:
    numero = int(input('Digite um número para adicionar na lista: '))
    lista.append(numero)
    quiz = str(input('Você deseja adicionar mais numeros? [S/N]: ')).strip().upper()
    if quiz == 'N':
        break

print('-='*40)
print(f'\33[0;32mVocê adicionou os seguintes números na sua lista: {lista}')
print(f'Foram adicionados {len(lista)} números')
lista.sort(reverse=True)
print(f'Sua lista de forma decrescente: {lista}')
if 5 in lista:
    print('Eu encontrei o número 05!')
else:
    print('Eu não encontrei o número 05 (não foi listado).')