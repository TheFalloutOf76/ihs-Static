// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/application/v2/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/application/uv.handler.js",
  client: "/application/uv.client.js",
  bundle: "/application/uv.bundle.js",
  config: "/application/uv.config.js",
  sw: "/application/uv.sw.js",
};
