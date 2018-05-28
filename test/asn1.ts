'use strict'
// **Github:** https://github.com/fidm/asn1
//
// **License:** MIT

import fs from 'fs'
import { strictEqual, ok } from 'assert'
import { suite, it } from 'tman'
import { PEM, ASN1, Class, Tag } from '../src/index'

suite('ASN1', function () {
  it('should work', function () {
    const blocks = PEM.parse(fs.readFileSync('./test/cert/github.crt'))
    const asn1 = ASN1.fromDER(blocks[0].body, true)
    strictEqual(asn1.class, Class.UNIVERSAL)
    strictEqual(asn1.tag, Tag.SEQUENCE)
    ok(Array.isArray(asn1.value))
    ok(JSON.stringify(asn1.toJSON()).includes('github.com'))
  })
})
