import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

const name = 'UserType'

const fields = {
  id: { type: GraphQLString },
  name: { type: GraphQLString },
}

export const UserType = new GraphQLObjectType({ fields, name })
