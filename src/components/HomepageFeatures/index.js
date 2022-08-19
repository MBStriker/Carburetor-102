import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mysterious',
    description: (
      <>
        I won't lie, carburetors can be mysterious. But, I think they're the bees knees.
      </>
    ),
  },
  {
    title: 'Pain',
    description: (
      <>
       Just kidding. Carburetors disdain me and I disdain Carburetors as well. But that's alright. 
      </>
    ),
  },
  {
    title: 'In My Neck',
    description: (
      <>
       I'll show them an adjustment or two. Maybe even clean them as they're dirty. Always dirty. Like the bottoms of boats. Eww.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
