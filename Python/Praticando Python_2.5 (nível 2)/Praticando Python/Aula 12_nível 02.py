#Condições Alinhadas
nome = str(input('Qual o seu nome meu caro(a)? '))
if nome == 'Lucas':
    print('Que nome bonito você tem :D')
elif nome == 'João' or  nome =='Maria' or nome == 'Joaquina':
    print('Deixa eu adivinhar... Será que você nasceu em alguma região do norte? Seu nome é bem famoso lá.')
elif nome in 'Ana Carolina da Silva':
    print('''Ana, seu primeiro nome e seu sobrenome "Carolina da Silva", 
    são nomes pertencentes a muitos Brasileiros. Além de um belo nome :D''')
else:
    print('Prazer em conhece-lo(a)')
print('Tenha um boa dia Sr(a) {}'.format(nome))