/**
 * Created by imamudinnaseem on 6/12/17.
 */

import sw from '../index'

var cacheFiles = ['style.css']
var strategy = 'cacheFirst'

sw({cacheName: 'v1', cacheFiles, strategy});
