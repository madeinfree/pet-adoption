import { h, Component } from 'preact'

const navigationStyle = {
  wrapper: {
    height: 300,
    padding: 60,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
    textAlign: 'center',
    fontSize: 40
  },
  contentTitle: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    textShadow: '2px 2px #ccc'
  }
}

const Navigation = () => {
  return (
    <div style={ navigationStyle.wrapper }>
      <h1 style={ navigationStyle.contentTitle }>臺北市開放認養動物</h1>
    </div>
  )
}

export default Navigation
