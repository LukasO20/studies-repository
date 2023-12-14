# Validação de Dados
print('Selecione seu Genêro')
print('''[ M ] - Masculino
[ F ] - Feminino''')
id = str(input('Opção escolhida: ')).upper().strip()[0]
while id != 'F' and id != 'M':
    print('Opção Inválida. Tente novamente!')
    id = str(input('Opção escolhida: ')).upper().strip()[0]
print('Sexo {} cadastrado com sucesso!'.format(id))