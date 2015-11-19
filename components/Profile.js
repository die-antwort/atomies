'use babel';

import React from 'react';

const Profile = ({avatar}) => {
  return (
    <img src={avatar}
         style={{height: 22}} />
  );
};

export default Profile;
