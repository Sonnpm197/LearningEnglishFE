//Use an interface rather than a class;
// a response cannot be automatically converted to an instance of a class.
export class Reading {
  id: string;
  title: string;
  content: string;

  constructor(obj) {
    this.id = obj && obj.id;
    this.title = obj && obj.title;
    this.content = obj && obj.content;
  }
}
