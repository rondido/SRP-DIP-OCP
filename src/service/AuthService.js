/*
  AuthServiceInterface
  signup(email,password):void
  signin(email,password):void
  logout():void
*/

export class AuthService {
  #httpClient;
  #tokenRespository;
  constructor(httpClient, tokenRespository) {
    this.#httpClient = httpClient;
    this.#tokenRespository = tokenRespository;
  }
  async signup(email, password) {
    const res = await this.#httpClient.fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const { access_token } = await res.json();
    this.#tokenRespository.save(access_token);
  }
  async signin(email, password) {
    const res = await this.#httpClient.fetch("/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const { access_token } = await res.json();
    this.#tokenRespository.save(access_token);
  }
  async logout() {
    this.#tokenRespository.remove();
  }
}
