import module from "./jsffi.wasm.mjs";
import jsffi from "./jsffi.lib.mjs";
process.on("unhandledRejection", err => { throw err; });
module.then(m => jsffi(m)).then(async i => {
try {
i.exports.hs_init();
await i.exports.main();
} catch (err) {
console.log(i.stdio.stdout());
console.log(i.stdio.stderr());
throw err;
}
console.log(i.stdio.stdout());
console.log(i.stdio.stderr());
});
