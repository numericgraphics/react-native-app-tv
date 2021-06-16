# RTS APP TV #


### RTS TV App Framework ###
* Simply and easily build an application for Smart TV, with a unique project for AndroidTV, TvOS and Web platforms (Tizen, webOs)
* current version : 0.0.32
* [Demo](https://bitbucket.org/rtsmb/rts-app-tv-demo)
* [Project template](https://bitbucket.org/rtsmb/rts-app-tv_template/src/master/)
* [Documentation](https://srgssr.github.io/rts-app-tv/index.html)

## Dependencies ##
- React native version 63.4-0
- Xcode >= 12.4
- Android Studio - SDK version 6/78/9/10

## Install ##
```
yarn add rts-app-tv
```

## Components ##
full [documentation](https://srgssr.github.io/rts-app-tv/index.html) for all the components 

List : 

- Swimlane ([native](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/SwimLane/SwimLane.js) / [web](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/SwimLane/SwimLane.web.js))
- [Flat list](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/FlatScrollView/FlatScrollView.js)
- [Grid](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/GridScrollView/GridScrollView.js)

Items :

- [Card](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/items/CardItem.js)
- [Media](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/items/MediaItem.js)
- [Poster](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/items/PosterItem.js)
- [Round](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/items/RoundItem.js)
- [Topic](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/items/TopicItem.js)

Navigation :

- [Drawer](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/CustomDrawer/CustomDrawer.js)


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

Take inspiration from the theme [ThemeSRG](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/theme/ThemeSRG.js) to create your own theme directly inside your project.  Rewrite all or part of the styles of the different components.

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
Extend the [TVFocusManager](https://github.com/SRGSSR/rts-app-tv/tree/develop/src/lib/managers/TVFocusManager.js) class.

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
### Native platforms ###
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

### Web platforms ###
#### Building for Tizen OS (First Step) ####

Required : Tizen Studio (with Tizen SDK tools, TV extension 6.0)

- Build the web project using npm run web:build command in the terminal. This create a build folder at the roots of the project
- Start Tizen Studio and create a new blank projet (pick Template type, TV as application, Web Application as app type and empty template)
- At the last step of creating a blank project. Click on 'More Properties' and disable "Use default location", now browse to your build folder in your react native project and set it as your Tizen Studio project.
- Go to your build folder and copy the generated Tizen web app files (icon.png, .settings, .project, config.xml, .tproject) into ./public folder of your react native project
- Use Tizen studio to build the project by importing it in your workspace, and run debug or build action

In the config.xml add to allow api calls : 
```
<access origin="https://rts-tv-ssa.vercel.app" subdomains="true"/>
    <access origin="*" subdomains="true"/>
```

#### Building for WebOS (First Step) ####

Info : webOS TV 5.x (2020) based on web engine Chrome 68 release in june 2018, source : https://www.webosose.org/about/roadmap/roadmap/,
https://webostv.developer.lge.com/discover/specifications/web-engine/

Required : WebOS SDK with CLI

- Build the web project using npm run web:build command in the terminal. This create a build folder at the roots of the project.
 Be carfull to remove the "/" for the href call in build/index.html. It should like :
 ```
 href="static/css
```
- Copy and add appinfo file, icons from the webos-build-data folder in the build folder
- In the web folder, Use the terminal to run for package the app : 
```
ares-package -o webos-build-data build 
```
this will create webos-build-data folder with the ipk in it
- Run the command : 
```
ares-install webos-build-data/com.your-app-name.app_0.0.1_all.ipk
```

## Work Around - Tips ##
If you want a clean project to compile on each platform (tvOS, AndroidTV and web), you can copy the project [Project template](https://bitbucket.org/rtsmb/rts-app-tv_template/src/master/).

Add the three dependencies :

```
"react-native-linear-gradient": "^2.5.6",
"react-native-web-linear-gradient": "^1.1.1",
"rts-app-tv": "^0.0.32"
```

You also maybe should add inside `config-overrides.js` / `alias` this line : 

`'react-native-linear-gradient': 'react-native-web-linear-gradient'`



  





 
