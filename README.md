# UI-Alert

Custom HTML element used to create alert boxes with icon, message and hide button.

### State Attributes

| Name   | Description                                        |
| ------ | -------------------------------------------------- |
| opened | Automatically assigned when the alert is displayed |

### Properties

| Name    | Description                   |
| ------- | ----------------------------- |
| message | Get and set the alert message |

### Methods

| Name | Description     |
| ---- | --------------- |
| show | Shows the alert |
| hide | Hides the alert |

### Slots

| Name    | Description                                             |
| ------- | ------------------------------------------------------- |
| message | Element to shows the alert message                      |
| icon    | Element to shows the alert icon (can be omitted)        |
| hide    | Element to shows the alert hide button (can be omitted) |

### Events

| Name | Description                         |
| ---- | ----------------------------------- |
| hide | Dispatched when the alert is hidden |

## Install

Using npm:

```sh
npm i @singleware/ui-alert
```

## License

[MIT &copy; Silas B. Domingos](https://balmante.eti.br)
