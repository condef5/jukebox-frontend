import Head from 'next/head';
import Link from 'next/link';
import withAuth from '../lib/withAuth';
import Signout from '../components/Signout';

/* eslint-disable */
const Index = ({ user }) => (
  <>
    <Head>
      <title>Jukebox</title>
      <link rel="stylesheet" href="/static/css/landing.css" />
    </Head>
    <section className="hero align-center color-white">
      <div className="videoWrap">
        <video autoPlay loop muted>
          <source src="/static/assets/videos/babe.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="nav">
        <a href="/">
          <img src="/static/assets/images/logo-flat.svg" alt="logo-perumatic" />
        </a>
        <div>
          {!user ? (
            <Link href="/login">
              <a>Iniciar sesion</a>
            </Link>
          ) : (
            <>
              <a href="#">{user.username}</a>
              <a href="/app">Go to app</a>
              <Signout />
            </>
          )}
        </div>
      </div>
      <div className="wrap">
        <article>
          <h3 className="wow fadeIn">
            Elige tu música <span>favorita</span>
          </h3>
          <p className="wow fadeIn" data-wow-delay=".1s">
            Agrega la próxima canción que quieres que suene en tu bar.
          </p>
          <a href="#" className="btn btn-hero wow fadeIn" data-wow-delay=".2s">
            Crea Tu Cuenta Gratis
          </a>
        </article>
      </div>
    </section>
    <section id="business" className="hero align-center color-white">
      <div className="wrap">
        <article>
          <h3 className="wow fadeIn">
            ¿Tienes un <span>bar</span>?
          </h3>
          <p className="wow fadeIn" data-wow-delay=".1s">
            Instalá Jukebox y que tus clientes elijan la música
          </p>
          <a href="#" className="btn btn-hero wow fadeIn" data-wow-delay=".2s">
            Jukebox para negocios
          </a>
        </article>
      </div>
    </section>
  </>
);

export default withAuth(Index, { loginRequired: false });
