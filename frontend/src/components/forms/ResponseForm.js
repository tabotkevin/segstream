import { useContext } from 'react'
import {ResponseContext} from '../../App';

const Response = () => {
  const responseContext = useContext(ResponseContext)
  return (
    <div>
      <h2>Response</h2>
      <div style={{ height: '85vh' }} className="bg-light border">{responseContext.response}</div>
    </div>
  )
}

export default Response
