import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_L2ytL3qrRKwxlEHeZiuBvszG00nq1D4zCY'

    const onToken = token => {
        console.log(token)
        alert('Payment Successul')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Clothing ecommerce"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton