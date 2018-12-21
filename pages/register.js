import Head from 'next/head';
import Link from 'next/link';

/* eslint-disable */
export default () => (
  <div className="login">
    <Head>
      <title>Jukebox - Register</title>
      <link rel="stylesheet" href="/static/css/landing.css" />
    </Head>
    <Link href="/">
      <img className="logo" src="/static/assets/images/logo-flat.svg" alt="perumatic" />
    </Link>
    <form className="vertical-form">
      <legend>Sign Up</legend>
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input type="submit" name="commit" value="Sign Up" />
    </form>
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
