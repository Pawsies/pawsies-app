import getTheme from './components';
import platform from './variables/platform';

export default function () {
  return getTheme(platform);
}