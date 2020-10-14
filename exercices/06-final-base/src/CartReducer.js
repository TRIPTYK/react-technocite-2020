export const ADDTOCART = 'ADDTOCART'
export const ADDTOCARTFROMITEMS = 'ADDTOCARTFROMITEMS'
export const REMOVEFROMCART = 'REMOVEFROMCART'
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADDTOCART:
      if (action.payload.item.qt) {
        return state.map((item) => {
          if (item.id !== action.payload.item.id) {
            return item
          }
          return {
            ...item,
            qt: item.qt + 1,
          }
        })
      }
      return [...state, { ...action.payload.item, qt: 1 }]
    case ADDTOCARTFROMITEMS: {
      const itemInState = state.find(
        (item) => item.id === action.payload.item.id,
      )
      if (itemInState) {
        return state.map((item) => {
          if (item.id !== action.payload.item.id) {
            return item
          }
          return {
            ...item,
            qt: item.qt + 1,
          }
        })
      }
      return [
        ...state.filter((item) => item.id !== action.payload.item.id),
        { ...action.payload.item, qt: 1 },
      ]
    }
    case REMOVEFROMCART: {
      if (action.payload.item.qt >= 1) {
        return state.map((item) => {
          if (item.id !== action.payload.item.id) {
            return item
          }
          return {
            ...item,
            qt: item.qt - 1,
          }
        })
      }
      return [...state.filter((item) => item.id !== action.payload.item.id)]
    }
    default:
      return state
  }
}

export default cartReducer
