import {Image, Link, Navbar} from '@nextui-org/react';

const AppNavbar = () => {
  return (
    <Navbar
      disableShadow
      variant='sticky'
      css={{
        '.nextui-navbar-container': {
          mw: '100%',
          '@xsMax': {
            '--nextui--navbarPadding': 'var(--nextui-space-10)',
          }
        },
      }}
    >
      <Navbar.Brand>
        <Link
          href='/'
        >
          <Image
            src='/images/portfolio_logo.png'
            alt='AGS Portfolio Logo'
            height={30}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        hideIn='xs'
        variant='underline'
        css={{
          'li::after': {
            bgColor: 'var(--color-accent)',
          },
        }}
      >
        <Navbar.Link href='/' isActive>Home</Navbar.Link>
        <Navbar.Link href='#'>Projects</Navbar.Link>
        <Navbar.Link href='#'>Blog</Navbar.Link>
      </Navbar.Content>
      <Navbar.Toggle showIn='xs' />
      <Navbar.Collapse
        showIn='xs'
        css={{
          'ul': {
            overflow: 'hidden',
            height: '100%',
          },
        }}
      >
        <Navbar.CollapseItem>
          <Link
            href='/'
            color='inherit'
            css={{
              ta: 'center',
              display: 'inline',
              minWidth: '100%'
            }}
          >
            Home
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            href='#'
            color='inherit'
            css={{
              ta: 'center',
              display: 'inline',
              minWidth: '100%'
            }}
          >
            Projects
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            href='#'
            color='inherit'
            css={{
              ta: 'center',
              display: 'inline',
              minWidth: '100%'
            }}
          >
            Blog
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
