# RTS APP TV #


### RTS TV App Framework ###
* Simply and easily build an application for Smart TV, with a unique project for AndroidTV, TvOS and Web platforms (Tizen, webOs)
* current version : 0.0.21
* [Demo](https://bitbucket.org/rtsmb/rts-app-tv-demo)
* [Project template](https://bitbucket.org/rtsmb/rts-app-tv_template/src/master/)

## Dependencies ##
- React native version 63.4-0
- Xcode >= 12.4
- Android Studio - SDK version 6/78/9/10

## Install ##
```
yarn add rts-app-tv
```

## Components ##
List : 

- Swimlane ([native](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/SwimLane/SwimLane.js) / [web](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/SwimLane/SwimLane.web.js))
- [Flat list](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/FlatScrollView/FlatScrollView.js)
- [Grid](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/GridScrollView/GridScrollView.js)

Items :

- [Card](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/items/CardItem.js)
- [Media](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/items/MediaItem.js)
- [Poster](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/items/PosterItem.js)
- [Round](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/items/RoundItem.js)
- [Topic](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/items/TopicItem.js)

Navigation :

- [Drawer](https://bitbucket.org/rtsmb/rts-app-tv/src/develop/src/lib/CustomDrawer/CustomDrawer.js)


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


#### Global State ####
Access to the framework global state to detect drawer state, theme and more to come :
```
const { GlobalState } = useContext(TVAPPContext)

useEffect(() => {}, [GlobalState.globalState])
```

## Compilation ##

You need to use a React Native set up to use this framework.
Also, you need to have Android Studio and Xcode to compile for Android TV and tvOS.

For using this framework on tvOS you need to add in your app demo inside iOS folder two things :

1. Add `SRGSSRTypeDisplayVFApp-Medium.ttf` and `SRGSSRTypeTextVFApp-Medium.ttf` as resources
2. Add the font reference on yours info.plist (tvOS and iOS)

```	
<key>UIAppFonts</key>
<array>
    <string>SRGSSRTypeDisplayVFApp-Medium.ttf</string>
    <string>SRGSSRTypeTextVFApp-Medium.ttf</string>
</array>
```

## Work Around - Tips ##
If you want a clean project to compile on each platform (tvOS, AndroidTV and web), you can copy the project [Project template](https://bitbucket.org/rtsmb/rts-app-tv_template/src/master/).

Add the three dependencies :

```
"react-native-linear-gradient": "^2.5.6",
"react-native-web-linear-gradient": "^1.1.1",
"rts-app-tv": "^0.0.21"
```

You also maybe should add inside `config-overrides.js` / `alias` this line : 

`'react-native-linear-gradient': 'react-native-web-linear-gradient'`



  





 
