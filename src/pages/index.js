import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className={styles.container}>
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<br/>
				<a id={styles.getStarted} className={styles.button} href="docs/intro"> Get started </a>
				<a id={styles.getStarted} className={styles.button} href="#features"> Learn More </a>
			</div>
			<img id={styles.curve} src="./img/curve.svg" />
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	
	return (
		<Layout
			title={`Home`}
			description="An open source 2d game engine that makes sure your game stands out.">
			<HomepageHeader />
			<div id="features"></div>
			<main>
				<div className={styles.card}>
					<img align="left" src='img/easy-to-use.svg' width="400px"/>
					<div className={styles.cardTextLeft}>
						<h1>Easy to use</h1>
						<p>Ducktape follows a Unity-like paradigm, making it easy for new game devs and former Unity users to get started.</p>
					</div>
				</div>

				<div className={styles.card}>
					<img align="right" src='img/focus-on-difference.png' width="400px"/>
					<div className={styles.cardTextRight}>
						<h1>Focus on what matters</h1>
						<p>
							Ducktape comes with an integrated Rendering, Audio, Physics, 
							UI (coming soon) system integrated, so you can focus on what makes 
							<i>your</i> game different.
						</p>
					</div>
				</div>

				<div className={styles.card}>
					<img align="left" src='img/portable-to-language.svg' width="400px"/>
					<div className={styles.cardTextLeft}>
						<h1>Available in different languages</h1>
						<p>
							Ducktape is written in C++, Allowing it to port to many languages.
							Including Python, Java, C#, Rust. (Coming soon)
						</p>
					</div>
				</div>
			</main>
			<img id={styles.curveBottom} src="./img/curveBottom.svg" />
		</Layout>
	);
}