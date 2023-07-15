import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthService } from "./service/AuthService";
import { LocalTokenRepository } from "./repository/localTokenRespository";
import { HttpClient } from "./httpClient/httpClient";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import { TodoService } from "./service/TodoService";

const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrap
//DI

const tokenRespository = new LocalTokenRepository();
const httpClient = new HttpClient(
  "https://www.pre-onboarding-selection-task.shop",
  tokenRespository
);
const authService = new AuthService(httpClient, tokenRespository);
const todoService = new TodoService(httpClient, tokenRespository);

root.render(
  <AuthProvider authService={authService}>
    <TodoProvider todoService={todoService}>
      <App />
    </TodoProvider>
  </AuthProvider>
);
