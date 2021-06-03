# RTS APP TV #


### RTS TV App Framework ###
* Simply and easily build an application for Smart TV, with a unique project for AndroidTV, TvOS and Web platforms (Tizen, webOs)
* current version : 0.0.3
* [Demo](https://bitbucket.org/rtsmb/rts-app-tv-demo)
* [Project template](https://bitbucket.org/rtsmb/rts-app-tv_template/src/master/)

### Install ###
```
yarn add rts-app-tv
```

You could use a specific version in your `package.json` : `"rts-app-tv": "^0.0.3"`

### Usage ###

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

### Configure ###

You have the possibility to configure the framework through the provider by passing a configuration object 
```
<TVAPPProvider config={{ focus: { type: 'border' } }}>
```
#### Provider Configuration props ####

| Name        | Type      
| ----------- | -----------      
| focus       | Object : { type: 'border'/'scale' }        
| navigation  | React Ref  (see navigation object below) 
| theme       | Object (see theme object below)

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

You can used and modified the file `ThemeSRG.js` as an example of your `YourAppTheme` and create it directly inside your project.

#### Work Around ####

If you want a clean project to compile on each platform (tvOS, AndroidTV and web), you can copy the project [Project template](https://bitbucket.org/rtsmb/rts-app-tv_template/src/master/).

Add the three dependencies :

```
"react-native-linear-gradient": "^2.5.6",
"react-native-web-linear-gradient": "^1.1.1",
"rts-app-tv": "^0.0.3"`
```

You also maybe should add inside `config-overrides.js` / `alias` this line : 

`'react-native-linear-gradient': 'react-native-web-linear-gradient'`



  





 
