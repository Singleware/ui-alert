# UI-Alert

Custom HTML element used to wrap a simple alert element, composed by the slots: icon, message and hide.

## Usage

Instantiate the component that initializes the custom element.

```tsx
import * as JSX from '@singleware/jsx';
import * as Alert from '@singleware/ui-alert';

const component = (
  <Alert.Component concealable open>
    <span slot="icon">👋</span>
    <span slot="message">This is an alert example initialized by the component wrapper.</span>
    <span slot="hide" />
  </Alert.Component>
) as Alert.Element;
```

Instantiate the custom element directly.

```tsx
import * as JSX from '@singleware/jsx';
import * as Alert from '@singleware/ui-alert';

const element = (
  <swe-alert concealable open>
    <span slot="icon">👋</span>
    <span slot="message">This is an alert example initialized by the custom element directly.</span>
    <span slot="hide" />
  </swe-alert>
) as Alert.Element;
```

Show and Hide programmatically.

```tsx
component.show();
component.hide();
```

> Allowed to component and element instances.

Be informed about the hide action.

```tsx
component.addEventListener('hide', (event: Event) => console.log(`Yes! It's hidden now.`));
```

> Allowed to component and element instances.

## Help

### Attributes

| Name        | Description                                                                                |
| ----------- | ------------------------------------------------------------------------------------------ |
| concealable | Assigned when the alert can be hidden by the user (requires an element in the `hide` slot) |
| open        | Automatically assigned when the alert is shown and removed when hidden                     |

### Properties

| Name        | Type   | Description                                                         |
| ----------- | ------ | ------------------------------------------------------------------- |
| icon        | `any`  | Get and set the alert icon (requires an element in the `icon` slot) |
| message     | `any`  | Get and set the alert message                                       |
| concealable | `bool` | Get and set the alert `conceal` state                               |
| open        | `bool` | Get and set the `open` state                                        |

### Methods

| Name | Description                                         |
| ---- | --------------------------------------------------- |
| show | Shows the alert setting the `open` state as `true`  |
| hide | Hides the alert setting the `open` state as `false` |

### Slots

| Name    | Description                                             |
| ------- | ------------------------------------------------------- |
| icon    | Element to shows the alert icon (can be omitted)        |
| message | Element to shows the alert message                      |
| hide    | Element to shows the alert hide button (can be omitted) |

### Events

| Name | Description                              |
| ---- | ---------------------------------------- |
| hide | Dispatched when the alert becomes hidden |

### Styles

| Name                              | Description                                           |
| --------------------------------- | ----------------------------------------------------- |
| --swe-alert-text-color            | Determines the alert text color                       |
| --swe-alert-background-color      | Determines the alert background color                 |
| --swe-alert-border-radius         | Determines the alert border radius                    |
| --swe-alert-border-size           | Determines the alert border size                      |
| --swe-alert-border-color          | Determines the alert border color                     |
| --swe-alert-icon-margin-top       | Determines the top margin of the alert icon           |
| --swe-alert-icon-margin-right     | Determines the right margin of the alert icon         |
| --swe-alert-icon-margin-bottom    | Determines the bottom margin of the alert icon        |
| --swe-alert-icon-margin-left      | Determines the left margin of the alert icon          |
| --swe-alert-icon-margin           | Determines all margins of the alert icon              |
| --swe-alert-message-margin-top    | Determines the top margin of the alert message        |
| --swe-alert-message-margin-right  | Determines the right margin of the alert message      |
| --swe-alert-message-margin-bottom | Determines the bottom margin of the alert message     |
| --swe-alert-message-margin-left   | Determines the left margin of the alert message       |
| --swe-alert-message-margin        | Determines all margins of the alert message           |
| --swe-alert-hide-margin-top       | Determines the top margin of the alert hide button    |
| --swe-alert-hide-margin-right     | Determines the right margin of the alert hide button  |
| --swe-alert-hide-margin-bottom    | Determines the bottom margin of the alert hide button |
| --swe-alert-hide-margin-left      | Determines the left margin of the alert hide button   |
| --swe-alert-hide-margin           | Determines all margins of the alert hide button       |
| --swe-alert-hide-cross-color      | Determines the cross color of the alert hide button   |
| --swe-alert-hide-cross-size       | Determines the cross size of the alert hide button    |

> These variables above are useful to customize the closed shadow DOM.

## Install

Using npm:

```sh
npm i @singleware/ui-alert
```

## License

[MIT &copy; Silas B. Domingos](https://balmante.eti.br)
