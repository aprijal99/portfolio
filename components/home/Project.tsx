import {Text} from '@nextui-org/react';
import ProjectLayoutRight from './home_components/ProjectLayoutRight';
import ProjectLayoutLeft from './home_components/ProjectLayoutLeft';

const Project = () => {
  return (
    <div
      style={{
        paddingBottom: '5rem',
      }}
    >
      <Text
        weight='bold'
        css={{
          color: 'var(--color-accent)',
          fs: '$lg',
          ta: 'center',
        }}
      >
        My Latest
      </Text>
      <Text
        weight='extrabold'
        css={{
          fs: '$4xl',
          ta: 'center',
          mt: '-7.5px',
        }}
      >
        Projects
      </Text>
      <Text
        css={{
          ta: 'center',
          mt: '-7.5px'
        }}
      >
        <span
          style={{
            width: '40px',
            height: '3px',
            backgroundColor: 'var(--color-accent)',
            display: 'inline-block',
            marginRight: '5px',
          }}
        />
        <span
          style={{
            width: '3px',
            height: '3px',
            backgroundColor: 'var(--color-accent)',
            display: 'inline-block',
            marginRight: '5px',
          }}
        />
        <span
          style={{
            width: '3px',
            height: '3px',
            backgroundColor: 'var(--color-accent)',
            display: 'inline-block',
            marginRight: '5px',
          }}
        />
        <span
          style={{
            width: '3px',
            height: '3px',
            backgroundColor: 'var(--color-accent)',
            display: 'inline-block',
          }}
        />
      </Text>

      <ProjectLayoutRight />
      <ProjectLayoutLeft />
    </div>
  );
}

export default Project;
