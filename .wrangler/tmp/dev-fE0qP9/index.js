var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// node_modules/unenv/dist/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(PerformanceEntry, "PerformanceEntry");
    PerformanceMark = /* @__PURE__ */ __name(class PerformanceMark2 extends PerformanceEntry {
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    }, "PerformanceMark");
    PerformanceMeasure = class extends PerformanceEntry {
      entryType = "measure";
    };
    __name(PerformanceMeasure, "PerformanceMeasure");
    PerformanceResourceTiming = class extends PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    __name(PerformanceResourceTiming, "PerformanceResourceTiming");
    PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    __name(PerformanceObserverEntryList, "PerformanceObserverEntryList");
    Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    __name(Performance, "Performance");
    PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    __name(PerformanceObserver, "PerformanceObserver");
    __publicField(PerformanceObserver, "supportedEntryTypes", []);
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
import { Socket } from "node:net";
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class extends Socket {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      isRaw = false;
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
      isTTY = false;
    };
    __name(ReadStream, "ReadStream");
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
import { Socket as Socket2 } from "node:net";
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class extends Socket2 {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      columns = 80;
      rows = 24;
      isTTY = false;
    };
    __name(WriteStream, "WriteStream");
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    Process = class extends EventEmitter {
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return "";
      }
      get versions() {
        return {};
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: () => 0 });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    __name(Process, "Process");
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/unenv/dist/runtime/npm/debug.mjs
var debug_exports = {};
__export(debug_exports, {
  default: () => debug_default
});
var noop2, debug3, debug_default;
var init_debug = __esm({
  "node_modules/unenv/dist/runtime/npm/debug.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop2 = /* @__PURE__ */ __name(() => {
    }, "noop");
    debug3 = /* @__PURE__ */ __name(() => console.debug, "debug");
    Object.assign(debug3, {
      default: debug3,
      coerce: noop2,
      disable: noop2,
      enable: noop2,
      enabled: noop2,
      extend: debug3,
      humanize: noop2,
      destroy: noop2,
      init: noop2,
      log: console.debug,
      formatArgs: noop2,
      save: noop2,
      load: noop2,
      useColors: noop2,
      colors: [],
      inspectOpts: {},
      names: [],
      skips: [],
      formatters: {},
      selectColors: noop2
    });
    debug_default = debug3;
  }
});

// node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs
var access, copyFile, cp, open, opendir, rename, truncate, rm, rmdir, mkdir, readdir, readlink, symlink, lstat, stat, link, unlink, chmod, lchmod, lchown, chown, utimes, lutimes, realpath, mkdtemp, writeFile, appendFile, readFile, watch, statfs, glob;
var init_promises = __esm({
  "node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    access = /* @__PURE__ */ notImplemented("fs.access");
    copyFile = /* @__PURE__ */ notImplemented("fs.copyFile");
    cp = /* @__PURE__ */ notImplemented("fs.cp");
    open = /* @__PURE__ */ notImplemented("fs.open");
    opendir = /* @__PURE__ */ notImplemented("fs.opendir");
    rename = /* @__PURE__ */ notImplemented("fs.rename");
    truncate = /* @__PURE__ */ notImplemented("fs.truncate");
    rm = /* @__PURE__ */ notImplemented("fs.rm");
    rmdir = /* @__PURE__ */ notImplemented("fs.rmdir");
    mkdir = /* @__PURE__ */ notImplemented("fs.mkdir");
    readdir = /* @__PURE__ */ notImplemented("fs.readdir");
    readlink = /* @__PURE__ */ notImplemented("fs.readlink");
    symlink = /* @__PURE__ */ notImplemented("fs.symlink");
    lstat = /* @__PURE__ */ notImplemented("fs.lstat");
    stat = /* @__PURE__ */ notImplemented("fs.stat");
    link = /* @__PURE__ */ notImplemented("fs.link");
    unlink = /* @__PURE__ */ notImplemented("fs.unlink");
    chmod = /* @__PURE__ */ notImplemented("fs.chmod");
    lchmod = /* @__PURE__ */ notImplemented("fs.lchmod");
    lchown = /* @__PURE__ */ notImplemented("fs.lchown");
    chown = /* @__PURE__ */ notImplemented("fs.chown");
    utimes = /* @__PURE__ */ notImplemented("fs.utimes");
    lutimes = /* @__PURE__ */ notImplemented("fs.lutimes");
    realpath = /* @__PURE__ */ notImplemented("fs.realpath");
    mkdtemp = /* @__PURE__ */ notImplemented("fs.mkdtemp");
    writeFile = /* @__PURE__ */ notImplemented("fs.writeFile");
    appendFile = /* @__PURE__ */ notImplemented("fs.appendFile");
    readFile = /* @__PURE__ */ notImplemented("fs.readFile");
    watch = /* @__PURE__ */ notImplemented("fs.watch");
    statfs = /* @__PURE__ */ notImplemented("fs.statfs");
    glob = /* @__PURE__ */ notImplemented("fs.glob");
  }
});

// node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs
var constants_exports = {};
__export(constants_exports, {
  COPYFILE_EXCL: () => COPYFILE_EXCL,
  COPYFILE_FICLONE: () => COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE: () => COPYFILE_FICLONE_FORCE,
  EXTENSIONLESS_FORMAT_JAVASCRIPT: () => EXTENSIONLESS_FORMAT_JAVASCRIPT,
  EXTENSIONLESS_FORMAT_WASM: () => EXTENSIONLESS_FORMAT_WASM,
  F_OK: () => F_OK,
  O_APPEND: () => O_APPEND,
  O_CREAT: () => O_CREAT,
  O_DIRECT: () => O_DIRECT,
  O_DIRECTORY: () => O_DIRECTORY,
  O_DSYNC: () => O_DSYNC,
  O_EXCL: () => O_EXCL,
  O_NOATIME: () => O_NOATIME,
  O_NOCTTY: () => O_NOCTTY,
  O_NOFOLLOW: () => O_NOFOLLOW,
  O_NONBLOCK: () => O_NONBLOCK,
  O_RDONLY: () => O_RDONLY,
  O_RDWR: () => O_RDWR,
  O_SYNC: () => O_SYNC,
  O_TRUNC: () => O_TRUNC,
  O_WRONLY: () => O_WRONLY,
  R_OK: () => R_OK,
  S_IFBLK: () => S_IFBLK,
  S_IFCHR: () => S_IFCHR,
  S_IFDIR: () => S_IFDIR,
  S_IFIFO: () => S_IFIFO,
  S_IFLNK: () => S_IFLNK,
  S_IFMT: () => S_IFMT,
  S_IFREG: () => S_IFREG,
  S_IFSOCK: () => S_IFSOCK,
  S_IRGRP: () => S_IRGRP,
  S_IROTH: () => S_IROTH,
  S_IRUSR: () => S_IRUSR,
  S_IRWXG: () => S_IRWXG,
  S_IRWXO: () => S_IRWXO,
  S_IRWXU: () => S_IRWXU,
  S_IWGRP: () => S_IWGRP,
  S_IWOTH: () => S_IWOTH,
  S_IWUSR: () => S_IWUSR,
  S_IXGRP: () => S_IXGRP,
  S_IXOTH: () => S_IXOTH,
  S_IXUSR: () => S_IXUSR,
  UV_DIRENT_BLOCK: () => UV_DIRENT_BLOCK,
  UV_DIRENT_CHAR: () => UV_DIRENT_CHAR,
  UV_DIRENT_DIR: () => UV_DIRENT_DIR,
  UV_DIRENT_FIFO: () => UV_DIRENT_FIFO,
  UV_DIRENT_FILE: () => UV_DIRENT_FILE,
  UV_DIRENT_LINK: () => UV_DIRENT_LINK,
  UV_DIRENT_SOCKET: () => UV_DIRENT_SOCKET,
  UV_DIRENT_UNKNOWN: () => UV_DIRENT_UNKNOWN,
  UV_FS_COPYFILE_EXCL: () => UV_FS_COPYFILE_EXCL,
  UV_FS_COPYFILE_FICLONE: () => UV_FS_COPYFILE_FICLONE,
  UV_FS_COPYFILE_FICLONE_FORCE: () => UV_FS_COPYFILE_FICLONE_FORCE,
  UV_FS_O_FILEMAP: () => UV_FS_O_FILEMAP,
  UV_FS_SYMLINK_DIR: () => UV_FS_SYMLINK_DIR,
  UV_FS_SYMLINK_JUNCTION: () => UV_FS_SYMLINK_JUNCTION,
  W_OK: () => W_OK,
  X_OK: () => X_OK
});
var UV_FS_SYMLINK_DIR, UV_FS_SYMLINK_JUNCTION, O_RDONLY, O_WRONLY, O_RDWR, UV_DIRENT_UNKNOWN, UV_DIRENT_FILE, UV_DIRENT_DIR, UV_DIRENT_LINK, UV_DIRENT_FIFO, UV_DIRENT_SOCKET, UV_DIRENT_CHAR, UV_DIRENT_BLOCK, EXTENSIONLESS_FORMAT_JAVASCRIPT, EXTENSIONLESS_FORMAT_WASM, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, UV_FS_O_FILEMAP, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOATIME, O_NOFOLLOW, O_SYNC, O_DSYNC, O_DIRECT, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, F_OK, R_OK, W_OK, X_OK, UV_FS_COPYFILE_EXCL, COPYFILE_EXCL, UV_FS_COPYFILE_FICLONE, COPYFILE_FICLONE, UV_FS_COPYFILE_FICLONE_FORCE, COPYFILE_FICLONE_FORCE;
var init_constants = __esm({
  "node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    UV_FS_SYMLINK_DIR = 1;
    UV_FS_SYMLINK_JUNCTION = 2;
    O_RDONLY = 0;
    O_WRONLY = 1;
    O_RDWR = 2;
    UV_DIRENT_UNKNOWN = 0;
    UV_DIRENT_FILE = 1;
    UV_DIRENT_DIR = 2;
    UV_DIRENT_LINK = 3;
    UV_DIRENT_FIFO = 4;
    UV_DIRENT_SOCKET = 5;
    UV_DIRENT_CHAR = 6;
    UV_DIRENT_BLOCK = 7;
    EXTENSIONLESS_FORMAT_JAVASCRIPT = 0;
    EXTENSIONLESS_FORMAT_WASM = 1;
    S_IFMT = 61440;
    S_IFREG = 32768;
    S_IFDIR = 16384;
    S_IFCHR = 8192;
    S_IFBLK = 24576;
    S_IFIFO = 4096;
    S_IFLNK = 40960;
    S_IFSOCK = 49152;
    O_CREAT = 64;
    O_EXCL = 128;
    UV_FS_O_FILEMAP = 0;
    O_NOCTTY = 256;
    O_TRUNC = 512;
    O_APPEND = 1024;
    O_DIRECTORY = 65536;
    O_NOATIME = 262144;
    O_NOFOLLOW = 131072;
    O_SYNC = 1052672;
    O_DSYNC = 4096;
    O_DIRECT = 16384;
    O_NONBLOCK = 2048;
    S_IRWXU = 448;
    S_IRUSR = 256;
    S_IWUSR = 128;
    S_IXUSR = 64;
    S_IRWXG = 56;
    S_IRGRP = 32;
    S_IWGRP = 16;
    S_IXGRP = 8;
    S_IRWXO = 7;
    S_IROTH = 4;
    S_IWOTH = 2;
    S_IXOTH = 1;
    F_OK = 0;
    R_OK = 4;
    W_OK = 2;
    X_OK = 1;
    UV_FS_COPYFILE_EXCL = 1;
    COPYFILE_EXCL = 1;
    UV_FS_COPYFILE_FICLONE = 2;
    COPYFILE_FICLONE = 2;
    UV_FS_COPYFILE_FICLONE_FORCE = 4;
    COPYFILE_FICLONE_FORCE = 4;
  }
});

// node_modules/unenv/dist/runtime/node/fs/promises.mjs
var promises_exports = {};
__export(promises_exports, {
  access: () => access,
  appendFile: () => appendFile,
  chmod: () => chmod,
  chown: () => chown,
  constants: () => constants_exports,
  copyFile: () => copyFile,
  cp: () => cp,
  default: () => promises_default,
  glob: () => glob,
  lchmod: () => lchmod,
  lchown: () => lchown,
  link: () => link,
  lstat: () => lstat,
  lutimes: () => lutimes,
  mkdir: () => mkdir,
  mkdtemp: () => mkdtemp,
  open: () => open,
  opendir: () => opendir,
  readFile: () => readFile,
  readdir: () => readdir,
  readlink: () => readlink,
  realpath: () => realpath,
  rename: () => rename,
  rm: () => rm,
  rmdir: () => rmdir,
  stat: () => stat,
  statfs: () => statfs,
  symlink: () => symlink,
  truncate: () => truncate,
  unlink: () => unlink,
  utimes: () => utimes,
  watch: () => watch,
  writeFile: () => writeFile
});
var promises_default;
var init_promises2 = __esm({
  "node_modules/unenv/dist/runtime/node/fs/promises.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises();
    init_constants();
    init_promises();
    promises_default = {
      constants: constants_exports,
      access,
      appendFile,
      chmod,
      chown,
      copyFile,
      cp,
      glob,
      lchmod,
      lchown,
      link,
      lstat,
      lutimes,
      mkdir,
      mkdtemp,
      open,
      opendir,
      readFile,
      readdir,
      readlink,
      realpath,
      rename,
      rm,
      rmdir,
      stat,
      statfs,
      symlink,
      truncate,
      unlink,
      utimes,
      watch,
      writeFile
    };
  }
});

// node_modules/@cloudflare/puppeteer/node_modules/ws/browser.js
var require_browser = __commonJS({
  "node_modules/@cloudflare/puppeteer/node_modules/ws/browser.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/generated/version.js
var packageVersion;
var init_version = __esm({
  "node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/generated/version.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    packageVersion = "1.0.2";
  }
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/node/NodeWebSocketTransport.js
var NodeWebSocketTransport_exports = {};
__export(NodeWebSocketTransport_exports, {
  NodeWebSocketTransport: () => NodeWebSocketTransport
});
var import_ws, NodeWebSocketTransport;
var init_NodeWebSocketTransport = __esm({
  "node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/node/NodeWebSocketTransport.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    import_ws = __toESM(require_browser(), 1);
    init_version();
    NodeWebSocketTransport = class {
      static create(url, headers) {
        return new Promise((resolve, reject) => {
          const ws = new import_ws.default(url, [], {
            followRedirects: true,
            perMessageDeflate: false,
            maxPayload: 256 * 1024 * 1024,
            // 256Mb
            headers: {
              "User-Agent": `Puppeteer ${packageVersion}`,
              ...headers
            }
          });
          ws.addEventListener("open", () => {
            return resolve(new NodeWebSocketTransport(ws));
          });
          ws.addEventListener("error", reject);
        });
      }
      #ws;
      onmessage;
      onclose;
      constructor(ws) {
        this.#ws = ws;
        this.#ws.addEventListener("message", (event) => {
          setImmediate(() => {
            if (this.onmessage) {
              this.onmessage.call(null, event.data);
            }
          });
        });
        this.#ws.addEventListener("close", () => {
          setImmediate(() => {
            if (this.onclose) {
              this.onclose.call(null);
            }
          });
        });
        this.#ws.addEventListener("error", () => {
        });
      }
      send(message) {
        this.#ws.send(message);
      }
      close() {
        this.#ws.close();
      }
    };
    __name(NodeWebSocketTransport, "NodeWebSocketTransport");
  }
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/BrowserWebSocketTransport.js
var BrowserWebSocketTransport_exports = {};
__export(BrowserWebSocketTransport_exports, {
  BrowserWebSocketTransport: () => BrowserWebSocketTransport
});
var BrowserWebSocketTransport;
var init_BrowserWebSocketTransport = __esm({
  "node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/BrowserWebSocketTransport.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    BrowserWebSocketTransport = class {
      static create(url) {
        return new Promise((resolve, reject) => {
          const ws = new WebSocket(url);
          ws.addEventListener("open", () => {
            return resolve(new BrowserWebSocketTransport(ws));
          });
          ws.addEventListener("error", reject);
        });
      }
      #ws;
      onmessage;
      onclose;
      constructor(ws) {
        this.#ws = ws;
        this.#ws.addEventListener("message", (event) => {
          if (this.onmessage) {
            this.onmessage.call(null, event.data);
          }
        });
        this.#ws.addEventListener("close", () => {
          if (this.onclose) {
            this.onclose.call(null);
          }
        });
        this.#ws.addEventListener("error", () => {
        });
      }
      send(message) {
        this.#ws.send(message);
      }
      close() {
        this.#ws.close();
      }
    };
    __name(BrowserWebSocketTransport, "BrowserWebSocketTransport");
  }
});

// .wrangler/tmp/bundle-Ox4we4/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-Ox4we4/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// workers/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/puppeteer-cloudflare.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/PuppeteerWorkers.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/globalPatcher.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
import { Buffer as Buffer2 } from "node:buffer";
globalThis.Buffer = Buffer2;

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Puppeteer.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/BrowserConnector.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/BrowserConnector.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/util.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
import { Buffer as Buffer3 } from "node:buffer";

// node_modules/@cloudflare/puppeteer/lib/esm/third_party/rxjs/rxjs.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var extendStatics = /* @__PURE__ */ __name(function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
}, "extendStatics");
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  __name(__, "__");
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
__name(__extends, "__extends");
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
__name(__awaiter, "__awaiter");
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
__name(__generator, "__generator");
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(__values, "__values");
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error3) {
    e = { error: error3 };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
__name(__read, "__read");
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
__name(__spreadArray, "__spreadArray");
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
__name(__await, "__await");
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  __name(awaitReturn, "awaitReturn");
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f)
        i[n] = f(i[n]);
    }
  }
  __name(verb, "verb");
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  __name(resume, "resume");
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
  __name(settle, "settle");
}
__name(__asyncGenerator, "__asyncGenerator");
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
  __name(settle, "settle");
}
__name(__asyncValues, "__asyncValues");
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function createErrorClass(createImpl) {
  var _super = /* @__PURE__ */ __name(function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  }, "_super");
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
__name(createErrorClass, "createErrorClass");
var UnsubscriptionError = createErrorClass(function(_super) {
  return /* @__PURE__ */ __name(function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  }, "UnsubscriptionErrorImpl");
});
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
__name(arrRemove, "arrRemove");
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  __name(Subscription2, "Subscription2");
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
__name(isSubscription, "isSubscription");
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
__name(execFinalizer, "execFinalizer");
var config2 = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
var timeoutProvider = {
  setTimeout: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout2], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config2.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}
__name(reportUnhandledError, "reportUnhandledError");
function noop() {
}
__name(noop, "noop");
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", void 0, void 0);
}();
function errorNotification(error3) {
  return createNotification("E", void 0, error3);
}
__name(errorNotification, "errorNotification");
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
__name(nextNotification, "nextNotification");
function createNotification(kind, value, error3) {
  return {
    kind,
    value,
    error: error3
  };
}
__name(createNotification, "createNotification");
var context2 = null;
function errorContext(cb) {
  if (config2.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context2;
    if (isRoot) {
      context2 = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a = context2, errorThrown = _a.errorThrown, error3 = _a.error;
      context2 = null;
      if (errorThrown) {
        throw error3;
      }
    }
  } else {
    cb();
  }
}
__name(errorContext, "errorContext");
function captureError(err) {
  if (config2.useDeprecatedSynchronousErrorHandling && context2) {
    context2.errorThrown = true;
    context2.error = err;
  }
}
__name(captureError, "captureError");
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  __name(Subscriber2, "Subscriber2");
  Subscriber2.create = function(next, error3, complete) {
    return new SafeSubscriber(next, error3, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
__name(bind, "bind");
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  __name(ConsumerObserver2, "ConsumerObserver2");
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error3) {
        handleUnhandledError(error3);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error3) {
        handleUnhandledError(error3);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error3) {
        handleUnhandledError(error3);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error3, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error3 !== null && error3 !== void 0 ? error3 : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config2.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  __name(SafeSubscriber2, "SafeSubscriber2");
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error3) {
  if (config2.useDeprecatedSynchronousErrorHandling) {
    captureError(error3);
  } else {
    reportUnhandledError(error3);
  }
}
__name(handleUnhandledError, "handleUnhandledError");
function defaultErrorHandler(err) {
  throw err;
}
__name(defaultErrorHandler, "defaultErrorHandler");
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config2.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
__name(handleStoppedNotification, "handleStoppedNotification");
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
function identity(x) {
  return x;
}
__name(identity, "identity");
function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
__name(pipe, "pipe");
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return /* @__PURE__ */ __name(function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  }, "piped");
}
__name(pipeFromArray, "pipeFromArray");
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  __name(Observable2, "Observable2");
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error3, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error3, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source2 = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source2) : source2 ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config2.Promise) !== null && _a !== void 0 ? _a : Promise;
}
__name(getPromiseCtor, "getPromiseCtor");
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
__name(isObserver, "isObserver");
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
__name(isSubscriber, "isSubscriber");
function hasLift(source2) {
  return isFunction(source2 === null || source2 === void 0 ? void 0 : source2.lift);
}
__name(hasLift, "hasLift");
function operate(init) {
  return function(source2) {
    if (hasLift(source2)) {
      return source2.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
__name(operate, "operate");
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
__name(createOperatorSubscriber, "createOperatorSubscriber");
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  __name(OperatorSubscriber2, "OperatorSubscriber2");
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return /* @__PURE__ */ __name(function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  }, "ObjectUnsubscribedErrorImpl");
});
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  __name(Subject2, "Subject2");
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source2) {
    return new AnonymousSubject(destination, source2);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source2) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source2;
    return _this;
  }
  __name(AnonymousSubject2, "AnonymousSubject2");
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);
var dateTimestampProvider = {
  now: function() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};
var ReplaySubject = function(_super) {
  __extends(ReplaySubject2, _super);
  function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === void 0) {
      _bufferSize = Infinity;
    }
    if (_windowTime === void 0) {
      _windowTime = Infinity;
    }
    if (_timestampProvider === void 0) {
      _timestampProvider = dateTimestampProvider;
    }
    var _this = _super.call(this) || this;
    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }
  __name(ReplaySubject2, "ReplaySubject2");
  ReplaySubject2.prototype.next = function(value) {
    var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    _super.prototype.next.call(this, value);
  };
  ReplaySubject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    var subscription = this._innerSubscribe(subscriber);
    var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
    var copy = _buffer.slice();
    for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  };
  ReplaySubject2.prototype._trimBuffer = function() {
    var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();
      var last2 = 0;
      for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last2 = i;
      }
      last2 && _buffer.splice(0, last2 + 1);
    }
  };
  return ReplaySubject2;
}(Subject);
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  __name(Action2, "Action2");
  Action2.prototype.schedule = function(state, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return this;
  };
  return Action2;
}(Subscription);
var intervalProvider = {
  setInterval: function(handler, timeout2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout2], __read(args)));
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout2], __read(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  __name(AsyncAction2, "AsyncAction2");
  AsyncAction2.prototype.schedule = function(state, delay2) {
    var _a;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay2);
    }
    this.pending = true;
    this.delay = delay2;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay2);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay2);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null && this.delay === delay2 && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state, delay2) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error3 = this._execute(state, delay2);
    if (error3) {
      return error3;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a = this, id = _a.id, scheduler = _a.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  __name(Scheduler2, "Scheduler2");
  Scheduler2.prototype.schedule = function(work, delay2, state) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay2);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  __name(AsyncScheduler2, "AsyncScheduler2");
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error3;
    this._active = true;
    do {
      if (error3 = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error3) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error3;
    }
  };
  return AsyncScheduler2;
}(Scheduler);
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});
function isScheduler(value) {
  return value && isFunction(value.schedule);
}
__name(isScheduler, "isScheduler");
function last(arr) {
  return arr[arr.length - 1];
}
__name(last, "last");
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}
__name(popScheduler, "popScheduler");
function popNumber(args, defaultValue) {
  return typeof last(args) === "number" ? args.pop() : defaultValue;
}
__name(popNumber, "popNumber");
var isArrayLike = /* @__PURE__ */ __name(function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
}, "isArrayLike");
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
__name(isPromise, "isPromise");
function isInteropObservable(input) {
  return isFunction(input[observable]);
}
__name(isInteropObservable, "isInteropObservable");
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
__name(isAsyncIterable, "isAsyncIterable");
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
__name(createInvalidObservableTypeError, "createInvalidObservableTypeError");
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
__name(getSymbolIterator, "getSymbolIterator");
var iterator = getSymbolIterator();
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
__name(isIterable, "isIterable");
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, /* @__PURE__ */ __name(function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          if (false)
            return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done)
            return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  }, "readableStreamLikeToAsyncGenerator_1"));
}
__name(readableStreamLikeToAsyncGenerator, "readableStreamLikeToAsyncGenerator");
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
__name(isReadableStreamLike, "isReadableStreamLike");
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
__name(innerFrom, "innerFrom");
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
__name(fromInteropObservable, "fromInteropObservable");
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
__name(fromArrayLike, "fromArrayLike");
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
__name(fromPromise, "fromPromise");
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
          _a.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
__name(fromIterable, "fromIterable");
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process2(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
__name(fromAsyncIterable, "fromAsyncIterable");
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
__name(fromReadableStreamLike, "fromReadableStreamLike");
function process2(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
__name(process2, "process");
function executeSchedule(parentSubscription, scheduler, work, delay2, repeat) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay2));
    } else {
      this.unsubscribe();
    }
  }, delay2);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}
__name(executeSchedule, "executeSchedule");
function observeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source2, subscriber) {
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay2);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay2);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay2);
    }));
  });
}
__name(observeOn, "observeOn");
function subscribeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source2, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source2.subscribe(subscriber);
    }, delay2));
  });
}
__name(subscribeOn, "subscribeOn");
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
__name(scheduleObservable, "scheduleObservable");
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
__name(schedulePromise, "schedulePromise");
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}
__name(scheduleArray, "scheduleArray");
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a;
        var value;
        var done;
        try {
          _a = iterator2.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    };
  });
}
__name(scheduleIterable, "scheduleIterable");
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}
__name(scheduleAsyncIterable, "scheduleAsyncIterable");
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
__name(scheduleReadableStreamLike, "scheduleReadableStreamLike");
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}
__name(scheduled, "scheduled");
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
__name(from, "from");
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}
__name(of, "of");
var EmptyError = createErrorClass(function(_super) {
  return /* @__PURE__ */ __name(function EmptyErrorImpl() {
    _super(this);
    this.name = "EmptyError";
    this.message = "no elements in sequence";
  }, "EmptyErrorImpl");
});
function firstValueFrom(source2, config22) {
  var hasConfig = typeof config22 === "object";
  return new Promise(function(resolve, reject) {
    var subscriber = new SafeSubscriber({
      next: function(value) {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: function() {
        if (hasConfig) {
          resolve(config22.defaultValue);
        } else {
          reject(new EmptyError());
        }
      }
    });
    source2.subscribe(subscriber);
  });
}
__name(firstValueFrom, "firstValueFrom");
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
__name(isValidDate, "isValidDate");
function map(project, thisArg) {
  return operate(function(source2, subscriber) {
    var index = 0;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}
__name(map, "map");
var isArray = Array.isArray;
function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
__name(callOrApply, "callOrApply");
function mapOneOrManyArgs(fn) {
  return map(function(args) {
    return callOrApply(fn, args);
  });
}
__name(mapOneOrManyArgs, "mapOneOrManyArgs");
var isArray2 = Array.isArray;
var objectProto = Object.prototype;
function mergeInternals(source2, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = /* @__PURE__ */ __name(function() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  }, "checkComplete");
  var outerNext = /* @__PURE__ */ __name(function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  }, "outerNext");
  var doInnerSub = /* @__PURE__ */ __name(function(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, void 0, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = /* @__PURE__ */ __name(function() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function() {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          }, "_loop_1");
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  }, "doInnerSub");
  source2.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}
__name(mergeInternals, "mergeInternals");
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a, i) {
      return map(function(b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source2, subscriber) {
    return mergeInternals(source2, subscriber, project, concurrent);
  });
}
__name(mergeMap, "mergeMap");
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  return mergeMap(identity, concurrent);
}
__name(mergeAll, "mergeAll");
function concatAll() {
  return mergeAll(1);
}
__name(concatAll, "concatAll");
function concat() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return concatAll()(from(args, popScheduler(args)));
}
__name(concat, "concat");
function defer(observableFactory) {
  return new Observable(function(subscriber) {
    innerFrom(observableFactory()).subscribe(subscriber);
  });
}
__name(defer, "defer");
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction(options)) {
    resultSelector = options;
    options = void 0;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
  }
  var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler, options);
    };
  }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
  if (!add) {
    if (isArrayLike(target)) {
      return mergeMap(function(subTarget) {
        return fromEvent(subTarget, eventName, options);
      })(innerFrom(target));
    }
  }
  if (!add) {
    throw new TypeError("Invalid event target");
  }
  return new Observable(function(subscriber) {
    var handler = /* @__PURE__ */ __name(function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return subscriber.next(1 < args.length ? args : args[0]);
    }, "handler");
    add(handler);
    return function() {
      return remove(handler);
    };
  });
}
__name(fromEvent, "fromEvent");
function toCommonHandlerRegistry(target, eventName) {
  return function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler);
    };
  };
}
__name(toCommonHandlerRegistry, "toCommonHandlerRegistry");
function isNodeStyleEventEmitter(target) {
  return isFunction(target.addListener) && isFunction(target.removeListener);
}
__name(isNodeStyleEventEmitter, "isNodeStyleEventEmitter");
function isJQueryStyleEventEmitter(target) {
  return isFunction(target.on) && isFunction(target.off);
}
__name(isJQueryStyleEventEmitter, "isJQueryStyleEventEmitter");
function isEventTarget(target) {
  return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
__name(isEventTarget, "isEventTarget");
function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
__name(timer, "timer");
function merge() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var concurrent = popNumber(args, Infinity);
  var sources = args;
  return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
__name(merge, "merge");
var NEVER = new Observable(noop);
var isArray3 = Array.isArray;
function argsOrArgArray(args) {
  return args.length === 1 && isArray3(args[0]) ? args[0] : args;
}
__name(argsOrArgArray, "argsOrArgArray");
function filter(predicate, thisArg) {
  return operate(function(source2, subscriber) {
    var index = 0;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}
__name(filter, "filter");
function race() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  sources = argsOrArgArray(sources);
  return sources.length === 1 ? innerFrom(sources[0]) : new Observable(raceInit(sources));
}
__name(race, "race");
function raceInit(sources) {
  return function(subscriber) {
    var subscriptions = [];
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      subscriptions.push(innerFrom(sources[i2]).subscribe(createOperatorSubscriber(subscriber, function(value) {
        if (subscriptions) {
          for (var s = 0; s < subscriptions.length; s++) {
            s !== i2 && subscriptions[s].unsubscribe();
          }
          subscriptions = null;
        }
        subscriber.next(value);
      })));
    }, "_loop_1");
    for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
      _loop_1(i);
    }
  };
}
__name(raceInit, "raceInit");
function catchError(selector) {
  return operate(function(source2, subscriber) {
    var innerSub = null;
    var syncUnsub = false;
    var handledResult;
    innerSub = source2.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
      handledResult = innerFrom(selector(err, catchError(selector)(source2)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}
__name(catchError, "catchError");
function defaultIfEmpty(defaultValue) {
  return operate(function(source2, subscriber) {
    var hasValue = false;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      hasValue = true;
      subscriber.next(value);
    }, function() {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }
      subscriber.complete();
    }));
  });
}
__name(defaultIfEmpty, "defaultIfEmpty");
function take(count3) {
  return count3 <= 0 ? function() {
    return EMPTY;
  } : operate(function(source2, subscriber) {
    var seen = 0;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      if (++seen <= count3) {
        subscriber.next(value);
        if (count3 <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}
__name(take, "take");
function ignoreElements() {
  return operate(function(source2, subscriber) {
    source2.subscribe(createOperatorSubscriber(subscriber, noop));
  });
}
__name(ignoreElements, "ignoreElements");
function throwIfEmpty(errorFactory) {
  if (errorFactory === void 0) {
    errorFactory = defaultErrorFactory;
  }
  return operate(function(source2, subscriber) {
    var hasValue = false;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      hasValue = true;
      subscriber.next(value);
    }, function() {
      return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
    }));
  });
}
__name(throwIfEmpty, "throwIfEmpty");
function defaultErrorFactory() {
  return new EmptyError();
}
__name(defaultErrorFactory, "defaultErrorFactory");
function first(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function(source2) {
    return source2.pipe(predicate ? filter(function(v, i) {
      return predicate(v, i, source2);
    }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function() {
      return new EmptyError();
    }));
  };
}
__name(first, "first");
function mergeScan(accumulator, seed, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  return operate(function(source2, subscriber) {
    var state = seed;
    return mergeInternals(source2, subscriber, function(value, index) {
      return accumulator(state, value, index);
    }, concurrent, function(value) {
      state = value;
    }, false, void 0, function() {
      return state = null;
    });
  });
}
__name(mergeScan, "mergeScan");
function raceWith() {
  var otherSources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }
  return !otherSources.length ? identity : operate(function(source2, subscriber) {
    raceInit(__spreadArray([source2], __read(otherSources)))(subscriber);
  });
}
__name(raceWith, "raceWith");
function retry(configOrCount) {
  if (configOrCount === void 0) {
    configOrCount = Infinity;
  }
  var config22;
  if (configOrCount && typeof configOrCount === "object") {
    config22 = configOrCount;
  } else {
    config22 = {
      count: configOrCount
    };
  }
  var _a = config22.count, count3 = _a === void 0 ? Infinity : _a, delay2 = config22.delay, _b = config22.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
  return count3 <= 0 ? identity : operate(function(source2, subscriber) {
    var soFar = 0;
    var innerSub;
    var subscribeForRetry = /* @__PURE__ */ __name(function() {
      var syncUnsub = false;
      innerSub = source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
        if (resetOnSuccess) {
          soFar = 0;
        }
        subscriber.next(value);
      }, void 0, function(err) {
        if (soFar++ < count3) {
          var resub_1 = /* @__PURE__ */ __name(function() {
            if (innerSub) {
              innerSub.unsubscribe();
              innerSub = null;
              subscribeForRetry();
            } else {
              syncUnsub = true;
            }
          }, "resub_1");
          if (delay2 != null) {
            var notifier = typeof delay2 === "number" ? timer(delay2) : innerFrom(delay2(err, soFar));
            var notifierSubscriber_1 = createOperatorSubscriber(subscriber, function() {
              notifierSubscriber_1.unsubscribe();
              resub_1();
            }, function() {
              subscriber.complete();
            });
            notifier.subscribe(notifierSubscriber_1);
          } else {
            resub_1();
          }
        } else {
          subscriber.error(err);
        }
      }));
      if (syncUnsub) {
        innerSub.unsubscribe();
        innerSub = null;
        subscribeForRetry();
      }
    }, "subscribeForRetry");
    subscribeForRetry();
  });
}
__name(retry, "retry");
function startWith() {
  var values = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }
  var scheduler = popScheduler(values);
  return operate(function(source2, subscriber) {
    (scheduler ? concat(values, source2, scheduler) : concat(values, source2)).subscribe(subscriber);
  });
}
__name(startWith, "startWith");
function switchMap(project, resultSelector) {
  return operate(function(source2, subscriber) {
    var innerSubscriber = null;
    var index = 0;
    var isComplete = false;
    var checkComplete = /* @__PURE__ */ __name(function() {
      return isComplete && !innerSubscriber && subscriber.complete();
    }, "checkComplete");
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      var innerIndex = 0;
      var outerIndex = index++;
      innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function() {
        innerSubscriber = null;
        checkComplete();
      }));
    }, function() {
      isComplete = true;
      checkComplete();
    }));
  });
}
__name(switchMap, "switchMap");
function takeUntil(notifier) {
  return operate(function(source2, subscriber) {
    innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function() {
      return subscriber.complete();
    }, noop));
    !subscriber.closed && source2.subscribe(subscriber);
  });
}
__name(takeUntil, "takeUntil");
function tap(observerOrNext, error3, complete) {
  var tapObserver = isFunction(observerOrNext) || error3 || complete ? { next: observerOrNext, error: error3, complete } : observerOrNext;
  return tapObserver ? operate(function(source2, subscriber) {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    var isUnsub = true;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var _a2;
      (_a2 = tapObserver.next) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, value);
      subscriber.next(value);
    }, function() {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.complete) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
      subscriber.complete();
    }, function(err) {
      var _a2;
      isUnsub = false;
      (_a2 = tapObserver.error) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, err);
      subscriber.error(err);
    }, function() {
      var _a2, _b;
      if (isUnsub) {
        (_a2 = tapObserver.unsubscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : identity;
}
__name(tap, "tap");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/assert.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var assert3 = /* @__PURE__ */ __name((value, message) => {
  if (!value) {
    throw new Error(message);
  }
}, "assert");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Debug.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/environment.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isNode = !!(typeof process !== "undefined" && process.version);

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Debug.js
var debugModule = null;
async function importDebug() {
  if (!debugModule) {
    debugModule = (await Promise.resolve().then(() => (init_debug(), debug_exports))).default;
  }
  return debugModule;
}
__name(importDebug, "importDebug");
var debug4 = /* @__PURE__ */ __name((prefix) => {
  if (isNode) {
    return async (...logArgs) => {
      if (captureLogs) {
        capturedLogs.push(prefix + logArgs);
      }
      (await importDebug())(prefix)(logArgs);
    };
  }
  return (...logArgs) => {
    const debugLevel = globalThis.__PUPPETEER_DEBUG;
    if (!debugLevel) {
      return;
    }
    const everythingShouldBeLogged = debugLevel === "*";
    const prefixMatchesDebugLevel = everythingShouldBeLogged || /**
     * If the debug level is `foo*`, that means we match any prefix that
     * starts with `foo`. If the level is `foo`, we match only the prefix
     * `foo`.
     */
    (debugLevel.endsWith("*") ? prefix.startsWith(debugLevel) : prefix === debugLevel);
    if (!prefixMatchesDebugLevel) {
      return;
    }
    console.log(`${prefix}:`, ...logArgs);
  };
}, "debug");
var capturedLogs = [];
var captureLogs = false;

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Errors.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var PuppeteerError = class extends Error {
  /**
   * @internal
   */
  constructor(message, options) {
    super(message, options);
    this.name = this.constructor.name;
  }
  /**
   * @internal
   */
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
__name(PuppeteerError, "PuppeteerError");
var TimeoutError = class extends PuppeteerError {
};
__name(TimeoutError, "TimeoutError");
var ProtocolError = class extends PuppeteerError {
  #code;
  #originalMessage = "";
  set code(code) {
    this.#code = code;
  }
  /**
   * @readonly
   * @public
   */
  get code() {
    return this.#code;
  }
  set originalMessage(originalMessage) {
    this.#originalMessage = originalMessage;
  }
  /**
   * @readonly
   * @public
   */
  get originalMessage() {
    return this.#originalMessage;
  }
};
__name(ProtocolError, "ProtocolError");
var UnsupportedOperation = class extends PuppeteerError {
};
__name(UnsupportedOperation, "UnsupportedOperation");
var TargetCloseError = class extends ProtocolError {
};
__name(TargetCloseError, "TargetCloseError");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/PDFOptions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var paperFormats = {
  letter: { width: 8.5, height: 11 },
  legal: { width: 8.5, height: 14 },
  tabloid: { width: 11, height: 17 },
  ledger: { width: 17, height: 11 },
  a0: { width: 33.1, height: 46.8 },
  a1: { width: 23.4, height: 33.1 },
  a2: { width: 16.54, height: 23.4 },
  a3: { width: 11.7, height: 16.54 },
  a4: { width: 8.27, height: 11.7 },
  a5: { width: 5.83, height: 8.27 },
  a6: { width: 4.13, height: 5.83 }
};

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/util.js
var debugError = debug4("puppeteer:error");
var DEFAULT_VIEWPORT = Object.freeze({ width: 800, height: 600 });
var SOURCE_URL = Symbol("Source URL for Puppeteer evaluation scripts");
var _functionName, _siteString;
var _PuppeteerURL = class {
  constructor() {
    __privateAdd(this, _functionName, void 0);
    __privateAdd(this, _siteString, void 0);
  }
  static fromCallSite(functionName, site) {
    const url = new _PuppeteerURL();
    __privateSet(url, _functionName, functionName);
    __privateSet(url, _siteString, site.toString());
    return url;
  }
  get functionName() {
    return __privateGet(this, _functionName);
  }
  get siteString() {
    return __privateGet(this, _siteString);
  }
  toString() {
    return `pptr:${[
      __privateGet(this, _functionName),
      encodeURIComponent(__privateGet(this, _siteString))
    ].join(";")}`;
  }
};
var PuppeteerURL = _PuppeteerURL;
__name(PuppeteerURL, "PuppeteerURL");
_functionName = new WeakMap();
_siteString = new WeakMap();
__publicField(PuppeteerURL, "INTERNAL_URL", "pptr:internal");
__publicField(PuppeteerURL, "parse", (url) => {
  url = url.slice("pptr:".length);
  const [functionName = "", siteString = ""] = url.split(";");
  const puppeteerUrl = new _PuppeteerURL();
  __privateSet(puppeteerUrl, _functionName, functionName);
  __privateSet(puppeteerUrl, _siteString, decodeURIComponent(siteString));
  return puppeteerUrl;
});
__publicField(PuppeteerURL, "isPuppeteerURL", (url) => {
  return url.startsWith("pptr:");
});
var withSourcePuppeteerURLIfNone = /* @__PURE__ */ __name((functionName, object) => {
  if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
    return object;
  }
  const original = Error.prepareStackTrace;
  Error.prepareStackTrace = (_, stack) => {
    return stack[2];
  };
  const site = new Error().stack;
  Error.prepareStackTrace = original;
  return Object.assign(object, {
    [SOURCE_URL]: PuppeteerURL.fromCallSite(functionName, site)
  });
}, "withSourcePuppeteerURLIfNone");
var getSourcePuppeteerURLIfAvailable = /* @__PURE__ */ __name((object) => {
  if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
    return object[SOURCE_URL];
  }
  return void 0;
}, "getSourcePuppeteerURLIfAvailable");
var isString = /* @__PURE__ */ __name((obj) => {
  return typeof obj === "string" || obj instanceof String;
}, "isString");
var isNumber = /* @__PURE__ */ __name((obj) => {
  return typeof obj === "number" || obj instanceof Number;
}, "isNumber");
function evaluationString(fun, ...args) {
  if (isString(fun)) {
    assert3(args.length === 0, "Cannot evaluate a string with arguments");
    return fun;
  }
  function serializeArgument(arg) {
    if (Object.is(arg, void 0)) {
      return "undefined";
    }
    return JSON.stringify(arg);
  }
  __name(serializeArgument, "serializeArgument");
  const script = `(${fun})(${args.map(serializeArgument).join(",")})`;
  return globalThis.navigator?.userAgent === "Cloudflare-Workers" ? `((__name => (${script}))(t => t))` : script;
}
__name(evaluationString, "evaluationString");
var fs = null;
async function importFSPromises() {
  if (!fs) {
    try {
      fs = await Promise.resolve().then(() => (init_promises2(), promises_exports));
    } catch (error3) {
      if (error3 instanceof TypeError) {
        throw new Error("Cannot write to a path outside of a Node-like environment. fs");
      }
      throw error3;
    }
  }
  return fs;
}
__name(importFSPromises, "importFSPromises");
async function getReadableAsBuffer(readable, path) {
  const buffers = [];
  const reader = readable.getReader();
  if (path) {
    throw new Error("Cannot write to a path outside of a Node-like environment.");
  } else {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      buffers.push(value);
    }
  }
  try {
    return Buffer3.concat(buffers);
  } catch (error3) {
    debugError(error3);
    return null;
  }
}
__name(getReadableAsBuffer, "getReadableAsBuffer");
async function getReadableFromProtocolStream(client, handle) {
  return new ReadableStream({
    async pull(controller) {
      function getUnit8Array(data2, isBase64) {
        if (isBase64) {
          return Uint8Array.from(atob(data2), (m) => {
            return m.codePointAt(0);
          });
        }
        const encoder = new TextEncoder();
        return encoder.encode(data2);
      }
      __name(getUnit8Array, "getUnit8Array");
      const { data, base64Encoded, eof } = await client.send("IO.read", {
        handle
      });
      controller.enqueue(getUnit8Array(data, base64Encoded ?? false));
      if (eof) {
        await client.send("IO.close", { handle });
        controller.close();
      }
    }
  });
}
__name(getReadableFromProtocolStream, "getReadableFromProtocolStream");
function validateDialogType(type) {
  let dialogType = null;
  const validDialogTypes = /* @__PURE__ */ new Set([
    "alert",
    "confirm",
    "prompt",
    "beforeunload"
  ]);
  if (validDialogTypes.has(type)) {
    dialogType = type;
  }
  assert3(dialogType, `Unknown javascript dialog type: ${type}`);
  return dialogType;
}
__name(validateDialogType, "validateDialogType");
function timeout(ms, cause) {
  return ms === 0 ? NEVER : timer(ms).pipe(map(() => {
    throw new TimeoutError(`Timed out after waiting ${ms}ms`, { cause });
  }));
}
__name(timeout, "timeout");
var UTILITY_WORLD_NAME = "__puppeteer_utility_world__";
var SOURCE_URL_REGEX = /^[\040\t]*\/\/[@#] sourceURL=\s*(\S*?)\s*$/m;
function getSourceUrlComment(url) {
  return `//# sourceURL=${url}`;
}
__name(getSourceUrlComment, "getSourceUrlComment");
var NETWORK_IDLE_TIME = 500;
function parsePDFOptions(options = {}, lengthUnit = "in") {
  const defaults = {
    scale: 1,
    displayHeaderFooter: false,
    headerTemplate: "",
    footerTemplate: "",
    printBackground: false,
    landscape: false,
    pageRanges: "",
    preferCSSPageSize: false,
    omitBackground: false,
    outline: false,
    tagged: true
  };
  let width = 8.5;
  let height = 11;
  if (options.format) {
    const format = paperFormats[options.format.toLowerCase()];
    assert3(format, "Unknown paper format: " + options.format);
    width = format.width;
    height = format.height;
  } else {
    width = convertPrintParameterToInches(options.width, lengthUnit) ?? width;
    height = convertPrintParameterToInches(options.height, lengthUnit) ?? height;
  }
  const margin = {
    top: convertPrintParameterToInches(options.margin?.top, lengthUnit) || 0,
    left: convertPrintParameterToInches(options.margin?.left, lengthUnit) || 0,
    bottom: convertPrintParameterToInches(options.margin?.bottom, lengthUnit) || 0,
    right: convertPrintParameterToInches(options.margin?.right, lengthUnit) || 0
  };
  if (options.outline) {
    options.tagged = true;
  }
  return {
    ...defaults,
    ...options,
    width,
    height,
    margin
  };
}
__name(parsePDFOptions, "parsePDFOptions");
var unitToPixels = {
  px: 1,
  in: 96,
  cm: 37.8,
  mm: 3.78
};
function convertPrintParameterToInches(parameter, lengthUnit = "in") {
  if (typeof parameter === "undefined") {
    return void 0;
  }
  let pixels;
  if (isNumber(parameter)) {
    pixels = parameter;
  } else if (isString(parameter)) {
    const text = parameter;
    let unit = text.substring(text.length - 2).toLowerCase();
    let valueText = "";
    if (unit in unitToPixels) {
      valueText = text.substring(0, text.length - 2);
    } else {
      unit = "px";
      valueText = text;
    }
    const value = Number(valueText);
    assert3(!isNaN(value), "Failed to parse parameter value: " + text);
    pixels = value * unitToPixels[unit];
  } else {
    throw new Error("page.pdf() Cannot handle parameter type: " + typeof parameter);
  }
  return pixels / unitToPixels[lengthUnit];
}
__name(convertPrintParameterToInches, "convertPrintParameterToInches");
function fromEmitterEvent(emitter, eventName) {
  return new Observable((subscriber) => {
    const listener = /* @__PURE__ */ __name((event) => {
      subscriber.next(event);
    }, "listener");
    emitter.on(eventName, listener);
    return () => {
      emitter.off(eventName, listener);
    };
  });
}
__name(fromEmitterEvent, "fromEmitterEvent");
function filterAsync(predicate) {
  return mergeMap((value) => {
    return from(Promise.resolve(predicate(value))).pipe(filter((isMatch) => {
      return isMatch;
    }), map(() => {
      return value;
    }));
  });
}
__name(filterAsync, "filterAsync");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Browser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/EventEmitter.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/third_party/mitt/mitt.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function mitt_default(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
__name(mitt_default, "mitt_default");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/disposable.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
Symbol.dispose ??= Symbol("dispose");
Symbol.asyncDispose ??= Symbol("asyncDispose");
var disposeSymbol = Symbol.dispose;
var asyncDisposeSymbol = Symbol.asyncDispose;
var DisposableStack = class {
  #disposed = false;
  #stack = [];
  /**
   * Returns a value indicating whether this stack has been disposed.
   */
  get disposed() {
    return this.#disposed;
  }
  /**
   * Disposes each resource in the stack in the reverse order that they were added.
   */
  dispose() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    for (const resource of this.#stack.reverse()) {
      resource[disposeSymbol]();
    }
  }
  /**
   * Adds a disposable resource to the stack, returning the resource.
   *
   * @param value - The resource to add. `null` and `undefined` will not be added,
   * but will be returned.
   * @returns The provided `value`.
   */
  use(value) {
    if (value) {
      this.#stack.push(value);
    }
    return value;
  }
  /**
   * Adds a value and associated disposal callback as a resource to the stack.
   *
   * @param value - The value to add.
   * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
   * method. Will be invoked with `value` as the first parameter.
   * @returns The provided `value`.
   */
  adopt(value, onDispose) {
    this.#stack.push({
      [disposeSymbol]() {
        onDispose(value);
      }
    });
    return value;
  }
  /**
   * Adds a callback to be invoked when the stack is disposed.
   */
  defer(onDispose) {
    this.#stack.push({
      [disposeSymbol]() {
        onDispose();
      }
    });
  }
  /**
   * Move all resources out of this stack and into a new `DisposableStack`, and
   * marks this stack as disposed.
   *
   * @example
   *
   * ```ts
   * class C {
   *   #res1: Disposable;
   *   #res2: Disposable;
   *   #disposables: DisposableStack;
   *   constructor() {
   *     // stack will be disposed when exiting constructor for any reason
   *     using stack = new DisposableStack();
   *
   *     // get first resource
   *     this.#res1 = stack.use(getResource1());
   *
   *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
   *     this.#res2 = stack.use(getResource2());
   *
   *     // all operations succeeded, move resources out of `stack` so that
   *     // they aren't disposed when constructor exits
   *     this.#disposables = stack.move();
   *   }
   *
   *   [disposeSymbol]() {
   *     this.#disposables.dispose();
   *   }
   * }
   * ```
   */
  move() {
    if (this.#disposed) {
      throw new ReferenceError("a disposed stack can not use anything new");
    }
    const stack = new DisposableStack();
    stack.#stack = this.#stack;
    this.#disposed = true;
    return stack;
  }
  [disposeSymbol] = this.dispose;
  [Symbol.toStringTag] = "DisposableStack";
};
__name(DisposableStack, "DisposableStack");
var AsyncDisposableStack = class {
  #disposed = false;
  #stack = [];
  /**
   * Returns a value indicating whether this stack has been disposed.
   */
  get disposed() {
    return this.#disposed;
  }
  /**
   * Disposes each resource in the stack in the reverse order that they were added.
   */
  async dispose() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    for (const resource of this.#stack.reverse()) {
      await resource[asyncDisposeSymbol]();
    }
  }
  /**
   * Adds a disposable resource to the stack, returning the resource.
   *
   * @param value - The resource to add. `null` and `undefined` will not be added,
   * but will be returned.
   * @returns The provided `value`.
   */
  use(value) {
    if (value) {
      this.#stack.push(value);
    }
    return value;
  }
  /**
   * Adds a value and associated disposal callback as a resource to the stack.
   *
   * @param value - The value to add.
   * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
   * method. Will be invoked with `value` as the first parameter.
   * @returns The provided `value`.
   */
  adopt(value, onDispose) {
    this.#stack.push({
      [asyncDisposeSymbol]() {
        return onDispose(value);
      }
    });
    return value;
  }
  /**
   * Adds a callback to be invoked when the stack is disposed.
   */
  defer(onDispose) {
    this.#stack.push({
      [asyncDisposeSymbol]() {
        return onDispose();
      }
    });
  }
  /**
   * Move all resources out of this stack and into a new `DisposableStack`, and
   * marks this stack as disposed.
   *
   * @example
   *
   * ```ts
   * class C {
   *   #res1: Disposable;
   *   #res2: Disposable;
   *   #disposables: DisposableStack;
   *   constructor() {
   *     // stack will be disposed when exiting constructor for any reason
   *     using stack = new DisposableStack();
   *
   *     // get first resource
   *     this.#res1 = stack.use(getResource1());
   *
   *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
   *     this.#res2 = stack.use(getResource2());
   *
   *     // all operations succeeded, move resources out of `stack` so that
   *     // they aren't disposed when constructor exits
   *     this.#disposables = stack.move();
   *   }
   *
   *   [disposeSymbol]() {
   *     this.#disposables.dispose();
   *   }
   * }
   * ```
   */
  move() {
    if (this.#disposed) {
      throw new ReferenceError("a disposed stack can not use anything new");
    }
    const stack = new AsyncDisposableStack();
    stack.#stack = this.#stack;
    this.#disposed = true;
    return stack;
  }
  [asyncDisposeSymbol] = this.dispose;
  [Symbol.toStringTag] = "AsyncDisposableStack";
};
__name(AsyncDisposableStack, "AsyncDisposableStack");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/EventEmitter.js
var EventEmitter2 = class {
  #emitter;
  #handlers = /* @__PURE__ */ new Map();
  /**
   * If you pass an emitter, the returned emitter will wrap the passed emitter.
   *
   * @internal
   */
  constructor(emitter = mitt_default(/* @__PURE__ */ new Map())) {
    this.#emitter = emitter;
  }
  /**
   * Bind an event listener to fire when an event occurs.
   * @param type - the event type you'd like to listen to. Can be a string or symbol.
   * @param handler - the function to be called when the event occurs.
   * @returns `this` to enable you to chain method calls.
   */
  on(type, handler) {
    const handlers = this.#handlers.get(type);
    if (handlers === void 0) {
      this.#handlers.set(type, [handler]);
    } else {
      handlers.push(handler);
    }
    this.#emitter.on(type, handler);
    return this;
  }
  /**
   * Remove an event listener from firing.
   * @param type - the event type you'd like to stop listening to.
   * @param handler - the function that should be removed.
   * @returns `this` to enable you to chain method calls.
   */
  off(type, handler) {
    const handlers = this.#handlers.get(type) ?? [];
    if (handler === void 0) {
      for (const handler2 of handlers) {
        this.#emitter.off(type, handler2);
      }
      this.#handlers.delete(type);
      return this;
    }
    const index = handlers.lastIndexOf(handler);
    if (index > -1) {
      this.#emitter.off(type, ...handlers.splice(index, 1));
    }
    return this;
  }
  /**
   * Emit an event and call any associated listeners.
   *
   * @param type - the event you'd like to emit
   * @param eventData - any data you'd like to emit with the event
   * @returns `true` if there are any listeners, `false` if there are not.
   */
  emit(type, event) {
    this.#emitter.emit(type, event);
    return this.listenerCount(type) > 0;
  }
  /**
   * Like `on` but the listener will only be fired once and then it will be removed.
   * @param type - the event you'd like to listen to
   * @param handler - the handler function to run when the event occurs
   * @returns `this` to enable you to chain method calls.
   */
  once(type, handler) {
    const onceHandler = /* @__PURE__ */ __name((eventData) => {
      handler(eventData);
      this.off(type, onceHandler);
    }, "onceHandler");
    return this.on(type, onceHandler);
  }
  /**
   * Gets the number of listeners for a given event.
   *
   * @param type - the event to get the listener count for
   * @returns the number of listeners bound to the given event
   */
  listenerCount(type) {
    return this.#handlers.get(type)?.length || 0;
  }
  /**
   * Removes all listeners. If given an event argument, it will remove only
   * listeners for that event.
   *
   * @param type - the event to remove listeners for.
   * @returns `this` to enable you to chain method calls.
   */
  removeAllListeners(type) {
    if (type !== void 0) {
      return this.off(type);
    }
    this[disposeSymbol]();
    return this;
  }
  /**
   * @internal
   */
  [disposeSymbol]() {
    for (const [type, handlers] of this.#handlers) {
      for (const handler of handlers) {
        this.#emitter.off(type, handler);
      }
    }
    this.#handlers.clear();
  }
};
__name(EventEmitter2, "EventEmitter");
var EventSubscription = class {
  #target;
  #type;
  #handler;
  constructor(target, type, handler) {
    this.#target = target;
    this.#type = type;
    this.#handler = handler;
    this.#target.on(this.#type, this.#handler);
  }
  [disposeSymbol]() {
    this.#target.off(this.#type, this.#handler);
  }
};
__name(EventSubscription, "EventSubscription");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Browser.js
var WEB_PERMISSION_TO_PROTOCOL_PERMISSION = /* @__PURE__ */ new Map([
  ["geolocation", "geolocation"],
  ["midi", "midi"],
  ["notifications", "notifications"],
  // TODO: push isn't a valid type?
  // ['push', 'push'],
  ["camera", "videoCapture"],
  ["microphone", "audioCapture"],
  ["background-sync", "backgroundSync"],
  ["ambient-light-sensor", "sensors"],
  ["accelerometer", "sensors"],
  ["gyroscope", "sensors"],
  ["magnetometer", "sensors"],
  ["accessibility-events", "accessibilityEvents"],
  ["clipboard-read", "clipboardReadWrite"],
  ["clipboard-write", "clipboardReadWrite"],
  ["clipboard-sanitized-write", "clipboardSanitizedWrite"],
  ["payment-handler", "paymentHandler"],
  ["persistent-storage", "durableStorage"],
  ["idle-detection", "idleDetection"],
  // chrome-specific permissions we have.
  ["midi-sysex", "midiSysex"]
]);
var Browser = class extends EventEmitter2 {
  /**
   * @internal
   */
  constructor() {
    super();
  }
  /**
   * Waits until a {@link Target | target} matching the given `predicate`
   * appears and returns it.
   *
   * This will look all open {@link BrowserContext | browser contexts}.
   *
   * @example Finding a target for a page opened via `window.open`:
   *
   * ```ts
   * await page.evaluate(() => window.open('https://www.example.com/'));
   * const newWindowTarget = await browser.waitForTarget(
   *   target => target.url() === 'https://www.example.com/'
   * );
   * ```
   */
  async waitForTarget(predicate, options = {}) {
    const { timeout: ms = 3e4 } = options;
    return await firstValueFrom(merge(fromEmitterEvent(
      this,
      "targetcreated"
      /* BrowserEvent.TargetCreated */
    ), fromEmitterEvent(
      this,
      "targetchanged"
      /* BrowserEvent.TargetChanged */
    ), from(this.targets())).pipe(filterAsync(predicate), raceWith(timeout(ms))));
  }
  /**
   * Gets a list of all open {@link Page | pages} inside this {@link Browser}.
   *
   * If there ar multiple {@link BrowserContext | browser contexts}, this
   * returns all {@link Page | pages} in all
   * {@link BrowserContext | browser contexts}.
   *
   * @remarks Non-visible {@link Page | pages}, such as `"background_page"`,
   * will not be listed here. You can find them using {@link Target.page}.
   */
  async pages() {
    const contextPages = await Promise.all(this.browserContexts().map((context3) => {
      return context3.pages();
    }));
    return contextPages.reduce((acc, x) => {
      return acc.concat(x);
    }, []);
  }
  /**
   * Whether Puppeteer is connected to this {@link Browser | browser}.
   *
   * @deprecated Use {@link Browser | Browser.connected}.
   */
  isConnected() {
    return this.connected;
  }
  /** @internal */
  [disposeSymbol]() {
    if (this.process()) {
      return void this.close().catch(debugError);
    }
    return void this.disconnect().catch(debugError);
  }
  /** @internal */
  [asyncDisposeSymbol]() {
    if (this.process()) {
      return this.close();
    }
    return this.disconnect();
  }
  /**
   * Get the BISO session ID associated with this browser
   *
   * @public
   */
  sessionId() {
    throw new Error("Not implemented");
  }
};
__name(Browser, "Browser");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/CDPSession.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var CDPSessionEvent;
(function(CDPSessionEvent2) {
  CDPSessionEvent2.Disconnected = Symbol("CDPSession.Disconnected");
  CDPSessionEvent2.Swapped = Symbol("CDPSession.Swapped");
  CDPSessionEvent2.Ready = Symbol("CDPSession.Ready");
  CDPSessionEvent2.SessionAttached = "sessionattached";
  CDPSessionEvent2.SessionDetached = "sessiondetached";
})(CDPSessionEvent || (CDPSessionEvent = {}));
var CDPSession = class extends EventEmitter2 {
  /**
   * @internal
   */
  constructor() {
    super();
  }
  /**
   * Parent session in terms of CDP's auto-attach mechanism.
   *
   * @internal
   */
  parentSession() {
    return void 0;
  }
};
__name(CDPSession, "CDPSession");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/BrowserContext.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/BrowserContext.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BrowserContext = class extends EventEmitter2 {
  /**
   * @internal
   */
  constructor() {
    super();
  }
  /**
   * Waits until a {@link Target | target} matching the given `predicate`
   * appears and returns it.
   *
   * This will look all open {@link BrowserContext | browser contexts}.
   *
   * @example Finding a target for a page opened via `window.open`:
   *
   * ```ts
   * await page.evaluate(() => window.open('https://www.example.com/'));
   * const newWindowTarget = await browserContext.waitForTarget(
   *   target => target.url() === 'https://www.example.com/'
   * );
   * ```
   */
  async waitForTarget(predicate, options = {}) {
    const { timeout: ms = 3e4 } = options;
    return await firstValueFrom(merge(fromEmitterEvent(
      this,
      "targetcreated"
      /* BrowserContextEvent.TargetCreated */
    ), fromEmitterEvent(
      this,
      "targetchanged"
      /* BrowserContextEvent.TargetChanged */
    ), from(this.targets())).pipe(filterAsync(predicate), raceWith(timeout(ms))));
  }
  /**
   * Whether this {@link BrowserContext | browser context} is closed.
   */
  get closed() {
    return !this.browser().browserContexts().includes(this);
  }
  /**
   * Identifier for this {@link BrowserContext | browser context}.
   */
  get id() {
    return void 0;
  }
  /** @internal */
  [disposeSymbol]() {
    return void this.close().catch(debugError);
  }
  /** @internal */
  [asyncDisposeSymbol]() {
    return this.close();
  }
};
__name(BrowserContext, "BrowserContext");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/BrowserContext.js
var CdpBrowserContext = class extends BrowserContext {
  #connection;
  #browser;
  #id;
  constructor(connection, browser, contextId) {
    super();
    this.#connection = connection;
    this.#browser = browser;
    this.#id = contextId;
  }
  get id() {
    return this.#id;
  }
  targets() {
    return this.#browser.targets().filter((target) => {
      return target.browserContext() === this;
    });
  }
  async pages() {
    const pages = await Promise.all(this.targets().filter((target) => {
      return target.type() === "page" || target.type() === "other" && this.#browser._getIsPageTargetCallback()?.(target);
    }).map((target) => {
      return target.page();
    }));
    return pages.filter((page) => {
      return !!page;
    });
  }
  isIncognito() {
    return !!this.#id;
  }
  async overridePermissions(origin, permissions) {
    const protocolPermissions = permissions.map((permission2) => {
      const protocolPermission = WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission2);
      if (!protocolPermission) {
        throw new Error("Unknown permission: " + permission2);
      }
      return protocolPermission;
    });
    await this.#connection.send("Browser.grantPermissions", {
      origin,
      browserContextId: this.#id || void 0,
      permissions: protocolPermissions
    });
  }
  async clearPermissionOverrides() {
    await this.#connection.send("Browser.resetPermissions", {
      browserContextId: this.#id || void 0
    });
  }
  newPage() {
    return this.#browser._createPageInContext(this.#id);
  }
  browser() {
    return this.#browser;
  }
  async close() {
    assert3(this.#id, "Non-incognito profiles cannot be closed!");
    await this.#browser._disposeContext(this.#id);
  }
};
__name(CdpBrowserContext, "CdpBrowserContext");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/ChromeTargetManager.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/Deferred.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Deferred = class {
  static create(opts) {
    return new Deferred(opts);
  }
  static async race(awaitables) {
    const deferredWithTimeout = /* @__PURE__ */ new Set();
    try {
      const promises = awaitables.map((value) => {
        if (value instanceof Deferred) {
          if (value.#timeoutId) {
            deferredWithTimeout.add(value);
          }
          return value.valueOrThrow();
        }
        return value;
      });
      return await Promise.race(promises);
    } finally {
      for (const deferred of deferredWithTimeout) {
        deferred.reject(new Error("Timeout cleared"));
      }
    }
  }
  #isResolved = false;
  #isRejected = false;
  #value;
  // SAFETY: This is ensured by #taskPromise.
  #resolve;
  #taskPromise = new Promise((resolve) => {
    this.#resolve = resolve;
  });
  #timeoutId;
  #timeoutError;
  constructor(opts) {
    if (opts && opts.timeout > 0) {
      this.#timeoutError = new TimeoutError(opts.message);
      this.#timeoutId = setTimeout(() => {
        this.reject(this.#timeoutError);
      }, opts.timeout);
    }
  }
  #finish(value) {
    clearTimeout(this.#timeoutId);
    this.#value = value;
    this.#resolve();
  }
  resolve(value) {
    if (this.#isRejected || this.#isResolved) {
      return;
    }
    this.#isResolved = true;
    this.#finish(value);
  }
  reject(error3) {
    if (this.#isRejected || this.#isResolved) {
      return;
    }
    this.#isRejected = true;
    this.#finish(error3);
  }
  resolved() {
    return this.#isResolved;
  }
  finished() {
    return this.#isResolved || this.#isRejected;
  }
  value() {
    return this.#value;
  }
  #promise;
  valueOrThrow() {
    if (!this.#promise) {
      this.#promise = (async () => {
        await this.#taskPromise;
        if (this.#isRejected) {
          throw this.#value;
        }
        return this.#value;
      })();
    }
    return this.#promise;
  }
};
__name(Deferred, "Deferred");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Target.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Target.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TargetType;
(function(TargetType2) {
  TargetType2["PAGE"] = "page";
  TargetType2["BACKGROUND_PAGE"] = "background_page";
  TargetType2["SERVICE_WORKER"] = "service_worker";
  TargetType2["SHARED_WORKER"] = "shared_worker";
  TargetType2["BROWSER"] = "browser";
  TargetType2["WEBVIEW"] = "webview";
  TargetType2["OTHER"] = "other";
  TargetType2["TAB"] = "tab";
})(TargetType || (TargetType = {}));
var Target = class {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
   */
  async worker() {
    return null;
  }
  /**
   * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
   * returns `null`.
   */
  async page() {
    return null;
  }
};
__name(Target, "Target");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/CDPSession.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/CallbackRegistry.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/ErrorLike.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isErrorLike(obj) {
  return typeof obj === "object" && obj !== null && "name" in obj && "message" in obj;
}
__name(isErrorLike, "isErrorLike");
function rewriteError(error3, message, originalMessage) {
  error3.message = message;
  error3.originalMessage = originalMessage ?? error3.originalMessage;
  return error3;
}
__name(rewriteError, "rewriteError");
function createProtocolErrorMessage(object) {
  let message = object.error.message;
  if (object.error && typeof object.error === "object" && "data" in object.error) {
    message += ` ${object.error.data}`;
  }
  return message;
}
__name(createProtocolErrorMessage, "createProtocolErrorMessage");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/CallbackRegistry.js
var CallbackRegistry = class {
  #callbacks = /* @__PURE__ */ new Map();
  #idGenerator = createIncrementalIdGenerator();
  create(label, timeout2, request) {
    const callback = new Callback(this.#idGenerator(), label, timeout2);
    this.#callbacks.set(callback.id, callback);
    try {
      request(callback.id);
    } catch (error3) {
      callback.promise.catch(debugError).finally(() => {
        this.#callbacks.delete(callback.id);
      });
      callback.reject(error3);
      throw error3;
    }
    return callback.promise.finally(() => {
      this.#callbacks.delete(callback.id);
    });
  }
  reject(id, message, originalMessage) {
    const callback = this.#callbacks.get(id);
    if (!callback) {
      return;
    }
    this._reject(callback, message, originalMessage);
  }
  _reject(callback, errorMessage, originalMessage) {
    let error3;
    let message;
    if (errorMessage instanceof ProtocolError) {
      error3 = errorMessage;
      error3.cause = callback.error;
      message = errorMessage.message;
    } else {
      error3 = callback.error;
      message = errorMessage;
    }
    callback.reject(rewriteError(error3, `Protocol error (${callback.label}): ${message}`, originalMessage));
  }
  resolve(id, value) {
    const callback = this.#callbacks.get(id);
    if (!callback) {
      return;
    }
    callback.resolve(value);
  }
  clear() {
    for (const callback of this.#callbacks.values()) {
      this._reject(callback, new TargetCloseError("Target closed"));
    }
    this.#callbacks.clear();
  }
  /**
   * @internal
   */
  getPendingProtocolErrors() {
    const result = [];
    for (const callback of this.#callbacks.values()) {
      result.push(new Error(`${callback.label} timed out. Trace: ${callback.error.stack}`));
    }
    return result;
  }
};
__name(CallbackRegistry, "CallbackRegistry");
var Callback = class {
  #id;
  #error = new ProtocolError();
  #deferred = Deferred.create();
  #timer;
  #label;
  constructor(id, label, timeout2) {
    this.#id = id;
    this.#label = label;
    if (timeout2) {
      this.#timer = setTimeout(() => {
        this.#deferred.reject(rewriteError(this.#error, `${label} timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.`));
      }, timeout2);
    }
  }
  resolve(value) {
    clearTimeout(this.#timer);
    this.#deferred.resolve(value);
  }
  reject(error3) {
    clearTimeout(this.#timer);
    this.#deferred.reject(error3);
  }
  get id() {
    return this.#id;
  }
  get promise() {
    return this.#deferred.valueOrThrow();
  }
  get error() {
    return this.#error;
  }
  get label() {
    return this.#label;
  }
};
__name(Callback, "Callback");
function createIncrementalIdGenerator() {
  let id = 0;
  return () => {
    return ++id;
  };
}
__name(createIncrementalIdGenerator, "createIncrementalIdGenerator");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/CDPSession.js
var CdpCDPSession = class extends CDPSession {
  #sessionId;
  #targetType;
  #callbacks = new CallbackRegistry();
  #connection;
  #parentSessionId;
  #target;
  /**
   * @internal
   */
  constructor(connection, targetType, sessionId, parentSessionId) {
    super();
    this.#connection = connection;
    this.#targetType = targetType;
    this.#sessionId = sessionId;
    this.#parentSessionId = parentSessionId;
  }
  /**
   * Sets the {@link CdpTarget} associated with the session instance.
   *
   * @internal
   */
  _setTarget(target) {
    this.#target = target;
  }
  /**
   * Gets the {@link CdpTarget} associated with the session instance.
   *
   * @internal
   */
  _target() {
    assert3(this.#target, "Target must exist");
    return this.#target;
  }
  connection() {
    return this.#connection;
  }
  parentSession() {
    if (!this.#parentSessionId) {
      return this;
    }
    const parent = this.#connection?.session(this.#parentSessionId);
    return parent ?? void 0;
  }
  send(method, params, options) {
    if (!this.#connection) {
      return Promise.reject(new TargetCloseError(`Protocol error (${method}): Session closed. Most likely the ${this.#targetType} has been closed.`));
    }
    return this.#connection._rawSend(this.#callbacks, method, params, this.#sessionId, options);
  }
  /**
   * @internal
   */
  _onMessage(object) {
    if (object.id) {
      if (object.error) {
        this.#callbacks.reject(object.id, createProtocolErrorMessage(object), object.error.message);
      } else {
        this.#callbacks.resolve(object.id, object.result);
      }
    } else {
      assert3(!object.id);
      this.emit(object.method, object.params);
    }
  }
  /**
   * Detaches the cdpSession from the target. Once detached, the cdpSession object
   * won't emit any events and can't be used to send messages.
   */
  async detach() {
    if (!this.#connection) {
      throw new Error(`Session already detached. Most likely the ${this.#targetType} has been closed.`);
    }
    await this.#connection.send("Target.detachFromTarget", {
      sessionId: this.#sessionId
    });
  }
  /**
   * @internal
   */
  _onClosed() {
    this.#callbacks.clear();
    this.#connection = void 0;
    this.emit(CDPSessionEvent.Disconnected, void 0);
  }
  /**
   * Returns the session's id.
   */
  id() {
    return this.#sessionId;
  }
  /**
   * @internal
   */
  getPendingProtocolErrors() {
    return this.#callbacks.getPendingProtocolErrors();
  }
};
__name(CdpCDPSession, "CdpCDPSession");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Page.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Page.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/TimeoutSettings.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_TIMEOUT = 3e4;
var TimeoutSettings = class {
  #defaultTimeout;
  #defaultNavigationTimeout;
  constructor() {
    this.#defaultTimeout = null;
    this.#defaultNavigationTimeout = null;
  }
  setDefaultTimeout(timeout2) {
    this.#defaultTimeout = timeout2;
  }
  setDefaultNavigationTimeout(timeout2) {
    this.#defaultNavigationTimeout = timeout2;
  }
  navigationTimeout() {
    if (this.#defaultNavigationTimeout !== null) {
      return this.#defaultNavigationTimeout;
    }
    if (this.#defaultTimeout !== null) {
      return this.#defaultTimeout;
    }
    return DEFAULT_TIMEOUT;
  }
  timeout() {
    if (this.#defaultTimeout !== null) {
      return this.#defaultTimeout;
    }
    return DEFAULT_TIMEOUT;
  }
};
__name(TimeoutSettings, "TimeoutSettings");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/decorators.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/Mutex.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var _locked, _acquirers;
var _Mutex = class {
  constructor() {
    __privateAdd(this, _locked, false);
    __privateAdd(this, _acquirers, []);
  }
  // This is FIFO.
  async acquire() {
    if (!__privateGet(this, _locked)) {
      __privateSet(this, _locked, true);
      return new _Mutex.Guard(this);
    }
    const deferred = Deferred.create();
    __privateGet(this, _acquirers).push(deferred.resolve.bind(deferred));
    await deferred.valueOrThrow();
    return new _Mutex.Guard(this);
  }
  release() {
    const resolve = __privateGet(this, _acquirers).shift();
    if (!resolve) {
      __privateSet(this, _locked, false);
      return;
    }
    resolve();
  }
};
var Mutex = _Mutex;
__name(Mutex, "Mutex");
_locked = new WeakMap();
_acquirers = new WeakMap();
__publicField(Mutex, "Guard", /* @__PURE__ */ __name(class Guard {
  #mutex;
  constructor(mutex) {
    this.#mutex = mutex;
  }
  [disposeSymbol]() {
    return this.#mutex.release();
  }
}, "Guard"));

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/decorators.js
var __addDisposableResource = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
var instances = /* @__PURE__ */ new WeakSet();
function moveable(Class, _) {
  let hasDispose = false;
  if (Class.prototype[disposeSymbol]) {
    const dispose = Class.prototype[disposeSymbol];
    Class.prototype[disposeSymbol] = function() {
      if (instances.has(this)) {
        instances.delete(this);
        return;
      }
      return dispose.call(this);
    };
    hasDispose = true;
  }
  if (Class.prototype[asyncDisposeSymbol]) {
    const asyncDispose = Class.prototype[asyncDisposeSymbol];
    Class.prototype[asyncDisposeSymbol] = function() {
      if (instances.has(this)) {
        instances.delete(this);
        return;
      }
      return asyncDispose.call(this);
    };
    hasDispose = true;
  }
  if (hasDispose) {
    Class.prototype.move = function() {
      instances.add(this);
      return this;
    };
  }
  return Class;
}
__name(moveable, "moveable");
function throwIfDisposed(message = (value) => {
  return `Attempted to use disposed ${value.constructor.name}.`;
}) {
  return (target, _) => {
    return function(...args) {
      if (this.disposed) {
        throw new Error(message(this));
      }
      return target.call(this, ...args);
    };
  };
}
__name(throwIfDisposed, "throwIfDisposed");
function invokeAtMostOnceForArguments(target, _) {
  const cache = /* @__PURE__ */ new WeakMap();
  let cacheDepth = -1;
  return function(...args) {
    if (cacheDepth === -1) {
      cacheDepth = args.length;
    }
    if (cacheDepth !== args.length) {
      throw new Error("Memoized method was called with the wrong number of arguments");
    }
    let freshArguments = false;
    let cacheIterator = cache;
    for (const arg of args) {
      if (cacheIterator.has(arg)) {
        cacheIterator = cacheIterator.get(arg);
      } else {
        freshArguments = true;
        cacheIterator.set(arg, /* @__PURE__ */ new WeakMap());
        cacheIterator = cacheIterator.get(arg);
      }
    }
    if (!freshArguments) {
      return;
    }
    return target.call(this, ...args);
  };
}
__name(invokeAtMostOnceForArguments, "invokeAtMostOnceForArguments");
function guarded(getKey = function() {
  return this;
}) {
  return (target, _) => {
    const mutexes = /* @__PURE__ */ new WeakMap();
    return async function(...args) {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const key = getKey.call(this);
        let mutex = mutexes.get(key);
        if (!mutex) {
          mutex = new Mutex();
          mutexes.set(key, mutex);
        }
        const _2 = __addDisposableResource(env_1, await mutex.acquire(), true);
        return await target.call(this, ...args);
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        const result_1 = __disposeResources(env_1);
        if (result_1)
          await result_1;
      }
    };
  };
}
__name(guarded, "guarded");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/locators/locators.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __addDisposableResource2 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources2 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
var LocatorEvent;
(function(LocatorEvent2) {
  LocatorEvent2["Action"] = "action";
})(LocatorEvent || (LocatorEvent = {}));
var Locator = class extends EventEmitter2 {
  /**
   * Creates a race between multiple locators but ensures that only a single one
   * acts.
   *
   * @public
   */
  static race(locators) {
    return RaceLocator.create(locators);
  }
  /**
   * @internal
   */
  visibility = null;
  /**
   * @internal
   */
  _timeout = 3e4;
  #ensureElementIsInTheViewport = true;
  #waitForEnabled = true;
  #waitForStableBoundingBox = true;
  /**
   * @internal
   */
  operators = {
    conditions: (conditions, signal) => {
      return mergeMap((handle) => {
        return merge(...conditions.map((condition) => {
          return condition(handle, signal);
        })).pipe(defaultIfEmpty(handle));
      });
    },
    retryAndRaceWithSignalAndTimer: (signal, cause) => {
      const candidates = [];
      if (signal) {
        candidates.push(fromEvent(signal, "abort").pipe(map(() => {
          if (signal.reason instanceof Error) {
            signal.reason.cause = cause;
          }
          throw signal.reason;
        })));
      }
      candidates.push(timeout(this._timeout, cause));
      return pipe(retry({ delay: RETRY_DELAY }), raceWith(...candidates));
    }
  };
  // Determines when the locator will timeout for actions.
  get timeout() {
    return this._timeout;
  }
  setTimeout(timeout2) {
    const locator = this._clone();
    locator._timeout = timeout2;
    return locator;
  }
  setVisibility(visibility) {
    const locator = this._clone();
    locator.visibility = visibility;
    return locator;
  }
  setWaitForEnabled(value) {
    const locator = this._clone();
    locator.#waitForEnabled = value;
    return locator;
  }
  setEnsureElementIsInTheViewport(value) {
    const locator = this._clone();
    locator.#ensureElementIsInTheViewport = value;
    return locator;
  }
  setWaitForStableBoundingBox(value) {
    const locator = this._clone();
    locator.#waitForStableBoundingBox = value;
    return locator;
  }
  /**
   * @internal
   */
  copyOptions(locator) {
    this._timeout = locator._timeout;
    this.visibility = locator.visibility;
    this.#waitForEnabled = locator.#waitForEnabled;
    this.#ensureElementIsInTheViewport = locator.#ensureElementIsInTheViewport;
    this.#waitForStableBoundingBox = locator.#waitForStableBoundingBox;
    return this;
  }
  /**
   * If the element has a "disabled" property, wait for the element to be
   * enabled.
   */
  #waitForEnabledIfNeeded = (handle, signal) => {
    if (!this.#waitForEnabled) {
      return EMPTY;
    }
    return from(handle.frame.waitForFunction((element) => {
      if (!(element instanceof HTMLElement)) {
        return true;
      }
      const isNativeFormControl = [
        "BUTTON",
        "INPUT",
        "SELECT",
        "TEXTAREA",
        "OPTION",
        "OPTGROUP"
      ].includes(element.nodeName);
      return !isNativeFormControl || !element.hasAttribute("disabled");
    }, {
      timeout: this._timeout,
      signal
    }, handle)).pipe(ignoreElements());
  };
  /**
   * Compares the bounding box of the element for two consecutive animation
   * frames and waits till they are the same.
   */
  #waitForStableBoundingBoxIfNeeded = (handle) => {
    if (!this.#waitForStableBoundingBox) {
      return EMPTY;
    }
    return defer(() => {
      return from(handle.evaluate((element) => {
        return new Promise((resolve) => {
          window.requestAnimationFrame(() => {
            const rect1 = element.getBoundingClientRect();
            window.requestAnimationFrame(() => {
              const rect2 = element.getBoundingClientRect();
              resolve([
                {
                  x: rect1.x,
                  y: rect1.y,
                  width: rect1.width,
                  height: rect1.height
                },
                {
                  x: rect2.x,
                  y: rect2.y,
                  width: rect2.width,
                  height: rect2.height
                }
              ]);
            });
          });
        });
      }));
    }).pipe(first(([rect1, rect2]) => {
      return rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height;
    }), retry({ delay: RETRY_DELAY }), ignoreElements());
  };
  /**
   * Checks if the element is in the viewport and auto-scrolls it if it is not.
   */
  #ensureElementIsInTheViewportIfNeeded = (handle) => {
    if (!this.#ensureElementIsInTheViewport) {
      return EMPTY;
    }
    return from(handle.isIntersectingViewport({ threshold: 0 })).pipe(filter((isIntersectingViewport) => {
      return !isIntersectingViewport;
    }), mergeMap(() => {
      return from(handle.scrollIntoView());
    }), mergeMap(() => {
      return defer(() => {
        return from(handle.isIntersectingViewport({ threshold: 0 }));
      }).pipe(first(identity), retry({ delay: RETRY_DELAY }), ignoreElements());
    }));
  };
  #click(options) {
    const signal = options?.signal;
    const cause = new Error("Locator.click");
    return this._wait(options).pipe(this.operators.conditions([
      this.#ensureElementIsInTheViewportIfNeeded,
      this.#waitForStableBoundingBoxIfNeeded,
      this.#waitForEnabledIfNeeded
    ], signal), tap(() => {
      return this.emit(LocatorEvent.Action, void 0);
    }), mergeMap((handle) => {
      return from(handle.click(options)).pipe(catchError((err) => {
        void handle.dispose().catch(debugError);
        throw err;
      }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
  }
  #fill(value, options) {
    const signal = options?.signal;
    const cause = new Error("Locator.fill");
    return this._wait(options).pipe(this.operators.conditions([
      this.#ensureElementIsInTheViewportIfNeeded,
      this.#waitForStableBoundingBoxIfNeeded,
      this.#waitForEnabledIfNeeded
    ], signal), tap(() => {
      return this.emit(LocatorEvent.Action, void 0);
    }), mergeMap((handle) => {
      return from(handle.evaluate((el) => {
        if (el instanceof HTMLSelectElement) {
          return "select";
        }
        if (el instanceof HTMLTextAreaElement) {
          return "typeable-input";
        }
        if (el instanceof HTMLInputElement) {
          if ((/* @__PURE__ */ new Set([
            "textarea",
            "text",
            "url",
            "tel",
            "search",
            "password",
            "number",
            "email"
          ])).has(el.type)) {
            return "typeable-input";
          } else {
            return "other-input";
          }
        }
        if (el.isContentEditable) {
          return "contenteditable";
        }
        return "unknown";
      })).pipe(mergeMap((inputType) => {
        switch (inputType) {
          case "select":
            return from(handle.select(value).then(noop));
          case "contenteditable":
          case "typeable-input":
            return from(handle.evaluate((input, newValue) => {
              const currentValue = input.isContentEditable ? input.innerText : input.value;
              if (newValue.length <= currentValue.length || !newValue.startsWith(input.value)) {
                if (input.isContentEditable) {
                  input.innerText = "";
                } else {
                  input.value = "";
                }
                return newValue;
              }
              const originalValue = input.isContentEditable ? input.innerText : input.value;
              if (input.isContentEditable) {
                input.innerText = "";
                input.innerText = originalValue;
              } else {
                input.value = "";
                input.value = originalValue;
              }
              return newValue.substring(originalValue.length);
            }, value)).pipe(mergeMap((textToType) => {
              return from(handle.type(textToType));
            }));
          case "other-input":
            return from(handle.focus()).pipe(mergeMap(() => {
              return from(handle.evaluate((input, value2) => {
                input.value = value2;
                input.dispatchEvent(new Event("input", { bubbles: true }));
                input.dispatchEvent(new Event("change", { bubbles: true }));
              }, value));
            }));
          case "unknown":
            throw new Error(`Element cannot be filled out.`);
        }
      })).pipe(catchError((err) => {
        void handle.dispose().catch(debugError);
        throw err;
      }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
  }
  #hover(options) {
    const signal = options?.signal;
    const cause = new Error("Locator.hover");
    return this._wait(options).pipe(this.operators.conditions([
      this.#ensureElementIsInTheViewportIfNeeded,
      this.#waitForStableBoundingBoxIfNeeded
    ], signal), tap(() => {
      return this.emit(LocatorEvent.Action, void 0);
    }), mergeMap((handle) => {
      return from(handle.hover()).pipe(catchError((err) => {
        void handle.dispose().catch(debugError);
        throw err;
      }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
  }
  #scroll(options) {
    const signal = options?.signal;
    const cause = new Error("Locator.scroll");
    return this._wait(options).pipe(this.operators.conditions([
      this.#ensureElementIsInTheViewportIfNeeded,
      this.#waitForStableBoundingBoxIfNeeded
    ], signal), tap(() => {
      return this.emit(LocatorEvent.Action, void 0);
    }), mergeMap((handle) => {
      return from(handle.evaluate((el, scrollTop, scrollLeft) => {
        if (scrollTop !== void 0) {
          el.scrollTop = scrollTop;
        }
        if (scrollLeft !== void 0) {
          el.scrollLeft = scrollLeft;
        }
      }, options?.scrollTop, options?.scrollLeft)).pipe(catchError((err) => {
        void handle.dispose().catch(debugError);
        throw err;
      }));
    }), this.operators.retryAndRaceWithSignalAndTimer(signal, cause));
  }
  /**
   * Clones the locator.
   */
  clone() {
    return this._clone();
  }
  /**
   * Waits for the locator to get a handle from the page.
   *
   * @public
   */
  async waitHandle(options) {
    const cause = new Error("Locator.waitHandle");
    return await firstValueFrom(this._wait(options).pipe(this.operators.retryAndRaceWithSignalAndTimer(options?.signal, cause)));
  }
  /**
   * Waits for the locator to get the serialized value from the page.
   *
   * Note this requires the value to be JSON-serializable.
   *
   * @public
   */
  async wait(options) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      const handle = __addDisposableResource2(env_1, await this.waitHandle(options), false);
      return await handle.jsonValue();
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources2(env_1);
    }
  }
  /**
   * Maps the locator using the provided mapper.
   *
   * @public
   */
  map(mapper) {
    return new MappedLocator(this._clone(), (handle) => {
      return handle.evaluateHandle(mapper);
    });
  }
  /**
   * Creates an expectation that is evaluated against located values.
   *
   * If the expectations do not match, then the locator will retry.
   *
   * @public
   */
  filter(predicate) {
    return new FilteredLocator(this._clone(), async (handle, signal) => {
      await handle.frame.waitForFunction(predicate, { signal, timeout: this._timeout }, handle);
      return true;
    });
  }
  /**
   * Creates an expectation that is evaluated against located handles.
   *
   * If the expectations do not match, then the locator will retry.
   *
   * @internal
   */
  filterHandle(predicate) {
    return new FilteredLocator(this._clone(), predicate);
  }
  /**
   * Maps the locator using the provided mapper.
   *
   * @internal
   */
  mapHandle(mapper) {
    return new MappedLocator(this._clone(), mapper);
  }
  click(options) {
    return firstValueFrom(this.#click(options));
  }
  /**
   * Fills out the input identified by the locator using the provided value. The
   * type of the input is determined at runtime and the appropriate fill-out
   * method is chosen based on the type. contenteditable, selector, inputs are
   * supported.
   */
  fill(value, options) {
    return firstValueFrom(this.#fill(value, options));
  }
  hover(options) {
    return firstValueFrom(this.#hover(options));
  }
  scroll(options) {
    return firstValueFrom(this.#scroll(options));
  }
};
__name(Locator, "Locator");
var FunctionLocator = class extends Locator {
  static create(pageOrFrame, func) {
    return new FunctionLocator(pageOrFrame, func).setTimeout("getDefaultTimeout" in pageOrFrame ? pageOrFrame.getDefaultTimeout() : pageOrFrame.page().getDefaultTimeout());
  }
  #pageOrFrame;
  #func;
  constructor(pageOrFrame, func) {
    super();
    this.#pageOrFrame = pageOrFrame;
    this.#func = func;
  }
  _clone() {
    return new FunctionLocator(this.#pageOrFrame, this.#func);
  }
  _wait(options) {
    const signal = options?.signal;
    return defer(() => {
      return from(this.#pageOrFrame.waitForFunction(this.#func, {
        timeout: this.timeout,
        signal
      }));
    }).pipe(throwIfEmpty());
  }
};
__name(FunctionLocator, "FunctionLocator");
var DelegatedLocator = class extends Locator {
  #delegate;
  constructor(delegate) {
    super();
    this.#delegate = delegate;
    this.copyOptions(this.#delegate);
  }
  get delegate() {
    return this.#delegate;
  }
  setTimeout(timeout2) {
    const locator = super.setTimeout(timeout2);
    locator.#delegate = this.#delegate.setTimeout(timeout2);
    return locator;
  }
  setVisibility(visibility) {
    const locator = super.setVisibility(visibility);
    locator.#delegate = locator.#delegate.setVisibility(visibility);
    return locator;
  }
  setWaitForEnabled(value) {
    const locator = super.setWaitForEnabled(value);
    locator.#delegate = this.#delegate.setWaitForEnabled(value);
    return locator;
  }
  setEnsureElementIsInTheViewport(value) {
    const locator = super.setEnsureElementIsInTheViewport(value);
    locator.#delegate = this.#delegate.setEnsureElementIsInTheViewport(value);
    return locator;
  }
  setWaitForStableBoundingBox(value) {
    const locator = super.setWaitForStableBoundingBox(value);
    locator.#delegate = this.#delegate.setWaitForStableBoundingBox(value);
    return locator;
  }
};
__name(DelegatedLocator, "DelegatedLocator");
var FilteredLocator = class extends DelegatedLocator {
  #predicate;
  constructor(base, predicate) {
    super(base);
    this.#predicate = predicate;
  }
  _clone() {
    return new FilteredLocator(this.delegate.clone(), this.#predicate).copyOptions(this);
  }
  _wait(options) {
    return this.delegate._wait(options).pipe(mergeMap((handle) => {
      return from(Promise.resolve(this.#predicate(handle, options?.signal))).pipe(filter((value) => {
        return value;
      }), map(() => {
        return handle;
      }));
    }), throwIfEmpty());
  }
};
__name(FilteredLocator, "FilteredLocator");
var MappedLocator = class extends DelegatedLocator {
  #mapper;
  constructor(base, mapper) {
    super(base);
    this.#mapper = mapper;
  }
  _clone() {
    return new MappedLocator(this.delegate.clone(), this.#mapper).copyOptions(this);
  }
  _wait(options) {
    return this.delegate._wait(options).pipe(mergeMap((handle) => {
      return from(Promise.resolve(this.#mapper(handle, options?.signal)));
    }));
  }
};
__name(MappedLocator, "MappedLocator");
var NodeLocator = class extends Locator {
  static create(pageOrFrame, selector) {
    return new NodeLocator(pageOrFrame, selector).setTimeout("getDefaultTimeout" in pageOrFrame ? pageOrFrame.getDefaultTimeout() : pageOrFrame.page().getDefaultTimeout());
  }
  #pageOrFrame;
  #selector;
  constructor(pageOrFrame, selector) {
    super();
    this.#pageOrFrame = pageOrFrame;
    this.#selector = selector;
  }
  /**
   * Waits for the element to become visible or hidden. visibility === 'visible'
   * means that the element has a computed style, the visibility property other
   * than 'hidden' or 'collapse' and non-empty bounding box. visibility ===
   * 'hidden' means the opposite of that.
   */
  #waitForVisibilityIfNeeded = (handle) => {
    if (!this.visibility) {
      return EMPTY;
    }
    return (() => {
      switch (this.visibility) {
        case "hidden":
          return defer(() => {
            return from(handle.isHidden());
          });
        case "visible":
          return defer(() => {
            return from(handle.isVisible());
          });
      }
    })().pipe(first(identity), retry({ delay: RETRY_DELAY }), ignoreElements());
  };
  _clone() {
    return new NodeLocator(this.#pageOrFrame, this.#selector).copyOptions(this);
  }
  _wait(options) {
    const signal = options?.signal;
    return defer(() => {
      return from(this.#pageOrFrame.waitForSelector(this.#selector, {
        visible: false,
        timeout: this._timeout,
        signal
      }));
    }).pipe(filter((value) => {
      return value !== null;
    }), throwIfEmpty(), this.operators.conditions([this.#waitForVisibilityIfNeeded], signal));
  }
};
__name(NodeLocator, "NodeLocator");
function checkLocatorArray(locators) {
  for (const locator of locators) {
    if (!(locator instanceof Locator)) {
      throw new Error("Unknown locator for race candidate");
    }
  }
  return locators;
}
__name(checkLocatorArray, "checkLocatorArray");
var RaceLocator = class extends Locator {
  static create(locators) {
    const array = checkLocatorArray(locators);
    return new RaceLocator(array);
  }
  #locators;
  constructor(locators) {
    super();
    this.#locators = locators;
  }
  _clone() {
    return new RaceLocator(this.#locators.map((locator) => {
      return locator.clone();
    })).copyOptions(this);
  }
  _wait(options) {
    return race(...this.#locators.map((locator) => {
      return locator._wait(options);
    }));
  }
};
__name(RaceLocator, "RaceLocator");
var RETRY_DELAY = 100;

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Page.js
var __runInitializers = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context3 = {};
    for (var p in contextIn)
      context3[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context3.access[p] = contextIn.access[p];
    context3.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context3);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource3 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources3 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
function setDefaultScreenshotOptions(options) {
  options.optimizeForSpeed ??= false;
  options.type ??= "png";
  options.fromSurface ??= true;
  options.fullPage ??= false;
  options.omitBackground ??= false;
  options.encoding ??= "binary";
  options.captureBeyondViewport ??= true;
}
__name(setDefaultScreenshotOptions, "setDefaultScreenshotOptions");
var Page = (() => {
  let _classSuper = EventEmitter2;
  let _instanceExtraInitializers = [];
  let _screenshot_decorators;
  return /* @__PURE__ */ __name(class Page extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate(this, null, _screenshot_decorators, { kind: "method", name: "screenshot", static: false, private: false, access: { has: (obj) => "screenshot" in obj, get: (obj) => obj.screenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    /**
     * @internal
     */
    _isDragging = (__runInitializers(this, _instanceExtraInitializers), false);
    /**
     * @internal
     */
    _timeoutSettings = new TimeoutSettings();
    #requestHandlers = /* @__PURE__ */ new WeakMap();
    #inflight$ = new ReplaySubject(1);
    /**
     * @internal
     */
    constructor() {
      super();
      fromEmitterEvent(
        this,
        "request"
        /* PageEvent.Request */
      ).pipe(mergeMap((originalRequest) => {
        return concat(of(1), merge(fromEmitterEvent(
          this,
          "requestfailed"
          /* PageEvent.RequestFailed */
        ), fromEmitterEvent(
          this,
          "requestfinished"
          /* PageEvent.RequestFinished */
        ), fromEmitterEvent(
          this,
          "response"
          /* PageEvent.Response */
        ).pipe(map((response) => {
          return response.request();
        }))).pipe(filter((request) => {
          return request.id === originalRequest.id;
        }), take(1), map(() => {
          return -1;
        })));
      }), mergeScan((acc, addend) => {
        return of(acc + addend);
      }, 0), takeUntil(fromEmitterEvent(
        this,
        "close"
        /* PageEvent.Close */
      )), startWith(0)).subscribe(this.#inflight$);
    }
    /**
     * Listen to page events.
     *
     * @remarks
     * This method exists to define event typings and handle proper wireup of
     * cooperative request interception. Actual event listening and dispatching is
     * delegated to {@link EventEmitter}.
     *
     * @internal
     */
    on(type, handler) {
      if (type !== "request") {
        return super.on(type, handler);
      }
      let wrapper = this.#requestHandlers.get(handler);
      if (wrapper === void 0) {
        wrapper = /* @__PURE__ */ __name((event) => {
          event.enqueueInterceptAction(() => {
            return handler(event);
          });
        }, "wrapper");
        this.#requestHandlers.set(handler, wrapper);
      }
      return super.on(type, wrapper);
    }
    /**
     * @internal
     */
    off(type, handler) {
      if (type === "request") {
        handler = this.#requestHandlers.get(handler) || handler;
      }
      return super.off(type, handler);
    }
    locator(selectorOrFunc) {
      if (typeof selectorOrFunc === "string") {
        return NodeLocator.create(this, selectorOrFunc);
      } else {
        return FunctionLocator.create(this, selectorOrFunc);
      }
    }
    /**
     * A shortcut for {@link Locator.race} that does not require static imports.
     *
     * @internal
     */
    locatorRace(locators) {
      return Locator.race(locators);
    }
    /**
     * Runs `document.querySelector` within the page. If no element matches the
     * selector, the return value resolves to `null`.
     *
     * @param selector - A `selector` to query page for
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
     * to query page for.
     */
    async $(selector) {
      return await this.mainFrame().$(selector);
    }
    /**
     * The method runs `document.querySelectorAll` within the page. If no elements
     * match the selector, the return value resolves to `[]`.
     *
     * @param selector - A `selector` to query page for
     *
     * @remarks
     *
     * Shortcut for {@link Frame.$$ | Page.mainFrame().$$(selector) }.
     */
    async $$(selector) {
      return await this.mainFrame().$$(selector);
    }
    /**
     * @remarks
     *
     * The only difference between {@link Page.evaluate | page.evaluate} and
     * `page.evaluateHandle` is that `evaluateHandle` will return the value
     * wrapped in an in-page object.
     *
     * If the function passed to `page.evaluateHandle` returns a Promise, the
     * function will wait for the promise to resolve and return its value.
     *
     * You can pass a string instead of a function (although functions are
     * recommended as they are easier to debug and use with TypeScript):
     *
     * @example
     *
     * ```ts
     * const aHandle = await page.evaluateHandle('document');
     * ```
     *
     * @example
     * {@link JSHandle} instances can be passed as arguments to the `pageFunction`:
     *
     * ```ts
     * const aHandle = await page.evaluateHandle(() => document.body);
     * const resultHandle = await page.evaluateHandle(
     *   body => body.innerHTML,
     *   aHandle
     * );
     * console.log(await resultHandle.jsonValue());
     * await resultHandle.dispose();
     * ```
     *
     * Most of the time this function returns a {@link JSHandle},
     * but if `pageFunction` returns a reference to an element,
     * you instead get an {@link ElementHandle} back:
     *
     * @example
     *
     * ```ts
     * const button = await page.evaluateHandle(() =>
     *   document.querySelector('button')
     * );
     * // can call `click` because `button` is an `ElementHandle`
     * await button.click();
     * ```
     *
     * The TypeScript definitions assume that `evaluateHandle` returns
     * a `JSHandle`, but if you know it's going to return an
     * `ElementHandle`, pass it as the generic argument:
     *
     * ```ts
     * const button = await page.evaluateHandle<ElementHandle>(...);
     * ```
     *
     * @param pageFunction - a function that is run within the page
     * @param args - arguments to be passed to the pageFunction
     */
    async evaluateHandle(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
      return await this.mainFrame().evaluateHandle(pageFunction, ...args);
    }
    /**
     * This method runs `document.querySelector` within the page and passes the
     * result as the first argument to the `pageFunction`.
     *
     * @remarks
     *
     * If no element is found matching `selector`, the method will throw an error.
     *
     * If `pageFunction` returns a promise `$eval` will wait for the promise to
     * resolve and then return its value.
     *
     * @example
     *
     * ```ts
     * const searchValue = await page.$eval('#search', el => el.value);
     * const preloadHref = await page.$eval('link[rel=preload]', el => el.href);
     * const html = await page.$eval('.main-container', el => el.outerHTML);
     * ```
     *
     * If you are using TypeScript, you may have to provide an explicit type to the
     * first argument of the `pageFunction`.
     * By default it is typed as `Element`, but you may need to provide a more
     * specific sub-type:
     *
     * @example
     *
     * ```ts
     * // if you don't provide HTMLInputElement here, TS will error
     * // as `value` is not on `Element`
     * const searchValue = await page.$eval(
     *   '#search',
     *   (el: HTMLInputElement) => el.value
     * );
     * ```
     *
     * The compiler should be able to infer the return type
     * from the `pageFunction` you provide. If it is unable to, you can use the generic
     * type to tell the compiler what return type you expect from `$eval`:
     *
     * @example
     *
     * ```ts
     * // The compiler can infer the return type in this case, but if it can't
     * // or if you want to be more explicit, provide it as the generic type.
     * const searchValue = await page.$eval<string>(
     *   '#search',
     *   (el: HTMLInputElement) => el.value
     * );
     * ```
     *
     * @param selector - the
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
     * to query for
     * @param pageFunction - the function to be evaluated in the page context.
     * Will be passed the result of `document.querySelector(selector)` as its
     * first argument.
     * @param args - any additional arguments to pass through to `pageFunction`.
     *
     * @returns The result of calling `pageFunction`. If it returns an element it
     * is wrapped in an {@link ElementHandle}, else the raw value itself is
     * returned.
     */
    async $eval(selector, pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
      return await this.mainFrame().$eval(selector, pageFunction, ...args);
    }
    /**
     * This method runs `Array.from(document.querySelectorAll(selector))` within
     * the page and passes the result as the first argument to the `pageFunction`.
     *
     * @remarks
     * If `pageFunction` returns a promise `$$eval` will wait for the promise to
     * resolve and then return its value.
     *
     * @example
     *
     * ```ts
     * // get the amount of divs on the page
     * const divCount = await page.$$eval('div', divs => divs.length);
     *
     * // get the text content of all the `.options` elements:
     * const options = await page.$$eval('div > span.options', options => {
     *   return options.map(option => option.textContent);
     * });
     * ```
     *
     * If you are using TypeScript, you may have to provide an explicit type to the
     * first argument of the `pageFunction`.
     * By default it is typed as `Element[]`, but you may need to provide a more
     * specific sub-type:
     *
     * @example
     *
     * ```ts
     * await page.$$eval('input', elements => {
     *   return elements.map(e => e.value);
     * });
     * ```
     *
     * The compiler should be able to infer the return type
     * from the `pageFunction` you provide. If it is unable to, you can use the generic
     * type to tell the compiler what return type you expect from `$$eval`:
     *
     * @example
     *
     * ```ts
     * const allInputValues = await page.$$eval('input', elements =>
     *   elements.map(e => e.textContent)
     * );
     * ```
     *
     * @param selector - the
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
     * to query for
     * @param pageFunction - the function to be evaluated in the page context.
     * Will be passed the result of
     * `Array.from(document.querySelectorAll(selector))` as its first argument.
     * @param args - any additional arguments to pass through to `pageFunction`.
     *
     * @returns The result of calling `pageFunction`. If it returns an element it
     * is wrapped in an {@link ElementHandle}, else the raw value itself is
     * returned.
     */
    async $$eval(selector, pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
      return await this.mainFrame().$$eval(selector, pageFunction, ...args);
    }
    /**
     * Adds a `<script>` tag into the page with the desired URL or content.
     *
     * @remarks
     * Shortcut for
     * {@link Frame.addScriptTag | page.mainFrame().addScriptTag(options)}.
     *
     * @param options - Options for the script.
     * @returns An {@link ElementHandle | element handle} to the injected
     * `<script>` element.
     */
    async addScriptTag(options) {
      return await this.mainFrame().addScriptTag(options);
    }
    async addStyleTag(options) {
      return await this.mainFrame().addStyleTag(options);
    }
    /**
     * The page's URL.
     *
     * @remarks
     *
     * Shortcut for {@link Frame.url | page.mainFrame().url()}.
     */
    url() {
      return this.mainFrame().url();
    }
    /**
     * The full HTML contents of the page, including the DOCTYPE.
     */
    async content() {
      return await this.mainFrame().content();
    }
    /**
     * Set the content of the page.
     *
     * @param html - HTML markup to assign to the page.
     * @param options - Parameters that has some properties.
     *
     * @remarks
     *
     * The parameter `options` might have the following options.
     *
     * - `timeout` : Maximum time in milliseconds for resources to load, defaults
     *   to 30 seconds, pass `0` to disable timeout. The default value can be
     *   changed by using the {@link Page.setDefaultNavigationTimeout} or
     *   {@link Page.setDefaultTimeout} methods.
     *
     * - `waitUntil`: When to consider setting markup succeeded, defaults to
     *   `load`. Given an array of event strings, setting content is considered
     *   to be successful after all events have been fired. Events can be
     *   either:<br/>
     * - `load` : consider setting content to be finished when the `load` event
     *   is fired.<br/>
     * - `domcontentloaded` : consider setting content to be finished when the
     *   `DOMContentLoaded` event is fired.<br/>
     * - `networkidle0` : consider setting content to be finished when there are
     *   no more than 0 network connections for at least `500` ms.<br/>
     * - `networkidle2` : consider setting content to be finished when there are
     *   no more than 2 network connections for at least `500` ms.
     */
    async setContent(html, options) {
      await this.mainFrame().setContent(html, options);
    }
    /**
     * Navigates the page to the given `url`.
     *
     * @remarks
     *
     * Navigation to `about:blank` or navigation to the same URL with a different
     * hash will succeed and return `null`.
     *
     * :::warning
     *
     * Headless mode doesn't support navigation to a PDF document. See the {@link
     * https://bugs.chromium.org/p/chromium/issues/detail?id=761295 | upstream
     * issue}.
     *
     * :::
     *
     * Shortcut for {@link Frame.goto | page.mainFrame().goto(url, options)}.
     *
     * @param url - URL to navigate page to. The URL should include scheme, e.g.
     * `https://`
     * @param options - Options to configure waiting behavior.
     * @returns A promise which resolves to the main resource response. In case of
     * multiple redirects, the navigation will resolve with the response of the
     * last redirect.
     * @throws If:
     *
     * - there's an SSL error (e.g. in case of self-signed certificates).
     * - target URL is invalid.
     * - the timeout is exceeded during navigation.
     * - the remote server does not respond or is unreachable.
     * - the main resource failed to load.
     *
     * This method will not throw an error when any valid HTTP status code is
     * returned by the remote server, including 404 "Not Found" and 500 "Internal
     * Server Error". The status code for such responses can be retrieved by
     * calling {@link HTTPResponse.status}.
     */
    async goto(url, options) {
      return await this.mainFrame().goto(url, options);
    }
    /**
     * Waits for the page to navigate to a new URL or to reload. It is useful when
     * you run code that will indirectly cause the page to navigate.
     *
     * @example
     *
     * ```ts
     * const [response] = await Promise.all([
     *   page.waitForNavigation(), // The promise resolves after navigation has finished
     *   page.click('a.my-link'), // Clicking the link will indirectly cause a navigation
     * ]);
     * ```
     *
     * @remarks
     *
     * Usage of the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/History_API | History API}
     * to change the URL is considered a navigation.
     *
     * @param options - Navigation parameters which might have the following
     * properties:
     * @returns A `Promise` which resolves to the main resource response.
     *
     * - In case of multiple redirects, the navigation will resolve with the
     *   response of the last redirect.
     * - In case of navigation to a different anchor or navigation due to History
     *   API usage, the navigation will resolve with `null`.
     */
    async waitForNavigation(options = {}) {
      return await this.mainFrame().waitForNavigation(options);
    }
    /**
     * @param urlOrPredicate - A URL or predicate to wait for
     * @param options - Optional waiting parameters
     * @returns Promise which resolves to the matched request
     * @example
     *
     * ```ts
     * const firstRequest = await page.waitForRequest(
     *   'https://example.com/resource'
     * );
     * const finalRequest = await page.waitForRequest(
     *   request => request.url() === 'https://example.com'
     * );
     * return finalRequest.response()?.ok();
     * ```
     *
     * @remarks
     * Optional Waiting Parameters have:
     *
     * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds, pass
     *   `0` to disable the timeout. The default value can be changed by using the
     *   {@link Page.setDefaultTimeout} method.
     */
    waitForRequest(urlOrPredicate, options = {}) {
      const { timeout: ms = this._timeoutSettings.timeout() } = options;
      if (typeof urlOrPredicate === "string") {
        const url = urlOrPredicate;
        urlOrPredicate = /* @__PURE__ */ __name((request) => {
          return request.url() === url;
        }, "urlOrPredicate");
      }
      const observable$ = fromEmitterEvent(
        this,
        "request"
        /* PageEvent.Request */
      ).pipe(filterAsync(urlOrPredicate), raceWith(timeout(ms), fromEmitterEvent(
        this,
        "close"
        /* PageEvent.Close */
      ).pipe(map(() => {
        throw new TargetCloseError("Page closed!");
      }))));
      return firstValueFrom(observable$);
    }
    /**
     * @param urlOrPredicate - A URL or predicate to wait for.
     * @param options - Optional waiting parameters
     * @returns Promise which resolves to the matched response.
     * @example
     *
     * ```ts
     * const firstResponse = await page.waitForResponse(
     *   'https://example.com/resource'
     * );
     * const finalResponse = await page.waitForResponse(
     *   response =>
     *     response.url() === 'https://example.com' && response.status() === 200
     * );
     * const finalResponse = await page.waitForResponse(async response => {
     *   return (await response.text()).includes('<html>');
     * });
     * return finalResponse.ok();
     * ```
     *
     * @remarks
     * Optional Parameter have:
     *
     * - `timeout`: Maximum wait time in milliseconds, defaults to `30` seconds,
     *   pass `0` to disable the timeout. The default value can be changed by using
     *   the {@link Page.setDefaultTimeout} method.
     */
    waitForResponse(urlOrPredicate, options = {}) {
      const { timeout: ms = this._timeoutSettings.timeout() } = options;
      if (typeof urlOrPredicate === "string") {
        const url = urlOrPredicate;
        urlOrPredicate = /* @__PURE__ */ __name((response) => {
          return response.url() === url;
        }, "urlOrPredicate");
      }
      const observable$ = fromEmitterEvent(
        this,
        "response"
        /* PageEvent.Response */
      ).pipe(filterAsync(urlOrPredicate), raceWith(timeout(ms), fromEmitterEvent(
        this,
        "close"
        /* PageEvent.Close */
      ).pipe(map(() => {
        throw new TargetCloseError("Page closed!");
      }))));
      return firstValueFrom(observable$);
    }
    /**
     * Waits for the network to be idle.
     *
     * @param options - Options to configure waiting behavior.
     * @returns A promise which resolves once the network is idle.
     */
    waitForNetworkIdle(options = {}) {
      return firstValueFrom(this.waitForNetworkIdle$(options));
    }
    /**
     * @internal
     */
    waitForNetworkIdle$(options = {}) {
      const { timeout: ms = this._timeoutSettings.timeout(), idleTime = NETWORK_IDLE_TIME, concurrency = 0 } = options;
      return this.#inflight$.pipe(switchMap((inflight) => {
        if (inflight > concurrency) {
          return EMPTY;
        }
        return timer(idleTime);
      }), map(() => {
      }), raceWith(timeout(ms), fromEmitterEvent(
        this,
        "close"
        /* PageEvent.Close */
      ).pipe(map(() => {
        throw new TargetCloseError("Page closed!");
      }))));
    }
    /**
     * Waits for a frame matching the given conditions to appear.
     *
     * @example
     *
     * ```ts
     * const frame = await page.waitForFrame(async frame => {
     *   return frame.name() === 'Test';
     * });
     * ```
     */
    async waitForFrame(urlOrPredicate, options = {}) {
      const { timeout: ms = this.getDefaultTimeout() } = options;
      if (isString(urlOrPredicate)) {
        urlOrPredicate = /* @__PURE__ */ __name((frame) => {
          return urlOrPredicate === frame.url();
        }, "urlOrPredicate");
      }
      return await firstValueFrom(merge(fromEmitterEvent(
        this,
        "frameattached"
        /* PageEvent.FrameAttached */
      ), fromEmitterEvent(
        this,
        "framenavigated"
        /* PageEvent.FrameNavigated */
      ), from(this.frames())).pipe(filterAsync(urlOrPredicate), first(), raceWith(timeout(ms), fromEmitterEvent(
        this,
        "close"
        /* PageEvent.Close */
      ).pipe(map(() => {
        throw new TargetCloseError("Page closed.");
      })))));
    }
    /**
     * Emulates a given device's metrics and user agent.
     *
     * To aid emulation, Puppeteer provides a list of known devices that can be
     * via {@link KnownDevices}.
     *
     * @remarks
     * This method is a shortcut for calling two methods:
     * {@link Page.setUserAgent} and {@link Page.setViewport}.
     *
     * This method will resize the page. A lot of websites don't expect phones to
     * change size, so you should emulate before navigating to the page.
     *
     * @example
     *
     * ```ts
     * import {KnownDevices} from 'puppeteer';
     * const iPhone = KnownDevices['iPhone 6'];
     *
     * (async () => {
     *   const browser = await puppeteer.launch();
     *   const page = await browser.newPage();
     *   await page.emulate(iPhone);
     *   await page.goto('https://www.google.com');
     *   // other actions...
     *   await browser.close();
     * })();
     * ```
     */
    async emulate(device) {
      await Promise.all([
        this.setUserAgent(device.userAgent),
        this.setViewport(device.viewport)
      ]);
    }
    /**
     * Evaluates a function in the page's context and returns the result.
     *
     * If the function passed to `page.evaluate` returns a Promise, the
     * function will wait for the promise to resolve and return its value.
     *
     * @example
     *
     * ```ts
     * const result = await frame.evaluate(() => {
     *   return Promise.resolve(8 * 7);
     * });
     * console.log(result); // prints "56"
     * ```
     *
     * You can pass a string instead of a function (although functions are
     * recommended as they are easier to debug and use with TypeScript):
     *
     * @example
     *
     * ```ts
     * const aHandle = await page.evaluate('1 + 2');
     * ```
     *
     * To get the best TypeScript experience, you should pass in as the
     * generic the type of `pageFunction`:
     *
     * ```ts
     * const aHandle = await page.evaluate(() => 2);
     * ```
     *
     * @example
     *
     * {@link ElementHandle} instances (including {@link JSHandle}s) can be passed
     * as arguments to the `pageFunction`:
     *
     * ```ts
     * const bodyHandle = await page.$('body');
     * const html = await page.evaluate(body => body.innerHTML, bodyHandle);
     * await bodyHandle.dispose();
     * ```
     *
     * @param pageFunction - a function that is run within the page
     * @param args - arguments to be passed to the pageFunction
     *
     * @returns the return value of `pageFunction`.
     */
    async evaluate(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
      return await this.mainFrame().evaluate(pageFunction, ...args);
    }
    /**
     * @internal
     */
    async _maybeWriteBufferToFile(path, _) {
      if (!path) {
        return;
      }
      throw new Error("Cannot write to a path outside of a Node-like environment.");
    }
    /**
     * Captures a screencast of this {@link Page | page}.
     *
     * @example
     * Recording a {@link Page | page}:
     *
     * ```
     * import puppeteer from 'puppeteer';
     *
     * // Launch a browser
     * const browser = await puppeteer.launch();
     *
     * // Create a new page
     * const page = await browser.newPage();
     *
     * // Go to your site.
     * await page.goto("https://www.example.com");
     *
     * // Start recording.
     * const recorder = await page.screencast({path: 'recording.webm'});
     *
     * // Do something.
     *
     * // Stop recording.
     * await recorder.stop();
     *
     * browser.close();
     * ```
     *
     * @param options - Configures screencast behavior.
     *
     * @experimental
     *
     * @remarks
     *
     * All recordings will be {@link https://www.webmproject.org/ | WebM} format using
     * the {@link https://www.webmproject.org/vp9/ | VP9} video codec. The FPS is 30.
     *
     * You must have {@link https://ffmpeg.org/ | ffmpeg} installed on your system.
     */
    // async screencast(
    //   options: Readonly<ScreencastOptions> = {}
    // ): Promise<ScreenRecorder> {
    //   const [{ScreenRecorder}, [width, height, devicePixelRatio]] =
    //     await Promise.all([
    //       import('../node/ScreenRecorder.js'),
    //       this.#getNativePixelDimensions(),
    //     ]);
    //   let crop: BoundingBox | undefined;
    //   if (options.crop) {
    //     const {
    //       x,
    //       y,
    //       width: cropWidth,
    //       height: cropHeight,
    //     } = roundRectangle(normalizeRectangle(options.crop));
    //     if (x < 0 || y < 0) {
    //       throw new Error(
    //         `\`crop.x\` and \`crop.y\` must be greater than or equal to 0.`
    //       );
    //     }
    //     if (cropWidth <= 0 || cropHeight <= 0) {
    //       throw new Error(
    //         `\`crop.height\` and \`crop.width\` must be greater than or equal to 0.`
    //       );
    //     }
    //     const viewportWidth = width / devicePixelRatio;
    //     const viewportHeight = height / devicePixelRatio;
    //     if (x + cropWidth > viewportWidth) {
    //       throw new Error(
    //         `\`crop.width\` cannot be larger than the viewport width (${viewportWidth}).`
    //       );
    //     }
    //     if (y + cropHeight > viewportHeight) {
    //       throw new Error(
    //      `\`crop.height\` cannot be larger than the viewport height (${viewportHeight}).`
    //       );
    //     }
    //     crop = {
    //       x: x * devicePixelRatio,
    //       y: y * devicePixelRatio,
    //       width: cropWidth * devicePixelRatio,
    //       height: cropHeight * devicePixelRatio,
    //     };
    //   }
    //   if (options.speed !== undefined && options.speed <= 0) {
    //     throw new Error(`\`speed\` must be greater than 0.`);
    //   }
    //   if (options.scale !== undefined && options.scale <= 0) {
    //     throw new Error(`\`scale\` must be greater than 0.`);
    //   }
    //   const recorder = new ScreenRecorder(this, width, height, {
    //     ...options,
    //     path: options.ffmpegPath,
    //     crop,
    //   });
    //   try {
    //     await this._startScreencast();
    //   } catch (error) {
    //     void recorder.stop();
    //     throw error;
    //   }
    //   if (options.path) {
    //     const {createWriteStream} = await import('fs');
    //     const stream = createWriteStream(options.path, 'binary');
    //     recorder.pipe(stream);
    //   }
    //   return recorder;
    // }
    #screencastSessionCount = 0;
    #startScreencastPromise;
    /**
     * @internal
     */
    async _startScreencast() {
      ++this.#screencastSessionCount;
      if (!this.#startScreencastPromise) {
        this.#startScreencastPromise = this.mainFrame().client.send("Page.startScreencast", { format: "png" }).then(() => {
          return new Promise((resolve) => {
            return this.mainFrame().client.once("Page.screencastFrame", () => {
              return resolve();
            });
          });
        });
      }
      await this.#startScreencastPromise;
    }
    /**
     * @internal
     */
    async _stopScreencast() {
      --this.#screencastSessionCount;
      if (!this.#startScreencastPromise) {
        return;
      }
      this.#startScreencastPromise = void 0;
      if (this.#screencastSessionCount === 0) {
        await this.mainFrame().client.send("Page.stopScreencast");
      }
    }
    async screenshot(userOptions = {}) {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        await this.bringToFront();
        const options = {
          ...userOptions,
          clip: userOptions.clip ? {
            ...userOptions.clip
          } : void 0
        };
        if (options.type === void 0 && options.path !== void 0) {
          const filePath = options.path;
          const extension = filePath.slice(filePath.lastIndexOf(".") + 1).toLowerCase();
          switch (extension) {
            case "png":
              options.type = "png";
              break;
            case "jpeg":
            case "jpg":
              options.type = "jpeg";
              break;
            case "webp":
              options.type = "webp";
              break;
          }
        }
        if (options.quality !== void 0) {
          if (options.quality < 0 && options.quality > 100) {
            throw new Error(`Expected 'quality' (${options.quality}) to be between 0 and 100, inclusive.`);
          }
          if (options.type === void 0 || !["jpeg", "webp"].includes(options.type)) {
            throw new Error(`${options.type ?? "png"} screenshots do not support 'quality'.`);
          }
        }
        if (options.clip) {
          if (options.clip.width <= 0) {
            throw new Error("'width' in 'clip' must be positive.");
          }
          if (options.clip.height <= 0) {
            throw new Error("'height' in 'clip' must be positive.");
          }
        }
        setDefaultScreenshotOptions(options);
        const stack = __addDisposableResource3(env_1, new AsyncDisposableStack(), true);
        if (options.clip) {
          if (options.fullPage) {
            throw new Error("'clip' and 'fullPage' are mutually exclusive");
          }
          options.clip = roundRectangle(normalizeRectangle(options.clip));
        } else {
          if (options.fullPage) {
            if (!options.captureBeyondViewport) {
              const scrollDimensions = await this.mainFrame().isolatedRealm().evaluate(() => {
                const element = document.documentElement;
                return {
                  width: element.scrollWidth,
                  height: element.scrollHeight
                };
              });
              const viewport = this.viewport();
              await this.setViewport({
                ...viewport,
                ...scrollDimensions
              });
              stack.defer(async () => {
                if (viewport) {
                  await this.setViewport(viewport).catch(debugError);
                } else {
                  await this.setViewport({
                    width: 0,
                    height: 0
                  }).catch(debugError);
                }
              });
            }
          } else {
            options.captureBeyondViewport = false;
          }
        }
        const data = await this._screenshot(options);
        if (options.encoding === "base64") {
          return data;
        }
        const buffer = Buffer.from(data, "base64");
        await this._maybeWriteBufferToFile(options.path, buffer);
        return buffer;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        const result_1 = __disposeResources3(env_1);
        if (result_1)
          await result_1;
      }
    }
    /**
     * The page's title
     *
     * @remarks
     *
     * Shortcut for {@link Frame.title | page.mainFrame().title()}.
     */
    async title() {
      return await this.mainFrame().title();
    }
    /**
     * This method fetches an element with `selector`, scrolls it into view if
     * needed, and then uses {@link Page.mouse} to click in the center of the
     * element. If there's no element matching `selector`, the method throws an
     * error.
     *
     * @remarks
     *
     * Bear in mind that if `click()` triggers a navigation event and
     * there's a separate `page.waitForNavigation()` promise to be resolved, you
     * may end up with a race condition that yields unexpected results. The
     * correct pattern for click and wait for navigation is the following:
     *
     * ```ts
     * const [response] = await Promise.all([
     *   page.waitForNavigation(waitOptions),
     *   page.click(selector, clickOptions),
     * ]);
     * ```
     *
     * Shortcut for {@link Frame.click | page.mainFrame().click(selector[, options]) }.
     * @param selector - A `selector` to search for element to click. If there are
     * multiple elements satisfying the `selector`, the first will be clicked
     * @param options - `Object`
     * @returns Promise which resolves when the element matching `selector` is
     * successfully clicked. The Promise will be rejected if there is no element
     * matching `selector`.
     */
    click(selector, options) {
      return this.mainFrame().click(selector, options);
    }
    /**
     * This method fetches an element with `selector` and focuses it. If there's no
     * element matching `selector`, the method throws an error.
     * @param selector - A
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector }
     * of an element to focus. If there are multiple elements satisfying the
     * selector, the first will be focused.
     * @returns Promise which resolves when the element matching selector is
     * successfully focused. The promise will be rejected if there is no element
     * matching selector.
     *
     * @remarks
     *
     * Shortcut for {@link Frame.focus | page.mainFrame().focus(selector)}.
     */
    focus(selector) {
      return this.mainFrame().focus(selector);
    }
    /**
     * This method fetches an element with `selector`, scrolls it into view if
     * needed, and then uses {@link Page.mouse}
     * to hover over the center of the element.
     * If there's no element matching `selector`, the method throws an error.
     * @param selector - A
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
     * to search for element to hover. If there are multiple elements satisfying
     * the selector, the first will be hovered.
     * @returns Promise which resolves when the element matching `selector` is
     * successfully hovered. Promise gets rejected if there's no element matching
     * `selector`.
     *
     * @remarks
     *
     * Shortcut for {@link Page.hover | page.mainFrame().hover(selector)}.
     */
    hover(selector) {
      return this.mainFrame().hover(selector);
    }
    /**
     * Triggers a `change` and `input` event once all the provided options have been
     * selected. If there's no `<select>` element matching `selector`, the method
     * throws an error.
     *
     * @example
     *
     * ```ts
     * page.select('select#colors', 'blue'); // single selection
     * page.select('select#colors', 'red', 'green', 'blue'); // multiple selections
     * ```
     *
     * @param selector - A
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | Selector}
     * to query the page for
     * @param values - Values of options to select. If the `<select>` has the
     * `multiple` attribute, all values are considered, otherwise only the first one
     * is taken into account.
     * @returns
     *
     * @remarks
     *
     * Shortcut for {@link Frame.select | page.mainFrame().select()}
     */
    select(selector, ...values) {
      return this.mainFrame().select(selector, ...values);
    }
    /**
     * This method fetches an element with `selector`, scrolls it into view if
     * needed, and then uses {@link Page.touchscreen}
     * to tap in the center of the element.
     * If there's no element matching `selector`, the method throws an error.
     * @param selector - A
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | Selector}
     * to search for element to tap. If there are multiple elements satisfying the
     * selector, the first will be tapped.
     *
     * @remarks
     *
     * Shortcut for {@link Frame.tap | page.mainFrame().tap(selector)}.
     */
    tap(selector) {
      return this.mainFrame().tap(selector);
    }
    /**
     * Sends a `keydown`, `keypress/input`, and `keyup` event for each character
     * in the text.
     *
     * To press a special key, like `Control` or `ArrowDown`, use {@link Keyboard.press}.
     * @example
     *
     * ```ts
     * await page.type('#mytextarea', 'Hello');
     * // Types instantly
     * await page.type('#mytextarea', 'World', {delay: 100});
     * // Types slower, like a user
     * ```
     *
     * @param selector - A
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
     * of an element to type into. If there are multiple elements satisfying the
     * selector, the first will be used.
     * @param text - A text to type into a focused element.
     * @param options - have property `delay` which is the Time to wait between
     * key presses in milliseconds. Defaults to `0`.
     * @returns
     */
    type(selector, text, options) {
      return this.mainFrame().type(selector, text, options);
    }
    /**
     * Wait for the `selector` to appear in page. If at the moment of calling the
     * method the `selector` already exists, the method will return immediately. If
     * the `selector` doesn't appear after the `timeout` milliseconds of waiting, the
     * function will throw.
     *
     * @example
     * This method works across navigations:
     *
     * ```ts
     * import puppeteer from 'puppeteer';
     * (async () => {
     *   const browser = await puppeteer.launch();
     *   const page = await browser.newPage();
     *   let currentURL;
     *   page
     *     .waitForSelector('img')
     *     .then(() => console.log('First URL with image: ' + currentURL));
     *   for (currentURL of [
     *     'https://example.com',
     *     'https://google.com',
     *     'https://bbc.com',
     *   ]) {
     *     await page.goto(currentURL);
     *   }
     *   await browser.close();
     * })();
     * ```
     *
     * @param selector - A
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
     * of an element to wait for
     * @param options - Optional waiting parameters
     * @returns Promise which resolves when element specified by selector string
     * is added to DOM. Resolves to `null` if waiting for hidden: `true` and
     * selector is not found in DOM.
     *
     * @remarks
     * The optional Parameter in Arguments `options` are:
     *
     * - `visible`: A boolean wait for element to be present in DOM and to be
     *   visible, i.e. to not have `display: none` or `visibility: hidden` CSS
     *   properties. Defaults to `false`.
     *
     * - `hidden`: Wait for element to not be found in the DOM or to be hidden,
     *   i.e. have `display: none` or `visibility: hidden` CSS properties. Defaults to
     *   `false`.
     *
     * - `timeout`: maximum time to wait for in milliseconds. Defaults to `30000`
     *   (30 seconds). Pass `0` to disable timeout. The default value can be changed
     *   by using the {@link Page.setDefaultTimeout} method.
     */
    async waitForSelector(selector, options = {}) {
      return await this.mainFrame().waitForSelector(selector, options);
    }
    /**
     * Waits for the provided function, `pageFunction`, to return a truthy value when
     * evaluated in the page's context.
     *
     * @example
     * {@link Page.waitForFunction} can be used to observe a viewport size change:
     *
     * ```ts
     * import puppeteer from 'puppeteer';
     * (async () => {
     *   const browser = await puppeteer.launch();
     *   const page = await browser.newPage();
     *   const watchDog = page.waitForFunction('window.innerWidth < 100');
     *   await page.setViewport({width: 50, height: 50});
     *   await watchDog;
     *   await browser.close();
     * })();
     * ```
     *
     * @example
     * Arguments can be passed from Node.js to `pageFunction`:
     *
     * ```ts
     * const selector = '.foo';
     * await page.waitForFunction(
     *   selector => !!document.querySelector(selector),
     *   {},
     *   selector
     * );
     * ```
     *
     * @example
     * The provided `pageFunction` can be asynchronous:
     *
     * ```ts
     * const username = 'github-username';
     * await page.waitForFunction(
     *   async username => {
     *     const githubResponse = await fetch(
     *       `https://api.github.com/users/${username}`
     *     );
     *     const githubUser = await githubResponse.json();
     *     // show the avatar
     *     const img = document.createElement('img');
     *     img.src = githubUser.avatar_url;
     *     // wait 3 seconds
     *     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
     *     img.remove();
     *   },
     *   {},
     *   username
     * );
     * ```
     *
     * @param pageFunction - Function to be evaluated in browser context until it returns a
     * truthy value.
     * @param options - Options for configuring waiting behavior.
     */
    waitForFunction(pageFunction, options, ...args) {
      return this.mainFrame().waitForFunction(pageFunction, options, ...args);
    }
    /** @internal */
    [(_screenshot_decorators = [guarded(function() {
      return this.browser();
    })], disposeSymbol)]() {
      return void this.close().catch(debugError);
    }
    /** @internal */
    [asyncDisposeSymbol]() {
      return this.close();
    }
  }, "Page");
})();
function normalizeRectangle(clip) {
  return {
    ...clip,
    ...clip.width < 0 ? {
      x: clip.x + clip.width,
      width: -clip.width
    } : {
      x: clip.x,
      width: clip.width
    },
    ...clip.height < 0 ? {
      y: clip.y + clip.height,
      height: -clip.height
    } : {
      y: clip.y,
      height: clip.height
    }
  };
}
__name(normalizeRectangle, "normalizeRectangle");
function roundRectangle(clip) {
  const x = Math.round(clip.x);
  const y = Math.round(clip.y);
  const width = Math.round(clip.width + clip.x - x);
  const height = Math.round(clip.height + clip.y - y);
  return { ...clip, x, y, width, height };
}
__name(roundRectangle, "roundRectangle");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/ConsoleMessage.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ConsoleMessage = class {
  #type;
  #text;
  #args;
  #stackTraceLocations;
  /**
   * @public
   */
  constructor(type, text, args, stackTraceLocations) {
    this.#type = type;
    this.#text = text;
    this.#args = args;
    this.#stackTraceLocations = stackTraceLocations;
  }
  /**
   * The type of the console message.
   */
  type() {
    return this.#type;
  }
  /**
   * The text of the console message.
   */
  text() {
    return this.#text;
  }
  /**
   * An array of arguments passed to the console.
   */
  args() {
    return this.#args;
  }
  /**
   * The location of the console message.
   */
  location() {
    return this.#stackTraceLocations[0] ?? {};
  }
  /**
   * The array of locations on the stack of the console message.
   */
  stackTrace() {
    return this.#stackTraceLocations;
  }
};
__name(ConsoleMessage, "ConsoleMessage");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/FileChooser.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FileChooser = class {
  #element;
  #multiple;
  #handled = false;
  /**
   * @internal
   */
  constructor(element, event) {
    this.#element = element;
    this.#multiple = event.mode !== "selectSingle";
  }
  /**
   * Whether file chooser allow for
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple | multiple}
   * file selection.
   */
  isMultiple() {
    return this.#multiple;
  }
  /**
   * Accept the file chooser request with the given file paths.
   *
   * @remarks This will not validate whether the file paths exists. Also, if a
   * path is relative, then it is resolved against the
   * {@link https://nodejs.org/api/process.html#process_process_cwd | current working directory}.
   * For locals script connecting to remote chrome environments, paths must be
   * absolute.
   */
  async accept(paths) {
    assert3(!this.#handled, "Cannot accept FileChooser which is already handled!");
    this.#handled = true;
    await this.#element.uploadFile(...paths);
  }
  /**
   * Closes the file chooser without selecting any files.
   */
  async cancel() {
    assert3(!this.#handled, "Cannot cancel FileChooser which is already handled!");
    this.#handled = true;
    await this.#element.evaluate((element) => {
      element.dispatchEvent(new Event("cancel", { bubbles: true }));
    });
  }
};
__name(FileChooser, "FileChooser");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/NetworkManagerEvents.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var NetworkManagerEvent;
(function(NetworkManagerEvent2) {
  NetworkManagerEvent2.Request = Symbol("NetworkManager.Request");
  NetworkManagerEvent2.RequestServedFromCache = Symbol("NetworkManager.RequestServedFromCache");
  NetworkManagerEvent2.Response = Symbol("NetworkManager.Response");
  NetworkManagerEvent2.RequestFailed = Symbol("NetworkManager.RequestFailed");
  NetworkManagerEvent2.RequestFinished = Symbol("NetworkManager.RequestFinished");
})(NetworkManagerEvent || (NetworkManagerEvent = {}));

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Accessibility.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Accessibility = class {
  #client;
  /**
   * @internal
   */
  constructor(client) {
    this.#client = client;
  }
  /**
   * @internal
   */
  updateClient(client) {
    this.#client = client;
  }
  /**
   * Captures the current state of the accessibility tree.
   * The returned object represents the root accessible node of the page.
   *
   * @remarks
   *
   * **NOTE** The Chrome accessibility tree contains nodes that go unused on
   * most platforms and by most screen readers. Puppeteer will discard them as
   * well for an easier to process tree, unless `interestingOnly` is set to
   * `false`.
   *
   * @example
   * An example of dumping the entire accessibility tree:
   *
   * ```ts
   * const snapshot = await page.accessibility.snapshot();
   * console.log(snapshot);
   * ```
   *
   * @example
   * An example of logging the focused node's name:
   *
   * ```ts
   * const snapshot = await page.accessibility.snapshot();
   * const node = findFocusedNode(snapshot);
   * console.log(node && node.name);
   *
   * function findFocusedNode(node) {
   *   if (node.focused) return node;
   *   for (const child of node.children || []) {
   *     const foundNode = findFocusedNode(child);
   *     return foundNode;
   *   }
   *   return null;
   * }
   * ```
   *
   * @returns An AXNode object representing the snapshot.
   */
  async snapshot(options = {}) {
    const { interestingOnly = true, root = null } = options;
    const { nodes } = await this.#client.send("Accessibility.getFullAXTree");
    let backendNodeId;
    if (root) {
      const { node } = await this.#client.send("DOM.describeNode", {
        objectId: root.id
      });
      backendNodeId = node.backendNodeId;
    }
    const defaultRoot = AXNode.createTree(nodes);
    let needle = defaultRoot;
    if (backendNodeId) {
      needle = defaultRoot.find((node) => {
        return node.payload.backendDOMNodeId === backendNodeId;
      });
      if (!needle) {
        return null;
      }
    }
    if (!interestingOnly) {
      return this.serializeTree(needle)[0] ?? null;
    }
    const interestingNodes = /* @__PURE__ */ new Set();
    this.collectInterestingNodes(interestingNodes, defaultRoot, false);
    if (!interestingNodes.has(needle)) {
      return null;
    }
    return this.serializeTree(needle, interestingNodes)[0] ?? null;
  }
  serializeTree(node, interestingNodes) {
    const children = [];
    for (const child of node.children) {
      children.push(...this.serializeTree(child, interestingNodes));
    }
    if (interestingNodes && !interestingNodes.has(node)) {
      return children;
    }
    const serializedNode = node.serialize();
    if (children.length) {
      serializedNode.children = children;
    }
    return [serializedNode];
  }
  collectInterestingNodes(collection, node, insideControl) {
    if (node.isInteresting(insideControl)) {
      collection.add(node);
    }
    if (node.isLeafNode()) {
      return;
    }
    insideControl = insideControl || node.isControl();
    for (const child of node.children) {
      this.collectInterestingNodes(collection, child, insideControl);
    }
  }
};
__name(Accessibility, "Accessibility");
var AXNode = class {
  payload;
  children = [];
  #richlyEditable = false;
  #editable = false;
  #focusable = false;
  #hidden = false;
  #name;
  #role;
  #ignored;
  #cachedHasFocusableChild;
  constructor(payload) {
    this.payload = payload;
    this.#name = this.payload.name ? this.payload.name.value : "";
    this.#role = this.payload.role ? this.payload.role.value : "Unknown";
    this.#ignored = this.payload.ignored;
    for (const property of this.payload.properties || []) {
      if (property.name === "editable") {
        this.#richlyEditable = property.value.value === "richtext";
        this.#editable = true;
      }
      if (property.name === "focusable") {
        this.#focusable = property.value.value;
      }
      if (property.name === "hidden") {
        this.#hidden = property.value.value;
      }
    }
  }
  #isPlainTextField() {
    if (this.#richlyEditable) {
      return false;
    }
    if (this.#editable) {
      return true;
    }
    return this.#role === "textbox" || this.#role === "searchbox";
  }
  #isTextOnlyObject() {
    const role = this.#role;
    return role === "LineBreak" || role === "text" || role === "InlineTextBox" || role === "StaticText";
  }
  #hasFocusableChild() {
    if (this.#cachedHasFocusableChild === void 0) {
      this.#cachedHasFocusableChild = false;
      for (const child of this.children) {
        if (child.#focusable || child.#hasFocusableChild()) {
          this.#cachedHasFocusableChild = true;
          break;
        }
      }
    }
    return this.#cachedHasFocusableChild;
  }
  find(predicate) {
    if (predicate(this)) {
      return this;
    }
    for (const child of this.children) {
      const result = child.find(predicate);
      if (result) {
        return result;
      }
    }
    return null;
  }
  isLeafNode() {
    if (!this.children.length) {
      return true;
    }
    if (this.#isPlainTextField() || this.#isTextOnlyObject()) {
      return true;
    }
    switch (this.#role) {
      case "doc-cover":
      case "graphics-symbol":
      case "img":
      case "image":
      case "Meter":
      case "scrollbar":
      case "slider":
      case "separator":
      case "progressbar":
        return true;
      default:
        break;
    }
    if (this.#hasFocusableChild()) {
      return false;
    }
    if (this.#focusable && this.#name) {
      return true;
    }
    if (this.#role === "heading" && this.#name) {
      return true;
    }
    return false;
  }
  isControl() {
    switch (this.#role) {
      case "button":
      case "checkbox":
      case "ColorWell":
      case "combobox":
      case "DisclosureTriangle":
      case "listbox":
      case "menu":
      case "menubar":
      case "menuitem":
      case "menuitemcheckbox":
      case "menuitemradio":
      case "radio":
      case "scrollbar":
      case "searchbox":
      case "slider":
      case "spinbutton":
      case "switch":
      case "tab":
      case "textbox":
      case "tree":
      case "treeitem":
        return true;
      default:
        return false;
    }
  }
  isInteresting(insideControl) {
    const role = this.#role;
    if (role === "Ignored" || this.#hidden || this.#ignored) {
      return false;
    }
    if (this.#focusable || this.#richlyEditable) {
      return true;
    }
    if (this.isControl()) {
      return true;
    }
    if (insideControl) {
      return false;
    }
    return this.isLeafNode() && !!this.#name;
  }
  serialize() {
    const properties = /* @__PURE__ */ new Map();
    for (const property of this.payload.properties || []) {
      properties.set(property.name.toLowerCase(), property.value.value);
    }
    if (this.payload.name) {
      properties.set("name", this.payload.name.value);
    }
    if (this.payload.value) {
      properties.set("value", this.payload.value.value);
    }
    if (this.payload.description) {
      properties.set("description", this.payload.description.value);
    }
    const node = {
      role: this.#role
    };
    const userStringProperties = [
      "name",
      "value",
      "description",
      "keyshortcuts",
      "roledescription",
      "valuetext"
    ];
    const getUserStringPropertyValue = /* @__PURE__ */ __name((key) => {
      return properties.get(key);
    }, "getUserStringPropertyValue");
    for (const userStringProperty of userStringProperties) {
      if (!properties.has(userStringProperty)) {
        continue;
      }
      node[userStringProperty] = getUserStringPropertyValue(userStringProperty);
    }
    const booleanProperties = [
      "disabled",
      "expanded",
      "focused",
      "modal",
      "multiline",
      "multiselectable",
      "readonly",
      "required",
      "selected"
    ];
    const getBooleanPropertyValue = /* @__PURE__ */ __name((key) => {
      return properties.get(key);
    }, "getBooleanPropertyValue");
    for (const booleanProperty of booleanProperties) {
      if (booleanProperty === "focused" && this.#role === "RootWebArea") {
        continue;
      }
      const value = getBooleanPropertyValue(booleanProperty);
      if (!value) {
        continue;
      }
      node[booleanProperty] = getBooleanPropertyValue(booleanProperty);
    }
    const tristateProperties = ["checked", "pressed"];
    for (const tristateProperty of tristateProperties) {
      if (!properties.has(tristateProperty)) {
        continue;
      }
      const value = properties.get(tristateProperty);
      node[tristateProperty] = value === "mixed" ? "mixed" : value === "true" ? true : false;
    }
    const numericalProperties = [
      "level",
      "valuemax",
      "valuemin"
    ];
    const getNumericalPropertyValue = /* @__PURE__ */ __name((key) => {
      return properties.get(key);
    }, "getNumericalPropertyValue");
    for (const numericalProperty of numericalProperties) {
      if (!properties.has(numericalProperty)) {
        continue;
      }
      node[numericalProperty] = getNumericalPropertyValue(numericalProperty);
    }
    const tokenProperties = [
      "autocomplete",
      "haspopup",
      "invalid",
      "orientation"
    ];
    const getTokenPropertyValue = /* @__PURE__ */ __name((key) => {
      return properties.get(key);
    }, "getTokenPropertyValue");
    for (const tokenProperty of tokenProperties) {
      const value = getTokenPropertyValue(tokenProperty);
      if (!value || value === "false") {
        continue;
      }
      node[tokenProperty] = getTokenPropertyValue(tokenProperty);
    }
    return node;
  }
  static createTree(payloads) {
    const nodeById = /* @__PURE__ */ new Map();
    for (const payload of payloads) {
      nodeById.set(payload.nodeId, new AXNode(payload));
    }
    for (const node of nodeById.values()) {
      for (const childId of node.payload.childIds || []) {
        const child = nodeById.get(childId);
        if (child) {
          node.children.push(child);
        }
      }
    }
    return nodeById.values().next().value;
  }
};
__name(AXNode, "AXNode");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Binding.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/JSHandle.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __runInitializers2 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate2 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context3 = {};
    for (var p in contextIn)
      context3[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context3.access[p] = contextIn.access[p];
    context3.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context3);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource4 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources4 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
var JSHandle = (() => {
  let _classDecorators = [moveable];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _instanceExtraInitializers = [];
  let _getProperty_decorators;
  let _getProperties_decorators;
  var JSHandle2 = /* @__PURE__ */ __name(class {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      __esDecorate2(this, null, _getProperty_decorators, { kind: "method", name: "getProperty", static: false, private: false, access: { has: (obj) => "getProperty" in obj, get: (obj) => obj.getProperty }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate2(this, null, _getProperties_decorators, { kind: "method", name: "getProperties", static: false, private: false, access: { has: (obj) => "getProperties" in obj, get: (obj) => obj.getProperties }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate2(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      JSHandle2 = _classThis = _classDescriptor.value;
      if (_metadata)
        Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers2(_classThis, _classExtraInitializers);
    }
    /**
     * @internal
     */
    constructor() {
      __runInitializers2(this, _instanceExtraInitializers);
    }
    /**
     * Evaluates the given function with the current handle as its first argument.
     */
    async evaluate(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
      return await this.realm.evaluate(pageFunction, this, ...args);
    }
    /**
     * Evaluates the given function with the current handle as its first argument.
     *
     */
    async evaluateHandle(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
      return await this.realm.evaluateHandle(pageFunction, this, ...args);
    }
    /**
     * @internal
     */
    async getProperty(propertyName) {
      return await this.evaluateHandle((object, propertyName2) => {
        return object[propertyName2];
      }, propertyName);
    }
    /**
     * Gets a map of handles representing the properties of the current handle.
     *
     * @example
     *
     * ```ts
     * const listHandle = await page.evaluateHandle(() => document.body.children);
     * const properties = await listHandle.getProperties();
     * const children = [];
     * for (const property of properties.values()) {
     *   const element = property.asElement();
     *   if (element) {
     *     children.push(element);
     *   }
     * }
     * children; // holds elementHandles to all children of document.body
     * ```
     */
    async getProperties() {
      const propertyNames = await this.evaluate((object) => {
        const enumerableProperties = [];
        const descriptors = Object.getOwnPropertyDescriptors(object);
        for (const propertyName in descriptors) {
          if (descriptors[propertyName]?.enumerable) {
            enumerableProperties.push(propertyName);
          }
        }
        return enumerableProperties;
      });
      const map2 = /* @__PURE__ */ new Map();
      const results = await Promise.all(propertyNames.map((key) => {
        return this.getProperty(key);
      }));
      for (const [key, value] of Object.entries(propertyNames)) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
          const handle = __addDisposableResource4(env_1, results[key], false);
          if (handle) {
            map2.set(value, handle.move());
          }
        } catch (e_1) {
          env_1.error = e_1;
          env_1.hasError = true;
        } finally {
          __disposeResources4(env_1);
        }
      }
      return map2;
    }
    /** @internal */
    [(_getProperty_decorators = [throwIfDisposed()], _getProperties_decorators = [throwIfDisposed()], disposeSymbol)]() {
      return void this.dispose().catch(debugError);
    }
    /** @internal */
    [asyncDisposeSymbol]() {
      return this.dispose();
    }
  }, "JSHandle");
  return JSHandle2 = _classThis;
})();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Binding.js
var __addDisposableResource5 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources5 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
var Binding = class {
  #name;
  #fn;
  constructor(name, fn) {
    this.#name = name;
    this.#fn = fn;
  }
  get name() {
    return this.#name;
  }
  /**
   * @param context - Context to run the binding in; the context should have
   * the binding added to it beforehand.
   * @param id - ID of the call. This should come from the CDP
   * `onBindingCalled` response.
   * @param args - Plain arguments from CDP.
   */
  async run(context3, id, args, isTrivial) {
    const stack = new DisposableStack();
    try {
      if (!isTrivial) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
          const handles = __addDisposableResource5(env_1, await context3.evaluateHandle((name, seq) => {
            return globalThis[name].args.get(seq);
          }, this.#name, id), false);
          const properties = await handles.getProperties();
          for (const [index, handle] of properties) {
            if (index in args) {
              switch (handle.remoteObject().subtype) {
                case "node":
                  args[+index] = handle;
                  break;
                default:
                  stack.use(handle);
              }
            } else {
              stack.use(handle);
            }
          }
        } catch (e_1) {
          env_1.error = e_1;
          env_1.hasError = true;
        } finally {
          __disposeResources5(env_1);
        }
      }
      await context3.evaluate((name, seq, result) => {
        const callbacks = globalThis[name].callbacks;
        callbacks.get(seq).resolve(result);
        callbacks.delete(seq);
      }, this.#name, id, await this.#fn(...args));
      for (const arg of args) {
        if (arg instanceof JSHandle) {
          stack.use(arg);
        }
      }
    } catch (error3) {
      if (isErrorLike(error3)) {
        await context3.evaluate((name, seq, message, stack2) => {
          const error4 = new Error(message);
          error4.stack = stack2;
          const callbacks = globalThis[name].callbacks;
          callbacks.get(seq).reject(error4);
          callbacks.delete(seq);
        }, this.#name, id, error3.message, error3.stack).catch(debugError);
      } else {
        await context3.evaluate((name, seq, error4) => {
          const callbacks = globalThis[name].callbacks;
          callbacks.get(seq).reject(error4);
          callbacks.delete(seq);
        }, this.#name, id, error3).catch(debugError);
      }
    }
  }
};
__name(Binding, "Binding");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Connection.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var debugProtocolSend = debug4("puppeteer:protocol:SEND \u25BA");
var debugProtocolReceive = debug4("puppeteer:protocol:RECV \u25C0");
var Connection = class extends EventEmitter2 {
  #url;
  #transport;
  #delay;
  #timeout;
  #sessions = /* @__PURE__ */ new Map();
  #closed = false;
  #manuallyAttached = /* @__PURE__ */ new Set();
  #callbacks = new CallbackRegistry();
  constructor(url, transport, delay = 0, timeout2) {
    super();
    this.#url = url;
    this.#delay = delay;
    this.#timeout = timeout2 ?? 18e4;
    this.#transport = transport;
    this.#transport.onmessage = this.onMessage.bind(this);
    this.#transport.onclose = this.#onClose.bind(this);
  }
  static fromSession(session) {
    return session.connection();
  }
  /**
   * @internal
   */
  get delay() {
    return this.#delay;
  }
  get timeout() {
    return this.#timeout;
  }
  /**
   * @internal
   */
  get _closed() {
    return this.#closed;
  }
  /**
   * @internal
   */
  get _sessions() {
    return this.#sessions;
  }
  /**
   * @param sessionId - The session id
   * @returns The current CDP session if it exists
   */
  session(sessionId) {
    return this.#sessions.get(sessionId) || null;
  }
  url() {
    return this.#url;
  }
  send(method, params, options) {
    return this._rawSend(this.#callbacks, method, params, void 0, options);
  }
  /**
   * @internal
   */
  _rawSend(callbacks, method, params, sessionId, options) {
    assert3(!this.#closed, "Protocol error: Connection closed.");
    return callbacks.create(method, options?.timeout ?? this.#timeout, (id) => {
      const stringifiedMessage = JSON.stringify({
        method,
        params,
        id,
        sessionId
      });
      debugProtocolSend(stringifiedMessage);
      this.#transport.send(stringifiedMessage);
    });
  }
  /**
   * @internal
   */
  async closeBrowser() {
    await this.send("Browser.close");
  }
  /**
   * @internal
   */
  async onMessage(message) {
    if (this.#delay) {
      await new Promise((r) => {
        return setTimeout(r, this.#delay);
      });
    }
    debugProtocolReceive(message);
    const object = JSON.parse(message);
    if (object.method === "Target.attachedToTarget") {
      const sessionId = object.params.sessionId;
      const session = new CdpCDPSession(this, object.params.targetInfo.type, sessionId, object.sessionId);
      this.#sessions.set(sessionId, session);
      this.emit(CDPSessionEvent.SessionAttached, session);
      const parentSession = this.#sessions.get(object.sessionId);
      if (parentSession) {
        parentSession.emit(CDPSessionEvent.SessionAttached, session);
      }
    } else if (object.method === "Target.detachedFromTarget") {
      const session = this.#sessions.get(object.params.sessionId);
      if (session) {
        session._onClosed();
        this.#sessions.delete(object.params.sessionId);
        this.emit(CDPSessionEvent.SessionDetached, session);
        const parentSession = this.#sessions.get(object.sessionId);
        if (parentSession) {
          parentSession.emit(CDPSessionEvent.SessionDetached, session);
        }
      }
    }
    if (object.sessionId) {
      const session = this.#sessions.get(object.sessionId);
      if (session) {
        session._onMessage(object);
      }
    } else if (object.id) {
      if (object.error) {
        this.#callbacks.reject(object.id, createProtocolErrorMessage(object), object.error.message);
      } else {
        this.#callbacks.resolve(object.id, object.result);
      }
    } else {
      this.emit(object.method, object.params);
    }
  }
  #onClose() {
    if (this.#closed) {
      return;
    }
    this.#closed = true;
    this.#transport.onmessage = void 0;
    this.#transport.onclose = void 0;
    this.#callbacks.clear();
    for (const session of this.#sessions.values()) {
      session._onClosed();
    }
    this.#sessions.clear();
    this.emit(CDPSessionEvent.Disconnected, void 0);
  }
  dispose() {
    this.#onClose();
    this.#transport.close();
  }
  /**
   * @internal
   */
  isAutoAttached(targetId) {
    return !this.#manuallyAttached.has(targetId);
  }
  /**
   * @internal
   */
  async _createSession(targetInfo, isAutoAttachEmulated = true) {
    if (!isAutoAttachEmulated) {
      this.#manuallyAttached.add(targetInfo.targetId);
    }
    const { sessionId } = await this.send("Target.attachToTarget", {
      targetId: targetInfo.targetId,
      flatten: true
    });
    this.#manuallyAttached.delete(targetInfo.targetId);
    const session = this.#sessions.get(sessionId);
    if (!session) {
      throw new Error("CDPSession creation failed.");
    }
    return session;
  }
  /**
   * @param targetInfo - The target info
   * @returns The CDP session that is created
   */
  async createSession(targetInfo) {
    return await this._createSession(targetInfo, false);
  }
  /**
   * @internal
   */
  getPendingProtocolErrors() {
    const result = [];
    result.push(...this.#callbacks.getPendingProtocolErrors());
    for (const session of this.#sessions.values()) {
      result.push(...session.getPendingProtocolErrors());
    }
    return result;
  }
};
__name(Connection, "Connection");
function isTargetClosedError(error3) {
  return error3 instanceof TargetCloseError;
}
__name(isTargetClosedError, "isTargetClosedError");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Coverage.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Coverage = class {
  #jsCoverage;
  #cssCoverage;
  constructor(client) {
    this.#jsCoverage = new JSCoverage(client);
    this.#cssCoverage = new CSSCoverage(client);
  }
  /**
   * @internal
   */
  updateClient(client) {
    this.#jsCoverage.updateClient(client);
    this.#cssCoverage.updateClient(client);
  }
  /**
   * @param options - Set of configurable options for coverage defaults to
   * `resetOnNavigation : true, reportAnonymousScripts : false,`
   * `includeRawScriptCoverage : false, useBlockCoverage : true`
   * @returns Promise that resolves when coverage is started.
   *
   * @remarks
   * Anonymous scripts are ones that don't have an associated url. These are
   * scripts that are dynamically created on the page using `eval` or
   * `new Function`. If `reportAnonymousScripts` is set to `true`, anonymous
   * scripts URL will start with `debugger://VM` (unless a magic //# sourceURL
   * comment is present, in which case that will the be URL).
   */
  async startJSCoverage(options = {}) {
    return await this.#jsCoverage.start(options);
  }
  /**
   * Promise that resolves to the array of coverage reports for
   * all scripts.
   *
   * @remarks
   * JavaScript Coverage doesn't include anonymous scripts by default.
   * However, scripts with sourceURLs are reported.
   */
  async stopJSCoverage() {
    return await this.#jsCoverage.stop();
  }
  /**
   * @param options - Set of configurable options for coverage, defaults to
   * `resetOnNavigation : true`
   * @returns Promise that resolves when coverage is started.
   */
  async startCSSCoverage(options = {}) {
    return await this.#cssCoverage.start(options);
  }
  /**
   * Promise that resolves to the array of coverage reports
   * for all stylesheets.
   *
   * @remarks
   * CSS Coverage doesn't include dynamically injected style tags
   * without sourceURLs.
   */
  async stopCSSCoverage() {
    return await this.#cssCoverage.stop();
  }
};
__name(Coverage, "Coverage");
var JSCoverage = class {
  #client;
  #enabled = false;
  #scriptURLs = /* @__PURE__ */ new Map();
  #scriptSources = /* @__PURE__ */ new Map();
  #subscriptions;
  #resetOnNavigation = false;
  #reportAnonymousScripts = false;
  #includeRawScriptCoverage = false;
  constructor(client) {
    this.#client = client;
  }
  /**
   * @internal
   */
  updateClient(client) {
    this.#client = client;
  }
  async start(options = {}) {
    assert3(!this.#enabled, "JSCoverage is already enabled");
    const { resetOnNavigation = true, reportAnonymousScripts = false, includeRawScriptCoverage = false, useBlockCoverage = true } = options;
    this.#resetOnNavigation = resetOnNavigation;
    this.#reportAnonymousScripts = reportAnonymousScripts;
    this.#includeRawScriptCoverage = includeRawScriptCoverage;
    this.#enabled = true;
    this.#scriptURLs.clear();
    this.#scriptSources.clear();
    this.#subscriptions = new DisposableStack();
    const clientEmitter = this.#subscriptions.use(new EventEmitter2(this.#client));
    clientEmitter.on("Debugger.scriptParsed", this.#onScriptParsed.bind(this));
    clientEmitter.on("Runtime.executionContextsCleared", this.#onExecutionContextsCleared.bind(this));
    await Promise.all([
      this.#client.send("Profiler.enable"),
      this.#client.send("Profiler.startPreciseCoverage", {
        callCount: this.#includeRawScriptCoverage,
        detailed: useBlockCoverage
      }),
      this.#client.send("Debugger.enable"),
      this.#client.send("Debugger.setSkipAllPauses", { skip: true })
    ]);
  }
  #onExecutionContextsCleared() {
    if (!this.#resetOnNavigation) {
      return;
    }
    this.#scriptURLs.clear();
    this.#scriptSources.clear();
  }
  async #onScriptParsed(event) {
    if (PuppeteerURL.isPuppeteerURL(event.url)) {
      return;
    }
    if (!event.url && !this.#reportAnonymousScripts) {
      return;
    }
    try {
      const response = await this.#client.send("Debugger.getScriptSource", {
        scriptId: event.scriptId
      });
      this.#scriptURLs.set(event.scriptId, event.url);
      this.#scriptSources.set(event.scriptId, response.scriptSource);
    } catch (error3) {
      debugError(error3);
    }
  }
  async stop() {
    assert3(this.#enabled, "JSCoverage is not enabled");
    this.#enabled = false;
    const result = await Promise.all([
      this.#client.send("Profiler.takePreciseCoverage"),
      this.#client.send("Profiler.stopPreciseCoverage"),
      this.#client.send("Profiler.disable"),
      this.#client.send("Debugger.disable")
    ]);
    this.#subscriptions?.dispose();
    const coverage = [];
    const profileResponse = result[0];
    for (const entry of profileResponse.result) {
      let url = this.#scriptURLs.get(entry.scriptId);
      if (!url && this.#reportAnonymousScripts) {
        url = "debugger://VM" + entry.scriptId;
      }
      const text = this.#scriptSources.get(entry.scriptId);
      if (text === void 0 || url === void 0) {
        continue;
      }
      const flattenRanges = [];
      for (const func of entry.functions) {
        flattenRanges.push(...func.ranges);
      }
      const ranges = convertToDisjointRanges(flattenRanges);
      if (!this.#includeRawScriptCoverage) {
        coverage.push({ url, ranges, text });
      } else {
        coverage.push({ url, ranges, text, rawScriptCoverage: entry });
      }
    }
    return coverage;
  }
};
__name(JSCoverage, "JSCoverage");
var CSSCoverage = class {
  #client;
  #enabled = false;
  #stylesheetURLs = /* @__PURE__ */ new Map();
  #stylesheetSources = /* @__PURE__ */ new Map();
  #eventListeners;
  #resetOnNavigation = false;
  constructor(client) {
    this.#client = client;
  }
  /**
   * @internal
   */
  updateClient(client) {
    this.#client = client;
  }
  async start(options = {}) {
    assert3(!this.#enabled, "CSSCoverage is already enabled");
    const { resetOnNavigation = true } = options;
    this.#resetOnNavigation = resetOnNavigation;
    this.#enabled = true;
    this.#stylesheetURLs.clear();
    this.#stylesheetSources.clear();
    this.#eventListeners = new DisposableStack();
    const clientEmitter = this.#eventListeners.use(new EventEmitter2(this.#client));
    clientEmitter.on("CSS.styleSheetAdded", this.#onStyleSheet.bind(this));
    clientEmitter.on("Runtime.executionContextsCleared", this.#onExecutionContextsCleared.bind(this));
    await Promise.all([
      this.#client.send("DOM.enable"),
      this.#client.send("CSS.enable"),
      this.#client.send("CSS.startRuleUsageTracking")
    ]);
  }
  #onExecutionContextsCleared() {
    if (!this.#resetOnNavigation) {
      return;
    }
    this.#stylesheetURLs.clear();
    this.#stylesheetSources.clear();
  }
  async #onStyleSheet(event) {
    const header = event.header;
    if (!header.sourceURL) {
      return;
    }
    try {
      const response = await this.#client.send("CSS.getStyleSheetText", {
        styleSheetId: header.styleSheetId
      });
      this.#stylesheetURLs.set(header.styleSheetId, header.sourceURL);
      this.#stylesheetSources.set(header.styleSheetId, response.text);
    } catch (error3) {
      debugError(error3);
    }
  }
  async stop() {
    assert3(this.#enabled, "CSSCoverage is not enabled");
    this.#enabled = false;
    const ruleTrackingResponse = await this.#client.send("CSS.stopRuleUsageTracking");
    await Promise.all([
      this.#client.send("CSS.disable"),
      this.#client.send("DOM.disable")
    ]);
    this.#eventListeners?.dispose();
    const styleSheetIdToCoverage = /* @__PURE__ */ new Map();
    for (const entry of ruleTrackingResponse.ruleUsage) {
      let ranges = styleSheetIdToCoverage.get(entry.styleSheetId);
      if (!ranges) {
        ranges = [];
        styleSheetIdToCoverage.set(entry.styleSheetId, ranges);
      }
      ranges.push({
        startOffset: entry.startOffset,
        endOffset: entry.endOffset,
        count: entry.used ? 1 : 0
      });
    }
    const coverage = [];
    for (const styleSheetId of this.#stylesheetURLs.keys()) {
      const url = this.#stylesheetURLs.get(styleSheetId);
      assert3(typeof url !== "undefined", `Stylesheet URL is undefined (styleSheetId=${styleSheetId})`);
      const text = this.#stylesheetSources.get(styleSheetId);
      assert3(typeof text !== "undefined", `Stylesheet text is undefined (styleSheetId=${styleSheetId})`);
      const ranges = convertToDisjointRanges(styleSheetIdToCoverage.get(styleSheetId) || []);
      coverage.push({ url, ranges, text });
    }
    return coverage;
  }
};
__name(CSSCoverage, "CSSCoverage");
function convertToDisjointRanges(nestedRanges) {
  const points = [];
  for (const range of nestedRanges) {
    points.push({ offset: range.startOffset, type: 0, range });
    points.push({ offset: range.endOffset, type: 1, range });
  }
  points.sort((a, b) => {
    if (a.offset !== b.offset) {
      return a.offset - b.offset;
    }
    if (a.type !== b.type) {
      return b.type - a.type;
    }
    const aLength = a.range.endOffset - a.range.startOffset;
    const bLength = b.range.endOffset - b.range.startOffset;
    if (a.type === 0) {
      return bLength - aLength;
    }
    return aLength - bLength;
  });
  const hitCountStack = [];
  const results = [];
  let lastOffset = 0;
  for (const point of points) {
    if (hitCountStack.length && lastOffset < point.offset && hitCountStack[hitCountStack.length - 1] > 0) {
      const lastResult = results[results.length - 1];
      if (lastResult && lastResult.end === lastOffset) {
        lastResult.end = point.offset;
      } else {
        results.push({ start: lastOffset, end: point.offset });
      }
    }
    lastOffset = point.offset;
    if (point.type === 0) {
      hitCountStack.push(point.range.count);
    } else {
      hitCountStack.pop();
    }
  }
  return results.filter((range) => {
    return range.end - range.start > 0;
  });
}
__name(convertToDisjointRanges, "convertToDisjointRanges");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Dialog.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Dialog.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Dialog = class {
  #type;
  #message;
  #defaultValue;
  #handled = false;
  /**
   * @internal
   */
  constructor(type, message, defaultValue = "") {
    this.#type = type;
    this.#message = message;
    this.#defaultValue = defaultValue;
  }
  /**
   * The type of the dialog.
   */
  type() {
    return this.#type;
  }
  /**
   * The message displayed in the dialog.
   */
  message() {
    return this.#message;
  }
  /**
   * The default value of the prompt, or an empty string if the dialog
   * is not a `prompt`.
   */
  defaultValue() {
    return this.#defaultValue;
  }
  /**
   * A promise that resolves when the dialog has been accepted.
   *
   * @param promptText - optional text that will be entered in the dialog
   * prompt. Has no effect if the dialog's type is not `prompt`.
   *
   */
  async accept(promptText) {
    assert3(!this.#handled, "Cannot accept dialog which is already handled!");
    this.#handled = true;
    await this.handle({
      accept: true,
      text: promptText
    });
  }
  /**
   * A promise which will resolve once the dialog has been dismissed
   */
  async dismiss() {
    assert3(!this.#handled, "Cannot dismiss dialog which is already handled!");
    this.#handled = true;
    await this.handle({
      accept: false
    });
  }
};
__name(Dialog, "Dialog");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Dialog.js
var CdpDialog = class extends Dialog {
  #client;
  constructor(client, type, message, defaultValue = "") {
    super(type, message, defaultValue);
    this.#client = client;
  }
  async handle(options) {
    await this.#client.send("Page.handleJavaScriptDialog", {
      accept: options.accept,
      promptText: options.text
    });
  }
};
__name(CdpDialog, "CdpDialog");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/EmulationManager.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __runInitializers3 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate3 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context3 = {};
    for (var p in contextIn)
      context3[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context3.access[p] = contextIn.access[p];
    context3.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context3);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __setFunctionName = function(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var EmulatedState = class {
  #state;
  #clientProvider;
  #updater;
  constructor(initialState, clientProvider, updater) {
    this.#state = initialState;
    this.#clientProvider = clientProvider;
    this.#updater = updater;
    this.#clientProvider.registerState(this);
  }
  async setState(state) {
    this.#state = state;
    await this.sync();
  }
  get state() {
    return this.#state;
  }
  async sync() {
    await Promise.all(this.#clientProvider.clients().map((client) => {
      return this.#updater(client, this.#state);
    }));
  }
};
__name(EmulatedState, "EmulatedState");
var EmulationManager = (() => {
  let _instanceExtraInitializers = [];
  let _private_applyViewport_decorators;
  let _private_applyViewport_descriptor;
  let _private_emulateIdleState_decorators;
  let _private_emulateIdleState_descriptor;
  let _private_emulateTimezone_decorators;
  let _private_emulateTimezone_descriptor;
  let _private_emulateVisionDeficiency_decorators;
  let _private_emulateVisionDeficiency_descriptor;
  let _private_emulateCpuThrottling_decorators;
  let _private_emulateCpuThrottling_descriptor;
  let _private_emulateMediaFeatures_decorators;
  let _private_emulateMediaFeatures_descriptor;
  let _private_emulateMediaType_decorators;
  let _private_emulateMediaType_descriptor;
  let _private_setGeolocation_decorators;
  let _private_setGeolocation_descriptor;
  let _private_setDefaultBackgroundColor_decorators;
  let _private_setDefaultBackgroundColor_descriptor;
  let _private_setJavaScriptEnabled_decorators;
  let _private_setJavaScriptEnabled_descriptor;
  return /* @__PURE__ */ __name(class EmulationManager {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _private_applyViewport_decorators = [invokeAtMostOnceForArguments];
      _private_emulateIdleState_decorators = [invokeAtMostOnceForArguments];
      _private_emulateTimezone_decorators = [invokeAtMostOnceForArguments];
      _private_emulateVisionDeficiency_decorators = [invokeAtMostOnceForArguments];
      _private_emulateCpuThrottling_decorators = [invokeAtMostOnceForArguments];
      _private_emulateMediaFeatures_decorators = [invokeAtMostOnceForArguments];
      _private_emulateMediaType_decorators = [invokeAtMostOnceForArguments];
      _private_setGeolocation_decorators = [invokeAtMostOnceForArguments];
      _private_setDefaultBackgroundColor_decorators = [invokeAtMostOnceForArguments];
      _private_setJavaScriptEnabled_decorators = [invokeAtMostOnceForArguments];
      __esDecorate3(this, _private_applyViewport_descriptor = { value: __setFunctionName(async function(client, viewportState) {
        if (!viewportState.viewport) {
          return;
        }
        const { viewport } = viewportState;
        const mobile = viewport.isMobile || false;
        const width = viewport.width;
        const height = viewport.height;
        const deviceScaleFactor = viewport.deviceScaleFactor ?? 1;
        const screenOrientation = viewport.isLandscape ? { angle: 90, type: "landscapePrimary" } : { angle: 0, type: "portraitPrimary" };
        const hasTouch = viewport.hasTouch || false;
        await Promise.all([
          client.send("Emulation.setDeviceMetricsOverride", {
            mobile,
            width,
            height,
            deviceScaleFactor,
            screenOrientation
          }).catch((err) => {
            if (err.message.includes("Target does not support metrics override")) {
              debugError(err);
              return;
            }
            throw err;
          }),
          client.send("Emulation.setTouchEmulationEnabled", {
            enabled: hasTouch
          })
        ]);
      }, "#applyViewport") }, _private_applyViewport_decorators, { kind: "method", name: "#applyViewport", static: false, private: true, access: { has: (obj) => #applyViewport in obj, get: (obj) => obj.#applyViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate3(this, _private_emulateIdleState_descriptor = { value: __setFunctionName(async function(client, idleStateState) {
        if (!idleStateState.active) {
          return;
        }
        if (idleStateState.overrides) {
          await client.send("Emulation.setIdleOverride", {
            isUserActive: idleStateState.overrides.isUserActive,
            isScreenUnlocked: idleStateState.overrides.isScreenUnlocked
          });
        } else {
          await client.send("Emulation.clearIdleOverride");
        }
      }, "#emulateIdleState") }, _private_emulateIdleState_decorators, { kind: "method", name: "#emulateIdleState", static: false, private: true, access: { has: (obj) => #emulateIdleState in obj, get: (obj) => obj.#emulateIdleState }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate3(this, _private_emulateTimezone_descriptor = { value: __setFunctionName(async function(client, timezoneState) {
        if (!timezoneState.active) {
          return;
        }
        try {
          await client.send("Emulation.setTimezoneOverride", {
            timezoneId: timezoneState.timezoneId || ""
          });
        } catch (error3) {
          if (isErrorLike(error3) && error3.message.includes("Invalid timezone")) {
            throw new Error(`Invalid timezone ID: ${timezoneState.timezoneId}`);
          }
          throw error3;
        }
      }, "#emulateTimezone") }, _private_emulateTimezone_decorators, { kind: "method", name: "#emulateTimezone", static: false, private: true, access: { has: (obj) => #emulateTimezone in obj, get: (obj) => obj.#emulateTimezone }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate3(this, _private_emulateVisionDeficiency_descriptor = { value: __setFunctionName(async function(client, visionDeficiency) {
        if (!visionDeficiency.active) {
          return;
        }
        await client.send("Emulation.setEmulatedVisionDeficiency", {
          type: visionDeficiency.visionDeficiency || "none"
        });
      }, "#emulateVisionDeficiency") }, _private_emulateVisionDeficiency_decorators, { kind: "method", name: "#emulateVisionDeficiency", static: false, private: true, access: { has: (obj) => #emulateVisionDeficiency in obj, get: (obj) => obj.#emulateVisionDeficiency }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate3(this, _private_emulateCpuThrottling_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setCPUThrottlingRate", {
          rate: state.factor ?? 1
        });
      }, "#emulateCpuThrottling") }, _private_emulateCpuThrottling_decorators, { kind: "method", name: "#emulateCpuThrottling", static: false, private: true, access: { has: (obj) => #emulateCpuThrottling in obj, get: (obj) => obj.#emulateCpuThrottling }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate3(this, _private_emulateMediaFeatures_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setEmulatedMedia", {
          features: state.mediaFeatures
        });
      }, "#emulateMediaFeatures") }, _private_emulateMediaFeatures_decorators, { kind: "method", name: "#emulateMediaFeatures", static: false, private: true, access: { has: (obj) => #emulateMediaFeatures in obj, get: (obj) => obj.#emulateMediaFeatures }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate3(this, _private_emulateMediaType_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setEmulatedMedia", {
          media: state.type || ""
        });
      }, "#emulateMediaType") }, _private_emulateMediaType_decorators, { kind: "method", name: "#emulateMediaType", static: false, private: true, access: { has: (obj) => #emulateMediaType in obj, get: (obj) => obj.#emulateMediaType }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate3(this, _private_setGeolocation_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setGeolocationOverride", state.geoLocation ? {
          longitude: state.geoLocation.longitude,
          latitude: state.geoLocation.latitude,
          accuracy: state.geoLocation.accuracy
        } : void 0);
      }, "#setGeolocation") }, _private_setGeolocation_decorators, { kind: "method", name: "#setGeolocation", static: false, private: true, access: { has: (obj) => #setGeolocation in obj, get: (obj) => obj.#setGeolocation }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate3(this, _private_setDefaultBackgroundColor_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setDefaultBackgroundColorOverride", {
          color: state.color
        });
      }, "#setDefaultBackgroundColor") }, _private_setDefaultBackgroundColor_decorators, { kind: "method", name: "#setDefaultBackgroundColor", static: false, private: true, access: { has: (obj) => #setDefaultBackgroundColor in obj, get: (obj) => obj.#setDefaultBackgroundColor }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate3(this, _private_setJavaScriptEnabled_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setScriptExecutionDisabled", {
          value: !state.javaScriptEnabled
        });
      }, "#setJavaScriptEnabled") }, _private_setJavaScriptEnabled_decorators, { kind: "method", name: "#setJavaScriptEnabled", static: false, private: true, access: { has: (obj) => #setJavaScriptEnabled in obj, get: (obj) => obj.#setJavaScriptEnabled }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    #client = (__runInitializers3(this, _instanceExtraInitializers), void 0);
    #emulatingMobile = false;
    #hasTouch = false;
    #states = [];
    #viewportState = new EmulatedState({
      active: false
    }, this, this.#applyViewport);
    #idleOverridesState = new EmulatedState({
      active: false
    }, this, this.#emulateIdleState);
    #timezoneState = new EmulatedState({
      active: false
    }, this, this.#emulateTimezone);
    #visionDeficiencyState = new EmulatedState({
      active: false
    }, this, this.#emulateVisionDeficiency);
    #cpuThrottlingState = new EmulatedState({
      active: false
    }, this, this.#emulateCpuThrottling);
    #mediaFeaturesState = new EmulatedState({
      active: false
    }, this, this.#emulateMediaFeatures);
    #mediaTypeState = new EmulatedState({
      active: false
    }, this, this.#emulateMediaType);
    #geoLocationState = new EmulatedState({
      active: false
    }, this, this.#setGeolocation);
    #defaultBackgroundColorState = new EmulatedState({
      active: false
    }, this, this.#setDefaultBackgroundColor);
    #javascriptEnabledState = new EmulatedState({
      javaScriptEnabled: true,
      active: false
    }, this, this.#setJavaScriptEnabled);
    #secondaryClients = /* @__PURE__ */ new Set();
    constructor(client) {
      this.#client = client;
    }
    updateClient(client) {
      this.#client = client;
      this.#secondaryClients.delete(client);
    }
    registerState(state) {
      this.#states.push(state);
    }
    clients() {
      return [this.#client, ...Array.from(this.#secondaryClients)];
    }
    async registerSpeculativeSession(client) {
      this.#secondaryClients.add(client);
      client.once(CDPSessionEvent.Disconnected, () => {
        this.#secondaryClients.delete(client);
      });
      void Promise.all(this.#states.map((s) => {
        return s.sync().catch(debugError);
      }));
    }
    get javascriptEnabled() {
      return this.#javascriptEnabledState.state.javaScriptEnabled;
    }
    async emulateViewport(viewport) {
      await this.#viewportState.setState({
        viewport,
        active: true
      });
      const mobile = viewport.isMobile || false;
      const hasTouch = viewport.hasTouch || false;
      const reloadNeeded = this.#emulatingMobile !== mobile || this.#hasTouch !== hasTouch;
      this.#emulatingMobile = mobile;
      this.#hasTouch = hasTouch;
      return reloadNeeded;
    }
    get #applyViewport() {
      return _private_applyViewport_descriptor.value;
    }
    async emulateIdleState(overrides) {
      await this.#idleOverridesState.setState({
        active: true,
        overrides
      });
    }
    get #emulateIdleState() {
      return _private_emulateIdleState_descriptor.value;
    }
    get #emulateTimezone() {
      return _private_emulateTimezone_descriptor.value;
    }
    async emulateTimezone(timezoneId) {
      await this.#timezoneState.setState({
        timezoneId,
        active: true
      });
    }
    get #emulateVisionDeficiency() {
      return _private_emulateVisionDeficiency_descriptor.value;
    }
    async emulateVisionDeficiency(type) {
      const visionDeficiencies = /* @__PURE__ */ new Set([
        "none",
        "achromatopsia",
        "blurredVision",
        "deuteranopia",
        "protanopia",
        "tritanopia"
      ]);
      assert3(!type || visionDeficiencies.has(type), `Unsupported vision deficiency: ${type}`);
      await this.#visionDeficiencyState.setState({
        active: true,
        visionDeficiency: type
      });
    }
    get #emulateCpuThrottling() {
      return _private_emulateCpuThrottling_descriptor.value;
    }
    async emulateCPUThrottling(factor) {
      assert3(factor === null || factor >= 1, "Throttling rate should be greater or equal to 1");
      await this.#cpuThrottlingState.setState({
        active: true,
        factor: factor ?? void 0
      });
    }
    get #emulateMediaFeatures() {
      return _private_emulateMediaFeatures_descriptor.value;
    }
    async emulateMediaFeatures(features2) {
      if (Array.isArray(features2)) {
        for (const mediaFeature of features2) {
          const name = mediaFeature.name;
          assert3(/^(?:prefers-(?:color-scheme|reduced-motion)|color-gamut)$/.test(name), "Unsupported media feature: " + name);
        }
      }
      await this.#mediaFeaturesState.setState({
        active: true,
        mediaFeatures: features2
      });
    }
    get #emulateMediaType() {
      return _private_emulateMediaType_descriptor.value;
    }
    async emulateMediaType(type) {
      assert3(type === "screen" || type === "print" || (type ?? void 0) === void 0, "Unsupported media type: " + type);
      await this.#mediaTypeState.setState({
        type,
        active: true
      });
    }
    get #setGeolocation() {
      return _private_setGeolocation_descriptor.value;
    }
    async setGeolocation(options) {
      const { longitude, latitude, accuracy = 0 } = options;
      if (longitude < -180 || longitude > 180) {
        throw new Error(`Invalid longitude "${longitude}": precondition -180 <= LONGITUDE <= 180 failed.`);
      }
      if (latitude < -90 || latitude > 90) {
        throw new Error(`Invalid latitude "${latitude}": precondition -90 <= LATITUDE <= 90 failed.`);
      }
      if (accuracy < 0) {
        throw new Error(`Invalid accuracy "${accuracy}": precondition 0 <= ACCURACY failed.`);
      }
      await this.#geoLocationState.setState({
        active: true,
        geoLocation: {
          longitude,
          latitude,
          accuracy
        }
      });
    }
    get #setDefaultBackgroundColor() {
      return _private_setDefaultBackgroundColor_descriptor.value;
    }
    /**
     * Resets default white background
     */
    async resetDefaultBackgroundColor() {
      await this.#defaultBackgroundColorState.setState({
        active: true,
        color: void 0
      });
    }
    /**
     * Hides default white background
     */
    async setTransparentBackgroundColor() {
      await this.#defaultBackgroundColorState.setState({
        active: true,
        color: { r: 0, g: 0, b: 0, a: 0 }
      });
    }
    get #setJavaScriptEnabled() {
      return _private_setJavaScriptEnabled_descriptor.value;
    }
    async setJavaScriptEnabled(enabled) {
      await this.#javascriptEnabledState.setState({
        active: true,
        javaScriptEnabled: enabled
      });
    }
  }, "EmulationManager");
})();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/FirefoxTargetManager.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FirefoxTargetManager = class extends EventEmitter2 {
  #connection;
  /**
   * Keeps track of the following events: 'Target.targetCreated',
   * 'Target.targetDestroyed'.
   *
   * A target becomes discovered when 'Target.targetCreated' is received.
   * A target is removed from this map once 'Target.targetDestroyed' is
   * received.
   *
   * `targetFilterCallback` has no effect on this map.
   */
  #discoveredTargetsByTargetId = /* @__PURE__ */ new Map();
  /**
   * Keeps track of targets that were created via 'Target.targetCreated'
   * and which one are not filtered out by `targetFilterCallback`.
   *
   * The target is removed from here once it's been destroyed.
   */
  #availableTargetsByTargetId = /* @__PURE__ */ new Map();
  /**
   * Tracks which sessions attach to which target.
   */
  #availableTargetsBySessionId = /* @__PURE__ */ new Map();
  #targetFilterCallback;
  #targetFactory;
  #attachedToTargetListenersBySession = /* @__PURE__ */ new WeakMap();
  #initializeDeferred = Deferred.create();
  #targetsIdsForInit = /* @__PURE__ */ new Set();
  constructor(connection, targetFactory, targetFilterCallback) {
    super();
    this.#connection = connection;
    this.#targetFilterCallback = targetFilterCallback;
    this.#targetFactory = targetFactory;
    this.#connection.on("Target.targetCreated", this.#onTargetCreated);
    this.#connection.on("Target.targetDestroyed", this.#onTargetDestroyed);
    this.#connection.on(CDPSessionEvent.SessionDetached, this.#onSessionDetached);
    this.setupAttachmentListeners(this.#connection);
  }
  setupAttachmentListeners(session) {
    const listener = /* @__PURE__ */ __name((event) => {
      return this.#onAttachedToTarget(session, event);
    }, "listener");
    assert3(!this.#attachedToTargetListenersBySession.has(session));
    this.#attachedToTargetListenersBySession.set(session, listener);
    session.on("Target.attachedToTarget", listener);
  }
  #onSessionDetached = (session) => {
    this.removeSessionListeners(session);
    this.#availableTargetsBySessionId.delete(session.id());
  };
  removeSessionListeners(session) {
    if (this.#attachedToTargetListenersBySession.has(session)) {
      session.off("Target.attachedToTarget", this.#attachedToTargetListenersBySession.get(session));
      this.#attachedToTargetListenersBySession.delete(session);
    }
  }
  getAvailableTargets() {
    return this.#availableTargetsByTargetId;
  }
  dispose() {
    this.#connection.off("Target.targetCreated", this.#onTargetCreated);
    this.#connection.off("Target.targetDestroyed", this.#onTargetDestroyed);
  }
  async initialize() {
    await this.#connection.send("Target.setDiscoverTargets", {
      discover: true,
      filter: [{}]
    });
    this.#targetsIdsForInit = new Set(this.#discoveredTargetsByTargetId.keys());
    await this.#initializeDeferred.valueOrThrow();
  }
  #onTargetCreated = async (event) => {
    if (this.#discoveredTargetsByTargetId.has(event.targetInfo.targetId)) {
      return;
    }
    this.#discoveredTargetsByTargetId.set(event.targetInfo.targetId, event.targetInfo);
    if (event.targetInfo.type === "browser" && event.targetInfo.attached) {
      const target2 = this.#targetFactory(event.targetInfo, void 0);
      target2._initialize();
      this.#availableTargetsByTargetId.set(event.targetInfo.targetId, target2);
      this.#finishInitializationIfReady(target2._targetId);
      return;
    }
    const target = this.#targetFactory(event.targetInfo, void 0);
    if (this.#targetFilterCallback && !this.#targetFilterCallback(target)) {
      this.#finishInitializationIfReady(event.targetInfo.targetId);
      return;
    }
    target._initialize();
    this.#availableTargetsByTargetId.set(event.targetInfo.targetId, target);
    this.emit("targetAvailable", target);
    this.#finishInitializationIfReady(target._targetId);
  };
  #onTargetDestroyed = (event) => {
    this.#discoveredTargetsByTargetId.delete(event.targetId);
    this.#finishInitializationIfReady(event.targetId);
    const target = this.#availableTargetsByTargetId.get(event.targetId);
    if (target) {
      this.emit("targetGone", target);
      this.#availableTargetsByTargetId.delete(event.targetId);
    }
  };
  #onAttachedToTarget = async (parentSession, event) => {
    const targetInfo = event.targetInfo;
    const session = this.#connection.session(event.sessionId);
    if (!session) {
      throw new Error(`Session ${event.sessionId} was not created.`);
    }
    const target = this.#availableTargetsByTargetId.get(targetInfo.targetId);
    assert3(target, `Target ${targetInfo.targetId} is missing`);
    session._setTarget(target);
    this.setupAttachmentListeners(session);
    this.#availableTargetsBySessionId.set(session.id(), this.#availableTargetsByTargetId.get(targetInfo.targetId));
    parentSession.emit(CDPSessionEvent.Ready, session);
  };
  #finishInitializationIfReady(targetId) {
    this.#targetsIdsForInit.delete(targetId);
    if (this.#targetsIdsForInit.size === 0) {
      this.#initializeDeferred.resolve();
    }
  }
};
__name(FirefoxTargetManager, "FirefoxTargetManager");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/FrameManager.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Frame.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/GetQueryHandler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/AriaQueryHandler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/QueryHandler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/ElementHandleSymbol.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var _isElementHandle = Symbol("_isElementHandle");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/Function.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createdFunctions = /* @__PURE__ */ new Map();
var createFunction = /* @__PURE__ */ __name((functionValue) => {
  let fn = createdFunctions.get(functionValue);
  if (fn) {
    return fn;
  }
  fn = new Function(`return ${functionValue}`)();
  createdFunctions.set(functionValue, fn);
  return fn;
}, "createFunction");
function stringifyFunction(fn) {
  let value;
  if (typeof fn === "function" && globalThis.navigator?.userAgent === "Cloudflare-Workers") {
    value = `((__name => (${fn}))(t => t))`;
  } else {
    value = fn.toString();
  }
  return value;
}
__name(stringifyFunction, "stringifyFunction");
var interpolateFunction = /* @__PURE__ */ __name((fn, replacements) => {
  let value = stringifyFunction(fn);
  for (const [name, jsValue] of Object.entries(replacements)) {
    value = value.replace(
      new RegExp(`PLACEHOLDER\\(\\s*(?:'${name}'|"${name}")\\s*\\)`, "g"),
      // Wrapping this ensures tersers that accidentally inline PLACEHOLDER calls
      // are still valid. Without, we may get calls like ()=>{...}() which is
      // not valid.
      `(${jsValue})`
    );
  }
  return createFunction(value);
}, "interpolateFunction");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/HandleIterator.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __addDisposableResource6 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources6 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
var DEFAULT_BATCH_SIZE = 20;
async function* fastTransposeIteratorHandle(iterator2, size) {
  const env_1 = { stack: [], error: void 0, hasError: false };
  try {
    const array = __addDisposableResource6(env_1, await iterator2.evaluateHandle(async (iterator3, size2) => {
      const results = [];
      while (results.length < size2) {
        const result = await iterator3.next();
        if (result.done) {
          break;
        }
        results.push(result.value);
      }
      return results;
    }, size), false);
    const properties = await array.getProperties();
    const handles = properties.values();
    const stack = __addDisposableResource6(env_1, new DisposableStack(), false);
    stack.defer(() => {
      for (const handle_1 of handles) {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
          const handle = __addDisposableResource6(env_2, handle_1, false);
          handle[disposeSymbol]();
        } catch (e_2) {
          env_2.error = e_2;
          env_2.hasError = true;
        } finally {
          __disposeResources6(env_2);
        }
      }
    });
    yield* handles;
    return properties.size === 0;
  } catch (e_1) {
    env_1.error = e_1;
    env_1.hasError = true;
  } finally {
    __disposeResources6(env_1);
  }
}
__name(fastTransposeIteratorHandle, "fastTransposeIteratorHandle");
async function* transposeIteratorHandle(iterator2) {
  let size = DEFAULT_BATCH_SIZE;
  while (!(yield* fastTransposeIteratorHandle(iterator2, size))) {
    size <<= 1;
  }
}
__name(transposeIteratorHandle, "transposeIteratorHandle");
async function* transposeIterableHandle(handle) {
  const env_3 = { stack: [], error: void 0, hasError: false };
  try {
    const generatorHandle = __addDisposableResource6(env_3, await handle.evaluateHandle((iterable) => {
      return async function* () {
        yield* iterable;
      }();
    }), false);
    yield* transposeIteratorHandle(generatorHandle);
  } catch (e_3) {
    env_3.error = e_3;
    env_3.hasError = true;
  } finally {
    __disposeResources6(env_3);
  }
}
__name(transposeIterableHandle, "transposeIterableHandle");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/LazyArg.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var _get;
var _LazyArg = class {
  constructor(get) {
    __privateAdd(this, _get, void 0);
    __privateSet(this, _get, get);
  }
  async get(context3) {
    return await __privateGet(this, _get).call(this, context3);
  }
};
var LazyArg = _LazyArg;
__name(LazyArg, "LazyArg");
_get = new WeakMap();
__publicField(LazyArg, "create", (get) => {
  return new _LazyArg(get);
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/QueryHandler.js
var __addDisposableResource7 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources7 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
var QueryHandler = class {
  static get _querySelector() {
    if (this.querySelector) {
      return this.querySelector;
    }
    if (!this.querySelectorAll) {
      throw new Error("Cannot create default `querySelector`.");
    }
    return this.querySelector = interpolateFunction(async (node, selector, PuppeteerUtil) => {
      const querySelectorAll = PLACEHOLDER("querySelectorAll");
      const results = querySelectorAll(node, selector, PuppeteerUtil);
      for await (const result of results) {
        return result;
      }
      return null;
    }, {
      querySelectorAll: stringifyFunction(this.querySelectorAll)
    });
  }
  static get _querySelectorAll() {
    if (this.querySelectorAll) {
      return this.querySelectorAll;
    }
    if (!this.querySelector) {
      throw new Error("Cannot create default `querySelectorAll`.");
    }
    return this.querySelectorAll = interpolateFunction(async function* (node, selector, PuppeteerUtil) {
      const querySelector = PLACEHOLDER("querySelector");
      const result = await querySelector(node, selector, PuppeteerUtil);
      if (result) {
        yield result;
      }
    }, {
      querySelector: stringifyFunction(this.querySelector)
    });
  }
  /**
   * Queries for multiple nodes given a selector and {@link ElementHandle}.
   *
   * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll()}.
   */
  static async *queryAll(element, selector) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      const handle = __addDisposableResource7(env_1, await element.evaluateHandle(this._querySelectorAll, selector, LazyArg.create((context3) => {
        return context3.puppeteerUtil;
      })), false);
      yield* transposeIterableHandle(handle);
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources7(env_1);
    }
  }
  /**
   * Queries for a single node given a selector and {@link ElementHandle}.
   *
   * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector}.
   */
  static async queryOne(element, selector) {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
      const result = __addDisposableResource7(env_2, await element.evaluateHandle(this._querySelector, selector, LazyArg.create((context3) => {
        return context3.puppeteerUtil;
      })), false);
      if (!(_isElementHandle in result)) {
        return null;
      }
      return result.move();
    } catch (e_2) {
      env_2.error = e_2;
      env_2.hasError = true;
    } finally {
      __disposeResources7(env_2);
    }
  }
  /**
   * Waits until a single node appears for a given selector and
   * {@link ElementHandle}.
   *
   * This will always query the handle in the Puppeteer world and migrate the
   * result to the main world.
   */
  static async waitFor(elementOrFrame, selector, options) {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
      let frame;
      const element = __addDisposableResource7(env_3, await (async () => {
        if (!(_isElementHandle in elementOrFrame)) {
          frame = elementOrFrame;
          return;
        }
        frame = elementOrFrame.frame;
        return await frame.isolatedRealm().adoptHandle(elementOrFrame);
      })(), false);
      const { visible = false, hidden = false, timeout: timeout2, signal } = options;
      try {
        const env_4 = { stack: [], error: void 0, hasError: false };
        try {
          signal?.throwIfAborted();
          const handle = __addDisposableResource7(env_4, await frame.isolatedRealm().waitForFunction(async (PuppeteerUtil, query, selector2, root, visible2) => {
            const querySelector = PuppeteerUtil.createFunction(query);
            const node = await querySelector(root ?? document, selector2, PuppeteerUtil);
            return PuppeteerUtil.checkVisibility(node, visible2);
          }, {
            polling: visible || hidden ? "raf" : "mutation",
            root: element,
            timeout: timeout2,
            signal
          }, LazyArg.create((context3) => {
            return context3.puppeteerUtil;
          }), stringifyFunction(this._querySelector), selector, element, visible ? true : hidden ? false : void 0), false);
          if (signal?.aborted) {
            throw signal.reason;
          }
          if (!(_isElementHandle in handle)) {
            return null;
          }
          return await frame.mainRealm().transferHandle(handle);
        } catch (e_3) {
          env_4.error = e_3;
          env_4.hasError = true;
        } finally {
          __disposeResources7(env_4);
        }
      } catch (error3) {
        if (!isErrorLike(error3)) {
          throw error3;
        }
        if (error3.name === "AbortError") {
          throw error3;
        }
        error3.message = `Waiting for selector \`${selector}\` failed: ${error3.message}`;
        throw error3;
      }
    } catch (e_4) {
      env_3.error = e_4;
      env_3.hasError = true;
    } finally {
      __disposeResources7(env_3);
    }
  }
};
__name(QueryHandler, "QueryHandler");
// Either one of these may be implemented, but at least one must be.
__publicField(QueryHandler, "querySelectorAll");
__publicField(QueryHandler, "querySelector");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/AsyncIterableUtil.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var AsyncIterableUtil = class {
  static async *map(iterable, map2) {
    for await (const value of iterable) {
      yield await map2(value);
    }
  }
  static async *flatMap(iterable, map2) {
    for await (const value of iterable) {
      yield* map2(value);
    }
  }
  static async collect(iterable) {
    const result = [];
    for await (const value of iterable) {
      result.push(value);
    }
    return result;
  }
  static async first(iterable) {
    for await (const value of iterable) {
      return value;
    }
    return;
  }
};
__name(AsyncIterableUtil, "AsyncIterableUtil");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/AriaQueryHandler.js
var isKnownAttribute = /* @__PURE__ */ __name((attribute) => {
  return ["name", "role"].includes(attribute);
}, "isKnownAttribute");
var normalizeValue = /* @__PURE__ */ __name((value) => {
  return value.replace(/ +/g, " ").trim();
}, "normalizeValue");
var ATTRIBUTE_REGEXP = /\[\s*(?<attribute>\w+)\s*=\s*(?<quote>"|')(?<value>\\.|.*?(?=\k<quote>))\k<quote>\s*\]/g;
var parseARIASelector = /* @__PURE__ */ __name((selector) => {
  const queryOptions = {};
  const defaultName = selector.replace(ATTRIBUTE_REGEXP, (_, attribute, __, value) => {
    attribute = attribute.trim();
    assert3(isKnownAttribute(attribute), `Unknown aria attribute "${attribute}" in selector`);
    queryOptions[attribute] = normalizeValue(value);
    return "";
  });
  if (defaultName && !queryOptions.name) {
    queryOptions.name = normalizeValue(defaultName);
  }
  return queryOptions;
}, "parseARIASelector");
var _ARIAQueryHandler = class extends QueryHandler {
  static async *queryAll(element, selector) {
    const { name, role } = parseARIASelector(selector);
    yield* element.queryAXTree(name, role);
  }
};
var ARIAQueryHandler = _ARIAQueryHandler;
__name(ARIAQueryHandler, "ARIAQueryHandler");
__publicField(ARIAQueryHandler, "querySelector", async (node, selector, { ariaQuerySelector }) => {
  return await ariaQuerySelector(node, selector);
});
__publicField(ARIAQueryHandler, "queryOne", async (element, selector) => {
  return await AsyncIterableUtil.first(_ARIAQueryHandler.queryAll(element, selector)) ?? null;
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/CustomQueryHandler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/ScriptInjector.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/generated/injected.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var source = '"use strict";var v=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var oe=Object.prototype.hasOwnProperty;var u=(t,e)=>{for(var n in e)v(t,n,{get:e[n],enumerable:!0})},se=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of ne(e))!oe.call(t,o)&&o!==n&&v(t,o,{get:()=>e[o],enumerable:!(r=re(e,o))||r.enumerable});return t};var ie=t=>se(v({},"__esModule",{value:!0}),t);var Re={};u(Re,{default:()=>ke});module.exports=ie(Re);var C=class extends Error{constructor(e,n){super(e,n),this.name=this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}},b=class extends C{};var f=class t{static create(e){return new t(e)}static async race(e){let n=new Set;try{let r=e.map(o=>o instanceof t?(o.#s&&n.add(o),o.valueOrThrow()):o);return await Promise.race(r)}finally{for(let r of n)r.reject(new Error("Timeout cleared"))}}#e=!1;#r=!1;#n;#t;#o=new Promise(e=>{this.#t=e});#s;#l;constructor(e){e&&e.timeout>0&&(this.#l=new b(e.message),this.#s=setTimeout(()=>{this.reject(this.#l)},e.timeout))}#a(e){clearTimeout(this.#s),this.#n=e,this.#t()}resolve(e){this.#r||this.#e||(this.#e=!0,this.#a(e))}reject(e){this.#r||this.#e||(this.#r=!0,this.#a(e))}resolved(){return this.#e}finished(){return this.#e||this.#r}value(){return this.#n}#i;valueOrThrow(){return this.#i||(this.#i=(async()=>{if(await this.#o,this.#r)throw this.#n;return this.#n})()),this.#i}};var X=new Map,z=t=>{let e=X.get(t);return e||(e=new Function(`return ${t}`)(),X.set(t,e),e)};var k={};u(k,{ariaQuerySelector:()=>le,ariaQuerySelectorAll:()=>I});var le=(t,e)=>globalThis.__ariaQuerySelector(t,e),I=async function*(t,e){yield*await globalThis.__ariaQuerySelectorAll(t,e)};var _={};u(_,{customQuerySelectors:()=>O});var R=class{#e=new Map;register(e,n){if(!n.queryOne&&n.queryAll){let r=n.queryAll;n.queryOne=(o,i)=>{for(let s of r(o,i))return s;return null}}else if(n.queryOne&&!n.queryAll){let r=n.queryOne;n.queryAll=(o,i)=>{let s=r(o,i);return s?[s]:[]}}else if(!n.queryOne||!n.queryAll)throw new Error("At least one query method must be defined.");this.#e.set(e,{querySelector:n.queryOne,querySelectorAll:n.queryAll})}unregister(e){this.#e.delete(e)}get(e){return this.#e.get(e)}clear(){this.#e.clear()}},O=new R;var M={};u(M,{pierceQuerySelector:()=>ae,pierceQuerySelectorAll:()=>ce});var ae=(t,e)=>{let n=null,r=o=>{let i=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&r(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==o&&!n&&s.matches(e)&&(n=s)}while(!n&&i.nextNode())};return t instanceof Document&&(t=t.documentElement),r(t),n},ce=(t,e)=>{let n=[],r=o=>{let i=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&r(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==o&&s.matches(e)&&n.push(s)}while(i.nextNode())};return t instanceof Document&&(t=t.documentElement),r(t),n};var m=(t,e)=>{if(!t)throw new Error(e)};var T=class{#e;#r;#n;#t;constructor(e,n){this.#e=e,this.#r=n}async start(){let e=this.#t=f.create(),n=await this.#e();if(n){e.resolve(n);return}this.#n=new MutationObserver(async()=>{let r=await this.#e();r&&(e.resolve(r),await this.stop())}),this.#n.observe(this.#r,{childList:!0,subtree:!0,attributes:!0})}async stop(){m(this.#t,"Polling never started."),this.#t.finished()||this.#t.reject(new Error("Polling stopped")),this.#n&&(this.#n.disconnect(),this.#n=void 0)}result(){return m(this.#t,"Polling never started."),this.#t.valueOrThrow()}},E=class{#e;#r;constructor(e){this.#e=e}async start(){let e=this.#r=f.create(),n=await this.#e();if(n){e.resolve(n);return}let r=async()=>{if(e.finished())return;let o=await this.#e();if(!o){window.requestAnimationFrame(r);return}e.resolve(o),await this.stop()};window.requestAnimationFrame(r)}async stop(){m(this.#r,"Polling never started."),this.#r.finished()||this.#r.reject(new Error("Polling stopped"))}result(){return m(this.#r,"Polling never started."),this.#r.valueOrThrow()}},P=class{#e;#r;#n;#t;constructor(e,n){this.#e=e,this.#r=n}async start(){let e=this.#t=f.create(),n=await this.#e();if(n){e.resolve(n);return}this.#n=setInterval(async()=>{let r=await this.#e();r&&(e.resolve(r),await this.stop())},this.#r)}async stop(){m(this.#t,"Polling never started."),this.#t.finished()||this.#t.reject(new Error("Polling stopped")),this.#n&&(clearInterval(this.#n),this.#n=void 0)}result(){return m(this.#t,"Polling never started."),this.#t.valueOrThrow()}};var V={};u(V,{pQuerySelector:()=>Ce,pQuerySelectorAll:()=>te});var c=class{static async*map(e,n){for await(let r of e)yield await n(r)}static async*flatMap(e,n){for await(let r of e)yield*n(r)}static async collect(e){let n=[];for await(let r of e)n.push(r);return n}static async first(e){for await(let n of e)return n}};var p={attribute:/\\[\\s*(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)\\s*(?:(?<operator>\\W?=)\\s*(?<value>.+?)\\s*(\\s(?<caseSensitive>[iIsS]))?\\s*)?\\]/gu,id:/#(?<name>[-\\w\\P{ASCII}]+)/gu,class:/\\.(?<name>[-\\w\\P{ASCII}]+)/gu,comma:/\\s*,\\s*/g,combinator:/\\s*[\\s>+~]\\s*/g,"pseudo-element":/::(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>\xB6*)\\))?/gu,"pseudo-class":/:(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>\xB6*)\\))?/gu,universal:/(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?\\*/gu,type:/(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)/gu},ue=new Set(["combinator","comma"]);var fe=t=>{switch(t){case"pseudo-element":case"pseudo-class":return new RegExp(p[t].source.replace("(?<argument>\\xB6*)","(?<argument>.*)"),"gu");default:return p[t]}};function de(t,e){let n=0,r="";for(;e<t.length;e++){let o=t[e];switch(o){case"(":++n;break;case")":--n;break}if(r+=o,n===0)return r}return r}function me(t,e=p){if(!t)return[];let n=[t];for(let[o,i]of Object.entries(e))for(let s=0;s<n.length;s++){let l=n[s];if(typeof l!="string")continue;i.lastIndex=0;let a=i.exec(l);if(!a)continue;let h=a.index-1,d=[],F=a[0],H=l.slice(0,h+1);H&&d.push(H),d.push({...a.groups,type:o,content:F});let B=l.slice(h+F.length+1);B&&d.push(B),n.splice(s,1,...d)}let r=0;for(let o of n)switch(typeof o){case"string":throw new Error(`Unexpected sequence ${o} found at index ${r}`);case"object":r+=o.content.length,o.pos=[r-o.content.length,r],ue.has(o.type)&&(o.content=o.content.trim()||" ");break}return n}var he=/([\'"])([^\\\\\\n]+?)\\1/g,pe=/\\\\./g;function G(t,e=p){if(t=t.trim(),t==="")return[];let n=[];t=t.replace(pe,(i,s)=>(n.push({value:i,offset:s}),"\\uE000".repeat(i.length))),t=t.replace(he,(i,s,l,a)=>(n.push({value:i,offset:a}),`${s}${"\\uE001".repeat(l.length)}${s}`));{let i=0,s;for(;(s=t.indexOf("(",i))>-1;){let l=de(t,s);n.push({value:l,offset:s}),t=`${t.substring(0,s)}(${"\\xB6".repeat(l.length-2)})${t.substring(s+l.length)}`,i=s+l.length}}let r=me(t,e),o=new Set;for(let i of n.reverse())for(let s of r){let{offset:l,value:a}=i;if(!(s.pos[0]<=l&&l+a.length<=s.pos[1]))continue;let{content:h}=s,d=l-s.pos[0];s.content=h.slice(0,d)+a+h.slice(d+a.length),s.content!==h&&o.add(s)}for(let i of o){let s=fe(i.type);if(!s)throw new Error(`Unknown token type: ${i.type}`);s.lastIndex=0;let l=s.exec(i.content);if(!l)throw new Error(`Unable to parse content for ${i.type}: ${i.content}`);Object.assign(i,l.groups)}return r}function*N(t,e){switch(t.type){case"list":for(let n of t.list)yield*N(n,t);break;case"complex":yield*N(t.left,t),yield*N(t.right,t);break;case"compound":yield*t.list.map(n=>[n,t]);break;default:yield[t,e]}}function g(t){let e;return Array.isArray(t)?e=t:e=[...N(t)].map(([n])=>n),e.map(n=>n.content).join("")}p.combinator=/\\s*(>>>>?|[\\s>+~])\\s*/g;var ge=/\\\\[\\s\\S]/g,ye=t=>t.length<=1?t:((t[0]===\'"\'||t[0]==="\'")&&t.endsWith(t[0])&&(t=t.slice(1,-1)),t.replace(ge,e=>e[1]));function K(t){let e=!0,n=G(t);if(n.length===0)return[[],e];let r=[],o=[r],i=[o],s=[];for(let l of n){switch(l.type){case"combinator":switch(l.content){case">>>":e=!1,s.length&&(r.push(g(s)),s.splice(0)),r=[],o.push(">>>"),o.push(r);continue;case">>>>":e=!1,s.length&&(r.push(g(s)),s.splice(0)),r=[],o.push(">>>>"),o.push(r);continue}break;case"pseudo-element":if(!l.name.startsWith("-p-"))break;e=!1,s.length&&(r.push(g(s)),s.splice(0)),r.push({name:l.name.slice(3),value:ye(l.argument??"")});continue;case"comma":s.length&&(r.push(g(s)),s.splice(0)),r=[],o=[r],i.push(o);continue}s.push(l)}return s.length&&r.push(g(s)),[i,e]}var D={};u(D,{textQuerySelectorAll:()=>S});var we=new Set(["checkbox","image","radio"]),Se=t=>t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&!we.has(t.type),be=new Set(["SCRIPT","STYLE"]),w=t=>!be.has(t.nodeName)&&!document.head?.contains(t),q=new WeakMap,J=t=>{for(;t;)q.delete(t),t instanceof ShadowRoot?t=t.host:t=t.parentNode},Y=new WeakSet,Te=new MutationObserver(t=>{for(let e of t)J(e.target)}),y=t=>{let e=q.get(t);if(e||(e={full:"",immediate:[]},!w(t)))return e;let n="";if(Se(t))e.full=t.value,e.immediate.push(t.value),t.addEventListener("input",r=>{J(r.target)},{once:!0,capture:!0});else{for(let r=t.firstChild;r;r=r.nextSibling){if(r.nodeType===Node.TEXT_NODE){e.full+=r.nodeValue??"",n+=r.nodeValue??"";continue}n&&e.immediate.push(n),n="",r.nodeType===Node.ELEMENT_NODE&&(e.full+=y(r).full)}n&&e.immediate.push(n),t instanceof Element&&t.shadowRoot&&(e.full+=y(t.shadowRoot).full),Y.has(t)||(Te.observe(t,{childList:!0,characterData:!0,subtree:!0}),Y.add(t))}return q.set(t,e),e};var S=function*(t,e){let n=!1;for(let r of t.childNodes)if(r instanceof Element&&w(r)){let o;r.shadowRoot?o=S(r.shadowRoot,e):o=S(r,e);for(let i of o)yield i,n=!0}n||t instanceof Element&&w(t)&&y(t).full.includes(e)&&(yield t)};var L={};u(L,{checkVisibility:()=>Pe,pierce:()=>x,pierceAll:()=>Q});var Ee=["hidden","collapse"],Pe=(t,e)=>{if(!t)return e===!1;if(e===void 0)return t;let n=t.nodeType===Node.TEXT_NODE?t.parentElement:t,r=window.getComputedStyle(n),o=r&&!Ee.includes(r.visibility)&&!Ne(n);return e===o?t:!1};function Ne(t){let e=t.getBoundingClientRect();return e.width===0||e.height===0}var xe=t=>"shadowRoot"in t&&t.shadowRoot instanceof ShadowRoot;function*x(t){xe(t)?yield t.shadowRoot:yield t}function*Q(t){t=x(t).next().value,yield t;let e=[document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT)];for(let n of e){let r;for(;r=n.nextNode();)r.shadowRoot&&(yield r.shadowRoot,e.push(document.createTreeWalker(r.shadowRoot,NodeFilter.SHOW_ELEMENT)))}}var U={};u(U,{xpathQuerySelectorAll:()=>j});var j=function*(t,e,n=-1){let o=(t.ownerDocument||document).evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE),i=[],s;for(;(s=o.iterateNext())&&(i.push(s),!(n&&i.length===n)););for(let l=0;l<i.length;l++)s=i[l],yield s,delete i[l]};var Ae=/[-\\w\\P{ASCII}*]/,Z=t=>"querySelectorAll"in t,A=class extends Error{constructor(e,n){super(`${e} is not a valid selector: ${n}`)}},$=class{#e;#r;#n=[];#t=void 0;elements;constructor(e,n,r){this.elements=[e],this.#e=n,this.#r=r,this.#o()}async run(){if(typeof this.#t=="string")switch(this.#t.trimStart()){case":scope":this.#o();break}for(;this.#t!==void 0;this.#o()){let e=this.#t,n=this.#e;typeof e=="string"?e[0]&&Ae.test(e[0])?this.elements=c.flatMap(this.elements,async function*(r){Z(r)&&(yield*r.querySelectorAll(e))}):this.elements=c.flatMap(this.elements,async function*(r){if(!r.parentElement){if(!Z(r))return;yield*r.querySelectorAll(e);return}let o=0;for(let i of r.parentElement.children)if(++o,i===r)break;yield*r.parentElement.querySelectorAll(`:scope>:nth-child(${o})${e}`)}):this.elements=c.flatMap(this.elements,async function*(r){switch(e.name){case"text":yield*S(r,e.value);break;case"xpath":yield*j(r,e.value);break;case"aria":yield*I(r,e.value);break;default:let o=O.get(e.name);if(!o)throw new A(n,`Unknown selector type: ${e.name}`);yield*o.querySelectorAll(r,e.value)}})}}#o(){if(this.#n.length!==0){this.#t=this.#n.shift();return}if(this.#r.length===0){this.#t=void 0;return}let e=this.#r.shift();switch(e){case">>>>":{this.elements=c.flatMap(this.elements,x),this.#o();break}case">>>":{this.elements=c.flatMap(this.elements,Q),this.#o();break}default:this.#n=e,this.#o();break}}},W=class{#e=new WeakMap;calculate(e,n=[]){if(e===null)return n;e instanceof ShadowRoot&&(e=e.host);let r=this.#e.get(e);if(r)return[...r,...n];let o=0;for(let s=e.previousSibling;s;s=s.previousSibling)++o;let i=this.calculate(e.parentNode,[o]);return this.#e.set(e,i),[...i,...n]}},ee=(t,e)=>{if(t.length+e.length===0)return 0;let[n=-1,...r]=t,[o=-1,...i]=e;return n===o?ee(r,i):n<o?-1:1},ve=async function*(t){let e=new Set;for await(let r of t)e.add(r);let n=new W;yield*[...e.values()].map(r=>[r,n.calculate(r)]).sort(([,r],[,o])=>ee(r,o)).map(([r])=>r)},te=function(t,e){let n,r;try{[n,r]=K(e)}catch{return t.querySelectorAll(e)}if(r)return t.querySelectorAll(e);if(n.some(o=>{let i=0;return o.some(s=>(typeof s=="string"?++i:i=0,i>1))}))throw new A(e,"Multiple deep combinators found in sequence.");return ve(c.flatMap(n,o=>{let i=new $(t,e,o);return i.run(),i.elements}))},Ce=async function(t,e){for await(let n of te(t,e))return n;return null};var Ie=Object.freeze({...k,..._,...M,...V,...D,...L,...U,Deferred:f,createFunction:z,createTextContent:y,IntervalPoller:P,isSuitableNodeForTextMatching:w,MutationPoller:T,RAFPoller:E}),ke=Ie;\n/**\n * @license\n * Copyright 2018 Google Inc.\n * SPDX-License-Identifier: Apache-2.0\n */\n/**\n * @license\n * Copyright 2024 Google Inc.\n * SPDX-License-Identifier: Apache-2.0\n */\n/**\n * @license\n * Copyright 2023 Google Inc.\n * SPDX-License-Identifier: Apache-2.0\n */\n/**\n * @license\n * Copyright 2022 Google Inc.\n * SPDX-License-Identifier: Apache-2.0\n */\n/**\n * @license\n * Copyright 2020 Google Inc.\n * SPDX-License-Identifier: Apache-2.0\n */\n';

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/ScriptInjector.js
var ScriptInjector = class {
  #updated = false;
  #amendments = /* @__PURE__ */ new Set();
  // Appends a statement of the form `(PuppeteerUtil) => {...}`.
  append(statement) {
    this.#update(() => {
      this.#amendments.add(statement);
    });
  }
  pop(statement) {
    this.#update(() => {
      this.#amendments.delete(statement);
    });
  }
  inject(inject, force = false) {
    if (this.#updated || force) {
      inject(this.#get());
    }
    this.#updated = false;
  }
  #update(callback) {
    callback();
    this.#updated = true;
  }
  #get() {
    return `(() => {
      const module = {};
      ${source}
      ${[...this.#amendments].map((statement) => {
      return `(${statement})(module.exports.default);`;
    }).join("")}
      return module.exports.default;
    })()`;
  }
};
__name(ScriptInjector, "ScriptInjector");
var scriptInjector = new ScriptInjector();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/CustomQueryHandler.js
var CustomQueryHandlerRegistry = class {
  #handlers = /* @__PURE__ */ new Map();
  get(name) {
    const handler = this.#handlers.get(name);
    return handler ? handler[1] : void 0;
  }
  /**
   * Registers a {@link CustomQueryHandler | custom query handler}.
   *
   * @remarks
   * After registration, the handler can be used everywhere where a selector is
   * expected by prepending the selection string with `<name>/`. The name is
   * only allowed to consist of lower- and upper case latin letters.
   *
   * @example
   *
   * ```ts
   * Puppeteer.customQueryHandlers.register('lit', { … });
   * const aHandle = await page.$('lit/…');
   * ```
   *
   * @param name - Name to register under.
   * @param queryHandler - {@link CustomQueryHandler | Custom query handler} to
   * register.
   */
  register(name, handler) {
    assert3(!this.#handlers.has(name), `Cannot register over existing handler: ${name}`);
    assert3(/^[a-zA-Z]+$/.test(name), `Custom query handler names may only contain [a-zA-Z]`);
    assert3(handler.queryAll || handler.queryOne, `At least one query method must be implemented.`);
    const Handler = /* @__PURE__ */ __name(class extends QueryHandler {
      static querySelectorAll = interpolateFunction((node, selector, PuppeteerUtil) => {
        return PuppeteerUtil.customQuerySelectors.get(PLACEHOLDER("name")).querySelectorAll(node, selector);
      }, { name: JSON.stringify(name) });
      static querySelector = interpolateFunction((node, selector, PuppeteerUtil) => {
        return PuppeteerUtil.customQuerySelectors.get(PLACEHOLDER("name")).querySelector(node, selector);
      }, { name: JSON.stringify(name) });
    }, "Handler");
    const registerScript = interpolateFunction((PuppeteerUtil) => {
      PuppeteerUtil.customQuerySelectors.register(PLACEHOLDER("name"), {
        queryAll: PLACEHOLDER("queryAll"),
        queryOne: PLACEHOLDER("queryOne")
      });
    }, {
      name: JSON.stringify(name),
      queryAll: handler.queryAll ? stringifyFunction(handler.queryAll) : String(void 0),
      queryOne: handler.queryOne ? stringifyFunction(handler.queryOne) : String(void 0)
    }).toString();
    this.#handlers.set(name, [registerScript, Handler]);
    scriptInjector.append(registerScript);
  }
  /**
   * Unregisters the {@link CustomQueryHandler | custom query handler} for the
   * given name.
   *
   * @throws `Error` if there is no handler under the given name.
   */
  unregister(name) {
    const handler = this.#handlers.get(name);
    if (!handler) {
      throw new Error(`Cannot unregister unknown handler: ${name}`);
    }
    scriptInjector.pop(handler[0]);
    this.#handlers.delete(name);
  }
  /**
   * Gets the names of all {@link CustomQueryHandler | custom query handlers}.
   */
  names() {
    return [...this.#handlers.keys()];
  }
  /**
   * Unregisters all custom query handlers.
   */
  clear() {
    for (const [registerScript] of this.#handlers) {
      scriptInjector.pop(registerScript);
    }
    this.#handlers.clear();
  }
};
__name(CustomQueryHandlerRegistry, "CustomQueryHandlerRegistry");
var customQueryHandlers = new CustomQueryHandlerRegistry();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/PierceQueryHandler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var PierceQueryHandler = class extends QueryHandler {
};
__name(PierceQueryHandler, "PierceQueryHandler");
__publicField(PierceQueryHandler, "querySelector", (element, selector, { pierceQuerySelector }) => {
  return pierceQuerySelector(element, selector);
});
__publicField(PierceQueryHandler, "querySelectorAll", (element, selector, { pierceQuerySelectorAll }) => {
  return pierceQuerySelectorAll(element, selector);
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/PQueryHandler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var PQueryHandler = class extends QueryHandler {
};
__name(PQueryHandler, "PQueryHandler");
__publicField(PQueryHandler, "querySelectorAll", (element, selector, { pQuerySelectorAll }) => {
  return pQuerySelectorAll(element, selector);
});
__publicField(PQueryHandler, "querySelector", (element, selector, { pQuerySelector }) => {
  return pQuerySelector(element, selector);
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/TextQueryHandler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TextQueryHandler = class extends QueryHandler {
};
__name(TextQueryHandler, "TextQueryHandler");
__publicField(TextQueryHandler, "querySelectorAll", (element, selector, { textQuerySelectorAll }) => {
  return textQuerySelectorAll(element, selector);
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/XPathQueryHandler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var XPathQueryHandler = class extends QueryHandler {
};
__name(XPathQueryHandler, "XPathQueryHandler");
__publicField(XPathQueryHandler, "querySelectorAll", (element, selector, { xpathQuerySelectorAll }) => {
  return xpathQuerySelectorAll(element, selector);
});
__publicField(XPathQueryHandler, "querySelector", (element, selector, { xpathQuerySelectorAll }) => {
  for (const result of xpathQuerySelectorAll(element, selector, 1)) {
    return result;
  }
  return null;
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/GetQueryHandler.js
var BUILTIN_QUERY_HANDLERS = {
  aria: ARIAQueryHandler,
  pierce: PierceQueryHandler,
  xpath: XPathQueryHandler,
  text: TextQueryHandler
};
var QUERY_SEPARATORS = ["=", "/"];
function getQueryHandlerAndSelector(selector) {
  for (const handlerMap of [
    customQueryHandlers.names().map((name) => {
      return [name, customQueryHandlers.get(name)];
    }),
    Object.entries(BUILTIN_QUERY_HANDLERS)
  ]) {
    for (const [name, QueryHandler2] of handlerMap) {
      for (const separator of QUERY_SEPARATORS) {
        const prefix = `${name}${separator}`;
        if (selector.startsWith(prefix)) {
          selector = selector.slice(prefix.length);
          return { updatedSelector: selector, QueryHandler: QueryHandler2 };
        }
      }
    }
  }
  return { updatedSelector: selector, QueryHandler: PQueryHandler };
}
__name(getQueryHandlerAndSelector, "getQueryHandlerAndSelector");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Frame.js
var __runInitializers4 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate4 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context3 = {};
    for (var p in contextIn)
      context3[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context3.access[p] = contextIn.access[p];
    context3.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context3);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource8 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources8 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
var FrameEvent;
(function(FrameEvent2) {
  FrameEvent2.FrameNavigated = Symbol("Frame.FrameNavigated");
  FrameEvent2.FrameSwapped = Symbol("Frame.FrameSwapped");
  FrameEvent2.LifecycleEvent = Symbol("Frame.LifecycleEvent");
  FrameEvent2.FrameNavigatedWithinDocument = Symbol("Frame.FrameNavigatedWithinDocument");
  FrameEvent2.FrameDetached = Symbol("Frame.FrameDetached");
  FrameEvent2.FrameSwappedByActivation = Symbol("Frame.FrameSwappedByActivation");
})(FrameEvent || (FrameEvent = {}));
var throwIfDetached = throwIfDisposed((frame) => {
  return `Attempted to use detached Frame '${frame._id}'.`;
});
var Frame = (() => {
  let _classSuper = EventEmitter2;
  let _instanceExtraInitializers = [];
  let _frameElement_decorators;
  let _evaluateHandle_decorators;
  let _evaluate_decorators;
  let _locator_decorators;
  let _$_decorators;
  let _$$_decorators;
  let _$eval_decorators;
  let _$$eval_decorators;
  let _waitForSelector_decorators;
  let _waitForFunction_decorators;
  let _content_decorators;
  let _addScriptTag_decorators;
  let _addStyleTag_decorators;
  let _click_decorators;
  let _focus_decorators;
  let _hover_decorators;
  let _select_decorators;
  let _tap_decorators;
  let _type_decorators;
  let _title_decorators;
  return /* @__PURE__ */ __name(class Frame extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _frameElement_decorators = [throwIfDetached];
      _evaluateHandle_decorators = [throwIfDetached];
      _evaluate_decorators = [throwIfDetached];
      _locator_decorators = [throwIfDetached];
      _$_decorators = [throwIfDetached];
      _$$_decorators = [throwIfDetached];
      _$eval_decorators = [throwIfDetached];
      _$$eval_decorators = [throwIfDetached];
      _waitForSelector_decorators = [throwIfDetached];
      _waitForFunction_decorators = [throwIfDetached];
      _content_decorators = [throwIfDetached];
      _addScriptTag_decorators = [throwIfDetached];
      _addStyleTag_decorators = [throwIfDetached];
      _click_decorators = [throwIfDetached];
      _focus_decorators = [throwIfDetached];
      _hover_decorators = [throwIfDetached];
      _select_decorators = [throwIfDetached];
      _tap_decorators = [throwIfDetached];
      _type_decorators = [throwIfDetached];
      _title_decorators = [throwIfDetached];
      __esDecorate4(this, null, _frameElement_decorators, { kind: "method", name: "frameElement", static: false, private: false, access: { has: (obj) => "frameElement" in obj, get: (obj) => obj.frameElement }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _evaluateHandle_decorators, { kind: "method", name: "evaluateHandle", static: false, private: false, access: { has: (obj) => "evaluateHandle" in obj, get: (obj) => obj.evaluateHandle }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _evaluate_decorators, { kind: "method", name: "evaluate", static: false, private: false, access: { has: (obj) => "evaluate" in obj, get: (obj) => obj.evaluate }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _locator_decorators, { kind: "method", name: "locator", static: false, private: false, access: { has: (obj) => "locator" in obj, get: (obj) => obj.locator }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _$_decorators, { kind: "method", name: "$", static: false, private: false, access: { has: (obj) => "$" in obj, get: (obj) => obj.$ }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _$$_decorators, { kind: "method", name: "$$", static: false, private: false, access: { has: (obj) => "$$" in obj, get: (obj) => obj.$$ }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _$eval_decorators, { kind: "method", name: "$eval", static: false, private: false, access: { has: (obj) => "$eval" in obj, get: (obj) => obj.$eval }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _$$eval_decorators, { kind: "method", name: "$$eval", static: false, private: false, access: { has: (obj) => "$$eval" in obj, get: (obj) => obj.$$eval }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _waitForSelector_decorators, { kind: "method", name: "waitForSelector", static: false, private: false, access: { has: (obj) => "waitForSelector" in obj, get: (obj) => obj.waitForSelector }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _waitForFunction_decorators, { kind: "method", name: "waitForFunction", static: false, private: false, access: { has: (obj) => "waitForFunction" in obj, get: (obj) => obj.waitForFunction }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _content_decorators, { kind: "method", name: "content", static: false, private: false, access: { has: (obj) => "content" in obj, get: (obj) => obj.content }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _addScriptTag_decorators, { kind: "method", name: "addScriptTag", static: false, private: false, access: { has: (obj) => "addScriptTag" in obj, get: (obj) => obj.addScriptTag }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _addStyleTag_decorators, { kind: "method", name: "addStyleTag", static: false, private: false, access: { has: (obj) => "addStyleTag" in obj, get: (obj) => obj.addStyleTag }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _click_decorators, { kind: "method", name: "click", static: false, private: false, access: { has: (obj) => "click" in obj, get: (obj) => obj.click }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _focus_decorators, { kind: "method", name: "focus", static: false, private: false, access: { has: (obj) => "focus" in obj, get: (obj) => obj.focus }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _hover_decorators, { kind: "method", name: "hover", static: false, private: false, access: { has: (obj) => "hover" in obj, get: (obj) => obj.hover }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _select_decorators, { kind: "method", name: "select", static: false, private: false, access: { has: (obj) => "select" in obj, get: (obj) => obj.select }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _tap_decorators, { kind: "method", name: "tap", static: false, private: false, access: { has: (obj) => "tap" in obj, get: (obj) => obj.tap }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _type_decorators, { kind: "method", name: "type", static: false, private: false, access: { has: (obj) => "type" in obj, get: (obj) => obj.type }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _title_decorators, { kind: "method", name: "title", static: false, private: false, access: { has: (obj) => "title" in obj, get: (obj) => obj.title }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    /**
     * @internal
     */
    _id = (__runInitializers4(this, _instanceExtraInitializers), void 0);
    /**
     * @internal
     */
    _parentId;
    /**
     * @internal
     */
    _name;
    /**
     * @internal
     */
    _hasStartedLoading = false;
    /**
     * @internal
     */
    constructor() {
      super();
    }
    #_document;
    /**
     * @internal
     */
    #document() {
      if (!this.#_document) {
        this.#_document = this.isolatedRealm().evaluateHandle(() => {
          return document;
        }).then((handle) => {
          return this.mainRealm().transferHandle(handle);
        });
      }
      return this.#_document;
    }
    /**
     * Used to clear the document handle that has been destroyed.
     *
     * @internal
     */
    clearDocumentHandle() {
      this.#_document = void 0;
    }
    /**
     * @returns The frame element associated with this frame (if any).
     */
    async frameElement() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const parentFrame = this.parentFrame();
        if (!parentFrame) {
          return null;
        }
        const list = __addDisposableResource8(env_1, await parentFrame.isolatedRealm().evaluateHandle(() => {
          return document.querySelectorAll("iframe,frame");
        }), false);
        for await (const iframe_1 of transposeIterableHandle(list)) {
          const env_2 = { stack: [], error: void 0, hasError: false };
          try {
            const iframe = __addDisposableResource8(env_2, iframe_1, false);
            const frame = await iframe.contentFrame();
            if (frame?._id === this._id) {
              return iframe.move();
            }
          } catch (e_1) {
            env_2.error = e_1;
            env_2.hasError = true;
          } finally {
            __disposeResources8(env_2);
          }
        }
        return null;
      } catch (e_2) {
        env_1.error = e_2;
        env_1.hasError = true;
      } finally {
        __disposeResources8(env_1);
      }
    }
    /**
     * Behaves identically to {@link Page.evaluateHandle} except it's run within
     * the context of this frame.
     *
     * @see {@link Page.evaluateHandle} for details.
     */
    async evaluateHandle(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
      return await this.mainRealm().evaluateHandle(pageFunction, ...args);
    }
    /**
     * Behaves identically to {@link Page.evaluate} except it's run within
     * the context of this frame.
     *
     * @see {@link Page.evaluate} for details.
     */
    async evaluate(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
      return await this.mainRealm().evaluate(pageFunction, ...args);
    }
    /**
     * @internal
     */
    locator(selectorOrFunc) {
      if (typeof selectorOrFunc === "string") {
        return NodeLocator.create(this, selectorOrFunc);
      } else {
        return FunctionLocator.create(this, selectorOrFunc);
      }
    }
    /**
     * Queries the frame for an element matching the given selector.
     *
     * @param selector - The selector to query for.
     * @returns A {@link ElementHandle | element handle} to the first element
     * matching the given selector. Otherwise, `null`.
     */
    async $(selector) {
      const document2 = await this.#document();
      return await document2.$(selector);
    }
    /**
     * Queries the frame for all elements matching the given selector.
     *
     * @param selector - The selector to query for.
     * @returns An array of {@link ElementHandle | element handles} that point to
     * elements matching the given selector.
     */
    async $$(selector) {
      const document2 = await this.#document();
      return await document2.$$(selector);
    }
    /**
     * Runs the given function on the first element matching the given selector in
     * the frame.
     *
     * If the given function returns a promise, then this method will wait till
     * the promise resolves.
     *
     * @example
     *
     * ```ts
     * const searchValue = await frame.$eval('#search', el => el.value);
     * ```
     *
     * @param selector - The selector to query for.
     * @param pageFunction - The function to be evaluated in the frame's context.
     * The first element matching the selector will be passed to the function as
     * its first argument.
     * @param args - Additional arguments to pass to `pageFunction`.
     * @returns A promise to the result of the function.
     */
    async $eval(selector, pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
      const document2 = await this.#document();
      return await document2.$eval(selector, pageFunction, ...args);
    }
    /**
     * Runs the given function on an array of elements matching the given selector
     * in the frame.
     *
     * If the given function returns a promise, then this method will wait till
     * the promise resolves.
     *
     * @example
     *
     * ```ts
     * const divsCounts = await frame.$$eval('div', divs => divs.length);
     * ```
     *
     * @param selector - The selector to query for.
     * @param pageFunction - The function to be evaluated in the frame's context.
     * An array of elements matching the given selector will be passed to the
     * function as its first argument.
     * @param args - Additional arguments to pass to `pageFunction`.
     * @returns A promise to the result of the function.
     */
    async $$eval(selector, pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
      const document2 = await this.#document();
      return await document2.$$eval(selector, pageFunction, ...args);
    }
    /**
     * Waits for an element matching the given selector to appear in the frame.
     *
     * This method works across navigations.
     *
     * @example
     *
     * ```ts
     * import puppeteer from 'puppeteer';
     *
     * (async () => {
     *   const browser = await puppeteer.launch();
     *   const page = await browser.newPage();
     *   let currentURL;
     *   page
     *     .mainFrame()
     *     .waitForSelector('img')
     *     .then(() => console.log('First URL with image: ' + currentURL));
     *
     *   for (currentURL of [
     *     'https://example.com',
     *     'https://google.com',
     *     'https://bbc.com',
     *   ]) {
     *     await page.goto(currentURL);
     *   }
     *   await browser.close();
     * })();
     * ```
     *
     * @param selector - The selector to query and wait for.
     * @param options - Options for customizing waiting behavior.
     * @returns An element matching the given selector.
     * @throws Throws if an element matching the given selector doesn't appear.
     */
    async waitForSelector(selector, options = {}) {
      const { updatedSelector, QueryHandler: QueryHandler2 } = getQueryHandlerAndSelector(selector);
      return await QueryHandler2.waitFor(this, updatedSelector, options);
    }
    /**
     * @example
     * The `waitForFunction` can be used to observe viewport size change:
     *
     * ```ts
     * import puppeteer from 'puppeteer';
     *
     * (async () => {
     * .  const browser = await puppeteer.launch();
     * .  const page = await browser.newPage();
     * .  const watchDog = page.mainFrame().waitForFunction('window.innerWidth < 100');
     * .  page.setViewport({width: 50, height: 50});
     * .  await watchDog;
     * .  await browser.close();
     * })();
     * ```
     *
     * To pass arguments from Node.js to the predicate of `page.waitForFunction` function:
     *
     * ```ts
     * const selector = '.foo';
     * await frame.waitForFunction(
     *   selector => !!document.querySelector(selector),
     *   {}, // empty options object
     *   selector
     * );
     * ```
     *
     * @param pageFunction - the function to evaluate in the frame context.
     * @param options - options to configure the polling method and timeout.
     * @param args - arguments to pass to the `pageFunction`.
     * @returns the promise which resolve when the `pageFunction` returns a truthy value.
     */
    async waitForFunction(pageFunction, options = {}, ...args) {
      return await this.mainRealm().waitForFunction(pageFunction, options, ...args);
    }
    /**
     * The full HTML contents of the frame, including the DOCTYPE.
     */
    async content() {
      return await this.evaluate(() => {
        let content = "";
        for (const node of document.childNodes) {
          switch (node) {
            case document.documentElement:
              content += document.documentElement.outerHTML;
              break;
            default:
              content += new XMLSerializer().serializeToString(node);
              break;
          }
        }
        return content;
      });
    }
    /**
     * @internal
     */
    async setFrameContent(content) {
      return await this.evaluate((html) => {
        document.open();
        document.write(html);
        document.close();
      }, content);
    }
    /**
     * The frame's `name` attribute as specified in the tag.
     *
     * @remarks
     * If the name is empty, it returns the `id` attribute instead.
     *
     * @remarks
     * This value is calculated once when the frame is created, and will not
     * update if the attribute is changed later.
     *
     * @deprecated Use
     *
     * ```ts
     * const element = await frame.frameElement();
     * const nameOrId = await element.evaluate(frame => frame.name ?? frame.id);
     * ```
     */
    name() {
      return this._name || "";
    }
    /**
     * Is`true` if the frame has been detached. Otherwise, `false`.
     *
     * @deprecated Use the `detached` getter.
     */
    isDetached() {
      return this.detached;
    }
    /**
     * @internal
     */
    get disposed() {
      return this.detached;
    }
    /**
     * Adds a `<script>` tag into the page with the desired url or content.
     *
     * @param options - Options for the script.
     * @returns An {@link ElementHandle | element handle} to the injected
     * `<script>` element.
     */
    async addScriptTag(options) {
      let { content = "", type } = options;
      const { path } = options;
      if (+!!options.url + +!!path + +!!content !== 1) {
        throw new Error("Exactly one of `url`, `path`, or `content` must be specified.");
      }
      if (path) {
        const fs2 = await importFSPromises();
        content = await fs2.readFile(path, "utf8");
        content += `//# sourceURL=${path.replace(/\n/g, "")}`;
      }
      type = type ?? "text/javascript";
      return await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({ url, id, type: type2, content: content2 }) => {
        return await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.type = type2;
          script.text = content2;
          script.addEventListener("error", (event) => {
            reject(new Error(event.message ?? "Could not load script"));
          }, { once: true });
          if (id) {
            script.id = id;
          }
          if (url) {
            script.src = url;
            script.addEventListener("load", () => {
              resolve(script);
            }, { once: true });
            document.head.appendChild(script);
          } else {
            document.head.appendChild(script);
            resolve(script);
          }
        });
      }, { ...options, type, content }));
    }
    /**
     * @internal
     */
    async addStyleTag(options) {
      let { content = "" } = options;
      const { path } = options;
      if (+!!options.url + +!!path + +!!content !== 1) {
        throw new Error("Exactly one of `url`, `path`, or `content` must be specified.");
      }
      if (path) {
        const fs2 = await importFSPromises();
        content = await fs2.readFile(path, "utf8");
        content += "/*# sourceURL=" + path.replace(/\n/g, "") + "*/";
        options.content = content;
      }
      return await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({ url, content: content2 }) => {
        return await new Promise((resolve, reject) => {
          let element;
          if (!url) {
            element = document.createElement("style");
            element.appendChild(document.createTextNode(content2));
          } else {
            const link2 = document.createElement("link");
            link2.rel = "stylesheet";
            link2.href = url;
            element = link2;
          }
          element.addEventListener("load", () => {
            resolve(element);
          }, { once: true });
          element.addEventListener("error", (event) => {
            reject(new Error(event.message ?? "Could not load style"));
          }, { once: true });
          document.head.appendChild(element);
          return element;
        });
      }, options));
    }
    /**
     * Clicks the first element found that matches `selector`.
     *
     * @remarks
     * If `click()` triggers a navigation event and there's a separate
     * `page.waitForNavigation()` promise to be resolved, you may end up with a
     * race condition that yields unexpected results. The correct pattern for
     * click and wait for navigation is the following:
     *
     * ```ts
     * const [response] = await Promise.all([
     *   page.waitForNavigation(waitOptions),
     *   frame.click(selector, clickOptions),
     * ]);
     * ```
     *
     * @param selector - The selector to query for.
     */
    async click(selector, options = {}) {
      const env_3 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource8(env_3, await this.$(selector), false);
        assert3(handle, `No element found for selector: ${selector}`);
        await handle.click(options);
        await handle.dispose();
      } catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
      } finally {
        __disposeResources8(env_3);
      }
    }
    /**
     * Focuses the first element that matches the `selector`.
     *
     * @param selector - The selector to query for.
     * @throws Throws if there's no element matching `selector`.
     */
    async focus(selector) {
      const env_4 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource8(env_4, await this.$(selector), false);
        assert3(handle, `No element found for selector: ${selector}`);
        await handle.focus();
      } catch (e_4) {
        env_4.error = e_4;
        env_4.hasError = true;
      } finally {
        __disposeResources8(env_4);
      }
    }
    /**
     * Hovers the pointer over the center of the first element that matches the
     * `selector`.
     *
     * @param selector - The selector to query for.
     * @throws Throws if there's no element matching `selector`.
     */
    async hover(selector) {
      const env_5 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource8(env_5, await this.$(selector), false);
        assert3(handle, `No element found for selector: ${selector}`);
        await handle.hover();
      } catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
      } finally {
        __disposeResources8(env_5);
      }
    }
    /**
     * Selects a set of value on the first `<select>` element that matches the
     * `selector`.
     *
     * @example
     *
     * ```ts
     * frame.select('select#colors', 'blue'); // single selection
     * frame.select('select#colors', 'red', 'green', 'blue'); // multiple selections
     * ```
     *
     * @param selector - The selector to query for.
     * @param values - The array of values to select. If the `<select>` has the
     * `multiple` attribute, all values are considered, otherwise only the first
     * one is taken into account.
     * @returns the list of values that were successfully selected.
     * @throws Throws if there's no `<select>` matching `selector`.
     */
    async select(selector, ...values) {
      const env_6 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource8(env_6, await this.$(selector), false);
        assert3(handle, `No element found for selector: ${selector}`);
        return await handle.select(...values);
      } catch (e_6) {
        env_6.error = e_6;
        env_6.hasError = true;
      } finally {
        __disposeResources8(env_6);
      }
    }
    /**
     * Taps the first element that matches the `selector`.
     *
     * @param selector - The selector to query for.
     * @throws Throws if there's no element matching `selector`.
     */
    async tap(selector) {
      const env_7 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource8(env_7, await this.$(selector), false);
        assert3(handle, `No element found for selector: ${selector}`);
        await handle.tap();
      } catch (e_7) {
        env_7.error = e_7;
        env_7.hasError = true;
      } finally {
        __disposeResources8(env_7);
      }
    }
    /**
     * Sends a `keydown`, `keypress`/`input`, and `keyup` event for each character
     * in the text.
     *
     * @remarks
     * To press a special key, like `Control` or `ArrowDown`, use
     * {@link Keyboard.press}.
     *
     * @example
     *
     * ```ts
     * await frame.type('#mytextarea', 'Hello'); // Types instantly
     * await frame.type('#mytextarea', 'World', {delay: 100}); // Types slower, like a user
     * ```
     *
     * @param selector - the selector for the element to type into. If there are
     * multiple the first will be used.
     * @param text - text to type into the element
     * @param options - takes one option, `delay`, which sets the time to wait
     * between key presses in milliseconds. Defaults to `0`.
     */
    async type(selector, text, options) {
      const env_8 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource8(env_8, await this.$(selector), false);
        assert3(handle, `No element found for selector: ${selector}`);
        await handle.type(text, options);
      } catch (e_8) {
        env_8.error = e_8;
        env_8.hasError = true;
      } finally {
        __disposeResources8(env_8);
      }
    }
    /**
     * The frame's title.
     */
    async title() {
      return await this.isolatedRealm().evaluate(() => {
        return document.title;
      });
    }
  }, "Frame");
})();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DeviceRequestPromptDevice = class {
  /**
   * Device id during a prompt.
   */
  id;
  /**
   * Device name as it appears in a prompt.
   */
  name;
  /**
   * @internal
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
};
__name(DeviceRequestPromptDevice, "DeviceRequestPromptDevice");
var DeviceRequestPrompt = class {
  #client;
  #timeoutSettings;
  #id;
  #handled = false;
  #updateDevicesHandle = this.#updateDevices.bind(this);
  #waitForDevicePromises = /* @__PURE__ */ new Set();
  /**
   * Current list of selectable devices.
   */
  devices = [];
  /**
   * @internal
   */
  constructor(client, timeoutSettings, firstEvent) {
    this.#client = client;
    this.#timeoutSettings = timeoutSettings;
    this.#id = firstEvent.id;
    this.#client.on("DeviceAccess.deviceRequestPrompted", this.#updateDevicesHandle);
    this.#client.on("Target.detachedFromTarget", () => {
      this.#client = null;
    });
    this.#updateDevices(firstEvent);
  }
  #updateDevices(event) {
    if (event.id !== this.#id) {
      return;
    }
    for (const rawDevice of event.devices) {
      if (this.devices.some((device) => {
        return device.id === rawDevice.id;
      })) {
        continue;
      }
      const newDevice = new DeviceRequestPromptDevice(rawDevice.id, rawDevice.name);
      this.devices.push(newDevice);
      for (const waitForDevicePromise of this.#waitForDevicePromises) {
        if (waitForDevicePromise.filter(newDevice)) {
          waitForDevicePromise.promise.resolve(newDevice);
        }
      }
    }
  }
  /**
   * Resolve to the first device in the prompt matching a filter.
   */
  async waitForDevice(filter2, options = {}) {
    for (const device of this.devices) {
      if (filter2(device)) {
        return device;
      }
    }
    const { timeout: timeout2 = this.#timeoutSettings.timeout() } = options;
    const deferred = Deferred.create({
      message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${timeout2}ms exceeded`,
      timeout: timeout2
    });
    const handle = { filter: filter2, promise: deferred };
    this.#waitForDevicePromises.add(handle);
    try {
      return await deferred.valueOrThrow();
    } finally {
      this.#waitForDevicePromises.delete(handle);
    }
  }
  /**
   * Select a device in the prompt's list.
   */
  async select(device) {
    assert3(this.#client !== null, "Cannot select device through detached session!");
    assert3(this.devices.includes(device), "Cannot select unknown device!");
    assert3(!this.#handled, "Cannot select DeviceRequestPrompt which is already handled!");
    this.#client.off("DeviceAccess.deviceRequestPrompted", this.#updateDevicesHandle);
    this.#handled = true;
    return await this.#client.send("DeviceAccess.selectPrompt", {
      id: this.#id,
      deviceId: device.id
    });
  }
  /**
   * Cancel the prompt.
   */
  async cancel() {
    assert3(this.#client !== null, "Cannot cancel prompt through detached session!");
    assert3(!this.#handled, "Cannot cancel DeviceRequestPrompt which is already handled!");
    this.#client.off("DeviceAccess.deviceRequestPrompted", this.#updateDevicesHandle);
    this.#handled = true;
    return await this.#client.send("DeviceAccess.cancelPrompt", { id: this.#id });
  }
};
__name(DeviceRequestPrompt, "DeviceRequestPrompt");
var DeviceRequestPromptManager = class {
  #client;
  #timeoutSettings;
  #deviceRequestPrompDeferreds = /* @__PURE__ */ new Set();
  /**
   * @internal
   */
  constructor(client, timeoutSettings) {
    this.#client = client;
    this.#timeoutSettings = timeoutSettings;
    this.#client.on("DeviceAccess.deviceRequestPrompted", (event) => {
      this.#onDeviceRequestPrompted(event);
    });
    this.#client.on("Target.detachedFromTarget", () => {
      this.#client = null;
    });
  }
  /**
   * Wait for device prompt created by an action like calling WebBluetooth's
   * requestDevice.
   */
  async waitForDevicePrompt(options = {}) {
    assert3(this.#client !== null, "Cannot wait for device prompt through detached session!");
    const needsEnable = this.#deviceRequestPrompDeferreds.size === 0;
    let enablePromise;
    if (needsEnable) {
      enablePromise = this.#client.send("DeviceAccess.enable");
    }
    const { timeout: timeout2 = this.#timeoutSettings.timeout() } = options;
    const deferred = Deferred.create({
      message: `Waiting for \`DeviceRequestPrompt\` failed: ${timeout2}ms exceeded`,
      timeout: timeout2
    });
    this.#deviceRequestPrompDeferreds.add(deferred);
    try {
      const [result] = await Promise.all([
        deferred.valueOrThrow(),
        enablePromise
      ]);
      return result;
    } finally {
      this.#deviceRequestPrompDeferreds.delete(deferred);
    }
  }
  /**
   * @internal
   */
  #onDeviceRequestPrompted(event) {
    if (!this.#deviceRequestPrompDeferreds.size) {
      return;
    }
    assert3(this.#client !== null);
    const devicePrompt = new DeviceRequestPrompt(this.#client, this.#timeoutSettings, event);
    for (const promise of this.#deviceRequestPrompDeferreds) {
      promise.resolve(devicePrompt);
    }
    this.#deviceRequestPrompDeferreds.clear();
  }
};
__name(DeviceRequestPromptManager, "DeviceRequestPromptManager");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/ExecutionContext.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/ElementHandle.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/ElementHandle.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __runInitializers5 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate5 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context3 = {};
    for (var p in contextIn)
      context3[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context3.access[p] = contextIn.access[p];
    context3.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context3);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource9 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources9 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
var ElementHandle = (() => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
  let _classSuper = JSHandle;
  let _instanceExtraInitializers = [];
  let _getProperty_decorators;
  let _getProperties_decorators;
  let _jsonValue_decorators;
  let _$_decorators;
  let _$$_decorators;
  let _waitForSelector_decorators;
  let _isVisible_decorators;
  let _isHidden_decorators;
  let _toElement_decorators;
  let _clickablePoint_decorators;
  let _hover_decorators;
  let _click_decorators;
  let _drag_decorators;
  let _dragEnter_decorators;
  let _dragOver_decorators;
  let _drop_decorators;
  let _dragAndDrop_decorators;
  let _select_decorators;
  let _tap_decorators;
  let _touchStart_decorators;
  let _touchMove_decorators;
  let _touchEnd_decorators;
  let _focus_decorators;
  let _type_decorators;
  let _press_decorators;
  let _boundingBox_decorators;
  let _boxModel_decorators;
  let _screenshot_decorators;
  let _isIntersectingViewport_decorators;
  let _scrollIntoView_decorators;
  return /* @__PURE__ */ __name(class ElementHandle2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _getProperty_decorators = [throwIfDisposed(), (_a = ElementHandle2).bindIsolatedHandle.bind(_a)];
      _getProperties_decorators = [throwIfDisposed(), (_b = ElementHandle2).bindIsolatedHandle.bind(_b)];
      _jsonValue_decorators = [throwIfDisposed(), (_c = ElementHandle2).bindIsolatedHandle.bind(_c)];
      _$_decorators = [throwIfDisposed(), (_d = ElementHandle2).bindIsolatedHandle.bind(_d)];
      _$$_decorators = [throwIfDisposed(), (_e = ElementHandle2).bindIsolatedHandle.bind(_e)];
      _waitForSelector_decorators = [throwIfDisposed(), (_f = ElementHandle2).bindIsolatedHandle.bind(_f)];
      _isVisible_decorators = [throwIfDisposed(), (_g = ElementHandle2).bindIsolatedHandle.bind(_g)];
      _isHidden_decorators = [throwIfDisposed(), (_h = ElementHandle2).bindIsolatedHandle.bind(_h)];
      _toElement_decorators = [throwIfDisposed(), (_j = ElementHandle2).bindIsolatedHandle.bind(_j)];
      _clickablePoint_decorators = [throwIfDisposed(), (_k = ElementHandle2).bindIsolatedHandle.bind(_k)];
      _hover_decorators = [throwIfDisposed(), (_l = ElementHandle2).bindIsolatedHandle.bind(_l)];
      _click_decorators = [throwIfDisposed(), (_m = ElementHandle2).bindIsolatedHandle.bind(_m)];
      _drag_decorators = [throwIfDisposed(), (_o = ElementHandle2).bindIsolatedHandle.bind(_o)];
      _dragEnter_decorators = [throwIfDisposed(), (_p = ElementHandle2).bindIsolatedHandle.bind(_p)];
      _dragOver_decorators = [throwIfDisposed(), (_q = ElementHandle2).bindIsolatedHandle.bind(_q)];
      _drop_decorators = [throwIfDisposed(), (_r = ElementHandle2).bindIsolatedHandle.bind(_r)];
      _dragAndDrop_decorators = [throwIfDisposed(), (_s = ElementHandle2).bindIsolatedHandle.bind(_s)];
      _select_decorators = [throwIfDisposed(), (_t = ElementHandle2).bindIsolatedHandle.bind(_t)];
      _tap_decorators = [throwIfDisposed(), (_u = ElementHandle2).bindIsolatedHandle.bind(_u)];
      _touchStart_decorators = [throwIfDisposed(), (_v = ElementHandle2).bindIsolatedHandle.bind(_v)];
      _touchMove_decorators = [throwIfDisposed(), (_w = ElementHandle2).bindIsolatedHandle.bind(_w)];
      _touchEnd_decorators = [throwIfDisposed(), (_x = ElementHandle2).bindIsolatedHandle.bind(_x)];
      _focus_decorators = [throwIfDisposed(), (_y = ElementHandle2).bindIsolatedHandle.bind(_y)];
      _type_decorators = [throwIfDisposed(), (_z = ElementHandle2).bindIsolatedHandle.bind(_z)];
      _press_decorators = [throwIfDisposed(), (_0 = ElementHandle2).bindIsolatedHandle.bind(_0)];
      _boundingBox_decorators = [throwIfDisposed(), (_1 = ElementHandle2).bindIsolatedHandle.bind(_1)];
      _boxModel_decorators = [throwIfDisposed(), (_2 = ElementHandle2).bindIsolatedHandle.bind(_2)];
      _screenshot_decorators = [throwIfDisposed(), (_3 = ElementHandle2).bindIsolatedHandle.bind(_3)];
      _isIntersectingViewport_decorators = [throwIfDisposed(), (_4 = ElementHandle2).bindIsolatedHandle.bind(_4)];
      _scrollIntoView_decorators = [throwIfDisposed(), (_5 = ElementHandle2).bindIsolatedHandle.bind(_5)];
      __esDecorate5(this, null, _getProperty_decorators, { kind: "method", name: "getProperty", static: false, private: false, access: { has: (obj) => "getProperty" in obj, get: (obj) => obj.getProperty }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _getProperties_decorators, { kind: "method", name: "getProperties", static: false, private: false, access: { has: (obj) => "getProperties" in obj, get: (obj) => obj.getProperties }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _jsonValue_decorators, { kind: "method", name: "jsonValue", static: false, private: false, access: { has: (obj) => "jsonValue" in obj, get: (obj) => obj.jsonValue }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _$_decorators, { kind: "method", name: "$", static: false, private: false, access: { has: (obj) => "$" in obj, get: (obj) => obj.$ }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _$$_decorators, { kind: "method", name: "$$", static: false, private: false, access: { has: (obj) => "$$" in obj, get: (obj) => obj.$$ }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _waitForSelector_decorators, { kind: "method", name: "waitForSelector", static: false, private: false, access: { has: (obj) => "waitForSelector" in obj, get: (obj) => obj.waitForSelector }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _isVisible_decorators, { kind: "method", name: "isVisible", static: false, private: false, access: { has: (obj) => "isVisible" in obj, get: (obj) => obj.isVisible }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _isHidden_decorators, { kind: "method", name: "isHidden", static: false, private: false, access: { has: (obj) => "isHidden" in obj, get: (obj) => obj.isHidden }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _toElement_decorators, { kind: "method", name: "toElement", static: false, private: false, access: { has: (obj) => "toElement" in obj, get: (obj) => obj.toElement }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _clickablePoint_decorators, { kind: "method", name: "clickablePoint", static: false, private: false, access: { has: (obj) => "clickablePoint" in obj, get: (obj) => obj.clickablePoint }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _hover_decorators, { kind: "method", name: "hover", static: false, private: false, access: { has: (obj) => "hover" in obj, get: (obj) => obj.hover }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _click_decorators, { kind: "method", name: "click", static: false, private: false, access: { has: (obj) => "click" in obj, get: (obj) => obj.click }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _drag_decorators, { kind: "method", name: "drag", static: false, private: false, access: { has: (obj) => "drag" in obj, get: (obj) => obj.drag }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _dragEnter_decorators, { kind: "method", name: "dragEnter", static: false, private: false, access: { has: (obj) => "dragEnter" in obj, get: (obj) => obj.dragEnter }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _dragOver_decorators, { kind: "method", name: "dragOver", static: false, private: false, access: { has: (obj) => "dragOver" in obj, get: (obj) => obj.dragOver }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _drop_decorators, { kind: "method", name: "drop", static: false, private: false, access: { has: (obj) => "drop" in obj, get: (obj) => obj.drop }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _dragAndDrop_decorators, { kind: "method", name: "dragAndDrop", static: false, private: false, access: { has: (obj) => "dragAndDrop" in obj, get: (obj) => obj.dragAndDrop }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _select_decorators, { kind: "method", name: "select", static: false, private: false, access: { has: (obj) => "select" in obj, get: (obj) => obj.select }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _tap_decorators, { kind: "method", name: "tap", static: false, private: false, access: { has: (obj) => "tap" in obj, get: (obj) => obj.tap }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _touchStart_decorators, { kind: "method", name: "touchStart", static: false, private: false, access: { has: (obj) => "touchStart" in obj, get: (obj) => obj.touchStart }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _touchMove_decorators, { kind: "method", name: "touchMove", static: false, private: false, access: { has: (obj) => "touchMove" in obj, get: (obj) => obj.touchMove }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _touchEnd_decorators, { kind: "method", name: "touchEnd", static: false, private: false, access: { has: (obj) => "touchEnd" in obj, get: (obj) => obj.touchEnd }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _focus_decorators, { kind: "method", name: "focus", static: false, private: false, access: { has: (obj) => "focus" in obj, get: (obj) => obj.focus }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _type_decorators, { kind: "method", name: "type", static: false, private: false, access: { has: (obj) => "type" in obj, get: (obj) => obj.type }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _press_decorators, { kind: "method", name: "press", static: false, private: false, access: { has: (obj) => "press" in obj, get: (obj) => obj.press }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _boundingBox_decorators, { kind: "method", name: "boundingBox", static: false, private: false, access: { has: (obj) => "boundingBox" in obj, get: (obj) => obj.boundingBox }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _boxModel_decorators, { kind: "method", name: "boxModel", static: false, private: false, access: { has: (obj) => "boxModel" in obj, get: (obj) => obj.boxModel }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _screenshot_decorators, { kind: "method", name: "screenshot", static: false, private: false, access: { has: (obj) => "screenshot" in obj, get: (obj) => obj.screenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _isIntersectingViewport_decorators, { kind: "method", name: "isIntersectingViewport", static: false, private: false, access: { has: (obj) => "isIntersectingViewport" in obj, get: (obj) => obj.isIntersectingViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _scrollIntoView_decorators, { kind: "method", name: "scrollIntoView", static: false, private: false, access: { has: (obj) => "scrollIntoView" in obj, get: (obj) => obj.scrollIntoView }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    /**
     * @internal
     * Cached isolatedHandle to prevent
     * trying to adopt it multiple times
     */
    isolatedHandle = (__runInitializers5(this, _instanceExtraInitializers), void 0);
    /**
     * A given method will have it's `this` replaced with an isolated version of
     * `this` when decorated with this decorator.
     *
     * All changes of isolated `this` are reflected on the actual `this`.
     *
     * @internal
     */
    static bindIsolatedHandle(target, _) {
      return async function(...args) {
        if (this.realm === this.frame.isolatedRealm()) {
          return await target.call(this, ...args);
        }
        let adoptedThis;
        if (this["isolatedHandle"]) {
          adoptedThis = this["isolatedHandle"];
        } else {
          this["isolatedHandle"] = adoptedThis = await this.frame.isolatedRealm().adoptHandle(this);
        }
        const result = await target.call(adoptedThis, ...args);
        if (result === adoptedThis) {
          return this;
        }
        if (result instanceof JSHandle) {
          return await this.realm.transferHandle(result);
        }
        if (Array.isArray(result)) {
          await Promise.all(result.map(async (item, index, result2) => {
            if (item instanceof JSHandle) {
              result2[index] = await this.realm.transferHandle(item);
            }
          }));
        }
        if (result instanceof Map) {
          await Promise.all([...result.entries()].map(async ([key, value]) => {
            if (value instanceof JSHandle) {
              result.set(key, await this.realm.transferHandle(value));
            }
          }));
        }
        return result;
      };
    }
    /**
     * @internal
     */
    handle;
    /**
     * @internal
     */
    constructor(handle) {
      super();
      this.handle = handle;
      this[_isElementHandle] = true;
    }
    /**
     * @internal
     */
    get id() {
      return this.handle.id;
    }
    /**
     * @internal
     */
    get disposed() {
      return this.handle.disposed;
    }
    /**
     * @internal
     */
    async getProperty(propertyName) {
      return await this.handle.getProperty(propertyName);
    }
    /**
     * @internal
     */
    async getProperties() {
      return await this.handle.getProperties();
    }
    /**
     * @internal
     */
    async evaluate(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
      return await this.handle.evaluate(pageFunction, ...args);
    }
    /**
     * @internal
     */
    async evaluateHandle(pageFunction, ...args) {
      pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
      return await this.handle.evaluateHandle(pageFunction, ...args);
    }
    /**
     * @internal
     */
    async jsonValue() {
      return await this.handle.jsonValue();
    }
    /**
     * @internal
     */
    toString() {
      return this.handle.toString();
    }
    /**
     * @internal
     */
    remoteObject() {
      return this.handle.remoteObject();
    }
    /**
     * @internal
     */
    dispose() {
      return this.handle.dispose();
    }
    /**
     * @internal
     */
    asElement() {
      return this;
    }
    /**
     * Queries the current element for an element matching the given selector.
     *
     * @param selector - The selector to query for.
     * @returns A {@link ElementHandle | element handle} to the first element
     * matching the given selector. Otherwise, `null`.
     */
    async $(selector) {
      const { updatedSelector, QueryHandler: QueryHandler2 } = getQueryHandlerAndSelector(selector);
      return await QueryHandler2.queryOne(this, updatedSelector);
    }
    /**
     * Queries the current element for all elements matching the given selector.
     *
     * @param selector - The selector to query for.
     * @returns An array of {@link ElementHandle | element handles} that point to
     * elements matching the given selector.
     */
    async $$(selector) {
      const { updatedSelector, QueryHandler: QueryHandler2 } = getQueryHandlerAndSelector(selector);
      return await AsyncIterableUtil.collect(QueryHandler2.queryAll(this, updatedSelector));
    }
    /**
     * Runs the given function on the first element matching the given selector in
     * the current element.
     *
     * If the given function returns a promise, then this method will wait till
     * the promise resolves.
     *
     * @example
     *
     * ```ts
     * const tweetHandle = await page.$('.tweet');
     * expect(await tweetHandle.$eval('.like', node => node.innerText)).toBe(
     *   '100'
     * );
     * expect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe(
     *   '10'
     * );
     * ```
     *
     * @param selector - The selector to query for.
     * @param pageFunction - The function to be evaluated in this element's page's
     * context. The first element matching the selector will be passed in as the
     * first argument.
     * @param args - Additional arguments to pass to `pageFunction`.
     * @returns A promise to the result of the function.
     */
    async $eval(selector, pageFunction, ...args) {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        pageFunction = withSourcePuppeteerURLIfNone(this.$eval.name, pageFunction);
        const elementHandle = __addDisposableResource9(env_1, await this.$(selector), false);
        if (!elementHandle) {
          throw new Error(`Error: failed to find element matching selector "${selector}"`);
        }
        return await elementHandle.evaluate(pageFunction, ...args);
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources9(env_1);
      }
    }
    /**
     * Runs the given function on an array of elements matching the given selector
     * in the current element.
     *
     * If the given function returns a promise, then this method will wait till
     * the promise resolves.
     *
     * @example
     * HTML:
     *
     * ```html
     * <div class="feed">
     *   <div class="tweet">Hello!</div>
     *   <div class="tweet">Hi!</div>
     * </div>
     * ```
     *
     * JavaScript:
     *
     * ```ts
     * const feedHandle = await page.$('.feed');
     * expect(
     *   await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText))
     * ).toEqual(['Hello!', 'Hi!']);
     * ```
     *
     * @param selector - The selector to query for.
     * @param pageFunction - The function to be evaluated in the element's page's
     * context. An array of elements matching the given selector will be passed to
     * the function as its first argument.
     * @param args - Additional arguments to pass to `pageFunction`.
     * @returns A promise to the result of the function.
     */
    async $$eval(selector, pageFunction, ...args) {
      const env_2 = { stack: [], error: void 0, hasError: false };
      try {
        pageFunction = withSourcePuppeteerURLIfNone(this.$$eval.name, pageFunction);
        const results = await this.$$(selector);
        const elements = __addDisposableResource9(env_2, await this.evaluateHandle((_, ...elements2) => {
          return elements2;
        }, ...results), false);
        const [result] = await Promise.all([
          elements.evaluate(pageFunction, ...args),
          ...results.map((results2) => {
            return results2.dispose();
          })
        ]);
        return result;
      } catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
      } finally {
        __disposeResources9(env_2);
      }
    }
    /**
     * Wait for an element matching the given selector to appear in the current
     * element.
     *
     * Unlike {@link Frame.waitForSelector}, this method does not work across
     * navigations or if the element is detached from DOM.
     *
     * @example
     *
     * ```ts
     * import puppeteer from 'puppeteer';
     *
     * (async () => {
     *   const browser = await puppeteer.launch();
     *   const page = await browser.newPage();
     *   let currentURL;
     *   page
     *     .mainFrame()
     *     .waitForSelector('img')
     *     .then(() => console.log('First URL with image: ' + currentURL));
     *
     *   for (currentURL of [
     *     'https://example.com',
     *     'https://google.com',
     *     'https://bbc.com',
     *   ]) {
     *     await page.goto(currentURL);
     *   }
     *   await browser.close();
     * })();
     * ```
     *
     * @param selector - The selector to query and wait for.
     * @param options - Options for customizing waiting behavior.
     * @returns An element matching the given selector.
     * @throws Throws if an element matching the given selector doesn't appear.
     */
    async waitForSelector(selector, options = {}) {
      const { updatedSelector, QueryHandler: QueryHandler2 } = getQueryHandlerAndSelector(selector);
      return await QueryHandler2.waitFor(this, updatedSelector, options);
    }
    async #checkVisibility(visibility) {
      return await this.evaluate(async (element, PuppeteerUtil, visibility2) => {
        return Boolean(PuppeteerUtil.checkVisibility(element, visibility2));
      }, LazyArg.create((context3) => {
        return context3.puppeteerUtil;
      }), visibility);
    }
    /**
     * Checks if an element is visible using the same mechanism as
     * {@link ElementHandle.waitForSelector}.
     */
    async isVisible() {
      return await this.#checkVisibility(true);
    }
    /**
     * Checks if an element is hidden using the same mechanism as
     * {@link ElementHandle.waitForSelector}.
     */
    async isHidden() {
      return await this.#checkVisibility(false);
    }
    /**
     * Converts the current handle to the given element type.
     *
     * @example
     *
     * ```ts
     * const element: ElementHandle<Element> = await page.$(
     *   '.class-name-of-anchor'
     * );
     * // DO NOT DISPOSE `element`, this will be always be the same handle.
     * const anchor: ElementHandle<HTMLAnchorElement> =
     *   await element.toElement('a');
     * ```
     *
     * @param tagName - The tag name of the desired element type.
     * @throws An error if the handle does not match. **The handle will not be
     * automatically disposed.**
     */
    async toElement(tagName) {
      const isMatchingTagName = await this.evaluate((node, tagName2) => {
        return node.nodeName === tagName2.toUpperCase();
      }, tagName);
      if (!isMatchingTagName) {
        throw new Error(`Element is not a(n) \`${tagName}\` element`);
      }
      return this;
    }
    /**
     * Returns the middle point within an element unless a specific offset is provided.
     */
    async clickablePoint(offset) {
      const box = await this.#clickableBox();
      if (!box) {
        throw new Error("Node is either not clickable or not an Element");
      }
      if (offset !== void 0) {
        return {
          x: box.x + offset.x,
          y: box.y + offset.y
        };
      }
      return {
        x: box.x + box.width / 2,
        y: box.y + box.height / 2
      };
    }
    /**
     * This method scrolls element into view if needed, and then
     * uses {@link Page.mouse} to hover over the center of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    async hover() {
      await this.scrollIntoViewIfNeeded();
      const { x, y } = await this.clickablePoint();
      await this.frame.page().mouse.move(x, y);
    }
    /**
     * This method scrolls element into view if needed, and then
     * uses {@link Page.mouse} to click in the center of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    async click(options = {}) {
      await this.scrollIntoViewIfNeeded();
      const { x, y } = await this.clickablePoint(options.offset);
      await this.frame.page().mouse.click(x, y, options);
    }
    /**
     * Drags an element over the given element or point.
     *
     * @returns DEPRECATED. When drag interception is enabled, the drag payload is
     * returned.
     */
    async drag(target) {
      await this.scrollIntoViewIfNeeded();
      const page = this.frame.page();
      if (page.isDragInterceptionEnabled()) {
        const source2 = await this.clickablePoint();
        if (target instanceof ElementHandle2) {
          target = await target.clickablePoint();
        }
        return await page.mouse.drag(source2, target);
      }
      try {
        if (!page._isDragging) {
          page._isDragging = true;
          await this.hover();
          await page.mouse.down();
        }
        if (target instanceof ElementHandle2) {
          await target.hover();
        } else {
          await page.mouse.move(target.x, target.y);
        }
      } catch (error3) {
        page._isDragging = false;
        throw error3;
      }
    }
    /**
     * @deprecated Do not use. `dragenter` will automatically be performed during dragging.
     */
    async dragEnter(data = { items: [], dragOperationsMask: 1 }) {
      const page = this.frame.page();
      await this.scrollIntoViewIfNeeded();
      const target = await this.clickablePoint();
      await page.mouse.dragEnter(target, data);
    }
    /**
     * @deprecated Do not use. `dragover` will automatically be performed during dragging.
     */
    async dragOver(data = { items: [], dragOperationsMask: 1 }) {
      const page = this.frame.page();
      await this.scrollIntoViewIfNeeded();
      const target = await this.clickablePoint();
      await page.mouse.dragOver(target, data);
    }
    /**
     * @internal
     */
    async drop(dataOrElement = {
      items: [],
      dragOperationsMask: 1
    }) {
      const page = this.frame.page();
      if ("items" in dataOrElement) {
        await this.scrollIntoViewIfNeeded();
        const destination = await this.clickablePoint();
        await page.mouse.drop(destination, dataOrElement);
      } else {
        await dataOrElement.drag(this);
        page._isDragging = false;
        await page.mouse.up();
      }
    }
    /**
     * @deprecated Use `ElementHandle.drop` instead.
     */
    async dragAndDrop(target, options) {
      const page = this.frame.page();
      assert3(page.isDragInterceptionEnabled(), "Drag Interception is not enabled!");
      await this.scrollIntoViewIfNeeded();
      const startPoint = await this.clickablePoint();
      const targetPoint = await target.clickablePoint();
      await page.mouse.dragAndDrop(startPoint, targetPoint, options);
    }
    /**
     * Triggers a `change` and `input` event once all the provided options have been
     * selected. If there's no `<select>` element matching `selector`, the method
     * throws an error.
     *
     * @example
     *
     * ```ts
     * handle.select('blue'); // single selection
     * handle.select('red', 'green', 'blue'); // multiple selections
     * ```
     *
     * @param values - Values of options to select. If the `<select>` has the
     * `multiple` attribute, all values are considered, otherwise only the first
     * one is taken into account.
     */
    async select(...values) {
      for (const value of values) {
        assert3(isString(value), 'Values must be strings. Found value "' + value + '" of type "' + typeof value + '"');
      }
      return await this.evaluate((element, vals) => {
        const values2 = new Set(vals);
        if (!(element instanceof HTMLSelectElement)) {
          throw new Error("Element is not a <select> element.");
        }
        const selectedValues = /* @__PURE__ */ new Set();
        if (!element.multiple) {
          for (const option of element.options) {
            option.selected = false;
          }
          for (const option of element.options) {
            if (values2.has(option.value)) {
              option.selected = true;
              selectedValues.add(option.value);
              break;
            }
          }
        } else {
          for (const option of element.options) {
            option.selected = values2.has(option.value);
            if (option.selected) {
              selectedValues.add(option.value);
            }
          }
        }
        element.dispatchEvent(new Event("input", { bubbles: true }));
        element.dispatchEvent(new Event("change", { bubbles: true }));
        return [...selectedValues.values()];
      }, values);
    }
    /**
     * This method scrolls element into view if needed, and then uses
     * {@link Touchscreen.tap} to tap in the center of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    async tap() {
      await this.scrollIntoViewIfNeeded();
      const { x, y } = await this.clickablePoint();
      await this.frame.page().touchscreen.tap(x, y);
    }
    async touchStart() {
      await this.scrollIntoViewIfNeeded();
      const { x, y } = await this.clickablePoint();
      await this.frame.page().touchscreen.touchStart(x, y);
    }
    async touchMove() {
      await this.scrollIntoViewIfNeeded();
      const { x, y } = await this.clickablePoint();
      await this.frame.page().touchscreen.touchMove(x, y);
    }
    async touchEnd() {
      await this.scrollIntoViewIfNeeded();
      await this.frame.page().touchscreen.touchEnd();
    }
    /**
     * Calls {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus | focus} on the element.
     */
    async focus() {
      await this.evaluate((element) => {
        if (!(element instanceof HTMLElement)) {
          throw new Error("Cannot focus non-HTMLElement");
        }
        return element.focus();
      });
    }
    /**
     * Focuses the element, and then sends a `keydown`, `keypress`/`input`, and
     * `keyup` event for each character in the text.
     *
     * To press a special key, like `Control` or `ArrowDown`,
     * use {@link ElementHandle.press}.
     *
     * @example
     *
     * ```ts
     * await elementHandle.type('Hello'); // Types instantly
     * await elementHandle.type('World', {delay: 100}); // Types slower, like a user
     * ```
     *
     * @example
     * An example of typing into a text field and then submitting the form:
     *
     * ```ts
     * const elementHandle = await page.$('input');
     * await elementHandle.type('some text');
     * await elementHandle.press('Enter');
     * ```
     *
     * @param options - Delay in milliseconds. Defaults to 0.
     */
    async type(text, options) {
      await this.focus();
      await this.frame.page().keyboard.type(text, options);
    }
    /**
     * Focuses the element, and then uses {@link Keyboard.down} and {@link Keyboard.up}.
     *
     * @remarks
     * If `key` is a single character and no modifier keys besides `Shift`
     * are being held down, a `keypress`/`input` event will also be generated.
     * The `text` option can be specified to force an input event to be generated.
     *
     * **NOTE** Modifier keys DO affect `elementHandle.press`. Holding down `Shift`
     * will type the text in upper case.
     *
     * @param key - Name of key to press, such as `ArrowLeft`.
     * See {@link KeyInput} for a list of all key names.
     */
    async press(key, options) {
      await this.focus();
      await this.frame.page().keyboard.press(key, options);
    }
    async #clickableBox() {
      const boxes = await this.evaluate((element) => {
        if (!(element instanceof Element)) {
          return null;
        }
        return [...element.getClientRects()].map((rect) => {
          return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
        });
      });
      if (!boxes?.length) {
        return null;
      }
      await this.#intersectBoundingBoxesWithFrame(boxes);
      let frame = this.frame;
      let parentFrame;
      while (parentFrame = frame?.parentFrame()) {
        const env_3 = { stack: [], error: void 0, hasError: false };
        try {
          const handle = __addDisposableResource9(env_3, await frame.frameElement(), false);
          if (!handle) {
            throw new Error("Unsupported frame type");
          }
          const parentBox = await handle.evaluate((element) => {
            if (element.getClientRects().length === 0) {
              return null;
            }
            const rect = element.getBoundingClientRect();
            const style = window.getComputedStyle(element);
            return {
              left: rect.left + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10),
              top: rect.top + parseInt(style.paddingTop, 10) + parseInt(style.borderTopWidth, 10)
            };
          });
          if (!parentBox) {
            return null;
          }
          for (const box2 of boxes) {
            box2.x += parentBox.left;
            box2.y += parentBox.top;
          }
          await handle.#intersectBoundingBoxesWithFrame(boxes);
          frame = parentFrame;
        } catch (e_3) {
          env_3.error = e_3;
          env_3.hasError = true;
        } finally {
          __disposeResources9(env_3);
        }
      }
      const box = boxes.find((box2) => {
        return box2.width >= 1 && box2.height >= 1;
      });
      if (!box) {
        return null;
      }
      return {
        x: box.x,
        y: box.y,
        height: box.height,
        width: box.width
      };
    }
    async #intersectBoundingBoxesWithFrame(boxes) {
      const { documentWidth, documentHeight } = await this.frame.isolatedRealm().evaluate(() => {
        return {
          documentWidth: document.documentElement.clientWidth,
          documentHeight: document.documentElement.clientHeight
        };
      });
      for (const box of boxes) {
        intersectBoundingBox(box, documentWidth, documentHeight);
      }
    }
    /**
     * This method returns the bounding box of the element (relative to the main frame),
     * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
     * (example: `display: none`).
     */
    async boundingBox() {
      const box = await this.evaluate((element) => {
        if (!(element instanceof Element)) {
          return null;
        }
        if (element.getClientRects().length === 0) {
          return null;
        }
        const rect = element.getBoundingClientRect();
        return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
      });
      if (!box) {
        return null;
      }
      const offset = await this.#getTopLeftCornerOfFrame();
      if (!offset) {
        return null;
      }
      return {
        x: box.x + offset.x,
        y: box.y + offset.y,
        height: box.height,
        width: box.width
      };
    }
    /**
     * This method returns boxes of the element,
     * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
     * (example: `display: none`).
     *
     * @remarks
     *
     * Boxes are represented as an array of points;
     * Each Point is an object `{x, y}`. Box points are sorted clock-wise.
     */
    async boxModel() {
      const model = await this.evaluate((element) => {
        if (!(element instanceof Element)) {
          return null;
        }
        if (element.getClientRects().length === 0) {
          return null;
        }
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);
        const offsets = {
          padding: {
            left: parseInt(style.paddingLeft, 10),
            top: parseInt(style.paddingTop, 10),
            right: parseInt(style.paddingRight, 10),
            bottom: parseInt(style.paddingBottom, 10)
          },
          margin: {
            left: -parseInt(style.marginLeft, 10),
            top: -parseInt(style.marginTop, 10),
            right: -parseInt(style.marginRight, 10),
            bottom: -parseInt(style.marginBottom, 10)
          },
          border: {
            left: parseInt(style.borderLeft, 10),
            top: parseInt(style.borderTop, 10),
            right: parseInt(style.borderRight, 10),
            bottom: parseInt(style.borderBottom, 10)
          }
        };
        const border = [
          { x: rect.left, y: rect.top },
          { x: rect.left + rect.width, y: rect.top },
          { x: rect.left + rect.width, y: rect.top + rect.bottom },
          { x: rect.left, y: rect.top + rect.bottom }
        ];
        const padding = transformQuadWithOffsets(border, offsets.border);
        const content = transformQuadWithOffsets(padding, offsets.padding);
        const margin = transformQuadWithOffsets(border, offsets.margin);
        return {
          content,
          padding,
          border,
          margin,
          width: rect.width,
          height: rect.height
        };
        function transformQuadWithOffsets(quad, offsets2) {
          return [
            {
              x: quad[0].x + offsets2.left,
              y: quad[0].y + offsets2.top
            },
            {
              x: quad[1].x - offsets2.right,
              y: quad[1].y + offsets2.top
            },
            {
              x: quad[2].x - offsets2.right,
              y: quad[2].y - offsets2.bottom
            },
            {
              x: quad[3].x + offsets2.left,
              y: quad[3].y - offsets2.bottom
            }
          ];
        }
        __name(transformQuadWithOffsets, "transformQuadWithOffsets");
      });
      if (!model) {
        return null;
      }
      const offset = await this.#getTopLeftCornerOfFrame();
      if (!offset) {
        return null;
      }
      for (const attribute of [
        "content",
        "padding",
        "border",
        "margin"
      ]) {
        for (const point of model[attribute]) {
          point.x += offset.x;
          point.y += offset.y;
        }
      }
      return model;
    }
    async #getTopLeftCornerOfFrame() {
      const point = { x: 0, y: 0 };
      let frame = this.frame;
      let parentFrame;
      while (parentFrame = frame?.parentFrame()) {
        const env_4 = { stack: [], error: void 0, hasError: false };
        try {
          const handle = __addDisposableResource9(env_4, await frame.frameElement(), false);
          if (!handle) {
            throw new Error("Unsupported frame type");
          }
          const parentBox = await handle.evaluate((element) => {
            if (element.getClientRects().length === 0) {
              return null;
            }
            const rect = element.getBoundingClientRect();
            const style = window.getComputedStyle(element);
            return {
              left: rect.left + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10),
              top: rect.top + parseInt(style.paddingTop, 10) + parseInt(style.borderTopWidth, 10)
            };
          });
          if (!parentBox) {
            return null;
          }
          point.x += parentBox.left;
          point.y += parentBox.top;
          frame = parentFrame;
        } catch (e_4) {
          env_4.error = e_4;
          env_4.hasError = true;
        } finally {
          __disposeResources9(env_4);
        }
      }
      return point;
    }
    async screenshot(options = {}) {
      const { scrollIntoView = true, clip } = options;
      const page = this.frame.page();
      if (scrollIntoView) {
        await this.scrollIntoViewIfNeeded();
      }
      const elementClip = await this.#nonEmptyVisibleBoundingBox();
      const [pageLeft, pageTop] = await this.evaluate(() => {
        if (!window.visualViewport) {
          throw new Error("window.visualViewport is not supported.");
        }
        return [
          window.visualViewport.pageLeft,
          window.visualViewport.pageTop
        ];
      });
      elementClip.x += pageLeft;
      elementClip.y += pageTop;
      if (clip) {
        elementClip.x += clip.x;
        elementClip.y += clip.y;
        elementClip.height = clip.height;
        elementClip.width = clip.width;
      }
      return await page.screenshot({ ...options, clip: elementClip });
    }
    async #nonEmptyVisibleBoundingBox() {
      const box = await this.boundingBox();
      assert3(box, "Node is either not visible or not an HTMLElement");
      assert3(box.width !== 0, "Node has 0 width.");
      assert3(box.height !== 0, "Node has 0 height.");
      return box;
    }
    /**
     * @internal
     */
    async assertConnectedElement() {
      const error3 = await this.evaluate(async (element) => {
        if (!element.isConnected) {
          return "Node is detached from document";
        }
        if (element.nodeType !== Node.ELEMENT_NODE) {
          return "Node is not of type HTMLElement";
        }
        return;
      });
      if (error3) {
        throw new Error(error3);
      }
    }
    /**
     * @internal
     */
    async scrollIntoViewIfNeeded() {
      if (await this.isIntersectingViewport({
        threshold: 1
      })) {
        return;
      }
      await this.scrollIntoView();
    }
    /**
     * Resolves to true if the element is visible in the current viewport. If an
     * element is an SVG, we check if the svg owner element is in the viewport
     * instead. See https://crbug.com/963246.
     *
     * @param options - Threshold for the intersection between 0 (no intersection) and 1
     * (full intersection). Defaults to 1.
     */
    async isIntersectingViewport(options = {}) {
      const env_5 = { stack: [], error: void 0, hasError: false };
      try {
        await this.assertConnectedElement();
        const handle = await this.#asSVGElementHandle();
        const target = __addDisposableResource9(env_5, handle && await handle.#getOwnerSVGElement(), false);
        return await (target ?? this).evaluate(async (element, threshold) => {
          const visibleRatio = await new Promise((resolve) => {
            const observer = new IntersectionObserver((entries) => {
              resolve(entries[0].intersectionRatio);
              observer.disconnect();
            });
            observer.observe(element);
          });
          return threshold === 1 ? visibleRatio === 1 : visibleRatio > threshold;
        }, options.threshold ?? 0);
      } catch (e_5) {
        env_5.error = e_5;
        env_5.hasError = true;
      } finally {
        __disposeResources9(env_5);
      }
    }
    /**
     * Scrolls the element into view using either the automation protocol client
     * or by calling element.scrollIntoView.
     */
    async scrollIntoView() {
      await this.assertConnectedElement();
      await this.evaluate(async (element) => {
        element.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "instant"
        });
      });
    }
    /**
     * Returns true if an element is an SVGElement (included svg, path, rect
     * etc.).
     */
    async #asSVGElementHandle() {
      if (await this.evaluate((element) => {
        return element instanceof SVGElement;
      })) {
        return this;
      } else {
        return null;
      }
    }
    async #getOwnerSVGElement() {
      return await this.evaluateHandle((element) => {
        if (element instanceof SVGSVGElement) {
          return element;
        }
        return element.ownerSVGElement;
      });
    }
  }, "ElementHandle");
})();
function intersectBoundingBox(box, width, height) {
  box.width = Math.max(box.x >= 0 ? Math.min(width - box.x, box.width) : Math.min(width, box.width + box.x), 0);
  box.height = Math.max(box.y >= 0 ? Math.min(height - box.y, box.height) : Math.min(height, box.height + box.y), 0);
}
__name(intersectBoundingBox, "intersectBoundingBox");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/JSHandle.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/utils.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function createEvaluationError(details) {
  let name;
  let message;
  if (!details.exception) {
    name = "Error";
    message = details.text;
  } else if ((details.exception.type !== "object" || details.exception.subtype !== "error") && !details.exception.objectId) {
    return valueFromRemoteObject(details.exception);
  } else {
    const detail = getErrorDetails(details);
    name = detail.name;
    message = detail.message;
  }
  const messageHeight = message.split("\n").length;
  const error3 = new Error(message);
  error3.name = name;
  const stackLines = error3.stack.split("\n");
  const messageLines = stackLines.splice(0, messageHeight);
  stackLines.shift();
  if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
    for (const frame of details.stackTrace.callFrames.reverse()) {
      if (PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== PuppeteerURL.INTERNAL_URL) {
        const url = PuppeteerURL.parse(frame.url);
        stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
      } else {
        stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
      }
      if (stackLines.length >= Error.stackTraceLimit) {
        break;
      }
    }
  }
  error3.stack = [...messageLines, ...stackLines].join("\n");
  return error3;
}
__name(createEvaluationError, "createEvaluationError");
var getErrorDetails = /* @__PURE__ */ __name((details) => {
  let name = "";
  let message;
  const lines = details.exception?.description?.split("\n    at ") ?? [];
  const size = Math.min(details.stackTrace?.callFrames.length ?? 0, lines.length - 1);
  lines.splice(-size, size);
  if (details.exception?.className) {
    name = details.exception.className;
  }
  message = lines.join("\n");
  if (name && message.startsWith(`${name}: `)) {
    message = message.slice(name.length + 2);
  }
  return { message, name };
}, "getErrorDetails");
function createClientError(details) {
  let name;
  let message;
  if (!details.exception) {
    name = "Error";
    message = details.text;
  } else if ((details.exception.type !== "object" || details.exception.subtype !== "error") && !details.exception.objectId) {
    return valueFromRemoteObject(details.exception);
  } else {
    const detail = getErrorDetails(details);
    name = detail.name;
    message = detail.message;
  }
  const error3 = new Error(message);
  error3.name = name;
  const messageHeight = error3.message.split("\n").length;
  const messageLines = error3.stack.split("\n").splice(0, messageHeight);
  const stackLines = [];
  if (details.stackTrace) {
    for (const frame of details.stackTrace.callFrames) {
      stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
      if (stackLines.length >= Error.stackTraceLimit) {
        break;
      }
    }
  }
  error3.stack = [...messageLines, ...stackLines].join("\n");
  return error3;
}
__name(createClientError, "createClientError");
function valueFromRemoteObject(remoteObject) {
  assert3(!remoteObject.objectId, "Cannot extract value when objectId is given");
  if (remoteObject.unserializableValue) {
    if (remoteObject.type === "bigint") {
      return BigInt(remoteObject.unserializableValue.replace("n", ""));
    }
    switch (remoteObject.unserializableValue) {
      case "-0":
        return -0;
      case "NaN":
        return NaN;
      case "Infinity":
        return Infinity;
      case "-Infinity":
        return -Infinity;
      default:
        throw new Error("Unsupported unserializable value: " + remoteObject.unserializableValue);
    }
  }
  return remoteObject.value;
}
__name(valueFromRemoteObject, "valueFromRemoteObject");
function addPageBinding(type, name) {
  const callCdp = globalThis[name];
  if (callCdp[Symbol.toStringTag] === "PuppeteerBinding") {
    return;
  }
  Object.assign(globalThis, {
    [name](...args) {
      const callPuppeteer = globalThis[name];
      callPuppeteer.args ??= /* @__PURE__ */ new Map();
      callPuppeteer.callbacks ??= /* @__PURE__ */ new Map();
      const seq = (callPuppeteer.lastSeq ?? 0) + 1;
      callPuppeteer.lastSeq = seq;
      callPuppeteer.args.set(seq, args);
      callCdp(JSON.stringify({
        type,
        name,
        seq,
        args,
        isTrivial: !args.some((value) => {
          return value instanceof Node;
        })
      }));
      return new Promise((resolve, reject) => {
        callPuppeteer.callbacks.set(seq, {
          resolve(value) {
            callPuppeteer.args.delete(seq);
            resolve(value);
          },
          reject(value) {
            callPuppeteer.args.delete(seq);
            reject(value);
          }
        });
      });
    }
  });
  globalThis[name][Symbol.toStringTag] = "PuppeteerBinding";
}
__name(addPageBinding, "addPageBinding");
function pageBindingInitString(type, name) {
  return evaluationString(addPageBinding, type, name);
}
__name(pageBindingInitString, "pageBindingInitString");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/JSHandle.js
var CdpJSHandle = class extends JSHandle {
  #disposed = false;
  #remoteObject;
  #world;
  constructor(world, remoteObject) {
    super();
    this.#world = world;
    this.#remoteObject = remoteObject;
  }
  get disposed() {
    return this.#disposed;
  }
  get realm() {
    return this.#world;
  }
  get client() {
    return this.realm.environment.client;
  }
  async jsonValue() {
    if (!this.#remoteObject.objectId) {
      return valueFromRemoteObject(this.#remoteObject);
    }
    const value = await this.evaluate((object) => {
      return object;
    });
    if (value === void 0) {
      throw new Error("Could not serialize referenced object");
    }
    return value;
  }
  /**
   * Either `null` or the handle itself if the handle is an
   * instance of {@link ElementHandle}.
   */
  asElement() {
    return null;
  }
  async dispose() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    await releaseObject(this.client, this.#remoteObject);
  }
  toString() {
    if (!this.#remoteObject.objectId) {
      return "JSHandle:" + valueFromRemoteObject(this.#remoteObject);
    }
    const type = this.#remoteObject.subtype || this.#remoteObject.type;
    return "JSHandle@" + type;
  }
  get id() {
    return this.#remoteObject.objectId;
  }
  remoteObject() {
    return this.#remoteObject;
  }
};
__name(CdpJSHandle, "CdpJSHandle");
async function releaseObject(client, remoteObject) {
  if (!remoteObject.objectId) {
    return;
  }
  await client.send("Runtime.releaseObject", { objectId: remoteObject.objectId }).catch((error3) => {
    debugError(error3);
  });
}
__name(releaseObject, "releaseObject");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/ElementHandle.js
var __runInitializers6 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate6 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context3 = {};
    for (var p in contextIn)
      context3[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context3.access[p] = contextIn.access[p];
    context3.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context3);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var NON_ELEMENT_NODE_ROLES = /* @__PURE__ */ new Set(["StaticText", "InlineTextBox"]);
var CdpElementHandle = (() => {
  var _a, _b;
  let _classSuper = ElementHandle;
  let _instanceExtraInitializers = [];
  let _contentFrame_decorators;
  let _scrollIntoView_decorators;
  let _uploadFile_decorators;
  let _autofill_decorators;
  return /* @__PURE__ */ __name(class CdpElementHandle extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _contentFrame_decorators = [throwIfDisposed()];
      _scrollIntoView_decorators = [throwIfDisposed(), (_a = ElementHandle).bindIsolatedHandle.bind(_a)];
      _uploadFile_decorators = [throwIfDisposed(), (_b = ElementHandle).bindIsolatedHandle.bind(_b)];
      _autofill_decorators = [throwIfDisposed()];
      __esDecorate6(this, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: (obj) => "contentFrame" in obj, get: (obj) => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate6(this, null, _scrollIntoView_decorators, { kind: "method", name: "scrollIntoView", static: false, private: false, access: { has: (obj) => "scrollIntoView" in obj, get: (obj) => obj.scrollIntoView }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate6(this, null, _uploadFile_decorators, { kind: "method", name: "uploadFile", static: false, private: false, access: { has: (obj) => "uploadFile" in obj, get: (obj) => obj.uploadFile }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate6(this, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: (obj) => "autofill" in obj, get: (obj) => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    constructor(world, remoteObject) {
      super(new CdpJSHandle(world, remoteObject));
      __runInitializers6(this, _instanceExtraInitializers);
    }
    get realm() {
      return this.handle.realm;
    }
    get client() {
      return this.handle.client;
    }
    remoteObject() {
      return this.handle.remoteObject();
    }
    get #frameManager() {
      return this.frame._frameManager;
    }
    get frame() {
      return this.realm.environment;
    }
    async contentFrame() {
      const nodeInfo = await this.client.send("DOM.describeNode", {
        objectId: this.id
      });
      if (typeof nodeInfo.node.frameId !== "string") {
        return null;
      }
      return this.#frameManager.frame(nodeInfo.node.frameId);
    }
    async scrollIntoView() {
      await this.assertConnectedElement();
      try {
        await this.client.send("DOM.scrollIntoViewIfNeeded", {
          objectId: this.id
        });
      } catch (error3) {
        debugError(error3);
        await super.scrollIntoView();
      }
    }
    async uploadFile(...filePaths) {
      const isMultiple = await this.evaluate((element) => {
        return element.multiple;
      });
      assert3(filePaths.length <= 1 || isMultiple, "Multiple file uploads only work with <input type=file multiple>");
      let path;
      try {
        path = await import("path");
      } catch (error3) {
        if (error3 instanceof TypeError) {
          throw new Error(`JSHandle#uploadFile can only be used in Node-like environments.`);
        }
        throw error3;
      }
      const files = filePaths.map((filePath) => {
        if (path.win32.isAbsolute(filePath) || path.posix.isAbsolute(filePath)) {
          return filePath;
        } else {
          return path.resolve(filePath);
        }
      });
      if (files.length === 0) {
        await this.evaluate((element) => {
          element.files = new DataTransfer().files;
          element.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
          element.dispatchEvent(new Event("change", { bubbles: true }));
        });
        return;
      }
      const { node: { backendNodeId } } = await this.client.send("DOM.describeNode", {
        objectId: this.id
      });
      await this.client.send("DOM.setFileInputFiles", {
        objectId: this.id,
        files,
        backendNodeId
      });
    }
    async autofill(data) {
      const nodeInfo = await this.client.send("DOM.describeNode", {
        objectId: this.handle.id
      });
      const fieldId = nodeInfo.node.backendNodeId;
      const frameId = this.frame._id;
      await this.client.send("Autofill.trigger", {
        fieldId,
        frameId,
        card: data.creditCard
      });
    }
    async *queryAXTree(name, role) {
      const { nodes } = await this.client.send("Accessibility.queryAXTree", {
        objectId: this.id,
        accessibleName: name,
        role
      });
      const results = nodes.filter((node) => {
        if (node.ignored) {
          return false;
        }
        if (!node.role) {
          return false;
        }
        if (NON_ELEMENT_NODE_ROLES.has(node.role.value)) {
          return false;
        }
        return true;
      });
      return yield* AsyncIterableUtil.map(results, (node) => {
        return this.realm.adoptBackendNode(node.backendDOMNodeId);
      });
    }
  }, "CdpElementHandle");
})();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/ExecutionContext.js
var __addDisposableResource10 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources10 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
var ariaQuerySelectorBinding = new Binding("__ariaQuerySelector", ARIAQueryHandler.queryOne);
var ariaQuerySelectorAllBinding = new Binding("__ariaQuerySelectorAll", async (element, selector) => {
  const results = ARIAQueryHandler.queryAll(element, selector);
  return await element.realm.evaluateHandle((...elements) => {
    return elements;
  }, ...await AsyncIterableUtil.collect(results));
});
var ExecutionContext = class extends EventEmitter2 {
  #client;
  #world;
  #id;
  #name;
  #disposables = new DisposableStack();
  constructor(client, contextPayload, world) {
    super();
    this.#client = client;
    this.#world = world;
    this.#id = contextPayload.id;
    if (contextPayload.name) {
      this.#name = contextPayload.name;
    }
    const clientEmitter = this.#disposables.use(new EventEmitter2(this.#client));
    clientEmitter.on("Runtime.bindingCalled", this.#onBindingCalled.bind(this));
    clientEmitter.on("Runtime.executionContextDestroyed", async (event) => {
      if (event.executionContextId === this.#id) {
        this[disposeSymbol]();
      }
    });
    clientEmitter.on("Runtime.executionContextsCleared", async () => {
      this[disposeSymbol]();
    });
    clientEmitter.on("Runtime.consoleAPICalled", this.#onConsoleAPI.bind(this));
    clientEmitter.on(CDPSessionEvent.Disconnected, () => {
      this[disposeSymbol]();
    });
  }
  // Contains mapping from functions that should be bound to Puppeteer functions.
  #bindings = /* @__PURE__ */ new Map();
  // If multiple waitFor are set up asynchronously, we need to wait for the
  // first one to set up the binding in the page before running the others.
  #mutex = new Mutex();
  async #addBinding(binding2) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      if (this.#bindings.has(binding2.name)) {
        return;
      }
      const _ = __addDisposableResource10(env_1, await this.#mutex.acquire(), false);
      try {
        await this.#client.send("Runtime.addBinding", this.#name ? {
          name: binding2.name,
          executionContextName: this.#name
        } : {
          name: binding2.name,
          executionContextId: this.#id
        });
        await this.evaluate(addPageBinding, "internal", binding2.name);
        this.#bindings.set(binding2.name, binding2);
      } catch (error3) {
        if (error3 instanceof Error) {
          if (error3.message.includes("Execution context was destroyed")) {
            return;
          }
          if (error3.message.includes("Cannot find context with specified id")) {
            return;
          }
        }
        debugError(error3);
      }
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources10(env_1);
    }
  }
  async #onBindingCalled(event) {
    let payload;
    try {
      payload = JSON.parse(event.payload);
    } catch {
      return;
    }
    const { type, name, seq, args, isTrivial } = payload;
    if (type !== "internal") {
      this.emit("bindingcalled", event);
      return;
    }
    if (!this.#bindings.has(name)) {
      this.emit("bindingcalled", event);
      return;
    }
    try {
      if (event.executionContextId !== this.#id) {
        return;
      }
      const binding2 = this.#bindings.get(name);
      await binding2?.run(this, seq, args, isTrivial);
    } catch (err) {
      debugError(err);
    }
  }
  get id() {
    return this.#id;
  }
  #onConsoleAPI(event) {
    if (event.executionContextId !== this.#id) {
      return;
    }
    this.emit("consoleapicalled", event);
  }
  #bindingsInstalled = false;
  #puppeteerUtil;
  get puppeteerUtil() {
    let promise = Promise.resolve();
    if (!this.#bindingsInstalled) {
      promise = Promise.all([
        this.#addBindingWithoutThrowing(ariaQuerySelectorBinding),
        this.#addBindingWithoutThrowing(ariaQuerySelectorAllBinding)
      ]);
      this.#bindingsInstalled = true;
    }
    scriptInjector.inject((script) => {
      if (this.#puppeteerUtil) {
        void this.#puppeteerUtil.then((handle) => {
          void handle.dispose();
        });
      }
      this.#puppeteerUtil = promise.then(() => {
        return this.evaluateHandle(script);
      });
    }, !this.#puppeteerUtil);
    return this.#puppeteerUtil;
  }
  async #addBindingWithoutThrowing(binding2) {
    try {
      await this.#addBinding(binding2);
    } catch (err) {
      debugError(err);
    }
  }
  /**
   * Evaluates the given function.
   *
   * @example
   *
   * ```ts
   * const executionContext = await page.mainFrame().executionContext();
   * const result = await executionContext.evaluate(() => Promise.resolve(8 * 7))* ;
   * console.log(result); // prints "56"
   * ```
   *
   * @example
   * A string can also be passed in instead of a function:
   *
   * ```ts
   * console.log(await executionContext.evaluate('1 + 2')); // prints "3"
   * ```
   *
   * @example
   * Handles can also be passed as `args`. They resolve to their referenced object:
   *
   * ```ts
   * const oneHandle = await executionContext.evaluateHandle(() => 1);
   * const twoHandle = await executionContext.evaluateHandle(() => 2);
   * const result = await executionContext.evaluate(
   *   (a, b) => a + b,
   *   oneHandle,
   *   twoHandle
   * );
   * await oneHandle.dispose();
   * await twoHandle.dispose();
   * console.log(result); // prints '3'.
   * ```
   *
   * @param pageFunction - The function to evaluate.
   * @param args - Additional arguments to pass into the function.
   * @returns The result of evaluating the function. If the result is an object,
   * a vanilla object containing the serializable properties of the result is
   * returned.
   */
  async evaluate(pageFunction, ...args) {
    return await this.#evaluate(true, pageFunction, ...args);
  }
  /**
   * Evaluates the given function.
   *
   * Unlike {@link ExecutionContext.evaluate | evaluate}, this method returns a
   * handle to the result of the function.
   *
   * This method may be better suited if the object cannot be serialized (e.g.
   * `Map`) and requires further manipulation.
   *
   * @example
   *
   * ```ts
   * const context = await page.mainFrame().executionContext();
   * const handle: JSHandle<typeof globalThis> = await context.evaluateHandle(
   *   () => Promise.resolve(self)
   * );
   * ```
   *
   * @example
   * A string can also be passed in instead of a function.
   *
   * ```ts
   * const handle: JSHandle<number> = await context.evaluateHandle('1 + 2');
   * ```
   *
   * @example
   * Handles can also be passed as `args`. They resolve to their referenced object:
   *
   * ```ts
   * const bodyHandle: ElementHandle<HTMLBodyElement> =
   *   await context.evaluateHandle(() => {
   *     return document.body;
   *   });
   * const stringHandle: JSHandle<string> = await context.evaluateHandle(
   *   body => body.innerHTML,
   *   body
   * );
   * console.log(await stringHandle.jsonValue()); // prints body's innerHTML
   * // Always dispose your garbage! :)
   * await bodyHandle.dispose();
   * await stringHandle.dispose();
   * ```
   *
   * @param pageFunction - The function to evaluate.
   * @param args - Additional arguments to pass into the function.
   * @returns A {@link JSHandle | handle} to the result of evaluating the
   * function. If the result is a `Node`, then this will return an
   * {@link ElementHandle | element handle}.
   */
  async evaluateHandle(pageFunction, ...args) {
    return await this.#evaluate(false, pageFunction, ...args);
  }
  async #evaluate(returnByValue, pageFunction, ...args) {
    const sourceUrlComment = getSourceUrlComment(getSourcePuppeteerURLIfAvailable(pageFunction)?.toString() ?? PuppeteerURL.INTERNAL_URL);
    if (isString(pageFunction)) {
      const contextId = this.#id;
      const expression = pageFunction;
      const expressionWithSourceUrl = SOURCE_URL_REGEX.test(expression) ? expression : `${expression}
${sourceUrlComment}
`;
      const { exceptionDetails: exceptionDetails2, result: remoteObject2 } = await this.#client.send("Runtime.evaluate", {
        expression: expressionWithSourceUrl,
        contextId,
        returnByValue,
        awaitPromise: true,
        userGesture: true
      }).catch(rewriteError2);
      if (exceptionDetails2) {
        throw createEvaluationError(exceptionDetails2);
      }
      return returnByValue ? valueFromRemoteObject(remoteObject2) : this.#world.createCdpHandle(remoteObject2);
    }
    const functionDeclaration = stringifyFunction(pageFunction);
    const functionDeclarationWithSourceUrl = SOURCE_URL_REGEX.test(functionDeclaration) ? functionDeclaration : `${functionDeclaration}
${sourceUrlComment}
`;
    let callFunctionOnPromise;
    try {
      callFunctionOnPromise = this.#client.send("Runtime.callFunctionOn", {
        functionDeclaration: functionDeclarationWithSourceUrl,
        executionContextId: this.#id,
        arguments: args.length ? await Promise.all(args.map(convertArgument.bind(this))) : [],
        returnByValue,
        awaitPromise: true,
        userGesture: true
      });
    } catch (error3) {
      if (error3 instanceof TypeError && error3.message.startsWith("Converting circular structure to JSON")) {
        error3.message += " Recursive objects are not allowed.";
      }
      throw error3;
    }
    const { exceptionDetails, result: remoteObject } = await callFunctionOnPromise.catch(rewriteError2);
    if (exceptionDetails) {
      throw createEvaluationError(exceptionDetails);
    }
    return returnByValue ? valueFromRemoteObject(remoteObject) : this.#world.createCdpHandle(remoteObject);
    async function convertArgument(arg) {
      if (arg instanceof LazyArg) {
        arg = await arg.get(this);
      }
      if (typeof arg === "bigint") {
        return { unserializableValue: `${arg.toString()}n` };
      }
      if (Object.is(arg, -0)) {
        return { unserializableValue: "-0" };
      }
      if (Object.is(arg, Infinity)) {
        return { unserializableValue: "Infinity" };
      }
      if (Object.is(arg, -Infinity)) {
        return { unserializableValue: "-Infinity" };
      }
      if (Object.is(arg, NaN)) {
        return { unserializableValue: "NaN" };
      }
      const objectHandle = arg && (arg instanceof CdpJSHandle || arg instanceof CdpElementHandle) ? arg : null;
      if (objectHandle) {
        if (objectHandle.realm !== this.#world) {
          throw new Error("JSHandles can be evaluated only in the context they were created!");
        }
        if (objectHandle.disposed) {
          throw new Error("JSHandle is disposed!");
        }
        if (objectHandle.remoteObject().unserializableValue) {
          return {
            unserializableValue: objectHandle.remoteObject().unserializableValue
          };
        }
        if (!objectHandle.remoteObject().objectId) {
          return { value: objectHandle.remoteObject().value };
        }
        return { objectId: objectHandle.remoteObject().objectId };
      }
      return { value: arg };
    }
    __name(convertArgument, "convertArgument");
  }
  [disposeSymbol]() {
    this.#disposables.dispose();
    this.emit("disposed", void 0);
  }
};
__name(ExecutionContext, "ExecutionContext");
var rewriteError2 = /* @__PURE__ */ __name((error3) => {
  if (error3.message.includes("Object reference chain is too long")) {
    return { result: { type: "undefined" } };
  }
  if (error3.message.includes("Object couldn't be returned by value")) {
    return { result: { type: "undefined" } };
  }
  if (error3.message.endsWith("Cannot find context with specified id") || error3.message.endsWith("Inspected target navigated or closed")) {
    throw new Error("Execution context was destroyed, most likely because of a navigation.");
  }
  throw error3;
}, "rewriteError");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Frame.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/FrameManagerEvents.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FrameManagerEvent;
(function(FrameManagerEvent2) {
  FrameManagerEvent2.FrameAttached = Symbol("FrameManager.FrameAttached");
  FrameManagerEvent2.FrameNavigated = Symbol("FrameManager.FrameNavigated");
  FrameManagerEvent2.FrameDetached = Symbol("FrameManager.FrameDetached");
  FrameManagerEvent2.FrameSwapped = Symbol("FrameManager.FrameSwapped");
  FrameManagerEvent2.LifecycleEvent = Symbol("FrameManager.LifecycleEvent");
  FrameManagerEvent2.FrameNavigatedWithinDocument = Symbol("FrameManager.FrameNavigatedWithinDocument");
  FrameManagerEvent2.ConsoleApiCalled = Symbol("FrameManager.ConsoleApiCalled");
  FrameManagerEvent2.BindingCalled = Symbol("FrameManager.BindingCalled");
})(FrameManagerEvent || (FrameManagerEvent = {}));

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/IsolatedWorld.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Realm.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/WaitTask.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var WaitTask = class {
  #world;
  #polling;
  #root;
  #fn;
  #args;
  #timeout;
  #timeoutError;
  #result = Deferred.create();
  #poller;
  #signal;
  #reruns = [];
  constructor(world, options, fn, ...args) {
    this.#world = world;
    this.#polling = options.polling;
    this.#root = options.root;
    this.#signal = options.signal;
    this.#signal?.addEventListener("abort", () => {
      void this.terminate(this.#signal?.reason);
    }, {
      once: true
    });
    switch (typeof fn) {
      case "string":
        this.#fn = `() => {return (${fn});}`;
        break;
      default:
        this.#fn = stringifyFunction(fn);
        break;
    }
    this.#args = args;
    this.#world.taskManager.add(this);
    if (options.timeout) {
      this.#timeoutError = new TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`);
      this.#timeout = setTimeout(() => {
        void this.terminate(this.#timeoutError);
      }, options.timeout);
    }
    void this.rerun();
  }
  get result() {
    return this.#result.valueOrThrow();
  }
  async rerun() {
    for (const prev of this.#reruns) {
      prev.abort();
    }
    this.#reruns.length = 0;
    const controller = new AbortController();
    this.#reruns.push(controller);
    try {
      switch (this.#polling) {
        case "raf":
          this.#poller = await this.#world.evaluateHandle(({ RAFPoller, createFunction: createFunction2 }, fn, ...args) => {
            const fun = createFunction2(fn);
            return new RAFPoller(() => {
              return fun(...args);
            });
          }, LazyArg.create((context3) => {
            return context3.puppeteerUtil;
          }), this.#fn, ...this.#args);
          break;
        case "mutation":
          this.#poller = await this.#world.evaluateHandle(({ MutationPoller, createFunction: createFunction2 }, root, fn, ...args) => {
            const fun = createFunction2(fn);
            return new MutationPoller(() => {
              return fun(...args);
            }, root || document);
          }, LazyArg.create((context3) => {
            return context3.puppeteerUtil;
          }), this.#root, this.#fn, ...this.#args);
          break;
        default:
          this.#poller = await this.#world.evaluateHandle(({ IntervalPoller, createFunction: createFunction2 }, ms, fn, ...args) => {
            const fun = createFunction2(fn);
            return new IntervalPoller(() => {
              return fun(...args);
            }, ms);
          }, LazyArg.create((context3) => {
            return context3.puppeteerUtil;
          }), this.#polling, this.#fn, ...this.#args);
          break;
      }
      await this.#poller.evaluate((poller) => {
        void poller.start();
      });
      const result = await this.#poller.evaluateHandle((poller) => {
        return poller.result();
      });
      this.#result.resolve(result);
      await this.terminate();
    } catch (error3) {
      if (controller.signal.aborted) {
        return;
      }
      const badError = this.getBadError(error3);
      if (badError) {
        await this.terminate(badError);
      }
    }
  }
  async terminate(error3) {
    this.#world.taskManager.delete(this);
    clearTimeout(this.#timeout);
    if (error3 && !this.#result.finished()) {
      this.#result.reject(error3);
    }
    if (this.#poller) {
      try {
        await this.#poller.evaluateHandle(async (poller) => {
          await poller.stop();
        });
        if (this.#poller) {
          await this.#poller.dispose();
          this.#poller = void 0;
        }
      } catch {
      }
    }
  }
  /**
   * Not all errors lead to termination. They usually imply we need to rerun the task.
   */
  getBadError(error3) {
    if (isErrorLike(error3)) {
      if (error3.message.includes("Execution context is not available in detached frame")) {
        return new Error("Waiting failed: Frame detached");
      }
      if (error3.message.includes("Execution context was destroyed")) {
        return;
      }
      if (error3.message.includes("Cannot find context with specified id")) {
        return;
      }
      if (error3.message.includes("AbortError: Actor 'MessageHandlerFrame' destroyed")) {
        return;
      }
      return error3;
    }
    return new Error("WaitTask failed with an error", {
      cause: error3
    });
  }
};
__name(WaitTask, "WaitTask");
var TaskManager = class {
  #tasks = /* @__PURE__ */ new Set();
  add(task) {
    this.#tasks.add(task);
  }
  delete(task) {
    this.#tasks.delete(task);
  }
  terminateAll(error3) {
    for (const task of this.#tasks) {
      void task.terminate(error3);
    }
    this.#tasks.clear();
  }
  async rerunAll() {
    await Promise.all([...this.#tasks].map((task) => {
      return task.rerun();
    }));
  }
};
__name(TaskManager, "TaskManager");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Realm.js
var Realm = class {
  timeoutSettings;
  taskManager = new TaskManager();
  constructor(timeoutSettings) {
    this.timeoutSettings = timeoutSettings;
  }
  async waitForFunction(pageFunction, options = {}, ...args) {
    const { polling = "raf", timeout: timeout2 = this.timeoutSettings.timeout(), root, signal } = options;
    if (typeof polling === "number" && polling < 0) {
      throw new Error("Cannot poll with non-positive interval");
    }
    const waitTask = new WaitTask(this, {
      polling,
      root,
      timeout: timeout2,
      signal
    }, pageFunction, ...args);
    return await waitTask.result;
  }
  get disposed() {
    return this.#disposed;
  }
  #disposed = false;
  /** @internal */
  dispose() {
    this.#disposed = true;
    this.taskManager.terminateAll(new Error("waitForFunction failed: frame got detached."));
  }
  /** @internal */
  [disposeSymbol]() {
    this.dispose();
  }
};
__name(Realm, "Realm");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/IsolatedWorld.js
var IsolatedWorld = class extends Realm {
  #context;
  #emitter = new EventEmitter2();
  #frameOrWorker;
  constructor(frameOrWorker, timeoutSettings) {
    super(timeoutSettings);
    this.#frameOrWorker = frameOrWorker;
  }
  get environment() {
    return this.#frameOrWorker;
  }
  get client() {
    return this.#frameOrWorker.client;
  }
  get emitter() {
    return this.#emitter;
  }
  setContext(context3) {
    this.#context?.[disposeSymbol]();
    context3.once("disposed", this.#onContextDisposed.bind(this));
    context3.on("consoleapicalled", this.#onContextConsoleApiCalled.bind(this));
    context3.on("bindingcalled", this.#onContextBindingCalled.bind(this));
    this.#context = context3;
    this.#emitter.emit("context", context3);
    void this.taskManager.rerunAll();
  }
  #onContextDisposed() {
    this.#context = void 0;
    if ("clearDocumentHandle" in this.#frameOrWorker) {
      this.#frameOrWorker.clearDocumentHandle();
    }
  }
  #onContextConsoleApiCalled(event) {
    this.#emitter.emit("consoleapicalled", event);
  }
  #onContextBindingCalled(event) {
    this.#emitter.emit("bindingcalled", event);
  }
  hasContext() {
    return !!this.#context;
  }
  get context() {
    return this.#context;
  }
  #executionContext() {
    if (this.disposed) {
      throw new Error(`Execution context is not available in detached frame or worker "${this.environment.url()}" (are you trying to evaluate?)`);
    }
    return this.#context;
  }
  /**
   * Waits for the next context to be set on the isolated world.
   */
  async #waitForExecutionContext() {
    const result = await firstValueFrom(fromEmitterEvent(this.#emitter, "context").pipe(raceWith(fromEmitterEvent(this.#emitter, "disposed").pipe(map(() => {
      throw new Error("Execution context was destroyed");
    })))));
    return result;
  }
  async evaluateHandle(pageFunction, ...args) {
    pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
    let context3 = this.#executionContext();
    if (!context3) {
      context3 = await this.#waitForExecutionContext();
    }
    return await context3.evaluateHandle(pageFunction, ...args);
  }
  async evaluate(pageFunction, ...args) {
    pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
    let context3 = this.#executionContext();
    if (!context3) {
      context3 = await this.#waitForExecutionContext();
    }
    return await context3.evaluate(pageFunction, ...args);
  }
  async adoptBackendNode(backendNodeId) {
    let context3 = this.#executionContext();
    if (!context3) {
      context3 = await this.#waitForExecutionContext();
    }
    const { object } = await this.client.send("DOM.resolveNode", {
      backendNodeId,
      executionContextId: context3.id
    });
    return this.createCdpHandle(object);
  }
  async adoptHandle(handle) {
    if (handle.realm === this) {
      return await handle.evaluateHandle((value) => {
        return value;
      });
    }
    const nodeInfo = await this.client.send("DOM.describeNode", {
      objectId: handle.id
    });
    return await this.adoptBackendNode(nodeInfo.node.backendNodeId);
  }
  async transferHandle(handle) {
    if (handle.realm === this) {
      return handle;
    }
    if (handle.remoteObject().objectId === void 0) {
      return handle;
    }
    const info3 = await this.client.send("DOM.describeNode", {
      objectId: handle.remoteObject().objectId
    });
    const newHandle = await this.adoptBackendNode(info3.node.backendNodeId);
    await handle.dispose();
    return newHandle;
  }
  /**
   * @internal
   */
  createCdpHandle(remoteObject) {
    if (remoteObject.subtype === "node") {
      return new CdpElementHandle(this, remoteObject);
    }
    return new CdpJSHandle(this, remoteObject);
  }
  [disposeSymbol]() {
    this.#context?.[disposeSymbol]();
    this.#emitter.emit("disposed", void 0);
    super[disposeSymbol]();
    this.#emitter.removeAllListeners();
  }
};
__name(IsolatedWorld, "IsolatedWorld");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/IsolatedWorlds.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var MAIN_WORLD = Symbol("mainWorld");
var PUPPETEER_WORLD = Symbol("puppeteerWorld");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/LifecycleWatcher.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var puppeteerToProtocolLifecycle = /* @__PURE__ */ new Map([
  ["load", "load"],
  ["domcontentloaded", "DOMContentLoaded"],
  ["networkidle0", "networkIdle"],
  ["networkidle2", "networkAlmostIdle"]
]);
var LifecycleWatcher = class {
  #expectedLifecycle;
  #frame;
  #timeout;
  #navigationRequest = null;
  #subscriptions = new DisposableStack();
  #initialLoaderId;
  #terminationDeferred;
  #sameDocumentNavigationDeferred = Deferred.create();
  #lifecycleDeferred = Deferred.create();
  #newDocumentNavigationDeferred = Deferred.create();
  #hasSameDocumentNavigation;
  #swapped;
  #navigationResponseReceived;
  constructor(networkManager, frame, waitUntil, timeout2) {
    if (Array.isArray(waitUntil)) {
      waitUntil = waitUntil.slice();
    } else if (typeof waitUntil === "string") {
      waitUntil = [waitUntil];
    }
    this.#initialLoaderId = frame._loaderId;
    this.#expectedLifecycle = waitUntil.map((value) => {
      const protocolEvent = puppeteerToProtocolLifecycle.get(value);
      assert3(protocolEvent, "Unknown value for options.waitUntil: " + value);
      return protocolEvent;
    });
    this.#frame = frame;
    this.#timeout = timeout2;
    const frameManagerEmitter = this.#subscriptions.use(new EventEmitter2(frame._frameManager));
    frameManagerEmitter.on(FrameManagerEvent.LifecycleEvent, this.#checkLifecycleComplete.bind(this));
    const frameEmitter = this.#subscriptions.use(new EventEmitter2(frame));
    frameEmitter.on(FrameEvent.FrameNavigatedWithinDocument, this.#navigatedWithinDocument.bind(this));
    frameEmitter.on(FrameEvent.FrameNavigated, this.#navigated.bind(this));
    frameEmitter.on(FrameEvent.FrameSwapped, this.#frameSwapped.bind(this));
    frameEmitter.on(FrameEvent.FrameSwappedByActivation, this.#frameSwapped.bind(this));
    frameEmitter.on(FrameEvent.FrameDetached, this.#onFrameDetached.bind(this));
    const networkManagerEmitter = this.#subscriptions.use(new EventEmitter2(networkManager));
    networkManagerEmitter.on(NetworkManagerEvent.Request, this.#onRequest.bind(this));
    networkManagerEmitter.on(NetworkManagerEvent.Response, this.#onResponse.bind(this));
    networkManagerEmitter.on(NetworkManagerEvent.RequestFailed, this.#onRequestFailed.bind(this));
    this.#terminationDeferred = Deferred.create({
      timeout: this.#timeout,
      message: `Navigation timeout of ${this.#timeout} ms exceeded`
    });
    this.#checkLifecycleComplete();
  }
  #onRequest(request) {
    if (request.frame() !== this.#frame || !request.isNavigationRequest()) {
      return;
    }
    this.#navigationRequest = request;
    this.#navigationResponseReceived?.resolve();
    this.#navigationResponseReceived = Deferred.create();
    if (request.response() !== null) {
      this.#navigationResponseReceived?.resolve();
    }
  }
  #onRequestFailed(request) {
    if (this.#navigationRequest?.id !== request.id) {
      return;
    }
    this.#navigationResponseReceived?.resolve();
  }
  #onResponse(response) {
    if (this.#navigationRequest?.id !== response.request().id) {
      return;
    }
    this.#navigationResponseReceived?.resolve();
  }
  #onFrameDetached(frame) {
    if (this.#frame === frame) {
      this.#terminationDeferred.resolve(new Error("Navigating frame was detached"));
      return;
    }
    this.#checkLifecycleComplete();
  }
  async navigationResponse() {
    await this.#navigationResponseReceived?.valueOrThrow();
    return this.#navigationRequest ? this.#navigationRequest.response() : null;
  }
  sameDocumentNavigationPromise() {
    return this.#sameDocumentNavigationDeferred.valueOrThrow();
  }
  newDocumentNavigationPromise() {
    return this.#newDocumentNavigationDeferred.valueOrThrow();
  }
  lifecyclePromise() {
    return this.#lifecycleDeferred.valueOrThrow();
  }
  terminationPromise() {
    return this.#terminationDeferred.valueOrThrow();
  }
  #navigatedWithinDocument() {
    this.#hasSameDocumentNavigation = true;
    this.#checkLifecycleComplete();
  }
  #navigated(navigationType) {
    if (navigationType === "BackForwardCacheRestore") {
      return this.#frameSwapped();
    }
    this.#checkLifecycleComplete();
  }
  #frameSwapped() {
    this.#swapped = true;
    this.#checkLifecycleComplete();
  }
  #checkLifecycleComplete() {
    if (!checkLifecycle(this.#frame, this.#expectedLifecycle)) {
      return;
    }
    this.#lifecycleDeferred.resolve();
    if (this.#hasSameDocumentNavigation) {
      this.#sameDocumentNavigationDeferred.resolve(void 0);
    }
    if (this.#swapped || this.#frame._loaderId !== this.#initialLoaderId) {
      this.#newDocumentNavigationDeferred.resolve(void 0);
    }
    function checkLifecycle(frame, expectedLifecycle) {
      for (const event of expectedLifecycle) {
        if (!frame._lifecycleEvents.has(event)) {
          return false;
        }
      }
      for (const child of frame.childFrames()) {
        if (child._hasStartedLoading && !checkLifecycle(child, expectedLifecycle)) {
          return false;
        }
      }
      return true;
    }
    __name(checkLifecycle, "checkLifecycle");
  }
  dispose() {
    this.#subscriptions.dispose();
    this.#terminationDeferred.resolve(new Error("LifecycleWatcher disposed"));
  }
};
__name(LifecycleWatcher, "LifecycleWatcher");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Frame.js
var __runInitializers7 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate7 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context3 = {};
    for (var p in contextIn)
      context3[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context3.access[p] = contextIn.access[p];
    context3.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context3);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var CdpFrame = (() => {
  let _classSuper = Frame;
  let _instanceExtraInitializers = [];
  let _goto_decorators;
  let _waitForNavigation_decorators;
  let _setContent_decorators;
  let _waitForDevicePrompt_decorators;
  return /* @__PURE__ */ __name(class CdpFrame extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate7(this, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: (obj) => "goto" in obj, get: (obj) => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate7(this, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: (obj) => "waitForNavigation" in obj, get: (obj) => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate7(this, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: (obj) => "setContent" in obj, get: (obj) => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate7(this, null, _waitForDevicePrompt_decorators, { kind: "method", name: "waitForDevicePrompt", static: false, private: false, access: { has: (obj) => "waitForDevicePrompt" in obj, get: (obj) => obj.waitForDevicePrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    #url = (__runInitializers7(this, _instanceExtraInitializers), "");
    #detached = false;
    #client;
    _frameManager;
    _loaderId = "";
    _lifecycleEvents = /* @__PURE__ */ new Set();
    _id;
    _parentId;
    worlds;
    constructor(frameManager, frameId, parentFrameId, client) {
      super();
      this._frameManager = frameManager;
      this.#url = "";
      this._id = frameId;
      this._parentId = parentFrameId;
      this.#detached = false;
      this.#client = client;
      this._loaderId = "";
      this.worlds = {
        [MAIN_WORLD]: new IsolatedWorld(this, this._frameManager.timeoutSettings),
        [PUPPETEER_WORLD]: new IsolatedWorld(this, this._frameManager.timeoutSettings)
      };
      this.on(FrameEvent.FrameSwappedByActivation, () => {
        this._onLoadingStarted();
        this._onLoadingStopped();
      });
      this.worlds[MAIN_WORLD].emitter.on("consoleapicalled", this.#onMainWorldConsoleApiCalled.bind(this));
      this.worlds[MAIN_WORLD].emitter.on("bindingcalled", this.#onMainWorldBindingCalled.bind(this));
    }
    #onMainWorldConsoleApiCalled(event) {
      this._frameManager.emit(FrameManagerEvent.ConsoleApiCalled, [
        this.worlds[MAIN_WORLD],
        event
      ]);
    }
    #onMainWorldBindingCalled(event) {
      this._frameManager.emit(FrameManagerEvent.BindingCalled, [
        this.worlds[MAIN_WORLD],
        event
      ]);
    }
    /**
     * This is used internally in DevTools.
     *
     * @internal
     */
    _client() {
      return this.#client;
    }
    /**
     * Updates the frame ID with the new ID. This happens when the main frame is
     * replaced by a different frame.
     */
    updateId(id) {
      this._id = id;
    }
    updateClient(client) {
      this.#client = client;
    }
    page() {
      return this._frameManager.page();
    }
    isOOPFrame() {
      return this.#client !== this._frameManager.client;
    }
    async goto(url, options = {}) {
      const { referer = this._frameManager.networkManager.extraHTTPHeaders()["referer"], referrerPolicy = this._frameManager.networkManager.extraHTTPHeaders()["referer-policy"], waitUntil = ["load"], timeout: timeout2 = this._frameManager.timeoutSettings.navigationTimeout() } = options;
      let ensureNewDocumentNavigation = false;
      const watcher = new LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout2);
      let error3 = await Deferred.race([
        navigate(this.#client, url, referer, referrerPolicy, this._id),
        watcher.terminationPromise()
      ]);
      if (!error3) {
        error3 = await Deferred.race([
          watcher.terminationPromise(),
          ensureNewDocumentNavigation ? watcher.newDocumentNavigationPromise() : watcher.sameDocumentNavigationPromise()
        ]);
      }
      try {
        if (error3) {
          throw error3;
        }
        return await watcher.navigationResponse();
      } finally {
        watcher.dispose();
      }
      async function navigate(client, url2, referrer, referrerPolicy2, frameId) {
        try {
          const response = await client.send("Page.navigate", {
            url: url2,
            referrer,
            frameId,
            referrerPolicy: referrerPolicy2
          });
          ensureNewDocumentNavigation = !!response.loaderId;
          if (response.errorText === "net::ERR_HTTP_RESPONSE_CODE_FAILURE") {
            return null;
          }
          return response.errorText ? new Error(`${response.errorText} at ${url2}`) : null;
        } catch (error4) {
          if (isErrorLike(error4)) {
            return error4;
          }
          throw error4;
        }
      }
      __name(navigate, "navigate");
    }
    async waitForNavigation(options = {}) {
      const { waitUntil = ["load"], timeout: timeout2 = this._frameManager.timeoutSettings.navigationTimeout() } = options;
      const watcher = new LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout2);
      const error3 = await Deferred.race([
        watcher.terminationPromise(),
        ...options.ignoreSameDocumentNavigation ? [] : [watcher.sameDocumentNavigationPromise()],
        watcher.newDocumentNavigationPromise()
      ]);
      try {
        if (error3) {
          throw error3;
        }
        const result = await Deferred.race([watcher.terminationPromise(), watcher.navigationResponse()]);
        if (result instanceof Error) {
          throw error3;
        }
        return result || null;
      } finally {
        watcher.dispose();
      }
    }
    get client() {
      return this.#client;
    }
    mainRealm() {
      return this.worlds[MAIN_WORLD];
    }
    isolatedRealm() {
      return this.worlds[PUPPETEER_WORLD];
    }
    async setContent(html, options = {}) {
      const { waitUntil = ["load"], timeout: timeout2 = this._frameManager.timeoutSettings.navigationTimeout() } = options;
      await this.setFrameContent(html);
      const watcher = new LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout2);
      const error3 = await Deferred.race([
        watcher.terminationPromise(),
        watcher.lifecyclePromise()
      ]);
      watcher.dispose();
      if (error3) {
        throw error3;
      }
    }
    url() {
      return this.#url;
    }
    parentFrame() {
      return this._frameManager._frameTree.parentFrame(this._id) || null;
    }
    childFrames() {
      return this._frameManager._frameTree.childFrames(this._id);
    }
    #deviceRequestPromptManager() {
      const rootFrame = this.page().mainFrame();
      if (this.isOOPFrame() || rootFrame === null) {
        return this._frameManager._deviceRequestPromptManager(this.#client);
      } else {
        return rootFrame._frameManager._deviceRequestPromptManager(this.#client);
      }
    }
    async waitForDevicePrompt(options = {}) {
      return await this.#deviceRequestPromptManager().waitForDevicePrompt(options);
    }
    _navigated(framePayload) {
      this._name = framePayload.name;
      this.#url = `${framePayload.url}${framePayload.urlFragment || ""}`;
    }
    _navigatedWithinDocument(url) {
      this.#url = url;
    }
    _onLifecycleEvent(loaderId, name) {
      if (name === "init") {
        this._loaderId = loaderId;
        this._lifecycleEvents.clear();
      }
      this._lifecycleEvents.add(name);
    }
    _onLoadingStopped() {
      this._lifecycleEvents.add("DOMContentLoaded");
      this._lifecycleEvents.add("load");
    }
    _onLoadingStarted() {
      this._hasStartedLoading = true;
    }
    get detached() {
      return this.#detached;
    }
    [(_goto_decorators = [throwIfDetached], _waitForNavigation_decorators = [throwIfDetached], _setContent_decorators = [throwIfDetached], _waitForDevicePrompt_decorators = [throwIfDetached], disposeSymbol)]() {
      if (this.#detached) {
        return;
      }
      this.#detached = true;
      this.worlds[MAIN_WORLD][disposeSymbol]();
      this.worlds[PUPPETEER_WORLD][disposeSymbol]();
    }
    exposeFunction() {
      throw new UnsupportedOperation();
    }
  }, "CdpFrame");
})();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/FrameTree.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FrameTree = class {
  #frames = /* @__PURE__ */ new Map();
  // frameID -> parentFrameID
  #parentIds = /* @__PURE__ */ new Map();
  // frameID -> childFrameIDs
  #childIds = /* @__PURE__ */ new Map();
  #mainFrame;
  #isMainFrameStale = false;
  #waitRequests = /* @__PURE__ */ new Map();
  getMainFrame() {
    return this.#mainFrame;
  }
  getById(frameId) {
    return this.#frames.get(frameId);
  }
  /**
   * Returns a promise that is resolved once the frame with
   * the given ID is added to the tree.
   */
  waitForFrame(frameId) {
    const frame = this.getById(frameId);
    if (frame) {
      return Promise.resolve(frame);
    }
    const deferred = Deferred.create();
    const callbacks = this.#waitRequests.get(frameId) || /* @__PURE__ */ new Set();
    callbacks.add(deferred);
    return deferred.valueOrThrow();
  }
  frames() {
    return Array.from(this.#frames.values());
  }
  addFrame(frame) {
    this.#frames.set(frame._id, frame);
    if (frame._parentId) {
      this.#parentIds.set(frame._id, frame._parentId);
      if (!this.#childIds.has(frame._parentId)) {
        this.#childIds.set(frame._parentId, /* @__PURE__ */ new Set());
      }
      this.#childIds.get(frame._parentId).add(frame._id);
    } else if (!this.#mainFrame || this.#isMainFrameStale) {
      this.#mainFrame = frame;
      this.#isMainFrameStale = false;
    }
    this.#waitRequests.get(frame._id)?.forEach((request) => {
      return request.resolve(frame);
    });
  }
  removeFrame(frame) {
    this.#frames.delete(frame._id);
    this.#parentIds.delete(frame._id);
    if (frame._parentId) {
      this.#childIds.get(frame._parentId)?.delete(frame._id);
    } else {
      this.#isMainFrameStale = true;
    }
  }
  childFrames(frameId) {
    const childIds = this.#childIds.get(frameId);
    if (!childIds) {
      return [];
    }
    return Array.from(childIds).map((id) => {
      return this.getById(id);
    }).filter((frame) => {
      return frame !== void 0;
    });
  }
  parentFrame(frameId) {
    const parentId = this.#parentIds.get(frameId);
    return parentId ? this.getById(parentId) : void 0;
  }
};
__name(FrameTree, "FrameTree");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/NetworkManager.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/HTTPRequest.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/HTTPRequest.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HTTPRequest = class {
  /**
   * @internal
   */
  _interceptionId;
  /**
   * @internal
   */
  _failureText = null;
  /**
   * @internal
   */
  _response = null;
  /**
   * @internal
   */
  _fromMemoryCache = false;
  /**
   * @internal
   */
  _redirectChain = [];
  /**
   * @internal
   */
  interception = {
    enabled: false,
    handled: false,
    handlers: [],
    resolutionState: {
      action: InterceptResolutionAction.None
    },
    requestOverrides: {},
    response: null,
    abortReason: null
  };
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * The `ContinueRequestOverrides` that will be used
   * if the interception is allowed to continue (ie, `abort()` and
   * `respond()` aren't called).
   */
  continueRequestOverrides() {
    assert3(this.interception.enabled, "Request Interception is not enabled!");
    return this.interception.requestOverrides;
  }
  /**
   * The `ResponseForRequest` that gets used if the
   * interception is allowed to respond (ie, `abort()` is not called).
   */
  responseForRequest() {
    assert3(this.interception.enabled, "Request Interception is not enabled!");
    return this.interception.response;
  }
  /**
   * The most recent reason for aborting the request
   */
  abortErrorReason() {
    assert3(this.interception.enabled, "Request Interception is not enabled!");
    return this.interception.abortReason;
  }
  /**
   * An InterceptResolutionState object describing the current resolution
   * action and priority.
   *
   * InterceptResolutionState contains:
   * action: InterceptResolutionAction
   * priority?: number
   *
   * InterceptResolutionAction is one of: `abort`, `respond`, `continue`,
   * `disabled`, `none`, or `already-handled`.
   */
  interceptResolutionState() {
    if (!this.interception.enabled) {
      return { action: InterceptResolutionAction.Disabled };
    }
    if (this.interception.handled) {
      return { action: InterceptResolutionAction.AlreadyHandled };
    }
    return { ...this.interception.resolutionState };
  }
  /**
   * Is `true` if the intercept resolution has already been handled,
   * `false` otherwise.
   */
  isInterceptResolutionHandled() {
    return this.interception.handled;
  }
  /**
   * Adds an async request handler to the processing queue.
   * Deferred handlers are not guaranteed to execute in any particular order,
   * but they are guaranteed to resolve before the request interception
   * is finalized.
   */
  enqueueInterceptAction(pendingHandler) {
    this.interception.handlers.push(pendingHandler);
  }
  /**
   * Awaits pending interception handlers and then decides how to fulfill
   * the request interception.
   */
  async finalizeInterceptions() {
    await this.interception.handlers.reduce((promiseChain, interceptAction) => {
      return promiseChain.then(interceptAction);
    }, Promise.resolve());
    this.interception.handlers = [];
    const { action } = this.interceptResolutionState();
    switch (action) {
      case "abort":
        return await this._abort(this.interception.abortReason);
      case "respond":
        if (this.interception.response === null) {
          throw new Error("Response is missing for the interception");
        }
        return await this._respond(this.interception.response);
      case "continue":
        return await this._continue(this.interception.requestOverrides);
    }
  }
  /**
   * Continues request with optional request overrides.
   *
   * @example
   *
   * ```ts
   * await page.setRequestInterception(true);
   * page.on('request', request => {
   *   // Override headers
   *   const headers = Object.assign({}, request.headers(), {
   *     foo: 'bar', // set "foo" header
   *     origin: undefined, // remove "origin" header
   *   });
   *   request.continue({headers});
   * });
   * ```
   *
   * @param overrides - optional overrides to apply to the request.
   * @param priority - If provided, intercept is resolved using cooperative
   * handling rules. Otherwise, intercept is resolved immediately.
   *
   * @remarks
   *
   * To use this, request interception should be enabled with
   * {@link Page.setRequestInterception}.
   *
   * Exception is immediately thrown if the request interception is not enabled.
   */
  async continue(overrides = {}, priority) {
    if (this.url().startsWith("data:")) {
      return;
    }
    assert3(this.interception.enabled, "Request Interception is not enabled!");
    assert3(!this.interception.handled, "Request is already handled!");
    if (priority === void 0) {
      return await this._continue(overrides);
    }
    this.interception.requestOverrides = overrides;
    if (this.interception.resolutionState.priority === void 0 || priority > this.interception.resolutionState.priority) {
      this.interception.resolutionState = {
        action: InterceptResolutionAction.Continue,
        priority
      };
      return;
    }
    if (priority === this.interception.resolutionState.priority) {
      if (this.interception.resolutionState.action === "abort" || this.interception.resolutionState.action === "respond") {
        return;
      }
      this.interception.resolutionState.action = InterceptResolutionAction.Continue;
    }
    return;
  }
  /**
   * Fulfills a request with the given response.
   *
   * @example
   * An example of fulfilling all requests with 404 responses:
   *
   * ```ts
   * await page.setRequestInterception(true);
   * page.on('request', request => {
   *   request.respond({
   *     status: 404,
   *     contentType: 'text/plain',
   *     body: 'Not Found!',
   *   });
   * });
   * ```
   *
   * NOTE: Mocking responses for dataURL requests is not supported.
   * Calling `request.respond` for a dataURL request is a noop.
   *
   * @param response - the response to fulfill the request with.
   * @param priority - If provided, intercept is resolved using
   * cooperative handling rules. Otherwise, intercept is resolved
   * immediately.
   *
   * @remarks
   *
   * To use this, request
   * interception should be enabled with {@link Page.setRequestInterception}.
   *
   * Exception is immediately thrown if the request interception is not enabled.
   */
  async respond(response, priority) {
    if (this.url().startsWith("data:")) {
      return;
    }
    assert3(this.interception.enabled, "Request Interception is not enabled!");
    assert3(!this.interception.handled, "Request is already handled!");
    if (priority === void 0) {
      return await this._respond(response);
    }
    this.interception.response = response;
    if (this.interception.resolutionState.priority === void 0 || priority > this.interception.resolutionState.priority) {
      this.interception.resolutionState = {
        action: InterceptResolutionAction.Respond,
        priority
      };
      return;
    }
    if (priority === this.interception.resolutionState.priority) {
      if (this.interception.resolutionState.action === "abort") {
        return;
      }
      this.interception.resolutionState.action = InterceptResolutionAction.Respond;
    }
  }
  /**
   * Aborts a request.
   *
   * @param errorCode - optional error code to provide.
   * @param priority - If provided, intercept is resolved using
   * cooperative handling rules. Otherwise, intercept is resolved
   * immediately.
   *
   * @remarks
   *
   * To use this, request interception should be enabled with
   * {@link Page.setRequestInterception}. If it is not enabled, this method will
   * throw an exception immediately.
   */
  async abort(errorCode = "failed", priority) {
    if (this.url().startsWith("data:")) {
      return;
    }
    const errorReason = errorReasons[errorCode];
    assert3(errorReason, "Unknown error code: " + errorCode);
    assert3(this.interception.enabled, "Request Interception is not enabled!");
    assert3(!this.interception.handled, "Request is already handled!");
    if (priority === void 0) {
      return await this._abort(errorReason);
    }
    this.interception.abortReason = errorReason;
    if (this.interception.resolutionState.priority === void 0 || priority >= this.interception.resolutionState.priority) {
      this.interception.resolutionState = {
        action: InterceptResolutionAction.Abort,
        priority
      };
      return;
    }
  }
};
__name(HTTPRequest, "HTTPRequest");
var InterceptResolutionAction;
(function(InterceptResolutionAction2) {
  InterceptResolutionAction2["Abort"] = "abort";
  InterceptResolutionAction2["Respond"] = "respond";
  InterceptResolutionAction2["Continue"] = "continue";
  InterceptResolutionAction2["Disabled"] = "disabled";
  InterceptResolutionAction2["None"] = "none";
  InterceptResolutionAction2["AlreadyHandled"] = "already-handled";
})(InterceptResolutionAction || (InterceptResolutionAction = {}));
function headersArray(headers) {
  const result = [];
  for (const name in headers) {
    const value = headers[name];
    if (!Object.is(value, void 0)) {
      const values = Array.isArray(value) ? value : [value];
      result.push(...values.map((value2) => {
        return { name, value: value2 + "" };
      }));
    }
  }
  return result;
}
__name(headersArray, "headersArray");
var STATUS_TEXTS = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "103": "Early Hints",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "306": "Switch Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Too Early",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "510": "Not Extended",
  "511": "Network Authentication Required"
};
var errorReasons = {
  aborted: "Aborted",
  accessdenied: "AccessDenied",
  addressunreachable: "AddressUnreachable",
  blockedbyclient: "BlockedByClient",
  blockedbyresponse: "BlockedByResponse",
  connectionaborted: "ConnectionAborted",
  connectionclosed: "ConnectionClosed",
  connectionfailed: "ConnectionFailed",
  connectionrefused: "ConnectionRefused",
  connectionreset: "ConnectionReset",
  internetdisconnected: "InternetDisconnected",
  namenotresolved: "NameNotResolved",
  timedout: "TimedOut",
  failed: "Failed"
};
function handleError(error3) {
  if (error3.originalMessage.includes("Invalid header")) {
    throw error3;
  }
  debugError(error3);
}
__name(handleError, "handleError");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/HTTPRequest.js
var CdpHTTPRequest = class extends HTTPRequest {
  id;
  #client;
  #isNavigationRequest;
  #url;
  #resourceType;
  #method;
  #hasPostData = false;
  #postData;
  #headers = {};
  #frame;
  #initiator;
  get client() {
    return this.#client;
  }
  constructor(client, frame, interceptionId, allowInterception, data, redirectChain) {
    super();
    this.#client = client;
    this.id = data.requestId;
    this.#isNavigationRequest = data.requestId === data.loaderId && data.type === "Document";
    this._interceptionId = interceptionId;
    this.#url = data.request.url;
    this.#resourceType = (data.type || "other").toLowerCase();
    this.#method = data.request.method;
    this.#postData = data.request.postData;
    this.#hasPostData = data.request.hasPostData ?? false;
    this.#frame = frame;
    this._redirectChain = redirectChain;
    this.#initiator = data.initiator;
    this.interception.enabled = allowInterception;
    for (const [key, value] of Object.entries(data.request.headers)) {
      this.#headers[key.toLowerCase()] = value;
    }
  }
  url() {
    return this.#url;
  }
  resourceType() {
    return this.#resourceType;
  }
  method() {
    return this.#method;
  }
  postData() {
    return this.#postData;
  }
  hasPostData() {
    return this.#hasPostData;
  }
  async fetchPostData() {
    try {
      const result = await this.#client.send("Network.getRequestPostData", {
        requestId: this.id
      });
      return result.postData;
    } catch (err) {
      debugError(err);
      return;
    }
  }
  headers() {
    return this.#headers;
  }
  response() {
    return this._response;
  }
  frame() {
    return this.#frame;
  }
  isNavigationRequest() {
    return this.#isNavigationRequest;
  }
  initiator() {
    return this.#initiator;
  }
  redirectChain() {
    return this._redirectChain.slice();
  }
  failure() {
    if (!this._failureText) {
      return null;
    }
    return {
      errorText: this._failureText
    };
  }
  /**
   * @internal
   */
  async _continue(overrides = {}) {
    const { url, method, postData, headers } = overrides;
    this.interception.handled = true;
    const postDataBinaryBase64 = postData ? Buffer.from(postData).toString("base64") : void 0;
    if (this._interceptionId === void 0) {
      throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.continueRequest");
    }
    await this.#client.send("Fetch.continueRequest", {
      requestId: this._interceptionId,
      url,
      method,
      postData: postDataBinaryBase64,
      headers: headers ? headersArray(headers) : void 0
    }).catch((error3) => {
      this.interception.handled = false;
      return handleError(error3);
    });
  }
  async _respond(response) {
    this.interception.handled = true;
    const responseBody = response.body && isString(response.body) ? Buffer.from(response.body) : response.body || null;
    const responseHeaders = {};
    if (response.headers) {
      for (const header of Object.keys(response.headers)) {
        const value = response.headers[header];
        responseHeaders[header.toLowerCase()] = Array.isArray(value) ? value.map((item) => {
          return String(item);
        }) : String(value);
      }
    }
    if (response.contentType) {
      responseHeaders["content-type"] = response.contentType;
    }
    if (responseBody && !("content-length" in responseHeaders)) {
      responseHeaders["content-length"] = String(Buffer.byteLength(responseBody));
    }
    const status = response.status || 200;
    if (this._interceptionId === void 0) {
      throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest");
    }
    await this.#client.send("Fetch.fulfillRequest", {
      requestId: this._interceptionId,
      responseCode: status,
      responsePhrase: STATUS_TEXTS[status],
      responseHeaders: headersArray(responseHeaders),
      body: responseBody ? responseBody.toString("base64") : void 0
    }).catch((error3) => {
      this.interception.handled = false;
      return handleError(error3);
    });
  }
  async _abort(errorReason) {
    this.interception.handled = true;
    if (this._interceptionId === void 0) {
      throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.failRequest");
    }
    await this.#client.send("Fetch.failRequest", {
      requestId: this._interceptionId,
      errorReason: errorReason || "Failed"
    }).catch(handleError);
  }
};
__name(CdpHTTPRequest, "CdpHTTPRequest");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/HTTPResponse.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/HTTPResponse.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HTTPResponse = class {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * True if the response was successful (status in the range 200-299).
   */
  ok() {
    const status = this.status();
    return status === 0 || status >= 200 && status <= 299;
  }
  /**
   * Promise which resolves to a text (utf8) representation of response body.
   */
  async text() {
    const content = await this.buffer();
    return content.toString("utf8");
  }
  /**
   * Promise which resolves to a JSON representation of response body.
   *
   * @remarks
   *
   * This method will throw if the response body is not parsable via
   * `JSON.parse`.
   */
  async json() {
    const content = await this.text();
    return JSON.parse(content);
  }
};
__name(HTTPResponse, "HTTPResponse");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/SecurityDetails.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SecurityDetails = class {
  #subjectName;
  #issuer;
  #validFrom;
  #validTo;
  #protocol;
  #sanList;
  /**
   * @internal
   */
  constructor(securityPayload) {
    this.#subjectName = securityPayload.subjectName;
    this.#issuer = securityPayload.issuer;
    this.#validFrom = securityPayload.validFrom;
    this.#validTo = securityPayload.validTo;
    this.#protocol = securityPayload.protocol;
    this.#sanList = securityPayload.sanList;
  }
  /**
   * The name of the issuer of the certificate.
   */
  issuer() {
    return this.#issuer;
  }
  /**
   * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
   * marking the start of the certificate's validity.
   */
  validFrom() {
    return this.#validFrom;
  }
  /**
   * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
   * marking the end of the certificate's validity.
   */
  validTo() {
    return this.#validTo;
  }
  /**
   * The security protocol being used, e.g. "TLS 1.2".
   */
  protocol() {
    return this.#protocol;
  }
  /**
   * The name of the subject to which the certificate was issued.
   */
  subjectName() {
    return this.#subjectName;
  }
  /**
   * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
   */
  subjectAlternativeNames() {
    return this.#sanList;
  }
};
__name(SecurityDetails, "SecurityDetails");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/HTTPResponse.js
var CdpHTTPResponse = class extends HTTPResponse {
  #client;
  #request;
  #contentPromise = null;
  #bodyLoadedDeferred = Deferred.create();
  #remoteAddress;
  #status;
  #statusText;
  #url;
  #fromDiskCache;
  #fromServiceWorker;
  #headers = {};
  #securityDetails;
  #timing;
  constructor(client, request, responsePayload, extraInfo) {
    super();
    this.#client = client;
    this.#request = request;
    this.#remoteAddress = {
      ip: responsePayload.remoteIPAddress,
      port: responsePayload.remotePort
    };
    this.#statusText = this.#parseStatusTextFromExtraInfo(extraInfo) || responsePayload.statusText;
    this.#url = request.url();
    this.#fromDiskCache = !!responsePayload.fromDiskCache;
    this.#fromServiceWorker = !!responsePayload.fromServiceWorker;
    this.#status = extraInfo ? extraInfo.statusCode : responsePayload.status;
    const headers = extraInfo ? extraInfo.headers : responsePayload.headers;
    for (const [key, value] of Object.entries(headers)) {
      this.#headers[key.toLowerCase()] = value;
    }
    this.#securityDetails = responsePayload.securityDetails ? new SecurityDetails(responsePayload.securityDetails) : null;
    this.#timing = responsePayload.timing || null;
  }
  #parseStatusTextFromExtraInfo(extraInfo) {
    if (!extraInfo || !extraInfo.headersText) {
      return;
    }
    const firstLine = extraInfo.headersText.split("\r", 1)[0];
    if (!firstLine) {
      return;
    }
    const match = firstLine.match(/[^ ]* [^ ]* (.*)/);
    if (!match) {
      return;
    }
    const statusText = match[1];
    if (!statusText) {
      return;
    }
    return statusText;
  }
  _resolveBody(err) {
    if (err) {
      return this.#bodyLoadedDeferred.reject(err);
    }
    return this.#bodyLoadedDeferred.resolve();
  }
  remoteAddress() {
    return this.#remoteAddress;
  }
  url() {
    return this.#url;
  }
  status() {
    return this.#status;
  }
  statusText() {
    return this.#statusText;
  }
  headers() {
    return this.#headers;
  }
  securityDetails() {
    return this.#securityDetails;
  }
  timing() {
    return this.#timing;
  }
  buffer() {
    if (!this.#contentPromise) {
      this.#contentPromise = this.#bodyLoadedDeferred.valueOrThrow().then(async () => {
        try {
          const response = await this.#client.send("Network.getResponseBody", {
            requestId: this.#request.id
          });
          return Buffer.from(response.body, response.base64Encoded ? "base64" : "utf8");
        } catch (error3) {
          if (error3 instanceof ProtocolError && error3.originalMessage === "No resource with given identifier found") {
            throw new ProtocolError("Could not load body for this request. This might happen if the request is a preflight request.");
          }
          throw error3;
        }
      });
    }
    return this.#contentPromise;
  }
  request() {
    return this.#request;
  }
  fromCache() {
    return this.#fromDiskCache || this.#request._fromMemoryCache;
  }
  fromServiceWorker() {
    return this.#fromServiceWorker;
  }
  frame() {
    return this.#request.frame();
  }
};
__name(CdpHTTPResponse, "CdpHTTPResponse");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/NetworkEventManager.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var NetworkEventManager = class {
  /**
   * There are four possible orders of events:
   * A. `_onRequestWillBeSent`
   * B. `_onRequestWillBeSent`, `_onRequestPaused`
   * C. `_onRequestPaused`, `_onRequestWillBeSent`
   * D. `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
   * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`
   * (see crbug.com/1196004)
   *
   * For `_onRequest` we need the event from `_onRequestWillBeSent` and
   * optionally the `interceptionId` from `_onRequestPaused`.
   *
   * If request interception is disabled, call `_onRequest` once per call to
   * `_onRequestWillBeSent`.
   * If request interception is enabled, call `_onRequest` once per call to
   * `_onRequestPaused` (once per `interceptionId`).
   *
   * Events are stored to allow for subsequent events to call `_onRequest`.
   *
   * Note that (chains of) redirect requests have the same `requestId` (!) as
   * the original request. We have to anticipate series of events like these:
   * A. `_onRequestWillBeSent`,
   * `_onRequestWillBeSent`, ...
   * B. `_onRequestWillBeSent`, `_onRequestPaused`,
   * `_onRequestWillBeSent`, `_onRequestPaused`, ...
   * C. `_onRequestWillBeSent`, `_onRequestPaused`,
   * `_onRequestPaused`, `_onRequestWillBeSent`, ...
   * D. `_onRequestPaused`, `_onRequestWillBeSent`,
   * `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
   * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`, ...
   * (see crbug.com/1196004)
   */
  #requestWillBeSentMap = /* @__PURE__ */ new Map();
  #requestPausedMap = /* @__PURE__ */ new Map();
  #httpRequestsMap = /* @__PURE__ */ new Map();
  /*
   * The below maps are used to reconcile Network.responseReceivedExtraInfo
   * events with their corresponding request. Each response and redirect
   * response gets an ExtraInfo event, and we don't know which will come first.
   * This means that we have to store a Response or an ExtraInfo for each
   * response, and emit the event when we get both of them. In addition, to
   * handle redirects, we have to make them Arrays to represent the chain of
   * events.
   */
  #responseReceivedExtraInfoMap = /* @__PURE__ */ new Map();
  #queuedRedirectInfoMap = /* @__PURE__ */ new Map();
  #queuedEventGroupMap = /* @__PURE__ */ new Map();
  forget(networkRequestId) {
    this.#requestWillBeSentMap.delete(networkRequestId);
    this.#requestPausedMap.delete(networkRequestId);
    this.#queuedEventGroupMap.delete(networkRequestId);
    this.#queuedRedirectInfoMap.delete(networkRequestId);
    this.#responseReceivedExtraInfoMap.delete(networkRequestId);
  }
  responseExtraInfo(networkRequestId) {
    if (!this.#responseReceivedExtraInfoMap.has(networkRequestId)) {
      this.#responseReceivedExtraInfoMap.set(networkRequestId, []);
    }
    return this.#responseReceivedExtraInfoMap.get(networkRequestId);
  }
  queuedRedirectInfo(fetchRequestId) {
    if (!this.#queuedRedirectInfoMap.has(fetchRequestId)) {
      this.#queuedRedirectInfoMap.set(fetchRequestId, []);
    }
    return this.#queuedRedirectInfoMap.get(fetchRequestId);
  }
  queueRedirectInfo(fetchRequestId, redirectInfo) {
    this.queuedRedirectInfo(fetchRequestId).push(redirectInfo);
  }
  takeQueuedRedirectInfo(fetchRequestId) {
    return this.queuedRedirectInfo(fetchRequestId).shift();
  }
  inFlightRequestsCount() {
    let inFlightRequestCounter = 0;
    for (const request of this.#httpRequestsMap.values()) {
      if (!request.response()) {
        inFlightRequestCounter++;
      }
    }
    return inFlightRequestCounter;
  }
  storeRequestWillBeSent(networkRequestId, event) {
    this.#requestWillBeSentMap.set(networkRequestId, event);
  }
  getRequestWillBeSent(networkRequestId) {
    return this.#requestWillBeSentMap.get(networkRequestId);
  }
  forgetRequestWillBeSent(networkRequestId) {
    this.#requestWillBeSentMap.delete(networkRequestId);
  }
  getRequestPaused(networkRequestId) {
    return this.#requestPausedMap.get(networkRequestId);
  }
  forgetRequestPaused(networkRequestId) {
    this.#requestPausedMap.delete(networkRequestId);
  }
  storeRequestPaused(networkRequestId, event) {
    this.#requestPausedMap.set(networkRequestId, event);
  }
  getRequest(networkRequestId) {
    return this.#httpRequestsMap.get(networkRequestId);
  }
  storeRequest(networkRequestId, request) {
    this.#httpRequestsMap.set(networkRequestId, request);
  }
  forgetRequest(networkRequestId) {
    this.#httpRequestsMap.delete(networkRequestId);
  }
  getQueuedEventGroup(networkRequestId) {
    return this.#queuedEventGroupMap.get(networkRequestId);
  }
  queueEventGroup(networkRequestId, event) {
    this.#queuedEventGroupMap.set(networkRequestId, event);
  }
  forgetQueuedEventGroup(networkRequestId) {
    this.#queuedEventGroupMap.delete(networkRequestId);
  }
};
__name(NetworkEventManager, "NetworkEventManager");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/NetworkManager.js
var NetworkManager = class extends EventEmitter2 {
  #frameManager;
  #networkEventManager = new NetworkEventManager();
  #extraHTTPHeaders;
  #credentials;
  #attemptedAuthentications = /* @__PURE__ */ new Set();
  #userRequestInterceptionEnabled = false;
  #protocolRequestInterceptionEnabled = false;
  #userCacheDisabled;
  #emulatedNetworkConditions;
  #userAgent;
  #userAgentMetadata;
  #handlers = [
    ["Fetch.requestPaused", this.#onRequestPaused],
    ["Fetch.authRequired", this.#onAuthRequired],
    ["Network.requestWillBeSent", this.#onRequestWillBeSent],
    ["Network.requestServedFromCache", this.#onRequestServedFromCache],
    ["Network.responseReceived", this.#onResponseReceived],
    ["Network.loadingFinished", this.#onLoadingFinished],
    ["Network.loadingFailed", this.#onLoadingFailed],
    ["Network.responseReceivedExtraInfo", this.#onResponseReceivedExtraInfo],
    [CDPSessionEvent.Disconnected, this.#removeClient]
  ];
  #clients = /* @__PURE__ */ new Map();
  constructor(frameManager) {
    super();
    this.#frameManager = frameManager;
  }
  async addClient(client) {
    if (this.#clients.has(client)) {
      return;
    }
    const subscriptions = new DisposableStack();
    this.#clients.set(client, subscriptions);
    const clientEmitter = subscriptions.use(new EventEmitter2(client));
    for (const [event, handler] of this.#handlers) {
      clientEmitter.on(event, (arg) => {
        return handler.bind(this)(client, arg);
      });
    }
    await Promise.all([
      client.send("Network.enable"),
      this.#applyExtraHTTPHeaders(client),
      this.#applyNetworkConditions(client),
      this.#applyProtocolCacheDisabled(client),
      this.#applyProtocolRequestInterception(client),
      this.#applyUserAgent(client)
    ]);
  }
  async #removeClient(client) {
    this.#clients.get(client)?.dispose();
    this.#clients.delete(client);
  }
  async authenticate(credentials) {
    this.#credentials = credentials;
    const enabled = this.#userRequestInterceptionEnabled || !!this.#credentials;
    if (enabled === this.#protocolRequestInterceptionEnabled) {
      return;
    }
    this.#protocolRequestInterceptionEnabled = enabled;
    await this.#applyToAllClients(this.#applyProtocolRequestInterception.bind(this));
  }
  async setExtraHTTPHeaders(headers) {
    const extraHTTPHeaders = {};
    for (const [key, value] of Object.entries(headers)) {
      assert3(isString(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
      extraHTTPHeaders[key.toLowerCase()] = value;
    }
    this.#extraHTTPHeaders = extraHTTPHeaders;
    await this.#applyToAllClients(this.#applyExtraHTTPHeaders.bind(this));
  }
  async #applyExtraHTTPHeaders(client) {
    if (this.#extraHTTPHeaders === void 0) {
      return;
    }
    await client.send("Network.setExtraHTTPHeaders", {
      headers: this.#extraHTTPHeaders
    });
  }
  extraHTTPHeaders() {
    return Object.assign({}, this.#extraHTTPHeaders);
  }
  inFlightRequestsCount() {
    return this.#networkEventManager.inFlightRequestsCount();
  }
  async setOfflineMode(value) {
    if (!this.#emulatedNetworkConditions) {
      this.#emulatedNetworkConditions = {
        offline: false,
        upload: -1,
        download: -1,
        latency: 0
      };
    }
    this.#emulatedNetworkConditions.offline = value;
    await this.#applyToAllClients(this.#applyNetworkConditions.bind(this));
  }
  async emulateNetworkConditions(networkConditions) {
    if (!this.#emulatedNetworkConditions) {
      this.#emulatedNetworkConditions = {
        offline: false,
        upload: -1,
        download: -1,
        latency: 0
      };
    }
    this.#emulatedNetworkConditions.upload = networkConditions ? networkConditions.upload : -1;
    this.#emulatedNetworkConditions.download = networkConditions ? networkConditions.download : -1;
    this.#emulatedNetworkConditions.latency = networkConditions ? networkConditions.latency : 0;
    await this.#applyToAllClients(this.#applyNetworkConditions.bind(this));
  }
  async #applyToAllClients(fn) {
    await Promise.all(Array.from(this.#clients.keys()).map((client) => {
      return fn(client);
    }));
  }
  async #applyNetworkConditions(client) {
    if (this.#emulatedNetworkConditions === void 0) {
      return;
    }
    await client.send("Network.emulateNetworkConditions", {
      offline: this.#emulatedNetworkConditions.offline,
      latency: this.#emulatedNetworkConditions.latency,
      uploadThroughput: this.#emulatedNetworkConditions.upload,
      downloadThroughput: this.#emulatedNetworkConditions.download
    });
  }
  async setUserAgent(userAgent, userAgentMetadata) {
    this.#userAgent = userAgent;
    this.#userAgentMetadata = userAgentMetadata;
    await this.#applyToAllClients(this.#applyUserAgent.bind(this));
  }
  async #applyUserAgent(client) {
    if (this.#userAgent === void 0) {
      return;
    }
    await client.send("Network.setUserAgentOverride", {
      userAgent: this.#userAgent,
      userAgentMetadata: this.#userAgentMetadata
    });
  }
  async setCacheEnabled(enabled) {
    this.#userCacheDisabled = !enabled;
    await this.#applyToAllClients(this.#applyProtocolCacheDisabled.bind(this));
  }
  async setRequestInterception(value) {
    this.#userRequestInterceptionEnabled = value;
    const enabled = this.#userRequestInterceptionEnabled || !!this.#credentials;
    if (enabled === this.#protocolRequestInterceptionEnabled) {
      return;
    }
    this.#protocolRequestInterceptionEnabled = enabled;
    await this.#applyToAllClients(this.#applyProtocolRequestInterception.bind(this));
  }
  async #applyProtocolRequestInterception(client) {
    if (this.#userCacheDisabled === void 0) {
      this.#userCacheDisabled = false;
    }
    if (this.#protocolRequestInterceptionEnabled) {
      await Promise.all([
        this.#applyProtocolCacheDisabled(client),
        client.send("Fetch.enable", {
          handleAuthRequests: true,
          patterns: [{ urlPattern: "*" }]
        })
      ]);
    } else {
      await Promise.all([
        this.#applyProtocolCacheDisabled(client),
        client.send("Fetch.disable")
      ]);
    }
  }
  async #applyProtocolCacheDisabled(client) {
    if (this.#userCacheDisabled === void 0) {
      return;
    }
    await client.send("Network.setCacheDisabled", {
      cacheDisabled: this.#userCacheDisabled
    });
  }
  #onRequestWillBeSent(client, event) {
    if (this.#userRequestInterceptionEnabled && !event.request.url.startsWith("data:")) {
      const { requestId: networkRequestId } = event;
      this.#networkEventManager.storeRequestWillBeSent(networkRequestId, event);
      const requestPausedEvent = this.#networkEventManager.getRequestPaused(networkRequestId);
      if (requestPausedEvent) {
        const { requestId: fetchRequestId } = requestPausedEvent;
        this.#patchRequestEventHeaders(event, requestPausedEvent);
        this.#onRequest(client, event, fetchRequestId);
        this.#networkEventManager.forgetRequestPaused(networkRequestId);
      }
      return;
    }
    this.#onRequest(client, event, void 0);
  }
  #onAuthRequired(client, event) {
    let response = "Default";
    if (this.#attemptedAuthentications.has(event.requestId)) {
      response = "CancelAuth";
    } else if (this.#credentials) {
      response = "ProvideCredentials";
      this.#attemptedAuthentications.add(event.requestId);
    }
    const { username, password } = this.#credentials || {
      username: void 0,
      password: void 0
    };
    client.send("Fetch.continueWithAuth", {
      requestId: event.requestId,
      authChallengeResponse: { response, username, password }
    }).catch(debugError);
  }
  /**
   * CDP may send a Fetch.requestPaused without or before a
   * Network.requestWillBeSent
   *
   * CDP may send multiple Fetch.requestPaused
   * for the same Network.requestWillBeSent.
   */
  #onRequestPaused(client, event) {
    if (!this.#userRequestInterceptionEnabled && this.#protocolRequestInterceptionEnabled) {
      client.send("Fetch.continueRequest", {
        requestId: event.requestId
      }).catch(debugError);
    }
    const { networkId: networkRequestId, requestId: fetchRequestId } = event;
    if (!networkRequestId) {
      this.#onRequestWithoutNetworkInstrumentation(client, event);
      return;
    }
    const requestWillBeSentEvent = (() => {
      const requestWillBeSentEvent2 = this.#networkEventManager.getRequestWillBeSent(networkRequestId);
      if (requestWillBeSentEvent2 && (requestWillBeSentEvent2.request.url !== event.request.url || requestWillBeSentEvent2.request.method !== event.request.method)) {
        this.#networkEventManager.forgetRequestWillBeSent(networkRequestId);
        return;
      }
      return requestWillBeSentEvent2;
    })();
    if (requestWillBeSentEvent) {
      this.#patchRequestEventHeaders(requestWillBeSentEvent, event);
      this.#onRequest(client, requestWillBeSentEvent, fetchRequestId);
    } else {
      this.#networkEventManager.storeRequestPaused(networkRequestId, event);
    }
  }
  #patchRequestEventHeaders(requestWillBeSentEvent, requestPausedEvent) {
    requestWillBeSentEvent.request.headers = {
      ...requestWillBeSentEvent.request.headers,
      // includes extra headers, like: Accept, Origin
      ...requestPausedEvent.request.headers
    };
  }
  #onRequestWithoutNetworkInstrumentation(client, event) {
    const frame = event.frameId ? this.#frameManager.frame(event.frameId) : null;
    const request = new CdpHTTPRequest(client, frame, event.requestId, this.#userRequestInterceptionEnabled, event, []);
    this.emit(NetworkManagerEvent.Request, request);
    void request.finalizeInterceptions();
  }
  #onRequest(client, event, fetchRequestId) {
    let redirectChain = [];
    if (event.redirectResponse) {
      let redirectResponseExtraInfo = null;
      if (event.redirectHasExtraInfo) {
        redirectResponseExtraInfo = this.#networkEventManager.responseExtraInfo(event.requestId).shift();
        if (!redirectResponseExtraInfo) {
          this.#networkEventManager.queueRedirectInfo(event.requestId, {
            event,
            fetchRequestId
          });
          return;
        }
      }
      const request2 = this.#networkEventManager.getRequest(event.requestId);
      if (request2) {
        this.#handleRequestRedirect(client, request2, event.redirectResponse, redirectResponseExtraInfo);
        redirectChain = request2._redirectChain;
      }
    }
    const frame = event.frameId ? this.#frameManager.frame(event.frameId) : null;
    const request = new CdpHTTPRequest(client, frame, fetchRequestId, this.#userRequestInterceptionEnabled, event, redirectChain);
    this.#networkEventManager.storeRequest(event.requestId, request);
    this.emit(NetworkManagerEvent.Request, request);
    void request.finalizeInterceptions();
  }
  #onRequestServedFromCache(_client, event) {
    const request = this.#networkEventManager.getRequest(event.requestId);
    if (request) {
      request._fromMemoryCache = true;
    }
    this.emit(NetworkManagerEvent.RequestServedFromCache, request);
  }
  #handleRequestRedirect(client, request, responsePayload, extraInfo) {
    const response = new CdpHTTPResponse(client, request, responsePayload, extraInfo);
    request._response = response;
    request._redirectChain.push(request);
    response._resolveBody(new Error("Response body is unavailable for redirect responses"));
    this.#forgetRequest(request, false);
    this.emit(NetworkManagerEvent.Response, response);
    this.emit(NetworkManagerEvent.RequestFinished, request);
  }
  #emitResponseEvent(client, responseReceived, extraInfo) {
    const request = this.#networkEventManager.getRequest(responseReceived.requestId);
    if (!request) {
      return;
    }
    const extraInfos = this.#networkEventManager.responseExtraInfo(responseReceived.requestId);
    if (extraInfos.length) {
      debugError(new Error("Unexpected extraInfo events for request " + responseReceived.requestId));
    }
    if (responseReceived.response.fromDiskCache) {
      extraInfo = null;
    }
    const response = new CdpHTTPResponse(client, request, responseReceived.response, extraInfo);
    request._response = response;
    this.emit(NetworkManagerEvent.Response, response);
  }
  #onResponseReceived(client, event) {
    const request = this.#networkEventManager.getRequest(event.requestId);
    let extraInfo = null;
    if (request && !request._fromMemoryCache && event.hasExtraInfo) {
      extraInfo = this.#networkEventManager.responseExtraInfo(event.requestId).shift();
      if (!extraInfo) {
        this.#networkEventManager.queueEventGroup(event.requestId, {
          responseReceivedEvent: event
        });
        return;
      }
    }
    this.#emitResponseEvent(client, event, extraInfo);
  }
  #onResponseReceivedExtraInfo(client, event) {
    const redirectInfo = this.#networkEventManager.takeQueuedRedirectInfo(event.requestId);
    if (redirectInfo) {
      this.#networkEventManager.responseExtraInfo(event.requestId).push(event);
      this.#onRequest(client, redirectInfo.event, redirectInfo.fetchRequestId);
      return;
    }
    const queuedEvents = this.#networkEventManager.getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
      this.#networkEventManager.forgetQueuedEventGroup(event.requestId);
      this.#emitResponseEvent(client, queuedEvents.responseReceivedEvent, event);
      if (queuedEvents.loadingFinishedEvent) {
        this.#emitLoadingFinished(queuedEvents.loadingFinishedEvent);
      }
      if (queuedEvents.loadingFailedEvent) {
        this.#emitLoadingFailed(queuedEvents.loadingFailedEvent);
      }
      return;
    }
    this.#networkEventManager.responseExtraInfo(event.requestId).push(event);
  }
  #forgetRequest(request, events) {
    const requestId = request.id;
    const interceptionId = request._interceptionId;
    this.#networkEventManager.forgetRequest(requestId);
    interceptionId !== void 0 && this.#attemptedAuthentications.delete(interceptionId);
    if (events) {
      this.#networkEventManager.forget(requestId);
    }
  }
  #onLoadingFinished(_client, event) {
    const queuedEvents = this.#networkEventManager.getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
      queuedEvents.loadingFinishedEvent = event;
    } else {
      this.#emitLoadingFinished(event);
    }
  }
  #emitLoadingFinished(event) {
    const request = this.#networkEventManager.getRequest(event.requestId);
    if (!request) {
      return;
    }
    if (request.response()) {
      request.response()?._resolveBody();
    }
    this.#forgetRequest(request, true);
    this.emit(NetworkManagerEvent.RequestFinished, request);
  }
  #onLoadingFailed(_client, event) {
    const queuedEvents = this.#networkEventManager.getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
      queuedEvents.loadingFailedEvent = event;
    } else {
      this.#emitLoadingFailed(event);
    }
  }
  #emitLoadingFailed(event) {
    const request = this.#networkEventManager.getRequest(event.requestId);
    if (!request) {
      return;
    }
    request._failureText = event.errorText;
    const response = request.response();
    if (response) {
      response._resolveBody();
    }
    this.#forgetRequest(request, true);
    this.emit(NetworkManagerEvent.RequestFailed, request);
  }
};
__name(NetworkManager, "NetworkManager");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/FrameManager.js
var TIME_FOR_WAITING_FOR_SWAP = 100;
var FrameManager = class extends EventEmitter2 {
  #page;
  #networkManager;
  #timeoutSettings;
  #isolatedWorlds = /* @__PURE__ */ new Set();
  #client;
  _frameTree = new FrameTree();
  /**
   * Set of frame IDs stored to indicate if a frame has received a
   * frameNavigated event so that frame tree responses could be ignored as the
   * frameNavigated event usually contains the latest information.
   */
  #frameNavigatedReceived = /* @__PURE__ */ new Set();
  #deviceRequestPromptManagerMap = /* @__PURE__ */ new WeakMap();
  #frameTreeHandled;
  get timeoutSettings() {
    return this.#timeoutSettings;
  }
  get networkManager() {
    return this.#networkManager;
  }
  get client() {
    return this.#client;
  }
  constructor(client, page, timeoutSettings) {
    super();
    this.#client = client;
    this.#page = page;
    this.#networkManager = new NetworkManager(this);
    this.#timeoutSettings = timeoutSettings;
    this.setupEventListeners(this.#client);
    client.once(CDPSessionEvent.Disconnected, () => {
      this.#onClientDisconnect().catch(debugError);
    });
  }
  /**
   * Called when the frame's client is disconnected. We don't know if the
   * disconnect means that the frame is removed or if it will be replaced by a
   * new frame. Therefore, we wait for a swap event.
   */
  async #onClientDisconnect() {
    const mainFrame = this._frameTree.getMainFrame();
    if (!mainFrame) {
      return;
    }
    for (const child of mainFrame.childFrames()) {
      this.#removeFramesRecursively(child);
    }
    const swapped = Deferred.create({
      timeout: TIME_FOR_WAITING_FOR_SWAP,
      message: "Frame was not swapped"
    });
    mainFrame.once(FrameEvent.FrameSwappedByActivation, () => {
      swapped.resolve();
    });
    try {
      await swapped.valueOrThrow();
    } catch (err) {
      this.#removeFramesRecursively(mainFrame);
    }
  }
  /**
   * When the main frame is replaced by another main frame,
   * we maintain the main frame object identity while updating
   * its frame tree and ID.
   */
  async swapFrameTree(client) {
    this.#client = client;
    assert3(this.#client instanceof CdpCDPSession, "CDPSession is not an instance of CDPSessionImpl.");
    const frame = this._frameTree.getMainFrame();
    if (frame) {
      this.#frameNavigatedReceived.add(this.#client._target()._targetId);
      this._frameTree.removeFrame(frame);
      frame.updateId(this.#client._target()._targetId);
      this._frameTree.addFrame(frame);
      frame.updateClient(client);
    }
    this.setupEventListeners(client);
    client.once(CDPSessionEvent.Disconnected, () => {
      this.#onClientDisconnect().catch(debugError);
    });
    await this.initialize(client);
    await this.#networkManager.addClient(client);
    if (frame) {
      frame.emit(FrameEvent.FrameSwappedByActivation, void 0);
    }
  }
  async registerSpeculativeSession(client) {
    await this.#networkManager.addClient(client);
  }
  setupEventListeners(session) {
    session.on("Page.frameAttached", async (event) => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onFrameAttached(session, event.frameId, event.parentFrameId);
    });
    session.on("Page.frameNavigated", async (event) => {
      this.#frameNavigatedReceived.add(event.frame.id);
      await this.#frameTreeHandled?.valueOrThrow();
      void this.#onFrameNavigated(event.frame, event.type);
    });
    session.on("Page.navigatedWithinDocument", async (event) => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onFrameNavigatedWithinDocument(event.frameId, event.url);
    });
    session.on("Page.frameDetached", async (event) => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onFrameDetached(event.frameId, event.reason);
    });
    session.on("Page.frameStartedLoading", async (event) => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onFrameStartedLoading(event.frameId);
    });
    session.on("Page.frameStoppedLoading", async (event) => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onFrameStoppedLoading(event.frameId);
    });
    session.on("Runtime.executionContextCreated", async (event) => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onExecutionContextCreated(event.context, session);
    });
    session.on("Page.lifecycleEvent", async (event) => {
      await this.#frameTreeHandled?.valueOrThrow();
      this.#onLifecycleEvent(event);
    });
  }
  async initialize(client) {
    try {
      this.#frameTreeHandled?.resolve();
      this.#frameTreeHandled = Deferred.create();
      await Promise.all([
        this.#networkManager.addClient(client),
        client.send("Page.enable"),
        client.send("Page.getFrameTree").then(({ frameTree }) => {
          this.#handleFrameTree(client, frameTree);
          this.#frameTreeHandled?.resolve();
        }),
        client.send("Page.setLifecycleEventsEnabled", { enabled: true }),
        client.send("Runtime.enable").then(() => {
          return this.#createIsolatedWorld(client, UTILITY_WORLD_NAME);
        })
      ]);
    } catch (error3) {
      this.#frameTreeHandled?.resolve();
      if (isErrorLike(error3) && isTargetClosedError(error3)) {
        return;
      }
      throw error3;
    }
  }
  page() {
    return this.#page;
  }
  mainFrame() {
    const mainFrame = this._frameTree.getMainFrame();
    assert3(mainFrame, "Requesting main frame too early!");
    return mainFrame;
  }
  frames() {
    return Array.from(this._frameTree.frames());
  }
  frame(frameId) {
    return this._frameTree.getById(frameId) || null;
  }
  onAttachedToTarget(target) {
    if (target._getTargetInfo().type !== "iframe") {
      return;
    }
    const frame = this.frame(target._getTargetInfo().targetId);
    if (frame) {
      frame.updateClient(target._session());
    }
    this.setupEventListeners(target._session());
    void this.initialize(target._session());
  }
  _deviceRequestPromptManager(client) {
    let manager = this.#deviceRequestPromptManagerMap.get(client);
    if (manager === void 0) {
      manager = new DeviceRequestPromptManager(client, this.#timeoutSettings);
      this.#deviceRequestPromptManagerMap.set(client, manager);
    }
    return manager;
  }
  #onLifecycleEvent(event) {
    const frame = this.frame(event.frameId);
    if (!frame) {
      return;
    }
    frame._onLifecycleEvent(event.loaderId, event.name);
    this.emit(FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(FrameEvent.LifecycleEvent, void 0);
  }
  #onFrameStartedLoading(frameId) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._onLoadingStarted();
  }
  #onFrameStoppedLoading(frameId) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._onLoadingStopped();
    this.emit(FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(FrameEvent.LifecycleEvent, void 0);
  }
  #handleFrameTree(session, frameTree) {
    if (frameTree.frame.parentId) {
      this.#onFrameAttached(session, frameTree.frame.id, frameTree.frame.parentId);
    }
    if (!this.#frameNavigatedReceived.has(frameTree.frame.id)) {
      void this.#onFrameNavigated(frameTree.frame, "Navigation");
    } else {
      this.#frameNavigatedReceived.delete(frameTree.frame.id);
    }
    if (!frameTree.childFrames) {
      return;
    }
    for (const child of frameTree.childFrames) {
      this.#handleFrameTree(session, child);
    }
  }
  #onFrameAttached(session, frameId, parentFrameId) {
    let frame = this.frame(frameId);
    if (frame) {
      if (session && frame.isOOPFrame()) {
        frame.updateClient(session);
      }
      return;
    }
    frame = new CdpFrame(this, frameId, parentFrameId, session);
    this._frameTree.addFrame(frame);
    this.emit(FrameManagerEvent.FrameAttached, frame);
  }
  async #onFrameNavigated(framePayload, navigationType) {
    const frameId = framePayload.id;
    const isMainFrame = !framePayload.parentId;
    let frame = this._frameTree.getById(frameId);
    if (frame) {
      for (const child of frame.childFrames()) {
        this.#removeFramesRecursively(child);
      }
    }
    if (isMainFrame) {
      if (frame) {
        this._frameTree.removeFrame(frame);
        frame._id = frameId;
      } else {
        frame = new CdpFrame(this, frameId, void 0, this.#client);
      }
      this._frameTree.addFrame(frame);
    }
    frame = await this._frameTree.waitForFrame(frameId);
    frame._navigated(framePayload);
    this.emit(FrameManagerEvent.FrameNavigated, frame);
    frame.emit(FrameEvent.FrameNavigated, navigationType);
  }
  async #createIsolatedWorld(session, name) {
    const key = `${session.id()}:${name}`;
    if (this.#isolatedWorlds.has(key)) {
      return;
    }
    await session.send("Page.addScriptToEvaluateOnNewDocument", {
      source: `//# sourceURL=${PuppeteerURL.INTERNAL_URL}`,
      worldName: name
    });
    await Promise.all(this.frames().filter((frame) => {
      return frame.client === session;
    }).map((frame) => {
      return session.send("Page.createIsolatedWorld", {
        frameId: frame._id,
        worldName: name,
        grantUniveralAccess: true
      }).catch(debugError);
    }));
    this.#isolatedWorlds.add(key);
  }
  #onFrameNavigatedWithinDocument(frameId, url) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._navigatedWithinDocument(url);
    this.emit(FrameManagerEvent.FrameNavigatedWithinDocument, frame);
    frame.emit(FrameEvent.FrameNavigatedWithinDocument, void 0);
    this.emit(FrameManagerEvent.FrameNavigated, frame);
    frame.emit(FrameEvent.FrameNavigated, "Navigation");
  }
  #onFrameDetached(frameId, reason) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    switch (reason) {
      case "remove":
        this.#removeFramesRecursively(frame);
        break;
      case "swap":
        this.emit(FrameManagerEvent.FrameSwapped, frame);
        frame.emit(FrameEvent.FrameSwapped, void 0);
        break;
    }
  }
  #onExecutionContextCreated(contextPayload, session) {
    const auxData = contextPayload.auxData;
    const frameId = auxData && auxData.frameId;
    const frame = typeof frameId === "string" ? this.frame(frameId) : void 0;
    let world;
    if (frame) {
      if (frame.client !== session) {
        return;
      }
      if (contextPayload.auxData && contextPayload.auxData["isDefault"]) {
        world = frame.worlds[MAIN_WORLD];
      } else if (contextPayload.name === UTILITY_WORLD_NAME && !frame.worlds[PUPPETEER_WORLD].hasContext()) {
        world = frame.worlds[PUPPETEER_WORLD];
      }
    }
    if (!world) {
      return;
    }
    const context3 = new ExecutionContext(frame?.client || this.#client, contextPayload, world);
    world.setContext(context3);
  }
  #removeFramesRecursively(frame) {
    for (const child of frame.childFrames()) {
      this.#removeFramesRecursively(child);
    }
    frame[disposeSymbol]();
    this._frameTree.removeFrame(frame);
    this.emit(FrameManagerEvent.FrameDetached, frame);
    frame.emit(FrameEvent.FrameDetached, frame);
  }
};
__name(FrameManager, "FrameManager");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Input.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Input.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Keyboard = class {
  /**
   * @internal
   */
  constructor() {
  }
};
__name(Keyboard, "Keyboard");
var MouseButton = Object.freeze({
  Left: "left",
  Right: "right",
  Middle: "middle",
  Back: "back",
  Forward: "forward"
});
var Mouse = class {
  /**
   * @internal
   */
  constructor() {
  }
};
__name(Mouse, "Mouse");
var Touchscreen = class {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * Dispatches a `touchstart` and `touchend` event.
   * @param x - Horizontal position of the tap.
   * @param y - Vertical position of the tap.
   */
  async tap(x, y) {
    await this.touchStart(x, y);
    await this.touchEnd();
  }
};
__name(Touchscreen, "Touchscreen");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/USKeyboardLayout.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var _keyDefinitions = {
  "0": { keyCode: 48, key: "0", code: "Digit0" },
  "1": { keyCode: 49, key: "1", code: "Digit1" },
  "2": { keyCode: 50, key: "2", code: "Digit2" },
  "3": { keyCode: 51, key: "3", code: "Digit3" },
  "4": { keyCode: 52, key: "4", code: "Digit4" },
  "5": { keyCode: 53, key: "5", code: "Digit5" },
  "6": { keyCode: 54, key: "6", code: "Digit6" },
  "7": { keyCode: 55, key: "7", code: "Digit7" },
  "8": { keyCode: 56, key: "8", code: "Digit8" },
  "9": { keyCode: 57, key: "9", code: "Digit9" },
  Power: { key: "Power", code: "Power" },
  Eject: { key: "Eject", code: "Eject" },
  Abort: { keyCode: 3, code: "Abort", key: "Cancel" },
  Help: { keyCode: 6, code: "Help", key: "Help" },
  Backspace: { keyCode: 8, code: "Backspace", key: "Backspace" },
  Tab: { keyCode: 9, code: "Tab", key: "Tab" },
  Numpad5: {
    keyCode: 12,
    shiftKeyCode: 101,
    key: "Clear",
    code: "Numpad5",
    shiftKey: "5",
    location: 3
  },
  NumpadEnter: {
    keyCode: 13,
    code: "NumpadEnter",
    key: "Enter",
    text: "\r",
    location: 3
  },
  Enter: { keyCode: 13, code: "Enter", key: "Enter", text: "\r" },
  "\r": { keyCode: 13, code: "Enter", key: "Enter", text: "\r" },
  "\n": { keyCode: 13, code: "Enter", key: "Enter", text: "\r" },
  ShiftLeft: { keyCode: 16, code: "ShiftLeft", key: "Shift", location: 1 },
  ShiftRight: { keyCode: 16, code: "ShiftRight", key: "Shift", location: 2 },
  ControlLeft: {
    keyCode: 17,
    code: "ControlLeft",
    key: "Control",
    location: 1
  },
  ControlRight: {
    keyCode: 17,
    code: "ControlRight",
    key: "Control",
    location: 2
  },
  AltLeft: { keyCode: 18, code: "AltLeft", key: "Alt", location: 1 },
  AltRight: { keyCode: 18, code: "AltRight", key: "Alt", location: 2 },
  Pause: { keyCode: 19, code: "Pause", key: "Pause" },
  CapsLock: { keyCode: 20, code: "CapsLock", key: "CapsLock" },
  Escape: { keyCode: 27, code: "Escape", key: "Escape" },
  Convert: { keyCode: 28, code: "Convert", key: "Convert" },
  NonConvert: { keyCode: 29, code: "NonConvert", key: "NonConvert" },
  Space: { keyCode: 32, code: "Space", key: " " },
  Numpad9: {
    keyCode: 33,
    shiftKeyCode: 105,
    key: "PageUp",
    code: "Numpad9",
    shiftKey: "9",
    location: 3
  },
  PageUp: { keyCode: 33, code: "PageUp", key: "PageUp" },
  Numpad3: {
    keyCode: 34,
    shiftKeyCode: 99,
    key: "PageDown",
    code: "Numpad3",
    shiftKey: "3",
    location: 3
  },
  PageDown: { keyCode: 34, code: "PageDown", key: "PageDown" },
  End: { keyCode: 35, code: "End", key: "End" },
  Numpad1: {
    keyCode: 35,
    shiftKeyCode: 97,
    key: "End",
    code: "Numpad1",
    shiftKey: "1",
    location: 3
  },
  Home: { keyCode: 36, code: "Home", key: "Home" },
  Numpad7: {
    keyCode: 36,
    shiftKeyCode: 103,
    key: "Home",
    code: "Numpad7",
    shiftKey: "7",
    location: 3
  },
  ArrowLeft: { keyCode: 37, code: "ArrowLeft", key: "ArrowLeft" },
  Numpad4: {
    keyCode: 37,
    shiftKeyCode: 100,
    key: "ArrowLeft",
    code: "Numpad4",
    shiftKey: "4",
    location: 3
  },
  Numpad8: {
    keyCode: 38,
    shiftKeyCode: 104,
    key: "ArrowUp",
    code: "Numpad8",
    shiftKey: "8",
    location: 3
  },
  ArrowUp: { keyCode: 38, code: "ArrowUp", key: "ArrowUp" },
  ArrowRight: { keyCode: 39, code: "ArrowRight", key: "ArrowRight" },
  Numpad6: {
    keyCode: 39,
    shiftKeyCode: 102,
    key: "ArrowRight",
    code: "Numpad6",
    shiftKey: "6",
    location: 3
  },
  Numpad2: {
    keyCode: 40,
    shiftKeyCode: 98,
    key: "ArrowDown",
    code: "Numpad2",
    shiftKey: "2",
    location: 3
  },
  ArrowDown: { keyCode: 40, code: "ArrowDown", key: "ArrowDown" },
  Select: { keyCode: 41, code: "Select", key: "Select" },
  Open: { keyCode: 43, code: "Open", key: "Execute" },
  PrintScreen: { keyCode: 44, code: "PrintScreen", key: "PrintScreen" },
  Insert: { keyCode: 45, code: "Insert", key: "Insert" },
  Numpad0: {
    keyCode: 45,
    shiftKeyCode: 96,
    key: "Insert",
    code: "Numpad0",
    shiftKey: "0",
    location: 3
  },
  Delete: { keyCode: 46, code: "Delete", key: "Delete" },
  NumpadDecimal: {
    keyCode: 46,
    shiftKeyCode: 110,
    code: "NumpadDecimal",
    key: "\0",
    shiftKey: ".",
    location: 3
  },
  Digit0: { keyCode: 48, code: "Digit0", shiftKey: ")", key: "0" },
  Digit1: { keyCode: 49, code: "Digit1", shiftKey: "!", key: "1" },
  Digit2: { keyCode: 50, code: "Digit2", shiftKey: "@", key: "2" },
  Digit3: { keyCode: 51, code: "Digit3", shiftKey: "#", key: "3" },
  Digit4: { keyCode: 52, code: "Digit4", shiftKey: "$", key: "4" },
  Digit5: { keyCode: 53, code: "Digit5", shiftKey: "%", key: "5" },
  Digit6: { keyCode: 54, code: "Digit6", shiftKey: "^", key: "6" },
  Digit7: { keyCode: 55, code: "Digit7", shiftKey: "&", key: "7" },
  Digit8: { keyCode: 56, code: "Digit8", shiftKey: "*", key: "8" },
  Digit9: { keyCode: 57, code: "Digit9", shiftKey: "(", key: "9" },
  KeyA: { keyCode: 65, code: "KeyA", shiftKey: "A", key: "a" },
  KeyB: { keyCode: 66, code: "KeyB", shiftKey: "B", key: "b" },
  KeyC: { keyCode: 67, code: "KeyC", shiftKey: "C", key: "c" },
  KeyD: { keyCode: 68, code: "KeyD", shiftKey: "D", key: "d" },
  KeyE: { keyCode: 69, code: "KeyE", shiftKey: "E", key: "e" },
  KeyF: { keyCode: 70, code: "KeyF", shiftKey: "F", key: "f" },
  KeyG: { keyCode: 71, code: "KeyG", shiftKey: "G", key: "g" },
  KeyH: { keyCode: 72, code: "KeyH", shiftKey: "H", key: "h" },
  KeyI: { keyCode: 73, code: "KeyI", shiftKey: "I", key: "i" },
  KeyJ: { keyCode: 74, code: "KeyJ", shiftKey: "J", key: "j" },
  KeyK: { keyCode: 75, code: "KeyK", shiftKey: "K", key: "k" },
  KeyL: { keyCode: 76, code: "KeyL", shiftKey: "L", key: "l" },
  KeyM: { keyCode: 77, code: "KeyM", shiftKey: "M", key: "m" },
  KeyN: { keyCode: 78, code: "KeyN", shiftKey: "N", key: "n" },
  KeyO: { keyCode: 79, code: "KeyO", shiftKey: "O", key: "o" },
  KeyP: { keyCode: 80, code: "KeyP", shiftKey: "P", key: "p" },
  KeyQ: { keyCode: 81, code: "KeyQ", shiftKey: "Q", key: "q" },
  KeyR: { keyCode: 82, code: "KeyR", shiftKey: "R", key: "r" },
  KeyS: { keyCode: 83, code: "KeyS", shiftKey: "S", key: "s" },
  KeyT: { keyCode: 84, code: "KeyT", shiftKey: "T", key: "t" },
  KeyU: { keyCode: 85, code: "KeyU", shiftKey: "U", key: "u" },
  KeyV: { keyCode: 86, code: "KeyV", shiftKey: "V", key: "v" },
  KeyW: { keyCode: 87, code: "KeyW", shiftKey: "W", key: "w" },
  KeyX: { keyCode: 88, code: "KeyX", shiftKey: "X", key: "x" },
  KeyY: { keyCode: 89, code: "KeyY", shiftKey: "Y", key: "y" },
  KeyZ: { keyCode: 90, code: "KeyZ", shiftKey: "Z", key: "z" },
  MetaLeft: { keyCode: 91, code: "MetaLeft", key: "Meta", location: 1 },
  MetaRight: { keyCode: 92, code: "MetaRight", key: "Meta", location: 2 },
  ContextMenu: { keyCode: 93, code: "ContextMenu", key: "ContextMenu" },
  NumpadMultiply: {
    keyCode: 106,
    code: "NumpadMultiply",
    key: "*",
    location: 3
  },
  NumpadAdd: { keyCode: 107, code: "NumpadAdd", key: "+", location: 3 },
  NumpadSubtract: {
    keyCode: 109,
    code: "NumpadSubtract",
    key: "-",
    location: 3
  },
  NumpadDivide: { keyCode: 111, code: "NumpadDivide", key: "/", location: 3 },
  F1: { keyCode: 112, code: "F1", key: "F1" },
  F2: { keyCode: 113, code: "F2", key: "F2" },
  F3: { keyCode: 114, code: "F3", key: "F3" },
  F4: { keyCode: 115, code: "F4", key: "F4" },
  F5: { keyCode: 116, code: "F5", key: "F5" },
  F6: { keyCode: 117, code: "F6", key: "F6" },
  F7: { keyCode: 118, code: "F7", key: "F7" },
  F8: { keyCode: 119, code: "F8", key: "F8" },
  F9: { keyCode: 120, code: "F9", key: "F9" },
  F10: { keyCode: 121, code: "F10", key: "F10" },
  F11: { keyCode: 122, code: "F11", key: "F11" },
  F12: { keyCode: 123, code: "F12", key: "F12" },
  F13: { keyCode: 124, code: "F13", key: "F13" },
  F14: { keyCode: 125, code: "F14", key: "F14" },
  F15: { keyCode: 126, code: "F15", key: "F15" },
  F16: { keyCode: 127, code: "F16", key: "F16" },
  F17: { keyCode: 128, code: "F17", key: "F17" },
  F18: { keyCode: 129, code: "F18", key: "F18" },
  F19: { keyCode: 130, code: "F19", key: "F19" },
  F20: { keyCode: 131, code: "F20", key: "F20" },
  F21: { keyCode: 132, code: "F21", key: "F21" },
  F22: { keyCode: 133, code: "F22", key: "F22" },
  F23: { keyCode: 134, code: "F23", key: "F23" },
  F24: { keyCode: 135, code: "F24", key: "F24" },
  NumLock: { keyCode: 144, code: "NumLock", key: "NumLock" },
  ScrollLock: { keyCode: 145, code: "ScrollLock", key: "ScrollLock" },
  AudioVolumeMute: {
    keyCode: 173,
    code: "AudioVolumeMute",
    key: "AudioVolumeMute"
  },
  AudioVolumeDown: {
    keyCode: 174,
    code: "AudioVolumeDown",
    key: "AudioVolumeDown"
  },
  AudioVolumeUp: { keyCode: 175, code: "AudioVolumeUp", key: "AudioVolumeUp" },
  MediaTrackNext: {
    keyCode: 176,
    code: "MediaTrackNext",
    key: "MediaTrackNext"
  },
  MediaTrackPrevious: {
    keyCode: 177,
    code: "MediaTrackPrevious",
    key: "MediaTrackPrevious"
  },
  MediaStop: { keyCode: 178, code: "MediaStop", key: "MediaStop" },
  MediaPlayPause: {
    keyCode: 179,
    code: "MediaPlayPause",
    key: "MediaPlayPause"
  },
  Semicolon: { keyCode: 186, code: "Semicolon", shiftKey: ":", key: ";" },
  Equal: { keyCode: 187, code: "Equal", shiftKey: "+", key: "=" },
  NumpadEqual: { keyCode: 187, code: "NumpadEqual", key: "=", location: 3 },
  Comma: { keyCode: 188, code: "Comma", shiftKey: "<", key: "," },
  Minus: { keyCode: 189, code: "Minus", shiftKey: "_", key: "-" },
  Period: { keyCode: 190, code: "Period", shiftKey: ">", key: "." },
  Slash: { keyCode: 191, code: "Slash", shiftKey: "?", key: "/" },
  Backquote: { keyCode: 192, code: "Backquote", shiftKey: "~", key: "`" },
  BracketLeft: { keyCode: 219, code: "BracketLeft", shiftKey: "{", key: "[" },
  Backslash: { keyCode: 220, code: "Backslash", shiftKey: "|", key: "\\" },
  BracketRight: { keyCode: 221, code: "BracketRight", shiftKey: "}", key: "]" },
  Quote: { keyCode: 222, code: "Quote", shiftKey: '"', key: "'" },
  AltGraph: { keyCode: 225, code: "AltGraph", key: "AltGraph" },
  Props: { keyCode: 247, code: "Props", key: "CrSel" },
  Cancel: { keyCode: 3, key: "Cancel", code: "Abort" },
  Clear: { keyCode: 12, key: "Clear", code: "Numpad5", location: 3 },
  Shift: { keyCode: 16, key: "Shift", code: "ShiftLeft", location: 1 },
  Control: { keyCode: 17, key: "Control", code: "ControlLeft", location: 1 },
  Alt: { keyCode: 18, key: "Alt", code: "AltLeft", location: 1 },
  Accept: { keyCode: 30, key: "Accept" },
  ModeChange: { keyCode: 31, key: "ModeChange" },
  " ": { keyCode: 32, key: " ", code: "Space" },
  Print: { keyCode: 42, key: "Print" },
  Execute: { keyCode: 43, key: "Execute", code: "Open" },
  "\0": { keyCode: 46, key: "\0", code: "NumpadDecimal", location: 3 },
  a: { keyCode: 65, key: "a", code: "KeyA" },
  b: { keyCode: 66, key: "b", code: "KeyB" },
  c: { keyCode: 67, key: "c", code: "KeyC" },
  d: { keyCode: 68, key: "d", code: "KeyD" },
  e: { keyCode: 69, key: "e", code: "KeyE" },
  f: { keyCode: 70, key: "f", code: "KeyF" },
  g: { keyCode: 71, key: "g", code: "KeyG" },
  h: { keyCode: 72, key: "h", code: "KeyH" },
  i: { keyCode: 73, key: "i", code: "KeyI" },
  j: { keyCode: 74, key: "j", code: "KeyJ" },
  k: { keyCode: 75, key: "k", code: "KeyK" },
  l: { keyCode: 76, key: "l", code: "KeyL" },
  m: { keyCode: 77, key: "m", code: "KeyM" },
  n: { keyCode: 78, key: "n", code: "KeyN" },
  o: { keyCode: 79, key: "o", code: "KeyO" },
  p: { keyCode: 80, key: "p", code: "KeyP" },
  q: { keyCode: 81, key: "q", code: "KeyQ" },
  r: { keyCode: 82, key: "r", code: "KeyR" },
  s: { keyCode: 83, key: "s", code: "KeyS" },
  t: { keyCode: 84, key: "t", code: "KeyT" },
  u: { keyCode: 85, key: "u", code: "KeyU" },
  v: { keyCode: 86, key: "v", code: "KeyV" },
  w: { keyCode: 87, key: "w", code: "KeyW" },
  x: { keyCode: 88, key: "x", code: "KeyX" },
  y: { keyCode: 89, key: "y", code: "KeyY" },
  z: { keyCode: 90, key: "z", code: "KeyZ" },
  Meta: { keyCode: 91, key: "Meta", code: "MetaLeft", location: 1 },
  "*": { keyCode: 106, key: "*", code: "NumpadMultiply", location: 3 },
  "+": { keyCode: 107, key: "+", code: "NumpadAdd", location: 3 },
  "-": { keyCode: 109, key: "-", code: "NumpadSubtract", location: 3 },
  "/": { keyCode: 111, key: "/", code: "NumpadDivide", location: 3 },
  ";": { keyCode: 186, key: ";", code: "Semicolon" },
  "=": { keyCode: 187, key: "=", code: "Equal" },
  ",": { keyCode: 188, key: ",", code: "Comma" },
  ".": { keyCode: 190, key: ".", code: "Period" },
  "`": { keyCode: 192, key: "`", code: "Backquote" },
  "[": { keyCode: 219, key: "[", code: "BracketLeft" },
  "\\": { keyCode: 220, key: "\\", code: "Backslash" },
  "]": { keyCode: 221, key: "]", code: "BracketRight" },
  "'": { keyCode: 222, key: "'", code: "Quote" },
  Attn: { keyCode: 246, key: "Attn" },
  CrSel: { keyCode: 247, key: "CrSel", code: "Props" },
  ExSel: { keyCode: 248, key: "ExSel" },
  EraseEof: { keyCode: 249, key: "EraseEof" },
  Play: { keyCode: 250, key: "Play" },
  ZoomOut: { keyCode: 251, key: "ZoomOut" },
  ")": { keyCode: 48, key: ")", code: "Digit0" },
  "!": { keyCode: 49, key: "!", code: "Digit1" },
  "@": { keyCode: 50, key: "@", code: "Digit2" },
  "#": { keyCode: 51, key: "#", code: "Digit3" },
  $: { keyCode: 52, key: "$", code: "Digit4" },
  "%": { keyCode: 53, key: "%", code: "Digit5" },
  "^": { keyCode: 54, key: "^", code: "Digit6" },
  "&": { keyCode: 55, key: "&", code: "Digit7" },
  "(": { keyCode: 57, key: "(", code: "Digit9" },
  A: { keyCode: 65, key: "A", code: "KeyA" },
  B: { keyCode: 66, key: "B", code: "KeyB" },
  C: { keyCode: 67, key: "C", code: "KeyC" },
  D: { keyCode: 68, key: "D", code: "KeyD" },
  E: { keyCode: 69, key: "E", code: "KeyE" },
  F: { keyCode: 70, key: "F", code: "KeyF" },
  G: { keyCode: 71, key: "G", code: "KeyG" },
  H: { keyCode: 72, key: "H", code: "KeyH" },
  I: { keyCode: 73, key: "I", code: "KeyI" },
  J: { keyCode: 74, key: "J", code: "KeyJ" },
  K: { keyCode: 75, key: "K", code: "KeyK" },
  L: { keyCode: 76, key: "L", code: "KeyL" },
  M: { keyCode: 77, key: "M", code: "KeyM" },
  N: { keyCode: 78, key: "N", code: "KeyN" },
  O: { keyCode: 79, key: "O", code: "KeyO" },
  P: { keyCode: 80, key: "P", code: "KeyP" },
  Q: { keyCode: 81, key: "Q", code: "KeyQ" },
  R: { keyCode: 82, key: "R", code: "KeyR" },
  S: { keyCode: 83, key: "S", code: "KeyS" },
  T: { keyCode: 84, key: "T", code: "KeyT" },
  U: { keyCode: 85, key: "U", code: "KeyU" },
  V: { keyCode: 86, key: "V", code: "KeyV" },
  W: { keyCode: 87, key: "W", code: "KeyW" },
  X: { keyCode: 88, key: "X", code: "KeyX" },
  Y: { keyCode: 89, key: "Y", code: "KeyY" },
  Z: { keyCode: 90, key: "Z", code: "KeyZ" },
  ":": { keyCode: 186, key: ":", code: "Semicolon" },
  "<": { keyCode: 188, key: "<", code: "Comma" },
  _: { keyCode: 189, key: "_", code: "Minus" },
  ">": { keyCode: 190, key: ">", code: "Period" },
  "?": { keyCode: 191, key: "?", code: "Slash" },
  "~": { keyCode: 192, key: "~", code: "Backquote" },
  "{": { keyCode: 219, key: "{", code: "BracketLeft" },
  "|": { keyCode: 220, key: "|", code: "Backslash" },
  "}": { keyCode: 221, key: "}", code: "BracketRight" },
  '"': { keyCode: 222, key: '"', code: "Quote" },
  SoftLeft: { key: "SoftLeft", code: "SoftLeft", location: 4 },
  SoftRight: { key: "SoftRight", code: "SoftRight", location: 4 },
  Camera: { keyCode: 44, key: "Camera", code: "Camera", location: 4 },
  Call: { key: "Call", code: "Call", location: 4 },
  EndCall: { keyCode: 95, key: "EndCall", code: "EndCall", location: 4 },
  VolumeDown: {
    keyCode: 182,
    key: "VolumeDown",
    code: "VolumeDown",
    location: 4
  },
  VolumeUp: { keyCode: 183, key: "VolumeUp", code: "VolumeUp", location: 4 }
};

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Input.js
var CdpKeyboard = class extends Keyboard {
  #client;
  #pressedKeys = /* @__PURE__ */ new Set();
  _modifiers = 0;
  constructor(client) {
    super();
    this.#client = client;
  }
  updateClient(client) {
    this.#client = client;
  }
  async down(key, options = {
    text: void 0,
    commands: []
  }) {
    const description = this.#keyDescriptionForString(key);
    const autoRepeat = this.#pressedKeys.has(description.code);
    this.#pressedKeys.add(description.code);
    this._modifiers |= this.#modifierBit(description.key);
    const text = options.text === void 0 ? description.text : options.text;
    await this.#client.send("Input.dispatchKeyEvent", {
      type: text ? "keyDown" : "rawKeyDown",
      modifiers: this._modifiers,
      windowsVirtualKeyCode: description.keyCode,
      code: description.code,
      key: description.key,
      text,
      unmodifiedText: text,
      autoRepeat,
      location: description.location,
      isKeypad: description.location === 3,
      commands: options.commands
    });
  }
  #modifierBit(key) {
    if (key === "Alt") {
      return 1;
    }
    if (key === "Control") {
      return 2;
    }
    if (key === "Meta") {
      return 4;
    }
    if (key === "Shift") {
      return 8;
    }
    return 0;
  }
  #keyDescriptionForString(keyString) {
    const shift = this._modifiers & 8;
    const description = {
      key: "",
      keyCode: 0,
      code: "",
      text: "",
      location: 0
    };
    const definition = _keyDefinitions[keyString];
    assert3(definition, `Unknown key: "${keyString}"`);
    if (definition.key) {
      description.key = definition.key;
    }
    if (shift && definition.shiftKey) {
      description.key = definition.shiftKey;
    }
    if (definition.keyCode) {
      description.keyCode = definition.keyCode;
    }
    if (shift && definition.shiftKeyCode) {
      description.keyCode = definition.shiftKeyCode;
    }
    if (definition.code) {
      description.code = definition.code;
    }
    if (definition.location) {
      description.location = definition.location;
    }
    if (description.key.length === 1) {
      description.text = description.key;
    }
    if (definition.text) {
      description.text = definition.text;
    }
    if (shift && definition.shiftText) {
      description.text = definition.shiftText;
    }
    if (this._modifiers & ~8) {
      description.text = "";
    }
    return description;
  }
  async up(key) {
    const description = this.#keyDescriptionForString(key);
    this._modifiers &= ~this.#modifierBit(description.key);
    this.#pressedKeys.delete(description.code);
    await this.#client.send("Input.dispatchKeyEvent", {
      type: "keyUp",
      modifiers: this._modifiers,
      key: description.key,
      windowsVirtualKeyCode: description.keyCode,
      code: description.code,
      location: description.location
    });
  }
  async sendCharacter(char) {
    await this.#client.send("Input.insertText", { text: char });
  }
  charIsKey(char) {
    return !!_keyDefinitions[char];
  }
  async type(text, options = {}) {
    const delay = options.delay || void 0;
    for (const char of text) {
      if (this.charIsKey(char)) {
        await this.press(char, { delay });
      } else {
        if (delay) {
          await new Promise((f) => {
            return setTimeout(f, delay);
          });
        }
        await this.sendCharacter(char);
      }
    }
  }
  async press(key, options = {}) {
    const { delay = null } = options;
    await this.down(key, options);
    if (delay) {
      await new Promise((f) => {
        return setTimeout(f, options.delay);
      });
    }
    await this.up(key);
  }
};
__name(CdpKeyboard, "CdpKeyboard");
var getFlag = /* @__PURE__ */ __name((button) => {
  switch (button) {
    case MouseButton.Left:
      return 1;
    case MouseButton.Right:
      return 2;
    case MouseButton.Middle:
      return 4;
    case MouseButton.Back:
      return 8;
    case MouseButton.Forward:
      return 16;
  }
}, "getFlag");
var getButtonFromPressedButtons = /* @__PURE__ */ __name((buttons) => {
  if (buttons & 1) {
    return MouseButton.Left;
  } else if (buttons & 2) {
    return MouseButton.Right;
  } else if (buttons & 4) {
    return MouseButton.Middle;
  } else if (buttons & 8) {
    return MouseButton.Back;
  } else if (buttons & 16) {
    return MouseButton.Forward;
  }
  return "none";
}, "getButtonFromPressedButtons");
var CdpMouse = class extends Mouse {
  #client;
  #keyboard;
  constructor(client, keyboard) {
    super();
    this.#client = client;
    this.#keyboard = keyboard;
  }
  updateClient(client) {
    this.#client = client;
  }
  #_state = {
    position: { x: 0, y: 0 },
    buttons: 0
  };
  get #state() {
    return Object.assign({ ...this.#_state }, ...this.#transactions);
  }
  // Transactions can run in parallel, so we store each of thme in this array.
  #transactions = [];
  #createTransaction() {
    const transaction = {};
    this.#transactions.push(transaction);
    const popTransaction = /* @__PURE__ */ __name(() => {
      this.#transactions.splice(this.#transactions.indexOf(transaction), 1);
    }, "popTransaction");
    return {
      update: (updates) => {
        Object.assign(transaction, updates);
      },
      commit: () => {
        this.#_state = { ...this.#_state, ...transaction };
        popTransaction();
      },
      rollback: popTransaction
    };
  }
  /**
   * This is a shortcut for a typical update, commit/rollback lifecycle based on
   * the error of the action.
   */
  async #withTransaction(action) {
    const { update, commit, rollback } = this.#createTransaction();
    try {
      await action(update);
      commit();
    } catch (error3) {
      rollback();
      throw error3;
    }
  }
  async reset() {
    const actions = [];
    for (const [flag, button] of [
      [1, MouseButton.Left],
      [4, MouseButton.Middle],
      [2, MouseButton.Right],
      [16, MouseButton.Forward],
      [8, MouseButton.Back]
    ]) {
      if (this.#state.buttons & flag) {
        actions.push(this.up({ button }));
      }
    }
    if (this.#state.position.x !== 0 || this.#state.position.y !== 0) {
      actions.push(this.move(0, 0));
    }
    await Promise.all(actions);
  }
  async move(x, y, options = {}) {
    const { steps = 1 } = options;
    const from2 = this.#state.position;
    const to = { x, y };
    for (let i = 1; i <= steps; i++) {
      await this.#withTransaction((updateState) => {
        updateState({
          position: {
            x: from2.x + (to.x - from2.x) * (i / steps),
            y: from2.y + (to.y - from2.y) * (i / steps)
          }
        });
        const { buttons, position } = this.#state;
        return this.#client.send("Input.dispatchMouseEvent", {
          type: "mouseMoved",
          modifiers: this.#keyboard._modifiers,
          buttons,
          button: getButtonFromPressedButtons(buttons),
          ...position
        });
      });
    }
  }
  async down(options = {}) {
    const { button = MouseButton.Left, clickCount = 1 } = options;
    const flag = getFlag(button);
    if (!flag) {
      throw new Error(`Unsupported mouse button: ${button}`);
    }
    if (this.#state.buttons & flag) {
      throw new Error(`'${button}' is already pressed.`);
    }
    await this.#withTransaction((updateState) => {
      updateState({
        buttons: this.#state.buttons | flag
      });
      const { buttons, position } = this.#state;
      return this.#client.send("Input.dispatchMouseEvent", {
        type: "mousePressed",
        modifiers: this.#keyboard._modifiers,
        clickCount,
        buttons,
        button,
        ...position
      });
    });
  }
  async up(options = {}) {
    const { button = MouseButton.Left, clickCount = 1 } = options;
    const flag = getFlag(button);
    if (!flag) {
      throw new Error(`Unsupported mouse button: ${button}`);
    }
    if (!(this.#state.buttons & flag)) {
      throw new Error(`'${button}' is not pressed.`);
    }
    await this.#withTransaction((updateState) => {
      updateState({
        buttons: this.#state.buttons & ~flag
      });
      const { buttons, position } = this.#state;
      return this.#client.send("Input.dispatchMouseEvent", {
        type: "mouseReleased",
        modifiers: this.#keyboard._modifiers,
        clickCount,
        buttons,
        button,
        ...position
      });
    });
  }
  async click(x, y, options = {}) {
    const { delay, count: count3 = 1, clickCount = count3 } = options;
    if (count3 < 1) {
      throw new Error("Click must occur a positive number of times.");
    }
    const actions = [this.move(x, y)];
    if (clickCount === count3) {
      for (let i = 1; i < count3; ++i) {
        actions.push(this.down({ ...options, clickCount: i }), this.up({ ...options, clickCount: i }));
      }
    }
    actions.push(this.down({ ...options, clickCount }));
    if (typeof delay === "number") {
      await Promise.all(actions);
      actions.length = 0;
      await new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }
    actions.push(this.up({ ...options, clickCount }));
    await Promise.all(actions);
  }
  async wheel(options = {}) {
    const { deltaX = 0, deltaY = 0 } = options;
    const { position, buttons } = this.#state;
    await this.#client.send("Input.dispatchMouseEvent", {
      type: "mouseWheel",
      pointerType: "mouse",
      modifiers: this.#keyboard._modifiers,
      deltaY,
      deltaX,
      buttons,
      ...position
    });
  }
  async drag(start, target) {
    const promise = new Promise((resolve) => {
      this.#client.once("Input.dragIntercepted", (event) => {
        return resolve(event.data);
      });
    });
    await this.move(start.x, start.y);
    await this.down();
    await this.move(target.x, target.y);
    return await promise;
  }
  async dragEnter(target, data) {
    await this.#client.send("Input.dispatchDragEvent", {
      type: "dragEnter",
      x: target.x,
      y: target.y,
      modifiers: this.#keyboard._modifiers,
      data
    });
  }
  async dragOver(target, data) {
    await this.#client.send("Input.dispatchDragEvent", {
      type: "dragOver",
      x: target.x,
      y: target.y,
      modifiers: this.#keyboard._modifiers,
      data
    });
  }
  async drop(target, data) {
    await this.#client.send("Input.dispatchDragEvent", {
      type: "drop",
      x: target.x,
      y: target.y,
      modifiers: this.#keyboard._modifiers,
      data
    });
  }
  async dragAndDrop(start, target, options = {}) {
    const { delay = null } = options;
    const data = await this.drag(start, target);
    await this.dragEnter(target, data);
    await this.dragOver(target, data);
    if (delay) {
      await new Promise((resolve) => {
        return setTimeout(resolve, delay);
      });
    }
    await this.drop(target, data);
    await this.up();
  }
};
__name(CdpMouse, "CdpMouse");
var CdpTouchscreen = class extends Touchscreen {
  #client;
  #keyboard;
  constructor(client, keyboard) {
    super();
    this.#client = client;
    this.#keyboard = keyboard;
  }
  updateClient(client) {
    this.#client = client;
  }
  async touchStart(x, y) {
    await this.#client.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [
        {
          x: Math.round(x),
          y: Math.round(y),
          radiusX: 0.5,
          radiusY: 0.5,
          force: 0.5
        }
      ],
      modifiers: this.#keyboard._modifiers
    });
  }
  async touchMove(x, y) {
    await this.#client.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [
        {
          x: Math.round(x),
          y: Math.round(y),
          radiusX: 0.5,
          radiusY: 0.5,
          force: 0.5
        }
      ],
      modifiers: this.#keyboard._modifiers
    });
  }
  async touchEnd() {
    await this.#client.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
      modifiers: this.#keyboard._modifiers
    });
  }
};
__name(CdpTouchscreen, "CdpTouchscreen");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Tracing.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Tracing = class {
  #client;
  #recording = false;
  #path;
  /**
   * @internal
   */
  constructor(client) {
    this.#client = client;
  }
  /**
   * @internal
   */
  updateClient(client) {
    this.#client = client;
  }
  /**
   * Starts a trace for the current page.
   * @remarks
   * Only one trace can be active at a time per browser.
   *
   * @param options - Optional `TracingOptions`.
   */
  async start(options = {}) {
    assert3(!this.#recording, "Cannot start recording trace while already recording trace.");
    const defaultCategories = [
      "-*",
      "devtools.timeline",
      "v8.execute",
      "disabled-by-default-devtools.timeline",
      "disabled-by-default-devtools.timeline.frame",
      "toplevel",
      "blink.console",
      "blink.user_timing",
      "latencyInfo",
      "disabled-by-default-devtools.timeline.stack",
      "disabled-by-default-v8.cpu_profiler"
    ];
    const { path, screenshots = false, categories = defaultCategories } = options;
    if (screenshots) {
      categories.push("disabled-by-default-devtools.screenshot");
    }
    const excludedCategories = categories.filter((cat) => {
      return cat.startsWith("-");
    }).map((cat) => {
      return cat.slice(1);
    });
    const includedCategories = categories.filter((cat) => {
      return !cat.startsWith("-");
    });
    this.#path = path;
    this.#recording = true;
    await this.#client.send("Tracing.start", {
      transferMode: "ReturnAsStream",
      traceConfig: {
        excludedCategories,
        includedCategories
      }
    });
  }
  /**
   * Stops a trace started with the `start` method.
   * @returns Promise which resolves to buffer with trace data.
   */
  async stop() {
    const contentDeferred = Deferred.create();
    this.#client.once("Tracing.tracingComplete", async (event) => {
      try {
        assert3(event.stream, 'Missing "stream"');
        const readable = await getReadableFromProtocolStream(this.#client, event.stream);
        const buffer = await getReadableAsBuffer(readable, this.#path);
        contentDeferred.resolve(buffer ?? void 0);
      } catch (error3) {
        if (isErrorLike(error3)) {
          contentDeferred.reject(error3);
        } else {
          contentDeferred.reject(new Error(`Unknown error: ${error3}`));
        }
      }
    });
    await this.#client.send("Tracing.end");
    this.#recording = false;
    return await contentDeferred.valueOrThrow();
  }
};
__name(Tracing, "Tracing");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/WebWorker.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/WebWorker.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var WebWorker = class extends EventEmitter2 {
  /**
   * @internal
   */
  timeoutSettings = new TimeoutSettings();
  #url;
  /**
   * @internal
   */
  constructor(url) {
    super();
    this.#url = url;
  }
  /**
   * The URL of this web worker.
   */
  url() {
    return this.#url;
  }
  /**
   * Evaluates a given function in the {@link WebWorker | worker}.
   *
   * @remarks If the given function returns a promise,
   * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
   *
   * As a rule of thumb, if the return value of the given function is more
   * complicated than a JSON object (e.g. most classes), then
   * {@link WebWorker.evaluate | evaluate} will _likely_ return some truncated
   * value (or `{}`). This is because we are not returning the actual return
   * value, but a deserialized version as a result of transferring the return
   * value through a protocol to Puppeteer.
   *
   * In general, you should use
   * {@link WebWorker.evaluateHandle | evaluateHandle} if
   * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
   * properly or you need a mutable {@link JSHandle | handle} to the return
   * object.
   *
   * @param func - Function to be evaluated.
   * @param args - Arguments to pass into `func`.
   * @returns The result of `func`.
   */
  async evaluate(func, ...args) {
    func = withSourcePuppeteerURLIfNone(this.evaluate.name, func);
    return await this.mainRealm().evaluate(func, ...args);
  }
  /**
   * Evaluates a given function in the {@link WebWorker | worker}.
   *
   * @remarks If the given function returns a promise,
   * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
   *
   * In general, you should use
   * {@link WebWorker.evaluateHandle | evaluateHandle} if
   * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
   * properly or you need a mutable {@link JSHandle | handle} to the return
   * object.
   *
   * @param func - Function to be evaluated.
   * @param args - Arguments to pass into `func`.
   * @returns A {@link JSHandle | handle} to the return value of `func`.
   */
  async evaluateHandle(func, ...args) {
    func = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, func);
    return await this.mainRealm().evaluateHandle(func, ...args);
  }
  async close() {
    throw new UnsupportedOperation("WebWorker.close() is not supported");
  }
};
__name(WebWorker, "WebWorker");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/WebWorker.js
var CdpWebWorker = class extends WebWorker {
  #world;
  #client;
  #id;
  #targetType;
  constructor(client, url, targetId, targetType, consoleAPICalled, exceptionThrown) {
    super(url);
    this.#id = targetId;
    this.#client = client;
    this.#targetType = targetType;
    this.#world = new IsolatedWorld(this, new TimeoutSettings());
    this.#client.once("Runtime.executionContextCreated", async (event) => {
      this.#world.setContext(new ExecutionContext(client, event.context, this.#world));
    });
    this.#world.emitter.on("consoleapicalled", async (event) => {
      try {
        return consoleAPICalled(event.type, event.args.map((object) => {
          return new CdpJSHandle(this.#world, object);
        }), event.stackTrace);
      } catch (err) {
        debugError(err);
      }
    });
    this.#client.on("Runtime.exceptionThrown", exceptionThrown);
    this.#client.once(CDPSessionEvent.Disconnected, () => {
      this.#world.dispose();
    });
    this.#client.send("Runtime.enable").catch(debugError);
  }
  mainRealm() {
    return this.#world;
  }
  get client() {
    return this.#client;
  }
  async close() {
    switch (this.#targetType) {
      case TargetType.SERVICE_WORKER:
      case TargetType.SHARED_WORKER: {
        await this.client.connection()?.send("Target.closeTarget", {
          targetId: this.#id
        });
        await this.client.connection()?.send("Target.detachFromTarget", {
          sessionId: this.client.id()
        });
        break;
      }
      default:
        await this.evaluate(() => {
          self.close();
        });
    }
  }
};
__name(CdpWebWorker, "CdpWebWorker");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Page.js
var __addDisposableResource11 = function(env2, value, async2) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async2) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env2.stack.push({ value, dispose, async: async2 });
  } else if (async2) {
    env2.stack.push({ async: true });
  }
  return value;
};
var __disposeResources11 = function(SuppressedError2) {
  return function(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new SuppressedError2(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    __name(fail, "fail");
    function next() {
      while (env2.stack.length) {
        var rec = env2.stack.pop();
        try {
          var result = rec.dispose && rec.dispose.call(rec.value);
          if (rec.async)
            return Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
        } catch (e) {
          fail(e);
        }
      }
      if (env2.hasError)
        throw env2.error;
    }
    __name(next, "next");
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
function convertConsoleMessageLevel(method) {
  switch (method) {
    case "warning":
      return "warn";
    default:
      return method;
  }
}
__name(convertConsoleMessageLevel, "convertConsoleMessageLevel");
var CdpPage = class extends Page {
  static async _create(client, target, defaultViewport) {
    const page = new CdpPage(client, target);
    await page.#initialize();
    if (defaultViewport) {
      try {
        await page.setViewport(defaultViewport);
      } catch (err) {
        if (isErrorLike(err) && isTargetClosedError(err)) {
          debugError(err);
        } else {
          throw err;
        }
      }
    }
    return page;
  }
  #closed = false;
  #targetManager;
  #primaryTargetClient;
  #primaryTarget;
  #tabTargetClient;
  #tabTarget;
  #keyboard;
  #mouse;
  #touchscreen;
  #accessibility;
  #frameManager;
  #emulationManager;
  #tracing;
  #bindings = /* @__PURE__ */ new Map();
  #exposedFunctions = /* @__PURE__ */ new Map();
  #coverage;
  #viewport;
  #workers = /* @__PURE__ */ new Map();
  #fileChooserDeferreds = /* @__PURE__ */ new Set();
  #sessionCloseDeferred = Deferred.create();
  #serviceWorkerBypassed = false;
  #userDragInterceptionEnabled = false;
  #frameManagerHandlers = [
    [
      FrameManagerEvent.FrameAttached,
      (frame) => {
        this.emit("frameattached", frame);
      }
    ],
    [
      FrameManagerEvent.FrameDetached,
      (frame) => {
        this.emit("framedetached", frame);
      }
    ],
    [
      FrameManagerEvent.FrameNavigated,
      (frame) => {
        this.emit("framenavigated", frame);
      }
    ]
  ];
  #networkManagerHandlers = [
    [
      NetworkManagerEvent.Request,
      (request) => {
        this.emit("request", request);
      }
    ],
    [
      NetworkManagerEvent.RequestServedFromCache,
      (request) => {
        this.emit("requestservedfromcache", request);
      }
    ],
    [
      NetworkManagerEvent.Response,
      (response) => {
        this.emit("response", response);
      }
    ],
    [
      NetworkManagerEvent.RequestFailed,
      (request) => {
        this.emit("requestfailed", request);
      }
    ],
    [
      NetworkManagerEvent.RequestFinished,
      (request) => {
        this.emit("requestfinished", request);
      }
    ]
  ];
  #sessionHandlers = [
    [
      CDPSessionEvent.Disconnected,
      () => {
        this.#sessionCloseDeferred.reject(new TargetCloseError("Target closed"));
      }
    ],
    [
      "Page.domContentEventFired",
      () => {
        return this.emit("domcontentloaded", void 0);
      }
    ],
    [
      "Page.loadEventFired",
      () => {
        return this.emit("load", void 0);
      }
    ],
    ["Page.javascriptDialogOpening", this.#onDialog.bind(this)],
    ["Runtime.exceptionThrown", this.#handleException.bind(this)],
    ["Inspector.targetCrashed", this.#onTargetCrashed.bind(this)],
    ["Performance.metrics", this.#emitMetrics.bind(this)],
    ["Log.entryAdded", this.#onLogEntryAdded.bind(this)],
    ["Page.fileChooserOpened", this.#onFileChooser.bind(this)]
  ];
  constructor(client, target) {
    super();
    this.#primaryTargetClient = client;
    this.#tabTargetClient = client.parentSession();
    assert3(this.#tabTargetClient, "Tab target session is not defined.");
    this.#tabTarget = this.#tabTargetClient._target();
    assert3(this.#tabTarget, "Tab target is not defined.");
    this.#primaryTarget = target;
    this.#targetManager = target._targetManager();
    this.#keyboard = new CdpKeyboard(client);
    this.#mouse = new CdpMouse(client, this.#keyboard);
    this.#touchscreen = new CdpTouchscreen(client, this.#keyboard);
    this.#accessibility = new Accessibility(client);
    this.#frameManager = new FrameManager(client, this, this._timeoutSettings);
    this.#emulationManager = new EmulationManager(client);
    this.#tracing = new Tracing(client);
    this.#coverage = new Coverage(client);
    this.#viewport = null;
    for (const [eventName, handler] of this.#frameManagerHandlers) {
      this.#frameManager.on(eventName, handler);
    }
    this.#frameManager.on(FrameManagerEvent.ConsoleApiCalled, ([world, event]) => {
      this.#onConsoleAPI(world, event);
    });
    this.#frameManager.on(FrameManagerEvent.BindingCalled, ([world, event]) => {
      void this.#onBindingCalled(world, event);
    });
    for (const [eventName, handler] of this.#networkManagerHandlers) {
      this.#frameManager.networkManager.on(eventName, handler);
    }
    this.#tabTargetClient.on(CDPSessionEvent.Swapped, this.#onActivation.bind(this));
    this.#tabTargetClient.on(CDPSessionEvent.Ready, this.#onSecondaryTarget.bind(this));
    this.#targetManager.on("targetGone", this.#onDetachedFromTarget);
    this.#tabTarget._isClosedDeferred.valueOrThrow().then(() => {
      this.#targetManager.off("targetGone", this.#onDetachedFromTarget);
      this.emit("close", void 0);
      this.#closed = true;
    }).catch(debugError);
    this.#setupPrimaryTargetListeners();
  }
  async #onActivation(newSession) {
    this.#primaryTargetClient = newSession;
    assert3(this.#primaryTargetClient instanceof CdpCDPSession, "CDPSession is not instance of CDPSessionImpl");
    this.#primaryTarget = this.#primaryTargetClient._target();
    assert3(this.#primaryTarget, "Missing target on swap");
    this.#keyboard.updateClient(newSession);
    this.#mouse.updateClient(newSession);
    this.#touchscreen.updateClient(newSession);
    this.#accessibility.updateClient(newSession);
    this.#emulationManager.updateClient(newSession);
    this.#tracing.updateClient(newSession);
    this.#coverage.updateClient(newSession);
    await this.#frameManager.swapFrameTree(newSession);
    this.#setupPrimaryTargetListeners();
  }
  async #onSecondaryTarget(session) {
    assert3(session instanceof CdpCDPSession);
    if (session._target()._subtype() !== "prerender") {
      return;
    }
    this.#frameManager.registerSpeculativeSession(session).catch(debugError);
    this.#emulationManager.registerSpeculativeSession(session).catch(debugError);
  }
  /**
   * Sets up listeners for the primary target. The primary target can change
   * during a navigation to a prerended page.
   */
  #setupPrimaryTargetListeners() {
    this.#primaryTargetClient.on(CDPSessionEvent.Ready, this.#onAttachedToTarget);
    for (const [eventName, handler] of this.#sessionHandlers) {
      this.#primaryTargetClient.on(eventName, handler);
    }
  }
  #onDetachedFromTarget = (target) => {
    const sessionId = target._session()?.id();
    const worker = this.#workers.get(sessionId);
    if (!worker) {
      return;
    }
    this.#workers.delete(sessionId);
    this.emit("workerdestroyed", worker);
  };
  #onAttachedToTarget = (session) => {
    assert3(session instanceof CdpCDPSession);
    this.#frameManager.onAttachedToTarget(session._target());
    if (session._target()._getTargetInfo().type === "worker") {
      const worker = new CdpWebWorker(session, session._target().url(), session._target()._targetId, session._target().type(), this.#addConsoleMessage.bind(this), this.#handleException.bind(this));
      this.#workers.set(session.id(), worker);
      this.emit("workercreated", worker);
    }
    session.on(CDPSessionEvent.Ready, this.#onAttachedToTarget);
  };
  async #initialize() {
    try {
      await Promise.all([
        this.#frameManager.initialize(this.#primaryTargetClient),
        this.#primaryTargetClient.send("Performance.enable"),
        this.#primaryTargetClient.send("Log.enable")
      ]);
    } catch (err) {
      if (isErrorLike(err) && isTargetClosedError(err)) {
        debugError(err);
      } else {
        throw err;
      }
    }
  }
  async #onFileChooser(event) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      if (!this.#fileChooserDeferreds.size) {
        return;
      }
      const frame = this.#frameManager.frame(event.frameId);
      assert3(frame, "This should never happen.");
      const handle = __addDisposableResource11(env_1, await frame.worlds[MAIN_WORLD].adoptBackendNode(event.backendNodeId), false);
      const fileChooser = new FileChooser(handle.move(), event);
      for (const promise of this.#fileChooserDeferreds) {
        promise.resolve(fileChooser);
      }
      this.#fileChooserDeferreds.clear();
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources11(env_1);
    }
  }
  _client() {
    return this.#primaryTargetClient;
  }
  isServiceWorkerBypassed() {
    return this.#serviceWorkerBypassed;
  }
  isDragInterceptionEnabled() {
    return this.#userDragInterceptionEnabled;
  }
  isJavaScriptEnabled() {
    return this.#emulationManager.javascriptEnabled;
  }
  async waitForFileChooser(options = {}) {
    const needsEnable = this.#fileChooserDeferreds.size === 0;
    const { timeout: timeout2 = this._timeoutSettings.timeout() } = options;
    const deferred = Deferred.create({
      message: `Waiting for \`FileChooser\` failed: ${timeout2}ms exceeded`,
      timeout: timeout2
    });
    this.#fileChooserDeferreds.add(deferred);
    let enablePromise;
    if (needsEnable) {
      enablePromise = this.#primaryTargetClient.send("Page.setInterceptFileChooserDialog", {
        enabled: true
      });
    }
    try {
      const [result] = await Promise.all([
        deferred.valueOrThrow(),
        enablePromise
      ]);
      return result;
    } catch (error3) {
      this.#fileChooserDeferreds.delete(deferred);
      throw error3;
    }
  }
  async setGeolocation(options) {
    return await this.#emulationManager.setGeolocation(options);
  }
  target() {
    return this.#primaryTarget;
  }
  browser() {
    return this.#primaryTarget.browser();
  }
  browserContext() {
    return this.#primaryTarget.browserContext();
  }
  #onTargetCrashed() {
    this.emit("error", new Error("Page crashed!"));
  }
  #onLogEntryAdded(event) {
    const { level, text, args, source: source2, url, lineNumber } = event.entry;
    if (args) {
      args.map((arg) => {
        void releaseObject(this.#primaryTargetClient, arg);
      });
    }
    if (source2 !== "worker") {
      this.emit("console", new ConsoleMessage(convertConsoleMessageLevel(level), text, [], [{ url, lineNumber }]));
    }
  }
  mainFrame() {
    return this.#frameManager.mainFrame();
  }
  get keyboard() {
    return this.#keyboard;
  }
  get touchscreen() {
    return this.#touchscreen;
  }
  get coverage() {
    return this.#coverage;
  }
  get tracing() {
    return this.#tracing;
  }
  get accessibility() {
    return this.#accessibility;
  }
  frames() {
    return this.#frameManager.frames();
  }
  workers() {
    return Array.from(this.#workers.values());
  }
  async setRequestInterception(value) {
    return await this.#frameManager.networkManager.setRequestInterception(value);
  }
  async setBypassServiceWorker(bypass) {
    this.#serviceWorkerBypassed = bypass;
    return await this.#primaryTargetClient.send("Network.setBypassServiceWorker", { bypass });
  }
  async setDragInterception(enabled) {
    this.#userDragInterceptionEnabled = enabled;
    return await this.#primaryTargetClient.send("Input.setInterceptDrags", {
      enabled
    });
  }
  async setOfflineMode(enabled) {
    return await this.#frameManager.networkManager.setOfflineMode(enabled);
  }
  async emulateNetworkConditions(networkConditions) {
    return await this.#frameManager.networkManager.emulateNetworkConditions(networkConditions);
  }
  setDefaultNavigationTimeout(timeout2) {
    this._timeoutSettings.setDefaultNavigationTimeout(timeout2);
  }
  setDefaultTimeout(timeout2) {
    this._timeoutSettings.setDefaultTimeout(timeout2);
  }
  getDefaultTimeout() {
    return this._timeoutSettings.timeout();
  }
  async queryObjects(prototypeHandle) {
    assert3(!prototypeHandle.disposed, "Prototype JSHandle is disposed!");
    assert3(prototypeHandle.id, "Prototype JSHandle must not be referencing primitive value");
    const response = await this.mainFrame().client.send("Runtime.queryObjects", {
      prototypeObjectId: prototypeHandle.id
    });
    return this.mainFrame().mainRealm().createCdpHandle(response.objects);
  }
  async cookies(...urls) {
    const originalCookies = (await this.#primaryTargetClient.send("Network.getCookies", {
      urls: urls.length ? urls : [this.url()]
    })).cookies;
    const unsupportedCookieAttributes = ["sourcePort"];
    const filterUnsupportedAttributes = /* @__PURE__ */ __name((cookie) => {
      for (const attr of unsupportedCookieAttributes) {
        delete cookie[attr];
      }
      return cookie;
    }, "filterUnsupportedAttributes");
    return originalCookies.map(filterUnsupportedAttributes);
  }
  async deleteCookie(...cookies) {
    const pageURL = this.url();
    for (const cookie of cookies) {
      const item = Object.assign({}, cookie);
      if (!cookie.url && pageURL.startsWith("http")) {
        item.url = pageURL;
      }
      await this.#primaryTargetClient.send("Network.deleteCookies", item);
    }
  }
  async setCookie(...cookies) {
    const pageURL = this.url();
    const startsWithHTTP = pageURL.startsWith("http");
    const items = cookies.map((cookie) => {
      const item = Object.assign({}, cookie);
      if (!item.url && startsWithHTTP) {
        item.url = pageURL;
      }
      assert3(item.url !== "about:blank", `Blank page can not have cookie "${item.name}"`);
      assert3(!String.prototype.startsWith.call(item.url || "", "data:"), `Data URL page can not have cookie "${item.name}"`);
      return item;
    });
    await this.deleteCookie(...items);
    if (items.length) {
      await this.#primaryTargetClient.send("Network.setCookies", {
        cookies: items
      });
    }
  }
  async exposeFunction(name, pptrFunction) {
    if (this.#bindings.has(name)) {
      throw new Error(`Failed to add page binding with name ${name}: window['${name}'] already exists!`);
    }
    let binding2;
    switch (typeof pptrFunction) {
      case "function":
        binding2 = new Binding(name, pptrFunction);
        break;
      default:
        binding2 = new Binding(name, pptrFunction.default);
        break;
    }
    this.#bindings.set(name, binding2);
    const expression = pageBindingInitString("exposedFun", name);
    await this.#primaryTargetClient.send("Runtime.addBinding", { name });
    const { identifier } = await this.#primaryTargetClient.send("Page.addScriptToEvaluateOnNewDocument", {
      source: expression
    });
    this.#exposedFunctions.set(name, identifier);
    await Promise.all(this.frames().map((frame) => {
      if (frame !== this.mainFrame() && !frame._hasStartedLoading) {
        return;
      }
      return frame.evaluate(expression).catch(debugError);
    }));
  }
  async removeExposedFunction(name) {
    const exposedFun = this.#exposedFunctions.get(name);
    if (!exposedFun) {
      throw new Error(`Failed to remove page binding with name ${name}: window['${name}'] does not exists!`);
    }
    await this.#primaryTargetClient.send("Runtime.removeBinding", { name });
    await this.removeScriptToEvaluateOnNewDocument(exposedFun);
    await Promise.all(this.frames().map((frame) => {
      if (frame !== this.mainFrame() && !frame._hasStartedLoading) {
        return;
      }
      return frame.evaluate((name2) => {
        globalThis[name2] = void 0;
      }, name).catch(debugError);
    }));
    this.#exposedFunctions.delete(name);
    this.#bindings.delete(name);
  }
  async authenticate(credentials) {
    return await this.#frameManager.networkManager.authenticate(credentials);
  }
  async setExtraHTTPHeaders(headers) {
    return await this.#frameManager.networkManager.setExtraHTTPHeaders(headers);
  }
  async setUserAgent(userAgent, userAgentMetadata) {
    return await this.#frameManager.networkManager.setUserAgent(userAgent, userAgentMetadata);
  }
  async metrics() {
    const response = await this.#primaryTargetClient.send("Performance.getMetrics");
    return this.#buildMetricsObject(response.metrics);
  }
  #emitMetrics(event) {
    this.emit("metrics", {
      title: event.title,
      metrics: this.#buildMetricsObject(event.metrics)
    });
  }
  #buildMetricsObject(metrics) {
    const result = {};
    for (const metric of metrics || []) {
      if (supportedMetrics.has(metric.name)) {
        result[metric.name] = metric.value;
      }
    }
    return result;
  }
  #handleException(exception) {
    this.emit("pageerror", createClientError(exception.exceptionDetails));
  }
  #onConsoleAPI(world, event) {
    const values = event.args.map((arg) => {
      return world.createCdpHandle(arg);
    });
    this.#addConsoleMessage(convertConsoleMessageLevel(event.type), values, event.stackTrace);
  }
  async #onBindingCalled(world, event) {
    let payload;
    try {
      payload = JSON.parse(event.payload);
    } catch {
      return;
    }
    const { type, name, seq, args, isTrivial } = payload;
    if (type !== "exposedFun") {
      return;
    }
    const context3 = world.context;
    if (!context3) {
      return;
    }
    const binding2 = this.#bindings.get(name);
    await binding2?.run(context3, seq, args, isTrivial);
  }
  #addConsoleMessage(eventType, args, stackTrace) {
    if (!this.listenerCount(
      "console"
      /* PageEvent.Console */
    )) {
      args.forEach((arg) => {
        return arg.dispose();
      });
      return;
    }
    const textTokens = [];
    for (const arg of args) {
      const remoteObject = arg.remoteObject();
      if (remoteObject.objectId) {
        textTokens.push(arg.toString());
      } else {
        textTokens.push(valueFromRemoteObject(remoteObject));
      }
    }
    const stackTraceLocations = [];
    if (stackTrace) {
      for (const callFrame of stackTrace.callFrames) {
        stackTraceLocations.push({
          url: callFrame.url,
          lineNumber: callFrame.lineNumber,
          columnNumber: callFrame.columnNumber
        });
      }
    }
    const message = new ConsoleMessage(convertConsoleMessageLevel(eventType), textTokens.join(" "), args, stackTraceLocations);
    this.emit("console", message);
  }
  #onDialog(event) {
    const type = validateDialogType(event.type);
    const dialog = new CdpDialog(this.#primaryTargetClient, type, event.message, event.defaultPrompt);
    this.emit("dialog", dialog);
  }
  async reload(options) {
    const [result] = await Promise.all([
      this.waitForNavigation({
        ...options,
        ignoreSameDocumentNavigation: true
      }),
      this.#primaryTargetClient.send("Page.reload")
    ]);
    return result;
  }
  async createCDPSession() {
    return await this.target().createCDPSession();
  }
  async goBack(options = {}) {
    return await this.#go(-1, options);
  }
  async goForward(options = {}) {
    return await this.#go(1, options);
  }
  async #go(delta, options) {
    const history2 = await this.#primaryTargetClient.send("Page.getNavigationHistory");
    const entry = history2.entries[history2.currentIndex + delta];
    if (!entry) {
      return null;
    }
    const result = await Promise.all([
      this.waitForNavigation(options),
      this.#primaryTargetClient.send("Page.navigateToHistoryEntry", {
        entryId: entry.id
      })
    ]);
    return result[0];
  }
  async bringToFront() {
    await this.#primaryTargetClient.send("Page.bringToFront");
  }
  async setJavaScriptEnabled(enabled) {
    return await this.#emulationManager.setJavaScriptEnabled(enabled);
  }
  async setBypassCSP(enabled) {
    await this.#primaryTargetClient.send("Page.setBypassCSP", { enabled });
  }
  async emulateMediaType(type) {
    return await this.#emulationManager.emulateMediaType(type);
  }
  async emulateCPUThrottling(factor) {
    return await this.#emulationManager.emulateCPUThrottling(factor);
  }
  async emulateMediaFeatures(features2) {
    return await this.#emulationManager.emulateMediaFeatures(features2);
  }
  async emulateTimezone(timezoneId) {
    return await this.#emulationManager.emulateTimezone(timezoneId);
  }
  async emulateIdleState(overrides) {
    return await this.#emulationManager.emulateIdleState(overrides);
  }
  async emulateVisionDeficiency(type) {
    return await this.#emulationManager.emulateVisionDeficiency(type);
  }
  async setViewport(viewport) {
    const needsReload = await this.#emulationManager.emulateViewport(viewport);
    this.#viewport = viewport;
    if (needsReload) {
      await this.reload();
    }
  }
  viewport() {
    return this.#viewport;
  }
  async evaluateOnNewDocument(pageFunction, ...args) {
    const source2 = evaluationString(pageFunction, ...args);
    const { identifier } = await this.#primaryTargetClient.send("Page.addScriptToEvaluateOnNewDocument", {
      source: source2
    });
    return { identifier };
  }
  async removeScriptToEvaluateOnNewDocument(identifier) {
    await this.#primaryTargetClient.send("Page.removeScriptToEvaluateOnNewDocument", {
      identifier
    });
  }
  async setCacheEnabled(enabled = true) {
    await this.#frameManager.networkManager.setCacheEnabled(enabled);
  }
  async _screenshot(options) {
    const env_2 = { stack: [], error: void 0, hasError: false };
    try {
      const { fromSurface, omitBackground, optimizeForSpeed, quality, clip: userClip, type, captureBeyondViewport } = options;
      const isFirefox = this.target()._targetManager() instanceof FirefoxTargetManager;
      const stack = __addDisposableResource11(env_2, new AsyncDisposableStack(), true);
      if (!isFirefox && omitBackground && (type === "png" || type === "webp")) {
        await this.#emulationManager.setTransparentBackgroundColor();
        stack.defer(async () => {
          await this.#emulationManager.resetDefaultBackgroundColor().catch(debugError);
        });
      }
      let clip = userClip;
      if (clip && !captureBeyondViewport) {
        const viewport = await this.mainFrame().isolatedRealm().evaluate(() => {
          const { height, pageLeft: x, pageTop: y, width } = window.visualViewport;
          return { x, y, height, width };
        });
        clip = getIntersectionRect(clip, viewport);
      }
      const { data } = await this.#primaryTargetClient.send("Page.captureScreenshot", {
        format: type,
        ...optimizeForSpeed ? { optimizeForSpeed } : {},
        ...quality !== void 0 ? { quality: Math.round(quality) } : {},
        ...clip ? { clip: { ...clip, scale: clip.scale ?? 1 } } : {},
        ...!fromSurface ? { fromSurface } : {},
        captureBeyondViewport
      });
      return data;
    } catch (e_2) {
      env_2.error = e_2;
      env_2.hasError = true;
    } finally {
      const result_1 = __disposeResources11(env_2);
      if (result_1)
        await result_1;
    }
  }
  async createPDFStream(options = {}) {
    const { timeout: ms = this._timeoutSettings.timeout() } = options;
    const { landscape, displayHeaderFooter, headerTemplate, footerTemplate, printBackground, scale, width: paperWidth, height: paperHeight, margin, pageRanges, preferCSSPageSize, omitBackground, tagged: generateTaggedPDF, outline: generateDocumentOutline } = parsePDFOptions(options);
    if (omitBackground) {
      await this.#emulationManager.setTransparentBackgroundColor();
    }
    await firstValueFrom(from(this.mainFrame().isolatedRealm().evaluate(() => {
      return document.fonts.ready;
    })).pipe(raceWith(timeout(ms))));
    const printCommandPromise = this.#primaryTargetClient.send("Page.printToPDF", {
      transferMode: "ReturnAsStream",
      landscape,
      displayHeaderFooter,
      headerTemplate,
      footerTemplate,
      printBackground,
      scale,
      paperWidth,
      paperHeight,
      marginTop: margin.top,
      marginBottom: margin.bottom,
      marginLeft: margin.left,
      marginRight: margin.right,
      pageRanges,
      preferCSSPageSize,
      generateTaggedPDF,
      generateDocumentOutline
    });
    const result = await firstValueFrom(from(printCommandPromise).pipe(raceWith(timeout(ms))));
    if (omitBackground) {
      await this.#emulationManager.resetDefaultBackgroundColor();
    }
    assert3(result.stream, "`stream` is missing from `Page.printToPDF");
    return await getReadableFromProtocolStream(this.#primaryTargetClient, result.stream);
  }
  async pdf(options = {}) {
    const { path = void 0 } = options;
    const readable = await this.createPDFStream(options);
    const buffer = await getReadableAsBuffer(readable, path);
    assert3(buffer, "Could not create buffer");
    return buffer;
  }
  async close(options = { runBeforeUnload: void 0 }) {
    const connection = this.#primaryTargetClient.connection();
    assert3(connection, "Protocol error: Connection closed. Most likely the page has been closed.");
    const runBeforeUnload = !!options.runBeforeUnload;
    if (runBeforeUnload) {
      await this.#primaryTargetClient.send("Page.close");
    } else {
      await connection.send("Target.closeTarget", {
        targetId: this.#primaryTarget._targetId
      });
      await this.#tabTarget._isClosedDeferred.valueOrThrow();
    }
  }
  isClosed() {
    return this.#closed;
  }
  get mouse() {
    return this.#mouse;
  }
  /**
   * This method is typically coupled with an action that triggers a device
   * request from an api such as WebBluetooth.
   *
   * :::caution
   *
   * This must be called before the device request is made. It will not return a
   * currently active device prompt.
   *
   * :::
   *
   * @example
   *
   * ```ts
   * const [devicePrompt] = Promise.all([
   *   page.waitForDevicePrompt(),
   *   page.click('#connect-bluetooth'),
   * ]);
   * await devicePrompt.select(
   *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))
   * );
   * ```
   */
  async waitForDevicePrompt(options = {}) {
    return await this.mainFrame().waitForDevicePrompt(options);
  }
};
__name(CdpPage, "CdpPage");
var supportedMetrics = /* @__PURE__ */ new Set([
  "Timestamp",
  "Documents",
  "Frames",
  "JSEventListeners",
  "Nodes",
  "LayoutCount",
  "RecalcStyleCount",
  "LayoutDuration",
  "RecalcStyleDuration",
  "ScriptDuration",
  "TaskDuration",
  "JSHeapUsedSize",
  "JSHeapTotalSize"
]);
function getIntersectionRect(clip, viewport) {
  const x = Math.max(clip.x, viewport.x);
  const y = Math.max(clip.y, viewport.y);
  return {
    x,
    y,
    width: Math.max(Math.min(clip.x + clip.width, viewport.x + viewport.width) - x, 0),
    height: Math.max(Math.min(clip.y + clip.height, viewport.y + viewport.height) - y, 0)
  };
}
__name(getIntersectionRect, "getIntersectionRect");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Target.js
var InitializationStatus;
(function(InitializationStatus2) {
  InitializationStatus2["SUCCESS"] = "success";
  InitializationStatus2["ABORTED"] = "aborted";
})(InitializationStatus || (InitializationStatus = {}));
var CdpTarget = class extends Target {
  #browserContext;
  #session;
  #targetInfo;
  #targetManager;
  #sessionFactory;
  _initializedDeferred = Deferred.create();
  _isClosedDeferred = Deferred.create();
  _targetId;
  /**
   * To initialize the target for use, call initialize.
   *
   * @internal
   */
  constructor(targetInfo, session, browserContext, targetManager, sessionFactory) {
    super();
    this.#session = session;
    this.#targetManager = targetManager;
    this.#targetInfo = targetInfo;
    this.#browserContext = browserContext;
    this._targetId = targetInfo.targetId;
    this.#sessionFactory = sessionFactory;
    if (this.#session && this.#session instanceof CdpCDPSession) {
      this.#session._setTarget(this);
    }
  }
  async asPage() {
    const session = this._session();
    if (!session) {
      return await this.createCDPSession().then((client) => {
        return CdpPage._create(client, this, null);
      });
    }
    return await CdpPage._create(session, this, null);
  }
  _subtype() {
    return this.#targetInfo.subtype;
  }
  _session() {
    return this.#session;
  }
  _sessionFactory() {
    if (!this.#sessionFactory) {
      throw new Error("sessionFactory is not initialized");
    }
    return this.#sessionFactory;
  }
  createCDPSession() {
    if (!this.#sessionFactory) {
      throw new Error("sessionFactory is not initialized");
    }
    return this.#sessionFactory(false).then((session) => {
      session._setTarget(this);
      return session;
    });
  }
  url() {
    return this.#targetInfo.url;
  }
  type() {
    const type = this.#targetInfo.type;
    switch (type) {
      case "page":
        return TargetType.PAGE;
      case "background_page":
        return TargetType.BACKGROUND_PAGE;
      case "service_worker":
        return TargetType.SERVICE_WORKER;
      case "shared_worker":
        return TargetType.SHARED_WORKER;
      case "browser":
        return TargetType.BROWSER;
      case "webview":
        return TargetType.WEBVIEW;
      case "tab":
        return TargetType.TAB;
      default:
        return TargetType.OTHER;
    }
  }
  _targetManager() {
    if (!this.#targetManager) {
      throw new Error("targetManager is not initialized");
    }
    return this.#targetManager;
  }
  _getTargetInfo() {
    return this.#targetInfo;
  }
  browser() {
    if (!this.#browserContext) {
      throw new Error("browserContext is not initialized");
    }
    return this.#browserContext.browser();
  }
  browserContext() {
    if (!this.#browserContext) {
      throw new Error("browserContext is not initialized");
    }
    return this.#browserContext;
  }
  opener() {
    const { openerId } = this.#targetInfo;
    if (!openerId) {
      return;
    }
    return this.browser().targets().find((target) => {
      return target._targetId === openerId;
    });
  }
  _targetInfoChanged(targetInfo) {
    this.#targetInfo = targetInfo;
    this._checkIfInitialized();
  }
  _initialize() {
    this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
  }
  _isTargetExposed() {
    return this.type() !== TargetType.TAB && !this._subtype();
  }
  _checkIfInitialized() {
    if (!this._initializedDeferred.resolved()) {
      this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
    }
  }
};
__name(CdpTarget, "CdpTarget");
var PageTarget = class extends CdpTarget {
  #defaultViewport;
  pagePromise;
  constructor(targetInfo, session, browserContext, targetManager, sessionFactory, defaultViewport) {
    super(targetInfo, session, browserContext, targetManager, sessionFactory);
    this.#defaultViewport = defaultViewport ?? void 0;
  }
  _initialize() {
    this._initializedDeferred.valueOrThrow().then(async (result) => {
      if (result === InitializationStatus.ABORTED) {
        return;
      }
      const opener = this.opener();
      if (!(opener instanceof PageTarget)) {
        return;
      }
      if (!opener || !opener.pagePromise || this.type() !== "page") {
        return true;
      }
      const openerPage = await opener.pagePromise;
      if (!openerPage.listenerCount(
        "popup"
        /* PageEvent.Popup */
      )) {
        return true;
      }
      const popupPage = await this.page();
      openerPage.emit("popup", popupPage);
      return true;
    }).catch(debugError);
    this._checkIfInitialized();
  }
  async page() {
    if (!this.pagePromise) {
      const session = this._session();
      this.pagePromise = (session ? Promise.resolve(session) : this._sessionFactory()(
        /* isAutoAttachEmulated=*/
        false
      )).then((client) => {
        return CdpPage._create(client, this, this.#defaultViewport ?? null);
      });
    }
    return await this.pagePromise ?? null;
  }
  _checkIfInitialized() {
    if (this._initializedDeferred.resolved()) {
      return;
    }
    if (this._getTargetInfo().url !== "") {
      this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
    }
  }
};
__name(PageTarget, "PageTarget");
var DevToolsTarget = class extends PageTarget {
};
__name(DevToolsTarget, "DevToolsTarget");
var WorkerTarget = class extends CdpTarget {
  #workerPromise;
  async worker() {
    if (!this.#workerPromise) {
      const session = this._session();
      this.#workerPromise = (session ? Promise.resolve(session) : this._sessionFactory()(
        /* isAutoAttachEmulated=*/
        false
      )).then((client) => {
        return new CdpWebWorker(
          client,
          this._getTargetInfo().url,
          this._targetId,
          this.type(),
          () => {
          },
          () => {
          }
          /* exceptionThrown */
        );
      });
    }
    return await this.#workerPromise;
  }
};
__name(WorkerTarget, "WorkerTarget");
var OtherTarget = class extends CdpTarget {
};
__name(OtherTarget, "OtherTarget");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/ChromeTargetManager.js
function isPageTargetBecomingPrimary(target, newTargetInfo) {
  return Boolean(target._subtype()) && !newTargetInfo.subtype;
}
__name(isPageTargetBecomingPrimary, "isPageTargetBecomingPrimary");
var ChromeTargetManager = class extends EventEmitter2 {
  #connection;
  /**
   * Keeps track of the following events: 'Target.targetCreated',
   * 'Target.targetDestroyed', 'Target.targetInfoChanged'.
   *
   * A target becomes discovered when 'Target.targetCreated' is received.
   * A target is removed from this map once 'Target.targetDestroyed' is
   * received.
   *
   * `targetFilterCallback` has no effect on this map.
   */
  #discoveredTargetsByTargetId = /* @__PURE__ */ new Map();
  /**
   * A target is added to this map once ChromeTargetManager has created
   * a Target and attached at least once to it.
   */
  #attachedTargetsByTargetId = /* @__PURE__ */ new Map();
  /**
   * Tracks which sessions attach to which target.
   */
  #attachedTargetsBySessionId = /* @__PURE__ */ new Map();
  /**
   * If a target was filtered out by `targetFilterCallback`, we still receive
   * events about it from CDP, but we don't forward them to the rest of Puppeteer.
   */
  #ignoredTargets = /* @__PURE__ */ new Set();
  #targetFilterCallback;
  #targetFactory;
  #attachedToTargetListenersBySession = /* @__PURE__ */ new WeakMap();
  #detachedFromTargetListenersBySession = /* @__PURE__ */ new WeakMap();
  #initializeDeferred = Deferred.create();
  #targetsIdsForInit = /* @__PURE__ */ new Set();
  #waitForInitiallyDiscoveredTargets = true;
  #discoveryFilter = [{}];
  constructor(connection, targetFactory, targetFilterCallback, waitForInitiallyDiscoveredTargets = true) {
    super();
    this.#connection = connection;
    this.#targetFilterCallback = targetFilterCallback;
    this.#targetFactory = targetFactory;
    this.#waitForInitiallyDiscoveredTargets = waitForInitiallyDiscoveredTargets;
    this.#connection.on("Target.targetCreated", this.#onTargetCreated);
    this.#connection.on("Target.targetDestroyed", this.#onTargetDestroyed);
    this.#connection.on("Target.targetInfoChanged", this.#onTargetInfoChanged);
    this.#connection.on(CDPSessionEvent.SessionDetached, this.#onSessionDetached);
    this.#setupAttachmentListeners(this.#connection);
  }
  #storeExistingTargetsForInit = () => {
    if (!this.#waitForInitiallyDiscoveredTargets) {
      return;
    }
    for (const [targetId, targetInfo] of this.#discoveredTargetsByTargetId.entries()) {
      const targetForFilter = new CdpTarget(targetInfo, void 0, void 0, this, void 0);
      if ((!this.#targetFilterCallback || this.#targetFilterCallback(targetForFilter)) && targetInfo.type !== "browser") {
        this.#targetsIdsForInit.add(targetId);
      }
    }
  };
  async initialize() {
    await this.#connection.send("Target.setDiscoverTargets", {
      discover: true,
      filter: this.#discoveryFilter
    });
    this.#storeExistingTargetsForInit();
    await this.#connection.send("Target.setAutoAttach", {
      waitForDebuggerOnStart: true,
      flatten: true,
      autoAttach: true,
      filter: [
        {
          type: "page",
          exclude: true
        },
        ...this.#discoveryFilter
      ]
    });
    this.#finishInitializationIfReady();
    await this.#initializeDeferred.valueOrThrow();
  }
  dispose() {
    this.#connection.off("Target.targetCreated", this.#onTargetCreated);
    this.#connection.off("Target.targetDestroyed", this.#onTargetDestroyed);
    this.#connection.off("Target.targetInfoChanged", this.#onTargetInfoChanged);
    this.#connection.off(CDPSessionEvent.SessionDetached, this.#onSessionDetached);
    this.#removeAttachmentListeners(this.#connection);
  }
  getAvailableTargets() {
    return this.#attachedTargetsByTargetId;
  }
  #setupAttachmentListeners(session) {
    const listener = /* @__PURE__ */ __name((event) => {
      void this.#onAttachedToTarget(session, event);
    }, "listener");
    assert3(!this.#attachedToTargetListenersBySession.has(session));
    this.#attachedToTargetListenersBySession.set(session, listener);
    session.on("Target.attachedToTarget", listener);
    const detachedListener = /* @__PURE__ */ __name((event) => {
      return this.#onDetachedFromTarget(session, event);
    }, "detachedListener");
    assert3(!this.#detachedFromTargetListenersBySession.has(session));
    this.#detachedFromTargetListenersBySession.set(session, detachedListener);
    session.on("Target.detachedFromTarget", detachedListener);
  }
  #removeAttachmentListeners(session) {
    const listener = this.#attachedToTargetListenersBySession.get(session);
    if (listener) {
      session.off("Target.attachedToTarget", listener);
      this.#attachedToTargetListenersBySession.delete(session);
    }
    if (this.#detachedFromTargetListenersBySession.has(session)) {
      session.off("Target.detachedFromTarget", this.#detachedFromTargetListenersBySession.get(session));
      this.#detachedFromTargetListenersBySession.delete(session);
    }
  }
  #onSessionDetached = (session) => {
    this.#removeAttachmentListeners(session);
  };
  #onTargetCreated = async (event) => {
    this.#discoveredTargetsByTargetId.set(event.targetInfo.targetId, event.targetInfo);
    this.emit("targetDiscovered", event.targetInfo);
    if (event.targetInfo.type === "browser" && event.targetInfo.attached) {
      if (this.#attachedTargetsByTargetId.has(event.targetInfo.targetId)) {
        return;
      }
      const target = this.#targetFactory(event.targetInfo, void 0);
      target._initialize();
      this.#attachedTargetsByTargetId.set(event.targetInfo.targetId, target);
    }
  };
  #onTargetDestroyed = (event) => {
    const targetInfo = this.#discoveredTargetsByTargetId.get(event.targetId);
    this.#discoveredTargetsByTargetId.delete(event.targetId);
    this.#finishInitializationIfReady(event.targetId);
    if (targetInfo?.type === "service_worker" && this.#attachedTargetsByTargetId.has(event.targetId)) {
      const target = this.#attachedTargetsByTargetId.get(event.targetId);
      if (target) {
        this.emit("targetGone", target);
        this.#attachedTargetsByTargetId.delete(event.targetId);
      }
    }
  };
  #onTargetInfoChanged = (event) => {
    this.#discoveredTargetsByTargetId.set(event.targetInfo.targetId, event.targetInfo);
    if (this.#ignoredTargets.has(event.targetInfo.targetId) || !this.#attachedTargetsByTargetId.has(event.targetInfo.targetId) || !event.targetInfo.attached) {
      return;
    }
    const target = this.#attachedTargetsByTargetId.get(event.targetInfo.targetId);
    if (!target) {
      return;
    }
    const previousURL = target.url();
    const wasInitialized = target._initializedDeferred.value() === InitializationStatus.SUCCESS;
    if (isPageTargetBecomingPrimary(target, event.targetInfo)) {
      const session = target?._session();
      assert3(session, "Target that is being activated is missing a CDPSession.");
      session.parentSession()?.emit(CDPSessionEvent.Swapped, session);
    }
    target._targetInfoChanged(event.targetInfo);
    if (wasInitialized && previousURL !== target.url()) {
      this.emit("targetChanged", {
        target,
        wasInitialized,
        previousURL
      });
    }
  };
  #onAttachedToTarget = async (parentSession, event) => {
    const targetInfo = event.targetInfo;
    const session = this.#connection.session(event.sessionId);
    if (!session) {
      throw new Error(`Session ${event.sessionId} was not created.`);
    }
    const silentDetach = /* @__PURE__ */ __name(async () => {
      await session.send("Runtime.runIfWaitingForDebugger").catch(debugError);
      await parentSession.send("Target.detachFromTarget", {
        sessionId: session.id()
      }).catch(debugError);
    }, "silentDetach");
    if (!this.#connection.isAutoAttached(targetInfo.targetId)) {
      return;
    }
    if (targetInfo.type === "service_worker") {
      this.#finishInitializationIfReady(targetInfo.targetId);
      await silentDetach();
      if (this.#attachedTargetsByTargetId.has(targetInfo.targetId)) {
        return;
      }
      const target2 = this.#targetFactory(targetInfo);
      target2._initialize();
      this.#attachedTargetsByTargetId.set(targetInfo.targetId, target2);
      this.emit("targetAvailable", target2);
      return;
    }
    const isExistingTarget = this.#attachedTargetsByTargetId.has(targetInfo.targetId);
    const target = isExistingTarget ? this.#attachedTargetsByTargetId.get(targetInfo.targetId) : this.#targetFactory(targetInfo, session, parentSession instanceof CDPSession ? parentSession : void 0);
    if (this.#targetFilterCallback && !this.#targetFilterCallback(target)) {
      this.#ignoredTargets.add(targetInfo.targetId);
      this.#finishInitializationIfReady(targetInfo.targetId);
      await silentDetach();
      return;
    }
    this.#setupAttachmentListeners(session);
    if (isExistingTarget) {
      session._setTarget(target);
      this.#attachedTargetsBySessionId.set(session.id(), this.#attachedTargetsByTargetId.get(targetInfo.targetId));
    } else {
      target._initialize();
      this.#attachedTargetsByTargetId.set(targetInfo.targetId, target);
      this.#attachedTargetsBySessionId.set(session.id(), target);
    }
    parentSession.emit(CDPSessionEvent.Ready, session);
    this.#targetsIdsForInit.delete(target._targetId);
    if (!isExistingTarget) {
      this.emit("targetAvailable", target);
    }
    this.#finishInitializationIfReady();
    await Promise.all([
      session.send("Target.setAutoAttach", {
        waitForDebuggerOnStart: true,
        flatten: true,
        autoAttach: true,
        filter: this.#discoveryFilter
      }),
      session.send("Runtime.runIfWaitingForDebugger")
    ]).catch(debugError);
  };
  #finishInitializationIfReady(targetId) {
    targetId !== void 0 && this.#targetsIdsForInit.delete(targetId);
    if (this.#targetsIdsForInit.size === 0) {
      this.#initializeDeferred.resolve();
    }
  }
  #onDetachedFromTarget = (_parentSession, event) => {
    const target = this.#attachedTargetsBySessionId.get(event.sessionId);
    this.#attachedTargetsBySessionId.delete(event.sessionId);
    if (!target) {
      return;
    }
    this.#attachedTargetsByTargetId.delete(target._targetId);
    this.emit("targetGone", target);
  };
};
__name(ChromeTargetManager, "ChromeTargetManager");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Browser.js
var CdpBrowser = class extends Browser {
  protocol = "cdp";
  static async _create(product, connection, contextIds, ignoreHTTPSErrors, defaultViewport, process3, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true, sessionId) {
    const browser = new CdpBrowser(product, connection, contextIds, defaultViewport, process3, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets, sessionId);
    if (ignoreHTTPSErrors) {
      await connection.send("Security.setIgnoreCertificateErrors", {
        ignore: true
      });
    }
    await browser._attach();
    return browser;
  }
  #defaultViewport;
  #process;
  #connection;
  #closeCallback;
  #targetFilterCallback;
  #isPageTargetCallback;
  #defaultContext;
  #contexts = /* @__PURE__ */ new Map();
  #targetManager;
  #sessionId;
  constructor(product, connection, contextIds, defaultViewport, process3, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true, sessionId) {
    super();
    product = product || "chrome";
    this.#defaultViewport = defaultViewport;
    this.#process = process3;
    this.#connection = connection;
    this.#closeCallback = closeCallback || (() => {
    });
    this.#targetFilterCallback = targetFilterCallback || (() => {
      return true;
    });
    this.#setIsPageTargetCallback(isPageTargetCallback);
    if (product === "firefox") {
      this.#targetManager = new FirefoxTargetManager(connection, this.#createTarget, this.#targetFilterCallback);
    } else {
      this.#targetManager = new ChromeTargetManager(connection, this.#createTarget, this.#targetFilterCallback, waitForInitiallyDiscoveredTargets);
    }
    this.#defaultContext = new CdpBrowserContext(this.#connection, this);
    for (const contextId of contextIds) {
      this.#contexts.set(contextId, new CdpBrowserContext(this.#connection, this, contextId));
    }
    this.#sessionId = sessionId || "unknown";
  }
  #emitDisconnected = () => {
    this.emit("disconnected", void 0);
  };
  async _attach() {
    this.#connection.on(CDPSessionEvent.Disconnected, this.#emitDisconnected);
    this.#targetManager.on("targetAvailable", this.#onAttachedToTarget);
    this.#targetManager.on("targetGone", this.#onDetachedFromTarget);
    this.#targetManager.on("targetChanged", this.#onTargetChanged);
    this.#targetManager.on("targetDiscovered", this.#onTargetDiscovered);
    await this.#targetManager.initialize();
  }
  _detach() {
    this.#connection.off(CDPSessionEvent.Disconnected, this.#emitDisconnected);
    this.#targetManager.off("targetAvailable", this.#onAttachedToTarget);
    this.#targetManager.off("targetGone", this.#onDetachedFromTarget);
    this.#targetManager.off("targetChanged", this.#onTargetChanged);
    this.#targetManager.off("targetDiscovered", this.#onTargetDiscovered);
  }
  process() {
    return this.#process ?? null;
  }
  _targetManager() {
    return this.#targetManager;
  }
  #setIsPageTargetCallback(isPageTargetCallback) {
    this.#isPageTargetCallback = isPageTargetCallback || ((target) => {
      return target.type() === "page" || target.type() === "background_page" || target.type() === "webview";
    });
  }
  _getIsPageTargetCallback() {
    return this.#isPageTargetCallback;
  }
  async createBrowserContext(options = {}) {
    const { proxyServer, proxyBypassList } = options;
    const { browserContextId } = await this.#connection.send("Target.createBrowserContext", {
      proxyServer,
      proxyBypassList: proxyBypassList && proxyBypassList.join(",")
    });
    const context3 = new CdpBrowserContext(this.#connection, this, browserContextId);
    this.#contexts.set(browserContextId, context3);
    return context3;
  }
  browserContexts() {
    return [this.#defaultContext, ...Array.from(this.#contexts.values())];
  }
  defaultBrowserContext() {
    return this.#defaultContext;
  }
  async _disposeContext(contextId) {
    if (!contextId) {
      return;
    }
    await this.#connection.send("Target.disposeBrowserContext", {
      browserContextId: contextId
    });
    this.#contexts.delete(contextId);
  }
  #createTarget = (targetInfo, session) => {
    const { browserContextId } = targetInfo;
    const context3 = browserContextId && this.#contexts.has(browserContextId) ? this.#contexts.get(browserContextId) : this.#defaultContext;
    if (!context3) {
      throw new Error("Missing browser context");
    }
    const createSession = /* @__PURE__ */ __name((isAutoAttachEmulated) => {
      return this.#connection._createSession(targetInfo, isAutoAttachEmulated);
    }, "createSession");
    const otherTarget = new OtherTarget(targetInfo, session, context3, this.#targetManager, createSession);
    if (targetInfo.url?.startsWith("devtools://")) {
      return new DevToolsTarget(targetInfo, session, context3, this.#targetManager, createSession, this.#defaultViewport ?? null);
    }
    if (this.#isPageTargetCallback(otherTarget)) {
      return new PageTarget(targetInfo, session, context3, this.#targetManager, createSession, this.#defaultViewport ?? null);
    }
    if (targetInfo.type === "service_worker" || targetInfo.type === "shared_worker") {
      return new WorkerTarget(targetInfo, session, context3, this.#targetManager, createSession);
    }
    return otherTarget;
  };
  #onAttachedToTarget = async (target) => {
    if (target._isTargetExposed() && await target._initializedDeferred.valueOrThrow() === InitializationStatus.SUCCESS) {
      this.emit("targetcreated", target);
      target.browserContext().emit("targetcreated", target);
    }
  };
  #onDetachedFromTarget = async (target) => {
    target._initializedDeferred.resolve(InitializationStatus.ABORTED);
    target._isClosedDeferred.resolve();
    if (target._isTargetExposed() && await target._initializedDeferred.valueOrThrow() === InitializationStatus.SUCCESS) {
      this.emit("targetdestroyed", target);
      target.browserContext().emit("targetdestroyed", target);
    }
  };
  #onTargetChanged = ({ target }) => {
    this.emit("targetchanged", target);
    target.browserContext().emit("targetchanged", target);
  };
  #onTargetDiscovered = (targetInfo) => {
    this.emit("targetdiscovered", targetInfo);
  };
  wsEndpoint() {
    return this.#connection.url();
  }
  async newPage() {
    return await this.#defaultContext.newPage();
  }
  async _createPageInContext(contextId) {
    const { targetId } = await this.#connection.send("Target.createTarget", {
      url: "about:blank",
      browserContextId: contextId || void 0
    });
    const target = await this.waitForTarget((t) => {
      return t._targetId === targetId;
    });
    if (!target) {
      throw new Error(`Missing target for page (id = ${targetId})`);
    }
    const initialized = await target._initializedDeferred.valueOrThrow() === InitializationStatus.SUCCESS;
    if (!initialized) {
      throw new Error(`Failed to create target for page (id = ${targetId})`);
    }
    const page = await target.page();
    if (!page) {
      throw new Error(`Failed to create a page for context (id = ${contextId})`);
    }
    return page;
  }
  targets() {
    return Array.from(this.#targetManager.getAvailableTargets().values()).filter((target) => {
      return target._isTargetExposed() && target._initializedDeferred.value() === InitializationStatus.SUCCESS;
    });
  }
  target() {
    const browserTarget = this.targets().find((target) => {
      return target.type() === "browser";
    });
    if (!browserTarget) {
      throw new Error("Browser target is not found");
    }
    return browserTarget;
  }
  async version() {
    const version2 = await this.#getVersion();
    return version2.product;
  }
  async userAgent() {
    const version2 = await this.#getVersion();
    return version2.userAgent;
  }
  async close() {
    await this.#closeCallback.call(null);
    await this.disconnect();
  }
  disconnect() {
    this.#targetManager.dispose();
    this.#connection.dispose();
    this._detach();
    return Promise.resolve();
  }
  get connected() {
    return !this.#connection._closed;
  }
  #getVersion() {
    return this.#connection.send("Browser.getVersion");
  }
  get debugInfo() {
    return {
      pendingProtocolErrors: this.#connection.getPendingProtocolErrors()
    };
  }
  /**
   * Get the BISO session ID associated with this browser
   * @public
   */
  sessionId() {
    return this.#sessionId;
  }
};
__name(CdpBrowser, "CdpBrowser");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cdp/BrowserConnector.js
async function _connectToCdpBrowser(connectionTransport, url, options) {
  const { ignoreHTTPSErrors = false, defaultViewport = DEFAULT_VIEWPORT, targetFilter, _isPageTarget: isPageTarget, slowMo = 0, protocolTimeout } = options;
  const connection = new Connection(url, connectionTransport, slowMo, protocolTimeout);
  const version2 = await connection.send("Browser.getVersion");
  const product = version2.product.toLowerCase().includes("firefox") ? "firefox" : "chrome";
  const { browserContextIds } = await connection.send("Target.getBrowserContexts");
  const browser = await CdpBrowser._create(product || "chrome", connection, browserContextIds, ignoreHTTPSErrors, defaultViewport, void 0, () => {
    return connection.send("Browser.close").catch(debugError);
  }, targetFilter, isPageTarget);
  return browser;
}
__name(_connectToCdpBrowser, "_connectToCdpBrowser");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/BrowserConnector.js
var getWebSocketTransportClass = /* @__PURE__ */ __name(async () => {
  return isNode ? (await Promise.resolve().then(() => (init_NodeWebSocketTransport(), NodeWebSocketTransport_exports))).NodeWebSocketTransport : (await Promise.resolve().then(() => (init_BrowserWebSocketTransport(), BrowserWebSocketTransport_exports))).BrowserWebSocketTransport;
}, "getWebSocketTransportClass");
async function _connectToBrowser(options) {
  const { connectionTransport, endpointUrl } = await getConnectionTransport(options);
  const cdpBrowser = await _connectToCdpBrowser(connectionTransport, endpointUrl, options);
  return cdpBrowser;
}
__name(_connectToBrowser, "_connectToBrowser");
async function getConnectionTransport(options) {
  const { browserWSEndpoint, browserURL, transport, headers = {} } = options;
  assert3(Number(!!browserWSEndpoint) + Number(!!browserURL) + Number(!!transport) === 1, "Exactly one of browserWSEndpoint, browserURL or transport must be passed to puppeteer.connect");
  if (transport) {
    return { connectionTransport: transport, endpointUrl: "" };
  } else if (browserWSEndpoint) {
    const WebSocketClass = await getWebSocketTransportClass();
    const connectionTransport = await WebSocketClass.create(browserWSEndpoint, headers);
    return {
      connectionTransport,
      endpointUrl: browserWSEndpoint
    };
  } else if (browserURL) {
    const connectionURL = await getWSEndpoint(browserURL);
    const WebSocketClass = await getWebSocketTransportClass();
    const connectionTransport = await WebSocketClass.create(connectionURL);
    return {
      connectionTransport,
      endpointUrl: connectionURL
    };
  }
  throw new Error("Invalid connection options");
}
__name(getConnectionTransport, "getConnectionTransport");
async function getWSEndpoint(browserURL) {
  const endpointURL = new URL("/json/version", browserURL);
  try {
    const result = await globalThis.fetch(endpointURL.toString(), {
      method: "GET"
    });
    if (!result.ok) {
      throw new Error(`HTTP ${result.statusText}`);
    }
    const data = await result.json();
    return data.webSocketDebuggerUrl;
  } catch (error3) {
    if (isErrorLike(error3)) {
      error3.message = `Failed to fetch browser webSocket URL from ${endpointURL}: ` + error3.message;
    }
    throw error3;
  }
}
__name(getWSEndpoint, "getWSEndpoint");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Puppeteer.js
var Puppeteer = class {
  /**
   * Registers a {@link CustomQueryHandler | custom query handler}.
   *
   * @remarks
   * After registration, the handler can be used everywhere where a selector is
   * expected by prepending the selection string with `<name>/`. The name is only
   * allowed to consist of lower- and upper case latin letters.
   *
   * @example
   *
   * ```
   * puppeteer.registerCustomQueryHandler('text', { … });
   * const aHandle = await page.$('text/…');
   * ```
   *
   * @param name - The name that the custom query handler will be registered
   * under.
   * @param queryHandler - The {@link CustomQueryHandler | custom query handler}
   * to register.
   *
   * @public
   */
  static registerCustomQueryHandler(name, queryHandler) {
    return this.customQueryHandlers.register(name, queryHandler);
  }
  /**
   * Unregisters a custom query handler for a given name.
   */
  static unregisterCustomQueryHandler(name) {
    return this.customQueryHandlers.unregister(name);
  }
  /**
   * Gets the names of all custom query handlers.
   */
  static customQueryHandlerNames() {
    return this.customQueryHandlers.names();
  }
  /**
   * Unregisters all custom query handlers.
   */
  static clearCustomQueryHandlers() {
    return this.customQueryHandlers.clear();
  }
  /**
   * @internal
   */
  _isPuppeteerCore;
  /**
   * @internal
   */
  _changedProduct = false;
  /**
   * @internal
   */
  constructor(settings) {
    this._isPuppeteerCore = settings.isPuppeteerCore;
    this.connect = this.connect.bind(this);
  }
  /**
   * This method attaches Puppeteer to an existing browser instance.
   *
   * @remarks
   *
   * @param options - Set of configurable options to set on the browser.
   * @returns Promise which resolves to browser instance.
   */
  connect(options) {
    return _connectToBrowser(options);
  }
};
__name(Puppeteer, "Puppeteer");
/**
 * Operations for {@link CustomQueryHandler | custom query handlers}. See
 * {@link CustomQueryHandlerRegistry}.
 *
 * @internal
 */
__publicField(Puppeteer, "customQueryHandlers", customQueryHandlers);

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/utils.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_VIEWPORT2 = Object.freeze({ width: 800, height: 600 });
async function connectToCDPBrowser(connectionTransport, options) {
  const { ignoreHTTPSErrors = false, defaultViewport = DEFAULT_VIEWPORT2, targetFilter, _isPageTarget: isPageTarget, slowMo = 0, protocolTimeout, sessionId = "unknown" } = options;
  const connection = new Connection("", connectionTransport, slowMo, protocolTimeout);
  const version2 = await connection.send("Browser.getVersion");
  const product = version2.product.toLowerCase().includes("firefox") ? "firefox" : "chrome";
  const { browserContextIds } = await connection.send("Target.getBrowserContexts");
  const browser = await CdpBrowser._create(product || "chrome", connection, browserContextIds, ignoreHTTPSErrors, defaultViewport, void 0, () => {
    return connection.send("Browser.close").catch(console.log);
  }, targetFilter, isPageTarget, true, sessionId);
  return browser;
}
__name(connectToCDPBrowser, "connectToCDPBrowser");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/WorkersWebSocketTransport.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/chunking.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HEADER_SIZE = 4;
var MAX_MESSAGE_SIZE = 1048575;
var FIRST_CHUNK_DATA_SIZE = MAX_MESSAGE_SIZE - HEADER_SIZE;
var messageToChunks = /* @__PURE__ */ __name((data) => {
  const encoder = new TextEncoder();
  const encodedUint8Array = encoder.encode(data);
  const firstChunk = new Uint8Array(Math.min(MAX_MESSAGE_SIZE, HEADER_SIZE + encodedUint8Array.length));
  const view = new DataView(firstChunk.buffer);
  view.setUint32(0, encodedUint8Array.length, true);
  firstChunk.set(encodedUint8Array.slice(0, FIRST_CHUNK_DATA_SIZE), HEADER_SIZE);
  const chunks = [firstChunk];
  for (let i = FIRST_CHUNK_DATA_SIZE; i < data.length; i += MAX_MESSAGE_SIZE) {
    chunks.push(encodedUint8Array.slice(i, i + MAX_MESSAGE_SIZE));
  }
  return chunks;
}, "messageToChunks");
var chunksToMessage = /* @__PURE__ */ __name((chunks, sessionid) => {
  if (chunks.length === 0) {
    return null;
  }
  const emptyBuffer = new Uint8Array(0);
  const firstChunk = chunks[0] || emptyBuffer;
  const view = new DataView(firstChunk.buffer);
  const expectedBytes = view.getUint32(0, true);
  let totalBytes = -HEADER_SIZE;
  for (let i = 0; i < chunks.length; ++i) {
    const curChunk = chunks[i] || emptyBuffer;
    totalBytes += curChunk.length;
    if (totalBytes > expectedBytes) {
      throw new Error(`Should have gotten the exact number of bytes but we got more.  SessionID: ${sessionid}`);
    }
    if (totalBytes === expectedBytes) {
      const chunksToCombine = chunks.splice(0, i + 1);
      chunksToCombine[0] = firstChunk.subarray(HEADER_SIZE);
      const combined = new Uint8Array(expectedBytes);
      let offset = 0;
      for (let j = 0; j <= i; ++j) {
        const chunk = chunksToCombine[j] || emptyBuffer;
        combined.set(chunk, offset);
        offset += chunk.length;
      }
      const decoder = new TextDecoder();
      const message = decoder.decode(combined);
      return message;
    }
  }
  return null;
}, "chunksToMessage");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/WorkersWebSocketTransport.js
var FAKE_HOST = "https://fake.host";
var WorkersWebSocketTransport = class {
  ws;
  pingInterval;
  chunks = [];
  onmessage;
  onclose;
  sessionId;
  static async create(endpoint, sessionId) {
    const path = `${FAKE_HOST}/v1/connectDevtools?browser_session=${sessionId}`;
    const response = await endpoint.fetch(path, {
      headers: { Upgrade: "websocket" }
    });
    response.webSocket.accept();
    return new WorkersWebSocketTransport(response.webSocket, sessionId);
  }
  constructor(ws, sessionId) {
    this.pingInterval = setInterval(() => {
      return this.ws.send("ping");
    }, 1e3);
    this.ws = ws;
    this.sessionId = sessionId;
    this.ws.addEventListener("message", (event) => {
      this.chunks.push(new Uint8Array(event.data));
      const message = chunksToMessage(this.chunks, sessionId);
      if (message && this.onmessage) {
        this.onmessage(message);
      }
    });
    this.ws.addEventListener("close", () => {
      clearInterval(this.pingInterval);
      if (this.onclose) {
        this.onclose();
      }
    });
    this.ws.addEventListener("error", (e) => {
      console.error(`Websocket error: SessionID: ${sessionId}`, e);
      clearInterval(this.pingInterval);
    });
  }
  send(message) {
    for (const chunk of messageToChunks(message)) {
      this.ws.send(chunk);
    }
  }
  close() {
    clearInterval(this.pingInterval);
    this.ws.close();
  }
  toString() {
    return this.sessionId;
  }
};
__name(WorkersWebSocketTransport, "WorkersWebSocketTransport");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/PuppeteerWorkers.js
var FAKE_HOST2 = "https://fake.host";
var PuppeteerWorkers = class extends Puppeteer {
  constructor() {
    super({ isPuppeteerCore: false });
    this.connect = this.connect.bind(this);
    this.launch = this.launch.bind(this);
    this.sessions = this.sessions.bind(this);
    this.history = this.history.bind(this);
    this.limits = this.limits.bind(this);
  }
  /**
   * Launch a browser session.
   *
   * @param endpoint - Cloudflare worker binding
   * @returns a browser session or throws
   */
  async launch(endpoint, options) {
    const searchParams = new URLSearchParams();
    if (options?.keep_alive) {
      searchParams.set("keep_alive", `${options.keep_alive}`);
    }
    if (options?.location) {
      searchParams.set("location", options.location);
    }
    const acquireUrl = `${FAKE_HOST2}/v1/acquire?${searchParams.toString()}`;
    const res = await endpoint.fetch(acquireUrl);
    const status = res.status;
    const text = await res.text();
    if (status !== 200) {
      throw new Error(`Unable to create new browser: code: ${status}: message: ${text}`);
    }
    const response = JSON.parse(text);
    return await this.connect(endpoint, response.sessionId);
  }
  /**
   * Returns active sessions
   *
   * @remarks
   * Sessions with a connnectionId already have a worker connection established
   *
   * @param endpoint - Cloudflare worker binding
   * @returns List of active sessions
   */
  async sessions(endpoint) {
    const res = await endpoint.fetch(`${FAKE_HOST2}/v1/sessions`);
    const status = res.status;
    const text = await res.text();
    if (status !== 200) {
      throw new Error(`Unable to fetch new sessions: code: ${status}: message: ${text}`);
    }
    const data = JSON.parse(text);
    return data.sessions;
  }
  /**
   * Returns recent sessions (active and closed)
   *
   * @param endpoint - Cloudflare worker binding
   * @returns List of recent sessions (active and closed)
   */
  async history(endpoint) {
    const res = await endpoint.fetch(`${FAKE_HOST2}/v1/history`);
    const status = res.status;
    const text = await res.text();
    if (status !== 200) {
      throw new Error(`Unable to fetch account history: code: ${status}: message: ${text}`);
    }
    const data = JSON.parse(text);
    return data.history;
  }
  /**
   * Returns current limits
   *
   * @param endpoint - Cloudflare worker binding
   * @returns current limits
   */
  async limits(endpoint) {
    const res = await endpoint.fetch(`${FAKE_HOST2}/v1/limits`);
    const status = res.status;
    const text = await res.text();
    if (status !== 200) {
      throw new Error(`Unable to fetch account limits: code: ${status}: message: ${text}`);
    }
    const data = JSON.parse(text);
    return data;
  }
  /**
   * Establish a devtools connection to an existing session
   *
   * @param borwserWorker - BrowserWorker
   * @returns a browser instance
   */
  async connect(endpoint, sessionId) {
    try {
      if (!sessionId) {
        return await super.connect(endpoint);
      }
      const connectionTransport = await WorkersWebSocketTransport.create(endpoint, sessionId);
      return await connectToCDPBrowser(connectionTransport, { sessionId });
    } catch (e) {
      throw new Error(`Unable to connect to existing session ${sessionId} (it may still be in use or not ready yet) - retry or launch a new browser: ${e}`);
    }
  }
};
__name(PuppeteerWorkers, "PuppeteerWorkers");

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/api.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/api/Environment.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/common.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_BrowserWebSocketTransport();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Configuration.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/ConnectionTransport.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/ConnectOptions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Cookie.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Device.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var knownDevices = [
  {
    name: "Blackberry PlayBook",
    userAgent: "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+",
    viewport: {
      width: 600,
      height: 1024,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Blackberry PlayBook landscape",
    userAgent: "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+",
    viewport: {
      width: 1024,
      height: 600,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "BlackBerry Z30",
    userAgent: "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "BlackBerry Z30 landscape",
    userAgent: "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Galaxy Note 3",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Galaxy Note 3 landscape",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Galaxy Note II",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Galaxy Note II landscape",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Galaxy S III",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Galaxy S III landscape",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Galaxy S5",
    userAgent: "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Galaxy S5 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Galaxy S8",
    userAgent: "Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36",
    viewport: {
      width: 360,
      height: 740,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Galaxy S8 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36",
    viewport: {
      width: 740,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Galaxy S9+",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36",
    viewport: {
      width: 320,
      height: 658,
      deviceScaleFactor: 4.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Galaxy S9+ landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36",
    viewport: {
      width: 658,
      height: 320,
      deviceScaleFactor: 4.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Galaxy Tab S4",
    userAgent: "Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36",
    viewport: {
      width: 712,
      height: 1138,
      deviceScaleFactor: 2.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Galaxy Tab S4 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36",
    viewport: {
      width: 1138,
      height: 712,
      deviceScaleFactor: 2.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPad",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPad landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPad (gen 6)",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPad (gen 6) landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPad (gen 7)",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 810,
      height: 1080,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPad (gen 7) landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 1080,
      height: 810,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPad Mini",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 768,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPad Mini landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 1024,
      height: 768,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPad Pro",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 1024,
      height: 1366,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPad Pro landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    viewport: {
      width: 1366,
      height: 1024,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPad Pro 11",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 834,
      height: 1194,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPad Pro 11 landscape",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 1194,
      height: 834,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 4",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53",
    viewport: {
      width: 320,
      height: 480,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 4 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53",
    viewport: {
      width: 480,
      height: 320,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 5",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
    viewport: {
      width: 320,
      height: 568,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 5 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
    viewport: {
      width: 568,
      height: 320,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 6",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 6 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 667,
      height: 375,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 6 Plus",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 414,
      height: 736,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 6 Plus landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 736,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 7",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 7 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 667,
      height: 375,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 7 Plus",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 414,
      height: 736,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 7 Plus landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 736,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 8",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 8 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 667,
      height: 375,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 8 Plus",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 414,
      height: 736,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 8 Plus landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 736,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone SE",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
    viewport: {
      width: 320,
      height: 568,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone SE landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
    viewport: {
      width: 568,
      height: 320,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone X",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone X landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone XR",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 414,
      height: 896,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone XR landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 896,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 11",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 414,
      height: 828,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 11 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 828,
      height: 414,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 11 Pro",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 11 Pro landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 11 Pro Max",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 414,
      height: 896,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 11 Pro Max landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 896,
      height: 414,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 12",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 12 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 12 Pro",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 12 Pro landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 12 Pro Max",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 428,
      height: 926,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 12 Pro Max landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 926,
      height: 428,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 12 Mini",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 12 Mini landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 13",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 13 landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 13 Pro",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 13 Pro landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 844,
      height: 390,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 13 Pro Max",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 428,
      height: 926,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 13 Pro Max landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 926,
      height: 428,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "iPhone 13 Mini",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "iPhone 13 Mini landscape",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
    viewport: {
      width: 812,
      height: 375,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "JioPhone 2",
    userAgent: "Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5",
    viewport: {
      width: 240,
      height: 320,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "JioPhone 2 landscape",
    userAgent: "Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-i;Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5",
    viewport: {
      width: 320,
      height: 240,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Kindle Fire HDX",
    userAgent: "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true",
    viewport: {
      width: 800,
      height: 1280,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Kindle Fire HDX landscape",
    userAgent: "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true",
    viewport: {
      width: 1280,
      height: 800,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "LG Optimus L70",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 384,
      height: 640,
      deviceScaleFactor: 1.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "LG Optimus L70 landscape",
    userAgent: "Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 384,
      deviceScaleFactor: 1.25,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Microsoft Lumia 550",
    userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Microsoft Lumia 950",
    userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 4,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Microsoft Lumia 950 landscape",
    userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 4,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Nexus 10",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36",
    viewport: {
      width: 800,
      height: 1280,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Nexus 10 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36",
    viewport: {
      width: 1280,
      height: 800,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Nexus 4",
    userAgent: "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 384,
      height: 640,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Nexus 4 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 384,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Nexus 5",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Nexus 5 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Nexus 5X",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 412,
      height: 732,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Nexus 5X landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 732,
      height: 412,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Nexus 6",
    userAgent: "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 412,
      height: 732,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Nexus 6 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 732,
      height: 412,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Nexus 6P",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 412,
      height: 732,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Nexus 6P landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 732,
      height: 412,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Nexus 7",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36",
    viewport: {
      width: 600,
      height: 960,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Nexus 7 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36",
    viewport: {
      width: 960,
      height: 600,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Nokia Lumia 520",
    userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)",
    viewport: {
      width: 320,
      height: 533,
      deviceScaleFactor: 1.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Nokia Lumia 520 landscape",
    userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)",
    viewport: {
      width: 533,
      height: 320,
      deviceScaleFactor: 1.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Nokia N9",
    userAgent: "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13",
    viewport: {
      width: 480,
      height: 854,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Nokia N9 landscape",
    userAgent: "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13",
    viewport: {
      width: 854,
      height: 480,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Pixel 2",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 411,
      height: 731,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Pixel 2 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 731,
      height: 411,
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Pixel 2 XL",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 411,
      height: 823,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Pixel 2 XL landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36",
    viewport: {
      width: 823,
      height: 411,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Pixel 3",
    userAgent: "Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36",
    viewport: {
      width: 393,
      height: 786,
      deviceScaleFactor: 2.75,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Pixel 3 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36",
    viewport: {
      width: 786,
      height: 393,
      deviceScaleFactor: 2.75,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Pixel 4",
    userAgent: "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36",
    viewport: {
      width: 353,
      height: 745,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Pixel 4 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36",
    viewport: {
      width: 745,
      height: 353,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Pixel 4a (5G)",
    userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 353,
      height: 745,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Pixel 4a (5G) landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 745,
      height: 353,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Pixel 5",
    userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 393,
      height: 851,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Pixel 5 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 851,
      height: 393,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  },
  {
    name: "Moto G4",
    userAgent: "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 360,
      height: 640,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false
    }
  },
  {
    name: "Moto G4 landscape",
    userAgent: "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4812.0 Mobile Safari/537.36",
    viewport: {
      width: 640,
      height: 360,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: true
    }
  }
];
var knownDevicesByName = {};
for (const device of knownDevices) {
  knownDevicesByName[device.name] = device;
}
var KnownDevices = Object.freeze(knownDevicesByName);

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Product.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/TaskQueue.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/types.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/common/Viewport.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/revisions.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var PUPPETEER_REVISIONS = Object.freeze({
  chrome: "124.0.6367.207",
  "chrome-headless-shell": "124.0.6367.207",
  firefox: "latest"
});

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/util/util.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/BrowserWorker.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@cloudflare/puppeteer/lib/esm/puppeteer/puppeteer-cloudflare.js
var puppeteer = new PuppeteerWorkers();
var { connect, history, launch, limits, sessions } = puppeteer;
var puppeteer_cloudflare_default = puppeteer;

// workers/index.ts
async function getBusinessRankingWithPuppeteer(browser) {
  const rankingUrl = "https://www.e-typing.ne.jp/ranking/index.asp?im=0&sc=variety&ct=business";
  try {
    console.log("Launching browser...");
    const puppeteerBrowser = await puppeteer_cloudflare_default.launch(browser);
    const page = await puppeteerBrowser.newPage();
    console.log(`Navigating to: ${rankingUrl}`);
    await page.goto(rankingUrl, { waitUntil: "domcontentloaded" });
    await new Promise((resolve) => setTimeout(resolve, 3e3));
    console.log("Extracting ranking data...");
    const entries = await page.evaluate(() => {
      const rankingEntries = [];
      const rankingList = document.querySelector("ul.ranking");
      if (rankingList) {
        const listItems = rankingList.querySelectorAll("li");
        listItems.forEach((li) => {
          if (li.classList.contains("head"))
            return;
          const rankElement = li.querySelector(".rank");
          const userElement = li.querySelector(".user");
          const scoreElement = li.querySelector(".score");
          if (rankElement && userElement && scoreElement) {
            const rankText = rankElement.textContent?.trim() || "";
            const username = userElement.textContent?.trim() || "";
            const scoreText = scoreElement.textContent?.trim() || "";
            const rankMatch = rankText.match(/(\d+)位/);
            const scoreMatch = scoreText.match(/(\d+)/);
            if (rankMatch && scoreMatch && username) {
              const rank = parseInt(rankMatch[1]);
              const score = parseInt(scoreMatch[1]);
              if (!isNaN(rank) && !isNaN(score)) {
                rankingEntries.push({ rank, username, score });
              }
            }
          }
        });
      }
      return rankingEntries;
    });
    await puppeteerBrowser.close();
    console.log(`Extracted ${entries.length} ranking entries`);
    return entries;
  } catch (error3) {
    console.error("Error in Puppeteer scraping:", error3);
    return [
      { rank: 1, username: "\u30A8\u30E9\u30FC\u6642\u30B5\u30F3\u30D7\u30EB1", score: 400 },
      { rank: 2, username: "\u30A8\u30E9\u30FC\u6642\u30B5\u30F3\u30D7\u30EB2", score: 350 },
      { rank: 3, username: "\u30A8\u30E9\u30FC\u6642\u30B5\u30F3\u30D7\u30EB3", score: 300 }
    ];
  }
}
__name(getBusinessRankingWithPuppeteer, "getBusinessRankingWithPuppeteer");
var workers_default = {
  async fetch(request, env2) {
    const url = new URL(request.url);
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    if (request.method !== "GET") {
      return new Response("Method not allowed", {
        status: 405,
        headers: corsHeaders
      });
    }
    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({
          message: "e-typing Ranking API with Puppeteer",
          endpoints: {
            "/ranking": "\u30D3\u30B8\u30CD\u30B9\u30AB\u30C6\u30B4\u30EA\u306E1\u30DA\u30FC\u30B8\u76EE\u306E\u30E9\u30F3\u30AD\u30F3\u30B0\u3092\u53D6\u5F97\uFF08Puppeteer\u4F7F\u7528\uFF09"
          },
          note: "Cloudflare Browser Rendering\u3092\u4F7F\u7528\u3057\u3066JavaScript\u5B9F\u884C\u5F8C\u306E\u30E9\u30F3\u30AD\u30F3\u30B0\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u307E\u3059"
        }),
        {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders
          }
        }
      );
    }
    if (url.pathname === "/ranking") {
      try {
        console.log("Fetching business category ranking with Puppeteer...");
        const entries = await getBusinessRankingWithPuppeteer(env2.MYBROWSER);
        const response = {
          category: "business",
          entries,
          fetchedAt: (/* @__PURE__ */ new Date()).toISOString(),
          success: true,
          message: `${entries.length}\u4EF6\u306E\u30E9\u30F3\u30AD\u30F3\u30B0\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u307E\u3057\u305F\uFF08Puppeteer\u4F7F\u7528\uFF09`
        };
        return new Response(JSON.stringify(response, null, 2), {
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      } catch (error3) {
        console.error("Error in /ranking endpoint:", error3);
        const errorResponse = {
          category: "business",
          entries: [],
          fetchedAt: (/* @__PURE__ */ new Date()).toISOString(),
          success: false,
          message: error3 instanceof Error ? error3.message : "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F"
        };
        return new Response(JSON.stringify(errorResponse, null, 2), {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders
          }
        });
      }
    }
    return new Response("Not Found", {
      status: 404,
      headers: corsHeaders
    });
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// .wrangler/tmp/bundle-Ox4we4/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default
];
var middleware_insertion_facade_default = workers_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-Ox4we4/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@cloudflare/puppeteer/lib/esm/puppeteer/node/NodeWebSocketTransport.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/globalPatcher.js:
  (**
   * @license
   * Copyright 2025 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/util/assert.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/environment.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/Debug.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/Errors.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/PDFOptions.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/util.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/util/disposable.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/EventEmitter.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/Browser.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/BrowserContext.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/BrowserContext.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/util/Deferred.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/Target.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/util/ErrorLike.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/CallbackRegistry.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/CDPSession.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/TimeoutSettings.js:
  (**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/util/Mutex.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/util/decorators.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/ConsoleMessage.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/FileChooser.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/NetworkManagerEvents.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Accessibility.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/JSHandle.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Binding.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Connection.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Coverage.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/Dialog.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Dialog.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/FirefoxTargetManager.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/ElementHandleSymbol.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/util/Function.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/HandleIterator.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/LazyArg.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/QueryHandler.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/AriaQueryHandler.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/ScriptInjector.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/CustomQueryHandler.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/PierceQueryHandler.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/PQueryHandler.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/TextQueryHandler.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/XPathQueryHandler.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/GetQueryHandler.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/Frame.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/ElementHandle.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/utils.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/JSHandle.js:
  (**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/ElementHandle.js:
  (**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/ExecutionContext.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/FrameManagerEvents.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/WaitTask.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/Realm.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/IsolatedWorld.js:
  (**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/IsolatedWorlds.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/LifecycleWatcher.js:
  (**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Frame.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/FrameTree.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/HTTPResponse.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/SecurityDetails.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/HTTPResponse.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/NetworkEventManager.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/NetworkManager.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/FrameManager.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/Input.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/USKeyboardLayout.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Input.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/WebWorker.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Page.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Target.js:
  (**
   * @license
   * Copyright 2019 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/ChromeTargetManager.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/Browser.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cdp/BrowserConnector.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/BrowserConnector.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/Puppeteer.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/utils.js:
  (**
   * @license
   * Copyright 2025 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/chunking.js:
  (**
   * @license
   * Copyright 2025 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/cloudflare/PuppeteerWorkers.js:
  (**
   * @license
   * Copyright 2025 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/Environment.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/api/api.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/Configuration.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/ConnectionTransport.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/ConnectOptions.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/Cookie.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/Device.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/Product.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/TaskQueue.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/types.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/Viewport.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/common/common.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/revisions.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/util/util.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@cloudflare/puppeteer/lib/esm/puppeteer/puppeteer-cloudflare.js:
  (**
   * @license
   * Copyright 2025 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=index.js.map
