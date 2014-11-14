'use strict';

var braintree = require('braintree-web');

function _initialize() {
  var p = document.createElement('p');
  p.innerHTML = 'Your Braintree Version is ' + braintree.VERSION;
  document.body.appendChild(p);
};

_initialize();
