!function(e,t){for(var r in t)e[r]=t[r]}(this,function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"CHECK_BOX",function(){return u}),r.d(n,"DROP_DOWN",function(){return f}),r.d(n,"RADIO_BUTTONS",function(){return S}),r.d(n,"NUMERIC_TEXT_BOX",function(){return p.a}),r.d(n,"STRING_TEXT_BOX",function(){return y}),r.d(n,"TEXT_BOX",function(){});var i=r(1);function a(e){const t={};return function e(t,r,n){Object.keys(t).forEach(function(i){const a=[r,i].filter(Boolean).join("."),o=t[i];"object"!=typeof o||null===o||Array.isArray(o)?n[a]=t[i]:e(o,a,n)})}(e,null,t),t}const o=20,c=10;function u({width:e,y:t,label:r,value:n}){const i=NSButton.alloc().initWithFrame(NSMakeRect(0,t,e,o));return i.setButtonType(NSSwitchButton),i.setBezelStyle(0),i.setState(n?NSOnState:NSOffState),i.setTitle(r),{view:i,height:o+c,retrieveValue:function(){return"1"==i.stringValue()}}}const l=20,s=15;function f({width:e,y:t,value:r,possibleValues:n}){const i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,t,e,l));n.forEach(function(e){i.addItemWithTitle(e)});const a=void 0!==r?n.indexOf(r):0;return i.selectItemAtIndex(a),{view:i,height:l+s,retrieveValue:function(){const e=i.indexOfSelectedItem();return n[e]}}}const d=20,m=10;function S({width:e,y:t,value:r,possibleValues:n}){const i=NSButtonCell.alloc().init();i.setButtonType(NSRadioButton);const a=n.length,o=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,t,e,d),NSRadioModeMatrix,i,1,a);o.setCellSize(CGSizeMake(Math.floor(e/a),d)),o.cells().forEach(function(e,t){e.setTitle(n[t])});const c=void 0!==r?n.indexOf(r):0;return o.selectCellAtRow_column(0,c),{view:o,height:d+m,retrieveValue:function(){const e=o.cells().indexOfObject(o.selectedCell());return n[e]}}}var p=r(4),h=r(3);const y=Object(h.a)();var g=r(5),b=r.n(g);function v(e,t){b.a.message(t&&t.symbol?`${t.symbol} ${e}`:e)}function N(e){v(e,{symbol:"✔"})}function F(e){v(e,{symbol:"✘"})}function _(){const e=preval.require("./get-default-settings");if(!e)return;const t=a(e);Object.keys(t).forEach(function(e){Object(i.setSettingForKey)(e,void 0),Object(i.setSessionVariable)(e,void 0)}),v("Reset settings")}x(i.setSettingForKey),x(i.setSessionVariable);function x(e){return function(t,r){if(!t)return;const n=a(t);Object.keys(n).forEach(function(t){const r=n[t];null!=r&&e(t,r)});const i=r&&r.successMessage;i&&v(i)}}r(6),r(7);r(2);var P=r(8);function M(){const e=NSApplication.sharedApplication().orderedDocuments();return Object(P.fromNative)(e[0])}function O(){return M().selectedPage.layers}function w(){return O().filter(function(e){return"Artboard"===e.type})}function A(e,t){e.forEach(function(e){t(e);const r=e.type;"Artboard"!==r&&"Group"!==r||A(e.layers,t)})}function E(e){return function e(t,r){const n=t.parent;if("Artboard"===n.type)return r;const i={x:r.x+n.frame.x,y:r.y+n.frame.y};return e(n,i)}(e,{x:e.frame.x,y:e.frame.y})}r.d(t,"d",function(){return _}),r.d(t,"b",function(){return E}),r.d(t,"a",function(){return w}),r.d(t,"c",function(){return A}),r.d(t,"f",function(){return N}),r.d(t,"e",function(){return F})},function(e,t){e.exports=require("sketch/settings")},function(e,t){e.exports=require("sketch/dom")},function(e,t,r){"use strict";r.d(t,"a",function(){return a});const n=20,i=15;function a(e){return function({width:t,y:r,value:a,placeholder:o}){const c=NSTextField.alloc().initWithFrame(NSMakeRect(0,r,t,n)),u=null==a?"":`${a}`;return c.setStringValue(u),o&&c.setPlaceholderString(o),{view:c,height:n+i,retrieveValue:function(){const t=`${c.stringValue()}`;return e?e(t):t}}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(e,t){e.exports=require("sketch/ui")},function(e,t){e.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},function(e,t,r){"use strict";const n=async(e,t)=>{let r=0;for(const n of e)await t(await n,r++);return e};e.exports=n,e.exports.default=n},function(e,t){e.exports=require("sketch")},function(e,t,r){var n=r(12).Buffer,i={EPERM:{message:"operation not permitted",errno:-1},ENOENT:{message:"no such file or directory",errno:-2},EACCES:{message:"permission denied",errno:-13},ENOTDIR:{message:"not a directory",errno:-20},EISDIR:{message:"illegal operation on a directory",errno:-21}};function a(e,t){var r=new Error(e+": "+i[e].message+", "+(t.syscall||"")+(t.path?" '"+t.path+"'":""));return Object.keys(t).forEach(function(e){r[e]=t[e]}),r.code=e,r.errno=i[e].errno,r}function o(t,r,n,i){var o=NSFileManager.defaultManager();if(!o.fileExistsAtPath(t))return a("ENOENT",{path:t,syscall:i||"open"});if(!o.isReadableFileAtPath(t))return a("EACCES",{path:t,syscall:i||"open"});if(void 0!==r){var c=e.exports.lstatSync(t).isDirectory();if(c&&!r)return a("EISDIR",{path:t,syscall:i||"read"});if(!c&&r)return a("ENOTDIR",{path:t,syscall:i||"read"})}return new Error(n||"Unknown error while manipulating "+t)}function c(e,t){return e&&e.encoding?String(e.encoding):e?String(e):t}e.exports.constants={F_OK:0,R_OK:4,W_OK:2,X_OK:1},e.exports.accessSync=function(t,r){r|=0;var n=NSFileManager.defaultManager();switch(r){case 0:canAccess=e.exports.existsSync(t);break;case 1:canAccess=Boolean(Number(n.isExecutableFileAtPath(t)));break;case 2:canAccess=Boolean(Number(n.isWritableFileAtPath(t)));break;case 3:canAccess=Boolean(Number(n.isExecutableFileAtPath(t)))&&Boolean(Number(n.isWritableFileAtPath(t)));break;case 4:canAccess=Boolean(Number(n.isReadableFileAtPath(t)));break;case 5:canAccess=Boolean(Number(n.isReadableFileAtPath(t)))&&Boolean(Number(n.isExecutableFileAtPath(t)));break;case 6:canAccess=Boolean(Number(n.isReadableFileAtPath(t)))&&Boolean(Number(n.isWritableFileAtPath(t)));break;case 7:canAccess=Boolean(Number(n.isReadableFileAtPath(t)))&&Boolean(Number(n.isWritableFileAtPath(t)))&&Boolean(Number(n.isExecutableFileAtPath(t)))}if(!canAccess)throw new Error("Can't access "+String(t))},e.exports.appendFileSync=function(t,r,i){if(!e.exports.existsSync(t))return e.exports.writeFileSync(t,r,i);var a=NSFileHandle.fileHandleForWritingAtPath(t);a.seekToEndOfFile();var o=c(i,"utf8"),u=n.from(r,"NSData"===o||"buffer"===o?void 0:o).toNSData();a.writeData(u)},e.exports.chmodSync=function(e,t){var r=MOPointer.alloc().init();if(NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFilePosixPermissions:t},e,r),null!==r.value())throw o(e,void 0,r.value())},e.exports.copyFileSync=function(e,t,r){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().copyItemAtPath_toPath_error(e,t,n),null!==n.value())throw o(e,!1,n.value())},e.exports.existsSync=function(e){var t=NSFileManager.defaultManager();return Boolean(Number(t.fileExistsAtPath(e)))},e.exports.linkSync=function(e,t){var r=MOPointer.alloc().init();if(NSFileManager.defaultManager().linkItemAtPath_toPath_error(e,t,r),null!==r.value())throw o(e,void 0,r.value())},e.exports.mkdirSync=function(e,t){var r=511,n=!1;t&&t.mode&&(r=t.mode),t&&t.recursive&&(n=t.recursive),"number"==typeof t&&(r=t);var i=MOPointer.alloc().init();if(NSFileManager.defaultManager().createDirectoryAtPath_withIntermediateDirectories_attributes_error(e,n,{NSFilePosixPermissions:r},i),null!==i.value())throw new Error(i.value())},e.exports.mkdtempSync=function(t){var r=t+function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<6;r++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}();return e.exports.mkdirSync(r),r},e.exports.readdirSync=function(e){for(var t=NSFileManager.defaultManager().subpathsAtPath(e),r=[],n=0;n<t.length;n++)r.push(String(t[n]));return r},e.exports.readFileSync=function(e,t){var r=c(t,"buffer"),i=NSFileManager.defaultManager().contentsAtPath(e);if(!i)throw o(e,!1);var a=n.from(i);return"buffer"===r?a:"NSData"===r?a.toNSData():a.toString(r)},e.exports.readlinkSync=function(e){var t=MOPointer.alloc().init(),r=NSFileManager.defaultManager().destinationOfSymbolicLinkAtPath_error(e,t);if(null!==t.value())throw o(e,void 0,t.value());return String(r)},e.exports.realpathSync=function(e){return String(NSString.stringByResolvingSymlinksInPath(e))},e.exports.renameSync=function(e,t){var r=MOPointer.alloc().init(),n=NSFileManager.defaultManager();n.moveItemAtPath_toPath_error(e,t,r);var i=r.value();if(null!==i){if("NSCocoaErrorDomain"!==String(i.domain())||516!==Number(i.code()))throw o(e,void 0,i);var a=MOPointer.alloc().init();if(n.replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error(NSURL.fileURLWithPath(t),NSURL.fileURLWithPath(e),null,NSFileManagerItemReplacementUsingNewMetadataOnly,null,a),null!==a.value())throw o(e,void 0,a.value())}},e.exports.rmdirSync=function(t){var r=MOPointer.alloc().init(),n=NSFileManager.defaultManager();if(!e.exports.lstatSync(t).isDirectory())throw a("ENOTDIR",{path:t,syscall:"rmdir"});if(n.removeItemAtPath_error(t,r),null!==r.value())throw o(t,!0,r.value(),"rmdir")},e.exports.lstatSync=function(e){var t=MOPointer.alloc().init(),r=NSFileManager.defaultManager().attributesOfItemAtPath_error(e,t);if(null!==t.value())throw o(e,void 0,t.value());return function(e){return{dev:String(e.NSFileDeviceIdentifier),mode:e.NSFileType|e.NSFilePosixPermissions,nlink:Number(e.NSFileReferenceCount),uid:String(e.NSFileOwnerAccountID),gid:String(e.NSFileGroupOwnerAccountID),size:Number(e.NSFileSize),atimeMs:1e3*Number(e.NSFileModificationDate.timeIntervalSince1970()),mtimeMs:1e3*Number(e.NSFileModificationDate.timeIntervalSince1970()),ctimeMs:1e3*Number(e.NSFileModificationDate.timeIntervalSince1970()),birthtimeMs:1e3*Number(e.NSFileCreationDate.timeIntervalSince1970()),atime:new Date(1e3*Number(e.NSFileModificationDate.timeIntervalSince1970())+.5),mtime:new Date(1e3*Number(e.NSFileModificationDate.timeIntervalSince1970())+.5),ctime:new Date(1e3*Number(e.NSFileModificationDate.timeIntervalSince1970())+.5),birthtime:new Date(1e3*Number(e.NSFileCreationDate.timeIntervalSince1970())+.5),isBlockDevice:function(){return e.NSFileType===NSFileTypeBlockSpecial},isCharacterDevice:function(){return e.NSFileType===NSFileTypeCharacterSpecial},isDirectory:function(){return e.NSFileType===NSFileTypeDirectory},isFIFO:function(){return!1},isFile:function(){return e.NSFileType===NSFileTypeRegular},isSocket:function(){return e.NSFileType===NSFileTypeSocket},isSymbolicLink:function(){return e.NSFileType===NSFileTypeSymbolicLink}}}(r)},e.exports.statSync=function(t){return e.exports.lstatSync(e.exports.realpathSync(t))},e.exports.symlinkSync=function(e,t){var r=MOPointer.alloc().init();NSFileManager.defaultManager().createSymbolicLinkAtPath_withDestinationPath_error(t,e,r);if(null!==r.value())throw new Error(r.value())},e.exports.truncateSync=function(e,t){var r=NSFileHandle.fileHandleForUpdatingAtPath(sFilePath);r.truncateFileAtOffset(t||0),r.closeFile()},e.exports.unlinkSync=function(t){var r=MOPointer.alloc().init(),n=NSFileManager.defaultManager();if(e.exports.lstatSync(t).isDirectory())throw a("EPERM",{path:t,syscall:"unlink"});n.removeItemAtPath_error(t,r);if(null!==r.value())throw o(t,!1,r.value())},e.exports.utimesSync=function(e,t,r){var n=MOPointer.alloc().init();NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFileModificationDate:t},e,n);if(null!==n.value())throw o(e,void 0,n.value())},e.exports.writeFileSync=function(e,t,r){var i=c(r,"utf8");n.from(t,"NSData"===i||"buffer"===i?void 0:i).toNSData().writeToFile_atomically(e,!0)}},function(e,t,r){e.exports=r(11)},function(e,t,r){e.exports={"export-prototype":r(14).default,"reset-settings":r(13).default}},function(e,t){e.exports=require("buffer")},function(e,t,r){"use strict";r.r(t);var n=r(0);t.default=n.d},function(e,t,r){"use strict";r.r(t);var n=r(0);function i({id:e,imageScale:t,imageFormat:r}){return`images/${e}@${t}x.${r}`}function a({flow:e}){if(!e)return{};const{targetId:t,animationType:r}=e;return{hotspot:{targetId:t,animationType:r}}}var o=r(9);var c=r(2);function u(e){return function(t){t.forEach(function(t){t.hidden=!e})}}const l=u(!0),s=u(!1);function f({layer:e,outputFilePath:t,imageFormat:r,imageScale:n}){Object(c.export)(e,{formats:r,scales:n,output:t,"use-id-for-name":!0})}r.d(t,"default",function(){return y});const d="/Users/yuanqing/Desktop/sketch-export-prototype/build",m=375,S=812,p=3,h="png";function y(){const e=Object(n.a)();if(0===e.lengths)return void Object(n.e)("No artboards");const t=[],r={};e.forEach(function(e){e.flowStartPoint&&t.push(e.id);const o=[],c=[];Object(n.c)(e.layers,function(e){e.hidden||(1!==e.sketchObject.isFixedToViewport()?e.flow&&c.push(e):o.push(e))}),r[e.id]=function({artboard:e,fixedLayers:t,hotspotLayers:r,imageFormat:o,imageScale:c}){const{width:u,height:l}=e.frame;return{id:e.id,image:{fileName:i({id:e.id,imageFormat:o,imageScale:c}),width:u,height:l},fixedLayers:t.map(function(e){const{width:t,height:r}=e.frame,{x:u,y:l}=Object(n.b)(e);return{fileName:i({id:e.id,imageFormat:o,imageScale:c}),width:t,height:r,x:u,y:l,...a(e)}}),hotspotLayers:r.map(function(e){const{width:t,height:r}=e.frame,{x:i,y:o}=Object(n.b)(e);return{width:t,height:r,x:i,y:o,...a(e)}})}}({artboard:e,hotspotLayers:c,fixedLayers:o,imageFormat:h,imageScale:p}),function({artboard:e,fixedLayers:t,outputDirectoryPath:r,imageFormat:n,imageScale:i}){const a=`${r}/images`;t.forEach(function(e){f({layer:e,outputFilePath:a,imageFormat:n,imageScale:i})}),s(t),f({layer:e,outputFilePath:a,imageFormat:n,imageScale:i}),l(t)}({artboard:e,fixedLayers:o,outputDirectoryPath:d,imageFormat:h,imageScale:p})}),function({outputFilePath:e,config:t}){const r=`window.__SKETCH_PROTOTYPE_DATA__=${JSON.stringify(t,null,2)}\n`;Object(o.writeFileSync)(e,r)}({outputFilePath:`${d}/data.js`,config:{viewportWidth:m,viewportHeight:S,imageScale:p,startIds:t,pages:r}}),Object(n.f)(`Built prototype to ${d}`)}}]));