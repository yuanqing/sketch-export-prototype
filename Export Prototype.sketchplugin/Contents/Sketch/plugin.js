!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return m}),n.d(r,"DROP_DOWN",function(){return v}),n.d(r,"RADIO_BUTTONS",function(){return x}),n.d(r,"NUMERIC_TEXT_BOX",function(){return O.a}),n.d(r,"TEXT_BOX",function(){return P});var i=n(1);function o(e){const t={};return function e(t,n,r){Object.keys(t).forEach(function(i){const o=[n,i].filter(Boolean).join("."),a=t[i];"object"!=typeof a||null===a||Array.isArray(a)?r[o]=t[i]:e(a,o,r)})}(e,null,t),t}const a=/\./;function c(e){const t={};return Object.keys(e).forEach(function(n){!function e(t,n,r){const i=t[0];if(1===t.length)return void(r[i]=n);null==r[i]&&(r[i]={});e(t.slice(1),n,r[i])}(n.split(a),e[n],t)}),t}function s(){const e={outputDirectoryPath:"~/Desktop/Sketch Prototypes",showHotspots:!0,showNavigation:!0,viewportHeight:null,viewportWidth:null};if(!e)return{};const t={},n=o(e);return Object.keys(n).forEach(function(e){const r=Object(i.sessionVariable)(e),o=Object(i.settingForKey)(e),a=void 0!==r?r:o,c=n[e];t[e]=void 0!==a?a:c}),c(t)}const u=1,l=10,f=17;const h=2,d=20,p=2;const y=20,S=10;function m({width:e,y:t,label:n,value:r}){const i=NSButton.alloc().initWithFrame(NSMakeRect(0,t,e,y));return i.setButtonType(NSSwitchButton),i.setBezelStyle(0),i.setState(r?NSOnState:NSOffState),i.setTitle(n),{view:i,height:y+S,retrieveValue:function(){return"1"==i.stringValue()}}}const b=20,g=15;function v({width:e,y:t,value:n,possibleValues:r}){const i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,t,e,b));r.forEach(function(e){i.addItemWithTitle(`${e}`)});const o=void 0!==n?r.indexOf(n):0;return i.selectItemAtIndex(o),{view:i,height:b+g,retrieveValue:function(){const e=i.indexOfSelectedItem();return r[e]}}}const N=20,w=10;function x({width:e,y:t,value:n,possibleValues:r}){const i=NSButtonCell.alloc().init();i.setButtonType(NSRadioButton);const o=r.length,a=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,t,e,N),NSRadioModeMatrix,i,1,o);a.setCellSize(CGSizeMake(Math.floor(e/o),N)),a.cells().forEach(function(e,t){e.setTitle(r[t])});const c=void 0!==n?r.indexOf(n):0;return a.selectCellAtRow_column(0,c),{view:a,height:N+w,retrieveValue:function(){const e=a.cells().indexOfObject(a.selectedCell());return r[e]}}}var O=n(6),F=n(4);const P=Object(F.a)(),_=300;function M({title:e,formFields:t}){const n=o(s()),{formView:i,retrieveValues:a}=function({formFieldsConfig:e,settings:t}){const n=NSView.alloc().init();n.setFlipped(!0);const i={};let o=0;e.forEach(function(e){if("-"===e){const{view:e,height:t}=function({width:e,y:t}){const n=NSView.alloc().initWithFrame(NSMakeRect(0,t+l,e,u));return n.setWantsLayer(1),n.layer().setBackgroundColor(CGColorCreateGenericRGB(127/255,127/255,127/255,.5)),{view:n,height:l+u+f}}({width:_,y:o});return o+=t,void n.addSubview(e)}const{type:a,key:c,label:s,value:y,...S}=e;if(s&&"CHECK_BOX"!==a){const{view:e,height:t}=function({width:e,y:t,label:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,t+h,e,d));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(n),{view:r,height:h+d+p}}({width:_,y:o,label:s});o+=t,n.addSubview(e)}const m=t[c],b=null!=y?y:m,{view:g,height:v,retrieveValue:N}=r[a]({width:_,y:o,label:s,value:b,...S});o+=v,n.addSubview(g),i[c]=N});const a=n.subviews();return a.forEach(function(e,t){t<a.length-1&&e.setNextKeyView(a[t+1])}),n.setFrame(NSMakeRect(0,0,_,o)),{formView:n,retrieveValues:i}}({formFieldsConfig:t.filter(Boolean),settings:n}),y=function(e){const t=NSAlert.alloc().init();return t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}(e||"Settings");y.setAccessoryView(i);const S=i.subviews();if(S[0]&&y.window().setInitialFirstResponder(S[0]),"1000"==y.runModal()){const e={};return Object.keys(a).forEach(function(t){const n=a[t];e[t]=n()}),c(e)}return null}var k=n(5),E=n.n(k);function A(e){E.a.message(`✔ ${e}`)}function D(){const e={outputDirectoryPath:"~/Desktop/Sketch Prototypes",showHotspots:!0,showNavigation:!0,viewportHeight:null,viewportWidth:null};if(!e)return;const t=o(e);var n;Object.keys(t).forEach(function(e){Object(i.setSettingForKey)(e,void 0),Object(i.setSessionVariable)(e,void 0)}),n="Reset settings",E.a.message(n)}const T=j(i.setSettingForKey);j(i.setSessionVariable);function j(e){return function(t){if(!t)return;const n=o(t);Object.keys(n).forEach(function(t){const r=n[t];null!=r&&e(t,r)})}}n(7),n(8);var I=n(9);n(3);function B(){const e=NSApplication.sharedApplication().orderedDocuments();return Object(I.fromNative)(e[0])}function R(){return B().pages}function C(e,t){e.forEach(function(e){t(e);const n=e.type;"Artboard"!==n&&"Group"!==n||C(e.layers,t)})}function V(e,t){for(;null!=e.parent&&"Page"!==e.parent.type;)t(e.parent),e=e.parent}function W(e){return"Page"===e.parent.type?null:function e(t,n){const r=t.parent;if("Artboard"===r.type)return n;const i={x:n.x+r.frame.x,y:n.y+r.frame.y};return e(r,i)}(e,{x:e.frame.x,y:e.frame.y})}function L(){return`${process.env.HOME}/Library/Application Support/com.bohemiancoding.sketch3/Plugins/Export Prototype.sketchplugin`}function $(){return`${L()}/Contents/Resources`}n.d(t,"h",function(){return s}),n.d(t,"k",function(){return M}),n.d(t,"l",function(){return D}),n.d(t,"m",function(){return T}),n.d(t,"a",function(){return"CHECK_BOX"}),n.d(t,"b",function(){return"DROP_DOWN"}),n.d(t,"c",function(){return"TEXT_BOX"}),n.d(t,"g",function(){return $}),n.d(t,"f",function(){return B}),n.d(t,"i",function(){return C}),n.d(t,"j",function(){return V}),n.d(t,"d",function(){return W}),n.d(t,"e",function(){return R}),n.d(t,"n",function(){return A})},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){var r=n(12).Buffer,i={EPERM:{message:"operation not permitted",errno:-1},ENOENT:{message:"no such file or directory",errno:-2},EACCES:{message:"permission denied",errno:-13},ENOTDIR:{message:"not a directory",errno:-20},EISDIR:{message:"illegal operation on a directory",errno:-21}};function o(e,t){var n=new Error(e+": "+i[e].message+", "+(t.syscall||"")+(t.path?" '"+t.path+"'":""));return Object.keys(t).forEach(function(e){n[e]=t[e]}),n.code=e,n.errno=i[e].errno,n}function a(t,n,r,i){var a=NSFileManager.defaultManager();if(!a.fileExistsAtPath(t))return o("ENOENT",{path:t,syscall:i||"open"});if(!a.isReadableFileAtPath(t))return o("EACCES",{path:t,syscall:i||"open"});if(void 0!==n){var c=e.exports.lstatSync(t).isDirectory();if(c&&!n)return o("EISDIR",{path:t,syscall:i||"read"});if(!c&&n)return o("ENOTDIR",{path:t,syscall:i||"read"})}return new Error(r||"Unknown error while manipulating "+t)}function c(e,t){return e&&e.encoding?String(e.encoding):e?String(e):t}e.exports.constants={F_OK:0,R_OK:4,W_OK:2,X_OK:1},e.exports.accessSync=function(t,n){n|=0;var r=NSFileManager.defaultManager();switch(n){case 0:canAccess=e.exports.existsSync(t);break;case 1:canAccess=Boolean(Number(r.isExecutableFileAtPath(t)));break;case 2:canAccess=Boolean(Number(r.isWritableFileAtPath(t)));break;case 3:canAccess=Boolean(Number(r.isExecutableFileAtPath(t)))&&Boolean(Number(r.isWritableFileAtPath(t)));break;case 4:canAccess=Boolean(Number(r.isReadableFileAtPath(t)));break;case 5:canAccess=Boolean(Number(r.isReadableFileAtPath(t)))&&Boolean(Number(r.isExecutableFileAtPath(t)));break;case 6:canAccess=Boolean(Number(r.isReadableFileAtPath(t)))&&Boolean(Number(r.isWritableFileAtPath(t)));break;case 7:canAccess=Boolean(Number(r.isReadableFileAtPath(t)))&&Boolean(Number(r.isWritableFileAtPath(t)))&&Boolean(Number(r.isExecutableFileAtPath(t)))}if(!canAccess)throw new Error("Can't access "+String(t))},e.exports.appendFileSync=function(t,n,i){if(!e.exports.existsSync(t))return e.exports.writeFileSync(t,n,i);var o=NSFileHandle.fileHandleForWritingAtPath(t);o.seekToEndOfFile();var a=c(i,"utf8"),s=r.from(n,"NSData"===a||"buffer"===a?void 0:a).toNSData();o.writeData(s)},e.exports.chmodSync=function(e,t){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFilePosixPermissions:t},e,n),null!==n.value())throw a(e,void 0,n.value())},e.exports.copyFileSync=function(e,t,n){var r=MOPointer.alloc().init();if(NSFileManager.defaultManager().copyItemAtPath_toPath_error(e,t,r),null!==r.value())throw a(e,!1,r.value())},e.exports.existsSync=function(e){var t=NSFileManager.defaultManager();return Boolean(Number(t.fileExistsAtPath(e)))},e.exports.linkSync=function(e,t){var n=MOPointer.alloc().init();if(NSFileManager.defaultManager().linkItemAtPath_toPath_error(e,t,n),null!==n.value())throw a(e,void 0,n.value())},e.exports.mkdirSync=function(e,t){var n=511,r=!1;t&&t.mode&&(n=t.mode),t&&t.recursive&&(r=t.recursive),"number"==typeof t&&(n=t);var i=MOPointer.alloc().init();if(NSFileManager.defaultManager().createDirectoryAtPath_withIntermediateDirectories_attributes_error(e,r,{NSFilePosixPermissions:n},i),null!==i.value())throw new Error(i.value())},e.exports.mkdtempSync=function(t){var n=t+function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<6;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}();return e.exports.mkdirSync(n),n},e.exports.readdirSync=function(e){for(var t=NSFileManager.defaultManager().subpathsAtPath(e),n=[],r=0;r<t.length;r++)n.push(String(t[r]));return n},e.exports.readFileSync=function(e,t){var n=c(t,"buffer"),i=NSFileManager.defaultManager().contentsAtPath(e);if(!i)throw a(e,!1);var o=r.from(i);return"buffer"===n?o:"NSData"===n?o.toNSData():o.toString(n)},e.exports.readlinkSync=function(e){var t=MOPointer.alloc().init(),n=NSFileManager.defaultManager().destinationOfSymbolicLinkAtPath_error(e,t);if(null!==t.value())throw a(e,void 0,t.value());return String(n)},e.exports.realpathSync=function(e){return String(NSString.stringByResolvingSymlinksInPath(e))},e.exports.renameSync=function(e,t){var n=MOPointer.alloc().init(),r=NSFileManager.defaultManager();r.moveItemAtPath_toPath_error(e,t,n);var i=n.value();if(null!==i){if("NSCocoaErrorDomain"!==String(i.domain())||516!==Number(i.code()))throw a(e,void 0,i);var o=MOPointer.alloc().init();if(r.replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error(NSURL.fileURLWithPath(t),NSURL.fileURLWithPath(e),null,NSFileManagerItemReplacementUsingNewMetadataOnly,null,o),null!==o.value())throw a(e,void 0,o.value())}},e.exports.rmdirSync=function(t){var n=MOPointer.alloc().init(),r=NSFileManager.defaultManager();if(!e.exports.lstatSync(t).isDirectory())throw o("ENOTDIR",{path:t,syscall:"rmdir"});if(r.removeItemAtPath_error(t,n),null!==n.value())throw a(t,!0,n.value(),"rmdir")},e.exports.lstatSync=function(e){var t=MOPointer.alloc().init(),n=NSFileManager.defaultManager().attributesOfItemAtPath_error(e,t);if(null!==t.value())throw a(e,void 0,t.value());return function(e){return{dev:String(e.NSFileDeviceIdentifier),mode:e.NSFileType|e.NSFilePosixPermissions,nlink:Number(e.NSFileReferenceCount),uid:String(e.NSFileOwnerAccountID),gid:String(e.NSFileGroupOwnerAccountID),size:Number(e.NSFileSize),atimeMs:1e3*Number(e.NSFileModificationDate.timeIntervalSince1970()),mtimeMs:1e3*Number(e.NSFileModificationDate.timeIntervalSince1970()),ctimeMs:1e3*Number(e.NSFileModificationDate.timeIntervalSince1970()),birthtimeMs:1e3*Number(e.NSFileCreationDate.timeIntervalSince1970()),atime:new Date(1e3*Number(e.NSFileModificationDate.timeIntervalSince1970())+.5),mtime:new Date(1e3*Number(e.NSFileModificationDate.timeIntervalSince1970())+.5),ctime:new Date(1e3*Number(e.NSFileModificationDate.timeIntervalSince1970())+.5),birthtime:new Date(1e3*Number(e.NSFileCreationDate.timeIntervalSince1970())+.5),isBlockDevice:function(){return e.NSFileType===NSFileTypeBlockSpecial},isCharacterDevice:function(){return e.NSFileType===NSFileTypeCharacterSpecial},isDirectory:function(){return e.NSFileType===NSFileTypeDirectory},isFIFO:function(){return!1},isFile:function(){return e.NSFileType===NSFileTypeRegular},isSocket:function(){return e.NSFileType===NSFileTypeSocket},isSymbolicLink:function(){return e.NSFileType===NSFileTypeSymbolicLink}}}(n)},e.exports.statSync=function(t){return e.exports.lstatSync(e.exports.realpathSync(t))},e.exports.symlinkSync=function(e,t){var n=MOPointer.alloc().init();NSFileManager.defaultManager().createSymbolicLinkAtPath_withDestinationPath_error(t,e,n);if(null!==n.value())throw new Error(n.value())},e.exports.truncateSync=function(e,t){var n=NSFileHandle.fileHandleForUpdatingAtPath(sFilePath);n.truncateFileAtOffset(t||0),n.closeFile()},e.exports.unlinkSync=function(t){var n=MOPointer.alloc().init(),r=NSFileManager.defaultManager();if(e.exports.lstatSync(t).isDirectory())throw o("EPERM",{path:t,syscall:"unlink"});r.removeItemAtPath_error(t,n);if(null!==n.value())throw a(t,!1,n.value())},e.exports.utimesSync=function(e,t,n){var r=MOPointer.alloc().init();NSFileManager.defaultManager().setAttributes_ofItemAtPath_error({NSFileModificationDate:t},e,r);if(null!==r.value())throw a(e,void 0,r.value())},e.exports.writeFileSync=function(e,t,n){var i=c(n,"utf8");r.from(t,"NSData"===i||"buffer"===i?void 0:i).toNSData().writeToFile_atomically(e,!0)}},function(e,t){e.exports=require("sketch/dom")},function(e,t,n){"use strict";n.d(t,"a",function(){return o});const r=20,i=15;function o(e){return function({width:t,y:n,value:o,placeholder:a}){const c=NSTextField.alloc().initWithFrame(NSMakeRect(0,n,t,r)),s=null==o?"":`${o}`;return c.setStringValue(s),a&&c.setPlaceholderString(a),{view:c,height:r+i,retrieveValue:function(){const t=`${c.stringValue()}`;return e?e(t):t}}}}},function(e,t){e.exports=require("sketch/ui")},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(e,t){e.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},function(e,t,n){"use strict";const r=async(e,t)=>{let n=0;for(const r of e)await t(await r,n++);return e};e.exports=r,e.exports.default=r},function(e,t){e.exports=require("sketch")},function(e,t,n){e.exports=n(11)},function(e,t,n){e.exports={"export-prototype/export-prototype":n(15).default,"export-prototype/settings/settings":n(13).default,"export-prototype/settings/reset-settings":n(14).default}},function(e,t){e.exports=require("buffer")},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(0);const i={title:"Settings for Export Prototype",formFields:[{type:r.a,key:"showHotspots",label:"Show hotspots"},{type:r.a,key:"showNavigation",label:"Show navigation"},{type:r.c,key:"outputDirectoryPath",label:"Output directory"}]};function o(){const e=Object(r.k)(i);e&&(Object(r.m)(e),Object(r.n)("Saved settings"))}},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=r.l},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(2);const o=3,a="png",c="assets/images",s="assets/data.js";function u(e){return`${c}/${e}@${o}x.${a}`}function l({flow:e}){if(!e)return{};const{targetId:t,animationType:n}=e;return{hotspot:{targetId:t,animationType:"none"===n?"appear":n}}}var f=n(3);function h(e){return function(t){t.forEach(function({layer:t}){t.hidden=!e})}}const d=h(!0),p=h(!1);function y({layer:e,outputDirectoryPath:t}){Object(f.export)(e,{formats:a,scales:o,output:`${t}/${c}`,"use-id-for-name":!0})}function S({pages:e,outputDirectoryPath:t,config:n}){const o=[],a=[];e.forEach(function(e){if(e.isSymbolsPage())return;const n=[];e.layers.forEach(function(e){if("Artboard"!==e.type)return;const i=e;i.flowStartPoint&&o.push(i.id);const a=[],c=[];Object(r.i)(i.layers,function(e){if(!e.hidden)if(m(e))a.push({hasImage:!0,layer:e});else if(e.flow){if(function(e){let t=!1;return Object(r.j)(e,function(e){t||m(e)&&(t=!0)}),t}(e))return void a.push({hasImage:!1,layer:e});c.push(e)}});const s=function({artboard:e,fixedLayers:t,hotspotLayers:n}){const{width:i,height:o}=e.frame;return{id:e.id,name:e.name,isStartPoint:!0===e.flowStartPoint,image:{fileName:u(e.id),width:i,height:o},fixedLayers:t.map(function({hasImage:e,layer:t}){const{width:n,height:i}=t.frame,{x:o,y:a}=Object(r.d)(t);return{fileName:e?u(t.id):null,width:n,height:i,x:o,y:a,...l(t)}}),hotspotLayers:n.map(function(e){const{width:t,height:n}=e.frame,{x:i,y:o}=Object(r.d)(e);return{width:t,height:n,x:i,y:o,...l(e)}})}}({artboard:i,fixedLayers:a,hotspotLayers:c});n.push(s),function({artboard:e,fixedLayers:t,outputDirectoryPath:n}){t.forEach(function({hasImage:e,layer:t}){e&&y({layer:t,outputDirectoryPath:n})}),p(t),y({layer:e,outputDirectoryPath:n}),d(t)}({artboard:i,fixedLayers:a,outputDirectoryPath:t})}),a.push({name:e.name,id:e.id,artboards:n})}),function({outputDirectoryPath:e,data:t}){const n=`${e}/${s}`,r=`window.__SKETCH_PROTOTYPE_DATA__=${JSON.stringify(t)}\n`;Object(i.writeFileSync)(n,r)}({outputDirectoryPath:t,data:{...n,startPointArtboardIds:o,pages:a}})}function m(e){return 1===e.sketchObject.isFixedToViewport()}const b={"index.html":"index.html","script.js":"assets/script.js","style.css":"assets/style.css"};function g(){const e=Object(r.e)(),{widths:t,heights:n}=function(e){const t=[],n=[];return e.forEach(function(e){e.isSymbolsPage()||e.layers.forEach(function(e){if("Artboard"!==e.type)return;const r=e.sketchObject.preset();if(!r)return;const i=r.width();-1===t.indexOf(i)&&t.push(i);const o=r.height();-1===n.indexOf(o)&&n.push(o)})}),{widths:t.sort(),heights:n.sort()}}(e);let o=t[0],a=n[0];if(1!==t.length||1!==n.length){const e={title:"Export Prototype",formFields:[{type:r.b,key:"viewportWidth",label:"Viewport width",possibleValues:t},{type:r.b,key:"viewportHeight",label:"Viewport height",possibleValues:n}]},i=Object(r.k)(e);if(!i)return;o=i.viewportWidth,a=i.viewportHeight}const c=Object(r.h)(),s=function(e){const t=Object(r.f)().sketchObject.fileURL().lastPathComponent(),n=v.exec(t)[1];return`${e.replace(N,process.env.HOME)}/${n}`}(c.outputDirectoryPath);Object(i.existsSync)(s)&&Object(i.rmdirSync)(s),S({pages:e,outputDirectoryPath:s,config:{viewportWidth:o,viewportHeight:a,showHotspots:c.showHotspots,showNavigation:c.showNavigation}}),function(e){const t=Object(r.g)();Object.keys(b).forEach(function(n){const r=b[n];Object(i.copyFileSync)(`${t}/${n}`,`${e}/${r}`)})}(s),Object(r.n)(`Built prototype in ${s}`)}n.d(t,"default",function(){return g});const v=/([^.]+).sketch$/g,N=/~/}]));