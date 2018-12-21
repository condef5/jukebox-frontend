import Head from 'next/head';
import Link from 'next/link';

/* eslint-disable */
export default () => (
  <div className="login">
    <Head>
      <title>Jukebox - Log In</title>
      <link rel="stylesheet" href="/static/css/landing.css" />
    </Head>
    <Link href="/">
      <img className="logo" src="/static/assets/images/logo-flat.svg" alt="perumatic" />
    </Link>
    <form className="vertical-form">
      <legend>Log In</legend>
      <input type="text" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input type="submit" name="commit" value="Log In" />
    </form>
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
