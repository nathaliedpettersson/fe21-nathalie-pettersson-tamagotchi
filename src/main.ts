// Djurtyper att välja mellan
type animalType = 'Alien' | 'Dinosaur' | 'Cat' | 'Dog' | 'Hamster';

// Klass konstruktor för Tamagotchi
class Tamagotchi {
    hungerDefault = 5;
    happinessDefault = 5;
    hungerTime: any;
    happinessTime: any;
    constructor(
        public name: string,
        public animalType: animalType
    ) {
        this.hungerTime = setInterval(this.hunger.bind(this), 8000);
        this.happinessTime = setInterval(this.happiness.bind(this), 8000);
    }

    // Metod som räknar hungernivå
    hunger(): void {
        this.hungerDefault = this.hungerDefault + 1;
        console.log('Nuvarande hungernivå är: ' + this.hungerDefault);
        if (this.hungerDefault == 10) {
            alert(`Din Tamagotchi med namn ${this.name} svälte ihjäl. Du kan uppdatera sidan och skapa en ny för att spela igen!`);
            clearInterval(this.hungerTime);
        }
    }

    // Metod som räknar lyckonivå 
    happiness(): void {
        this.happinessDefault = this.happinessDefault - 1;
        console.log('Nuvarande lyckonivå är: ' + this.happinessDefault);
        if (this.happinessDefault == 0) {
            alert(`Din Tamagotchi med namn ${this.name} blev så olycklig att den föll ihop. Du kan uppdatera sidan och skapa en ny för att spela igen! `);
            clearInterval(this.happinessTime);
        }
    }

    // Metod för att mata Tamagotchin
    feedTamagotchi(): void {
        this.hungerDefault = this.hungerDefault - 1;
        console.log('Det här är ditt nuvarande hungervärde ' + this.hungerDefault);
    }

    // Metod för att leka med Tamagotchin
    playWithTamagotchi(): void {
        this.happinessDefault = this.happinessDefault + 1;
        console.log('Det här är ditt nuvarande lyckovärde ' + this.happinessDefault);
    }
}

// Ett förslag på en Tamagotchi som skapats med hjälp av klassen och där metoder testas

// const dinTamagotchi = new Tamagotchi('Namn', 'Dinosaur');
// console.log(dinTamagotchi);
// dinTamagotchi.feedTamagotchi();
// dinTamagotchi.playWithTamagotchi();




