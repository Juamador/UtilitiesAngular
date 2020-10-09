export class Categories {
  public categoryId: number;
  public Description: string;
  public IsDeleted: boolean;

 constructor() {
    this.categoryId = 0;
    this.Description = '';
    this.IsDeleted = false;
  }
}
