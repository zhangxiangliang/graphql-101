import { GraphQLObjectType, GraphQLString } from 'graphql'


const fields = {
  id: { type: GraphQLString },
  name: { type: GraphQLString },
}

export const name = 'UserType'
export const UserType = new GraphQLObjectType({ fields, name })
