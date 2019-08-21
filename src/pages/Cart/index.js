import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (

    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>TDE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-coca-cola-basket-feminino/06/GGG-1427-006/GGG-1427-006_detalhe2.jpg?resize=326:*" alt="Tenis" />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                 <button tupe="button">
                   <MdRemoveCircleOutline size={20} color="#33943b" />
                 </button>
                 <input type="number" readOnly value={2}/>
                 <button tupe="button">
                   <MdAddCircleOutline size={20} color="#33943b" />
                 </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#33943b" />
              </button>

            </td>
          </tr>
        </tbody>

      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
