import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { extendedFormat } from 'helpers/formatDateToNow';

export const CryptoHistory = ({ crypto }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {crypto.map(({ id, price, amount, date }) => (
          <Tr>
            <Td>{id}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{extendedFormat(date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
