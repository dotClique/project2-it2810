import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ChartBar from '../components/ChartBar';
import ChartPie from '../components/ChartPie';
import PageContainer from '../components/PageContainer';
import Popup from '../components/Popup';
import CommitsPerBranchPage from '../pages/CommitsPerBranch/index';
import FeatsVsFixesPage from '../pages/FeatsVsFixesPage/index';
import Home from '../pages/Home';
import TimePerIssueLabelPage from '../pages/TimePerIssueLabelPage/index';
import { CHART_BAR_DATA, CHART_PIE_DATA } from './dummydata';

Enzyme.configure({ adapter: new Adapter() });

describe('Snapshot tests', () => {
  // Snapshotting some components that many other components rely on and therefore should not be changed.
  test('Snapshotting ChartBar', () => {
    const result = toJson(shallow(<ChartBar data={CHART_BAR_DATA} title="Some title" />));
    expect(result).toMatchSnapshot();
  });

  test('Snapshotting ChartPie', () => {
    const result = toJson(shallow(<ChartPie data={CHART_PIE_DATA} title="Some title" />));
    expect(result).toMatchSnapshot();
  });

  test('Snapshotting Popup', () => {
    const result = toJson(shallow(<Popup open={true} title="Popup" onClose={() => {}} />));
    expect(result).toMatchSnapshot();
  });

  test('Snapshotting PageContainer', () => {
    const result = toJson(
      shallow(
        <PageContainer title="Some title">
          <div>Hello world</div>
        </PageContainer>,
      ),
    );
    expect(result).toMatchSnapshot();
  });

  // Snapshotting the pages that are not indended to be changed
  test('Snapshotting FeatVsFixesPage', () => {
    const result = toJson(shallow(<FeatsVsFixesPage />));
    expect(result).toMatchSnapshot();
  });

  test('Snapshotting CommitsPerBranch page', () => {
    const result = toJson(shallow(<CommitsPerBranchPage />));
    expect(result).toMatchSnapshot();
  });

  test('Snapshotting Home page', () => {
    const result = toJson(shallow(<Home />));
    expect(result).toMatchSnapshot();
  });

  test('Snapshotting TimePerIssueLabelPage', () => {
    const result = toJson(shallow(<TimePerIssueLabelPage />));
    expect(result).toMatchSnapshot();
  });
});
