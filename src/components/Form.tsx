import React from 'react';

type FormProps = {
  addWatch: (name: string, timezone: number) => void;
};

function Form({ addWatch }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    addWatch(data.name.toString(), +data.timezone);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Название</label>
        <input className="form-input" type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Временная зона</label>
        <input className="form-input" type="number" id="timezone" name="timezone" />
      </div>
      <div className="form-btn">
        <button className="btn-submit" type="submit">Добавить</button>
      </div>
    </form>
  );
}

export default Form;
