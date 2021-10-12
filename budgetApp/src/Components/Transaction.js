import React from 'react'

const Transaction = () => {
    return (
        <div className="form-wrapper">
            <form>
                <div className="input-group income">
                    <input type="text" placeholder="Add your income" autoComplete="off"/>
                    <input type="number" placeholder="Enter the amount" autoComplete="off" />
                    <input type="submit" value="Submit"  />
                </div>
            </form>
            <form>
                <div className="input-group income">
                    <input type="text" placeholder="Add your expense" autoComplete="off"/>
                    <input type="number" placeholder="Enter the amount" autoComplete="off" />
                    <input type="submit" value="Submit"  />
                </div>
            </form>
        </div>
    )
}

export default Transaction
