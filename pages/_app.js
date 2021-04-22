import Head from 'next/head';
import Bg from 'components/Bg';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Wild Mane Studio</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content='Find Your Wild - In the <3 of Ballard.' />

				<link rel='icon' href='./favicon.png' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap' />

				<meta property='fb:app_id' content={process.env.facebookId} />
				<meta property='og:description' content='Find Your Wild - In the <3 of Ballard.' />
				<meta property='og:image' content={`${process.env.serverDomain + process.env.NEXT_PUBLIC_IMGS_FOLDER}card-facebook.png`} />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
				<meta property='og:title' content='Wild Mane Studio' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={process.env.serverDomain} />

				<meta property='business:contact_data:street_address' content='1417 NW 54th St #105' />
				<meta property='business:contact_data:locality' content='Seattle' />
				<meta property='business:contact_data:postal_code' content='98107' />
				<meta property='business:contact_data:country_name' content='USA' />

				<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.googleAnalyticsId}`}></script>
				<script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag() {dataLayer.push(arguments);}; gtag('js', new Date()); gtag('config', '${process.env.googleAnalyticsId}', {page_path: window.location.pathname});` }} />
			</Head>
			<Bg />
			<Component {...pageProps} />
		</>
	);
}

export default App;
