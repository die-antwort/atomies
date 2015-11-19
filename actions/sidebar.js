const toggleVisbility = () => {
  return {
    type: 'SIDEBAR_TOGGLE',
  };
};

const setActive = (avatar) => {
  return {
    type: 'SIDEBAR_SET_ACTIVE',
    payload: {
      avatar,
    },
  };
};

module.exports = {
  toggleVisbility,
  setActive,
};
