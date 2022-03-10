import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PlayerSchema } from "../../../../helpers/formShemas";
import {
  OnFormButtonPressed,
  clearForm,
} from "../../../../services/admin/general.service";
import { GetPlayerWithId } from "../../../../services/admin/player.service";
import { connect } from "react-redux";
import { useAlert } from "react-alert";

const FormEditPlayer = (props) => {
  let alert = useAlert();
  const [loaded, setIsLoaded] = useState(false);
  let params = useParams();
  useEffect(() => {
    props.GetPlayerWithId(params.id, setIsLoaded);
  }, []);

  return (
    <>
      {!loaded && <div>Loading</div>}
      {loaded && (
        <Formik
          //enableReinitialize
          initialErrors
          initialValues={{
            id: props._id,
            firstName: props.firstName,
            lastName: props.lastName,
            age: props.age,
            shirtNumber: props.shirtNumber,
          }}
          validationSchema={PlayerSchema}
          onSubmit={(values) => {
            console.log(values);
            OnFormButtonPressed(values, "EDIT_PLAYER", alert);
            props.clearForm("CLEAR_FORM_PLAYER");
          }}
        >
          {({ touched, errors, dirty, isValid }) => {
            return (
              <>
                <h1>Edit player</h1>
                <Form>
                  <div className="form-group">
                    <label className="control-label mt-2">First name</label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="enter first name"
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
                    <ErrorMessage
                      name="age"
                      component="span"
                      className="error"
                    />
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
                      type="submit"
                      className={
                        !(dirty && !isValid)
                          ? "btn btn-success"
                          : "btn btn-success  disabled-btn"
                      }
                      disabled={dirty && !isValid}
                    >
                      Edit player
                    </button>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { _id, firstName, lastName, age, shirtNumber } =
    state.PlayerReducer.player;
  return { _id, firstName, lastName, age, shirtNumber };
};

export default connect(mapStateToProps, { GetPlayerWithId, clearForm })(
  FormEditPlayer
);
