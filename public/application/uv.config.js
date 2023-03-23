// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/application/v2/",
  bare: "/api/",
  encodeUrl: Ultraviolet.codec.base64.encode,
  decodeUrl: Ultraviolet.codec.base64.decode,
  handler: "/application/uv.handler.js",
  client: "/application/uv.client.js",
  bundle: "/application/uv.bundle.js",
  config: "/application/uv.config.js",
  sw: "/application/uv.sw.js",
};
