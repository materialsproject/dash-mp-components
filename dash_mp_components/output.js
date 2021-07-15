window['dash_mp_components'] = /******/ (function(modules) {
    // webpackBootstrap
    /******/ function hotDisposeChunk(chunkId) {
        /******/ delete installedChunks[chunkId];
        /******/
    }
    /******/ var parentHotUpdateCallback =
        window['webpackHotUpdatedash_mp_components'];
    /******/ window[
        'webpackHotUpdatedash_mp_components'
    ] = /******/ function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-next-line no-unused-vars
        /******/ hotAddUpdateChunk(chunkId, moreModules);
        /******/ if (parentHotUpdateCallback)
            parentHotUpdateCallback(chunkId, moreModules);
        /******/
    }; // eslint-disable-next-line no-unused-vars
    /******/
    /******/ /******/ function hotDownloadUpdateChunk(chunkId) {
        /******/ var script = document.createElement('script');
        /******/ script.charset = 'utf-8';
        /******/ script.src =
            __webpack_require__.p + '4384c85-' + chunkId + '-wps-hmr.js';
        /******/ if (null) script.crossOrigin = null;
        /******/ document.head.appendChild(script);
        /******/
    } // eslint-disable-next-line no-unused-vars
    /******/
    /******/ /******/ function hotDownloadManifest(requestTimeout) {
        /******/ requestTimeout = requestTimeout || 10000;
        /******/ return new Promise(function(resolve, reject) {
            /******/ if (typeof XMLHttpRequest === 'undefined') {
                /******/ return reject(new Error('No browser support'));
                /******/
            }
            /******/ try {
                /******/ var request = new XMLHttpRequest();
                /******/ var requestPath =
                    __webpack_require__.p + '4384c85-wps-hmr.json';
                /******/ request.open('GET', requestPath, true);
                /******/ request.timeout = requestTimeout;
                /******/ request.send(null);
                /******/
            } catch (err) {
                /******/ return reject(err);
                /******/
            }
            /******/ request.onreadystatechange = function() {
                /******/ if (request.readyState !== 4) return;
                /******/ if (request.status === 0) {
                    /******/ // timeout
                    /******/ reject(
                        /******/ new Error(
                            'Manifest request to ' + requestPath + ' timed out.'
                        )
                        /******/
                    );
                    /******/
                } else if (request.status === 404) {
                    /******/ // no update available
                    /******/ resolve();
                    /******/
                } else if (request.status !== 200 && request.status !== 304) {
                    /******/ // other failure
                    /******/ reject(
                        new Error(
                            'Manifest request to ' + requestPath + ' failed.'
                        )
                    );
                    /******/
                } else {
                    /******/ // success
                    /******/ try {
                        /******/ var update = JSON.parse(request.responseText);
                        /******/
                    } catch (e) {
                        /******/ reject(e);
                        /******/ return;
                        /******/
                    }
                    /******/ resolve(update);
                    /******/
                }
                /******/
            };
            /******/
        });
        /******/
    }
    /******/
    /******/ var hotApplyOnUpdate = true; // eslint-disable-next-line no-unused-vars
    /******/ /******/ var hotCurrentHash = '80c5b7daa372f1e640a4';
    /******/ var hotRequestTimeout = 10000;
    /******/ var hotCurrentModuleData = {};
    /******/ var hotCurrentChildModule; // eslint-disable-next-line no-unused-vars
    /******/ /******/ var hotCurrentParents = []; // eslint-disable-next-line no-unused-vars
    /******/ /******/ var hotCurrentParentsTemp = []; // eslint-disable-next-line no-unused-vars
    /******/
    /******/ /******/ function hotCreateRequire(moduleId) {
        /******/ var me = installedModules[moduleId];
        /******/ if (!me) return __webpack_require__;
        /******/ var fn = function(request) {
            /******/ if (me.hot.active) {
                /******/ if (installedModules[request]) {
                    /******/ if (
                        installedModules[request].parents.indexOf(moduleId) ===
                        -1
                    ) {
                        /******/ installedModules[request].parents.push(
                            moduleId
                        );
                        /******/
                    }
                    /******/
                } else {
                    /******/ hotCurrentParents = [moduleId];
                    /******/ hotCurrentChildModule = request;
                    /******/
                }
                /******/ if (me.children.indexOf(request) === -1) {
                    /******/ me.children.push(request);
                    /******/
                }
                /******/
            } else {
                /******/ console.warn(
                    /******/ '[HMR] unexpected require(' +
                        /******/ request +
                        /******/ ') from disposed module ' +
                        /******/ moduleId
                    /******/
                );
                /******/ hotCurrentParents = [];
                /******/
            }
            /******/ return __webpack_require__(request);
            /******/
        };
        /******/ var ObjectFactory = function ObjectFactory(name) {
            /******/ return {
                /******/ configurable: true,
                /******/ enumerable: true,
                /******/ get: function() {
                    /******/ return __webpack_require__[name];
                    /******/
                },
                /******/ set: function(value) {
                    /******/ __webpack_require__[name] = value;
                    /******/
                },
                /******/
            };
            /******/
        };
        /******/ for (var name in __webpack_require__) {
            /******/ if (
                /******/ Object.prototype.hasOwnProperty.call(
                    __webpack_require__,
                    name
                ) &&
                /******/ name !== 'e' &&
                /******/ name !== 't'
                /******/
            ) {
                /******/ Object.defineProperty(fn, name, ObjectFactory(name));
                /******/
            }
            /******/
        }
        /******/ fn.e = function(chunkId) {
            /******/ if (hotStatus === 'ready') hotSetStatus('prepare');
            /******/ hotChunksLoading++;
            /******/ return __webpack_require__
                .e(chunkId)
                .then(finishChunkLoading, function(err) {
                    /******/ finishChunkLoading();
                    /******/ throw err;
                    /******/
                });
            /******/
            /******/ function finishChunkLoading() {
                /******/ hotChunksLoading--;
                /******/ if (hotStatus === 'prepare') {
                    /******/ if (!hotWaitingFilesMap[chunkId]) {
                        /******/ hotEnsureUpdateChunk(chunkId);
                        /******/
                    }
                    /******/ if (
                        hotChunksLoading === 0 &&
                        hotWaitingFiles === 0
                    ) {
                        /******/ hotUpdateDownloaded();
                        /******/
                    }
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/ fn.t = function(value, mode) {
            /******/ if (mode & 1) value = fn(value);
            /******/ return __webpack_require__.t(value, mode & ~1);
            /******/
        };
        /******/ return fn;
        /******/
    } // eslint-disable-next-line no-unused-vars
    /******/
    /******/ /******/ function hotCreateModule(moduleId) {
        /******/ var hot = {
            /******/ // private stuff
            /******/ _acceptedDependencies: {},
            /******/ _declinedDependencies: {},
            /******/ _selfAccepted: false,
            /******/ _selfDeclined: false,
            /******/ _disposeHandlers: [],
            /******/ _main: hotCurrentChildModule !== moduleId, // Module API
            /******/
            /******/ /******/ active: true,
            /******/ accept: function(dep, callback) {
                /******/ if (dep === undefined) hot._selfAccepted = true;
                /******/ else if (typeof dep === 'function')
                    hot._selfAccepted = dep;
                /******/ else if (typeof dep === 'object')
                    /******/ for (var i = 0; i < dep.length; i++)
                        /******/ hot._acceptedDependencies[dep[i]] =
                            callback || function() {};
                /******/ else
                    hot._acceptedDependencies[dep] = callback || function() {};
                /******/
            },
            /******/ decline: function(dep) {
                /******/ if (dep === undefined) hot._selfDeclined = true;
                /******/ else if (typeof dep === 'object')
                    /******/ for (var i = 0; i < dep.length; i++)
                        /******/ hot._declinedDependencies[dep[i]] = true;
                /******/ else hot._declinedDependencies[dep] = true;
                /******/
            },
            /******/ dispose: function(callback) {
                /******/ hot._disposeHandlers.push(callback);
                /******/
            },
            /******/ addDisposeHandler: function(callback) {
                /******/ hot._disposeHandlers.push(callback);
                /******/
            },
            /******/ removeDisposeHandler: function(callback) {
                /******/ var idx = hot._disposeHandlers.indexOf(callback);
                /******/ if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
                /******/
            }, // Management API
            /******/
            /******/ /******/ check: hotCheck,
            /******/ apply: hotApply,
            /******/ status: function(l) {
                /******/ if (!l) return hotStatus;
                /******/ hotStatusHandlers.push(l);
                /******/
            },
            /******/ addStatusHandler: function(l) {
                /******/ hotStatusHandlers.push(l);
                /******/
            },
            /******/ removeStatusHandler: function(l) {
                /******/ var idx = hotStatusHandlers.indexOf(l);
                /******/ if (idx >= 0) hotStatusHandlers.splice(idx, 1);
                /******/
            }, //inherit from previous dispose call
            /******/
            /******/ /******/ data: hotCurrentModuleData[moduleId],
            /******/
        };
        /******/ hotCurrentChildModule = undefined;
        /******/ return hot;
        /******/
    }
    /******/
    /******/ var hotStatusHandlers = [];
    /******/ var hotStatus = 'idle';
    /******/
    /******/ function hotSetStatus(newStatus) {
        /******/ hotStatus = newStatus;
        /******/ for (var i = 0; i < hotStatusHandlers.length; i++)
            /******/ hotStatusHandlers[i].call(null, newStatus);
        /******/
    } // while downloading
    /******/
    /******/ /******/ var hotWaitingFiles = 0;
    /******/ var hotChunksLoading = 0;
    /******/ var hotWaitingFilesMap = {};
    /******/ var hotRequestedFilesMap = {};
    /******/ var hotAvailableFilesMap = {};
    /******/ var hotDeferred; // The update info
    /******/
    /******/ /******/ var hotUpdate, hotUpdateNewHash;
    /******/
    /******/ function toModuleId(id) {
        /******/ var isNumber = +id + '' === id;
        /******/ return isNumber ? +id : id;
        /******/
    }
    /******/
    /******/ function hotCheck(apply) {
        /******/ if (hotStatus !== 'idle') {
            /******/ throw new Error('check() is only allowed in idle status');
            /******/
        }
        /******/ hotApplyOnUpdate = apply;
        /******/ hotSetStatus('check');
        /******/ return hotDownloadManifest(hotRequestTimeout).then(function(
            update
        ) {
            /******/ if (!update) {
                /******/ hotSetStatus('idle');
                /******/ return null;
                /******/
            }
            /******/ hotRequestedFilesMap = {};
            /******/ hotWaitingFilesMap = {};
            /******/ hotAvailableFilesMap = update.c;
            /******/ hotUpdateNewHash = update.h;
            /******/
            /******/ hotSetStatus('prepare');
            /******/ var promise = new Promise(function(resolve, reject) {
                /******/ hotDeferred = {
                    /******/ resolve: resolve,
                    /******/ reject: reject,
                    /******/
                };
                /******/
            });
            /******/ hotUpdate = {};
            /******/ var chunkId = 'main'; // eslint-disable-next-line no-lone-blocks
            /******/ /******/ {
                /******/ /*globals chunkId */
                /******/ hotEnsureUpdateChunk(chunkId);
                /******/
            }
            /******/ if (
                /******/ hotStatus === 'prepare' &&
                /******/ hotChunksLoading === 0 &&
                /******/ hotWaitingFiles === 0
                /******/
            ) {
                /******/ hotUpdateDownloaded();
                /******/
            }
            /******/ return promise;
            /******/
        });
        /******/
    } // eslint-disable-next-line no-unused-vars
    /******/
    /******/ /******/ function hotAddUpdateChunk(chunkId, moreModules) {
        /******/ if (
            !hotAvailableFilesMap[chunkId] ||
            !hotRequestedFilesMap[chunkId]
        )
            /******/ return;
        /******/ hotRequestedFilesMap[chunkId] = false;
        /******/ for (var moduleId in moreModules) {
            /******/ if (
                Object.prototype.hasOwnProperty.call(moreModules, moduleId)
            ) {
                /******/ hotUpdate[moduleId] = moreModules[moduleId];
                /******/
            }
            /******/
        }
        /******/ if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
            /******/ hotUpdateDownloaded();
            /******/
        }
        /******/
    }
    /******/
    /******/ function hotEnsureUpdateChunk(chunkId) {
        /******/ if (!hotAvailableFilesMap[chunkId]) {
            /******/ hotWaitingFilesMap[chunkId] = true;
            /******/
        } else {
            /******/ hotRequestedFilesMap[chunkId] = true;
            /******/ hotWaitingFiles++;
            /******/ hotDownloadUpdateChunk(chunkId);
            /******/
        }
        /******/
    }
    /******/
    /******/ function hotUpdateDownloaded() {
        /******/ hotSetStatus('ready');
        /******/ var deferred = hotDeferred;
        /******/ hotDeferred = null;
        /******/ if (!deferred) return;
        /******/ if (hotApplyOnUpdate) {
            /******/ // Wrap deferred object in Promise to mark it as a well-handled Promise to
            /******/ // avoid triggering uncaught exception warning in Chrome.
            /******/ // See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
            /******/ Promise.resolve()
                /******/ .then(function() {
                    /******/ return hotApply(hotApplyOnUpdate);
                    /******/
                })
                /******/ .then(
                    /******/ function(result) {
                        /******/ deferred.resolve(result);
                        /******/
                    },
                    /******/ function(err) {
                        /******/ deferred.reject(err);
                        /******/
                    }
                    /******/
                );
            /******/
        } else {
            /******/ var outdatedModules = [];
            /******/ for (var id in hotUpdate) {
                /******/ if (
                    Object.prototype.hasOwnProperty.call(hotUpdate, id)
                ) {
                    /******/ outdatedModules.push(toModuleId(id));
                    /******/
                }
                /******/
            }
            /******/ deferred.resolve(outdatedModules);
            /******/
        }
        /******/
    }
    /******/
    /******/ function hotApply(options) {
        /******/ if (hotStatus !== 'ready')
            /******/ throw new Error('apply() is only allowed in ready status');
        /******/ options = options || {};
        /******/
        /******/ var cb;
        /******/ var i;
        /******/ var j;
        /******/ var module;
        /******/ var moduleId;
        /******/
        /******/ function getAffectedStuff(updateModuleId) {
            /******/ var outdatedModules = [updateModuleId];
            /******/ var outdatedDependencies = {};
            /******/
            /******/ var queue = outdatedModules.map(function(id) {
                /******/ return {
                    /******/ chain: [id],
                    /******/ id: id,
                    /******/
                };
                /******/
            });
            /******/ while (queue.length > 0) {
                /******/ var queueItem = queue.pop();
                /******/ var moduleId = queueItem.id;
                /******/ var chain = queueItem.chain;
                /******/ module = installedModules[moduleId];
                /******/ if (!module || module.hot._selfAccepted) continue;
                /******/ if (module.hot._selfDeclined) {
                    /******/ return {
                        /******/ type: 'self-declined',
                        /******/ chain: chain,
                        /******/ moduleId: moduleId,
                        /******/
                    };
                    /******/
                }
                /******/ if (module.hot._main) {
                    /******/ return {
                        /******/ type: 'unaccepted',
                        /******/ chain: chain,
                        /******/ moduleId: moduleId,
                        /******/
                    };
                    /******/
                }
                /******/ for (var i = 0; i < module.parents.length; i++) {
                    /******/ var parentId = module.parents[i];
                    /******/ var parent = installedModules[parentId];
                    /******/ if (!parent) continue;
                    /******/ if (parent.hot._declinedDependencies[moduleId]) {
                        /******/ return {
                            /******/ type: 'declined',
                            /******/ chain: chain.concat([parentId]),
                            /******/ moduleId: moduleId,
                            /******/ parentId: parentId,
                            /******/
                        };
                        /******/
                    }
                    /******/ if (outdatedModules.indexOf(parentId) !== -1)
                        continue;
                    /******/ if (parent.hot._acceptedDependencies[moduleId]) {
                        /******/ if (!outdatedDependencies[parentId])
                            /******/ outdatedDependencies[parentId] = [];
                        /******/ addAllToSet(outdatedDependencies[parentId], [
                            moduleId,
                        ]);
                        /******/ continue;
                        /******/
                    }
                    /******/ delete outdatedDependencies[parentId];
                    /******/ outdatedModules.push(parentId);
                    /******/ queue.push({
                        /******/ chain: chain.concat([parentId]),
                        /******/ id: parentId,
                        /******/
                    });
                    /******/
                }
                /******/
            }
            /******/
            /******/ return {
                /******/ type: 'accepted',
                /******/ moduleId: updateModuleId,
                /******/ outdatedModules: outdatedModules,
                /******/ outdatedDependencies: outdatedDependencies,
                /******/
            };
            /******/
        }
        /******/
        /******/ function addAllToSet(a, b) {
            /******/ for (var i = 0; i < b.length; i++) {
                /******/ var item = b[i];
                /******/ if (a.indexOf(item) === -1) a.push(item);
                /******/
            }
            /******/
        } // at begin all updates modules are outdated // the "outdated" status can propagate to parents if they don't accept the children
        /******/
        /******/ /******/ /******/ var outdatedDependencies = {};
        /******/ var outdatedModules = [];
        /******/ var appliedUpdate = {};
        /******/
        /******/ var warnUnexpectedRequire = function warnUnexpectedRequire() {
            /******/ console.warn(
                /******/ '[HMR] unexpected require(' +
                    result.moduleId +
                    ') to disposed module'
                /******/
            );
            /******/
        };
        /******/
        /******/ for (var id in hotUpdate) {
            /******/ if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
                /******/ moduleId = toModuleId(id); /** @type {TODO} */
                /******/ /******/ var result;
                /******/ if (hotUpdate[id]) {
                    /******/ result = getAffectedStuff(moduleId);
                    /******/
                } else {
                    /******/ result = {
                        /******/ type: 'disposed',
                        /******/ moduleId: id,
                        /******/
                    };
                    /******/
                } /** @type {Error|false} */
                /******/ /******/ var abortError = false;
                /******/ var doApply = false;
                /******/ var doDispose = false;
                /******/ var chainInfo = '';
                /******/ if (result.chain) {
                    /******/ chainInfo =
                        '\nUpdate propagation: ' + result.chain.join(' -> ');
                    /******/
                }
                /******/ switch (result.type) {
                    /******/ case 'self-declined':
                        /******/ if (options.onDeclined)
                            options.onDeclined(result);
                        /******/ if (!options.ignoreDeclined)
                            /******/ abortError = new Error(
                                /******/ 'Aborted because of self decline: ' +
                                    /******/ result.moduleId +
                                    /******/ chainInfo
                                /******/
                            );
                        /******/ break;
                    /******/ case 'declined':
                        /******/ if (options.onDeclined)
                            options.onDeclined(result);
                        /******/ if (!options.ignoreDeclined)
                            /******/ abortError = new Error(
                                /******/ 'Aborted because of declined dependency: ' +
                                    /******/ result.moduleId +
                                    /******/ ' in ' +
                                    /******/ result.parentId +
                                    /******/ chainInfo
                                /******/
                            );
                        /******/ break;
                    /******/ case 'unaccepted':
                        /******/ if (options.onUnaccepted)
                            options.onUnaccepted(result);
                        /******/ if (!options.ignoreUnaccepted)
                            /******/ abortError = new Error(
                                /******/ 'Aborted because ' +
                                    moduleId +
                                    ' is not accepted' +
                                    chainInfo
                                /******/
                            );
                        /******/ break;
                    /******/ case 'accepted':
                        /******/ if (options.onAccepted)
                            options.onAccepted(result);
                        /******/ doApply = true;
                        /******/ break;
                    /******/ case 'disposed':
                        /******/ if (options.onDisposed)
                            options.onDisposed(result);
                        /******/ doDispose = true;
                        /******/ break;
                    /******/ default:
                        /******/ throw new Error(
                            'Unexception type ' + result.type
                        );
                    /******/
                }
                /******/ if (abortError) {
                    /******/ hotSetStatus('abort');
                    /******/ return Promise.reject(abortError);
                    /******/
                }
                /******/ if (doApply) {
                    /******/ appliedUpdate[moduleId] = hotUpdate[moduleId];
                    /******/ addAllToSet(
                        outdatedModules,
                        result.outdatedModules
                    );
                    /******/ for (moduleId in result.outdatedDependencies) {
                        /******/ if (
                            /******/ Object.prototype.hasOwnProperty.call(
                                /******/ result.outdatedDependencies,
                                /******/ moduleId
                                /******/
                            )
                            /******/
                        ) {
                            /******/ if (!outdatedDependencies[moduleId])
                                /******/ outdatedDependencies[moduleId] = [];
                            /******/ addAllToSet(
                                /******/ outdatedDependencies[moduleId],
                                /******/ result.outdatedDependencies[moduleId]
                                /******/
                            );
                            /******/
                        }
                        /******/
                    }
                    /******/
                }
                /******/ if (doDispose) {
                    /******/ addAllToSet(outdatedModules, [result.moduleId]);
                    /******/ appliedUpdate[moduleId] = warnUnexpectedRequire;
                    /******/
                }
                /******/
            }
            /******/
        } // Store self accepted outdated modules to require them later by the module system
        /******/
        /******/ /******/ var outdatedSelfAcceptedModules = [];
        /******/ for (i = 0; i < outdatedModules.length; i++) {
            /******/ moduleId = outdatedModules[i];
            /******/ if (
                /******/ installedModules[moduleId] &&
                /******/ installedModules[moduleId].hot._selfAccepted && // removed self-accepted modules should not be required
                /******/ /******/ appliedUpdate[moduleId] !==
                    warnUnexpectedRequire
                /******/
            ) {
                /******/ outdatedSelfAcceptedModules.push({
                    /******/ module: moduleId,
                    /******/ errorHandler:
                        installedModules[moduleId].hot._selfAccepted,
                    /******/
                });
                /******/
            }
            /******/
        } // Now in "dispose" phase
        /******/
        /******/ /******/ hotSetStatus('dispose');
        /******/ Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
            /******/ if (hotAvailableFilesMap[chunkId] === false) {
                /******/ hotDisposeChunk(chunkId);
                /******/
            }
            /******/
        });
        /******/
        /******/ var idx;
        /******/ var queue = outdatedModules.slice();
        /******/ while (queue.length > 0) {
            /******/ moduleId = queue.pop();
            /******/ module = installedModules[moduleId];
            /******/ if (!module) continue;
            /******/
            /******/ var data = {}; // Call dispose handlers
            /******/
            /******/ /******/ var disposeHandlers = module.hot._disposeHandlers;
            /******/ for (j = 0; j < disposeHandlers.length; j++) {
                /******/ cb = disposeHandlers[j];
                /******/ cb(data);
                /******/
            }
            /******/ hotCurrentModuleData[moduleId] = data; // disable module (this disables requires from this module)
            /******/
            /******/ /******/ module.hot.active = false; // remove module from cache
            /******/
            /******/ /******/ delete installedModules[moduleId]; // when disposing there is no need to call dispose handler
            /******/
            /******/ /******/ delete outdatedDependencies[moduleId]; // remove "parents" references from all children
            /******/
            /******/ /******/ for (j = 0; j < module.children.length; j++) {
                /******/ var child = installedModules[module.children[j]];
                /******/ if (!child) continue;
                /******/ idx = child.parents.indexOf(moduleId);
                /******/ if (idx >= 0) {
                    /******/ child.parents.splice(idx, 1);
                    /******/
                }
                /******/
            }
            /******/
        } // remove outdated dependency from module children
        /******/
        /******/ /******/ var dependency;
        /******/ var moduleOutdatedDependencies;
        /******/ for (moduleId in outdatedDependencies) {
            /******/ if (
                /******/ Object.prototype.hasOwnProperty.call(
                    outdatedDependencies,
                    moduleId
                )
                /******/
            ) {
                /******/ module = installedModules[moduleId];
                /******/ if (module) {
                    /******/ moduleOutdatedDependencies =
                        outdatedDependencies[moduleId];
                    /******/ for (
                        j = 0;
                        j < moduleOutdatedDependencies.length;
                        j++
                    ) {
                        /******/ dependency = moduleOutdatedDependencies[j];
                        /******/ idx = module.children.indexOf(dependency);
                        /******/ if (idx >= 0) module.children.splice(idx, 1);
                        /******/
                    }
                    /******/
                }
                /******/
            }
            /******/
        } // Now in "apply" phase
        /******/
        /******/ /******/ hotSetStatus('apply');
        /******/
        /******/ hotCurrentHash = hotUpdateNewHash; // insert new code
        /******/
        /******/ /******/ for (moduleId in appliedUpdate) {
            /******/ if (
                Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)
            ) {
                /******/ modules[moduleId] = appliedUpdate[moduleId];
                /******/
            }
            /******/
        } // call accept handlers
        /******/
        /******/ /******/ var error = null;
        /******/ for (moduleId in outdatedDependencies) {
            /******/ if (
                /******/ Object.prototype.hasOwnProperty.call(
                    outdatedDependencies,
                    moduleId
                )
                /******/
            ) {
                /******/ module = installedModules[moduleId];
                /******/ if (module) {
                    /******/ moduleOutdatedDependencies =
                        outdatedDependencies[moduleId];
                    /******/ var callbacks = [];
                    /******/ for (
                        i = 0;
                        i < moduleOutdatedDependencies.length;
                        i++
                    ) {
                        /******/ dependency = moduleOutdatedDependencies[i];
                        /******/ cb =
                            module.hot._acceptedDependencies[dependency];
                        /******/ if (cb) {
                            /******/ if (callbacks.indexOf(cb) !== -1) continue;
                            /******/ callbacks.push(cb);
                            /******/
                        }
                        /******/
                    }
                    /******/ for (i = 0; i < callbacks.length; i++) {
                        /******/ cb = callbacks[i];
                        /******/ try {
                            /******/ cb(moduleOutdatedDependencies);
                            /******/
                        } catch (err) {
                            /******/ if (options.onErrored) {
                                /******/ options.onErrored({
                                    /******/ type: 'accept-errored',
                                    /******/ moduleId: moduleId,
                                    /******/ dependencyId:
                                        moduleOutdatedDependencies[i],
                                    /******/ error: err,
                                    /******/
                                });
                                /******/
                            }
                            /******/ if (!options.ignoreErrored) {
                                /******/ if (!error) error = err;
                                /******/
                            }
                            /******/
                        }
                        /******/
                    }
                    /******/
                }
                /******/
            }
            /******/
        } // Load self accepted modules
        /******/
        /******/ /******/ for (
            i = 0;
            i < outdatedSelfAcceptedModules.length;
            i++
        ) {
            /******/ var item = outdatedSelfAcceptedModules[i];
            /******/ moduleId = item.module;
            /******/ hotCurrentParents = [moduleId];
            /******/ try {
                /******/ __webpack_require__(moduleId);
                /******/
            } catch (err) {
                /******/ if (typeof item.errorHandler === 'function') {
                    /******/ try {
                        /******/ item.errorHandler(err);
                        /******/
                    } catch (err2) {
                        /******/ if (options.onErrored) {
                            /******/ options.onErrored({
                                /******/ type:
                                    'self-accept-error-handler-errored',
                                /******/ moduleId: moduleId,
                                /******/ error: err2,
                                /******/ originalError: err,
                                /******/
                            });
                            /******/
                        }
                        /******/ if (!options.ignoreErrored) {
                            /******/ if (!error) error = err2;
                            /******/
                        }
                        /******/ if (!error) error = err;
                        /******/
                    }
                    /******/
                } else {
                    /******/ if (options.onErrored) {
                        /******/ options.onErrored({
                            /******/ type: 'self-accept-errored',
                            /******/ moduleId: moduleId,
                            /******/ error: err,
                            /******/
                        });
                        /******/
                    }
                    /******/ if (!options.ignoreErrored) {
                        /******/ if (!error) error = err;
                        /******/
                    }
                    /******/
                }
                /******/
            }
            /******/
        } // handle errors in accept handlers and self accepted module load
        /******/
        /******/ /******/ if (error) {
            /******/ hotSetStatus('fail');
            /******/ return Promise.reject(error);
            /******/
        }
        /******/
        /******/ hotSetStatus('idle');
        /******/ return new Promise(function(resolve) {
            /******/ resolve(outdatedModules);
            /******/
        });
        /******/
    } // The module cache
    /******/
    /******/ /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {},
            /******/ hot: hotCreateModule(moduleId),
            /******/ parents:
                ((hotCurrentParentsTemp = hotCurrentParents),
                (hotCurrentParents = []),
                hotCurrentParentsTemp),
            /******/ children: [],
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            hotCreateRequire(moduleId)
        ); // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter,
            });
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module',
            });
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
        value,
        mode
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
            mode & 4 &&
            typeof value === 'object' &&
            value &&
            value.__esModule
        )
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value,
        });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function(key) {
                        return value[key];
                    }.bind(null, key)
                );
        /******/ return ns;
        /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default'];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // __webpack_hash__
    /******/
    /******/ /******/ __webpack_require__.h = function() {
        return hotCurrentHash;
    }; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return hotCreateRequire(0)((__webpack_require__.s = 0));
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ './node_modules/webpack-plugin-serve/client.js':
            /*!****************************************!*\
  !*** (webpack)-plugin-serve/client.js ***!
  \****************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                /*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/

                /**
                 * @note This file exists merely as an easy reference for folks adding it to their configuration entries
                 */

                (() => {
                    /* eslint-disable global-require */
                    const {run} = __webpack_require__(
                        /*! ./lib/client/client */ './node_modules/webpack-plugin-serve/lib/client/client.js'
                    );
                    let hash = '<unknown>';
                    let options;
                    try {
                        options = {
                            compress: null,
                            historyFallback: false,
                            hmr: true,
                            host: null,
                            liveReload: false,
                            log: {
                                level: 'info',
                                prefix: {template: '{{level}}'},
                                name: 'webpack-plugin-serve',
                            },
                            open: true,
                            port: 55555,
                            progress: true,
                            secure: false,
                            static: [
                                '/Users/CTODonnell/Documents/materialsproject/code/dash-mp-components',
                            ],
                            status: true,
                            address: '[::]:55555',
                            compilerName: null,
                            wpsId: '4384c85',
                        };
                    } catch (e) {
                        const {log} = __webpack_require__(
                            /*! ./lib/client/log */ './node_modules/webpack-plugin-serve/lib/client/log.js'
                        );
                        log.error(
                            'The entry for webpack-plugin-serve was included in your build, but it does not appear that the plugin was. Please check your configuration.'
                        );
                    }

                    try {
                        // eslint-disable-next-line camelcase
                        hash = __webpack_require__.h();
                    } catch (e) {} // eslint-disable-line no-empty

                    run(hash, options);
                })();

                /***/
            },

        /***/ './node_modules/webpack-plugin-serve/lib/client/ClientSocket.js':
            /*!*********************************************************!*\
  !*** (webpack)-plugin-serve/lib/client/ClientSocket.js ***!
  \*********************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                /*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
                const {error, refresh, warn} = __webpack_require__(
                    /*! ./log */ './node_modules/webpack-plugin-serve/lib/client/log.js'
                )();

                // ignore 1008 (HTTP 400 equivalent) and 1011 (HTTP 500 equivalent)
                const ignoreCodes = [1008, 1011];
                const maxAttempts = 10;

                class ClientSocket {
                    constructor(options, ...args) {
                        this.args = args;
                        this.attempts = 0;
                        this.eventHandlers = [];
                        this.options = options;
                        this.retrying = false;

                        this.connect();
                    }

                    addEventListener(...args) {
                        this.eventHandlers.push(args);
                        this.socket.addEventListener(...args);
                    }

                    close() {
                        this.socket.close();
                    }

                    connect() {
                        if (this.socket) {
                            delete this.socket;
                        }

                        this.connecting = true;

                        this.socket = new WebSocket(...this.args);

                        if (this.options.retry) {
                            this.socket.addEventListener('close', event => {
                                if (ignoreCodes.includes(event.code)) {
                                    return;
                                }

                                if (!this.retrying) {
                                    warn(
                                        `The WebSocket was closed and will attempt to reconnect`
                                    );
                                }

                                this.reconnect();
                            });
                        } else {
                            this.socket.onclose = () =>
                                warn(
                                    `The client WebSocket was closed. ${refresh}`
                                );
                        }

                        this.socket.addEventListener('open', () => {
                            this.attempts = 0;
                            this.retrying = false;
                        });

                        if (this.eventHandlers.length) {
                            for (const [name, fn] of this.eventHandlers) {
                                this.socket.addEventListener(name, fn);
                            }
                        }
                    }

                    reconnect() {
                        this.attempts += 1;
                        this.retrying = true;

                        if (this.attempts > maxAttempts) {
                            error(
                                `The WebSocket could not be reconnected. ${refresh}`
                            );
                            this.retrying = false;
                            return;
                        }

                        const timeout = 1000 * this.attempts ** 2;

                        setTimeout(() => this.connect(this.args), timeout);
                    }

                    removeEventListener(...args) {
                        const [, handler] = args;
                        this.eventHandlers = this.eventHandlers.filter(
                            ([, fn]) => fn === handler
                        );
                        this.socket.removeEventListener(...args);
                    }
                }

                module.exports = {ClientSocket};

                /***/
            },

        /***/ './node_modules/webpack-plugin-serve/lib/client/client.js':
            /*!***************************************************!*\
  !*** (webpack)-plugin-serve/lib/client/client.js ***!
  \***************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                /*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
                /* eslint-disable global-require */
                const run = (buildHash, options) => {
                    const {
                        address,
                        client = {},
                        progress,
                        secure,
                        status,
                    } = options;

                    options.firstInstance = !window.webpackPluginServe; // eslint-disable-line no-param-reassign

                    window.webpackPluginServe = window.webpackPluginServe || {
                        compilers: {},
                    };
                    window.webpackPluginServe.silent = !!client.silent;

                    const {ClientSocket} = __webpack_require__(
                        /*! ./ClientSocket */ './node_modules/webpack-plugin-serve/lib/client/ClientSocket.js'
                    );
                    const {replace} = __webpack_require__(
                        /*! ./hmr */ './node_modules/webpack-plugin-serve/lib/client/hmr.js'
                    );
                    const {error, info, warn} = __webpack_require__(
                        /*! ./log */ './node_modules/webpack-plugin-serve/lib/client/log.js'
                    )();

                    const protocol = secure ? 'wss' : 'ws';
                    const socket = new ClientSocket(
                        client,
                        `${protocol}://${client.address || address}/wps`
                    );

                    const {compilerName} = options;

                    window.webpackPluginServe.compilers[compilerName] = {};

                    // prevents ECONNRESET errors on the server
                    window.addEventListener('beforeunload', () =>
                        socket.close()
                    );

                    socket.addEventListener('message', message => {
                        const {action, data = {}} = JSON.parse(message.data);
                        const {errors, hash = '<?>', warnings} = data || {};
                        const shortHash = hash.slice(0, 7);
                        const identifier = options.compilerName
                            ? `(Compiler: ${options.compilerName}) `
                            : '';
                        const compiler =
                            window.webpackPluginServe.compilers[compilerName];
                        const {wpsId} = data;

                        switch (action) {
                            case 'build':
                                compiler.done = false;
                                break;
                            case 'connected':
                                info(`WebSocket connected ${identifier}`);
                                break;
                            case 'done':
                                compiler.done = true;
                                break;
                            case 'problems':
                                if (data.errors.length) {
                                    error(
                                        `${identifier}Build ${shortHash} produced errors:\n`,
                                        errors
                                    );
                                }
                                if (data.warnings.length) {
                                    warn(
                                        `${identifier}Build ${shortHash} produced warnings:\n`,
                                        warnings
                                    );
                                }
                                break;
                            case 'reload':
                                window.location.reload();
                                break;
                            case 'replace':
                                // actions with a wpsId in tow indicate actions that should only be executed when the wpsId sent
                                // matches the wpsId set in options. this is how we can identify multiple compilers in the
                                // client.
                                if (wpsId && wpsId === options.wpsId) {
                                    replace(buildHash, hash);
                                }
                                break;
                            default:
                        }
                    });

                    if (options.firstInstance) {
                        if (progress === 'minimal') {
                            const {init} = __webpack_require__(
                                /*! ./overlays/progress-minimal */ './node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js'
                            );
                            init(options, socket);
                        } else if (progress) {
                            const {init} = __webpack_require__(
                                /*! ./overlays/progress */ './node_modules/webpack-plugin-serve/lib/client/overlays/progress.js'
                            );
                            init(options, socket);
                        }

                        if (status) {
                            const {init} = __webpack_require__(
                                /*! ./overlays/status */ './node_modules/webpack-plugin-serve/lib/client/overlays/status.js'
                            );
                            init(options, socket);
                        }

                        if (true) {
                            info('Hot Module Replacement is active');

                            if (options.liveReload) {
                                info(
                                    'Live Reload taking precedence over Hot Module Replacement'
                                );
                            }
                        } else {
                        }

                        if (false) {
                        }
                    }
                };

                module.exports = {run};

                /***/
            },

        /***/ './node_modules/webpack-plugin-serve/lib/client/hmr.js':
            /*!************************************************!*\
  !*** (webpack)-plugin-serve/lib/client/hmr.js ***!
  \************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                /*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
                const {error, info, refresh, warn} = __webpack_require__(
                    /*! ./log */ './node_modules/webpack-plugin-serve/lib/client/log.js'
                )();

                let latest = true;

                const hmr = {
                    onUnaccepted(data) {
                        warn('Change in unaccepted module(s):\n', data);
                        warn(data);
                    },
                    onDeclined(data) {
                        warn('Change in declined module(s):\n', data);
                    },
                    onErrored(data) {
                        error('Error in module(s):\n', data);
                    },
                };

                const replace = async (buildHash, hash) => {
                    const {apply, check, status} = module.hot;

                    if (hash) {
                        // eslint-disable-next-line no-undef
                        latest = hash.includes(buildHash);
                    }

                    if (!latest) {
                        const hmrStatus = status();

                        if (hmrStatus === 'abort' || hmrStatus === 'fail') {
                            warn(
                                `An HMR update was triggered, but ${hmrStatus}ed. ${refresh}`
                            );
                            return;
                        }

                        let modules;

                        try {
                            modules = await check(false);
                        } catch (e) {
                            // noop. this typically happens when a MultiCompiler has more than one compiler that includes
                            // this script, and an update happens with a hash that isn't part of the compiler/module this
                            // instance was loaded for.
                            return;
                        }

                        if (!modules) {
                            warn(
                                `No modules found for replacement. ${refresh}`
                            );
                            return;
                        }

                        modules = await apply(hmr);

                        if (modules) {
                            latest = true;
                            info(
                                `Build ${hash.slice(0, 7)} replaced:\n`,
                                modules
                            );
                        }
                    }
                };

                module.exports = {replace};

                /***/
            },

        /***/ './node_modules/webpack-plugin-serve/lib/client/log.js':
            /*!************************************************!*\
  !*** (webpack)-plugin-serve/lib/client/log.js ***!
  \************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                /*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
                const {error, info, warn} = console;
                const log = {
                    error: error.bind(console, '⬡ wps:'),
                    info: info.bind(console, '⬡ wps:'),
                    refresh: 'Please refresh the page',
                    warn: warn.bind(console, '⬡ wps:'),
                };
                const noop = () => {};
                const silent = {
                    error: noop,
                    info: noop,
                    warn: noop,
                };

                module.exports = () =>
                    window.webpackPluginServe.silent ? silent : log;

                /***/
            },

        /***/ './node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js':
            /*!**********************************************************************!*\
  !*** (webpack)-plugin-serve/lib/client/overlays/progress-minimal.js ***!
  \**********************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                /*
  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
                const {addCss, addHtml} = __webpack_require__(
                    /*! ./util */ './node_modules/webpack-plugin-serve/lib/client/overlays/util.js'
                );

                const ns = 'wps-progress-minimal';
                const html = `
<div id="${ns}" class="${ns}-hidden">
  <div id="${ns}-bar"></div>
</div>
`;
                const css = `
#${ns} {
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  width: 100vw;
  z-index: 2147483645;
}

#${ns}-bar {
  width: 0%;
  height: 4px;
  background-color: rgb(186, 223, 172);
  transition: width 1s ease-in-out;
}

.${ns}-hidden{
  display: none;
}
`;

                const update = percent => {
                    const bar = document.querySelector(`#${ns}-bar`);
                    bar.style.width = `${percent}%`;
                };

                const reset = wrapper => {
                    wrapper.classList.add(`${ns}-hidden`);
                    setTimeout(() => update(0), 1e3);
                };

                const init = (options, socket) => {
                    if (options.firstInstance) {
                        document.addEventListener('DOMContentLoaded', () => {
                            addHtml(html);
                            addCss(css);
                        });
                    }

                    socket.addEventListener('message', message => {
                        const {action, data} = JSON.parse(message.data);

                        if (action !== 'progress') {
                            return;
                        }

                        const percent = Math.floor(data.percent * 100);
                        const wrapper = document.querySelector(`#${ns}`);

                        wrapper.classList.remove(`${ns}-hidden`);

                        if (data.percent === 1) {
                            setTimeout(() => reset(wrapper), 5e3);
                        }

                        update(percent);
                    });
                };

                module.exports = {
                    init,
                };

                /***/
            },

        /***/ './node_modules/webpack-plugin-serve/lib/client/overlays/progress.js':
            /*!**************************************************************!*\
  !*** (webpack)-plugin-serve/lib/client/overlays/progress.js ***!
  \**************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                /*
  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
                const {addCss, addHtml} = __webpack_require__(
                    /*! ./util */ './node_modules/webpack-plugin-serve/lib/client/overlays/util.js'
                );

                const ns = 'wps-progress';
                const css = `
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

#${ns}{
  width: 200px;
  height: 200px;
  position: absolute;
  right: 5%;
  top: 5%;
  transition: opacity .25s ease-in-out;
  z-index: 2147483645;
}

#${ns}-bg {
  fill: #282d35;
}

#${ns}-fill {
  fill: rgba(0, 0, 0, 0);
  stroke: rgb(186, 223, 172);
  stroke-dasharray: 219.99078369140625;
  stroke-dashoffset: -219.99078369140625;
  stroke-width: 10;
  transform: rotate(90deg)translate(0px, -80px);
  transition: stroke-dashoffset 1s;
}

#${ns}-percent {
  font-family: 'Open Sans';
  font-size: 18px;
  fill: #ffffff;
}

#${ns}-percent-value {
  dominant-baseline: middle;
  text-anchor: middle;
}

#${ns}-percent-super {
  fill: #bdc3c7;
  font-size: .45em;
  baseline-shift: 10%;
}

.${ns}-noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}

@keyframes ${ns}-hidden-display {
	0% {
		opacity: 1;
		transform: scale(1);
		-webkit-transform: scale(1);
	}
	99% {
		display: inline-flex;
		opacity: 0;
		transform: scale(0);
		-webkit-transform: scale(0);
	}
	100% {
		display: none;
		opacity: 0;
		transform: scale(0);
		-webkit-transform: scale(0);
	}
}

.${ns}-hidden{
  animation: ${ns}-hidden-display .3s;
  animation-fill-mode:forwards;
  display: inline-flex;
}
`;

                const html = `
<svg id="${ns}" class="${ns}-noselect ${ns}-hidden" x="0px" y="0px" viewBox="0 0 80 80">
  <circle id="${ns}-bg" cx="50%" cy="50%" r="35"></circle>
  <path id="${ns}-fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
  <text id="${ns}-percent" x="50%" y="51%"><tspan id="${ns}-percent-value">0</tspan><tspan id="${ns}-percent-super">%</tspan></text>
</svg>
`;

                const update = percent => {
                    const max = -219.99078369140625;
                    const value = document.querySelector(
                        `#${ns}-percent-value`
                    );
                    const track = document.querySelector(`#${ns}-fill`);
                    const offset = ((100 - percent) / 100) * max;

                    track.setAttribute('style', `stroke-dashoffset: ${offset}`);
                    value.innerHTML = percent.toString();
                };

                const reset = svg => {
                    svg.classList.add(`${ns}-hidden`);
                    setTimeout(() => update(0), 1e3);
                };

                const init = (options, socket) => {
                    if (options.firstInstance) {
                        document.addEventListener('DOMContentLoaded', () => {
                            addCss(css);
                            addHtml(html);
                        });
                    }

                    socket.addEventListener('message', message => {
                        const {action, data} = JSON.parse(message.data);

                        if (action !== 'progress') {
                            return;
                        }

                        const percent = Math.floor(data.percent * 100);
                        const svg = document.querySelector(`#${ns}`);

                        if (!svg) {
                            return;
                        }

                        // we can safely call this even if it doesn't have the class
                        svg.classList.remove(`${ns}-hidden`);

                        if (data.percent === 1) {
                            setTimeout(() => reset(svg), 5e3);
                        }

                        update(percent);
                    });
                };

                module.exports = {init};

                /***/
            },

        /***/ './node_modules/webpack-plugin-serve/lib/client/overlays/status.js':
            /*!************************************************************!*\
  !*** (webpack)-plugin-serve/lib/client/overlays/status.js ***!
  \************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                /*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
                const {addCss, addHtml, socketMessage} = __webpack_require__(
                    /*! ./util */ './node_modules/webpack-plugin-serve/lib/client/overlays/util.js'
                );

                const ns = 'wps-status';
                const css = `
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

#${ns} {
  background: #282d35;
  border-radius: 0.6em;
  display: flex;
  flex-direction: column;
	font-family: 'Open Sans', Helvetica, Arial, sans-serif;
	font-size: 10px;
  height: 90%;
  min-height: 20em;
  left: 50%;
  opacity: 1;
  overflow: hidden;
  padding-bottom: 3em;
  position: absolute;
  top: 2rem;
  transform: translateX(-50%);
  transition: opacity .25s ease-in-out;
  width: 95%;
  z-index: 2147483645;
}

@keyframes ${ns}-hidden-display {
	0% {
		opacity: 1;
	}
	99% {
		display: inline-flex;
		opacity: 0;
	}
	100% {
		display: none;
		opacity: 0;
	}
}

#${ns}.${ns}-hidden {
  animation: ${ns}-hidden-display .3s;
  animation-fill-mode:forwards;
  display: none;
}

#${ns}.${ns}-min {
  animation: minimize 10s;
  bottom: 2em;
  cursor: pointer;
  height: 6em;
  left: auto;
  min-height: 6em;
  padding-bottom: 0;
  position: absolute;
  right: 2em;
  top: auto;
  transform: none;
  width: 6em;
}

#${ns}.${ns}-min #${ns}-beacon {
  display: block;
}

#${ns}-title {
  color: #fff;
  font-size: 1.2em;
  font-weight: normal;
  margin: 0;
  padding: 0.6em 0;
  text-align: center;
  width: 100%;
}

#${ns}.${ns}-min #${ns}-title {
  display: none;
}

#${ns}-title-errors {
  color: #ff5f58;
  font-style: normal;
  padding-left: 1em;
}

#${ns}-title-warnings {
  color: #ffbd2e;
  font-style: normal;
  padding-left: 1em;
}

#${ns}-problems {
  overflow-y: auto;
  padding: 1em 2em;
}

#${ns}-problems pre {
  color: #ddd;
  background: #282d35;
  display: block;
  font-size: 1.3em;
	font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  white-space: pre-wrap;
}

#${ns}-problems pre em {
  background: #ff5f58;
  border-radius: 0.3em;
  color: #641e16;
  font-style: normal;
  line-height: 3em;
  margin-right: 0.4em;
  padding: 0.1em 0.4em;
  text-transform: uppercase;
}

pre#${ns}-warnings em {
  background: #ffbd2e;
  color: #3e2723;
}

pre#${ns}-success {
  display: none;
  text-align: center;
}

pre#${ns}-success em {
  background: #7fb900;
  color: #004d40;
}

#${ns}-problems.${ns}-success #${ns}-success {
  display: block;
}

#${ns}.${ns}-min #${ns}-problems {
  display: none;
}

#${ns}-nav {
  opacity: 0.5;
  padding: 1.2em;
  position: absolute;
}

#${ns}.${ns}-min #${ns}-nav {
  display: none;
}

#${ns}-nav:hover {
  opacity: 1;
}

#${ns}-nav div {
  background: #ff5f58;
  border-radius: 1.2em;
  cursor: pointer;
  display: inline-block;
  height: 1.2em;
  position: relative;
  width: 1.2em;
}

div#${ns}-min {
  background: #ffbd2e;
  margin-left: 0.8em;
}

#${ns}-beacon {
  border-radius: 3em;
  display: none;
  font-size: 10px;
  height: 3em;
  margin: 1.6em auto;
  position: relative;
  width: 3em;
}

#${ns}-beacon:before, #${ns}-beacon:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(127,185,0, 0.2);
  border-radius: 3em;
  opacity: 0;
}

#${ns}-beacon:before {
  animation: ${ns}-pulse 3s infinite linear;
  transform: scale(1);
}

#${ns}-beacon:after {
  animation: ${ns}-pulse 3s 2s infinite linear;
}


@keyframes ${ns}-pulse {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  33% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}

#${ns}-beacon mark {
  background: rgba(127, 185, 0, 1);
  border-radius: 100% 100%;
  height: 1em;
  left: 1em;
  position: absolute;
  top: 1em;
  width: 1em;
}

#${ns}-beacon.${ns}-error mark {
  background: #ff5f58;
}

#${ns}-beacon.${ns}-error:before, #${ns}-beacon.error:after {
  background: rgba(255, 95, 88, 0.2);
}

#${ns}-beacon.${ns}-warning mark {
  background: #ffbd2e;
}

#${ns}-beacon.${ns}-warning:before, #${ns}-beacon.warning:after {
  background: rgba(255, 189, 46, 0.2);
}
`;

                const html = `
<aside id="${ns}" class="${ns}-hidden" title="build status">
  <figure id="${ns}-beacon">
    <mark/>
  </figure>
  <nav id="${ns}-nav">
    <div id="${ns}-close" title="close"></div>
    <div id="${ns}-min" title="minmize"></div>
  </nav>
  <h1 id="${ns}-title">
    build status
    <em id="${ns}-title-errors"></em>
    <em id="${ns}-title-warnings"></em>
  </h1>
  <article id="${ns}-problems">
    <pre id="${ns}-success"><em>Build Successful</em></pre>
    <pre id="${ns}-errors"></pre>
    <pre id="${ns}-warnings"></pre>
  </article>
</aside>
`;

                const init = (options, socket) => {
                    const hidden = `${ns}-hidden`;
                    let hasProblems = false;
                    let aside;
                    let beacon;
                    let problems;
                    let preErrors;
                    let preWarnings;
                    let titleErrors;
                    let titleWarnings;

                    const reset = () => {
                        preErrors.innerHTML = '';
                        preWarnings.innerHTML = '';
                        problems.classList.remove(`${ns}-success`);
                        beacon.className = '';
                        titleErrors.innerText = '';
                        titleWarnings.innerText = '';
                    };

                    const addErrors = errors => {
                        if (errors.length) {
                            problems.classList.remove(`${ns}-success`);
                            beacon.classList.add(`${ns}-error`);

                            for (const error of errors) {
                                const markup = `<div><em>Error</em> in ${error}</div>`;
                                addHtml(markup, preErrors);
                            }

                            titleErrors.innerText = `${errors.length} Error(s)`;
                        } else {
                            titleErrors.innerText = '';
                        }
                        aside.classList.remove(hidden);
                    };

                    const addWarnings = warnings => {
                        if (warnings.length) {
                            problems.classList.remove(`${ns}-success`);

                            if (!beacon.classList.contains(`${ns}-error`)) {
                                beacon.classList.add(`${ns}-warning`);
                            }

                            for (const warning of warnings) {
                                const markup = `<div><em>Warning</em> in ${warning}</div>`;
                                addHtml(markup, preWarnings);
                            }

                            titleWarnings.innerText = `${warnings.length} Warning(s)`;
                        } else {
                            titleWarnings.innerText = '';
                        }

                        aside.classList.remove(hidden);
                    };

                    if (options.firstInstance) {
                        document.addEventListener('DOMContentLoaded', () => {
                            addCss(css);
                            [aside] = addHtml(html);
                            beacon = document.querySelector(`#${ns}-beacon`);
                            problems = document.querySelector(
                                `#${ns}-problems`
                            );
                            preErrors = document.querySelector(`#${ns}-errors`);
                            preWarnings = document.querySelector(
                                `#${ns}-warnings`
                            );
                            titleErrors = document.querySelector(
                                `#${ns}-title-errors`
                            );
                            titleWarnings = document.querySelector(
                                `#${ns}-title-warnings`
                            );

                            const close = document.querySelector(
                                `#${ns}-close`
                            );
                            const min = document.querySelector(`#${ns}-min`);

                            aside.addEventListener('click', () => {
                                aside.classList.remove(`${ns}-min`);
                            });

                            close.addEventListener('click', () => {
                                aside.classList.add(`${ns}-hidden`);
                            });

                            min.addEventListener('click', e => {
                                aside.classList.add(`${ns}-min`);
                                e.stopImmediatePropagation();
                            });
                        });
                    }

                    socketMessage(socket, (action, data) => {
                        if (!aside) {
                            return;
                        }

                        const {compilers} = window.webpackPluginServe;

                        switch (action) {
                            case 'build':
                                // clear errors and warnings when a new build begins
                                reset();
                                break;
                            case 'problems':
                                addErrors(data.errors);
                                addWarnings(data.warnings);
                                aside.classList.remove(hidden);
                                hasProblems =
                                    data.errors.length || data.warnings.length;
                                break;
                            case 'replace':
                                // if there's a compiler that isn't done yet, hold off and let it run the show
                                for (const compilerName of Object.keys(
                                    compilers
                                )) {
                                    if (!compilers[compilerName]) {
                                        return;
                                    }
                                }

                                if (
                                    hasProblems &&
                                    !preErrors.children.length &&
                                    !preWarnings.children.length
                                ) {
                                    reset();
                                    hasProblems = false;
                                    problems.classList.add(`${ns}-success`);
                                    aside.classList.remove(hidden);

                                    setTimeout(
                                        () => aside.classList.add(hidden),
                                        3e3
                                    );
                                }
                                break;
                            default:
                        }
                    });
                };

                module.exports = {init};

                /***/
            },

        /***/ './node_modules/webpack-plugin-serve/lib/client/overlays/util.js':
            /*!**********************************************************!*\
  !*** (webpack)-plugin-serve/lib/client/overlays/util.js ***!
  \**********************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                /*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
                const addHtml = (html, parent) => {
                    const div = document.createElement('div');
                    const nodes = [];

                    div.innerHTML = html.trim();

                    while (div.firstChild) {
                        nodes.push(
                            (parent || document.body).appendChild(
                                div.firstChild
                            )
                        );
                    }

                    return nodes;
                };

                const addCss = css => {
                    const style = document.createElement('style');

                    style.type = 'text/css';

                    if (css.styleSheet) {
                        style.styleSheet.cssText = css;
                    } else {
                        style.appendChild(document.createTextNode(css));
                    }

                    // append the stylesheet for the svg
                    document.head.appendChild(style);
                };

                const socketMessage = (socket, handler) => {
                    socket.addEventListener('message', message => {
                        const {action, data = {}} = JSON.parse(message.data);
                        handler(action, data);
                    });
                };

                module.exports = {addCss, addHtml, socketMessage};

                /***/
            },

        /***/ 0:
            /*!*************************************************************!*\
  !*** multi ./src/demo/index.js webpack-plugin-serve/client ***!
  \*************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                !(function webpackMissingModule() {
                    var e = new Error(
                        "Cannot find module './src/demo/index.js'"
                    );
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
                module.exports = __webpack_require__(
                    /*! webpack-plugin-serve/client */ './node_modules/webpack-plugin-serve/client.js'
                );

                /***/
            },

        /******/
    }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX21wX2NvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFzaF9tcF9jb21wb25lbnRzLyh3ZWJwYWNrKS1wbHVnaW4tc2VydmUvY2xpZW50LmpzIiwid2VicGFjazovL2Rhc2hfbXBfY29tcG9uZW50cy8od2VicGFjayktcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvQ2xpZW50U29ja2V0LmpzIiwid2VicGFjazovL2Rhc2hfbXBfY29tcG9uZW50cy8od2VicGFjayktcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvY2xpZW50LmpzIiwid2VicGFjazovL2Rhc2hfbXBfY29tcG9uZW50cy8od2VicGFjayktcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvaG1yLmpzIiwid2VicGFjazovL2Rhc2hfbXBfY29tcG9uZW50cy8od2VicGFjayktcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvbG9nLmpzIiwid2VicGFjazovL2Rhc2hfbXBfY29tcG9uZW50cy8od2VicGFjayktcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvb3ZlcmxheXMvcHJvZ3Jlc3MtbWluaW1hbC5qcyIsIndlYnBhY2s6Ly9kYXNoX21wX2NvbXBvbmVudHMvKHdlYnBhY2spLXBsdWdpbi1zZXJ2ZS9saWIvY2xpZW50L292ZXJsYXlzL3Byb2dyZXNzLmpzIiwid2VicGFjazovL2Rhc2hfbXBfY29tcG9uZW50cy8od2VicGFjayktcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvb3ZlcmxheXMvc3RhdHVzLmpzIiwid2VicGFjazovL2Rhc2hfbXBfY29tcG9uZW50cy8od2VicGFjayktcGx1Z2luLXNlcnZlL2xpYi9jbGllbnQvb3ZlcmxheXMvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0Esa0JBQWtCLDhCQUE4QjtRQUNoRDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ1osZUFBZSxHQUFHO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRyxHQUFHLEdBQUcsR0FBRyxRQUFRLEdBQUc7QUFDdkI7QUFDQTs7QUFFQSxHQUFHLEdBQUc7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHO0FBQ3ZCO0FBQ0E7O0FBRUEsR0FBRyxHQUFHO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRyxHQUFHO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRyxHQUFHO0FBQ047QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLEdBQUc7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxHQUFHO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLE1BQU0sR0FBRztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRztBQUNwQztBQUNBOztBQUVBLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHO0FBQ3ZCO0FBQ0E7O0FBRUEsR0FBRyxHQUFHO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRyxHQUFHLEdBQUcsR0FBRyxRQUFRLEdBQUc7QUFDdkI7QUFDQTs7QUFFQSxHQUFHLEdBQUc7QUFDTjtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxHQUFHO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRyxHQUFHLG1CQUFtQixHQUFHO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOLGVBQWUsR0FBRztBQUNsQjtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOLGVBQWUsR0FBRztBQUNsQjs7O0FBR0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRyxHQUFHLFVBQVUsR0FBRztBQUNuQjtBQUNBOztBQUVBLEdBQUcsR0FBRyxVQUFVLEdBQUcsa0JBQWtCLEdBQUc7QUFDeEM7QUFDQTs7QUFFQSxHQUFHLEdBQUcsVUFBVSxHQUFHO0FBQ25CO0FBQ0E7O0FBRUEsR0FBRyxHQUFHLFVBQVUsR0FBRyxvQkFBb0IsR0FBRztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEdBQUcsV0FBVyxHQUFHO0FBQzlCLGdCQUFnQixHQUFHO0FBQ25CO0FBQ0E7QUFDQSxhQUFhLEdBQUc7QUFDaEIsZUFBZSxHQUFHO0FBQ2xCLGVBQWUsR0FBRztBQUNsQjtBQUNBLFlBQVksR0FBRztBQUNmO0FBQ0EsY0FBYyxHQUFHO0FBQ2pCLGNBQWMsR0FBRztBQUNqQjtBQUNBLGlCQUFpQixHQUFHO0FBQ3BCLGVBQWUsR0FBRztBQUNsQixlQUFlLEdBQUc7QUFDbEIsZUFBZSxHQUFHO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixHQUFHO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEdBQUc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxHQUFHO0FBQ3RDLDhCQUE4QixHQUFHOztBQUVqQztBQUNBLGlEQUFpRCxNQUFNO0FBQ3ZEO0FBQ0E7O0FBRUEsaUNBQWlDLGNBQWM7QUFDL0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsR0FBRzs7QUFFdEMsd0NBQXdDLEdBQUc7QUFDM0MsZ0NBQWdDLEdBQUc7QUFDbkM7O0FBRUE7QUFDQSxtREFBbUQsUUFBUTtBQUMzRDtBQUNBOztBQUVBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxHQUFHO0FBQzdDLDRDQUE0QyxHQUFHO0FBQy9DLDZDQUE2QyxHQUFHO0FBQ2hELCtDQUErQyxHQUFHO0FBQ2xELCtDQUErQyxHQUFHO0FBQ2xELGlEQUFpRCxHQUFHOztBQUVwRCwrQ0FBK0MsR0FBRztBQUNsRCw2Q0FBNkMsR0FBRzs7QUFFaEQ7QUFDQSxrQ0FBa0MsR0FBRztBQUNyQyxPQUFPOztBQUVQO0FBQ0EsK0JBQStCLEdBQUc7QUFDbEMsT0FBTzs7QUFFUDtBQUNBLCtCQUErQixHQUFHO0FBQ2xDO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLFlBQVk7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsR0FBRztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGtCQUFrQjs7Ozs7Ozs7Ozs7O0FDbFpsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQixFQUFFO0FBQy9CO0FBQ0EsR0FBRztBQUNIOztBQUVBLGtCQUFrQiIsImZpbGUiOiIuL291dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlZGFzaF9tcF9jb21wb25lbnRzXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZWRhc2hfbXBfY29tcG9uZW50c1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCI0Mzg0Yzg1LVwiICsgY2h1bmtJZCArIFwiLXdwcy1obXIuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCI0Mzg0Yzg1LXdwcy1obXIuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiODBjNWI3ZGFhMzcyZjFlNjQwYTRcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IFwibWFpblwiO1xuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoMCkoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKlxuICBDb3B5cmlnaHQgwqkgMjAxOCBBbmRyZXcgUG93ZWxsXG5cbiAgVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGlzIFNvdXJjZSBDb2RlIEZvcm0uXG4qL1xuXG4vKipcbiAqIEBub3RlIFRoaXMgZmlsZSBleGlzdHMgbWVyZWx5IGFzIGFuIGVhc3kgcmVmZXJlbmNlIGZvciBmb2xrcyBhZGRpbmcgaXQgdG8gdGhlaXIgY29uZmlndXJhdGlvbiBlbnRyaWVzXG4gKi9cblxuKCgpID0+IHtcbiAgLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbiAgY29uc3QgeyBydW4gfSA9IHJlcXVpcmUoJy4vbGliL2NsaWVudC9jbGllbnQnKTtcbiAgbGV0IGhhc2ggPSAnPHVua25vd24+JztcbiAgbGV0IG9wdGlvbnM7XG4gIHRyeSB7XG4gICAgb3B0aW9ucyA9IMqOyZDJucmUb3PHncqMybnHnXM7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zdCB7IGxvZyB9ID0gcmVxdWlyZSgnLi9saWIvY2xpZW50L2xvZycpO1xuICAgIGxvZy5lcnJvcihcbiAgICAgICdUaGUgZW50cnkgZm9yIHdlYnBhY2stcGx1Z2luLXNlcnZlIHdhcyBpbmNsdWRlZCBpbiB5b3VyIGJ1aWxkLCBidXQgaXQgZG9lcyBub3QgYXBwZWFyIHRoYXQgdGhlIHBsdWdpbiB3YXMuIFBsZWFzZSBjaGVjayB5b3VyIGNvbmZpZ3VyYXRpb24uJ1xuICAgICk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgICBoYXNoID0gX193ZWJwYWNrX2hhc2hfXztcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG4gIHJ1bihoYXNoLCBvcHRpb25zKTtcbn0pKCk7XG4iLCIvKlxuICBDb3B5cmlnaHQgwqkgMjAxOCBBbmRyZXcgUG93ZWxsXG5cbiAgVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGlzIFNvdXJjZSBDb2RlIEZvcm0uXG4qL1xuY29uc3QgeyBlcnJvciwgcmVmcmVzaCwgd2FybiB9ID0gcmVxdWlyZSgnLi9sb2cnKSgpO1xuXG4vLyBpZ25vcmUgMTAwOCAoSFRUUCA0MDAgZXF1aXZhbGVudCkgYW5kIDEwMTEgKEhUVFAgNTAwIGVxdWl2YWxlbnQpXG5jb25zdCBpZ25vcmVDb2RlcyA9IFsxMDA4LCAxMDExXTtcbmNvbnN0IG1heEF0dGVtcHRzID0gMTA7XG5cbmNsYXNzIENsaWVudFNvY2tldCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIC4uLmFyZ3MpIHtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIHRoaXMuYXR0ZW1wdHMgPSAwO1xuICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IFtdO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5yZXRyeWluZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaChhcmdzKTtcbiAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICBkZWxldGUgdGhpcy5zb2NrZXQ7XG4gICAgfVxuXG4gICAgdGhpcy5jb25uZWN0aW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCguLi50aGlzLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXRyeSkge1xuICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGlnbm9yZUNvZGVzLmluY2x1ZGVzKGV2ZW50LmNvZGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnJldHJ5aW5nKSB7XG4gICAgICAgICAgd2FybihgVGhlIFdlYlNvY2tldCB3YXMgY2xvc2VkIGFuZCB3aWxsIGF0dGVtcHQgdG8gcmVjb25uZWN0YCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlY29ubmVjdCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB3YXJuKGBUaGUgY2xpZW50IFdlYlNvY2tldCB3YXMgY2xvc2VkLiAke3JlZnJlc2h9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgIHRoaXMuYXR0ZW1wdHMgPSAwO1xuICAgICAgdGhpcy5yZXRyeWluZyA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZXZlbnRIYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgIGZvciAoY29uc3QgW25hbWUsIGZuXSBvZiB0aGlzLmV2ZW50SGFuZGxlcnMpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVjb25uZWN0KCkge1xuICAgIHRoaXMuYXR0ZW1wdHMgKz0gMTtcbiAgICB0aGlzLnJldHJ5aW5nID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmF0dGVtcHRzID4gbWF4QXR0ZW1wdHMpIHtcbiAgICAgIGVycm9yKGBUaGUgV2ViU29ja2V0IGNvdWxkIG5vdCBiZSByZWNvbm5lY3RlZC4gJHtyZWZyZXNofWApO1xuICAgICAgdGhpcy5yZXRyeWluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRpbWVvdXQgPSAxMDAwICogdGhpcy5hdHRlbXB0cyAqKiAyO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNvbm5lY3QodGhpcy5hcmdzKSwgdGltZW91dCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbLCBoYW5kbGVyXSA9IGFyZ3M7XG4gICAgdGhpcy5ldmVudEhhbmRsZXJzID0gdGhpcy5ldmVudEhhbmRsZXJzLmZpbHRlcigoWywgZm5dKSA9PiBmbiA9PT0gaGFuZGxlcik7XG4gICAgdGhpcy5zb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lciguLi5hcmdzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgQ2xpZW50U29ja2V0IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgwqkgMjAxOCBBbmRyZXcgUG93ZWxsXG5cbiAgVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGlzIFNvdXJjZSBDb2RlIEZvcm0uXG4qL1xuLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbmNvbnN0IHJ1biA9IChidWlsZEhhc2gsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgeyBhZGRyZXNzLCBjbGllbnQgPSB7fSwgcHJvZ3Jlc3MsIHNlY3VyZSwgc3RhdHVzIH0gPSBvcHRpb25zO1xuXG4gIG9wdGlvbnMuZmlyc3RJbnN0YW5jZSA9ICF3aW5kb3cud2VicGFja1BsdWdpblNlcnZlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgd2luZG93LndlYnBhY2tQbHVnaW5TZXJ2ZSA9IHdpbmRvdy53ZWJwYWNrUGx1Z2luU2VydmUgfHwge1xuICAgIGNvbXBpbGVyczoge31cbiAgfTtcbiAgd2luZG93LndlYnBhY2tQbHVnaW5TZXJ2ZS5zaWxlbnQgPSAhIWNsaWVudC5zaWxlbnQ7XG5cbiAgY29uc3QgeyBDbGllbnRTb2NrZXQgfSA9IHJlcXVpcmUoJy4vQ2xpZW50U29ja2V0Jyk7XG4gIGNvbnN0IHsgcmVwbGFjZSB9ID0gcmVxdWlyZSgnLi9obXInKTtcbiAgY29uc3QgeyBlcnJvciwgaW5mbywgd2FybiB9ID0gcmVxdWlyZSgnLi9sb2cnKSgpO1xuXG4gIGNvbnN0IHByb3RvY29sID0gc2VjdXJlID8gJ3dzcycgOiAnd3MnO1xuICBjb25zdCBzb2NrZXQgPSBuZXcgQ2xpZW50U29ja2V0KGNsaWVudCwgYCR7cHJvdG9jb2x9Oi8vJHtjbGllbnQuYWRkcmVzcyB8fCBhZGRyZXNzfS93cHNgKTtcblxuICBjb25zdCB7IGNvbXBpbGVyTmFtZSB9ID0gb3B0aW9ucztcblxuICB3aW5kb3cud2VicGFja1BsdWdpblNlcnZlLmNvbXBpbGVyc1tjb21waWxlck5hbWVdID0ge307XG5cbiAgLy8gcHJldmVudHMgRUNPTk5SRVNFVCBlcnJvcnMgb24gdGhlIHNlcnZlclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4gc29ja2V0LmNsb3NlKCkpO1xuXG4gIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCB7IGFjdGlvbiwgZGF0YSA9IHt9IH0gPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG4gICAgY29uc3QgeyBlcnJvcnMsIGhhc2ggPSAnPD8+Jywgd2FybmluZ3MgfSA9IGRhdGEgfHwge307XG4gICAgY29uc3Qgc2hvcnRIYXNoID0gaGFzaC5zbGljZSgwLCA3KTtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gb3B0aW9ucy5jb21waWxlck5hbWUgPyBgKENvbXBpbGVyOiAke29wdGlvbnMuY29tcGlsZXJOYW1lfSkgYCA6ICcnO1xuICAgIGNvbnN0IGNvbXBpbGVyID0gd2luZG93LndlYnBhY2tQbHVnaW5TZXJ2ZS5jb21waWxlcnNbY29tcGlsZXJOYW1lXTtcbiAgICBjb25zdCB7IHdwc0lkIH0gPSBkYXRhO1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2J1aWxkJzpcbiAgICAgICAgY29tcGlsZXIuZG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Nvbm5lY3RlZCc6XG4gICAgICAgIGluZm8oYFdlYlNvY2tldCBjb25uZWN0ZWQgJHtpZGVudGlmaWVyfWApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgICBjb21waWxlci5kb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcm9ibGVtcyc6XG4gICAgICAgIGlmIChkYXRhLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBlcnJvcihgJHtpZGVudGlmaWVyfUJ1aWxkICR7c2hvcnRIYXNofSBwcm9kdWNlZCBlcnJvcnM6XFxuYCwgZXJyb3JzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS53YXJuaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICB3YXJuKGAke2lkZW50aWZpZXJ9QnVpbGQgJHtzaG9ydEhhc2h9IHByb2R1Y2VkIHdhcm5pbmdzOlxcbmAsIHdhcm5pbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgLy8gYWN0aW9ucyB3aXRoIGEgd3BzSWQgaW4gdG93IGluZGljYXRlIGFjdGlvbnMgdGhhdCBzaG91bGQgb25seSBiZSBleGVjdXRlZCB3aGVuIHRoZSB3cHNJZCBzZW50XG4gICAgICAgIC8vIG1hdGNoZXMgdGhlIHdwc0lkIHNldCBpbiBvcHRpb25zLiB0aGlzIGlzIGhvdyB3ZSBjYW4gaWRlbnRpZnkgbXVsdGlwbGUgY29tcGlsZXJzIGluIHRoZVxuICAgICAgICAvLyBjbGllbnQuXG4gICAgICAgIGlmICh3cHNJZCAmJiB3cHNJZCA9PT0gb3B0aW9ucy53cHNJZCkge1xuICAgICAgICAgIHJlcGxhY2UoYnVpbGRIYXNoLCBoYXNoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9KTtcblxuICBpZiAob3B0aW9ucy5maXJzdEluc3RhbmNlKSB7XG4gICAgaWYgKHByb2dyZXNzID09PSAnbWluaW1hbCcpIHtcbiAgICAgIGNvbnN0IHsgaW5pdCB9ID0gcmVxdWlyZSgnLi9vdmVybGF5cy9wcm9ncmVzcy1taW5pbWFsJyk7XG4gICAgICBpbml0KG9wdGlvbnMsIHNvY2tldCk7XG4gICAgfSBlbHNlIGlmIChwcm9ncmVzcykge1xuICAgICAgY29uc3QgeyBpbml0IH0gPSByZXF1aXJlKCcuL292ZXJsYXlzL3Byb2dyZXNzJyk7XG4gICAgICBpbml0KG9wdGlvbnMsIHNvY2tldCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgY29uc3QgeyBpbml0IH0gPSByZXF1aXJlKCcuL292ZXJsYXlzL3N0YXR1cycpO1xuICAgICAgaW5pdChvcHRpb25zLCBzb2NrZXQpO1xuICAgIH1cblxuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICBpbmZvKCdIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGFjdGl2ZScpO1xuXG4gICAgICBpZiAob3B0aW9ucy5saXZlUmVsb2FkKSB7XG4gICAgICAgIGluZm8oJ0xpdmUgUmVsb2FkIHRha2luZyBwcmVjZWRlbmNlIG92ZXIgSG90IE1vZHVsZSBSZXBsYWNlbWVudCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKCdIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGluYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFtb2R1bGUuaG90ICYmIG9wdGlvbnMubGl2ZVJlbG9hZCkge1xuICAgICAgaW5mbygnTGl2ZSBSZWxvYWQgaXMgYWN0aXZlJyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcnVuIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgwqkgMjAxOCBBbmRyZXcgUG93ZWxsXG5cbiAgVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGlzIFNvdXJjZSBDb2RlIEZvcm0uXG4qL1xuY29uc3QgeyBlcnJvciwgaW5mbywgcmVmcmVzaCwgd2FybiB9ID0gcmVxdWlyZSgnLi9sb2cnKSgpO1xuXG5sZXQgbGF0ZXN0ID0gdHJ1ZTtcblxuY29uc3QgaG1yID0ge1xuICBvblVuYWNjZXB0ZWQoZGF0YSkge1xuICAgIHdhcm4oJ0NoYW5nZSBpbiB1bmFjY2VwdGVkIG1vZHVsZShzKTpcXG4nLCBkYXRhKTtcbiAgICB3YXJuKGRhdGEpO1xuICB9LFxuICBvbkRlY2xpbmVkKGRhdGEpIHtcbiAgICB3YXJuKCdDaGFuZ2UgaW4gZGVjbGluZWQgbW9kdWxlKHMpOlxcbicsIGRhdGEpO1xuICB9LFxuICBvbkVycm9yZWQoZGF0YSkge1xuICAgIGVycm9yKCdFcnJvciBpbiBtb2R1bGUocyk6XFxuJywgZGF0YSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlcGxhY2UgPSBhc3luYyAoYnVpbGRIYXNoLCBoYXNoKSA9PiB7XG4gIGNvbnN0IHsgYXBwbHksIGNoZWNrLCBzdGF0dXMgfSA9IG1vZHVsZS5ob3Q7XG5cbiAgaWYgKGhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBsYXRlc3QgPSBoYXNoLmluY2x1ZGVzKGJ1aWxkSGFzaCk7XG4gIH1cblxuICBpZiAoIWxhdGVzdCkge1xuICAgIGNvbnN0IGhtclN0YXR1cyA9IHN0YXR1cygpO1xuXG4gICAgaWYgKGhtclN0YXR1cyA9PT0gJ2Fib3J0JyB8fCBobXJTdGF0dXMgPT09ICdmYWlsJykge1xuICAgICAgd2FybihgQW4gSE1SIHVwZGF0ZSB3YXMgdHJpZ2dlcmVkLCBidXQgJHtobXJTdGF0dXN9ZWQuICR7cmVmcmVzaH1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbW9kdWxlcztcblxuICAgIHRyeSB7XG4gICAgICBtb2R1bGVzID0gYXdhaXQgY2hlY2soZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIG5vb3AuIHRoaXMgdHlwaWNhbGx5IGhhcHBlbnMgd2hlbiBhIE11bHRpQ29tcGlsZXIgaGFzIG1vcmUgdGhhbiBvbmUgY29tcGlsZXIgdGhhdCBpbmNsdWRlc1xuICAgICAgLy8gdGhpcyBzY3JpcHQsIGFuZCBhbiB1cGRhdGUgaGFwcGVucyB3aXRoIGEgaGFzaCB0aGF0IGlzbid0IHBhcnQgb2YgdGhlIGNvbXBpbGVyL21vZHVsZSB0aGlzXG4gICAgICAvLyBpbnN0YW5jZSB3YXMgbG9hZGVkIGZvci5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW1vZHVsZXMpIHtcbiAgICAgIHdhcm4oYE5vIG1vZHVsZXMgZm91bmQgZm9yIHJlcGxhY2VtZW50LiAke3JlZnJlc2h9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbW9kdWxlcyA9IGF3YWl0IGFwcGx5KGhtcik7XG5cbiAgICBpZiAobW9kdWxlcykge1xuICAgICAgbGF0ZXN0ID0gdHJ1ZTtcbiAgICAgIGluZm8oYEJ1aWxkICR7aGFzaC5zbGljZSgwLCA3KX0gcmVwbGFjZWQ6XFxuYCwgbW9kdWxlcyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVwbGFjZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IMKpIDIwMTggQW5kcmV3IFBvd2VsbFxuXG4gIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhpcyBTb3VyY2UgQ29kZSBGb3JtLlxuKi9cbmNvbnN0IHsgZXJyb3IsIGluZm8sIHdhcm4gfSA9IGNvbnNvbGU7XG5jb25zdCBsb2cgPSB7XG4gIGVycm9yOiBlcnJvci5iaW5kKGNvbnNvbGUsICfirKEgd3BzOicpLFxuICBpbmZvOiBpbmZvLmJpbmQoY29uc29sZSwgJ+KsoSB3cHM6JyksXG4gIHJlZnJlc2g6ICdQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZScsXG4gIHdhcm46IHdhcm4uYmluZChjb25zb2xlLCAn4qyhIHdwczonKVxufTtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbmNvbnN0IHNpbGVudCA9IHtcbiAgZXJyb3I6IG5vb3AsXG4gIGluZm86IG5vb3AsXG4gIHdhcm46IG5vb3Bcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gKHdpbmRvdy53ZWJwYWNrUGx1Z2luU2VydmUuc2lsZW50ID8gc2lsZW50IDogbG9nKTtcbiIsIi8qXG4gIENvcHlyaWdodCDCqSAyMDE4IEFuZHJldyBQb3dlbGwsIE1hdGhldXMgR29uw6dhbHZlcyBkYSBTaWx2YVxuXG4gIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhpcyBTb3VyY2UgQ29kZSBGb3JtLlxuKi9cbmNvbnN0IHsgYWRkQ3NzLCBhZGRIdG1sIH0gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgbnMgPSAnd3BzLXByb2dyZXNzLW1pbmltYWwnO1xuY29uc3QgaHRtbCA9IGBcbjxkaXYgaWQ9XCIke25zfVwiIGNsYXNzPVwiJHtuc30taGlkZGVuXCI+XG4gIDxkaXYgaWQ9XCIke25zfS1iYXJcIj48L2Rpdj5cbjwvZGl2PlxuYDtcbmNvbnN0IGNzcyA9IGBcbiMke25zfSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAyMTQ3NDgzNjQ1O1xufVxuXG4jJHtuc30tYmFyIHtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NiwgMjIzLCAxNzIpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dDtcbn1cblxuLiR7bnN9LWhpZGRlbntcbiAgZGlzcGxheTogbm9uZTtcbn1cbmA7XG5cbmNvbnN0IHVwZGF0ZSA9IChwZXJjZW50KSA9PiB7XG4gIGNvbnN0IGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS1iYXJgKTtcbiAgYmFyLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudH0lYDtcbn07XG5cbmNvbnN0IHJlc2V0ID0gKHdyYXBwZXIpID0+IHtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKGAke25zfS1oaWRkZW5gKTtcbiAgc2V0VGltZW91dCgoKSA9PiB1cGRhdGUoMCksIDFlMyk7XG59O1xuXG5jb25zdCBpbml0ID0gKG9wdGlvbnMsIHNvY2tldCkgPT4ge1xuICBpZiAob3B0aW9ucy5maXJzdEluc3RhbmNlKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgIGFkZEh0bWwoaHRtbCk7XG4gICAgICBhZGRDc3MoY3NzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCB7IGFjdGlvbiwgZGF0YSB9ID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xuXG4gICAgaWYgKGFjdGlvbiAhPT0gJ3Byb2dyZXNzJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKGRhdGEucGVyY2VudCAqIDEwMCk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfWApO1xuXG4gICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKGAke25zfS1oaWRkZW5gKTtcblxuICAgIGlmIChkYXRhLnBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQod3JhcHBlciksIDVlMyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHBlcmNlbnQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IMKpIDIwMTggQW5kcmV3IFBvd2VsbCwgTWF0aGV1cyBHb27Dp2FsdmVzIGRhIFNpbHZhXG5cbiAgVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGlzIFNvdXJjZSBDb2RlIEZvcm0uXG4qL1xuY29uc3QgeyBhZGRDc3MsIGFkZEh0bWwgfSA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5jb25zdCBucyA9ICd3cHMtcHJvZ3Jlc3MnO1xuY29uc3QgY3NzID0gYFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCcpO1xuXG4jJHtuc317XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG4gIHRvcDogNSU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMjE0NzQ4MzY0NTtcbn1cblxuIyR7bnN9LWJnIHtcbiAgZmlsbDogIzI4MmQzNTtcbn1cblxuIyR7bnN9LWZpbGwge1xuICBmaWxsOiByZ2JhKDAsIDAsIDAsIDApO1xuICBzdHJva2U6IHJnYigxODYsIDIyMywgMTcyKTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjE5Ljk5MDc4MzY5MTQwNjI1O1xuICBzdHJva2UtZGFzaG9mZnNldDogLTIxOS45OTA3ODM2OTE0MDYyNTtcbiAgc3Ryb2tlLXdpZHRoOiAxMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpdHJhbnNsYXRlKDBweCwgLTgwcHgpO1xuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAxcztcbn1cblxuIyR7bnN9LXBlcmNlbnQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZmlsbDogI2ZmZmZmZjtcbn1cblxuIyR7bnN9LXBlcmNlbnQtdmFsdWUge1xuICBkb21pbmFudC1iYXNlbGluZTogbWlkZGxlO1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xufVxuXG4jJHtuc30tcGVyY2VudC1zdXBlciB7XG4gIGZpbGw6ICNiZGMzYzc7XG4gIGZvbnQtc2l6ZTogLjQ1ZW07XG4gIGJhc2VsaW5lLXNoaWZ0OiAxMCU7XG59XG5cbi4ke25zfS1ub3NlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbkBrZXlmcmFtZXMgJHtuc30taGlkZGVuLWRpc3BsYXkge1xuXHQwJSB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcblx0fVxuXHQ5OSUge1xuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwKTtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG5cdH1cblx0MTAwJSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuXHR9XG59XG5cbi4ke25zfS1oaWRkZW57XG4gIGFuaW1hdGlvbjogJHtuc30taGlkZGVuLWRpc3BsYXkgLjNzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbmA7XG5cbmNvbnN0IGh0bWwgPSBgXG48c3ZnIGlkPVwiJHtuc31cIiBjbGFzcz1cIiR7bnN9LW5vc2VsZWN0ICR7bnN9LWhpZGRlblwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA4MCA4MFwiPlxuICA8Y2lyY2xlIGlkPVwiJHtuc30tYmdcIiBjeD1cIjUwJVwiIGN5PVwiNTAlXCIgcj1cIjM1XCI+PC9jaXJjbGU+XG4gIDxwYXRoIGlkPVwiJHtuc30tZmlsbFwiIGQ9XCJNNSw0MGEzNSwzNSAwIDEsMCA3MCwwYTM1LDM1IDAgMSwwIC03MCwwXCIgLz5cbiAgPHRleHQgaWQ9XCIke25zfS1wZXJjZW50XCIgeD1cIjUwJVwiIHk9XCI1MSVcIj48dHNwYW4gaWQ9XCIke25zfS1wZXJjZW50LXZhbHVlXCI+MDwvdHNwYW4+PHRzcGFuIGlkPVwiJHtuc30tcGVyY2VudC1zdXBlclwiPiU8L3RzcGFuPjwvdGV4dD5cbjwvc3ZnPlxuYDtcblxuY29uc3QgdXBkYXRlID0gKHBlcmNlbnQpID0+IHtcbiAgY29uc3QgbWF4ID0gLTIxOS45OTA3ODM2OTE0MDYyNTtcbiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuc30tcGVyY2VudC12YWx1ZWApO1xuICBjb25zdCB0cmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS1maWxsYCk7XG4gIGNvbnN0IG9mZnNldCA9ICgoMTAwIC0gcGVyY2VudCkgLyAxMDApICogbWF4O1xuXG4gIHRyYWNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgc3Ryb2tlLWRhc2hvZmZzZXQ6ICR7b2Zmc2V0fWApO1xuICB2YWx1ZS5pbm5lckhUTUwgPSBwZXJjZW50LnRvU3RyaW5nKCk7XG59O1xuXG5jb25zdCByZXNldCA9IChzdmcpID0+IHtcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoYCR7bnN9LWhpZGRlbmApO1xuICBzZXRUaW1lb3V0KCgpID0+IHVwZGF0ZSgwKSwgMWUzKTtcbn07XG5cbmNvbnN0IGluaXQgPSAob3B0aW9ucywgc29ja2V0KSA9PiB7XG4gIGlmIChvcHRpb25zLmZpcnN0SW5zdGFuY2UpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgYWRkQ3NzKGNzcyk7XG4gICAgICBhZGRIdG1sKGh0bWwpO1xuICAgIH0pO1xuICB9XG5cbiAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aW9uLCBkYXRhIH0gPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG5cbiAgICBpZiAoYWN0aW9uICE9PSAncHJvZ3Jlc3MnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGguZmxvb3IoZGF0YS5wZXJjZW50ICogMTAwKTtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuc31gKTtcblxuICAgIGlmICghc3ZnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gd2UgY2FuIHNhZmVseSBjYWxsIHRoaXMgZXZlbiBpZiBpdCBkb2Vzbid0IGhhdmUgdGhlIGNsYXNzXG4gICAgc3ZnLmNsYXNzTGlzdC5yZW1vdmUoYCR7bnN9LWhpZGRlbmApO1xuXG4gICAgaWYgKGRhdGEucGVyY2VudCA9PT0gMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNldChzdmcpLCA1ZTMpO1xuICAgIH1cblxuICAgIHVwZGF0ZShwZXJjZW50KTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgaW5pdCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IMKpIDIwMTggQW5kcmV3IFBvd2VsbFxuXG4gIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhpcyBTb3VyY2UgQ29kZSBGb3JtLlxuKi9cbmNvbnN0IHsgYWRkQ3NzLCBhZGRIdG1sLCBzb2NrZXRNZXNzYWdlIH0gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuY29uc3QgbnMgPSAnd3BzLXN0YXR1cyc7XG5jb25zdCBjc3MgPSBgXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwJyk7XG5cbiMke25zfSB7XG4gIGJhY2tncm91bmQ6ICMyODJkMzU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTBweDtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1pbi1oZWlnaHQ6IDIwZW07XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDNlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogOTUlO1xuICB6LWluZGV4OiAyMTQ3NDgzNjQ1O1xufVxuXG5Aa2V5ZnJhbWVzICR7bnN9LWhpZGRlbi1kaXNwbGF5IHtcblx0MCUge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0OTklIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cdDEwMCUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxufVxuXG4jJHtuc30uJHtuc30taGlkZGVuIHtcbiAgYW5pbWF0aW9uOiAke25zfS1oaWRkZW4tZGlzcGxheSAuM3M7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiMke25zfS4ke25zfS1taW4ge1xuICBhbmltYXRpb246IG1pbmltaXplIDEwcztcbiAgYm90dG9tOiAyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA2ZW07XG4gIGxlZnQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDZlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJlbTtcbiAgdG9wOiBhdXRvO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHdpZHRoOiA2ZW07XG59XG5cbiMke25zfS4ke25zfS1taW4gIyR7bnN9LWJlYWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jJHtuc30tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjZlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jJHtuc30uJHtuc30tbWluICMke25zfS10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiMke25zfS10aXRsZS1lcnJvcnMge1xuICBjb2xvcjogI2ZmNWY1ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuIyR7bnN9LXRpdGxlLXdhcm5pbmdzIHtcbiAgY29sb3I6ICNmZmJkMmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG5cbiMke25zfS1wcm9ibGVtcyB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFlbSAyZW07XG59XG5cbiMke25zfS1wcm9ibGVtcyBwcmUge1xuICBjb2xvcjogI2RkZDtcbiAgYmFja2dyb3VuZDogIzI4MmQzNTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4jJHtuc30tcHJvYmxlbXMgcHJlIGVtIHtcbiAgYmFja2dyb3VuZDogI2ZmNWY1ODtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIGNvbG9yOiAjNjQxZTE2O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzZW07XG4gIG1hcmdpbi1yaWdodDogMC40ZW07XG4gIHBhZGRpbmc6IDAuMWVtIDAuNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5wcmUjJHtuc30td2FybmluZ3MgZW0ge1xuICBiYWNrZ3JvdW5kOiAjZmZiZDJlO1xuICBjb2xvcjogIzNlMjcyMztcbn1cblxucHJlIyR7bnN9LXN1Y2Nlc3Mge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnByZSMke25zfS1zdWNjZXNzIGVtIHtcbiAgYmFja2dyb3VuZDogIzdmYjkwMDtcbiAgY29sb3I6ICMwMDRkNDA7XG59XG5cbiMke25zfS1wcm9ibGVtcy4ke25zfS1zdWNjZXNzICMke25zfS1zdWNjZXNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiMke25zfS4ke25zfS1taW4gIyR7bnN9LXByb2JsZW1zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuIyR7bnN9LW5hdiB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcGFkZGluZzogMS4yZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuIyR7bnN9LiR7bnN9LW1pbiAjJHtuc30tbmF2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuIyR7bnN9LW5hdjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiMke25zfS1uYXYgZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmNWY1ODtcbiAgYm9yZGVyLXJhZGl1czogMS4yZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEuMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxLjJlbTtcbn1cblxuZGl2IyR7bnN9LW1pbiB7XG4gIGJhY2tncm91bmQ6ICNmZmJkMmU7XG4gIG1hcmdpbi1sZWZ0OiAwLjhlbTtcbn1cblxuIyR7bnN9LWJlYWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBoZWlnaHQ6IDNlbTtcbiAgbWFyZ2luOiAxLjZlbSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzZW07XG59XG5cbiMke25zfS1iZWFjb246YmVmb3JlLCAjJHtuc30tYmVhY29uOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyNywxODUsMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBvcGFjaXR5OiAwO1xufVxuXG4jJHtuc30tYmVhY29uOmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogJHtuc30tcHVsc2UgM3MgaW5maW5pdGUgbGluZWFyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4jJHtuc30tYmVhY29uOmFmdGVyIHtcbiAgYW5pbWF0aW9uOiAke25zfS1wdWxzZSAzcyAycyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cblxuQGtleWZyYW1lcyAke25zfS1wdWxzZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgfVxuICAzMyUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxufVxuXG4jJHtuc30tYmVhY29uIG1hcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyNywgMTg1LCAwLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAxMDAlO1xuICBoZWlnaHQ6IDFlbTtcbiAgbGVmdDogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xuICB3aWR0aDogMWVtO1xufVxuXG4jJHtuc30tYmVhY29uLiR7bnN9LWVycm9yIG1hcmsge1xuICBiYWNrZ3JvdW5kOiAjZmY1ZjU4O1xufVxuXG4jJHtuc30tYmVhY29uLiR7bnN9LWVycm9yOmJlZm9yZSwgIyR7bnN9LWJlYWNvbi5lcnJvcjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA5NSwgODgsIDAuMik7XG59XG5cbiMke25zfS1iZWFjb24uJHtuc30td2FybmluZyBtYXJrIHtcbiAgYmFja2dyb3VuZDogI2ZmYmQyZTtcbn1cblxuIyR7bnN9LWJlYWNvbi4ke25zfS13YXJuaW5nOmJlZm9yZSwgIyR7bnN9LWJlYWNvbi53YXJuaW5nOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE4OSwgNDYsIDAuMik7XG59XG5gO1xuXG5jb25zdCBodG1sID0gYFxuPGFzaWRlIGlkPVwiJHtuc31cIiBjbGFzcz1cIiR7bnN9LWhpZGRlblwiIHRpdGxlPVwiYnVpbGQgc3RhdHVzXCI+XG4gIDxmaWd1cmUgaWQ9XCIke25zfS1iZWFjb25cIj5cbiAgICA8bWFyay8+XG4gIDwvZmlndXJlPlxuICA8bmF2IGlkPVwiJHtuc30tbmF2XCI+XG4gICAgPGRpdiBpZD1cIiR7bnN9LWNsb3NlXCIgdGl0bGU9XCJjbG9zZVwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCIke25zfS1taW5cIiB0aXRsZT1cIm1pbm1pemVcIj48L2Rpdj5cbiAgPC9uYXY+XG4gIDxoMSBpZD1cIiR7bnN9LXRpdGxlXCI+XG4gICAgYnVpbGQgc3RhdHVzXG4gICAgPGVtIGlkPVwiJHtuc30tdGl0bGUtZXJyb3JzXCI+PC9lbT5cbiAgICA8ZW0gaWQ9XCIke25zfS10aXRsZS13YXJuaW5nc1wiPjwvZW0+XG4gIDwvaDE+XG4gIDxhcnRpY2xlIGlkPVwiJHtuc30tcHJvYmxlbXNcIj5cbiAgICA8cHJlIGlkPVwiJHtuc30tc3VjY2Vzc1wiPjxlbT5CdWlsZCBTdWNjZXNzZnVsPC9lbT48L3ByZT5cbiAgICA8cHJlIGlkPVwiJHtuc30tZXJyb3JzXCI+PC9wcmU+XG4gICAgPHByZSBpZD1cIiR7bnN9LXdhcm5pbmdzXCI+PC9wcmU+XG4gIDwvYXJ0aWNsZT5cbjwvYXNpZGU+XG5gO1xuXG5jb25zdCBpbml0ID0gKG9wdGlvbnMsIHNvY2tldCkgPT4ge1xuICBjb25zdCBoaWRkZW4gPSBgJHtuc30taGlkZGVuYDtcbiAgbGV0IGhhc1Byb2JsZW1zID0gZmFsc2U7XG4gIGxldCBhc2lkZTtcbiAgbGV0IGJlYWNvbjtcbiAgbGV0IHByb2JsZW1zO1xuICBsZXQgcHJlRXJyb3JzO1xuICBsZXQgcHJlV2FybmluZ3M7XG4gIGxldCB0aXRsZUVycm9ycztcbiAgbGV0IHRpdGxlV2FybmluZ3M7XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcHJlRXJyb3JzLmlubmVySFRNTCA9ICcnO1xuICAgIHByZVdhcm5pbmdzLmlubmVySFRNTCA9ICcnO1xuICAgIHByb2JsZW1zLmNsYXNzTGlzdC5yZW1vdmUoYCR7bnN9LXN1Y2Nlc3NgKTtcbiAgICBiZWFjb24uY2xhc3NOYW1lID0gJyc7XG4gICAgdGl0bGVFcnJvcnMuaW5uZXJUZXh0ID0gJyc7XG4gICAgdGl0bGVXYXJuaW5ncy5pbm5lclRleHQgPSAnJztcbiAgfTtcblxuICBjb25zdCBhZGRFcnJvcnMgPSAoZXJyb3JzKSA9PiB7XG4gICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHByb2JsZW1zLmNsYXNzTGlzdC5yZW1vdmUoYCR7bnN9LXN1Y2Nlc3NgKTtcbiAgICAgIGJlYWNvbi5jbGFzc0xpc3QuYWRkKGAke25zfS1lcnJvcmApO1xuXG4gICAgICBmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuICAgICAgICBjb25zdCBtYXJrdXAgPSBgPGRpdj48ZW0+RXJyb3I8L2VtPiBpbiAke2Vycm9yfTwvZGl2PmA7XG4gICAgICAgIGFkZEh0bWwobWFya3VwLCBwcmVFcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICB0aXRsZUVycm9ycy5pbm5lclRleHQgPSBgJHtlcnJvcnMubGVuZ3RofSBFcnJvcihzKWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlRXJyb3JzLmlubmVyVGV4dCA9ICcnO1xuICAgIH1cbiAgICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbik7XG4gIH07XG5cbiAgY29uc3QgYWRkV2FybmluZ3MgPSAod2FybmluZ3MpID0+IHtcbiAgICBpZiAod2FybmluZ3MubGVuZ3RoKSB7XG4gICAgICBwcm9ibGVtcy5jbGFzc0xpc3QucmVtb3ZlKGAke25zfS1zdWNjZXNzYCk7XG5cbiAgICAgIGlmICghYmVhY29uLmNsYXNzTGlzdC5jb250YWlucyhgJHtuc30tZXJyb3JgKSkge1xuICAgICAgICBiZWFjb24uY2xhc3NMaXN0LmFkZChgJHtuc30td2FybmluZ2ApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IHdhcm5pbmcgb2Ygd2FybmluZ3MpIHtcbiAgICAgICAgY29uc3QgbWFya3VwID0gYDxkaXY+PGVtPldhcm5pbmc8L2VtPiBpbiAke3dhcm5pbmd9PC9kaXY+YDtcbiAgICAgICAgYWRkSHRtbChtYXJrdXAsIHByZVdhcm5pbmdzKTtcbiAgICAgIH1cblxuICAgICAgdGl0bGVXYXJuaW5ncy5pbm5lclRleHQgPSBgJHt3YXJuaW5ncy5sZW5ndGh9IFdhcm5pbmcocylgO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZVdhcm5pbmdzLmlubmVyVGV4dCA9ICcnO1xuICAgIH1cblxuICAgIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuKTtcbiAgfTtcblxuICBpZiAob3B0aW9ucy5maXJzdEluc3RhbmNlKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgIGFkZENzcyhjc3MpO1xuICAgICAgW2FzaWRlXSA9IGFkZEh0bWwoaHRtbCk7XG4gICAgICBiZWFjb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuc30tYmVhY29uYCk7XG4gICAgICBwcm9ibGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS1wcm9ibGVtc2ApO1xuICAgICAgcHJlRXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bnN9LWVycm9yc2ApO1xuICAgICAgcHJlV2FybmluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtuc30td2FybmluZ3NgKTtcbiAgICAgIHRpdGxlRXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bnN9LXRpdGxlLWVycm9yc2ApO1xuICAgICAgdGl0bGVXYXJuaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS10aXRsZS13YXJuaW5nc2ApO1xuXG4gICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25zfS1jbG9zZWApO1xuICAgICAgY29uc3QgbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bnN9LW1pbmApO1xuXG4gICAgICBhc2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZShgJHtuc30tbWluYCk7XG4gICAgICB9KTtcblxuICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoYCR7bnN9LWhpZGRlbmApO1xuICAgICAgfSk7XG5cbiAgICAgIG1pbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGFzaWRlLmNsYXNzTGlzdC5hZGQoYCR7bnN9LW1pbmApO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzb2NrZXRNZXNzYWdlKHNvY2tldCwgKGFjdGlvbiwgZGF0YSkgPT4ge1xuICAgIGlmICghYXNpZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbXBpbGVycyB9ID0gd2luZG93LndlYnBhY2tQbHVnaW5TZXJ2ZTtcblxuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICBjYXNlICdidWlsZCc6XG4gICAgICAgIC8vIGNsZWFyIGVycm9ycyBhbmQgd2FybmluZ3Mgd2hlbiBhIG5ldyBidWlsZCBiZWdpbnNcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcm9ibGVtcyc6XG4gICAgICAgIGFkZEVycm9ycyhkYXRhLmVycm9ycyk7XG4gICAgICAgIGFkZFdhcm5pbmdzKGRhdGEud2FybmluZ3MpO1xuICAgICAgICBhc2lkZS5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbik7XG4gICAgICAgIGhhc1Byb2JsZW1zID0gZGF0YS5lcnJvcnMubGVuZ3RoIHx8IGRhdGEud2FybmluZ3MubGVuZ3RoO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAvLyBpZiB0aGVyZSdzIGEgY29tcGlsZXIgdGhhdCBpc24ndCBkb25lIHlldCwgaG9sZCBvZmYgYW5kIGxldCBpdCBydW4gdGhlIHNob3dcbiAgICAgICAgZm9yIChjb25zdCBjb21waWxlck5hbWUgb2YgT2JqZWN0LmtleXMoY29tcGlsZXJzKSkge1xuICAgICAgICAgIGlmICghY29tcGlsZXJzW2NvbXBpbGVyTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzUHJvYmxlbXMgJiYgIXByZUVycm9ycy5jaGlsZHJlbi5sZW5ndGggJiYgIXByZVdhcm5pbmdzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgaGFzUHJvYmxlbXMgPSBmYWxzZTtcbiAgICAgICAgICBwcm9ibGVtcy5jbGFzc0xpc3QuYWRkKGAke25zfS1zdWNjZXNzYCk7XG4gICAgICAgICAgYXNpZGUuY2xhc3NMaXN0LnJlbW92ZShoaWRkZW4pO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhc2lkZS5jbGFzc0xpc3QuYWRkKGhpZGRlbiksIDNlMyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgaW5pdCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IMKpIDIwMTggQW5kcmV3IFBvd2VsbFxuXG4gIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAgTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhpcyBTb3VyY2UgQ29kZSBGb3JtLlxuKi9cbmNvbnN0IGFkZEh0bWwgPSAoaHRtbCwgcGFyZW50KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBub2RlcyA9IFtdO1xuXG4gIGRpdi5pbm5lckhUTUwgPSBodG1sLnRyaW0oKTtcblxuICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBub2Rlcy5wdXNoKChwYXJlbnQgfHwgZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpKTtcbiAgfVxuXG4gIHJldHVybiBub2Rlcztcbn07XG5cbmNvbnN0IGFkZENzcyA9IChjc3MpID0+IHtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChjc3Muc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxuXG4gIC8vIGFwcGVuZCB0aGUgc3R5bGVzaGVldCBmb3IgdGhlIHN2Z1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn07XG5cbmNvbnN0IHNvY2tldE1lc3NhZ2UgPSAoc29ja2V0LCBoYW5kbGVyKSA9PiB7XG4gIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCB7IGFjdGlvbiwgZGF0YSA9IHt9IH0gPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XG4gICAgaGFuZGxlcihhY3Rpb24sIGRhdGEpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBhZGRDc3MsIGFkZEh0bWwsIHNvY2tldE1lc3NhZ2UgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
