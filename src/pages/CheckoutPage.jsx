import { 
    FormControl, 
    FormLabel, 
    Input, 
    FormErrorMessage, 
    FormHelperText,

    Select, 
    Button, 
    Box,
    Grid
  } from  '@chakra-ui/react';
import { useState } from 'react';
import "./styles.css"
  
  
 export default function CheckoutPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // process the form submission here
    }
  
    return (
        <Grid placeItems="center" className='container' padding={16}>
              <form  border="1px solid red" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="first-name">First Name</FormLabel>
          <Input 
            id="first-name" 
            type="text" 
            value={firstName} 
            onChange={(event) => setFirstName(event.target.value)} 
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="last-name">Last Name</FormLabel>
          <Input 
            id="last-name" 
            type="text" 
            value={lastName} 
            onChange={(event) => setLastName(event.target.value)} 
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input 
            id="address" 
            type="text" 
            value={address} 
            onChange={(event) => setAddress(event.target.value)} 
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="city">City</FormLabel>
          <Input 
            id="city" 
            type="text" 
            value={city} 
            onChange={(event) => setCity(event.target.value)} 
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="state">State</FormLabel>
          <Input 
            id="state" 
            type="text" 
            value={state} 
            onChange={(event) => setState(event.target.value)} 
          />
        </FormControl>
       <FormControl>
    <FormLabel htmlFor="country">Country</FormLabel>
    <Select 
      id="country" 
      value={country} 
      onChange={(event) => setCountry(event.target.value)}
    >
      <option value="">Select a country</option>
      <option value="USA">USA</option>
      <option value="India">India</option>
    </Select>
  </FormControl>
  <FormControl>
    <FormLabel htmlFor="zip-code">Zip Code</FormLabel>
    <Input 
      id="zip-code" 
      type="text" 
      value={zipCode} 
      onChange={(event) => setZipCode(event.target.value)} 
    />
  </FormControl>
  <FormControl>
    <FormLabel htmlFor="phone-number">Phone Number</FormLabel>
    <Input 
      id="phone-number" 
      type="text" 
      value={phoneNumber} 
      onChange={(event) => setPhoneNumber(event.target.value)} 
    />
  </FormControl>
  
  <FormControl>
    <FormLabel htmlFor="card-holder-name">Card Holder Name</FormLabel>
    <Input 
      id="card-holder-name" 
      type="text" 
      value={cardHolderName} 
      onChange={(event) => setCardHolderName(event.target.value)} 
    />
  </FormControl>
  <FormControl>
    <FormLabel htmlFor="card-number">Card Number</FormLabel>
    <Input 
      id="card-number" 
      type="text" 
      value={cardNumber} 
      onChange={(event) => setCardNumber(event.target.value)} 
    />
  </FormControl>
  <FormControl>
    <FormLabel htmlFor="expiry">Expiry</FormLabel>
    <Input 
      id="expiry" 
      type="text" 
      value={expiry} 
      onChange={(event) => setExpiry(event.target.value)} 
    />
  </FormControl>
  <FormControl>
    <FormLabel htmlFor="cvv">CVV</FormLabel>
    <Input 
      id="cvv" 
      type="text" 
      value={cvv} 
      onChange={(event) => setCvv(event.target.value)} 
    />
  </FormControl>
  
  <Button type="submit" variantColor="teal" mt={4}>
    Proceed to Pay
  </Button>
</form>
        </Grid>
    )
}