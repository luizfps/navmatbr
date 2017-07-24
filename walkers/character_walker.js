// Copyright 2012 Google Inc.
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
 * @fileoverview A class for walking one character at a time.
 * @author stoarca@google.com (Sergiu Toarca)
 */


goog.provide('cvox.CharacterWalker');

goog.require('cvox.AbstractSelectionWalker');
goog.require('cvox.TraverseContent');

/**
 * @constructor
 * @extends {cvox.AbstractSelectionWalker}
 */
cvox.CharacterWalker = function() {
  cvox.AbstractSelectionWalker.call(this);
  this.grain = cvox.TraverseContent.kCharacter;
};
goog.inherits(cvox.CharacterWalker, cvox.AbstractSelectionWalker);

/**
 * @override
 */
cvox.CharacterWalker.prototype.getDescription = function(prevSel, sel) {
  var desc = goog.base(this, 'getDescription', prevSel, sel);
  desc.forEach(function(item) {
    if (!item.personality) {
      item.personality = {};
    }
    item.personality['phoneticCharacters'] = true;
  });
  return desc;
};

/**
 * @override
 */
cvox.CharacterWalker.prototype.getGranularityMsg = function() {
  return cvox.ChromeVox.msgs.getMsg('character_granularity');
};
