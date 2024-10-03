import { FC, useEffect, useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { usePrivyId } from '@/utils';

const Auth: FC = () => {
  const { authenticated, getAccessToken, login, logout, ready } = usePrivy();
  const { privyId, setPrivyId } = usePrivyId();
  const [accessToken, setAccessToken] = useState<string>();

  const handleLogin = () => {
    login();
  };

  const handleRemove = () => {
    setPrivyId('');
  };

  const handleLoggedIn = async () => {
    const AT = await getAccessToken();
    if (!AT) {
      return;
    }
    setAccessToken(AT);
  };

  const handleLogOut = () => {
    logout();
  };

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (!authenticated) {
      return;
    }

    handleLoggedIn();
  }, [authenticated, ready]);

  return (
    <div className="page">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>Using Privy ID:</div>
        <code className="code">{privyId}</code>
        <button className="error" onClick={handleRemove}>
          Remove
        </button>
      </div>
      <div
        style={{
          height: 200,
          maxWidth: 800,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <button
          className={['default', authenticated ? 'error' : ''].join(' ')}
          disabled={!ready}
          onClick={authenticated ? handleLogOut : handleLogin}
        >
          {ready ? authenticated ? 'Logout' : 'Login' : 'Loading...'}
        </button>
        {authenticated && accessToken && (
          <div>
            <div>Access Token:</div>
            <div className="code" style={{ fontFamily: 'monospace', whiteSpace: 'wrap', wordBreak: 'break-all' }}>
              {accessToken}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
