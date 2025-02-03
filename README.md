## Zadání  
Vytvořte aplikaci, která bude počítat, jak moc se nám rozmnoží králíci za určitý čas podle idealizovaného reprodukčního výpočtu **Fibonacciho posloupnosti**.

Číslo vypočítané v n-tém kroku posloupnosti popisuje velikost populace po n měsících, pokud předpokládáme, že
- první měsíc se narodí jediný pár
- nově narozené páry jsou produktivní od druhého měsíce svého života
- každý měsíc zplodí každý produktivní pár jeden další pár
- králíci nikdy neumírají, nejsou nemocní atd.

**Růst populace králůků vyjadřuje obrázek**  
![image](https://github.com/user-attachments/assets/b1897fbe-48d7-401a-9534-c4f650293f5a)

Fibonacciho posloupnost se poprvé objevila v indické matematice již 200 let před naším letopočtem v Pingale. Světoznámou se však stala až pomocí knihy Liber Abaci, vydané roku 1202, od italského matematika <a href="https://cs.wikipedia.org/wiki/Leonardo_Fibonacci">Leonarda z Pisy</a>. Leonardo na příkladu růstu populace králíků v knize vysvětlil, jak často se v matematice s touto posloupností setkáváme, aniž bychom si to vůbec uvědomovali. Jedna z oblastí, se kterou je posloupnost úzce spojena, je zlatý řez. Je dokázáno, že Fibonacciho posloupnost konverguje k hodnotě zlatého řezu, a tudíž se někdy navzájem doplňují. Ovšem nejen v matematice se s touto posloupností můžeme setkat. Fibonacciho posloupnost vidíme všude kolem nás. Ať už to jsou semena slunečnice, okvětní lístky pryskyřníku či šišky borovic, všechny narůstají v určitém řádu. Fibonacciho posloupnost se používá dodnes a stále se objevují nové a nové oblasti, kde se s ní setkáváme.

**Jak se tato posloupnost počítá?**
Každé číselný prvek posloupnosti (tzv. Fibonacciho číslo) je dán součtem dvou v posloupnosti předcházejících. Začíná se hodnotami 1 a 1.
Prvních deset prvků této nekonečné posloupnosti je tedy 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …

Algoritmus výpočtu v Javascriptu:
<pre>let a = 1, b = 1, temp;
let i = 0;
while (i <= n) {
  console.log(a);
  temp = a + b;
  a = b;
  b = temp;
  i++;
}</pre>

Zdroj: Fibonacciho posloupnost. Online. Dostupné z: https://cs.wikipedia.org/wiki/Fibonacciho_posloupnost. [cit. 2025-02-02].

## Výstup z aplikace
![image](https://github.com/user-attachments/assets/f5372b97-16fe-40b8-b0aa-9766b154a184)

## Další rozšíření
Naprogramuj rozšíření uvedené aplikace tak, aby uživatel zadal v m2 rozměr svého pozemku.  
Aplikace následně spočítá a vypíše, kolik měsíců by byl možné na uvedeném pozemku králíky podle Fibonacciho posloupnosti chovat. 
Uvažujme při výpočtu i to, že tráva bude dostatečně rychle dorůstat.
