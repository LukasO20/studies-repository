print ('Como está o preço da gasolina por ai? Sofrido né?')
dias = int(input('Por quantos dias você usou o carro? '))
km = float(input('Agora vamos para os km, por quantos km? ' ))

valor = (dias * 60) + (km * 0.15)

print ('Pelas informações citadas, você pagará {:.2f}R$'. format (valor))