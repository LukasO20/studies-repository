print ('Escolha os preços a seguir a seu desejo.')
km = float(input('Quantos KM deseja percorrer? : '))
if km <= 200:
    tipo1 = (0.50 * km)
    print('Caso percorra até 200 KM, você pagará R${:.2f} por km'.format(tipo1))
    print('Tenha uma boa viagem !!')
else:
    tipo2 = (0.45 * km)
    print('Você pagará RS{:.2f} por km'.format (tipo2))
    print('Tenha uma boa viagem !!')