/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      consent
      email
      firstName
      lastName
      role
      recipes {
        items {
          id
          name
          link
          text
          carb
          fat
          protein
          kcal
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        consent
        email
        firstName
        lastName
        role
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      link
      text
      carb
      fat
      protein
      kcal
      ingredients {
        items {
          id
          name
          value
          carb
          fat
          protein
          kcal
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        link
        text
        carb
        fat
        protein
        kcal
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getIngredients = /* GraphQL */ `
  query GetIngredients($id: ID!) {
    getIngredients(id: $id) {
      id
      name
      value
      carb
      fat
      protein
      kcal
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listIngredientss = /* GraphQL */ `
  query ListIngredientss(
    $filter: ModelIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredientss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        value
        carb
        fat
        protein
        kcal
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
