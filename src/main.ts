import { Params } from "./generics/6";

function displayParams(params: Params): void {
  console.log("Params Object:", params);
}

const userParams: Params = {
  email: "user@example.com",
  firstName: "John",
  lastName: "Doe",
  phone: "123-456-7890",
};

displayParams(userParams);
