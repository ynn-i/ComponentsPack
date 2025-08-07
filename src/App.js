import React, { useState } from 'react';
import { Button, Input, Radio } from './components';
import GlobalStyles from './styles/GlobalStyles';
import {
  MainContainer,
  ContentContainer,
  HeaderSection,
  HeaderTitle,
  HeaderSubtitle,
  ComponentsGrid,
  ComponentRow,
  ComponentColumn,
  ComponentTitle,
  ComponentRowContainer,
  ToggleSwitch,
  ToggleSlider,
  DisabledText,
} from './styles/StyledComponents';

function App() {
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [toggleState, setToggleState] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <GlobalStyles />
      <MainContainer data-name='components' id='node-243_304'>
        <ContentContainer id='node-243_689'>
          {/* Header Section */}
          <HeaderSection data-name='text-con' id='node-243_307'>
            <HeaderTitle id='node-243_308'>
              <p>components in React</p>
            </HeaderTitle>
            <HeaderSubtitle id='node-243_309'>
              <p>Help Ace understand your team's unique needs.</p>
              <p>Your answer can help Ace suit your team's workflow.</p>
            </HeaderSubtitle>
          </HeaderSection>

          {/* Components Grid */}
          <ComponentsGrid id='node-243_672'>
            {/* First Row */}
            <ComponentRow id='node-243_520'>
              {/* Button Component */}
              <ComponentColumn data-name='btn' id='node-243_352'>
                <ComponentTitle id='node-243_353'>
                  <p>Button</p>
                </ComponentTitle>

                {/* Numbers Row - Component Examples */}
                <ComponentRowContainer id='node-243_354'>
                  <Button variant='primary' size='medium'>
                    1-10
                  </Button>
                </ComponentRowContainer>

                {/* States Row */}
                <ComponentRowContainer id='node-243_365'>
                  <Button variant='ghost' size='small'>
                    default
                  </Button>
                  <Button variant='ghost' size='small'>
                    active
                  </Button>
                  <Button variant='ghost' size='small'>
                    hover
                  </Button>
                  <Button variant='ghost' size='small'>
                    focus
                  </Button>
                  <Button variant='ghost' size='small'>
                    disabled
                  </Button>
                </ComponentRowContainer>

                {/* Variants, Sizes Row */}
                <ComponentRowContainer id='node-243_378'>
                  <Button variant='ghost' size='small'>
                    fill
                  </Button>
                  <Button variant='ghost' size='small'>
                    ghost
                  </Button>
                  <Button variant='primary' size='small'>
                    small
                  </Button>
                  <Button variant='primary' size='medium'>
                    medium
                  </Button>
                  <Button variant='primary' size='large'>
                    large
                  </Button>
                </ComponentRowContainer>
              </ComponentColumn>

              {/* Radio Component */}
              <ComponentColumn data-name='btn' id='node-243_400'>
                <ComponentTitle id='node-243_401'>
                  <p>Radio</p>
                </ComponentTitle>

                {/* Numbers Row - Component Examples */}
                <ComponentRowContainer id='node-243_402'>
                  <Radio.Group
                    name='radio-demo'
                    value={selectedRadio}
                    onChange={setSelectedRadio}
                  >
                    <Radio value='option1' label='1-10' />
                  </Radio.Group>
                </ComponentRowContainer>

                {/* States Row */}
                <ComponentRowContainer id='node-243_405'>
                  <Radio.Group
                    name='radio-states'
                    value={selectedRadio}
                    onChange={setSelectedRadio}
                  >
                    <Radio value='default' label='default' />
                    <Radio value='hover' label='hover' />
                    <Radio value='active' label='active' />
                    <Radio value='focus' label='focus' />
                    <Radio value='disabled' label='disabled' disabled />
                  </Radio.Group>
                </ComponentRowContainer>

                {/* Variants Row */}
                <ComponentRowContainer id='node-243_416'>
                  <Radio.Group
                    name='radio-variants'
                    value={selectedRadio}
                    onChange={setSelectedRadio}
                  >
                    <Radio value='fill' label='fill' />
                    <Radio value='ghost' label='ghost' />
                    <Radio value='disabled' label='disabled' disabled />
                  </Radio.Group>
                </ComponentRowContainer>

                {/* Sizes Row */}
                <ComponentRowContainer id='node-243_423'>
                  <Radio.Group
                    name='radio-sizes'
                    value={selectedRadio}
                    onChange={setSelectedRadio}
                  >
                    <Radio value='small' label='small' size='small' />
                    <Radio value='medium' label='medium' size='medium' />
                    <Radio value='large' label='large' size='large' />
                  </Radio.Group>
                </ComponentRowContainer>
              </ComponentColumn>

              {/* Input Component */}
              <ComponentColumn data-name='btn' id='node-243_430'>
                <ComponentTitle id='node-243_431'>
                  <p>Input</p>
                </ComponentTitle>

                {/* Numbers Row - Component Examples */}
                <ComponentRowContainer id='node-243_432'>
                  <Input placeholder='1-10' size='medium' />
                </ComponentRowContainer>

                {/* States Row */}
                <ComponentRowContainer id='node-243_435'>
                  <Input placeholder='default' size='medium' />
                  <Input
                    placeholder='hover'
                    size='medium'
                    className='hover:border-blue-400'
                  />
                  <Input
                    placeholder='active'
                    size='medium'
                    className='active:border-blue-600'
                  />
                  <Input
                    placeholder='focus'
                    size='medium'
                    className='focus:border-blue-500'
                  />
                  <Input placeholder='disabled' size='medium' disabled />
                </ComponentRowContainer>

                {/* Variants Row */}
                <ComponentRowContainer id='node-243_446'>
                  <Input placeholder='fill' size='medium' />
                  <Input
                    placeholder='ghost'
                    size='medium'
                    className='bg-transparent'
                  />
                  <Input placeholder='disabled' size='medium' disabled />
                </ComponentRowContainer>

                {/* Sizes Row */}
                <ComponentRowContainer id='node-243_453'>
                  <Input placeholder='small' size='small' />
                  <Input placeholder='medium' size='medium' />
                  <Input placeholder='large' size='large' />
                </ComponentRowContainer>
              </ComponentColumn>

              {/* Toggle Component */}
              <ComponentColumn data-name='btn' id='node-243_460'>
                <ComponentTitle id='node-243_461'>
                  <p>Toggle</p>
                </ComponentTitle>

                {/* Numbers Row - Component Examples */}
                <ComponentRowContainer id='node-243_462'>
                  <ToggleSwitch>
                    <input
                      type='checkbox'
                      checked={toggleState}
                      onChange={e => setToggleState(e.target.checked)}
                    />
                    <ToggleSlider className='toggle-slider' />
                    <span>1-10</span>
                  </ToggleSwitch>
                </ComponentRowContainer>

                {/* States Row */}
                <ComponentRowContainer id='node-243_465'>
                  <ToggleSwitch>
                    <input type='checkbox' />
                    <ToggleSlider className='toggle-slider' />
                    <span>default</span>
                  </ToggleSwitch>
                  <ToggleSwitch>
                    <input type='checkbox' />
                    <ToggleSlider className='toggle-slider' />
                    <span>hover</span>
                  </ToggleSwitch>
                  <ToggleSwitch>
                    <input type='checkbox' />
                    <ToggleSlider className='toggle-slider' />
                    <span>active</span>
                  </ToggleSwitch>
                  <ToggleSwitch>
                    <input type='checkbox' />
                    <ToggleSlider className='toggle-slider' />
                    <span>focus</span>
                  </ToggleSwitch>
                  <ToggleSwitch>
                    <input type='checkbox' disabled />
                    <ToggleSlider className='toggle-slider' />
                    <DisabledText>disabled</DisabledText>
                  </ToggleSwitch>
                </ComponentRowContainer>

                {/* Variants Row */}
                <ComponentRowContainer id='node-243_476'>
                  <ToggleSwitch>
                    <input type='checkbox' />
                    <ToggleSlider className='toggle-slider toggle-fill' />
                    <span>fill</span>
                  </ToggleSwitch>
                  <ToggleSwitch>
                    <input type='checkbox' />
                    <ToggleSlider className='toggle-slider toggle-ghost' />
                    <span>ghost</span>
                  </ToggleSwitch>
                  <ToggleSwitch>
                    <input type='checkbox' disabled />
                    <ToggleSlider className='toggle-slider' />
                    <DisabledText>disabled</DisabledText>
                  </ToggleSwitch>
                </ComponentRowContainer>

                {/* Sizes Row */}
                <ComponentRowContainer id='node-243_483'>
                  <ToggleSwitch>
                    <input type='checkbox' />
                    <ToggleSlider className='toggle-slider toggle-small' />
                    <span>small</span>
                  </ToggleSwitch>
                  <ToggleSwitch>
                    <input type='checkbox' />
                    <ToggleSlider className='toggle-slider toggle-medium' />
                    <span>medium</span>
                  </ToggleSwitch>
                  <ToggleSwitch>
                    <input type='checkbox' />
                    <ToggleSlider className='toggle-slider toggle-large' />
                    <span>large</span>
                  </ToggleSwitch>
                </ComponentRowContainer>
              </ComponentColumn>
            </ComponentRow>
          </ComponentsGrid>
        </ContentContainer>
      </MainContainer>
    </>
  );
}

export default App;
