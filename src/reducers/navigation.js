
const initialState = {
  scene: null,
  sceneParams: null,
  sceneBack: null
};

export default (state = initialState, action) => {

  switch (action.type) {

    case 'NAVIGATE_HOME':
      return {
        scene: 'HOME',
        sceneParams: null,
        sceneBack: null
      };

    default:
      return state;

  }

}