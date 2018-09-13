export const getCategoryAction = (sale_categories) => {
  return {
    type: 'GET_CATEGORIES',
    payload: sale_categories
  }
}
