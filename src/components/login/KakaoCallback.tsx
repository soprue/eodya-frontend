import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../common/spinner/Spinner';

function KakaoCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const grantType = 'authorization_code';
    const REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
    const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then((res) => {
        const { access_token } = res.data;
        console.log('res', res);
        console.log('access_token', access_token);

        return axios.get(`https://kapi.kakao.com/v2/user/me`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
      })
      .then((res) => {
        console.log('사용자 정보', res);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        navigate('/login');
      });
  }, []);

  return <Spinner />;
}

export default KakaoCallback;
