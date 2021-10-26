import { Auth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

async function githubSignIn(auth: Auth): Promise<Login.Response> {
  const credential = new GithubAuthProvider();
  const res: Login.Response = await signInWithPopup(auth, credential)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.idToken;

    return {
      status: "success",
      token
    } as Login.SuccessResponse;
  }).catch((error) => {
    const code = error.code;
    const message = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    return {
      status: "failure",
      error: {
        code,
        message,
        email,
        credential
      }
    } as Login.FailureResponse;
  });

  return res;
};

async function googleSignIn(auth: Auth): Promise<Login.Response> {
  const credential = new GoogleAuthProvider();

  const res: Login.Response = await signInWithPopup(auth, credential)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.idToken;

    return {
      status: "success",
      token,
    } as Login.SuccessResponse;
  }).catch((error) => {
    const code = error.code;
    const message = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    return {
      status: "failure",
      error: {
        code,
        message,
        email,
        credential
      }
    } as Login.FailureResponse;
  });

  return res;
};

export { githubSignIn, googleSignIn };