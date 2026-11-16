// Safari (iOS) nie ma iteracji asynchronicznej po ReadableStream – pdf.js jej używa.
if (typeof ReadableStream !== "undefined" && !ReadableStream.prototype[Symbol.asyncIterator]) {
  const values = function ({ preventCancel = false } = {}) {
    const reader = this.getReader();
    return {
      async next() {
        try { const r = await reader.read(); if (r.done) reader.releaseLock(); return r; }
        catch (e) { reader.releaseLock(); throw e; }
      },
      async return(value) {
        if (!preventCancel) { const p = reader.cancel(value); reader.releaseLock(); await p; } else reader.releaseLock();
        return { done: true, value };
      },
      [Symbol.asyncIterator]() { return this; }
    };
  };
  Object.defineProperty(ReadableStream.prototype, "values", { value: values, configurable: true, writable: true });
  Object.defineProperty(ReadableStream.prototype, Symbol.asyncIterator, { value: values, configurable: true, writable: true });
}
export {};
