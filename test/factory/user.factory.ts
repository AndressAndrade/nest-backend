import { Factory } from "rosie";
import faker from 'faker';

export const UserFactory = Factory.define("userFactory")
  .attr("id", () => faker.datatype.uuid())
  .attr("name", () => faker.name.fullName())
  .attr("email", () => faker.internet.email())
  .attr("phone", () => faker.phone.number('+55#########'))
  .attr("createdAt", () => faker.date.recent())
  .attr("updatedAt", () => faker.date.recent());
