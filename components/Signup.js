import { Mutation, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import cookie from 'cookie';
import redirect from '../lib/redirect';

const CREATE_USER = gql`
  mutation Create($name: String!, $email: String!, $password: String!) {
    signup(username: $name, email: $email, password: $password) {
      token
    }
  }
`;

const RegisterBox = ({ client }) => {
  let name;
  let email;
  let password;

  return (
    <Mutation
      mutation={CREATE_USER}
      onCompleted={data => {
        // Store the token in cookie
        console.log(data.signup.token);
        document.cookie = cookie.serialize('token', data.signup.token, {
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
      {(create, { data, error }) => (
        <form
          className="vertical-form"
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();

            create({
              variables: {
                name: name.value,
                email: email.value,
                password: password.value
              }
            });

            name.value = email.value = password.value = '';
          }}
        >
          <legend>Register</legend>
          {error && (
            <span style={{ color: '#333' }}>
              Issue occurred while registering :(
            </span>
          )}
          <input
            name="name"
            placeholder="Username"
            ref={node => {
              name = node;
            }}
            type="text"
          />
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

export default withApollo(RegisterBox);
