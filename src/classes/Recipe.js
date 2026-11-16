import Recipe from "../components/Recipe.vue";

export default class Recipe{
  #title;
  #description;
  #difficulty;
  #imgSrc;


  constructor(title, des, difficulty, src){
    this.setTitle(title);
    this.setDescription(des);
    this.setDifficulty(difficulty);
    this.setImg(src);

    this.setImg = this.setImg.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.getImg = this.getImg.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.getDifficulty = this.getDifficulty.bind(this);
}

  setImg(src){
    this.#imgSrc = src;
  }
  getImg(){
    return new URL(this.#imgSrc, import.meta.url).href
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