def fakultaet(n):
    if n < 0:
        return None
    elif n == 0:
        return 1
    else:
        fak = 1
        for i in range(1, n+1):
            fak *= i
        return fak


zahl = int(input("Geben Sie eine nicht negative ganze Zahl ein: "))
ergebnis = fakultaet(zahl)
if ergebnis is None:
    print("Ungültige Eingabe! Die Zahl darf nicht negative sein.")
else:
    print("Die Fakultät von", zahl, "ist", ergebnis)
