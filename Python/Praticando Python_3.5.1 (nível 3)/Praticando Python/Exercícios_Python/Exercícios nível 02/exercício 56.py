# Analisador de identidade
print('Vamos conferir as informações inseridas')
media = 0
homemvelho = 0
nomehomem = ''
qtmulher = 0
for pessoas in range(1,5):
    nome = str(input('{}° Digite seu nome: '.format(pessoas))).strip().upper()
    idade = int(input('{}° Agora Digite sua idade: '.format(pessoas)))
    print('''[ F ] - Feminino
[ M ] - Masculino''')
    sexo = str(input('Seu sexo é...? ')).strip()
    media += idade
    mediaidade = media / pessoas
    if pessoas == 1 and sexo == 'Mm':
        homemvelho = idade
        nomehomem = nome
    if sexo in 'Mm' and idade > homemvelho:
        homemvelho = idade
        nomehomem = nome
    if sexo in 'Ff' and idade < 20:
        qtmulher += 1   
print('A média relacionada as Idades informadas é {} anos'.format(mediaidade))
print('Foi informado {} Mulheres com menos de 20 anos'.format(qtmulher))
print('O homem mais velho se chama {} e possui {} anos'.format(nomehomem,homemvelho))