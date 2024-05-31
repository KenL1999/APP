import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App"
import { Response, createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.post("/login", (schema, fakeRequest) => {
      const body = JSON.parse(fakeRequest.requestBody);

      if (body.email == "admin@mail.com" && body.password == "supersecret") {
        return {
          ok: true,
          data: {
            email: "admin@mail.com",
            name: "Mr. Admin",
            role: "admin",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
        };
      } else {
        return new Response(400, {}, { error: "invalid credentials" });
      }
    });

    this.put("/upload", () => {
      return {
        ok: true,
        data: {
          success: [
            {
              id: 1,
              name: "Kenny Ederson Forestal",
              email: "kforestal230@gmail.com",
              age: 24,
            },

            {
              id: 3,
              name: "Nayica",
              email: "nayica@gmail.com",
              age: 8,
            },
          ],
          errors: [
            {
              row: 1,
              details: {
                name: "The 'name' field cannot be empty.",
                email: "The format of the 'email' field is invalid.",
                age: "The 'age' field must be a positive number.",
              },
            },
            {
              row: 3,
              details: {
                nname: "The 'name' field cannot be empty.",
                email: "The format of the 'email' field is invalid.",
                age: "The 'age' field must be a positive number.",
              },
            },
            {
              row: 5,
              details: {
                name: "The 'name' field cannot be empty.",
                email: "The format of the 'email' field is invalid.",
                age: "The 'age' field must be a positive number.",
              },
            },
            {
              row: 6,
              details: {
                name: "The 'name' field cannot be empty.",
                email: "The format of the 'email' field is invalid.",
                age: "The 'age' field must be a positive number.",
              },
            },
          ],
        },
      };
    });

    this.post("/upload", (scheme, fakeRequest) => {
      const body = JSON.parse(fakeRequest.requestBody);

      return {
        ok: true,
        data: {
          success: [
            {
              id: 1,
              name: body.name,
              email: body.email,
              age: body.age,
            },
          ],
          errors: [],
        },
      };
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  