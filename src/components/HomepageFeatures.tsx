import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Ducktape is designed to be as simple as possible. Making the process of creating a game easier.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Ducktape makes it easier to make a game. So you can spend more time doing other stuff!
      </>
    ),
  },
  {
    title: 'Powered by SFML',
    description: (
      <>
        SFML uses OpenGL 2.x so it provides compatibility for various devices.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
	{image ? <img className={styles.featureSvg} alt={title} src={image} /> : ""}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
