
export function navigateTo(scene, params) {

  params = params || {};

  return { type: `NAVIGATE_${ scene }`, ...params };

}
