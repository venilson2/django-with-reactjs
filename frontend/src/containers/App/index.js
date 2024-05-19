import React from 'react';
import Title from '../../components/Title';
class App extends React.Component {
  render () {
    const text = 'Hello Wordl!!';
    return (
      <Title text={text} />
    )
  }
}
export default App;