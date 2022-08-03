import {PythonShell} from 'python-shell';

console.log('bin schon mal hier')

PythonShell.run('start_codecept.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});