/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createIngredients = /* GraphQL */ `
  mutation CreateIngredients(
    $input: CreateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    createIngredients(input: $input, condition: $condition) {
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
export const updateIngredients = /* GraphQL */ `
  mutation UpdateIngredients(
    $input: UpdateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    updateIngredients(input: $input, condition: $condition) {
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
export const deleteIngredients = /* GraphQL */ `
  mutation DeleteIngredients(
    $input: DeleteIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    deleteIngredients(input: $input, condition: $condition) {
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
