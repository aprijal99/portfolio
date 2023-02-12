import {Card, Link, Text} from '@nextui-org/react';
import {ReactNode} from 'react';

const ExternalLink = ({ children, url }: { children: ReactNode, url: string }) => {
  return (
    <Link
      isExternal
      href={url}
      target='_blank'
      css={{
        color: 'var(--color-accent)',
      }}
    >
      {children}
    </Link>
  );
}

const ProjectLayoutRight = () => {
  return (
    <div
      style={{
        marginTop: '3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
      }}
    >
      <Card
        variant='flat'
        css={{
          gridColumn: '1 / -1',
          gridRow: '1 / -1',
          zIndex: '5',
          bgColor: 'initial',
          jc: 'center',
          '@xsMin': {
            gridColumn: '5 / -1',
          },
          '@media (min-width: 750px)': {
            gridColumn: '7 / -1',
          },
        }}
      >
        <Card.Body
          css={{
            ta: 'right',
            p: '$14',
            '@xsMin': {
              pr: '0',
            },
          }}
        >
          <Text
            h6
            weight='light'
            css={{
              color: 'var(--color-accent)',
            }}
          >
            Featured Project
          </Text>
          <Text h3>HerbalChem</Text>
          <Text
            css={{
              fs: '.9rem',
              lh: '$md',
              mb: '$md',
              '@xsMin': {
                p: '$md',
                bgColor: 'white',
                br: 'var(--nextui-radii-lg)',
                border: '1px solid var(--nextui-colors-border)',
              },
            }}
          >
            Database of Compounds from herbal plants in Indonesia. The data are curated
            from <ExternalLink url='http://herbaldb.farmasi.ui.ac.id/v3/'>HerbalDB</ExternalLink>
            , <ExternalLink url='http://www.knapsackfamily.com/knapsack_core/top.php'>KNApSAcK</ExternalLink>
            , and <ExternalLink url='https://pubchem.ncbi.nlm.nih.gov/'>PubChem</ExternalLink>
          </Text>
          <Text
            css={{
              fs: '$sm',
              d: 'flex',
              jc: 'end',
              columnGap: '$5',
              fw: 'wrap',
              mb: '$md'
            }}
          >
            <span>Java</span>
            <span>Spring Boot</span>
            <span>TypeScript</span>
            <span>Next JS</span>
          </Text>
          <Text
            css={{
              d: 'flex',
              jc: 'end',
              ai: 'center',
              columnGap: '$5',
              fw: 'wrap',
            }}
          >
            <Link
              href='https://github.com/aprijal99/herbalchem'
              target='_blank'
            >
              <img
                src='/images/github.svg'
                alt='GitHub Logo'
                height='20px'
              />
            </Link>
            <Link
              href='http://herbalchem.site'
              target='_blank'
            >
              <img
                src='/images/link.svg'
                alt='Link Logo'
                height='17px'
              />
            </Link>
          </Text>
        </Card.Body>
      </Card>
      <Card
        variant='flat'
        css={{
          mw: '100%',
          opacity: '0.3',
          gridColumn: '1 / -1',
          gridRow: '1 / -1',
          bgColor: 'initial',
          overflow: 'initial',
          '@xsMin': {
            opacity: '1',
            gridColumn: '1 / 8',
            jc: 'center',
          },
        }}
      >
        <Card.Body
          css={{
            p: '0',
            overflow: 'initial',
          }}
        >
          <Card.Image
            src='/images/herbalchem.jpg'
            alt='Herbalchem Project Image'
            objectFit='cover'
            containerCss={{
              // filter: 'var(--nextui-dropShadows-lg)',
              border: '1px solid var(--nextui-colors-border)',
              br: 'var(--nextui-radii-lg)',
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectLayoutRight;
