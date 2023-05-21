import PropTypes from "prop-types";
import {Transaction, Head, Row, Type, Amount, Currency, Body} from "./TransactionHistory.styled";
import { TransactionHistoryItem } from "./TransactionHistoryItem";


export const TransactionHistory =({transactions})=>{
return(
<Transaction>
    <Head>
        <Row>
<Type>Type</Type>
<Amount>Amount</Amount>
<Currency>Currency</Currency>
        </Row>
    </Head> 
    <Body>
        {transactions.map(({id, type, amount, currency})=>
        (
            <TransactionHistoryItem
            key ={id}
            type={type}
            amount={amount}
            currency={currency}/>
        ))}
    </Body>
   
</Transaction>
 
);
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };