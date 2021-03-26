// * 로그인 로그아웃을 담당

import firebase from 'firebase';

class AuthService {
  // * 프로바이더의 이름을 받아와서 처리
  login(providerName) {
    // ! 깃헙, 페이스북 각각 들어오면 각각의 프로바이더가 들어가게 됨.
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
