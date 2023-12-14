from datetime import date
print ('Vamos analisar se o ano é BISSEXTO?')
ano = int(input('Digite o ano aqui para verificarmos: '))
if ano == 0:
    ano = date.today().year
if ano % 4 == 0 and ano % 100 or ano % 400 == 0:
    print('O ano {} que você digitou é BISSEXTO'.format (ano))
else:
    print('Esse ano {} que você digitou NÃO É BISSEXTO'.format (ano))