import { synthSnapshot } from 'projen/lib/util/synth';
import { PythonPackage } from '../../../src/projects/python';

describe('Python Package', () => {
  it('synthesizes', () => {
    const project = new PythonPackage({
      authorEmail: 'test@example.com',
      authorName: 'test',
      codeOwners: ['test'],
      moduleName: 'test',
      name: 'test',
      version: '0.1.0',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output['README.md']).toBeDefined();
    expect(output['.github/pull_request_template.md']).toBeDefined();
    expect(output).toMatchSnapshot();
  });
});