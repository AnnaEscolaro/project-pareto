import { useEffect, useState } from 'react';
import loading from './Loading';
import { getUser } from '../services/userAPI';

function Header() {
  const [userName, setUserName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getUserName = async () => {
    setIsLoading(true);
    const data = await getUser();
    setUserName(data.name);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserName();
  }, []);

  if (isLoading) {
    return loading();
  }

  return (
    <header data-testid="header-component">
      <h1 data-testid="header-user-name">{userName}</h1>
    </header>
  );
}

export default Header;
