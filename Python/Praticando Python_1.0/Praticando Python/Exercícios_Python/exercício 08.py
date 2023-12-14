print ('Vamos converter um valor digitado em centímetros e milímetros')
cover =  int(input('Digite o valor em metros, ele será convertido: '))

conversorc = cover*100
conversormm = cover*1000

print('O valor convertido em centímetros é {} cm'.format(conversorc))
print('O valor convertido em milímetros é {} mm'.format(conversormm))