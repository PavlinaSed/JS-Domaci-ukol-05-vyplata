//Doporucene ulozky na doma lekce 07
//1- výplata
const salary = (wage, hours, days) => {
    return (Math.round(wage * hours * days));
 }
 
 const wageInput = Number(prompt("Zadej hodinovou hrubou mzdu v kč"));
 const hoursInput = Number(prompt('Zadej počet hodin odpracovaných za den'));
 const daysInput = Number(prompt('Zadej počet odpracovaných dní v měsíci'));
 
 document.body.innerHTML += `Tvoje hrubá měsíční mzda je ${salary(wageInput, hoursInput, daysInput)} Kč. <br>`
 
 
 const taxed = () => {
    const procentoZdaneni = 0.15;
    return (Math.round(salary(wageInput,hoursInput,daysInput) * (1-procentoZdaneni)));
 }
 document.body.innerHTML += `Tvoje měsíční mzda po 15% zdanění činí ${taxed()} Kč.`
 