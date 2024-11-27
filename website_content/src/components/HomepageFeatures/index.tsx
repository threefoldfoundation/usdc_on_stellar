import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common'

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  { scale: 1.3,
    fill:"currentColor",
    title: 'Fiat to USDC',
    Svg: require('@site/static/img/svg_exchange.svg').default,
    description: (
      <>
        Buy USDC with fiat currency.
      </>
    ),
  },
  { scale: 1.0,
    fill:"currentColor",
    title: 'Stellar Wallet',
    Svg: require('@site/static/img/svg_stellar.svg').default,
    description: (
      <>
        Send your USDC to your Stellar wallet.
      </>
    ),
  },
  { scale: 1.0,
    fill:"currentColor",
    title: 'Secure Your Assets',
    Svg: require('@site/static/img/svg_secure.svg').default,
    description: (
      <>
        Keep your assets secure.
      </>
    ),
  },
];

function Feature({scale, fill, id, title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <Svg transform={"scale(" + scale + ")"} fill={fill} id={id} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
