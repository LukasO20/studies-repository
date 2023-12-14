#Média de nota acadêmica
N1 = float(input('Digite sua nota N1 aqui: '))
N2 = float(input('Digite sua nota N2: '))
media = (N1+N2)/2
if media < 5:
    print('Você está Reprovado! Sua média final foi {:.1f}! Tente estudar mais no próximo semestre.'.format(media))
elif media == 5 or media < 6.9:
    print('Sua média final é {:.1f}, estará de recuperação para aumentar sua nota!'.format(media))
else:
    print('Sua média final é {:.1f} Você está Aprovado!'.format(media))
    print('Parabéns e boas férias :D')
