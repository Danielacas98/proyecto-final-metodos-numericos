import sympy

# Metodo que evalua la funcion 
def my_fc(x, f):
    return eval(f)

# Metodo que calcula la derivada de una funcion 
def derivar(valor_x, f):
    x = sympy.symbols('x')
    f_derivada = sympy.diff(f, x)
    resultado_eval = my_fc(valor_x, str(f_derivada))
    return resultado_eval

# Metodo que comprueba condicion si el resultado es mayor a epsylon
def comprobar_condicion(x, dx, e, f):
    calculo = abs(derivar(x, f) - (my_fc(x + dx, f) - my_fc(x, f)) / dx)
    return calculo > e

# Entrada de datos
dx = float(input("Ingrese delta x: "))
x = float(input("Ingrese x: "))
e = float(input("Ingrese un valor epsylon: "))
f = input("Ingresar función (use 'x' como variable): ")

# Calcula la derivada usando la definición de la derivada
derivada = (my_fc(x + dx, f) - my_fc(x, f)) / dx
print("La derivada en el punto x es:", derivada)

# Ajuste de delta x mientras se cumpla la condicion
while comprobar_condicion(x, dx, e, f):
    dx = dx / 2
    print("Nuevo delta x:", dx)


