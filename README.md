# Task for Contractual React Native Developer Role
## Technical Highlights
*Frameworks and Libraries Used:*
1. **React Native CLI**
2. **Tanstack Query for data fetching and caching**
3. **FlatList for optimized list rendering**
## Development Best Practices:
1. **Modular Component Structure: Ensured scalability and maintainability of the codebase.**
2. **Clear Documentation: Added comprehensive comments throughout the code for better readability and understanding.**
## Automation:  
1. **GitHub Actions: Implemented GitHub Actions for automating the build process and generating APKs.**


## Styling:
1. **Integrated styling using Tailwind CSS (twrnc) for consistent and responsive designs.**

## Key Features Implemented
**Design Implementation**
1. **Recreated the design from the provided PDF with pixel-perfect accuracy, ensuring responsiveness and attention to detail.**
2.  **Used a modular approach to structure components like headers, tabs, and item lists for better maintainability.**



## Fetching Data


1. **Integrated the API https://jsonplaceholder.typicode.com/todos to fetch the "todos" data.**
2. **Handled API responses efficiently using Tanstack Query for caching, error handling, and optimized state management.**
3. **Ensured seamless rendering of data in the "Activities" tab as per the provided design.**

## Performance Optimization And Optimize Flatlist for Large Lists:
1. **Utilized React's performance hooks such as React.memo, useCallback, and useMemo to optimize re-renders and improve app performance.**
2. **Avoided unnecessary re-renders of components by ensuring clean separation of concerns.**
3. **Precomputing item layouts: Utilized getItemLayout to calculate item dimensions in advance, improving rendering speed.**
4. **Memoizing functions: Used useCallback to memoize renderItem and keyExtractor, preventing unnecessary re-renders.**
5. *Configuring FlatList properties:*
6. **initialNumToRender: Optimized the number of items rendered initially.**
7. **maxToRenderPerBatch: Controlled the maximum number of items rendered per batch.**
8. **windowSize: Adjusted the number of viewable items around the current viewport.**
9. **removeClippedSubviews: Enabled to unmount off-screen components and save memory.**

## Clean Code Practices
1. **Followed industry standards for code structuring, ensuring readability and modularity.**
2. **Maintained a consistent naming convention for variables, components, and files.**
3. **Wrote reusable utility functions and components to reduce redundancy.**



## Run Locally

Clone the project

*Guidelines to Run the App Locally*

```bash
git clone https://github.com/MuhammadJunaid01/NeovoTecht
```

```bash
cd NeovoTecht
```

```bash
 yarn 
```

```bash
 yarn  android
```

## installation Guidelines

*To install and run the application, follow these steps:*
### Step 1: Download the APK

1. **Navigate to the GitHub Repository for the project.**
2. **Go to the Actions tab in the repository.**
3. **Locate the latest successful build in the workflow runs.**
4. **Click on the workflow run, then scroll down to the Artifacts section.**
5. **Download the APK file from the artifacts.**

### Step 2: Install the APK on Your Device
*Transfer the downloaded APK file to your Android device*
1. **On your Android device, enable Install Unknown Apps:**
2. **Go to Settings > Security or Privacy (depending on the device).**
3. **Enable the option to install apps from unknown sources.**
4. **Locate the APK file on your device using a file manager and tap on it to start the installation process.**

## Usage/Examples

```javascript
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import tw from '../../tailwind';
import {BottomTabsParamList, ITodo} from '../interfaces';
import {ThemedText, TodoItem} from './shared''



interface IProps {
  data: ITodo[];
  navigation?: StackNavigationProp<BottomTabsParamList>;
  onToggleTodo: (id: number) => void;
}
const ITEM_HEIGHT = 60;
const TodoList: React.FC<IProps> = React.memo(({data, onToggleTodo}) => {
  /* The `renderItem` constant is defining a callback function that will be used to render each item in
the `FlatList` component. It is of type `ListRenderItem<ITodo>`, indicating that it will render
items of type `ITodo`. */
  const renderItem: ListRenderItem<ITodo> = useCallback(
    ({item}) => (
      <TodoItem todo={item} item_height={ITEM_HEIGHT} onToggle={onToggleTodo} />
    ),
    [onToggleTodo],
  );

  /* The `keyExtractor` constant is defining a callback function that is used by the `FlatList`
  component in React Native to extract a unique key for each item in the list. In this case, the
  callback function takes two parameters: `_` (which is not used in the function) and `i` (the index
  of the item). */
  const keyExtractor = useCallback((_: any, i: number) => i.toString(), []);

  /* The `getItemLayout` constant is defining a callback function that is used by the `FlatList`
  component in React Native to provide information about the size and the scroll position of items
  in the list. */
  const getItemLayout = useCallback(
    (_: any, index: any) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <View style={tw`flex-1`}>
      <ThemedText variant="h2" color="text-gray-800" style={tw`mb-4`}>
        My Todos
      </ThemedText>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </View>
  );
});

export default TodoList;


## License

[MIT](https://choosealicense.com/licenses/mit/)