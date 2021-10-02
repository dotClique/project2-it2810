import { BarDataItem } from '../helpers/types';
import { avgTimePerIssueLabel } from './../pages/TimePerIssueLabelPage/utils';
import { ISSUE_1, NON_CLOSED_ISSUES, NO_DATA, USED_LABELS } from './dummydata';

describe('Testing that the avgTimePerIssueLabel works as expected', () => {
  test('Test that for an empty issuelist, an empty list is returned', () => {
    const result = avgTimePerIssueLabel([], USED_LABELS);
    expect(result).toEqual(NO_DATA);
  });

  test('Test that for a single issue, the time used for that issue is returned', () => {
    const result = avgTimePerIssueLabel([ISSUE_1], USED_LABELS);
    if (ISSUE_1.closed_at == null) return fail();
    const expected_ms =
      new Date(ISSUE_1.closed_at).getTime() - new Date(ISSUE_1.created_at).getTime();
    const expected_h = expected_ms / (60 * 60 * 1000);
    const expected: BarDataItem[] = NO_DATA.map((barItem) => ({
      ...barItem,
      barValue: expected_h,
    }));
    expect(result).toEqual(expected);
  });

  test('Test that for a list of an issue with no closed issues, an empty list is returned', () => {
    const result = avgTimePerIssueLabel(NON_CLOSED_ISSUES, USED_LABELS);
    expect(result).toEqual(NO_DATA);
  });
});
