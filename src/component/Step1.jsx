import Button from "./Button";

function Step1({ formData, handleChange, nextStep }) {
  return (
    <>
      <form>
        <div className="form-row">
          <div className="part">
            <label>نام:</label>
            <input
              className="input"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="نام"
            ></input>
          </div>
          <div className="part">
            <label> نام خانوادگی:</label>
            <input
              value={formData.fname}
              onChange={handleChange}
              type="text"
              placeholder="نام خانوادگی"
            ></input>
          </div>
          <div className="part">
            <label>شماره تماس :</label>
            <input
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="شماره تماس"
            ></input>
          </div>
          <div className="part">
            <label>محل تولد:</label>
            <input
              value={formData.place}
              onChange={handleChange}
              type="text"
              placeholder="محل تولد"
            ></input>
          </div>
          <div className="area part">
            <label>درباره من :</label>
            <textarea value={formData.moreinfo} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row form-row-2">
          <Button name="ثبت و ادامه" onClick={nextStep} />
        </div>
      </form>
    </>
  );
}

export default Step1;
