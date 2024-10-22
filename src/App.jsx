import { useEffect, useState } from 'react'
import './App.css'

const Label = ({ text }) => {
  console.log('rendering the label')
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setCounter(curr => curr +1), 1000)
    return () => { clearInterval(interval)}
  }, [])

  return (
    <div>
      Label: {text}. Counter: {counter}
    </div>
  )
}

const Content = ({
  text 
}) => {
  console.log('rendering the content', text)
  return (
    <div>Content: {text} </div>
  )
}

const TabsWithProps = ({
  tabContent
}) => {
  return (
    <div>
      <b>This is the tabs rendering as props:</b>
      {tabContent.map(tab => {
        return (
          <div key={tab.id}>
            <div>{tab.label}</div>
            <div>{tab.content}</div>
          </div>
        )
      })}
    </div>
  )
}

function App() {

  const tabsData_a = [{
    id: 'tabData_1',
    label: <Label text='1' />,
    content: <Content text='1' />
  },{
    id: 'tabData_2',
    label: <Label text='2' />,
    content: <Content text='2' />
  }]

  return (
    <div>
      <TabsWithProps tabContent={tabsData_a} />
    </div>
  )
}

export default App
