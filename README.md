# Component Library

A comprehensive React component library with a well-organized file structure and reusable components.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # Basic UI components
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   ├── Button.css
│   │   │   └── index.js
│   │   ├── Input/
│   │   │   ├── Input.js
│   │   │   ├── Input.css
│   │   │   └── index.js
│   │   ├── Radio/
│   │   │   ├── Radio.js
│   │   │   ├── Radio.css
│   │   │   └── index.js
│   │   └── index.js
│   ├── common/          # Common components
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   │   └── index.js
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   ├── Footer.css
│   │   │   └── index.js
│   │   └── index.js
│   ├── forms/           # Form-related components
│   │   ├── Form.js
│   │   ├── Form.css
│   │   └── index.js
│   └── index.js
├── hooks/               # Custom hooks
│   ├── useForm.js
│   ├── useLocalStorage.js
│   └── index.js
├── utils/               # Utility functions
│   ├── validation.js
│   ├── helpers.js
│   └── index.js
├── styles/              # Global styles
│   ├── global.css
│   └── index.js
├── App.js
├── App.css
└── index.js
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## 📦 Components

### UI Components

#### Button
A versatile button component with multiple variants and sizes.

```jsx
import { Button } from './components';

<Button variant="primary" size="medium">Click me</Button>
```

**Props:**
- `variant`: `primary`, `secondary`, `success`, `danger`, `outline`
- `size`: `small`, `medium`, `large`
- `disabled`: boolean
- `onClick`: function
- `type`: `button`, `submit`, `reset`

#### Input
A form input component with label, error handling, and validation.

```jsx
import { Input } from './components';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={emailError}
  required
/>
```

**Props:**
- `type`: input type
- `label`: input label
- `error`: error message
- `required`: boolean
- `size`: `small`, `medium`, `large`
- `disabled`: boolean

#### Radio
A radio button component with group functionality.

```jsx
import { Radio } from './components';

<Radio.Group name="gender" value={gender} onChange={setGender}>
  <Radio value="male" label="Male" />
  <Radio value="female" label="Female" />
</Radio.Group>
```

### Common Components

#### Header
A reusable header component.

```jsx
import { Header } from './components';

<Header 
  title="My App" 
  subtitle="Welcome to the application" 
/>
```

#### Footer
A reusable footer component with links.

```jsx
import { Footer } from './components';

<Footer 
  copyright="© 2024 My App"
  links={[
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact', external: true }
  ]}
/>
```

### Form Components

#### Form
A form wrapper component with built-in styling.

```jsx
import { Form } from './components';

<Form 
  title="Contact Form"
  description="Send us a message"
  onSubmit={handleSubmit}
>
  {/* Form fields */}
</Form>
```

## 🎣 Custom Hooks

### useForm
A custom hook for form state management and validation.

```jsx
import { useForm } from './hooks';

const { values, errors, handleChange, validateForm } = useForm({
  name: '',
  email: ''
});

const handleSubmit = () => {
  const isValid = validateForm({
    name: { required: 'Name is required' },
    email: { required: 'Email is required' }
  });
  
  if (isValid) {
    // Submit form
  }
};
```

### useLocalStorage
A custom hook for localStorage management.

```jsx
import { useLocalStorage } from './hooks';

const [user, setUser] = useLocalStorage('user', null);
```

## 🛠️ Utilities

### Validation
Pre-built validation functions and regex patterns.

```jsx
import { validateEmail, validateRequired, EMAIL_REGEX } from './utils';

const emailError = validateEmail(email);
const nameError = validateRequired(name, 'Name');
```

### Helpers
Common utility functions.

```jsx
import { 
  generateId, 
  formatDate, 
  capitalize, 
  debounce 
} from './utils';

const id = generateId();
const formattedDate = formatDate(new Date());
const title = capitalize('hello world');
const debouncedSearch = debounce(searchFunction, 300);
```

## 🎨 Styling

The project includes:
- Global CSS reset and base styles
- Utility classes for spacing, typography, and layout
- Responsive design utilities
- Accessibility-focused styles
- Component-specific CSS modules

## 📱 Responsive Design

All components are built with responsive design in mind and include:
- Mobile-first approach
- Flexible layouts
- Touch-friendly interactions
- Proper viewport handling

## ♿ Accessibility

Components include:
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## 🧪 Testing

```bash
npm test
```

## 📦 Build

```bash
npm run build
```

## 📄 License

MIT License
