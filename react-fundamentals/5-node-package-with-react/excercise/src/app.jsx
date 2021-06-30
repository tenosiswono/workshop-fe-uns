import * as React from 'react'
import ReactDOM from 'react-dom'

function MessageDua({ subject, greetings}) {
  return <div>{greetings} {subject}!</div>
}

const Message = () => <div>Halo suda bisa belum?</div>

const HelloWorld = <div>
  Hello, world!
  <Message />
  <MessageDua subject="world" greetings="hello" />
</div>

ReactDOM.render(HelloWorld, document.getElementById('root'))
