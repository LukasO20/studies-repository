nome = str(input('Digite seu nome aqui para conferirmos caracteristicas: ')).strip()
maisculo = nome.upper()
minusculo = nome.lower()
numero = len(nome) - nome.count (' ')
separa = nome.split()


print ('- Nome em letras maiscúlas e miniscúlas: ', maisculo, 'e', minusculo)
print ('- Número de lêtras: ', numero)
print ('- Seu primeiro {} têm {} letras'. format(separa[0], len(separa[0])))