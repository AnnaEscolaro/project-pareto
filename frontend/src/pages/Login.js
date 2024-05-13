import { useState, useEffect } from 'react';
import React from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Login() {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState(null);
  const [ album, setAlbum ] = useState([]);
  const [ prompt, setPrompt ] = useState('');
  const [ imageUrl, setImageUrl ] = useState('');
  
  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  const logOut = () => {
      googleLogout();
      setProfile(null);
  };

  useEffect(() => {
    if (!profile) {
      return;
    }
    const userId = profile.email;
    console.log(profile);

    axios.get('http://localhost:3000/images', { data: { userId } })
      .then(response => {
        setAlbum(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, [ profile ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/images/generate-image', { prompt })
      .then(response => {
        setImageUrl(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
      <div>
            <form onSubmit={handleSubmit}>
              <label>
                Prompt:
                <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} />
              </label>
              <button type="submit">Generate Image</button>
            </form>
          {profile ? (
              <div>
                  <img src={profile.picture} alt="user" />
                  <h3>User Logged in</h3>
                  <p>Name: {profile.name}</p>
                  <p>Email Address: {profile.email}</p>
                  <button onClick={logOut}>Log out</button>
                  {album.map((image, index) => (
                    <div key={index}>
                          <img src={image.prompt} alt={image.prompt} />
                          <p>{image.url}</p>
                    </div>
                  ))}
                  { imageUrl && <img src={imageUrl} alt="generated" /> }
              </div>
          ) : (
              <button onClick={login}>Sign in with Google </button>
          )}
      </div>
  );
};

export default Login;
