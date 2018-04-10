import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import { UserType } from './users'
import { CommentType } from './comments'
import { API_BASE } from '../../config'
import axios from 'axios'

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

export const name = 'PostType'
export const PostType = new GraphQLObjectType({ name, fields })
