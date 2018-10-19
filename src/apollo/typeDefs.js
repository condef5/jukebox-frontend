export default `
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }

  type Gender {
    id: Int!
    name: String!
  }

  type Singer {
    id: Int!
    name: String!
    image: String!
    gender_id: Int
  }

  type Videoclip {
    id: Int!
    name: String!
    author: String!
    url: String!
  }

  type Mutation {
    selectedGender(id: Int!): Int!
  }
  type Query {
    genderSelected: String!
    genders: [Gender]
    singers: [Singer]
    videoclips: [Videoclip]
  }
`;
