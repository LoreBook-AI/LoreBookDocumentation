class Attributes {
    constructor() {
        this.strength = 0;
        this.dexterity = 0;
        this.constitution = 0;
        this.intelligence = 0;
        this.wisdom = 0;
        this.charisma = 0;
        this.proficiency = 0;
        this.initiative = 0;
    }
    rollSkillCheck(skill) {
        // Implementation for skill check
        return 0;
    }
    rollInitiative() {
        // Implementation for initiative roll
        return 0;
    }
    rollSavingThrow(ability) {
        // Implementation for saving throw
        return 0;
    }
}
class Inventory {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    withdrawItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
    }
    useItem(itemName) {
        // Implementation for using an item
    }
}
class Proficiencies {
    constructor() {
        this.others = [];
    }
    rollProficiencyCheck() {
        // Implementation for proficiency check
        return 0;
    }
}
class Spells {
    constructor() {
        this.spellName = "";
        this.spellEffect = "";
        this.multiClass = false;
    }
    useSpell() {
        // Implementation for using a spell
    }
}
class Character {
    constructor() {
        this.name = "";
        this.level = 1;
        this.alignment = "";
        this.background = "";
        this.maxLife = 0;
        this.actualLife = 0;
        this.attributes = new Attributes();
        this.inventory = new Inventory();
        this.proficiencies = new Proficiencies();
    }
    levelUp() {
        this.level++;
    }
    addFeat() {
        // Implementation for adding a feat
    }
}
class Bard extends Character {
    constructor() {
        super();
        this.skill = "";
        this.multiClass = false;
        this.cantripsKnown = 2;
        this.spellsKnown = 4;
        this.spellSlots = [2, 0, 0, 0, 0, 0, 0, 0, 0];
        this.bardicInspirationDie = 6;
        this.maxLife = 8 + this.attributes.constitution;
        this.actualLife = this.maxLife;
    }
    addSkill() {
        // Implementation for adding a bard skill
    }
    withdrawSkill() {
        // Implementation for withdrawing a bard skill
    }
    levelUp() {
        super.levelUp();
        switch (this.level) {
            case 2:
                // Jack of All Trades, Song of Rest (d6)
                this.spellsKnown++;
                this.spellSlots[0]++;
                break;
            case 3:
                // Bard College, Expertise
                this.spellsKnown++;
                this.spellSlots[0]++;
                this.spellSlots[1] = 2;
                break;
            case 4:
                // Ability Score Improvement
                this.cantripsKnown++;
                this.spellsKnown++;
                this.spellSlots[1]++;
                break;
            case 5:
                // Bardic Inspiration (d8), Font of Inspiration
                this.bardicInspirationDie = 8;
                this.spellsKnown++;
                this.spellSlots[2] = 2;
                break;
            // ... Continue for all levels up to 20
            case 20:
                // Superior Inspiration
                break;
        }
    }
}
class Lore extends Bard {
}
class Valor extends Bard {
}
export { Character, Bard, Lore, Valor };
