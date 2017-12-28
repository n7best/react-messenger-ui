import React from 'react';
import { render, Message, ReceiptTemplate, ReceiptElement, Summary, Adjustment, Address } from '../src';

const App = () => (
  <Message recipient={{ id: '<PSID>' }}>
    <ReceiptTemplate
      recipientName="Charlie"
      orderNumber="12345678902"
      paymentMethod="Visa 1234"
      timestamp="1428444852"
    >
      <Address
        street1="1 Hacker Way"
        city="Menlo Park"
        postalCode="94025"
        state="CA"
        country="USA"
      />
      <Summary
        subtotal={75.00}
        shippingCost={4.95}
        totalTax={6.19}
        totalCost={56.14}
      />
      <Adjustment name="New Customer Discount" amount={20} />
      <Adjustment name="$10 Off Coupon" amount={10} />
      <ReceiptElement
        title="Classic White T-shirt"
        subTitle="100% Soft and Luxurious Cotton"
        quantity={2}
        price={50}
        currency="USD"
        imageUrl="http://petersapparel.parseapp.com/img/whiteshirt.png"
      />
      <ReceiptElement
        title="Classic Gray T-shirt"
        subTitle="100% Soft and Luxurious Cotton"
        quantity={1}
        price={25}
        currency="USD"
        imageUrl="http://petersapparel.parseapp.com/img/grayshirt.png"
      />
    </ReceiptTemplate>
  </Message>
);

console.log('output', JSON.stringify(render(<App />), null, 4));
