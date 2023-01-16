# Component Name
Write the component overview here


## Usage

```jsx
    <ComponentName
        caption="Submit"
        onPress={somefunction}
        bold
        italic
        color="#00f"
    />
```

## Properties

 Name           | Description                                 | Type     | Required  | Default value   
:---------------|:------------------------------------------- |:---------|:---------:|:--------------
 caption        | Caption of the component                    | string   | yes       |           
 disabled       | Make the component disabled                 | boolean  |           | false          
 onPress        | Callback when the component is pressed      | function | yes       |           
 bold           | Make the text bold                          | boolean  |           | false          
 italic         | Make the text italic                        | boolean  |           | false          
 color          | The color of the component                  | string   |           | `#2f2f2f`          
 disabledColor  | The color when the component is disabled    | string   |           | `#8C8C8C`        


```


```


## Note:
After cloning this repo, don't forget to edit these files:

1. Edit these fields inside `package.json` file
   - name
   - description
   - url for `repository`, `bugs`, and `homepage`
   - author

2. Edit component name inside `index.js` file.
3. Edit component name inside `src/custom-component.js` file.
4. Rename `src/custom-component.js` file appropriately.
