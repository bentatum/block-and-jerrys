/*
   checkoutCart.js - displays the invoice -- both QR and copyable plaintext
   2018 Robert Durst
   https://github.com/robertDurst/blockandjerrys
*/

import React from 'react';
import {
  RaisedButton,
  Paper,
  TextField,
} from 'material-ui';
import {
  orange500,
} from 'material-ui/styles/colors';

const styles = {
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
  },
};

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <Paper zDepth={3} >
        <form action="" style={styles.form} >
          <TextField
            floatingLabelText="Name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextField
            hintText="Delivery address must be in the city of San Francisco."
            hintStyle={{ color: orange500 }}
            floatingLabelStyle={{ color: orange500 }}
            floatingLabelText="Delivery Address"
            name="address"
            type="text"
            rows={2}
            multiLine
            rowsMax={4}
            value={this.state.address}
            onChange={this.handleChange}
          />
          <TextField
            floatingLabelText="Phone Number"
            name="phone"
            type="number"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </form>
        <RaisedButton
          label="Confirm"
          secondary
          fullWidth
          /* disabled={!(this.state.name &&
            this.state.address &&
            this.state.phone.length >= 10
          )} */
          onClick={this.props.generateInvoice}
          style={{ marginTop: '1em' }}
        />
      </Paper>
    );
  }
}

export default UserInfo;
