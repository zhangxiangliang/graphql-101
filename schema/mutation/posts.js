import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'
import { PostType } from '../type/posts'
import { API_BASE } from '../../config'
import axios from 'axios'

export const createPost = {
  type: PostType,
  args: {
    title: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: new GraphQLNonNull(GraphQLString)},
    author: {type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: (obj, args) => axios
    .post(`${ API_BASE }/posts`, {...args})
    .then(response => response.data)
}

export const updatePost = {
  type: PostType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: GraphQLString },
    content: {type: GraphQLString },
    author: {type: GraphQLString },
  },
  resolve: (obj, args) => axios
    .patch(`${ API_BASE }/posts/${args.id}`, {...args})
    .then(response => response.data)
}

export const deletePost = {
  type: PostType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: (obj, args) => axios
    .delete(`${ API_BASE }/posts/${args.id}`, {...args})
    .then(response => response.data)
}

export default {
  createPost,
  updatePost,
  deletePost,
}
