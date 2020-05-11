export class ReadingTest {
  id: string;
  title: string;
  content: string;
  questions: string;

  constructor(obj) {
    this.id = obj && obj.id;
    this.title = obj && obj.title;
    this.content = obj && obj.content;
    this.questions = obj && obj.questions || null;
  }
}
