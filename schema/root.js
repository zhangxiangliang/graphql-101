import { GraphQLObjectType } from 'graphql'
import posts from './posts'
import greeting from './greeting'

export default new GraphQLObjectType({
  name: 'QueryRoot',
  fields: { posts, greeting },
});
