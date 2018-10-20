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
    url: String!
    singer_id: Int
  }
 
  type Waiting {
    video_id: Int!
    client: String!
  }

  type Mutation {
    selectedGender(id: Int!): Int!
    selectedSinger(id: Int!): Int!
    addVideo(id: Int!): String
  }
  
  type Query {
    genderSelected: String!
    selectedSinger: String!
    genders: [Gender]
    singers: [Singer]
    videoclips: [Videoclip]
    waitings: [Waiting]
  }
`;
