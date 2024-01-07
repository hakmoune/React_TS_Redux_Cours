# Ressource

https://www.youtube.com/watch?v=udr2rx_B99w&list=PLc-glsRnopxSAhNt24V4ch19LUqmNhMAm&index=34&t=639s


######

# Notes

# 1.Typescript
1. `state + action.payload?.data;`: dans cette exemple, si le payload n'existe pas(undefined ou null), le retour ce sera `undefined`
si le `state` est un nombre `undefined jouera le role de zero` si `state` est string dans ce cas on aura une erreur

2. `??`: Certainly! The ?? operator is called the nullish coalescing operator. It is used to provide a default value for a potentially null or undefined expression. `const result = someValue ?? defaultValue;`


# 2.Redux
1. install ``Redux`` and ``React-redux``, et ``react thunk``
    `npm i redux react-redux redux-thunk`

2. `reducer function`: c'est une fonction qui prend en parametre:
    1.1 `Le state intiale` 
    1.2 `Action`, est en fonction de ``l'action`` il nous retourne ``un nouveau state``. 

3. `action`: l'action c'est un ``objet`` avec ``le type `` et un ``payload(Optionelle)`` 
    2.1 `Type`: en fonction de type le reducer va nous retourner un nouveau ``state`` 
    2.2 `payload`: pour qu'on puisse passer des données a notre reducer fonction

4. `Action Creatotrs`: se sont des action sous forme d'une fonction qui ``dispatch`` une l'objet ``action`` qui contient le type et le payload a notre reducer

5. `Combined reducer`: une fonction de `Redux` qui prend en parametre un objet de reducers,et qui va les combiner ensemble

6. `Store / createStore`:  holds the complete state tree of your application, c'est lui qui centralise notre state sur l'ensemble de notre application, on connect le store avec notre application, et voila, il rendre notre state globale, c'est un state manager
    
7. `middleware thunk`:
    `applyMiddleware`: A function to apply middleware to the store.
    `thunk`: A middleware library commonly used with Redux to handle asynchronous actions

8. `Englobe React App with Redux Store on utilisant react-redux librarie`:
        import { Provider } from 'react-redux'; // That will proved the store to our app, and will help us to comunicate with redux
        import { store } from './state/store'; // The store that combined our reducers

        <Provider store={store}> <App /> <Provider />

9. ``useDispatch() and useSelector()``
    9.1 `useDispatch()` Update state, you send an action to the store and vie the reducer it updatethe state 
        `const dispatch = useDispatch()` // Retourne une fonction qui va nous permetre de dispatcher un action a notre store
        `onClick={() => dispatch(depositMoney(1))}` // `depositMoney` c'est le `actionCreator`, le param c'est le `payload`

    9.2 `useSelector()` Get state, prend en parametre notre state global, et retourne une partie de notre state, que l'on souhaite.
        `useSelector(state => state.bank)`