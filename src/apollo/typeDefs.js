export default `
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
    singer_id: Int
    url: String!
  }

  type Mutation {
    selectedGender(id: Int!): Int!
    selectedSinger(id: Int!): Int!
  }
  type Query {
    genderSelected: String!
    selectedSinger: String!
    genders: [Gender]
    singers: [Singer]
    videoclips: [Videoclip]
  }
`;
