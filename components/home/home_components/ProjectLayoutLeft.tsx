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

const ProjectLayoutLeft = () => {
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
            gridColumn: '1 / 9',
          },
          '@media (min-width: 750px)': {
            gridColumn: '1 / 7',
          },
        }}
      >
        <Card.Body
          css={{
            ta: 'left',
            p: '$14',
            '@xsMin': {
              pl: '0',
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
          <Text h3>Biochemistry Web</Text>
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
            Website project for Department of Biochemistry at IPB University.
            The project was refactoring from the previous design
            and translating from Indonesia language to English
          </Text>
          <Text
            css={{
              fs: '$sm',
              d: 'flex',
              jc: 'start',
              columnGap: '$5',
              fw: 'wrap',
              mb: '$md'
            }}
          >
            <span>PHP</span>
            <span>WordPress</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </Text>
          <Text
            css={{
              d: 'flex',
              jc: 'start',
              ai: 'center',
              columnGap: '$5',
              fw: 'wrap',
            }}
          >
            <Link
              href='https://biokimia.ipb.ac.id/'
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
          opacity: '0.25',
          gridColumn: '1 / -1',
          gridRow: '1 / -1',
          bgColor: 'initial',
          overflow: 'initial',
          '@xsMin': {
            opacity: '1',
            gridColumn: '6 / -1',
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
            src='/images/biochemistry.jpg'
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

export default ProjectLayoutLeft;
