import { Link } from '@material-ui/core';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing that clicking the different menu buttons directs to the correct url', () => {
  let wrapper: Enzyme.ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test('Testing mounting the App component and that clicking the first link gived the home path', () => {
    wrapper.find(Link).at(0).simulate('click');
    expect(window.location.pathname).toEqual('/');
  });
});
