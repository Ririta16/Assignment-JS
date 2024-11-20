//npx ts-node index.ts
//npm run start
enum gender{
    male = "male",
    female = "female"
}

interface Animal{
    name : string;
    fly : boolean;
    leg : number;
    swim : boolean;
    gender : gender;
}

/*type Animal = {
    name : string;
    fly : boolean;
    leg : number;
    swim : boolean;
    gender : gender;
}*/

const Animal1 : Animal = {
    name : "tiger",
    fly : false,
    gender : gender.male,
    leg : 4,
    swim : true
}

console.log(Animal1)

/*-----------------------------------------------------*/

interface People{
    name : string;
    age : number;
    gender : gender;
    hobbie : string[] | string;
    job? : string;
}

const People1 : People= {
    name: "peter",
    age:20,
    gender: gender.male,
    hobbie : ["watch movie", "swiming"]
}

const People2 : People = {
    name: "alex",
    age:18,
    gender: gender.female,
    hobbie : "play game",
    job: "doctor"
}

/*-----------------------------------------------------*/

enum TypePokemon{
    Fire = "Fire",
    Flying = "Flying",
    Grass = "Grass"
}

interface Stat {
    armor: number;
    damage: number;
    hp: number;
    speed: number;
}

interface Pokemon {
    name : string;
    gender : string;
    height : number;
    weight : number;
    location_area_encounters :string;
    moves : {
        name : string;
        effect : string;
    }[];
    type : TypePokemon | TypePokemon[];
    held_items? : {
        name: string;
        stat : Stat;
    }[]
}

const Pokemon1 : Pokemon = {
    name : "Charlizard",
    gender : "female",
    height : 200,
    weight : 200,
    location_area_encounters : "forest",
    moves : [
        {
            name : "flying",
            effect : "cannot take damage from ground"
        }
    ],
    type : [TypePokemon.Fire, TypePokemon.Flying]
}

const Pokemon2 : Pokemon = {
    name : "babalsor",
    gender : "female",
    height : 200,
    weight : 200,
    location_area_encounters : "forest",
    moves : [
        {
            name : "kick",
            effect : "deal damage 50"
        }
    ],
    type : TypePokemon.Grass,
    held_items: [
        {
            name : "glove",
            stat : {
                armor : 20,
                damage : 10,
                hp : 200,
                speed : 200
            }
        }
    ]
}

