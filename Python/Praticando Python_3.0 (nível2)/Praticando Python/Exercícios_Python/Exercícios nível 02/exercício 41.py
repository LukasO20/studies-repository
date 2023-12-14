from datetime import date
#Confederação Nacional de Natação - Classe
print('Olá, meu caro esportista, vamos conferir sua classe?')
print('vamos classificá-lo(a) de acordo com a idade!')
anoatual = date.today().year
nascimento = int(input('Digite seu ano de nascimento aqui: '))
condição = anoatual - nascimento
if condição <= 9:
    print('Ei, Pequenino atleta, por ter {} anos, você estará no Grupo MIRIM!'.format(condição))
elif condição <= 14:
    print('Jovem, você tem {} anos, estará no grupo INFANTIL! :D'.format(condição))
elif condição <= 19:
    print('Como está sua saúde meu jovem? Por ter {} anos, você estará no grupo JÚNIOR!'.format(condição))
elif condição <= 25:
    print('Olá meu caro(a), por ter {} anos, seu grupo será o SÊNIOR'.format(condição)) 
elif condição >= 26:
    print('Parabéns por ter {} anos, seu grupo será o MASTER!'.format(condição))
