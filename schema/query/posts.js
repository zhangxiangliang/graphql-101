import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import { UserType } from './users'
import { CommentType } from './commets'
import { API_BASE } from '../../config'
import axios from 'axios'

const name = 'PostType'

const fields = {
  id: { type: GraphQLString },
  title: { type: GraphQLString },
  content: { type: GraphQLString },
  author: {
    type: UserType,
    resolve: (obj) => axios
      .get(`${API_BASE}/users/${obj.author}`)
      .then(response => response.data)
  },
  comments: {
    type: new GraphQLList(CommentType),
    resolve: (obj) => axios
      .get(`${API_BASE}/posts/${obj.id}/comments/`)
      .then(response => response.data)
  }
}

export const PostType = new GraphQLObjectType({ name, fields })

export const posts = {
  type: new GraphQLList(PostType),
  resolve: () => axios
    .get(`${ API_BASE }/posts`)
    .then(response => response.data)
}

export const post = {
  type: PostType,
  args: {id: { type: GraphQLString }},
  resolve: (obj, args, context) => axios
    .get(`${ API_BASE }/posts/${args.id}`)
    .then(response => response.data)
}
