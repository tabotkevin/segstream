import GetForm from "./GetForm"
import CreateForm from "./CreateForm"
import UpdateForm from "./UpdateForm"
import DeleteForm from "./DeleteForm"

const RequestForm = ({request}) => {
  switch (request) {
		case 'get':
			return <GetForm/>
		case 'create':
			return <CreateForm/>
		case 'update':
			return <UpdateForm/>
		case 'delete':
			return <DeleteForm/>
		default:
			return request
	}
}

export default RequestForm
