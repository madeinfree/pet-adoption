import { h, Component } from 'preact'

const navigationStyle = {
  wrapper: {
    height: 550,
    padding: 60,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
    textAlign: 'center',
    fontSize: 40,
    backgroundImage: 'url(http://163.29.39.183/uploads/images/medium/26801a33-a6c2-4551-bd58-463cbd5ac2f7.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
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
