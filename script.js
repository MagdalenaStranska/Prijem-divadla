//Jeden lístek do divadla Pěst na oko stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem. Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? Vypište do stránky i příjem divadla se započítanou slevou pro studenty.

let cena = 12
let pocetNavstevniku = 174
let pocetPredstaveni = 15
let slevaStudent = 0.35 * 12
let mnozstviStudentu = 0.4
let prijem = cena * pocetNavstevniku * pocetPredstaveni
let prijemSeSlevou = prijem - (pocetNavstevniku * mnozstviStudentu * slevaStudent)

document.body.innerHTML +="<p>" + prijem + "</p>"
document.body.innerHTML +="<p>" + prijemSeSlevou + "</p>"



