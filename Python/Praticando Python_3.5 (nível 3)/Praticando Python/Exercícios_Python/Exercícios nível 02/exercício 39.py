from datetime import date
#Alistamento Militar
print('É nescessário possuir 18 anos de idade para fazer seu alistamento...')
nascimento = int(input('Digite seu ano de nascimento aqui: '))
anoatual = date.today().year
tempo =  anoatual - nascimento
if tempo == 18:
    print('Você está apto a se alistar de acordo com o seu ano de nascimento')
elif tempo > 18:
    prazo = tempo - 18
    ano = anoatual - prazo
    print('Deveria se alistar à {} anos atrás !'.format(prazo))
    print('Você não se alistou ao completar 18 anos. Deveria se alistar no ano de {} !'.format(ano))
    print('Dirija-se a um serviço militar mais próximo para regularizar a situação.')
elif tempo < 18:
    prazo1 = 18 - tempo
    ano1 = anoatual + prazo1
    print('Deve se alistar somente quando completar 18 anos. Ainda falta {} anos para seu alistamento.'.format(prazo1))
    print('Seu alistamento será no ano de {} !'.format(ano1))