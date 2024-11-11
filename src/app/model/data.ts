import {Profile} from './model';


export const profile : Profile = {
  person: {
    name: 'John Doe',
    age: 25,
    addressLine1: '123 Fake St',
    city: 'Springfield',
    country: 'USA',
    friends: [
      {
        name: 'Jane Doe',
        age: 26,
        addressLine1: '123 Fake St',
        city: 'Springfield',
        country: 'USA',
        friends: [
          {
            name: 'Jim Doe',
            age: 27,
            addressLine1: '123 Fake St',
            city: 'Springfield',
            country: 'USA',
            friends: [],
            enemies: []
          }
        ],
        enemies: [
          {
            name: 'Evil Jane',
            age: 26,
            addressLine1: '666 Evil St',
            city: 'Hell',
            country: 'Hell',
            friends: [],
            enemies: []
          },
          {
            name: 'Evil Jim',
            age: 27,
            addressLine1: '666 Evil St',
            city: 'Hell',
            country: 'Hell',
            friends: [],
            enemies: []
          }
        ]
      }
    ],
    enemies: []
  },
  createdAt: '2021-01-01',
  bio: 'I am a person',
  title: 'Mr'
}
