import React, {useState} from 'react'
import Header from '../../components/Header'
import {useDispatch, useSelector} from "react-redux";
import {addNewAccount} from "../../redux/usersSlice";
import {useNavigate} from "react-router-dom"


const AddAcount = () => {
    const user = useSelector(state => state.users.loggedInUser);
    const [accountName, setAccountName] = useState("");
    const [amount, setAmmount] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addAccount=(e)=>{
        e.preventDefault();
        dispatch(addNewAccount({
            accountName: accountName, 
            amount: Number(amount)
        }))
        navigate("/dashboard")
    }
  return (
    <>
        <Header/>
        <div style={{width: "100%", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <form style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 10}} onSubmit={addAccount}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <label>Account Name</label>
                    <input placeholder='e.g Savings' value={accountName} onChange={(e)=> setAccountName(e.target.value)} required/>
                </div>
                
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <label>Amount</label>
                    <input placeholder='e.g 20000' value={amount} onChange={(e)=> setAmmount(e.target.value)} required />
                </div>
                <button type="submit">Add Account</button>
            </form>
        </div>
    </>
  )
}

export default AddAcount