import React, { useState } from "react";

const DynamicForm = () => {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  const submit = (e) => {
    e.preventDefault();

    console.log({ inputFields });
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;

    setInputFields(data);
  };

  const addFields = () => {
    setInputFields([...inputFields, { name: "", age: "" }]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <div
      className="card"
      style={{ width: "600px", padding: "10px", margin: "20px auto" }}
    >
      <h3>Dynamic Form</h3>
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div className="row mt-2" key={index}>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={input.name}
                  onChange={(event) => handleFormChange(index, event)}
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={input.age}
                  onChange={(event) => handleFormChange(index, event)}
                />
              </div>
              <div className="col">
                <button
                  className="btn btn-danger"
                  onClick={() => removeFields(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        <button
          type="button"
          className="btn btn-success mt-2"
          onClick={addFields}
        >
          Add More...
        </button>
        <button className="btn btn-primary mt-2 margin-left-5" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
