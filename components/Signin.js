import { Mutation, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import cookie from 'cookie';
import redirect from '../lib/redirect';

const SIGN_IN = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(login: $email, password: $password) {
      token
    }
  }
`;

// TODO: Find a better name for component.
const SigninBox = ({ client }) => {
  let email;
  let password;

  return (
    <Mutation
      mutation={SIGN_IN}
      onCompleted={data => {
        // Store the token in cookie
        document.cookie = cookie.serialize('token', data.signin.token, {
          maxAge: 30 * 24 * 60 * 60 // 30 days
        });
        // Force a reload of all the current queries now that the user is
        // logged in
        client.cache.reset().then(() => {
          redirect({}, '/');
        });
      }}
      onError={error => {
        // If you want to send error to external service?
        console.log(error);
      }}
    >
      {(signinUser, { data, error }) => (
        <form
          className="vertical-form"
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();

            signinUser({
              variables: {
                email: email.value,
                password: password.value
              }
            });

            email.value = password.value = '';
          }}
        >
          <legend>Log In</legend>
          {error && (
            <span style={{ color: '#333' }}>Usuario no encontrado</span>
          )}
          <input
            name="email"
            placeholder="Email"
            ref={node => {
              email = node;
            }}
            type="email"
          />
          <input
            name="password"
            placeholder="Password"
            ref={node => {
              password = node;
            }}
            type="password"
          />
          <input type="submit" value="Log In" />
        </form>
      )}
    </Mutation>
  );
};

export default withApollo(SigninBox);
