/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

"use strict";
let vows = require("vows");
let assert = require("assert");
let {Cookie} = require("../dist/cookie");

let LOTS_OF_SEMICOLONS = ";".repeat(65535);
let LOTS_OF_SPACES = " ".repeat(65535);

/**
 * Hacky workaround for the fact that vows complains "callback not fired" if a topic returns `undefined`.
 */
let SHOULD_BE_UNDEFINED = Symbol("vows breaks if you try to return `undefined` from a topic.")

vows
  .describe("Parsing")
  .addBatch({
    simple: {
      topic: function() {
        return Cookie.parse("a=bcd");
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "a");
      },
      value: function(c) {
        assert.equal(c.value, "bcd");
      },
      "no path": function(c) {
        assert.equal(c.path, null);
      },
      "no domain": function(c) {
        assert.equal(c.domain, null);
      },
      "no extensions": function(c) {
        assert.ok(!c.extensions);
      }
    },
    "with expiry": {
      topic: function() {
        return Cookie.parse("a=bcd; Expires=Tue, 18 Oct 2011 07:05:03 GMT");
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "a");
      },
      value: function(c) {
        assert.equal(c.value, "bcd");
      },
      "has expires": function(c) {
        assert.ok(
          c.expires !== Infinity,
          "expiry is infinite when it shouldn't be"
        );
        assert.equal(c.expires.getTime(), 1318921503000);
      }
    },
    "with expiry and path": {
      topic: function() {
        return Cookie.parse('abc="xyzzy!"; Expires=Tue, 18 Oct 2011 07:05:03 GMT; Path=/aBc');
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "abc");
      },
      value: function(c) {
        assert.equal(c.value, '"xyzzy!"');
      },
      "has expires": function(c) {
        assert.ok(
          c.expires !== Infinity,
          "expiry is infinite when it shouldn't be"
        );
        assert.equal(c.expires.getTime(), 1318921503000);
      },
      "has path": function(c) {
        assert.equal(c.path, "/aBc");
      },
      "no httponly or secure": function(c) {
        assert.ok(!c.httpOnly);
        assert.ok(!c.secure);
      }
    },
    "with most things": {
      topic: function() {
        return Cookie.parse(
          'abc="xyzzy!"; Expires=Tue, 18 Oct 2011 07:05:03 GMT; Path=/aBc; Domain=example.com; Secure; HTTPOnly; Max-Age=1234; Foo=Bar; Baz'
        );
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "abc");
      },
      value: function(c) {
        assert.equal(c.value, '"xyzzy!"');
      },
      "has expires": function(c) {
        assert.ok(
          c.expires !== Infinity,
          "expiry is infinite when it shouldn't be"
        );
        assert.equal(c.expires.getTime(), 1318921503000);
      },
      "has path": function(c) {
        assert.equal(c.path, "/aBc");
      },
      "has domain": function(c) {
        assert.equal(c.domain, "example.com");
      },
      "has httponly": function(c) {
        assert.equal(c.httpOnly, true);
      },
      "has secure": function(c) {
        assert.equal(c.secure, true);
      },
      "has max-age": function(c) {
        assert.equal(c.maxAge, 1234);
      },
      "has same-site 'undefined'": function(c) {
        assert.equal(c.sameSite, undefined);
      },
      "has extensions": function(c) {
        assert.ok(c.extensions);
        assert.equal(c.extensions[0], "Foo=Bar");
        assert.equal(c.extensions[1], "Baz");
      }
    },
    "invalid expires": function() {
      let c = Cookie.parse("a=b; Expires=xyzzy");
      assert.ok(c);
      assert.equal(c.expires, Infinity);
    },
    "zero max-age": function() {
      let c = Cookie.parse("a=b; Max-Age=0");
      assert.ok(c);
      assert.equal(c.maxAge, 0);
    },
    "negative max-age": function() {
      let c = Cookie.parse("a=b; Max-Age=-1");
      assert.ok(c);
      assert.equal(c.maxAge, -1);
    },
    "empty domain": function() {
      let c = Cookie.parse("a=b; domain=");
      assert.ok(c);
      assert.equal(c.domain, null);
    },
    "dot domain": function() {
      let c = Cookie.parse("a=b; domain=.");
      assert.ok(c);
      assert.equal(c.domain, null);
    },
    "uppercase domain": function() {
      let c = Cookie.parse("a=b; domain=EXAMPLE.COM");
      assert.ok(c);
      assert.equal(c.domain, "example.com");
    },
    "trailing dot in domain": {
      topic: function() {
        return Cookie.parse("a=b; Domain=example.com.", true);
      },
      "has the domain": function(c) {
        assert.equal(c.domain, "example.com.");
      },
      "but doesn't validate": function(c) {
        assert.equal(c.validate(), false);
      }
    },
    "empty path": function() {
      let c = Cookie.parse("a=b; path=");
      assert.ok(c);
      assert.equal(c.path, null);
    },
    "no-slash path": function() {
      let c = Cookie.parse("a=b; path=xyzzy");
      assert.ok(c);
      assert.equal(c.path, null);
    },
    "trailing semi-colons after path": {
      topic: function() {
        return ["a=b; path=/;", "c=d;;;;"];
      },
      "strips semi-colons": function(t) {
        let c1 = Cookie.parse(t[0]);
        let c2 = Cookie.parse(t[1]);
        assert.ok(c1);
        assert.ok(c2);
        assert.equal(c1.path, "/");
      }
    },
    "secure-with-value": function() {
      let c = Cookie.parse("a=b; Secure=xyzzy");
      assert.ok(c);
      assert.equal(c.secure, true);
    },
    "httponly-with-value": function() {
      let c = Cookie.parse("a=b; HttpOnly=xyzzy");
      assert.ok(c);
      assert.equal(c.httpOnly, true);
    },
    garbage: {
      topic: function() {
        return Cookie.parse("\x08", true) ?? SHOULD_BE_UNDEFINED;
      },
      "doesn't parse": function(c) {
        assert.equal(c, SHOULD_BE_UNDEFINED);
      }
    },
    "public suffix domain": {
      topic: function() {
        return Cookie.parse("a=b; domain=kyoto.jp", true);
      },
      "parses fine": function(c) {
        assert.ok(c);
        assert.equal(c.domain, "kyoto.jp");
      },
      "but fails validation": function(c) {
        assert.ok(c);
        assert.ok(!c.validate());
      }
    },
    "public suffix foonet.net": {
      "top level": {
        topic: function() {
          return Cookie.parse("a=b; domain=foonet.net");
        },
        "parses and is valid": function(c) {
          assert.ok(c);
          assert.equal(c.domain, "foonet.net");
          assert.ok(c.validate());
        }
      },
      www: {
        topic: function() {
          return Cookie.parse("a=b; domain=www.foonet.net");
        },
        "parses and is valid": function(c) {
          assert.ok(c);
          assert.equal(c.domain, "www.foonet.net");
          assert.ok(c.validate());
        }
      },
      "with a dot": {
        topic: function() {
          return Cookie.parse("a=b; domain=.foonet.net");
        },
        "parses and is valid": function(c) {
          assert.ok(c);
          assert.equal(c.domain, "foonet.net");
          assert.ok(c.validate());
        }
      }
    },
    "Ironically, Google 'GAPS' cookie has very little whitespace": {
      topic: function() {
        return Cookie.parse(
          "GAPS=1:A1aaaaAaAAa1aaAaAaaAAAaaa1a11a:aaaAaAaAa-aaaA1-;Path=/;Expires=Thu, 17-Apr-2014 02:12:29 GMT;Secure;HttpOnly"
        );
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "GAPS");
      },
      value: function(c) {
        assert.equal(
          c.value,
          "1:A1aaaaAaAAa1aaAaAaaAAAaaa1a11a:aaaAaAaAa-aaaA1-"
        );
      },
      path: function(c) {
        assert.notEqual(c.path, "/;Expires"); // BUG
        assert.equal(c.path, "/");
      },
      expires: function(c) {
        assert.notEqual(c.expires, Infinity);
        assert.equal(c.expires.getTime(), 1397700749000);
      },
      secure: function(c) {
        assert.ok(c.secure);
      },
      httponly: function(c) {
        assert.ok(c.httpOnly);
      }
    },
    "lots of equal signs": {
      topic: function() {
        return Cookie.parse(
          "queryPref=b=c&d=e; Path=/f=g; Expires=Thu, 17 Apr 2014 02:12:29 GMT; HttpOnly"
        );
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "queryPref");
      },
      value: function(c) {
        assert.equal(c.value, "b=c&d=e");
      },
      path: function(c) {
        assert.equal(c.path, "/f=g");
      },
      expires: function(c) {
        assert.notEqual(c.expires, Infinity);
        assert.equal(c.expires.getTime(), 1397700749000);
      },
      httponly: function(c) {
        assert.ok(c.httpOnly);
      }
    },
    "spaces in value": {
      topic: function() {
        return Cookie.parse("a=one two three", false);
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "a");
      },
      value: function(c) {
        assert.equal(c.value, "one two three");
      },
      "no path": function(c) {
        assert.equal(c.path, null);
      },
      "no domain": function(c) {
        assert.equal(c.domain, null);
      },
      "no extensions": function(c) {
        assert.ok(!c.extensions);
      }
    },
    "quoted spaces in value": {
      topic: function() {
        return Cookie.parse('a="one two three"', false);
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "a");
      },
      value: function(c) {
        assert.equal(c.value, '"one two three"');
      },
      "no path": function(c) {
        assert.equal(c.path, null);
      },
      "no domain": function(c) {
        assert.equal(c.domain, null);
      },
      "no extensions": function(c) {
        assert.ok(!c.extensions);
      }
    },
    "non-ASCII in value": {
      topic: function() {
        return Cookie.parse("farbe=weiß", false);
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "farbe");
      },
      value: function(c) {
        assert.equal(c.value, "weiß");
      },
      "no path": function(c) {
        assert.equal(c.path, null);
      },
      "no domain": function(c) {
        assert.equal(c.domain, null);
      },
      "no extensions": function(c) {
        assert.ok(!c.extensions);
      }
    },
    "empty key": {
      topic: function() {
        return Cookie.parse("=abc", { loose: true });
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "");
      },
      value: function(c) {
        assert.equal(c.value, "abc");
      },
      "no path": function(c) {
        assert.equal(c.path, null);
      },
      "no domain": function(c) {
        assert.equal(c.domain, null);
      },
      "no extensions": function(c) {
        assert.ok(!c.extensions);
      }
    },
    "non-existent key": {
      topic: function() {
        return Cookie.parse("abc", { loose: true });
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "");
      },
      value: function(c) {
        assert.equal(c.value, "abc");
      },
      "no path": function(c) {
        assert.equal(c.path, null);
      },
      "no domain": function(c) {
        assert.equal(c.domain, null);
      },
      "no extensions": function(c) {
        assert.ok(!c.extensions);
      }
    },
    "weird format": {
      topic: function() {
        return Cookie.parse("=foo=bar", { loose: true });
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "foo");
      },
      value: function(c) {
        assert.equal(c.value, "bar");
      },
      "no path": function(c) {
        assert.equal(c.path, null);
      },
      "no domain": function(c) {
        assert.equal(c.domain, null);
      },
      "no extensions": function(c) {
        assert.ok(!c.extensions);
      }
    },
    "way too many semicolons followed by non-semicolon": {
      topic: function() {
        // takes abnormally long due to semi-catastrophic regexp backtracking
        let str = `foo=bar${LOTS_OF_SEMICOLONS} domain=example.com`;
        return Cookie.parse(str);
      },
      parsed: function(c) {
        assert.ok(c);
      },
      key: function(c) {
        assert.equal(c.key, "foo");
      },
      value: function(c) {
        assert.equal(c.value, "bar");
      },
      "no path": function(c) {
        assert.equal(c.path, null);
      },
      "no domain": function(c) {
        assert.equal(c.domain, "example.com");
      },
      "no extensions": function(c) {
        assert.ok(!c.extensions);
      }
    },
    "way too many spaces": {
      topic: function() {
        // takes abnormally long due to semi-catastrophic regexp backtracking
        let str1 = `x${LOTS_OF_SPACES}x`;
        let str2 = "x x";
        let t0 = Date.now();
        let cookie1 = Cookie.parse(str1);
        let t1 = Date.now();
        let cookie2 = Cookie.parse(str2);
        let t2 = Date.now();
        return {
          cookie1: cookie1,
          cookie2: cookie2,
          dt1: t1 - t0,
          dt2: t2 - t1
        };
      },
      "large one doesn't parse": function(c) {
        assert.strictEqual(c.cookie1, undefined);
      },
      "small one doesn't parse": function(c) {
        assert.strictEqual(c.cookie2, undefined);
      },
      "takes about the same time for each": function(c) {
        let long1 = c.dt1 + 1; // avoid 0ms
        let short2 = c.dt2 + 1; // avoid 0ms
        let ratio = Math.abs(long1 / short2);
        assert.lesser(ratio, 250); // if broken, goes 2000-4000x
      }
    },
    "way too many spaces with value": {
      topic: function() {
        // takes abnormally long due to semi-catastrophic regexp backtracking
        let str1 = `x${LOTS_OF_SPACES}=x`;
        let str2 = "x =x";
        let t0 = Date.now();
        let cookie1 = Cookie.parse(str1);
        let t1 = Date.now();
        let cookie2 = Cookie.parse(str2);
        let t2 = Date.now();
        return {
          cookie1: cookie1,
          cookie2: cookie2,
          dt1: t1 - t0,
          dt2: t2 - t1
        };
      },
      "large one parses": function(c) {
        assert.ok(c.cookie1);
        assert.equal(c.cookie1.key, "x");
        assert.equal(c.cookie1.value, "x");
      },
      "small one parses": function(c) {
        assert.ok(c.cookie2);
        assert.equal(c.cookie2.key, "x");
        assert.equal(c.cookie2.value, "x");
      },
      "takes about the same time for each": function(c) {
        let long1 = c.dt1 + 1; // avoid 0ms
        let short2 = c.dt2 + 1; // avoid 0ms
        let ratio = Math.abs(long1 / short2);
        assert.lesser(ratio, 250); // if broken, goes 2000-4000x
      }
    },
    "way too many spaces in loose mode": {
      topic: function() {
        // takes abnormally long due to semi-catastrophic regexp backtracking
        let str1 = `x${LOTS_OF_SPACES}x`;
        let str2 = "x x";
        let t0 = Date.now();
        let cookie1 = Cookie.parse(str1, { loose: true });
        let t1 = Date.now();
        let cookie2 = Cookie.parse(str2, { loose: true });
        let t2 = Date.now();
        return {
          cookie1: cookie1,
          cookie2: cookie2,
          dt1: t1 - t0,
          dt2: t2 - t1
        };
      },
      "large one parses": function(c) {
        assert.ok(c.cookie1);
        assert.equal(c.cookie1.key, "");
        assert.equal(c.cookie1.value, `x${LOTS_OF_SPACES}x`);
      },
      "small one parses": function(c) {
        assert.ok(c.cookie2);
        assert.equal(c.cookie2.key, "");
        assert.equal(c.cookie2.value, "x x");
      },
      "takes about the same time for each": function(c) {
        let long1 = c.dt1 + 1; // avoid 0ms
        let short2 = c.dt2 + 1; // avoid 0ms
        let ratio = Math.abs(long1 / short2);
        assert.lesser(ratio, 250); // if broken, goes 2000-4000x
      }
    },
    "way too many spaces with value in loose mode": {
      topic: function() {
        // takes abnormally long due to semi-catastrophic regexp backtracking
        let str1 = `x${LOTS_OF_SPACES}=x`;
        let str2 = "x =x";
        let t0 = Date.now();
        let cookie1 = Cookie.parse(str1, { loose: true });
        let t1 = Date.now();
        let cookie2 = Cookie.parse(str2, { loose: true });
        let t2 = Date.now();
        return {
          cookie1: cookie1,
          cookie2: cookie2,
          dt1: t1 - t0,
          dt2: t2 - t1
        };
      },
      "large one parses": function(c) {
        assert.ok(c.cookie1);
        assert.equal(c.cookie1.key, "x");
        assert.equal(c.cookie1.value, "x");
      },
      "small one parses": function(c) {
        assert.ok(c.cookie2);
        assert.equal(c.cookie2.key, "x");
        assert.equal(c.cookie2.value, "x");
      },
      "takes about the same time for each": function(c) {
        let long1 = c.dt1 + 1; // avoid 0ms
        let short2 = c.dt2 + 1; // avoid 0ms
        let ratio = Math.abs(long1 / short2);
        assert.lesser(ratio, 250); // if broken, goes 2000-4000x
      }
    },

    "same-site": {
      lax: {
        topic: function() {
          return Cookie.parse("abc=xyzzy; SameSite=Lax");
        },
        parsed: function(c) {
          assert.ok(c);
        },
        "is lax (lowercased)": function(c) {
          assert.equal(c.sameSite, "lax");
        },
        "no extensions": function(c) {
          assert.equal(c.extensions, null);
        }
      },
      strict: {
        topic: function() {
          return Cookie.parse("abc=xyzzy; SameSite=StRiCt");
        },
        parsed: function(c) {
          assert.ok(c);
        },
        "is strict (lowercased)": function(c) {
          assert.equal(c.sameSite, "strict");
        },
        "no extensions": function(c) {
          assert.equal(c.extensions, null);
        }
      },
      none: {
        topic: function() {
          return Cookie.parse("abc=xyz; SameSite=NoNe");
        },
        parsed: function(c) {
          assert.ok(c);
        },
        "is none (lowercased)": function(c) {
          assert.equal(c.sameSite, "none");
        },
        "no extensions": function(c) {
          assert.equal(c.extensions, null);
        }
      },
      bad: {
        topic: function() {
          return Cookie.parse("abc=xyzzy; SameSite=example.com");
        },
        parsed: function(c) {
          assert.ok(c);
        },
        "is set to 'undefined'": function(c) {
          assert.equal(c.sameSite, undefined);
        },
        "no extensions": function(c) {
          assert.equal(c.extensions, null);
        }
      },
      absent: {
        topic: function() {
          return Cookie.parse("abc=xyzzy;");
        },
        parsed: function(c) {
          assert.ok(c);
        },
        "is set to 'undefined'": function(c) {
          assert.equal(c.sameSite, undefined);
        },
        "no extensions": function(c) {
          assert.equal(c.extensions, null);
        }
      }
    },
    "empty string": {
      topic: function() {
        return Cookie.parse("") ?? SHOULD_BE_UNDEFINED;
      },
      "is empty": function(c) {
        assert.equal(c, SHOULD_BE_UNDEFINED)
      }
    },
    "missing string": {
      topic: function() {
        return Cookie.parse() ?? SHOULD_BE_UNDEFINED;
      },
      "is empty": function(c) {
        assert.equal(c, SHOULD_BE_UNDEFINED);
      }
    },
    "some string object": {
      topic: function() {
        return Cookie.parse(new String("")) ?? SHOULD_BE_UNDEFINED;
      },
      "is empty": function(c) {
        assert.equal(c, SHOULD_BE_UNDEFINED);
      }
    },
    "some empty string object": {
      topic: function() {
        return Cookie.parse(new String()) ?? SHOULD_BE_UNDEFINED;
      },
      "is empty": function(c) {
        assert.equal(c, SHOULD_BE_UNDEFINED);
      }
    }
  })
  .export(module);
