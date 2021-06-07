# RTS APP TV #


### RTS TV App Framework ###
* Simply and easily build an application for Smart TV, with a unique project for AndroidTV, TvOS and Web platforms (Tizen, webOs)
* current version : 0.0.18
* [Demo](https://bitbucket.org/rtsmb/rts-app-tv-demo)
* [Project template](https://bitbucket.org/rtsmb/rts-app-tv_template/src/master/)

## Install ##
```
yarn add rts-app-tv
```

You could use a specific version in your `package.json` : `"rts-app-tv": "^0.0.3"`

## Usage ##

First, import and use our Provider in your `App.js` :
```
import { TVAPPProvider } from 'rts-app-tv'

const App = () => {
   return (
       <TVAPPProvider>
           <Home/>
       </TVAPPProvider>
   )
}
```

You need to create your own `Home.js``and secondly, import and use our components inside :
```
import { SwimLane } from 'rts-app-tv'

const Home = () => {
   return (
        <SwimLane
           id={}
           ref={}
           type={}
           data={}
           parent={}
           renderItem={}
           onItemPress={(item) => {}}
        />
   )
}
```

## Configure ##
You have the possibility to configure the framework through the provider by passing a configuration object 
```
<TVAPPProvider config={{ focus: { type: 'border' } }}>
```
#### Provider Configuration props ####

| Name        | Type      
| ----------- | -----------      
| theme       | Object (see theme object below)
| focus       | Object { type: 'border'/'scale' }        
| navigation  | React Ref  (see navigation object below) 
| root       | String     
| focusManager       | Object (see theme object below)     

#### Theme ####
By default, the framework use a specific theme `ThemeSRG.js` with specific attributes :
- Colors
- Typography (font, size, weight)
- Configuration of components (Swimlane, Swimlane Items, Grid, Flat Scroll view, Drawer, etc.)

All the CSS of each component of the framework can be configured and modified using a custom theme.

For that, you need to give your custom theme in parameters of the `TVAppProvider` :
```
<TVAPPProvider config={{ focus: { type: 'border' }, theme: YourAppTheme }}>
```

Take inspiration from the theme [ThemeSRG.js](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/theme/ThemeSRG.js) to create your own theme directly inside your project.  Rewrite all or part of the styles of the different components.

#### Focus ####
The framework provide 2 styles of focus element.
- border : a white border all around the focused element.
- scale : the focused element is scale with a quick animation.

Can be usefull performances's consideration

#### Navigation ####
The framework is base on the react native navigation for native platforms, and W3C official spacial navigation polyfill for the web platform.
Access to key events state with a useEffect, for all platforms out of the box.
```
const { KeyEventState } = useContext(TVAPPContext)

useEffect(() => {
            if (KeyEventState.state.type === KeyEventState.KeyEventStates.KEY_DOWN) { ... }
            else if (KeyEventState.state.type === KeyEventState.KeyEventStates.KEY_UP) { ... }
    }, [KeyEventState.state])
```

The framework offer the possibility to work with [react navigation](https://reactnavigation.org/). 
Simply, pass the navigation reference to the config object :
```
const navigationRef = React.createRef()
    return (
        <NavigationContainer ref={navigationRef}>
            <TVAPPProvider config={{ focus: { type: 'border' }, navigation: navigationRef }}>
        <NavigationContainer/>
    )
```
Then you can use the customDrawer, back navigation with last item focused, etc.
By default the root navigation is set to 'Home'. Override the value like this : 
```
<TVAPPProvider config={{ focus: { type: 'border' }, root: 'Home' }}>
    <Home/>
</TVAPPProvider>
```

#### FocusManager ####
You can provide your own focusManager to set the focus as you want.
Use our [FocusManager.js](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/managers/FocusManager.js).

```
<TVAPPProvider config={{ focus: { type: 'border' }, focusManager: MyFocusmanager }}>
    <Home/>
</TVAPPProvider>
```
It can be usefull to set focus behavior between component.
### Global State ###
Acces to the framework global state to detect drawer state, theme and more to come :
```
const { GlobalState } = useContext(TVAPPContext)

useEffect(() => {}, [GlobalState.globalState])
```

### Work Around - Tips ###
If you want a clean project to compile on each platform (tvOS, AndroidTV and web), you can copy the project [Project template](https://bitbucket.org/rtsmb/rts-app-tv_template/src/master/).

Add the three dependencies :

```
"react-native-linear-gradient": "^2.5.6",
"react-native-web-linear-gradient": "^1.1.1",
"rts-app-tv": "^0.0.18"
```

You also maybe should add inside `config-overrides.js` / `alias` this line : 

`'react-native-linear-gradient': 'react-native-web-linear-gradient'`



  





 
