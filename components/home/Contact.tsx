import {Link, styled, Text} from '@nextui-org/react';

const DivContactLeft = styled('div', {
  d: 'flex',
  jc: 'center',
  mb: '$8',
  '@media (min-width: 848px)': {
    jc: 'initial',
    mb: 'initial',
    fd: 'column',
    position: 'fixed',
    left: '25px',
    bottom: '37px',
  },
});

const DivContactRight = styled('div', {
  ta: 'center',
  mb: '$10',
  '@media (min-width: 848px)': {
    ta: 'initial',
    mb: 'initial',
    position: 'fixed',
    right: '25px',
    bottom: '10px',
    transform: 'rotate(90deg)',
    transformOrigin: 'top right',
  }
});

const Contact = () => {
  return (
    <>
      <DivContactLeft>
        <Link
          href='https://github.com/aprijal99'
          target='_blank'
          css={{
            mr: '$10',
            '@media (min-width: 848px)': {
              mb: '$10',
            },
          }}
        >
          <img
            src='/images/github.svg'
            alt='GitHub Logo'
            height='20px'
          />
        </Link>
        <Link
          href='https://www.linkedin.com/in/aprijalghiyas'
          target='_blank'
          css={{
            mr: '$10',
            '@media (min-width: 848px)': {
              mb: '$10',
            },
          }}
        >
          <img
            src='/images/linkedin.svg'
            alt='LinkedIn Logo'
            height='20px'
          />
        </Link>
        <Link
          href='https://www.instagram.com/aprijalghiyas'
          target='_blank'
        >
          <img
            src='/images/instagram.svg'
            alt='Instagram Logo'
            height='20px'
          />
        </Link>
      </DivContactLeft>
      <DivContactRight>
        <Link
          href='mailto:aprijalghiyas@gmail.com'
          target='_blank'
        >
          <Text>aprijalghiyas@gmail.com</Text>
        </Link>
      </DivContactRight>
    </>
  );
}

export default Contact;
