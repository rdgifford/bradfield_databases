import { execute, PlanNode } from '../src';


describe('execute', () => {
  it('handles simple FILESCAN', () => {
    const queryPlan = new PlanNode("FILESCAN", ["movies"], null)
    expect(execute(queryPlan)).toEqual([
      ["1", "The 400 Blows"],
      ["5000", "La Haine"],
      ["7500", "The Godfather"],
      ["10000", "The Godfather: Part II"]
    ]);
  });

  it.only('handles a nested plan node (FILESCAN and SELECT)', () => {
    const fileScanNode = new PlanNode("FILESCAN", ["movies"], null)
    const queryPlan = new PlanNode("SELECTION", ["id", "EQUALS", "5000"], fileScanNode)
    expect(execute(queryPlan)).toEqual([
      ["5000", "La Haine"],
    ]);
  });
});
