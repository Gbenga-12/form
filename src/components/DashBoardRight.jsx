import React from "react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useSelector, useDispatch } from "react-redux";
import { deleteAccount, logOut } from "../redux/usersSlice.js";
import { useNavigate } from "react-router-dom";

const DashBoardRight = () => {
  const {fromAccount} = useContext(AuthContext);
  // const users = useSelector(state => state.users.signedUpUsers);
  const user = useSelector(state => state.users.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [theAccountInfo, setTheAccountInfo] = useState(null);
  const [theTransactions, setTheTransactions] = useState([]);
  

  // useEffect(() => {
  //   const accountInfo = users.find(e => e.id === user?.id) || null;
  //   const transactions = accountInfo?.transactions || [];
  //   const account = accountInfo?.accounts?.find(account => account.id === fromAccount?.id);
  //   // console.log("dashboard right",user);
  //   setTheAccountInfo(account);
  //   setTheTransactions(transactions);
  // }, [fromAccount, users, user]);
  
  
  return (
    <div className="Bank_Form_Wrapper_Right">
      <div className="Bank_Form_Wrapper_Right_Top">
        <article className="Bank_Content_Wrapper_Right_Top">
          <p>Total Available Balance</p>
          <h2 contentEditable="true">&#8358; {theAccountInfo?.balance}</h2>
          <span>Across 2 Accounts</span>
        </article>
      </div>
      <div className="Bank_Form_Wrapper_Right_Bottom">
        <p>Transactions History</p>
        
        {
          theTransactions?.map((transaction, index) => (
            <div className="Bank_Content_Wrapper_Right_Bottom_Transaction" key={index}>
              <span>{transaction.type === "debit" ? "Debit:" : "Credit:"}</span>
              <span>{transaction.memo}</span>
              <span>{transaction.type === "debit" ? "-" : "+"} &#8358; {transaction.amount}</span>
            </div>
          ))
        }
      </div>
      <button onClick={() => {dispatch(deleteAccount(user?.id)); dispatch(logOut());  navigate("/signup")}}>Delete User</button>
      <button onClick={() =>   navigate("/add")}>Add Acount</button>
    </div>
  );
};

export default DashBoardRight;
