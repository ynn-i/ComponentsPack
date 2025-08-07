import React, { useState } from 'react';
import { Button, Input, Radio } from './components';
import './App.css';

function App() {
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [toggleState, setToggleState] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="bg-white relative size-full" data-name="components" id="node-243_304">
      <div className="absolute box-border content-stretch flex flex-col gap-[120px] items-center justify-start left-0 p-0 top-32 w-[1920px]" id="node-243_689">
        
        {/* Header Section */}
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-nowrap" data-name="text-con" id="node-243_307">
          <div className="font-['Pretendard:SemiBold',_sans-serif] relative shrink-0 text-[#222222] text-[24px] text-left" id="node-243_308">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              components in React
            </p>
          </div>
          <div className="font-['Pretendard:Medium',_sans-serif] leading-[1.3] relative shrink-0 text-[#a3a5ae] text-[18px] text-center whitespace-pre" id="node-243_309">
            <p className="block mb-0">{`Help Ace understand your team's unique needs.`}</p>
            <p className="block">
              Your answer can help Ace suit your team's workflow.
            </p>
          </div>
        </div>

        {/* Components Grid */}
        <div className="box-border content-stretch flex flex-col gap-[46px] items-start justify-start p-[80px] relative shrink-0 w-full" id="node-243_672">
          <div aria-hidden="true" className="absolute border-[#dae1ea] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
          
          {/* First Row */}
          <div className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start p-0 relative shrink-0 w-full" id="node-243_520">
            
            {/* Button Component */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="btn" id="node-243_352">
              <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#222222] text-[14px] text-left text-nowrap" id="node-243_353">
                <p className="block leading-none whitespace-pre">Button</p>
              </div>
              
              {/* Numbers Row - Component Examples */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_354">
                <Button variant="primary" size="small">1-10</Button>
              </div>
              
              {/* States Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_365">
                <Button variant="primary" size="medium">default</Button>
                <Button variant="primary" size="medium" className="hover:bg-blue-600">hover</Button>
                <Button variant="primary" size="medium" className="active:bg-blue-800">active</Button>
                <Button variant="primary" size="medium" className="focus:ring-2">focus</Button>
                <Button variant="primary" size="medium" disabled>disabled</Button>
              </div>
              
              {/* Variants Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_378">
                <Button variant="primary" size="medium">fill</Button>
                <Button variant="outline" size="medium">ghost</Button>
                <Button variant="secondary" size="medium" disabled>disabled</Button>
              </div>
              
              {/* Sizes Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_386">
                <Button variant="primary" size="small">small</Button>
                <Button variant="primary" size="medium">medium</Button>
                <Button variant="primary" size="large">large</Button>
              </div>
            </div>

            {/* Radio Component */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="btn" id="node-243_400">
              <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#222222] text-[14px] text-left text-nowrap" id="node-243_401">
                <p className="block leading-none whitespace-pre">Radio</p>
              </div>
              
              {/* Numbers Row - Component Examples */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_402">
                <Radio.Group name="radio-demo" value={selectedRadio} onChange={setSelectedRadio}>
                  <Radio value="option1" label="1-10" />
                </Radio.Group>
              </div>
              
              {/* States Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_405">
                <Radio.Group name="radio-states" value={selectedRadio} onChange={setSelectedRadio}>
                  <Radio value="default" label="default" />
                  <Radio value="hover" label="hover" />
                  <Radio value="active" label="active" />
                  <Radio value="focus" label="focus" />
                  <Radio value="disabled" label="disabled" disabled />
                </Radio.Group>
              </div>
              
              {/* Variants Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_416">
                <Radio.Group name="radio-variants" value={selectedRadio} onChange={setSelectedRadio}>
                  <Radio value="fill" label="fill" />
                  <Radio value="ghost" label="ghost" />
                  <Radio value="disabled" label="disabled" disabled />
                </Radio.Group>
              </div>
              
              {/* Sizes Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_423">
                <Radio.Group name="radio-sizes" value={selectedRadio} onChange={setSelectedRadio}>
                  <Radio value="small" label="small" size="small" />
                  <Radio value="medium" label="medium" size="medium" />
                  <Radio value="large" label="large" size="large" />
                </Radio.Group>
              </div>
            </div>

            {/* Input Component */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="btn" id="node-243_430">
              <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#222222] text-[14px] text-left text-nowrap" id="node-243_431">
                <p className="block leading-none whitespace-pre">Input</p>
              </div>
              
              {/* Numbers Row - Component Examples */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_432">
                <Input placeholder="1-10" size="medium" />
              </div>
              
              {/* States Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_435">
                <Input placeholder="default" size="medium" />
                <Input placeholder="hover" size="medium" className="hover:border-blue-400" />
                <Input placeholder="active" size="medium" className="active:border-blue-600" />
                <Input placeholder="focus" size="medium" className="focus:border-blue-500" />
                <Input placeholder="disabled" size="medium" disabled />
              </div>
              
              {/* Variants Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_446">
                <Input placeholder="fill" size="medium" />
                <Input placeholder="ghost" size="medium" className="bg-transparent" />
                <Input placeholder="disabled" size="medium" disabled />
              </div>
              
              {/* Sizes Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_453">
                <Input placeholder="small" size="small" />
                <Input placeholder="medium" size="medium" />
                <Input placeholder="large" size="large" />
              </div>
            </div>

            {/* Toggle Component */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0" data-name="btn" id="node-243_460">
              <div className="font-['Pretendard:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#222222] text-[14px] text-left text-nowrap" id="node-243_461">
                <p className="block leading-none whitespace-pre">Toggle</p>
              </div>
              
              {/* Numbers Row - Component Examples */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_462">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={toggleState}
                    onChange={(e) => setToggleState(e.target.checked)}
                  />
                  <span className="toggle-slider">1-10</span>
                </label>
              </div>
              
              {/* States Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_465">
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider">default</span>
                </label>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider">hover</span>
                </label>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider">active</span>
                </label>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="toggle-slider">focus</span>
                </label>
                <label className="toggle-switch">
                  <input type="checkbox" disabled />
                  <span className="toggle-slider">disabled</span>
                </label>
              </div>
              
              {/* Variants Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_476">
                <label className="toggle-switch toggle-fill">
                  <input type="checkbox" />
                  <span className="toggle-slider">fill</span>
                </label>
                <label className="toggle-switch toggle-ghost">
                  <input type="checkbox" />
                  <span className="toggle-slider">ghost</span>
                </label>
                <label className="toggle-switch">
                  <input type="checkbox" disabled />
                  <span className="toggle-slider">disabled</span>
                </label>
              </div>
              
              {/* Sizes Row */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full" id="node-243_483">
                <label className="toggle-switch toggle-small">
                  <input type="checkbox" />
                  <span className="toggle-slider">small</span>
                </label>
                <label className="toggle-switch toggle-medium">
                  <input type="checkbox" />
                  <span className="toggle-slider">medium</span>
                </label>
                <label className="toggle-switch toggle-large">
                  <input type="checkbox" />
                  <span className="toggle-slider">large</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
