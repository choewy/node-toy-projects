import { useState } from 'react';
import { signupAction } from '../actions/user.actions';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const valuesChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setValues({ ...values, [name]: value });
  };

  const valuesSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = await signupAction(values);
    if (!ok) return alert(error);
    window.location.pathname = '/';
  };

  return (
    <div className="signup">
      <form onSubmit={valuesSubmit}>
        <h1>회원가입</h1>
        <input
          type="text"
          name="name"
          placeholder="이름"
          autoComplete="off"
          value={values.name}
          onChange={valuesChange}
        />
        <input
          type="text"
          name="email"
          placeholder="이메일"
          autoComplete="off"
          value={values.email}
          onChange={valuesChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          autoComplete="off"
          value={values.password}
          onChange={valuesChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          autoComplete="off"
          value={values.confirmPassword}
          onChange={valuesChange}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
