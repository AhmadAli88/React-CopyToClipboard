
import './App.css'
import ClipboardExample from './components/ClipboardExample'
import FeedbackClipboard from './components/ClipboardWithFeedbackTimer'
import NativeExample from './components/Native Clipboard API'

function App() {
 

  return (
  <div>
    <ClipboardExample/>
    <NativeExample/>
    <FeedbackClipboard/>
    <NativeExample/>
  </div>
  )
}

export default App
