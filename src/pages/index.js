import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Explore various biological sources',
    imageUrl: '/img/feature-search.png',
    description: (
      <>
        InterMine integrates heterogeneous biological data sources, often but
      not always focused around a specific organism. The user interface allows
      you to explore the rich variety of data on a single platform, with only a
      short click away from exporting code for InterMine API clients when you
      wish to take a programmatic approach.
      </>
    ),
  },
  {
    title: 'Create lists of genes, SNPs, publications, etc.',
    imageUrl: '/img/feature-lists.png',
    description: (
      <>
        Objects in InterMine are standardised and distinct entities mapped to a
      biological subject. This allows you to create lists of entities (such as 
      gene or protein lists). Lists can be analysed using set operations (such 
      as union and intersect) and used in batch queries. Lists can be created 
      from queries in an InterMine or uploaded from an external source. 
      </>
    ),
  },
  {
    title: 'Run predefined queries',
    imageUrl: '/img/feature-templates.png',
    description: (
      <>
        The maintainers of an InterMine make available useful queries by
      predefining them as templates. These contain fields that you can edit 
      such as specifying a specific gene or tissue for expression data.
      Advanced users are also able to create their own queries by utilising the
      powerful Query Builder interface.
      </>
    ),
  },
  {
    title: 'Analyse objects through rich reports',
    imageUrl: '/img/feature-report.png',
    description: (
      <>
        When you wish to focus on one specific object, such as a gene, protein 
      or publication - you can view their report
      to see all data related to them, in addition to custom visualisations and
      compatible predefined queries. Any data in a table can be clicked to
      navigate to its respective report.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn to use the InterMine webapp to analyse biological data.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/what-is-intermine')}>
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/videos')}>
              Video Tutorials
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
