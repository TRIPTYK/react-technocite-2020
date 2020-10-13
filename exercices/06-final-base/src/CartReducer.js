export const ADDTOCART = 'ADDTOCART'
export const ADDTOCARTFROMITEMS = 'ADDTOCARTFROMITEMS'
export const REMOVEFROMCART = 'REMOVEFROMCART'
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADDTOCART:
      if (action.payload.item.qt) {
        action.payload.item.qt += 1
        return [
          ...state.filter((item) => item.id !== action.payload.item.id),
          action.payload.item,
        ]
      }
      return [...state, { ...action.payload.item, qt: 1 }]

    case ADDTOCARTFROMITEMS:
      if (!action.payload.item.qt) {
        return [
          ...state.filter((item) => item.id !== action.payload.item.id),
          { ...action.payload.item, qt: 1 },
        ]
      }
      action.payload.item.qt += 1
      return [
        ...state.filter((item) => item.id !== action.payload.item.id),
        { ...action.payload.item },
      ]

    case REMOVEFROMCART:
      if (action.payload.item.qt > 1) {
        action.payload.item.qt -= 1
        return [
          ...state.filter((item) => item.id !== action.payload.item.id),
          action.payload.item,
        ]
      }
      return [...state.filter((item) => item.id === action.payload.item.id)]

    default:
      return state
  }
}

export default cartReducer
