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
                <div className="box">
                  <Button variant='primary' size='medium'>
                    1-10
                  </Button>
                </div>

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
                  <Button variant='ghost' size='small'>
                    small
                  </Button>
                  <Button variant='ghost' size='small'>
                    medium
                  </Button>
                  <Button variant='ghost' size='small'>
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
                <div className="box">
                  <Radio.Group
                    name='radio-demo'
                    value={selectedRadio}
                    onChange={setSelectedRadio}
                  >
                    <Radio value='option1' label='1-10' />
                  </Radio.Group>
                </div>

                {/* States Row */}
                <ComponentRowContainer id='node-243_405'>
                     <Button variant='ghost' size='small'>default</Button>
                     <Button variant='ghost' size='small'>hover</Button>
                     <Button variant='ghost' size='small'>active</Button>
                     <Button variant='ghost' size='small'>focus</Button>
                     <Button variant='ghost' size='small'>disabled</Button>
                </ComponentRowContainer>

                {/* Sizes Row */}
                <ComponentRowContainer id='node-243_423'>
                <Button variant='ghost' size='small'>small</Button>
                <Button variant='ghost' size='small'>medium</Button>
                <Button variant='ghost' size='small'>large</Button>
                </ComponentRowContainer>
              </ComponentColumn>

              {/* Input Component */}
              <ComponentColumn data-name='btn' id='node-243_430'>
                <ComponentTitle id='node-243_431'>
                  <p>Input</p>
                </ComponentTitle>

                {/* Numbers Row - Component Examples */}
                <div className="box">
                  <Input placeholder='1-10' size='medium' />
                </div>

                {/* States Row */}
                <ComponentRowContainer id='node-243_378'>
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

                <ComponentRowContainer id='node-243_378'>
                  <Button variant='ghost' size='small'>
                    fill
                  </Button>
                  <Button variant='ghost' size='small'>
                    ghost
                  </Button>
                  <Button variant='ghost' size='small'>
                    small
                  </Button>
                  <Button variant='ghost' size='small'>
                    medium
                  </Button>
                  <Button variant='ghost' size='small'>
                    large
                  </Button>
                </ComponentRowContainer>
              </ComponentColumn>

              {/* Toggle Component */}
              <ComponentColumn data-name='btn' id='node-243_460'>
                <ComponentTitle id='node-243_461'>
                  <p>Toggle</p>
                </ComponentTitle>

                {/* Numbers Row - Component Examples */}
                <div className="box">
                  <ToggleSwitch>
                    <input
                      type='checkbox'
                      checked={toggleState}
                      onChange={e => setToggleState(e.target.checked)}
                    />
                    <ToggleSlider className='toggle-slider' />
                    <span>1-10</span>
                  </ToggleSwitch>
                </div>

                {/* States Row */}
                <ComponentRowContainer id='node-243_465'>
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

                {/* Variants Row */}
                <ComponentRowContainer id='node-243_378'>
                  <Button variant='ghost' size='small'>
                    fill
                  </Button>
                  <Button variant='ghost' size='small'>
                    ghost
                  </Button>
                  <Button variant='ghost' size='small'>
                    small
                  </Button>
                  <Button variant='ghost' size='small'>
                    medium
                  </Button>
                  <Button variant='ghost' size='small'>
                    large
                  </Button>
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
