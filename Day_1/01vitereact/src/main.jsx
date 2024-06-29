import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import List from './List.jsx'

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit'
// }

const anotherUser = "Gadhvi Ashwin"

const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'click me to visit',
    anotherUser // injecting variable rule : After All end 
)

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

function MyApp(){
    return(
        <div>
            <h1>My App</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
// reactElement calling reactElement Made By react it self
<>
    <App />
    <List/>
    <MyApp/> 
    {/* reactElement */}
    {/* //myapp is also function so we can write it like
    //MyApp()  it works */}
    {/* AnotherElement it works in alone  */}
    
</>
)

//to import element function should be capital 
//when more then two componet their write in fragement
