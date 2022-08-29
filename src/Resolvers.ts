import { Context } from 'apollo-server-core';
import Person from './types/Person';
import people from './database/dataset.json';

const Resolvers = {
  Query: {
    getAllPeople: () => people,

    getPerson: (_:Context, args: Person) => {
      return people.find( person => person.id === args.id);
    }
  },

  Mutation: {
    addPerson: (_:Context, args: Person) => {
      let newPerson = args;
      newPerson.id = people.length + 1;
      people.push(newPerson);

      return newPerson;
    },

    updatePerson: (_:Context, args: Person) => {
      let person = people.find( person => person.id === args.id);

      if(!person) return;

      person.first_name = args.first_name || person.first_name;
      person.last_name = args.last_name || person.last_name;
      person.email = args.email || person.email;
      person.gender = args.gender || person.gender;
      person.ip_address = args.ip_address || person.ip_address;

      return person;
    }
  }
}

export default Resolvers;