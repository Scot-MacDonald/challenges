export default function Form() {
  return (
    <>
      <div className="title">NEW ENTRY</div>
      <form className="form">
        <label name="name">Motto </label>
        <input type="text" name="name" />
        <label name="Write">Notes</label>
        <textarea name="Write">Write some shit</textarea>
      </form>
      <input className="e-primary" type="submit" value="Submit" />
    </>
  );
}
