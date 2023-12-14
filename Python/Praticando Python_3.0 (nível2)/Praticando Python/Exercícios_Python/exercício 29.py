print('É BOM VOCÊ OBEDECER AS LEIS DE TRÂNSITO... NÃO ULTRAPASSE 80KM/h !!!')
km = float(input('Olha, seja sincero, quantos KM/H você percorreu?: '))
multa = (km - 80) *7
if km > 80:
    print('De acordo com a lei, por ter percorrido aproximadamente {} KM/h, você pagará R${}'.format (km, multa))
else:
    print('Parabéns cidadão, está dentro do limite de 80KM/h')

