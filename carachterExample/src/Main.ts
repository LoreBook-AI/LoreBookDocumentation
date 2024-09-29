import { Bard, Lore } from './Character.js';

// Create a new Bard character
const myBard = new Bard();
myBard.name = "Melodious Minstrel";
myBard.alignment = "Chaotic Good";
myBard.background = "Entertainer";

// Set initial attributes
myBard.attributes.strength = 10;
myBard.attributes.dexterity = 14;
myBard.attributes.constitution = 12;
myBard.attributes.intelligence = 13;
myBard.attributes.wisdom = 11;
myBard.attributes.charisma = 16;

// Add starting equipment
myBard.inventory.addItem({ name: "Rapier", weight: 2, description: "A slender, sharply pointed sword" });
myBard.inventory.addItem({ name: "Lute", weight: 2, description: "A musical string instrument" });
myBard.inventory.addItem({ name: "Leather Armor", weight: 10, description: "Light armor made of leather" });

// Level up the character to level 3
while (myBard.level < 3) {
    myBard.levelUp();
}

// Choose College of Lore at level 3
const loreBard = new Lore();
Object.assign(loreBard, myBard);

console.log(`${loreBard.name} is now a level ${loreBard.level} bard of the College of Lore!`);
console.log(`Cantrips Known: ${loreBard.cantripsKnown}`);
console.log(`Spells Known: ${loreBard.spellsKnown}`);
console.log(`Spell Slots: ${loreBard.spellSlots.join(', ')}`);