import Top from '../components/Top'
import Bottom from '../components/Bottom'

export default ({ children }) => (
  <div>
    <Top />
    { children }
    <Bottom />
  </div>
)
