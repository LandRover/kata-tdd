import 'babel-polyfill';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiArrays from 'chai-arrays';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';


process.on('unhandledRejection', err => {
  console.error(err, err.stack); /* eslint no-console: 0 */
});

chai.should();

chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(chaiArrays);


global.sinon = sinon;
global.chaiAsPromised = chaiAsPromised;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;