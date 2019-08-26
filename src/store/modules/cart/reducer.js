import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if(productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount)
        }
      })
    }
    default:
      return state;
  }
}

// instalação do immer para realizar mutabilidade no state do reducer atraves do draft
// caso de erro do eslint no draft é porque o eslint nao permite alterar parametros que
// recebemos de uma função. Basta desabilitar no eslint atraves do comando:
// no-param-reassign:off
