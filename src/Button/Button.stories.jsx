import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { Icon } from '../Icon/Icon';
import { StoryLinkWrapper } from '../LinkWrapper';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton {...props} />;
}

export default {
  title: 'Design System/Button',
  component: Button,
};

export const AllButtons = {
  name: 'all buttons',
  render: () => (
    <>
      <Button appearance='primary' onClick={action('clicked')}>
        Primary
      </Button>
      <Button appearance='secondary' onClick={action('clicked')}>
        Secondary
      </Button>
      <Button appearance='tertiary' onClick={action('clicked')}>
        Tertiary
      </Button>
      <Button appearance='outline' onClick={action('clicked')}>
        Outline
      </Button>
      <Button appearance='primaryOutline' onClick={action('clicked')}>
        Outline primary
      </Button>
      <Button appearance='secondaryOutline' onClick={action('clicked')}>
        Outline secondary
      </Button>
      <Button appearance='primary' isDisabled onClick={action('clicked')}>
        Disabled
      </Button>
      <br />
      <Button appearance='primary' isLoading onClick={action('clicked')}>
        Primary
      </Button>
      <Button appearance='secondary' isLoading onClick={action('clicked')}>
        Secondary
      </Button>
      <Button appearance='tertiary' isLoading onClick={action('clicked')}>
        Tertiary
      </Button>
      <Button appearance='outline' isLoading onClick={action('clicked')}>
        Outline
      </Button>
      <Button
        appearance='outline'
        isLoading
        loadingText='Custom...'
        onClick={action('clicked')}
      >
        Outline
      </Button>
      <br />
      <Button appearance='primary' size='small' onClick={action('clicked')}>
        Primary
      </Button>
      <Button appearance='secondary' size='small' onClick={action('clicked')}>
        Secondary
      </Button>
      <Button appearance='tertiary' size='small' onClick={action('clicked')}>
        Tertiary
      </Button>
      <Button appearance='outline' size='small' onClick={action('clicked')}>
        Outline
      </Button>
      <Button
        appearance='primary'
        isDisabled
        size='small'
        onClick={action('clicked')}
      >
        Disabled
      </Button>
      <Button
        appearance='outline'
        size='small'
        containsIcon
        onClick={action('clicked')}
      >
        <Icon icon='link' aria-label='Link' />
      </Button>
      <Button appearance='outline' size='small' onClick={action('clicked')}>
        <Icon icon='link' />
        Link
      </Button>
    </>
  ),
};

export const buttonWrapper = {
  name: 'button wrapper',
  render: () => (
    <div>
      <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
      <br />
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='primary'
        onClick={action('clicked')}
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='secondary'
        onClick={action('clicked')}
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='tertiary'
        onClick={action('clicked')}
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='outline'
        onClick={action('clicked')}
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='primaryOutline'
        onClick={action('clicked')}
      >
        Outline primary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='secondaryOutline'
        onClick={action('clicked')}
      >
        Outline secondary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='primary'
        isDisabled
        onClick={action('clicked')}
      >
        Disabled
      </Button>
      <br />
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='primary'
        isLoading
        onClick={action('clicked')}
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='secondary'
        isLoading
        onClick={action('clicked')}
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='tertiary'
        isLoading
        onClick={action('clicked')}
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='outline'
        isLoading
        onClick={action('clicked')}
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='outline'
        isLoading
        loadingText='Custom...'
        onClick={action('clicked')}
      >
        Outline
      </Button>
      <br />
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='primary'
        size='small'
        onClick={action('clicked')}
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='secondary'
        size='small'
        onClick={action('clicked')}
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='tertiary'
        size='small'
        onClick={action('clicked')}
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='outline'
        size='small'
        onClick={action('clicked')}
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='primary'
        isDisabled
        size='small'
        onClick={action('clicked')}
      >
        Disabled
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='outline'
        size='small'
        containsIcon
        onClick={action('clicked')}
      >
        <Icon icon='link' aria-label='Link' />
      </Button>
      <Button
        ButtonWrapper={ButtonWrapper}
        appearance='outline'
        size='small'
        onClick={action('clicked')}
      >
        <Icon icon='link' />
        Link
      </Button>
    </div>
  ),
};

export const AnchorWrapper = {
  name: 'anchor wrapper',
  render: () => (
    <div>
      <StoryLinkWrapper to='http://storybook.js.org'>
        Original Link Wrapper
      </StoryLinkWrapper>
      <br />
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        href='http://storybook.js.org'
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='secondary'
        href='http://storybook.js.org'
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='tertiary'
        href='http://storybook.js.org'
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        href='http://storybook.js.org'
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primaryOutline'
        href='http://storybook.js.org'
      >
        Outline primary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='secondaryOutline'
        href='http://storybook.js.org'
      >
        Outline secondary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        isDisabled
        href='http://storybook.js.org'
      >
        Disabled
      </Button>
      <br />
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        isLoading
        href='http://storybook.js.org'
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='secondary'
        isLoading
        href='http://storybook.js.org'
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='tertiary'
        isLoading
        href='http://storybook.js.org'
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        isLoading
        href='http://storybook.js.org'
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        isLoading
        loadingText='Custom...'
        href='http://storybook.js.org'
      >
        Outline
      </Button>
      <br />
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        size='small'
        href='http://storybook.js.org'
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='secondary'
        size='small'
        href='http://storybook.js.org'
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='tertiary'
        size='small'
        href='http://storybook.js.org'
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        size='small'
        href='http://storybook.js.org'
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        isDisabled
        size='small'
        href='http://storybook.js.org'
      >
        Disabled
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        size='small'
        containsIcon
        href='http://storybook.js.org'
      >
        <Icon icon='link' aria-label='Link' />
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        size='small'
        href='http://storybook.js.org'
      >
        <Icon icon='link' />
        Link
      </Button>
    </div>
  ),
};
