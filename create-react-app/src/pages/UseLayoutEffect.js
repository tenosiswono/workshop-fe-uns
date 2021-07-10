import React, { useLayoutEffect, useRef, useState } from 'react';

function MessageDisplay({ messages }) {
  const containerRef = useRef(null)
  useLayoutEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  })
  return <div
    ref={containerRef}
    style={{
      border: '1px solid black',
      height: '200px',
      margin: '24px',
      overflow: 'scroll'
    }}
  >
    {messages.map((message, idx) => <div key={idx}>{message}</div>)}
  </div>
}

function UseLayoutEffect() {
  const [messages, setMessages] = useState([])
  const addMessage = () => {
    setMessages([...messages, `random string ${Math.random(0, 1000000)}`])
  }
  const removeMessage = () => {
    setMessages(messages.slice(0, messages.length - 1))
  }
  return (
    <div style={{ margin: '24px'}}>
      <h2>UseLayoutEffect</h2>
      <button onClick={addMessage}>add</button>
      <button onClick={removeMessage} disabled={messages.length <= 0}>remove</button>
      <MessageDisplay messages={messages} />
    </div>
  );
}


export default UseLayoutEffect