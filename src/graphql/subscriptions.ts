/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($owner: String!) {
    onCreateRecipe(owner: $owner) {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($owner: String!) {
    onUpdateRecipe(owner: $owner) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($owner: String!) {
    onDeleteRecipe(owner: $owner) {
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
export const onCreateIngredients = /* GraphQL */ `
  subscription OnCreateIngredients($owner: String!) {
    onCreateIngredients(owner: $owner) {
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
export const onUpdateIngredients = /* GraphQL */ `
  subscription OnUpdateIngredients($owner: String!) {
    onUpdateIngredients(owner: $owner) {
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
export const onDeleteIngredients = /* GraphQL */ `
  subscription OnDeleteIngredients($owner: String!) {
    onDeleteIngredients(owner: $owner) {
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
