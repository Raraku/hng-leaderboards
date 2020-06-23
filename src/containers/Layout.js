import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "./hng_logo.svg";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";

class CustomLayout extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    const { authenticated, cart, loading } = this.props;
    console.log(cart);
    return (
      <div>
        <Menu fixed="top">
          <Container>
            <Link to="/">
              <Menu.Item header>
                <img src={Logo} />
              </Menu.Item>
            </Link>
            <Menu.Menu position="right">
              {authenticated && (
                <Menu.Item header onClick={() => this.props.logout()}>
                  Logout
                </Menu.Item>
              )}

              <Menu.Item as={Link} to="/how-to" header>
                How to use
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
        <div style={{ marginTop: "50px" }}>{this.props.children}</div>
        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            Submission for HNGI7 Task Stage 3. email: airenov500@gmail.com
          </Container>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomLayout)
);
