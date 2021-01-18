import './Login.scss';

export default function Login() {
  return (
    <div className="Login">
      <img src="./progreser.png" alt="logo-img" className="logo" />
      <form className="form">
        <label className="id">
          아이디 <input type="text" placeholder="이메일을 입력해주세요" z />{' '}
        </label>
        <label className="pw">
          비밀번호 <input type="password" placeholder="비밀번호를 입력해주세요" />{' '}
        </label>
        <input type="submit" value="로그인" className="submitBtn" />
      </form>
      <div className="itemBox">
        <button>회원가입 하기</button>
        <button>비밀번호 찾기</button>
      </div>
    </div>
  );
}
