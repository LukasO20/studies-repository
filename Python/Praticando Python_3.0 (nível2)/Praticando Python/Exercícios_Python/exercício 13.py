print('Hoje todos os funcionários receberão 15% de aumento!')
s = float(input('Digite seu salário atual por aqui R$'))

aumento = s + (s / 100 * 15)


print('Com o aumento, você receberá R${:.2f} !'.format (aumento))