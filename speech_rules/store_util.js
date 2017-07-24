// Copyright 2013 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview General utility functions for rule stores.
 * @author sorge@google.com (Volker Sorge)
 */

goog.provide('cvox.StoreUtil');


/**
 * Count list of nodes and concatenate this with the context string.
 * Returns a closure with a local state.
 * @param {Array.<Node>} nodes A node array.
 * @param {?string} context A context string.
 * @return {function(): string} A function returning a string.
 */
cvox.StoreUtil.nodeCounter = function(nodes, context) {
  // Local state.
  var localLength = nodes.length;
  var localCounter = 0;
  var localContext = context;
  if (!context) {
    localContext = '';
  }
  return function() {
    if (localCounter < localLength) {
      localCounter += 1;
    }
    return localContext + ' ' + localCounter;
  };
};
