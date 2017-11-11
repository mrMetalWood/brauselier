import React from 'react';
import Helmet from 'react-helmet';

const Meta = () => (
  <Helmet>
    <html lang="de" />

    <meta name="description" content="Limonade Rezensionen" />
    <meta
      name="keywords"
      content="Brause, Limonade, Drinks, Rezensionen, Koffein"
    />

    <title>Brauselier</title>

    <meta name="theme-color" content="#ffffff" />
    <meta name="mobile-web-app-capable" content="yes" />

    <meta name="apple-mobile-web-app-title" content="Brauselier" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />

    <meta name="msapplication-navbutton-color" content="#ffffff" />
    <meta name="msapplication-TileColor" content="#4e4c5d" />
    <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
    <meta name="msapplication-config" content="browserconfig.xml" />

    <meta name="application-name" content="Brauselier" />

    <meta name="msapplication-tooltip" content="Brauselier" />
    <meta name="msapplication-starturl" content="/" />

    <meta name="msapplication-tap-highlight" content="no" />

    <link
      rel="apple-touch-icon-precomposed"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />

    <link href="/android-chrome-512x512.png" rel="apple-touch-startup-image" />

    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4e4c5d" />

    <link href="/android-chrome-512x512.png" rel="icon" sizes="192x192" />

    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />

    <link rel="manifest" href="/manifest.json" />
  </Helmet>
);

export default Meta;
