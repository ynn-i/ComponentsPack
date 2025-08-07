# Component Library

A collection of reusable React components with consistent styling and behavior.

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

- `children` - Button content
- `variant` - Button style variant (`primary`, `secondary`, `success`, `danger`, `outline`)
- `size` - Button size (`small`, `medium`, `large`)
- `disabled` - Disable the button
- `onClick` - Click handler function
- `type` - Button type (`button`, `submit`, `reset`)
- `className` - Additional CSS classes

#### Usage

```jsx
import { Button } from './components';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="success">Success Button</Button>
<Button variant="danger">Danger Button</Button>
<Button variant="outline">Outline Button</Button>

// With sizes
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>

// Disabled state
<Button disabled>Disabled Button</Button>
```

### Input

A form input component with label, error handling, and validation.

#### Props

- `type` - Input type (`text`, `email`, `password`, etc.)
- `placeholder` - Placeholder text
- `value` - Input value
- `onChange` - Change handler function
- `label` - Input label
- `error` - Error message
- `disabled` - Disable the input
- `required` - Mark as required
- `size` - Input size (`small`, `medium`, `large`)
- `className` - Additional CSS classes

#### Usage

```jsx
import { Input } from './components';

// Basic usage
<Input placeholder="Enter text" />

// With label and validation
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  required
/>

// Different sizes
<Input size="small" placeholder="Small input" />
<Input size="medium" placeholder="Medium input" />
<Input size="large" placeholder="Large input" />

// Disabled state
<Input disabled placeholder="Disabled input" />
```

### Radio

A radio button component with group functionality.

#### Props

- `name` - Radio group name
- `value` - Radio value
- `checked` - Checked state
- `onChange` - Change handler function
- `label` - Radio label
- `disabled` - Disable the radio
- `size` - Radio size (`small`, `medium`, `large`)
- `className` - Additional CSS classes

#### Usage

```jsx
import { Radio } from './components';

// Individual radio button
<Radio name="gender" value="male" label="Male" />

// Radio group
<Radio.Group
  name="gender"
  value={selectedGender}
  onChange={setSelectedGender}
>
  <Radio value="male" label="Male" />
  <Radio value="female" label="Female" />
  <Radio value="other" label="Other" />
</Radio.Group>

// Different sizes
<Radio.Group name="size" value={size} onChange={setSize}>
  <Radio size="small" value="small" label="Small" />
  <Radio size="medium" value="medium" label="Medium" />
  <Radio size="large" value="large" label="Large" />
</Radio.Group>
```

## Styling

All components use CSS classes for styling and support:
- Consistent design system
- Responsive design
- Focus states for accessibility
- Hover effects
- Disabled states
- Error states

## Accessibility

Components include:
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance
