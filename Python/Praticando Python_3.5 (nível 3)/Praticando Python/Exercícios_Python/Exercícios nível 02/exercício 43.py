#IMC Indice de Massa Corporal
print ('Vamos conferir seu IMC?')
altura = float(input('Digite sua altura em métros: '))
peso = float(input('Agora, digite seu peso em KG: '))
imc = peso / (altura**2)
if imc < 18.5:
    print('Seu IMC é {:.1f}'.format(imc))
    print('Você está abaixo do peso ideal :/ Faça mais exercícios e coma bem!')
elif imc >= 18.5 and imc < 25:
    print('Seu IMC é {:.1f}'.format(imc))
    print('Seu peso é ideal :) Continue cuidando da sua saúde')
elif imc >= 25 and imc < 30:
    print('Seu IMC é {:.1f}'.format(imc))
    print('Você tem Sobrepeso :/ Faça mais exercícos!')
elif imc >= 30 and imc < 40:
    print('Seu IMC é {:.1f}'.format(imc))
    print('Sua saúde não está boa pois tem Obesidade, consulte um nutricionista!')
else: 
    print('Seu IMC é {:.1f}'.format(imc))
    print('Você possuí Obesidade Mórbida, sua saúde está em risco, consulte um nutricionista!')