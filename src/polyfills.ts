/**
 * Created by lejewk on 2017-04-18.
 */
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');   // 항상 마지막에 로드해야된다.

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development and test
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}