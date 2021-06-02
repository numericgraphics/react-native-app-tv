# RTS APP TV #


### RTS TV App Framework ###
* Simply and easily build an application for Smart TV, with a unique project for AndroidTV, TvOS and Web platforms (Tizen, webOs)
* current version : 0.0.3
* [Demo](https://bitbucket.org/tutorials/markdowndemo)
* [Project template](https://bitbucket.org/tutorials/markdowndemo)

### Install ###
```
yarn add rts-app-tv
```
### Usage ###

* First, import and use our Provider
> 
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
* Second, import and use our components
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

* You have the possibility to configure the framework through the provider by passing a configuration object 
> 
```
<TVAPPProvider config={{ focus: { type: 'border' } }}>
```
#### Provider Configuration props

| Name        | Type      
| ----------- | -----------      
| focus        | Object : { type: 'border'/'scale' }        
| navigation     | React Ref  (see navigation object below) 
| theme     | Object (see theme object below)

