import React from 'react'

const AiModel = () => {
  return (
    <div>
       <div className="App">
          <df-messenger
            project-id="totemic-phoenix-356313"
            agent-id="cd7fd449-9c39-48f6-b112-d4f0820efc82"
            language-code="en"
            max-query-length="-1"
            style={{
              zIndex: 999,
              position: 'fixed',
              bottom: '16px',
              right: '16px',
              '--df-messenger-font-color': '#000',
              '--df-messenger-font-family': 'Google Sans',
              '--df-messenger-chat-background': '#f3f6fc',
              '--df-messenger-message-user-background': '#d3e3fd',
              '--df-messenger-message-bot-background': '#fff'
            }}
          >
            <df-messenger-chat-bubble chat-title="Policies"></df-messenger-chat-bubble>
          </df-messenger>
        </div>
    </div>
  )
}

export default AiModel
