import { GraphQLString } from 'graphql'

export default {
  type: GraphQLString,
  resolve: () => 'hello ~'
}
