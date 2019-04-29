export default function autoSuccessFailureHelper(actionName, fn) {
  if (typeof actionName !== 'string') {
    throw new Error('actionName must be a string')
  }
  if (typeof fn !== 'function') {
    throw new Error('fn must be a function')
  }
  const actionNameUpper = actionName.toUpperCase()
  const actionRequest = `${actionNameUpper}_REQUEST`
  const actionReset = `${actionNameUpper}_RESET`
  const actionSuccess = `${actionNameUpper}_SUCCESS`
  const actionFailure = `${actionNameUpper}_FAILURE`

  const initialState = {
    data: null,
    loading: false,
    error: null
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionRequest:
        return {
          ...state,
          loading: true,
          error: null,
          data: null
        }

      case actionReset:
        return {
          ...state,
          loading: false,
          error: null,
          data: null
        }

      case actionSuccess:
        return {
          ...state,
          loading: false,
          data: action.data !== undefined ? action.data : null,
          error: null
        }

      case actionFailure:
        return {
          ...state,
          loading: false,
          data: null,
          error: action.error
        }

      default:
        return state
    }
  }

  // we are not using arrow function, because there no arguments binding
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  const action = function action(...args) {
    return dispatch => {
      dispatch({
        type: actionRequest
      })
      try {
        const result = fn(...args)
        // It's a promise
        if (typeof result.then === 'function') {
          return result
            .then(data =>
              dispatch({
                type: actionSuccess,
                data
              })
            )
            .catch(error =>
              dispatch({
                type: actionFailure,
                error
              })
            )
        }
        return dispatch({
          type: actionSuccess,
          data: result
        })
      } catch (error) {
        return dispatch({
          type: actionFailure,
          error
        })
      }
    }
  }

  return {
    action,
    actionTypes: {
      request: actionRequest,
      reset: actionReset,
      success: actionSuccess,
      failure: actionFailure
    },
    reducer
  }
}
