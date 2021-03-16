import Head from 'next/head';
import Logo from 'components/Logo';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Wild Mane</title>
				<meta charSet='utf-8' />
				<meta name='description' content='Hair studio located in Seattle, WA' />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Logo />
			</main>
		</div>
	);
}
