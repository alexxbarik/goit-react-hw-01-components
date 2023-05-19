import styled from '@emotion/styled'


export const Item = styled.li`
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-radius: 5%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    background-color:${props=>{
        if(props.isOnline === true){
            return "green";
        }else if(props.isOnline === false){
            return "red"; 
        }else{
            return "black"
        }
    }};
`;
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;
export const Name = styled.p`
    font-weight: 700;
    font-size: 28px;
    line-height: 1.17;
    margin-top: 0px;
    margin-bottom: 0px;
`;