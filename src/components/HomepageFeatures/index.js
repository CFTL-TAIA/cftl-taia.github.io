import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Référentiel de cas d\'usage',
    img: require('@site/static/img/Referentiel_TAIA.png').default,
    description: (
      <>
        Découvrez les cas d'usage d'utilisation <br></br> de l'IA dans le test
      </>
    ),
  },
  {
    title: 'Bibliothèque de tâches de prompts',
    img: require('@site/static/img/library_TAIA.png').default,
    description: (
      <>
        Profitez des propositions de prompts de la communauté pour améliorer vos tests
      </>
    ),
  },
  {
    title: 'Proposez vos contributions',
    img: require('@site/static/img/community.png').default,
    description: (
      <>
        Le projet est en open source sur Github ! <br></br>
        Rejoignez et contribuez à cette base de connaissance sur l'IA dans le test.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
