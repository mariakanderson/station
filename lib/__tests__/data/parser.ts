export default [
  {
    test: '0001',
    received: ['foo=bar'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: '0002',
    received: ['foo=bar; Expires=Fri, 07 Aug 9999 08:04:19 GMT'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: '0003',
    received: [
      'foo=bar; Expires=Fri, 07 Aug 2007 08:04:19 GMT',
      'foo2=bar2; Expires=Fri, 07 Aug 9999 08:04:19 GMT',
    ],
    sent: [{ name: 'foo2', value: 'bar2' }],
  },
  {
    test: '0004',
    received: ['foo'],
    sent: [],
  },
  {
    test: '0005',
    received: ['foo=bar; max-age=10000;'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: '0006',
    received: ['foo=bar; max-age=0;'],
    sent: [],
  },
  {
    test: '0007',
    received: ['foo=bar; version=1;'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: '0008',
    received: ['foo=bar; version=1000;'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: '0009',
    received: ['foo=bar; customvalue=1000;'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: '0010',
    received: ['foo=bar; secure;'],
    sent: [],
  },
  {
    test: '0011',
    received: ['foo=bar; customvalue="1000 or more";'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: '0012',
    received: ['foo=bar; customvalue="no trailing semicolon"'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: '0013',
    received: ['foo=bar', 'foo=qux'],
    sent: [{ name: 'foo', value: 'qux' }],
  },
  {
    test: '0014',
    received: ['foo1=bar', 'foo2=qux'],
    sent: [
      { name: 'foo1', value: 'bar' },
      { name: 'foo2', value: 'qux' },
    ],
  },
  {
    test: '0015',
    received: ['a=b', 'z=y'],
    sent: [
      { name: 'a', value: 'b' },
      { name: 'z', value: 'y' },
    ],
  },
  {
    test: '0016',
    received: ['z=y', 'a=b'],
    sent: [
      { name: 'z', value: 'y' },
      { name: 'a', value: 'b' },
    ],
  },
  {
    test: '0017',
    received: ['z=y, a=b'],
    sent: [{ name: 'z', value: 'y, a=b' }],
  },
  {
    test: '0018',
    received: ['z=y; foo=bar, a=b'],
    sent: [{ name: 'z', value: 'y' }],
  },
  {
    test: '0019',
    received: ['foo=b;max-age=3600, c=d;path=/'],
    sent: [{ name: 'foo', value: 'b' }],
  },
  {
    test: '0020',
    received: ['a=b', '=', 'c=d'],
    sent: [
      { name: 'a', value: 'b' },
      { name: 'c', value: 'd' },
    ],
  },
  {
    test: '0021',
    received: ['a=b', '=x', 'c=d'],
    sent: [
      { name: 'a', value: 'b' },
      { name: 'c', value: 'd' },
    ],
  },
  {
    test: '0022',
    received: ['a=b', 'x=', 'c=d'],
    sent: [
      { name: 'a', value: 'b' },
      { name: 'x', value: '' },
      { name: 'c', value: 'd' },
    ],
  },
  {
    test: '0023',
    received: ['foo', ''],
    sent: [],
  },
  {
    test: '0024',
    received: ['foo', '='],
    sent: [],
  },
  {
    test: '0025',
    received: ['foo', '; bar'],
    sent: [],
  },
  {
    test: '0026',
    received: ['foo', '   '],
    sent: [],
  },
  {
    test: '0027',
    received: ['foo', 'bar'],
    sent: [],
  },
  {
    test: '0028',
    received: ['foo', '\t'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0001',
    received: ['foo=bar; Secure'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0002',
    received: ['foo=bar; seCURe'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0003',
    received: ['foo=bar; "Secure"'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'ATTRIBUTE0004',
    received: ['foo=bar; Secure='],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0005',
    received: ['foo=bar; Secure=aaaa'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0006',
    received: ['foo=bar; Secure qux'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'ATTRIBUTE0007',
    received: ['foo=bar; Secure =aaaaa'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0008',
    received: ['foo=bar; Secure= aaaaa'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0009',
    received: ['foo=bar; Secure; qux'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0010',
    received: ['foo=bar; Secure;qux'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0011',
    received: ['foo=bar; Secure    ; qux'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0012',
    received: ['foo=bar;                Secure'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0013',
    received: ['foo=bar;       Secure     ;'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0014',
    received: ['foo=bar; Path'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'ATTRIBUTE0015',
    received: ['foo=bar; Path='],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'ATTRIBUTE0016',
    received: ['foo=bar; Path=/'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'ATTRIBUTE0017',
    received: ['foo=bar; Path=/qux'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0018',
    received: ['foo=bar; Path    =/qux'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0019',
    received: ['foo=bar; Path=    /qux'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0020',
    received: ['foo=bar; Path=/qux      ; taz'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0021',
    received: ['foo=bar; Path=/qux; Path=/'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'ATTRIBUTE0022',
    received: ['foo=bar; Path=/; Path=/qux'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0023',
    received: ['foo=bar; Path=/qux; Path=/cookie-parser-result'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'ATTRIBUTE0024',
    received: ['foo=bar; Path=/cookie-parser-result; Path=/qux'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0025',
    received: ['foo=bar; qux; Secure'],
    sent: [],
  },
  {
    test: 'ATTRIBUTE0026',
    received: ['foo=bar; qux="aaa;bbb"; Secure'],
    sent: [],
  },
  {
    test: 'CHARSET0001',
    received: [
      'foo=\u6625\u8282\u56de\u5bb6\u8def\u00b7\u6625\u8fd0\u5b8c\u5168\u624b\u518c',
    ],
    sent: [
      {
        name: 'foo',
        value:
          '\u6625\u8282\u56de\u5bb6\u8def\u00b7\u6625\u8fd0\u5b8c\u5168\u624b\u518c',
      },
    ],
  },
  {
    test: 'CHARSET0002',
    received: [
      '\u6625\u8282\u56de=\u5bb6\u8def\u00b7\u6625\u8fd0\u5b8c\u5168\u624b\u518c',
    ],
    sent: [
      {
        name: '\u6625\u8282\u56de',
        value: '\u5bb6\u8def\u00b7\u6625\u8fd0\u5b8c\u5168\u624b\u518c',
      },
    ],
  },
  {
    test: 'CHARSET0003',
    received: [
      '\u6625\u8282\u56de=\u5bb6\u8def\u00b7\u6625\u8fd0; \u5b8c\u5168\u624b\u518c',
    ],
    sent: [
      { name: '\u6625\u8282\u56de', value: '\u5bb6\u8def\u00b7\u6625\u8fd0' },
    ],
  },
  {
    test: 'CHARSET0004',
    received: [
      'foo="\u6625\u8282\u56de\u5bb6\u8def\u00b7\u6625\u8fd0\u5b8c\u5168\u624b\u518c"',
    ],
    sent: [
      {
        name: 'foo',
        value:
          '"\u6625\u8282\u56de\u5bb6\u8def\u00b7\u6625\u8fd0\u5b8c\u5168\u624b\u518c"',
      },
    ],
  },
  {
    test: 'CHROMIUM0001',
    received: ['a=b'],
    sent: [{ name: 'a', value: 'b' }],
  },
  {
    test: 'CHROMIUM0002',
    received: ['aBc="zzz "   ;'],
    sent: [{ name: 'aBc', value: '"zzz "' }],
  },
  {
    test: 'CHROMIUM0003',
    received: ['aBc="zzz " ;'],
    sent: [{ name: 'aBc', value: '"zzz "' }],
  },
  {
    test: 'CHROMIUM0004',
    received: ['aBc="zz;pp" ; ;'],
    sent: [{ name: 'aBc', value: '"zz' }],
  },
  {
    test: 'CHROMIUM0005',
    received: ['aBc="zz ;'],
    sent: [{ name: 'aBc', value: '"zz' }],
  },
  {
    test: 'CHROMIUM0006',
    received: ['aBc="zzz "   "ppp"  ;'],
    sent: [{ name: 'aBc', value: '"zzz "   "ppp"' }],
  },
  {
    test: 'CHROMIUM0007',
    received: ['aBc="zzz "   "ppp" ;'],
    sent: [{ name: 'aBc', value: '"zzz "   "ppp"' }],
  },
  {
    test: 'CHROMIUM0008',
    received: ['aBc=A"B ;'],
    sent: [{ name: 'aBc', value: 'A"B' }],
  },
  {
    test: 'CHROMIUM0009',
    received: ['BLAHHH; path=/;'],
    sent: [],
  },
  {
    test: 'CHROMIUM0010',
    received: ['"BLA\\"HHH"; path=/;'],
    sent: [],
  },
  {
    test: 'CHROMIUM0011',
    received: ['a="B'],
    sent: [{ name: 'a', value: '"B' }],
  },
  {
    test: 'CHROMIUM0012',
    received: ['=ABC'],
    sent: [],
  },
  {
    test: 'CHROMIUM0013',
    received: ['ABC=;  path = /'],
    sent: [{ name: 'ABC', value: '' }],
  },
  {
    test: 'CHROMIUM0014',
    received: ['  A  = BC  ;foo;;;   bar'],
    sent: [{ name: 'A', value: 'BC' }],
  },
  {
    test: 'CHROMIUM0015',
    received: ['  A=== BC  ;foo;;;   bar'],
    sent: [{ name: 'A', value: '== BC' }],
  },
  {
    test: 'CHROMIUM0016',
    received: [
      'foo="zohNumRKgI0oxyhSsV3Z7D"  ; expires=Sun, 18-Apr-2027 21:06:29 GMT ; path=/  ;  ',
    ],
    sent: [{ name: 'foo', value: '"zohNumRKgI0oxyhSsV3Z7D"' }],
  },
  {
    test: 'CHROMIUM0017',
    received: [
      'foo=zohNumRKgI0oxyhSsV3Z7D  ; expires=Sun, 18-Apr-2027 21:06:29 GMT ; path=/  ;  ',
    ],
    sent: [{ name: 'foo', value: 'zohNumRKgI0oxyhSsV3Z7D' }],
  },
  {
    test: 'CHROMIUM0018',
    received: ['    '],
    sent: [],
  },
  {
    test: 'CHROMIUM0019',
    received: [
      'a=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    ],
    sent: [
      {
        name: 'a',
        value:
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
    ],
  },
  {
    test: 'CHROMIUM0021',
    received: [''],
    sent: [],
  },
  {
    test: 'COMMA0001',
    received: ['foo=bar, baz=qux'],
    sent: [{ name: 'foo', value: 'bar, baz=qux' }],
  },
  {
    test: 'COMMA0002',
    received: ['foo="bar, baz=qux"'],
    sent: [{ name: 'foo', value: '"bar, baz=qux"' }],
  },
  {
    test: 'COMMA0003',
    received: ['foo=bar; b,az=qux'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'COMMA0004',
    received: ['foo=bar; baz=q,ux'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'COMMA0005',
    received: ['foo=bar; Max-Age=50,399'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'COMMA0006',
    received: ['foo=bar; Expires=Fri, 07 Aug 9999 08:04:19 GMT'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'COMMA0007',
    received: ['foo=bar; Expires=Fri 07 Aug 9999 08:04:19 GMT, baz=qux'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DISABLED_CHROMIUM0020',
    received: [
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    ],
    sent: [],
  },
  {
    test: 'DISABLED_CHROMIUM0022',
    received: ['AAA=BB\u0000ZYX'],
    sent: [{ name: 'AAA', value: 'BB' }],
  },
  {
    test: 'DISABLED_CHROMIUM0023',
    received: ['AAA=BB\rZYX'],
    sent: [{ name: 'AAA', value: 'BB' }],
  },
  {
    test: 'DISABLED_PATH0029',
    received: ['foo=bar; path=/cookie-parser-result/foo/bar'],
    'sent-to': '/cookie-parser-result/f%6Fo/bar?disabled-path0029',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0001',
    received: ['foo=bar; domain=home.example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0001',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0002',
    received: ['foo=bar; domain=home.example.org'],
    'sent-to':
      'http://sibling.example.org:8888/cookie-parser-result?domain0002',
    sent: [],
  },
  {
    test: 'DOMAIN0003',
    received: ['foo=bar; domain=.home.example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0003',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0004',
    received: ['foo=bar; domain=home.example.org'],
    'sent-to':
      'http://subdomain.home.example.org:8888/cookie-parser-result?domain0004',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0005',
    received: ['foo=bar; domain=.home.example.org'],
    'sent-to':
      'http://subdomain.home.example.org:8888/cookie-parser-result?domain0005',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0006',
    received: ['foo=bar; domain=.home.example.org'],
    'sent-to':
      'http://sibling.example.org:8888/cookie-parser-result?domain0006',
    sent: [],
  },
  {
    test: 'DOMAIN0007',
    received: ['foo=bar; domain=sibling.example.org'],
    'sent-to':
      'http://sibling.example.org:8888/cookie-parser-result?domain0007',
    sent: [],
  },
  {
    test: 'DOMAIN0008',
    received: ['foo=bar; domain=.example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0008',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0009',
    received: ['foo=bar; domain=example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0009',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0010',
    received: ['foo=bar; domain=..home.example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0010',
    sent: [],
  },
  {
    test: 'DOMAIN0011',
    received: ['foo=bar; domain=home..example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0011',
    sent: [],
  },
  {
    test: 'DOMAIN0012',
    received: ['foo=bar; domain=  .home.example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0012',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0013',
    received: ['foo=bar; domain=  .  home.example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0013',
    sent: [],
  },
  {
    test: 'DOMAIN0014',
    received: ['foo=bar; domain=home.example.org.'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0014',
    sent: [],
  },
  {
    test: 'DOMAIN0015',
    received: ['foo=bar; domain=home.example.org..'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0015',
    sent: [],
  },
  {
    test: 'DOMAIN0016',
    received: ['foo=bar; domain=home.example.org .'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0016',
    sent: [],
  },
  {
    test: 'DOMAIN0017',
    received: ['foo=bar; domain=.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0017',
    sent: [],
  },
  {
    test: 'DOMAIN0018',
    received: ['foo=bar; domain=.org.'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0018',
    sent: [],
  },
  {
    test: 'DOMAIN0019',
    received: [
      'foo=bar; domain=home.example.org',
      'foo2=bar2; domain=.home.example.org',
    ],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0019',
    sent: [
      { name: 'foo', value: 'bar' },
      { name: 'foo2', value: 'bar2' },
    ],
  },
  {
    test: 'DOMAIN0020',
    received: [
      'foo2=bar2; domain=.home.example.org',
      'foo=bar; domain=home.example.org',
    ],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0020',
    sent: [
      { name: 'foo2', value: 'bar2' },
      { name: 'foo', value: 'bar' },
    ],
  },
  {
    test: 'DOMAIN0021',
    received: ['foo=bar; domain="home.example.org"'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0021',
    sent: [],
  },
  {
    test: 'DOMAIN0022',
    received: [
      'foo=bar; domain=home.example.org',
      'foo2=bar2; domain=.example.org',
    ],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0022',
    sent: [
      { name: 'foo', value: 'bar' },
      { name: 'foo2', value: 'bar2' },
    ],
  },
  {
    test: 'DOMAIN0023',
    received: [
      'foo2=bar2; domain=.example.org',
      'foo=bar; domain=home.example.org',
    ],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0023',
    sent: [
      { name: 'foo2', value: 'bar2' },
      { name: 'foo', value: 'bar' },
    ],
  },
  {
    test: 'DOMAIN0024',
    received: ['foo=bar; domain=.example.org; domain=home.example.org'],
    'sent-to':
      'http://sibling.example.org:8888/cookie-parser-result?domain0024',
    sent: [],
  },
  {
    test: 'DOMAIN0025',
    received: ['foo=bar; domain=home.example.org; domain=.example.org'],
    'sent-to':
      'http://sibling.example.org:8888/cookie-parser-result?domain0025',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0026',
    received: ['foo=bar; domain=home.eXaMpLe.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0026',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0027',
    received: ['foo=bar; domain=home.example.org:8888'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0027',
    sent: [],
  },
  {
    test: 'DOMAIN0028',
    received: ['foo=bar; domain=subdomain.home.example.org'],
    'sent-to':
      'http://subdomain.home.example.org:8888/cookie-parser-result?domain0028',
    sent: [],
  },
  {
    test: 'DOMAIN0029',
    received: ['foo=bar'],
    'sent-to':
      'http://subdomain.home.example.org:8888/cookie-parser-result?domain0029',
    sent: [],
  },
  {
    test: 'DOMAIN0031',
    received: ['foo=bar; domain=home.example.org; domain=.example.org'],
    'sent-to':
      'http://sibling.example.org:8888/cookie-parser-result?domain0031',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0033',
    received: ['foo=bar; domain=home.example.org'],
    'sent-to': 'http://hoMe.eXaMplE.org:8888/cookie-parser-result?domain0033',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0034',
    received: ['foo=bar; domain=home.example.org; domain=home.example.com'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0034',
    sent: [],
  },
  {
    test: 'DOMAIN0035',
    received: ['foo=bar; domain=home.example.com; domain=home.example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0035',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0036',
    received: [
      'foo=bar; domain=home.example.org; domain=home.example.com; domain=home.example.org',
    ],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0036',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0037',
    received: [
      'foo=bar; domain=home.example.com; domain=home.example.org; domain=home.example.com',
    ],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0037',
    sent: [],
  },
  {
    test: 'DOMAIN0038',
    received: ['foo=bar; domain=home.example.org; domain=home.example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0038',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0039',
    received: ['foo=bar; domain=home.example.org; domain=example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0039',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0040',
    received: ['foo=bar; domain=example.org; domain=home.example.org'],
    'sent-to': 'http://home.example.org:8888/cookie-parser-result?domain0040',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'DOMAIN0041',
    received: ['foo=bar; domain=.sibling.example.org'],
    'sent-to':
      'http://sibling.example.org:8888/cookie-parser-result?domain0041',
    sent: [],
  },
  {
    test: 'DOMAIN0042',
    received: ['foo=bar; domain=.sibling.home.example.org'],
    'sent-to':
      'http://sibling.home.example.org:8888/cookie-parser-result?domain0042',
    sent: [],
  },
  {
    test: 'MOZILLA0001',
    received: ['foo=bar; max-age=-1'],
    sent: [],
  },
  {
    test: 'MOZILLA0002',
    received: ['foo=bar; max-age=0'],
    sent: [],
  },
  {
    test: 'MOZILLA0003',
    received: ['foo=bar; expires=Thu, 10 Apr 1980 16:33:12 GMT'],
    sent: [],
  },
  {
    test: 'MOZILLA0004',
    received: ['foo=bar; max-age=60'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'MOZILLA0005',
    received: ['foo=bar; max-age=-20'],
    sent: [],
  },
  {
    test: 'MOZILLA0006',
    received: ['foo=bar; max-age=60'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'MOZILLA0007',
    received: ['foo=bar; expires=Thu, 10 Apr 1980 16:33:12 GMT'],
    sent: [],
  },
  {
    test: 'MOZILLA0008',
    received: ['foo=bar; max-age=60', 'foo1=bar; max-age=60'],
    sent: [
      { name: 'foo', value: 'bar' },
      { name: 'foo1', value: 'bar' },
    ],
  },
  {
    test: 'MOZILLA0009',
    received: [
      'foo=bar; max-age=60',
      'foo1=bar; max-age=60',
      'foo=differentvalue; max-age=0',
    ],
    sent: [{ name: 'foo1', value: 'bar' }],
  },
  {
    test: 'MOZILLA0010',
    received: [
      'foo=bar; max-age=60',
      'foo1=bar; max-age=60',
      'foo=differentvalue; max-age=0',
      'foo2=evendifferentvalue; max-age=0',
    ],
    sent: [{ name: 'foo1', value: 'bar' }],
  },
  {
    test: 'MOZILLA0011',
    received: [
      'test=parser; domain=.parser.test; ;; ;=; ,,, ===,abc,=; abracadabra! max-age=20;=;;',
    ],
    sent: [],
  },
  {
    test: 'MOZILLA0012',
    received: [
      'test="fubar! = foo;bar\\";" parser; max-age=6',
      'five; max-age=2.63,',
    ],
    sent: [{ name: 'test', value: '"fubar! = foo' }],
  },
  {
    test: 'MOZILLA0013',
    received: ['test=kill; max-age=0', 'five; max-age=0'],
    sent: [],
  },
  {
    test: 'MOZILLA0014',
    received: ['six'],
    sent: [],
  },
  {
    test: 'MOZILLA0015',
    received: ['six', 'seven'],
    sent: [],
  },
  {
    test: 'MOZILLA0016',
    received: ['six', 'seven', ' =eight'],
    sent: [],
  },
  {
    test: 'MOZILLA0017',
    received: ['six', 'seven', ' =eight', 'test=six'],
    sent: [{ name: 'test', value: 'six' }],
  },
  {
    test: 'NAME0001',
    received: ['a=bar'],
    sent: [{ name: 'a', value: 'bar' }],
  },
  {
    test: 'NAME0002',
    received: ['1=bar'],
    sent: [{ name: '1', value: 'bar' }],
  },
  {
    test: 'NAME0003',
    received: ['$=bar'],
    sent: [{ name: '$', value: 'bar' }],
  },
  {
    test: 'NAME0004',
    received: ['!a=bar'],
    sent: [{ name: '!a', value: 'bar' }],
  },
  {
    test: 'NAME0005',
    received: ['@a=bar'],
    sent: [{ name: '@a', value: 'bar' }],
  },
  {
    test: 'NAME0006',
    received: ['#a=bar'],
    sent: [{ name: '#a', value: 'bar' }],
  },
  {
    test: 'NAME0007',
    received: ['$a=bar'],
    sent: [{ name: '$a', value: 'bar' }],
  },
  {
    test: 'NAME0008',
    received: ['%a=bar'],
    sent: [{ name: '%a', value: 'bar' }],
  },
  {
    test: 'NAME0009',
    received: ['^a=bar'],
    sent: [{ name: '^a', value: 'bar' }],
  },
  {
    test: 'NAME0010',
    received: ['&a=bar'],
    sent: [{ name: '&a', value: 'bar' }],
  },
  {
    test: 'NAME0011',
    received: ['*a=bar'],
    sent: [{ name: '*a', value: 'bar' }],
  },
  {
    test: 'NAME0012',
    received: ['(a=bar'],
    sent: [{ name: '(a', value: 'bar' }],
  },
  {
    test: 'NAME0013',
    received: [')a=bar'],
    sent: [{ name: ')a', value: 'bar' }],
  },
  {
    test: 'NAME0014',
    received: ['-a=bar'],
    sent: [{ name: '-a', value: 'bar' }],
  },
  {
    test: 'NAME0015',
    received: ['_a=bar'],
    sent: [{ name: '_a', value: 'bar' }],
  },
  {
    test: 'NAME0016',
    received: ['+=bar'],
    sent: [{ name: '+', value: 'bar' }],
  },
  {
    test: 'NAME0017',
    received: ['=a=bar'],
    sent: [],
  },
  {
    test: 'NAME0018',
    received: ['a =bar'],
    sent: [{ name: 'a', value: 'bar' }],
  },
  {
    test: 'NAME0019',
    received: ['"a=bar'],
    sent: [{ name: '"a', value: 'bar' }],
  },
  {
    test: 'NAME0020',
    received: ['"a=b"=bar'],
    sent: [{ name: '"a', value: 'b"=bar' }],
  },
  {
    test: 'NAME0021',
    received: ['"a=b"=bar', '"a=qux'],
    sent: [{ name: '"a', value: 'qux' }],
  },
  {
    test: 'NAME0022',
    received: ['   foo=bar'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'NAME0023',
    received: ['foo;bar=baz'],
    sent: [],
  },
  {
    test: 'NAME0024',
    received: ['$Version=1; foo=bar'],
    sent: [{ name: '$Version', value: '1' }],
  },
  {
    test: 'NAME0025',
    received: ['===a=bar'],
    sent: [],
  },
  {
    test: 'NAME0026',
    received: ['foo=bar    '],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'NAME0027',
    received: ['foo=bar    ;'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'NAME0028',
    received: ['=a'],
    sent: [],
  },
  {
    test: 'NAME0029',
    received: ['='],
    sent: [],
  },
  {
    test: 'NAME0030',
    received: ['foo bar=baz'],
    sent: [{ name: 'foo bar', value: 'baz' }],
  },
  {
    test: 'NAME0031',
    received: ['"foo;bar"=baz'],
    sent: [],
  },
  {
    test: 'NAME0032',
    received: ['"foo\\"bar;baz"=qux'],
    sent: [],
  },
  {
    test: 'NAME0033',
    received: ['=foo=bar', 'aaa'],
    sent: [],
  },
  {
    test: 'OPTIONAL_DOMAIN0030',
    received: ['foo=bar; domain='],
    'sent-to':
      'http://home.example.org:8888/cookie-parser-result?optional-domain0030',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'OPTIONAL_DOMAIN0041',
    received: ['foo=bar; domain=example.org; domain='],
    'sent-to':
      'http://home.example.org:8888/cookie-parser-result?optional-domain0041',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'OPTIONAL_DOMAIN0042',
    received: ['foo=bar; domain=foo.example.org; domain='],
    'sent-to':
      'http://home.example.org:8888/cookie-parser-result?optional-domain0042',
    sent: [],
  },
  {
    test: 'OPTIONAL_DOMAIN0043',
    received: ['foo=bar; domain=foo.example.org; domain='],
    'sent-to':
      'http://subdomain.home.example.org:8888/cookie-parser-result?optional-domain0043',
    sent: [],
  },
  {
    test: 'ORDERING0001',
    received: [
      'key=val0;',
      'key=val1; path=/cookie-parser-result',
      'key=val2; path=/',
      'key=val3; path=/bar',
      'key=val4; domain=.example.org',
      'key=val5; domain=.example.org; path=/cookie-parser-result/foo',
    ],
    'sent-to': '/cookie-parser-result/foo/baz?ordering0001',
    sent: [
      { name: 'key', value: 'val5' },
      { name: 'key', value: 'val1' },
      { name: 'key', value: 'val2' },
      { name: 'key', value: 'val4' },
    ],
  },
  {
    test: 'PATH0001',
    received: ['a=b; path=/', 'x=y; path=/cookie-parser-result'],
    sent: [
      { name: 'x', value: 'y' },
      { name: 'a', value: 'b' },
    ],
  },
  {
    test: 'PATH0002',
    received: ['a=b; path=/cookie-parser-result', 'x=y; path=/'],
    sent: [
      { name: 'a', value: 'b' },
      { name: 'x', value: 'y' },
    ],
  },
  {
    test: 'PATH0003',
    received: ['x=y; path=/', 'a=b; path=/cookie-parser-result'],
    sent: [
      { name: 'a', value: 'b' },
      { name: 'x', value: 'y' },
    ],
  },
  {
    test: 'PATH0004',
    received: ['x=y; path=/cookie-parser-result', 'a=b; path=/'],
    sent: [
      { name: 'x', value: 'y' },
      { name: 'a', value: 'b' },
    ],
  },
  {
    test: 'PATH0005',
    received: ['foo=bar; path=/cookie-parser-result/foo'],
    sent: [],
  },
  {
    test: 'PATH0006',
    received: ['foo=bar', 'foo=qux; path=/cookie-parser-result/foo'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0007',
    received: ['foo=bar; path=/cookie-parser-result/foo'],
    'sent-to': '/cookie-parser-result/foo?path0007',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0008',
    received: ['foo=bar; path=/cookie-parser-result/foo'],
    'sent-to': '/cookie-parser-result/bar?path0008',
    sent: [],
  },
  {
    test: 'PATH0009',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux'],
    'sent-to': '/cookie-parser-result/foo?path0009',
    sent: [],
  },
  {
    test: 'PATH0010',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux'],
    'sent-to': '/cookie-parser-result/foo/qux?path0010',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0011',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux'],
    'sent-to': '/cookie-parser-result/bar/qux?path0011',
    sent: [],
  },
  {
    test: 'PATH0012',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux'],
    'sent-to': '/cookie-parser-result/foo/baz?path0012',
    sent: [],
  },
  {
    test: 'PATH0013',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux/'],
    'sent-to': '/cookie-parser-result/foo/baz?path0013',
    sent: [],
  },
  {
    test: 'PATH0014',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux/'],
    'sent-to': '/cookie-parser-result/foo/qux?path0014',
    sent: [],
  },
  {
    test: 'PATH0015',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux/'],
    'sent-to': '/cookie-parser-result/foo/qux/?path0015',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0016',
    received: ['foo=bar; path=/cookie-parser-result/foo/'],
    'sent-to': '/cookie-parser-result/foo/qux?path0016',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0017',
    received: ['foo=bar; path=/cookie-parser-result/foo/'],
    'sent-to': '/cookie-parser-result/foo//qux?path0017',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0018',
    received: ['foo=bar; path=/cookie-parser-result/foo/'],
    'sent-to': '/cookie-parser-result/fooqux?path0018',
    sent: [],
  },
  {
    test: 'PATH0019',
    received: ['foo=bar; path'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0020',
    received: ['foo=bar; path='],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0021',
    received: ['foo=bar; path=/'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0022',
    received: ['foo=bar; path= /'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0023',
    received: ['foo=bar; Path=/cookie-PARSER-result'],
    sent: [],
  },
  {
    test: 'PATH0024',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux?'],
    'sent-to': '/cookie-parser-result/foo/qux?path0024',
    sent: [],
  },
  {
    test: 'PATH0025',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux#'],
    'sent-to': '/cookie-parser-result/foo/qux?path0025',
    sent: [],
  },
  {
    test: 'PATH0026',
    received: ['foo=bar; path=/cookie-parser-result/foo/qux;'],
    'sent-to': '/cookie-parser-result/foo/qux?path0026',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0027',
    received: ['foo=bar; path="/cookie-parser-result/foo/qux;"'],
    'sent-to': '/cookie-parser-result/foo/qux?path0027',
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0028',
    received: ['foo=bar; path=/cookie-parser-result/f%6Fo/bar'],
    'sent-to': '/cookie-parser-result/foo/bar?path0028',
    sent: [],
  },
  {
    test: 'PATH0029',
    received: [
      'a=b; \tpath\t=\t/cookie-parser-result\t',
      'x=y; \tpath\t=\t/book\t',
    ],
    sent: [{ name: 'a', value: 'b' }],
  },
  {
    test: 'PATH0030',
    received: ['foo=bar; path=/dog; path='],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'PATH0031',
    received: ['foo=bar; path=; path=/dog'],
    sent: [],
  },
  {
    test: 'PATH0032',
    received: [
      'foo=bar; path=/cookie-parser-result',
      'foo=qux; path=/cookie-parser-result/',
    ],
    'sent-to': '/cookie-parser-result/dog?path0032',
    sent: [
      { name: 'foo', value: 'qux' },
      { name: 'foo', value: 'bar' },
    ],
  },
  {
    test: 'VALUE0001',
    received: ['foo=  bar'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
  {
    test: 'VALUE0002',
    received: ['foo="bar"'],
    sent: [{ name: 'foo', value: '"bar"' }],
  },
  {
    test: 'VALUE0003',
    received: ['foo="  bar "'],
    sent: [{ name: 'foo', value: '"  bar "' }],
  },
  {
    test: 'VALUE0004',
    received: ['foo="bar;baz"'],
    sent: [{ name: 'foo', value: '"bar' }],
  },
  {
    test: 'VALUE0005',
    received: ['foo="bar=baz"'],
    sent: [{ name: 'foo', value: '"bar=baz"' }],
  },
  {
    test: 'VALUE0006',
    received: ['\tfoo\t=\tbar\t \t;\tttt'],
    sent: [{ name: 'foo', value: 'bar' }],
  },
] as const
