import PropTypes from "prop-types";
import {Row, TypeOperation, TotalAmount, CurrencyOperation} from "./TransactionHistory.styled";

export const TransactionHistoryItem =({type, amount, currency})=>{
    return(
            <Row>
            <TypeOperation>{type}</TypeOperation>
            <TotalAmount>{amount}</TotalAmount>
            <CurrencyOperation>{currency}</CurrencyOperation>
            </Row>
        );};
        
        TransactionHistoryItem.propTypes = {
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired 
            };
        