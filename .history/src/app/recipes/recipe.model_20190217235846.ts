export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: In

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}