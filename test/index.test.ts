import { execute, files, FileScan, Selection, Projection } from '../src/index';


describe('execute', () => {
  it('handles simple FILESCAN', () => {
    expect(execute(new FileScan(["movies"], files, null))).toEqual([
      ["1", "The 400 Blows"],
      ["5000", "La Haine"],
      ["7500", "The Godfather"],
      ["10000", "The Godfather: Part II"]
    ]);
  });

  it('handles simple FILESCAN and SELECTION', () => {
    const fileScan = new FileScan(["movies"], files, null)
    expect(execute(new Selection(["movie_id", "EQUALS", "5000"], fileScan))).toEqual([
      ["5000", "La Haine"],
    ]);
  });

  it('handles simple FILESCAN and SELECTION and PROJECTION', () => {
    const fileScan = new FileScan(["movies"], files, null)
    const selection = new Selection(["movie_id", "EQUALS", "5000"], fileScan)
    expect(execute(new Projection(["movie_id"], selection))).toEqual([
      ["5000"],
    ]);
  });
});
