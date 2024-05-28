import { InputWithLabel } from '@/components';
import { useEffect, useState } from 'react';
import * as S from '../Login/LoginStyle';
import * as G from '@/styles';
import MainColorBtn from '@/components/Button/MainColorBtn/MainColorBtn';
import { UserRound, Lock } from 'lucide-react';
import { emailDuplicateCheck, login, signup } from '@/apis/accounts';
import { useNavigate } from 'react-router';
export default function Register() {
  const navigate = useNavigate();

  const [uid, setUid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [idError, setIdError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const [isIdCheck, setIsIdCheck] = useState(false); // 중복 검사를 했는지 안했는지
  const [isEmailCheck, setEmailCheck] = useState(false); // 중복 검사를 했는지 안했는지
  const [isIdAvailable, setIsIdAvailable] = useState(false); // 아이디 사용 가능한지 아닌지
  const [isEmailAvailable, setEmailAvailable] = useState(false); // 아이디 사용 가능한지 아닌지
  const [isPwAvailable, setPwAvailable] = useState(false); // pw 사용 가능한지 아닌지
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    if (isEmailCheck && isEmailAvailable && isPwAvailable && isIdAvailable) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [isEmailCheck, isEmailAvailable, isPwAvailable, isIdAvailable]);
  const onChangeIdHandler = (e: { target: { value: any } }) => {
    const idValue = e.target.value;
    setUid(idValue);
    idCheckHandler(idValue);
  };
  const onChangeEmailHandler = (e: { target: { value: any } }) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    emailCheckHandler(emailValue);
  };

  const onChangePasswordHandler = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    if (id === 'pw') {
      setPassword(value);
      passwordCheckHandler(value, confirm);
    } else {
      setConfirm(value);
      passwordCheckHandler(password, value);
    }
  };

  const emailCheckHandler = async (email: string) => {
    const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

    if (email === '') {
      setEmailError('이메일을 입력해주세요.');
      setEmailAvailable(false);
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('이메일 형식에 맞게 입력해주세요');
      setEmailAvailable(false);
      return false;
    }
    try {
      //   setEmailError('사용 가능한 이메일 입니다.');
      //   setEmailCheck(true);
      //   setEmailAvailable(true);
      const responseData = await emailDuplicateCheck(email);
      console.log(responseData, 'res');
      if (!responseData.data) {
        setEmailError('사용 가능한 이메일입니다.');
        setEmailCheck(true);
        setEmailAvailable(true);
        console.log('OK');
        return true;
      } else {
        setEmailError('이미 사용중인 이메일입니다.');
        setEmailAvailable(false);
        console.log('Occpi');
        return false;
      }
    } catch (error) {
      alert('서버 오류입니다. 관리자에게 문의하세요.');
      console.error(error);
      return false;
    }
  };

  const idCheckHandler = (id: string) => {
    // const idRegex = /^[a-z\d]{5,10}$/;
    const idRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{1,8}$/;

    if (id === '') {
      setIdError('닉네임을 입력해주세요.');
      setIsIdAvailable(false);
      return false;
    } else if (!idRegex.test(id)) {
      setIdError('닉네임은 1~8자의 영어,한글,숫자만 입력 가능합니다.');
      setIsIdAvailable(false);
      return false;
    } else {
      setIdError('');
      setIsIdAvailable(true);
    }
    // try {
    //   //   setIdError('사용 가능한 닉네임입니다.');
    //   //   setIsIdCheck(true);
    //   //   setIsIdAvailable(true);
    //   const responseData = await idDuplicateCheck(id);
    //   console.log(responseData, 'respnonse');
    //   if (!responseData.data) {
    //     setIdError('사용 가능한 아이디입니다.');
    //     setIsIdCheck(true);
    //     setIsIdAvailable(true);
    //     return true;
    //   } else {
    //     setIdError('이미 사용중인 아이디입니다.');
    //     setIsIdAvailable(false);
    //     return false;
    //   }
    // } catch (error) {
    //   alert('서버 오류입니다. 관리자에게 문의하세요.');
    //   console.error(error);
    //   return false;
    // }
  };

  const passwordCheckHandler = (password: string, confirm: string) => {
    // const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

    if (password === '') {
      setPasswordError('비밀번호를 입력해주세요.');
      setPwAvailable(false);
      return false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        '비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다. 각각 최소 한개 이상 포함해야 합니다.',
      );
      setPwAvailable(false);
      return false;
    } else if (confirm !== password) {
      setPasswordError('');
      setConfirmError('비밀번호가 일치하지 않습니다.');
      setPwAvailable(false);
      return false;
    } else {
      setPasswordError('');
      setConfirmError('');
      setPwAvailable(true);
      return true;
    }
  };

  //파라미터 삭제할것
  const signupHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const emailCheckresult = await emailCheckHandler(email);
    if (emailCheckresult) setEmailError('');
    else return;
    if (!isEmailCheck || !isEmailAvailable) {
      alert('아이디 중복 검사를 해주세요.');
      return;
    }

    const passwordCheckResult = passwordCheckHandler(password, confirm);
    if (passwordCheckResult) {
      setPasswordError('');
      setConfirmError('');
    } else return;

    try {
      const responseData = await signup(email, uid, confirm);
      if (responseData) {
        // localStorage.setItem('loginId', uid);

        try {
          console.log(email, password);
          const res = await login(email, password);
          if (res) {
            console.log(res.data.apiToken);
            localStorage.setItem('token', res.data.apiToken);
            navigate('/projects');
          } else {
            console.log('ERROR');
          }
        } catch (error) {
          alert('로그인에 실패하였습니다. 다시 시도해주세요.');
        }
      } else {
        alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
    }
  };

  const loginHandler = () => {
    navigate('/login');
  };

  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.LogoWrapper>
          <S.Logo></S.Logo>
          <S.SloganWrapper>
            <S.Slogan>하나의 레시피에서 출발하는 프로젝트의 완성</S.Slogan>로그인후 서비스를 이용해보세요
          </S.SloganWrapper>
        </S.LogoWrapper>
        <S.InputContentWrapper>
          <S.InputWrapper labelFor="name">
            <UserRound size={18} color={G.PALETTE.LIGHT_BLACK}></UserRound>
            <InputWithLabel.Input id="name" placeholder="이름" onChange={onChangeIdHandler} value={uid} type="text" />
          </S.InputWrapper>
          {idError && <small style={{ color: 'red' }}>{idError}</small>}
          <S.InputWrapper labelFor="email">
            <UserRound size={18} color={G.PALETTE.LIGHT_BLACK}></UserRound>
            <InputWithLabel.Input
              id="email"
              placeholder="이메일"
              onChange={onChangeEmailHandler}
              value={email}
              type="email"
            />
          </S.InputWrapper>
          {emailError && <small style={{ color: 'red' }}>{emailError}</small>}
          <S.InputWrapper labelFor="pw">
            <Lock size={18} color={G.PALETTE.LIGHT_BLACK}></Lock>
            <InputWithLabel.Input
              id="pw"
              placeholder="비밀번호"
              onChange={onChangePasswordHandler}
              value={password}
              type="password"
            />
          </S.InputWrapper>
          {passwordError && <small style={{ color: 'red' }}>{passwordError}</small>}
          <S.InputWrapper labelFor="pwcheck">
            <Lock size={18} color={G.PALETTE.LIGHT_BLACK}></Lock>
            <InputWithLabel.Input
              id="pwcheck"
              placeholder="비밀번호 확인"
              onChange={onChangePasswordHandler}
              value={confirm}
              type="password"
            />
          </S.InputWrapper>
          {confirmError && <small style={{ color: 'red' }}>{confirmError}</small>}
          {/* <S.Register>회원가입</S.Register> */}
        </S.InputContentWrapper>
        {/* <button disabled={false}>fdfd</button> */}
        <S.BtnWrapper onClick={signupHandler}>
          <MainColorBtn disabled={!allChecked} bgc={allChecked}>
            회원가입
          </MainColorBtn>
        </S.BtnWrapper>
        {/* <S.BtnWrapper onClick={loginHandler}>
          <MainColorBtn disabled={false} bgc={true}>
            로그인
          </MainColorBtn>
        </S.BtnWrapper> */}
      </S.CardWrapper>
    </S.Wrapper>
  );
}
