import { Injectable } from '@angular/core';
import { Heroe } from './heroe_interface';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  private heroes: Heroe[] = [
    {
      id: 1,
      nombre: "Aquaman",
      bio: "The most recognized power of Aquaman is the telepathic ability to communicate with marine life, which can summon great distances.",
      img: "assets/image/aquaman.png",
      aparicion: "1941-11-01",
      casa: "DC"
    },
    {
      id: 2,
      nombre: "Batman",
      bio: "The main features of Batman are summarized in «physical dexterity, deductive skills and obsession». Most of the basic characteristics of the comics have varied due to the different interpretations they have given to the character.",
      img: "assets/image/batman.png",
      aparicion: "1939-05-01",
      casa: "DC"
    },
    {
      id: 3,
      nombre: "Daredevil",
      bio: "Having lost sight, the remaining four senses of Daredevil were increased by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can \"see\" through a \"sixth sense\" that serves as a radar similar to that of bats.",
      img: "assets/image/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      id: 4,
      nombre: "Hulk",
      bio: "Its main power is its ability to increase its strength to practically unlimited levels while increasing its fury. Depending on which Hulk personality is in charge at that moment (the Hulk Banner is the weakest, but it makes up for it with its intelligence).",
      img: "assets/image/hulk.png",
      aparicion: "1962-05-01",
      casa: "Marvel"
    },
    {
      id: 5,
      nombre: "Linterna Verde",
      bio: "Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is fed by the Green Flame (reviewed by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which was found by a manufacturer of lamps called Chang)",
      img: "assets/image/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      id: 6,
      nombre: "Spider-Man",
      bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers, a great strength, agility, to be able to climb walls. The strength of Spider-Man allows you to lift 10 tons or more. Thanks to this great force Spider-Man can perform incredible jumps. An \arachnid sense\", which lets you know if a danger looms over it, before it happens. Sometimes this can lead Spider-Man to the source of danger.",
      img: "assets/image/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      id: 7,
      nombre: "Wolverine",
      bio: "In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, however deadly it may be, and that same power makes it immune to any disease on Earth and some extraterrestrials. It also possesses a superhuman strength, that although it does not compare with the one of other superheroes like Hulk, yes it surpasses the one of any human.",
      img: "assets/image/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!!");

  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHero(id: number) {
    // tengo el id
    let heroesArr: Heroe[] = [];
    for (const hero of this.heroes) {
      if (id == hero.id) {
        heroesArr.push(hero);
      }
    }
    return heroesArr;
  }

  searchHeroes(term: string) {
    let heroesArr: Heroe[] = [];
    term = term.toLowerCase();
    for (const hero of this.heroes) {
      let name = hero.nombre.toLowerCase();
      if (name.indexOf(term) >= 0) {
        heroesArr.push(hero);
      }
    }
    return heroesArr;
  }

}