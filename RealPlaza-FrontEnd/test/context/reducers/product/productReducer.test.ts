import {initialState, ProductAction, ProductActionType, productReducer} from '../../../../src/context/reducers'

describe('Pruebas en productReducer', () => { 
  test('should return default state', () => {
    const action: ProductAction = {
      type: ProductActionType.DEFAULT,
      payload:{}
    }
    const state = productReducer(initialState, action )
    expect(state).toEqual(initialState)
  })


  test('should call LOADING', () => {
    const action: ProductAction = {
      type: ProductActionType.LOADING,
      payload:{
        isLoading:true
      }
    }
    const state = productReducer(initialState, action)
    expect(state).toEqual({
      isLoading: true,
      products: undefined,
      filter: initialState.filter
    })
  })

  test('should call LOADED', () => {
    const action: ProductAction = {
      type: ProductActionType.LOADED,
      payload:{
        products: [
          {
            id: '1',
            name: 'Bruno',
            brandName: 'Bruno',
            price: 100,
            discount: 40,
            priceWithDiscount: 60,
            pickupFree: true,
            imageUrl: ''
          }          
        ]
      }
    }
    const state = productReducer(initialState, action)
    expect(state).toEqual({
      isLoading: false,
      products: [
        {
          id: '1',
          name: 'Bruno',
          brandName: 'Bruno',
          price: 100,
          discount: 40,
          priceWithDiscount: 60,
          pickupFree: true,
          imageUrl: ''
        }          
      ],
      filter: initialState.filter
    })
  })

  test('should call ERROR', () => {
    const action: ProductAction = {
      type: ProductActionType.ERROR,
      payload:{
        error: {
          message:'Internal Server Error'
        }
      }
    }
    const state = productReducer(initialState, action)
    console.log(state)
    expect(state).toEqual({
      isLoading: false,
      products: undefined,
      filter: initialState.filter,
      error: {
        message:'Internal Server Error'
      }
    })
  })

  test('should call FILTER_CHANGED', () => {
    const action: ProductAction = {
      type: ProductActionType.FILTER_CHANGED,
      payload:{
        filter:{
          name:'Bruno',
          minPrice:10,
          maxPrice:15
        }
      }
    }
    const state = productReducer(initialState, action)
    expect(state).toEqual({
      isLoading: false,
      products: undefined,
      filter:{
        name:'Bruno',
        minPrice:10,
        maxPrice:15
      }
    })
  })
})