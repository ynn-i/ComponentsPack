# ComponentsPack - React Component Library

A comprehensive React component library built with **styled-components** for modern web applications.

## 🚀 Features

- **Styled Components**: All styling is implemented using styled-components for better maintainability and component encapsulation
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA attributes and keyboard navigation support
- **TypeScript Ready**: Components are designed to work seamlessly with TypeScript
- **Customizable**: Extensive prop-based customization options

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Basic UI components
│   │   ├── Button/           # Button component with variants
│   │   ├── Input/            # Input component with validation
│   │   └── Radio/            # Radio component with group support
│   ├── common/               # Common components
│   │   ├── Header/           # Header component
│   │   └── Footer/           # Footer component
│   └── forms/                # Form-related components
│       └── Form/             # Form wrapper component
├── hooks/                    # Custom React hooks
│   ├── useForm.js           # Form state management
│   └── useLocalStorage.js   # Local storage management
├── utils/                    # Utility functions
│   ├── validation.js        # Validation helpers
│   └── helpers.js           # General utility functions
└── styles/                   # Global styles and styled components
    ├── GlobalStyles.js      # Global styles using styled-components
    ├── StyledComponents.js  # Layout and component-specific styles
    └── index.js             # Style exports
```

## 🎨 Styling System

This project uses **styled-components** for all styling:

- **GlobalStyles**: Reset, typography, utilities, and responsive design
- **Component Styles**: Each component has its own styled-components
- **Theme Support**: Consistent design tokens and color palette
- **Responsive**: Mobile-first responsive design

## 🧩 Components

### UI Components

#### Button
```jsx
import { Button } from './components/ui';

<Button variant="primary" size="medium" onClick={handleClick}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `onClick`: function

#### Input
```jsx
import { Input } from './components/ui';

<Input 
  label="Email"
  type="email"
  placeholder="Enter your email"
  required
  error="Invalid email"
/>
```

**Props:**
- `type`: string (default: 'text')
- `label`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `error`: string
- `required`: boolean
- `disabled`: boolean
- `size`: 'small' | 'medium' | 'large'

#### Radio
```jsx
import { Radio } from './components/ui';

<Radio.Group name="options" value={selected} onChange={setSelected}>
  <Radio value="option1" label="Option 1" />
  <Radio value="option2" label="Option 2" />
</Radio.Group>
```

**Props:**
- `name`: string
- `value`: string
- `checked`: boolean
- `onChange`: function
- `label`: string
- `disabled`: boolean
- `size`: 'small' | 'medium' | 'large'

### Common Components

#### Header
```jsx
import { Header } from './components/common';

<Header 
  title="My App" 
  subtitle="Welcome to our application" 
/>
```

#### Footer
```jsx
import { Footer } from './components/common';

<Footer 
  copyright="© 2024 My App"
  links={[
    { text: 'Privacy', href: '/privacy' },
    { text: 'Terms', href: '/terms', external: true }
  ]}
/>
```

#### Form
```jsx
import { Form } from './components/forms';

<Form 
  title="Contact Form"
  description="Please fill out the form below"
  onSubmit={handleSubmit}
>
  <Input label="Name" required />
  <Form.Actions>
    <Button type="submit">Submit</Button>
  </Form.Actions>
</Form>
```

## 🪝 Custom Hooks

### useForm
```jsx
import { useForm } from './hooks';

const { values, errors, handleChange, handleBlur, validateForm } = useForm({
  initialValues: { email: '', password: '' },
  validationRules: {
    email: ['required', 'email'],
    password: ['required', 'minLength:8']
  }
});
```

### useLocalStorage
```jsx
import { useLocalStorage } from './hooks';

const [user, setUser] = useLocalStorage('user', null);
```

## 🛠️ Utilities

### Validation
```jsx
import { validateEmail, validateRequired } from './utils/validation';

const isValid = validateEmail('test@example.com');
const isRequired = validateRequired('some value');
```

### Helpers
```jsx
import { formatDate, debounce, generateId } from './utils/helpers';

const formattedDate = formatDate(new Date());
const debouncedFunction = debounce(myFunction, 300);
const uniqueId = generateId();
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The component library is built with a mobile-first approach:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ♿ Accessibility

- Semantic HTML elements
- ARIA attributes where needed
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## 🎯 Best Practices

- Use semantic HTML
- Implement proper error handling
- Follow React best practices
- Maintain consistent naming conventions
- Write clean, readable code
- Test components thoroughly

## 📄 License

MIT License - feel free to use this component library in your projects!
