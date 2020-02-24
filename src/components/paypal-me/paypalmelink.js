import React from "react"
import "./paypalme.css"

const PaypalMeLink = ({amount, text = "Purchase"}) => (
    <a className="paypalme" href={`https://paypal.me/sqljosh/${amount}`}>{text}</a>
)

export default PaypalMeLink