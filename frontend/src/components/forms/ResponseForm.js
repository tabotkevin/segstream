import { useStore } from '../../Store';

const Response = () => {
  const store = useStore();
  return (
    <div>
      <h2>Response</h2>
      <div style={{ height: '90vh', color: 'red' }} className="bg-light border">
        <pre>{JSON.stringify(store.response, undefined, 2)}</pre>
      </div>
    </div>
  )
}

export default Response;
