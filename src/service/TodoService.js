/*
  interface
  get():Promise<Todo[]>
  create(todo):Promise<Todo>
*/

export class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  async get() {
    const res = await this.httpClient.fetch("/todos", {
      method: "GET",
    });
    return res.json();
  }

  async create(todo) {
    const res = await this.httpClient.fetch("/todos", {
      method: "POST",
      body: JSON.stringify({
        todo,
      }),
    });
    return res.json();
  }
}
