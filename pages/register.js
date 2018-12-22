import Head from 'next/head';
import Link from 'next/link';
import Signup from '../components/Signup';
import withAuth from '../lib/withAuth';

/* eslint-disable */
const Register = () => (
  <div className="login">
    <Head>
      <title>Jukebox - Register</title>
      <link rel="stylesheet" href="/static/css/landing.css" />
    </Head>
    <Link href="/">
      <img className="logo" src="/static/assets/images/logo-flat.svg" alt="perumatic" />
    </Link>
    <Signup />
    <div className="footer">
      <p>
        ¿Ya tienes una cuenta?{' '}
        <Link href="/login">
          <a>Log In</a>
        </Link>
      </p>
    </div>
  </div>
);

export default withAuth(Register, { logoutRequired: true });
