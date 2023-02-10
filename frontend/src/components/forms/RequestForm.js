import CreateForm from "./CreateForm";
import DeleteForm from "./DeleteForm";
import GetForm from "./GetForm";
import UpdateForm from "./UpdateForm";

const RequestForm = ({ request }) => {
  switch (request) {
    case 'get':
      return <GetForm />;
    case 'create':
      return <CreateForm />;
    case 'update':
      return <UpdateForm />;
    case 'delete':
      return <DeleteForm />
    default:
      return request;
  }
}

export default RequestForm;
