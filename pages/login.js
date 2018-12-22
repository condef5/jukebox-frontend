import Head from 'next/head';
import Link from 'next/link';
import SigninBox from '../components/Signin';
import withAuth from '../lib/withAuth';

/* eslint-disable */
const Login = () => (
  <div className="login">
    <Head>
      <title>Jukebox - Log In</title>
      <link rel="stylesheet" href="/static/css/landing.css" />
    </Head>
    <Link href="/">
      <img className="logo" src="/static/assets/images/logo-flat.svg" alt="perumatic" />
    </Link>
    <SigninBox />
    <div className="footer">
      <p>
        ¿Aún no tienes una cuenta?{' '}
        <Link href="/register">
          <a>Sign Up</a>
        </Link>
      </p>
    </div>
  </div>
);

export default withAuth(Login, { logoutRequired: true });
