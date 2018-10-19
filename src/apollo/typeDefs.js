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
  }

  type Videoclip {
    id: Int!
    name: String!
    author: String!
    url: String!
  }

  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: Int!): Todo
    visibilityFilter(filter: String!): String
  }
  type Query {
    visibilityFilter: String
    todos: [Todo]
    genders: [Gender]
    singers: [Singer]
    videoclips: [Videoclip]
  }
`;
