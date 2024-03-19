## Component

- StyledText
- PressableButton
- TouchableOpacityButton
- Link
- checkbox
- input
- Toast
- Ratings
- Pagination

## StyledText

```xml
<StyledText>
        Home
</StyledText>
```

| Property        | Type                             | Description                                      |
| --------------- | -------------------------------- | ------------------------------------------------ |
| `children`      | `React.ReactNode`                | Child elements or content to be rendered.       |
| `style` (optional) | `ViewStyle | TextStyle | ImageStyle | object` | Styling information for the component. |
| `numberOfLines` (optional) | `number` | Number of lines to limit the content (used in text components). |

## PressableButton or TouchableOpacityButton

```xml
    <PressableButton onPress={()=>{}} text={'Home'} />
```

| Property        | Type                                                     | Description                                                                                                          |
| --------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `text` (optional) | `string | number`                                   | The text or label to be displayed on the button.                                                                    |
| `onPress` (optional) | `() => void`                                 | A function to be executed when the button is pressed.                                                               |
| `disableStyle` (optional) | `ViewStyle | TextStyle | ImageStyle | object` | Styling for the button when it's disabled.                                                                |
| `containerStyle` (optional) | `ViewStyle | TextStyle | ImageStyle | object`             | Additional container style for the button.                                                                           |
| `disabled` (optional) | `boolean`                                   | If `true`, the button is in a disabled state.                                                                        |
| `image` (optional) | `any`                                      | An image component or source to be displayed on the button.                                                          |
| `image_url` (optional) | `string`                                | URL or source for the image to be displayed on the button.                                                           |
| `imageStyle` (optional) | `ViewStyle | TextStyle | ImageStyle | object` | Styling for the image component.                                                                   |
| `textStyle` (optional) | `ViewStyle | TextStyle | ImageStyle | object` | Styling for the text on the button.                                                                 |

These descriptions provide a detailed explanation of each property, its data type, and the role it plays in the `buttonPropsType` type definition. You can use this table to better understand the purpose of each property and how to use them in your code or documentation.

## Link

```xml
     <Link href='/path?name=Branch&products=[Journeys,Email,Universal%20Ads]'>
        lorem
      </Link>
```

| Property  | Type                                              | Description                                      |
| --------- | ------------------------------------------------- | ------------------------------------------------ |
| `href`    | `string`                                         | The URL or link destination.                     |
| `children` | `React.ReactNode`                              | Child elements or content to be displayed as the link text. |
| `style` (optional) | `object | ImageStyle | ViewStyle | TextStyle` | Styling information for the link. |

## Checkbox

```xml
 <Checkbox isChecked={isChecked} setChecked={setChecked}/>
```

| Property       | Type                                                     | Description                                       |
| -------------- | -------------------------------------------------------- | ------------------------------------------------- |
| `isChecked`    | `boolean`                                                | Indicates whether the checkbox is checked.       |
| `setChecked`   | `React.Dispatch<React.SetStateAction<boolean>>`         | A function to update the `isChecked` state.       |
| `style` (optional) | `ViewStyle | TextStyle | ImageStyle | object` | Styling information for the checkbox. |
| `asset` (optional) | `{ checked: image, unchecked: image }`             | Defines assets for the checked and unchecked image. |

## Ratings

```xml
<Ratings rating={10} size={10} />
```

| Property  | Type                                   | Description                                      |
| --------- | -------------------------------------- | ------------------------------------------------ |
| `size` (optional) | `number`                      | Specifies the size of the component.            |
| `rating`  | `number`                              | Represents the rating value.                   |
| `asset` (optional) | `{ fill: image, empty: image }` | Defines assets for the filled and empty image. |

## Toast

```js
  Toast({ text: noResultsFoundPlaceholder })
```

| Property  | Type                                      | Description                                      |
| --------- | ----------------------------------------- | ------------------------------------------------ |
| `type` (optional) | `'gravity' | 'gravity-offset'` | Specifies the type of the component.            |
| `text`    | `string`                                  | Contains the text content.                      |

## Input

```xml
 <Input
          setValue={setEmail}
          value={email}
          placeholder={"emailTr"}
          toast={"email_error"}
          pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
        />
```

| Property            | Type                                       | Description                                           |
| ------------------- | ------------------------------------------ | ----------------------------------------------------- |
| `autoFocus` (optional) | `boolean`                                | Determines if the input should receive focus automatically. |
| `containerStyles` (optional) | `ViewStyle | TextStyle | ImageStyle | object` | Styling information for the container of the input. |
| `style` (optional) | `ViewStyle | TextStyle | ImageStyle | object` | Styling information for the input component. |
| `asset` (optional) | `number`                                 | Specifies an asset associated with the input. |
| `value`             | `string`                                 | Contains the current value of the input. |
| `multiline` (optional) | `boolean`                             | Indicates if the input allows multiple lines of text. |
| `setValue`          | `any`                                   | A function to set or update the input value. |
| `defaultValue` (optional) | `string`                           | Provides a default value for the input. |
| `placeholder` (optional) | `string`                           | Displays a placeholder text in the input field. |
| `pattern` (optional) | `RegExp`                             | Defines a regular expression pattern for input validation. |
| `toast` (optional) | `string`                               | A message or toast to display as feedback for the input. |

## Pagination

```xml
 <Pagination
        currentPage={10}
        getLastPage={100} pageHandle={() => { }}
        disableButton={{
          bg: 'red',
          text: 'white'
        }}
        button={{
          bg: 'gold',
          text: "white",
          borderWidth: 1,
          borderColor: 'red',
        }}
      />
```

| Property              | Type                                                               | Description                                   |
| --------------------- | ------------------------------------------------------------------ | --------------------------------------------- |
| `disableButton` (optional) | `{ bg: string, text: string }`                               | Configurations for a disabled button.          |
| `button` (optional)  | `{ bg: string, text: string, borderWidth?: number, borderColor?: string }` | Configurations for an enabled button. |
| `pageHandle`          | `any or number`                                                             | A function or handler for page management.     |
| `currentPage`         | `any or number`                                                             | Represents the current page or state.          |
| `getLastPage`         | `any or number`                                                             | A function or handler to retrieve the last page. |
