import React from 'react';
import checkLoggedIn from './checkLoggedIn';
import redirect from './redirect';

export default function withAuth(
  BaseComponent,
  { loginRequired = true, logoutRequired = false } = {}
) {
  class App extends React.PureComponent {
    static defaultProps = {
      user: null
    };

    static async getInitialProps(ctx) {
      const { user } = await checkLoggedIn(ctx.apolloClient);

      if (loginRequired && !logoutRequired && !user) {
        redirect(ctx, '/login');
        return;
      }

      if (logoutRequired && user) {
        redirect(ctx, '/');
      }

      const props = { user };

      if (BaseComponent.getInitialProps) {
        Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});
      }

      /* eslint consistent-return: 0 */
      return props;
    }

    render() {
      const { user } = this.props;

      if (loginRequired && !logoutRequired && !user) {
        return null;
      }

      if (logoutRequired && user) {
        return null;
      }

      return <BaseComponent {...this.props} />;
    }
  }

  return App;
}
