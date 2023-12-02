/*
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada */

class Hero{
  constructor(name, age, type){
    this.name = name
    this.age = age
    this.type = type
  }

 attack(){
  let power;
  if (this.type === "mage"){
    power = 'magic';
  } else if(this.type === "warrior"){
    power = 'sword';
  } else if(this.type === "monk"){
    power = 'martial arts';
  } else if(this.type === "ninja"){
    power = 'shuriken';
  }

  const message = `The ${this.type} attacked using ${power}`
  return message;
  }
}

let mageHero = new Hero ("Merlin", 200, "mage");
console.log(mageHero.attack());

let warriorHero = new Hero ("Conan", 40, "warrior");
console.log(warriorHero.attack());
