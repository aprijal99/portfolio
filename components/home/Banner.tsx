import {Card, Grid, styled, Text} from '@nextui-org/react';

const DivBanner = styled('div', {
  pt: '$10',
  pb: '$20',
  '@media (min-width: 650px)': {
    pt: '$20',
  },
});

const Banner = () => {
  const technologies: string[] = [
    'Next JS', 'Spring Boot', 'Kafka', 'Docker', 'Kubernetes', 'Google Cloud',
    'Elasticsearch', 'MySQL'
  ];

  return (
    <DivBanner>
      <Grid.Container justify='center'>
        <Grid>
          <Card
            variant='flat'
            css={{
              px: 'var(--nextui--navbarPadding)',
              overflow: 'initial',
              bgColor: 'white',
            }}
          >
            <Card.Body
              css={{
                p: '0',
                overflow: 'initial',
                position: 'relative',
                '&:before': {
                  content: '',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  border: '3px solid var(--color-accent)',
                  br: 'var(--nextui-radii-lg)',
                },
              }}
            >
              <Card.Image
                src='/images/myself.jpg'
                alt='AGS Photo Profile'
                objectFit='cover'
                css={{
                  mw: '300px',
                }}
                containerCss={{
                  br: 'var(--nextui-radii-lg)',
                }}
              />
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
      <div
        style={{
          marginTop: '50px',
        }}
      >
        <Text
          h2
          weight='extrabold'
          css={{
            ta: 'center',
          }}
        >
          Hi, I'm Ghiyas!
        </Text>
        <Text
          css={{
            ta: 'justify',
          }}
        >
          I'm a <strong>self-taught website developer</strong> based in Indonesia, specializing
          in building backend applications.
          I love to build a microservices system and everything about DevOps tools.
        </Text>
      </div>
      <div
        style={{
          marginTop: '15px',
        }}
      >
        <Text>A few technologies I've been working with recently:</Text>
        <Grid.Container>
          {
            technologies.map((val, idx) => (
              <Grid
                key={idx}
                css={{
                  fb: '50%',
                  '@xsMin': {
                    fb: '33.33333%'
                  }
                }}
              >
                <Text
                  css={{
                    d: 'flex',
                    ai: 'center',
                  }}
                >
                  <img
                    src='/images/play_arrow.svg'
                    alt='Play Arrow Symbol'
                    style={{
                      height: '15px',
                      marginRight: '5px',
                    }}
                  />
                  {val}
                </Text>
              </Grid>
            ))
          }
        </Grid.Container>
      </div>
    </DivBanner>
  );
}

export default Banner;
