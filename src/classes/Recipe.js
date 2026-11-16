import Recipe from "../components/Recipe.vue";

export default class Recipe{
  #title;
  #description;
  #difficulty;

  constructor(title, des, difficulty){
    this.setTitle(title);
    this.setDescription(des);
    this.setDifficulty(difficulty);


    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    
    this.getTitle = this.getTitle.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.getDifficulty = this.getDifficulty.bind(this);
}

  setTitle(t){
    this.#title = t;
  }
  setDescription(des){
    this.#description = des;
  }
  setDifficulty(dif){
    this.#difficulty = dif==0?"Könnyű":dif==1?"Közepes":"Nehéz";
  }

  getTitle(){
    return this.#title;
  }
  getDescription(){
    return this.#description;
  }
  getDifficulty(){
    return this.#difficulty;
  }
}