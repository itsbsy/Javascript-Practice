const Cryptr = require('cryptr');

//privateKey = cryptr.encrypt(privateKey);
const cryptr = new Cryptr("mojow@190195");

privateKey = cryptr.decrypt("63af3420da56f26bda34dacfc5148a6320c0ada4b6a6e0145a2e9a8e0516153a9f2e98bd6fecfb3e9f3396965a0523fec0443d8fb10ed1bc9e6ad6f2406e1d6060210cb6957622e9efc056973730b0cd3cdc868618ba5330560f79e994c135aa2837f7536a4a70e961d6f68a9f1ef3a9614035c17f1350c308c6971c01d7c7");
console.log(privateKey)
