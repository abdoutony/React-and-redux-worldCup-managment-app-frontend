import { Formik, Form, Field, ErrorMessage } from "formik";
import { PlayerSchema } from "../../../../helpers/formShemas";
import { OnFormButtonPressed } from "../../../../services/admin/general.service";
import { useAlert } from "react-alert";
const FormAddPlayer = (props) => {
  let alert = useAlert();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: 0,
        shirtNumber: "",
      }}
      validationSchema={PlayerSchema}
      onSubmit={(values) => {
        console.log(values);

        OnFormButtonPressed(values, "ADD_PLAYER", alert);
      }}
    >
      {({ touched, errors, dirty, isValid }) => {
        return (
          <>
            <h1>Add new player</h1>
            <Form>
              <div className="form-group">
                <label className="control-label mt-2">First name</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="enter first name"
                  value={props.firstName}
                  className={
                    errors.firstName && touched.firstName
                      ? "form-control mt-2 input-error"
                      : "form-control mt-2"
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label className="control-label mt-2">Last name</label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="enter last name"
                  className={
                    errors.lastName && touched.lastName
                      ? "form-control mt-2 input-error"
                      : "form-control mt-2"
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label className="control-label mt-2">Age </label>
                <Field
                  type="text"
                  name="age"
                  placeholder="enter age"
                  className={
                    errors.age && touched.age
                      ? "form-control mt-2 input-error"
                      : "form-control mt-2"
                  }
                />
                <ErrorMessage name="age" component="span" className="error" />
              </div>
              <div className="form-group">
                <label className="control-label mt-2">Shirt Number </label>
                <Field
                  type="number"
                  name="shirtNumber"
                  placeholder="enter shirt number"
                  className={
                    errors.shirtNumber && touched.shirtNumber
                      ? "form-control mt-2 input-error"
                      : "form-control mt-2"
                  }
                />
                <ErrorMessage
                  name="shirtNumber"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-group mt-3">
                <button
                  className={
                    !(dirty && isValid)
                      ? "btn btn-primary"
                      : "btn btn-primary  disabled-btn"
                  }
                  disabled={dirty && !isValid}
                >
                  Add player
                </button>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default FormAddPlayer;
