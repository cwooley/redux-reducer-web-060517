export function managePresents(state, action){
  switch (action.type) {
    case "INCREASE":
      let increasedPresents = state.numberOfPresents + 1
      return {numberOfPresents: increasedPresents}
      break;
    case "DECREASE":
      let decreasedPresents = state.numberOfPresents - 1
      return {numberOfPresents: decreasedPresents}
      break;
    default:
      return state

  }
}
