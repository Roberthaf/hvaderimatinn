/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  consent?: boolean | null,
  email: string,
  firstName: string,
  lastName: string,
  role: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  consent?: ModelBooleanInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  consent?: boolean | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  role?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateRecipeInput = {
  id?: string | null,
  name: string,
  link?: string | null,
  text?: string | null,
  carb?: number | null,
  fat?: number | null,
  protein?: number | null,
  kcal?: number | null,
  userRecipesId?: string | null,
};

export type ModelRecipeConditionInput = {
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  text?: ModelStringInput | null,
  carb?: ModelIntInput | null,
  fat?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  kcal?: ModelIntInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRecipeInput = {
  id: string,
  name?: string | null,
  link?: string | null,
  text?: string | null,
  carb?: number | null,
  fat?: number | null,
  protein?: number | null,
  kcal?: number | null,
  userRecipesId?: string | null,
};

export type DeleteRecipeInput = {
  id?: string | null,
};

export type CreateIngredientsInput = {
  id?: string | null,
  name: string,
  value?: number | null,
  carb?: number | null,
  fat?: number | null,
  protein?: number | null,
  kcal?: number | null,
  recipeIngredientsId?: string | null,
};

export type ModelIngredientsConditionInput = {
  name?: ModelStringInput | null,
  value?: ModelIntInput | null,
  carb?: ModelIntInput | null,
  fat?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  kcal?: ModelIntInput | null,
  and?: Array< ModelIngredientsConditionInput | null > | null,
  or?: Array< ModelIngredientsConditionInput | null > | null,
  not?: ModelIngredientsConditionInput | null,
};

export type UpdateIngredientsInput = {
  id: string,
  name?: string | null,
  value?: number | null,
  carb?: number | null,
  fat?: number | null,
  protein?: number | null,
  kcal?: number | null,
  recipeIngredientsId?: string | null,
};

export type DeleteIngredientsInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  consent?: ModelBooleanInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  text?: ModelStringInput | null,
  carb?: ModelIntInput | null,
  fat?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  kcal?: ModelIntInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelIngredientsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  value?: ModelIntInput | null,
  carb?: ModelIntInput | null,
  fat?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  kcal?: ModelIntInput | null,
  and?: Array< ModelIngredientsFilterInput | null > | null,
  or?: Array< ModelIngredientsFilterInput | null > | null,
  not?: ModelIngredientsFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    consent: boolean | null,
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        name: string,
        link: string | null,
        text: string | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    consent: boolean | null,
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        name: string,
        link: string | null,
        text: string | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    consent: boolean | null,
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        name: string,
        link: string | null,
        text: string | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    link: string | null,
    text: string | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    ingredients:  {
      __typename: "ModelIngredientsConnection",
      items:  Array< {
        __typename: "Ingredients",
        id: string,
        name: string,
        value: number | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    link: string | null,
    text: string | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    ingredients:  {
      __typename: "ModelIngredientsConnection",
      items:  Array< {
        __typename: "Ingredients",
        id: string,
        name: string,
        value: number | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    link: string | null,
    text: string | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    ingredients:  {
      __typename: "ModelIngredientsConnection",
      items:  Array< {
        __typename: "Ingredients",
        id: string,
        name: string,
        value: number | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateIngredientsMutationVariables = {
  input: CreateIngredientsInput,
  condition?: ModelIngredientsConditionInput | null,
};

export type CreateIngredientsMutation = {
  createIngredients:  {
    __typename: "Ingredients",
    id: string,
    name: string,
    value: number | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateIngredientsMutationVariables = {
  input: UpdateIngredientsInput,
  condition?: ModelIngredientsConditionInput | null,
};

export type UpdateIngredientsMutation = {
  updateIngredients:  {
    __typename: "Ingredients",
    id: string,
    name: string,
    value: number | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteIngredientsMutationVariables = {
  input: DeleteIngredientsInput,
  condition?: ModelIngredientsConditionInput | null,
};

export type DeleteIngredientsMutation = {
  deleteIngredients:  {
    __typename: "Ingredients",
    id: string,
    name: string,
    value: number | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    consent: boolean | null,
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        name: string,
        link: string | null,
        text: string | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      consent: boolean | null,
      email: string,
      firstName: string,
      lastName: string,
      role: string,
      recipes:  {
        __typename: "ModelRecipeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    link: string | null,
    text: string | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    ingredients:  {
      __typename: "ModelIngredientsConnection",
      items:  Array< {
        __typename: "Ingredients",
        id: string,
        name: string,
        value: number | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      name: string,
      link: string | null,
      text: string | null,
      carb: number | null,
      fat: number | null,
      protein: number | null,
      kcal: number | null,
      ingredients:  {
        __typename: "ModelIngredientsConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetIngredientsQueryVariables = {
  id: string,
};

export type GetIngredientsQuery = {
  getIngredients:  {
    __typename: "Ingredients",
    id: string,
    name: string,
    value: number | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListIngredientssQueryVariables = {
  filter?: ModelIngredientsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIngredientssQuery = {
  listIngredientss:  {
    __typename: "ModelIngredientsConnection",
    items:  Array< {
      __typename: "Ingredients",
      id: string,
      name: string,
      value: number | null,
      carb: number | null,
      fat: number | null,
      protein: number | null,
      kcal: number | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    consent: boolean | null,
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        name: string,
        link: string | null,
        text: string | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    consent: boolean | null,
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        name: string,
        link: string | null,
        text: string | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    consent: boolean | null,
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        name: string,
        link: string | null,
        text: string | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecipeSubscriptionVariables = {
  owner: string,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    link: string | null,
    text: string | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    ingredients:  {
      __typename: "ModelIngredientsConnection",
      items:  Array< {
        __typename: "Ingredients",
        id: string,
        name: string,
        value: number | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateRecipeSubscriptionVariables = {
  owner: string,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    link: string | null,
    text: string | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    ingredients:  {
      __typename: "ModelIngredientsConnection",
      items:  Array< {
        __typename: "Ingredients",
        id: string,
        name: string,
        value: number | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteRecipeSubscriptionVariables = {
  owner: string,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe:  {
    __typename: "Recipe",
    id: string,
    name: string,
    link: string | null,
    text: string | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    ingredients:  {
      __typename: "ModelIngredientsConnection",
      items:  Array< {
        __typename: "Ingredients",
        id: string,
        name: string,
        value: number | null,
        carb: number | null,
        fat: number | null,
        protein: number | null,
        kcal: number | null,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateIngredientsSubscriptionVariables = {
  owner: string,
};

export type OnCreateIngredientsSubscription = {
  onCreateIngredients:  {
    __typename: "Ingredients",
    id: string,
    name: string,
    value: number | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateIngredientsSubscriptionVariables = {
  owner: string,
};

export type OnUpdateIngredientsSubscription = {
  onUpdateIngredients:  {
    __typename: "Ingredients",
    id: string,
    name: string,
    value: number | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteIngredientsSubscriptionVariables = {
  owner: string,
};

export type OnDeleteIngredientsSubscription = {
  onDeleteIngredients:  {
    __typename: "Ingredients",
    id: string,
    name: string,
    value: number | null,
    carb: number | null,
    fat: number | null,
    protein: number | null,
    kcal: number | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
