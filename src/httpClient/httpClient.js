export class HttpClient {
  // 1. baseURL
  #baseURL;
  #tokenRepository;
  constructor(baseURL, tokenRepository) {
    this.#baseURL = baseURL;
    console.log(baseURL);
    this.#tokenRepository = tokenRepository;
    //여기서 token값을 가져오게 된다면 token의 값을 new 생성자를 통해 생성되었을때의 값을 가지고 있기 때문에 직접 해주는 것이 좋은 방법이다.
  }

  // 2. 모든 fetch 전에, access_token을 추가한다.
  fetch(endpoint, options = {}) {
    const optionsWidthAuth = {
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.#tokenRepository.get(),
      },
    };
    return window.fetch(this.#baseURL + endpoint, optionsWidthAuth);
  }
}
