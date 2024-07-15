import { synthSnapshot } from 'projen/lib/util/synth';
import { JsiiProject } from '../../src/jsii';
import { NpmPackage } from '../../src/npm';

describe('CodeOwners', () => {
  it('matches the snapshot with a CODEOWERS file', () => {
    const project = new JsiiProject({
      author: 'Test Person',
      authorAddress: 'test@example.com',
      codeOwners: ['test-team'],
      name: 'test',
      repositoryUrl: 'https://github.com/example/example.git',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toContain('* @unibuddy/test-team');
  });

  it('matches the snapshot and includes CODEOWNERS in the npmignore file', () => {
    const project = new NpmPackage({
      codeOwners: ['test-team'],
      name: 'test',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toMatchSnapshot();
  });
});
